"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { palette, projects, type Project } from "@/content/projects";
import { dict, useLocale } from "@/lib/i18n";

// O anel precisa de cards suficientes para fechar o círculo: repete a lista.
const MIN_CARDS = 14;
const items: Project[] = Array.from(
  { length: Math.ceil(MIN_CARDS / projects.length) * projects.length },
  (_, i) => projects[i % projects.length],
);
const STEP = 360 / items.length;
const DEG_PER_SECOND = 4;

type Geometry = { radius: number; perspective: number; back: number; cardW: number; cardH: number };

/**
 * A câmera fica atrás do centro do anel, olhando para os cards do lado de
 * dentro. `back` é escolhido para que o card no ângulo `view` caia exatamente
 * na borda da janela.
 */
function geometry(w: number, h: number): Geometry {
  const radius = w * 0.58;
  const perspective = radius * 1.4;
  const baseW = ((radius * 2 * Math.PI) / items.length) * 0.8;
  const baseH = baseW * 1.5;
  let result: Geometry = { radius, perspective, back: 0, cardW: baseW, cardH: baseH };
  // Janelas altas e estreitas mostram menos cards, maiores: fecha o ângulo de
  // visão até o card central ocupar perto de metade da altura.
  for (const degrees of [80, 70, 60, 50, 40, 32]) {
    const view = (degrees * Math.PI) / 180;
    const back = (perspective * radius * Math.sin(view)) / (w / 2) - radius * Math.cos(view);
    const centerScale = perspective / (radius + back);
    const edgeScale = perspective / (radius * Math.cos(view) + back);
    let cardH = baseH;
    let cardW = baseW;
    const maxH = (h * 0.8) / edgeScale;
    if (cardH > maxH) {
      cardH = maxH;
      cardW = cardH / 1.5;
    }
    result = { radius, perspective, back, cardW, cardH };
    if (cardH * centerScale >= h * 0.46) break;
  }
  return result;
}

function normalize(deg: number) {
  return ((((deg + 180) % 360) + 360) % 360) - 180;
}

export function Ring() {
  const stage = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const rotation = useMotionValue(0);
  const reduced = useReducedMotion();
  const paused = useRef(false);
  const drag = useRef({ active: false, x: 0, moved: 0 });
  const locale = useLocale();

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const geo = useMemo(() => geometry(size.w, size.h), [size]);

  useAnimationFrame((_, delta) => {
    if (reduced || paused.current || drag.current.active) return;
    rotation.set(rotation.get() + (Math.min(delta, 64) / 1000) * DEG_PER_SECOND);
  });

  const turn = (deg: number) => rotation.set(rotation.get() + deg);

  return (
    <div
      ref={stage}
      role="group"
      aria-label={locale === "pt" ? "Carrossel de projetos" : "Project carousel"}
      tabIndex={0}
      className="stage relative h-full w-full cursor-grab touch-pan-y overflow-hidden rounded-[28px] outline-offset-4 select-none active:cursor-grabbing"
      style={
        {
          perspective: geo.perspective || undefined,
          "--depth": `${geo.perspective - geo.back}px`,
          "--radius": `${-geo.radius}px`,
        } as React.CSSProperties
      }
      onPointerEnter={() => (paused.current = true)}
      onPointerLeave={() => {
        paused.current = false;
        drag.current.active = false;
      }}
      onPointerDown={(e) => {
        drag.current = { active: true, x: e.clientX, moved: 0 };
      }}
      onPointerMove={(e) => {
        if (!drag.current.active) return;
        const dx = e.clientX - drag.current.x;
        drag.current.x = e.clientX;
        drag.current.moved += Math.abs(dx);
        turn((-dx * 90) / Math.max(size.w, 1));
      }}
      onPointerUp={() => (drag.current.active = false)}
      onPointerCancel={() => (drag.current.active = false)}
      onClickCapture={(e) => {
        // um arrasto não deve abrir o link do card
        if (drag.current.moved > 6) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") turn(-STEP);
        if (e.key === "ArrowRight") turn(STEP);
      }}
    >
      {size.w > 0 &&
        items.map((project, i) => (
          <Card
            key={i}
            project={project}
            index={i}
            rotation={rotation}
            geo={geo}
            description={project.description[locale]}
          />
        ))}
      <p className="pointer-events-none absolute bottom-4 left-5 font-mono text-[11px] tracking-[0.18em] text-white/50 uppercase">
        ← {dict[locale].hint} →
      </p>
    </div>
  );
}

function Card({
  project,
  index,
  rotation,
  geo,
  description,
}: {
  project: Project;
  index: number;
  rotation: MotionValue<number>;
  geo: Geometry;
  description: string;
}) {
  const base = index * STEP;
  // Cards do lado da câmera ficam de costas e são escondidos.
  const facing = useTransform(rotation, (r) => Math.abs(normalize(base + r)) < 100);
  const opacity = useTransform(facing, (f) => (f ? 1 : 0));
  const pointerEvents = useTransform(facing, (f) => (f ? "auto" : "none"));
  // Cada card carrega a transformação inteira (sem um contêiner 3D girando):
  // um contêiner posicionado atrás da câmera faz o Chrome descartar os filhos.
  const transform = useTransform(
    rotation,
    (r) => `translateZ(var(--depth)) rotateY(${base + r}deg) translateZ(var(--radius))`,
  );
  const colors = palette[project.category];
  const number = String((index % projects.length) + 1).padStart(2, "0");

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        width: geo.cardW,
        height: geo.cardH,
        marginLeft: -geo.cardW / 2,
        marginTop: -geo.cardH / 2,
        transform,
        opacity,
        pointerEvents,
        backfaceVisibility: "hidden",
        fontSize: geo.cardW / 16,
      }}
    >
      <Link
        href={`/projetos/${project.slug}`}
        draggable={false}
        className="flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.4em] p-[1.3em] shadow-[0_1.5em_3em_rgb(0_0_0/0.35)] transition-[filter] hover:brightness-110"
        style={{
          color: colors.fg,
          background: project.image
            ? `linear-gradient(rgb(0 0 0 / 0.1), rgb(0 0 0 / 0.75)), url(${project.image}) center / cover`
            : colors.bg,
        }}
      >
        <div className="flex items-start justify-between font-mono text-[0.8em] tracking-[0.12em] uppercase">
          <span>{number}</span>
          <span className="rounded-full px-[0.8em] py-[0.3em]" style={{ background: colors.chip }}>
            {project.tech}
          </span>
        </div>
        <div>
          <h3 className="font-display text-[2.7em] leading-[0.95]">{project.name}</h3>
          <p className="mt-[0.7em] text-[0.95em] leading-snug opacity-85">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
