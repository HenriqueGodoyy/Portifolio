"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { palette, projects } from "@/content/projects";
import { dict, useLocale } from "@/lib/i18n";

export function ProjectView({
  slug,
  pt,
  en,
}: {
  slug: string;
  pt: React.ReactNode;
  en: React.ReactNode;
}) {
  const locale = useLocale();
  const t = dict[locale];
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const colors = palette[project.category];

  return (
    <div className="flex min-h-dvh flex-col gap-4 p-4 sm:gap-5 sm:p-6">
      <SiteHeader />

      <main className="flex-1">
        <div
          className="flex min-h-[46vh] flex-col justify-between gap-12 overflow-hidden rounded-[28px] p-6 sm:p-10"
          style={{
            color: colors.fg,
            background: project.image
              ? `linear-gradient(rgb(0 0 0 / 0.25), rgb(0 0 0 / 0.8)), url(${project.image}) center / cover`
              : colors.bg,
          }}
        >
          <div className="flex items-start justify-between gap-4 font-mono text-xs tracking-[0.16em] uppercase">
            <Link href={`/#${project.category}`} className="hover:opacity-70">
              ← {t.back}
            </Link>
            <span className="text-right">
              {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} ·{" "}
              {t.sections[project.category]}
            </span>
          </div>

          <div>
            <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] text-balance">
              {project.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-snug opacity-90">
              {project.description[locale]}
            </p>
            {project.stack.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] tracking-[0.12em] uppercase">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full px-3 py-1.5"
                    style={{ background: colors.chip }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 px-1 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:gap-20">
          <article className="max-w-2xl">{locale === "pt" ? pt : en}</article>
          <aside className="flex flex-col items-start gap-3 font-mono text-xs tracking-[0.16em] uppercase">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-ink px-6 py-3 text-paper transition-opacity hover:opacity-80"
              >
                {t.openLive} ↗
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink px-6 py-3 transition-colors hover:bg-ink hover:text-paper"
            >
              {t.openCode} ↗
            </a>
          </aside>
        </div>
      </main>

      <nav className="grid grid-cols-2 gap-4 border-t border-line pt-5 pb-2">
        <Link href={`/projetos/${previous.slug}`} className="group">
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            ← {t.previous}
          </span>
          <span className="block font-display text-2xl transition-opacity group-hover:opacity-60 sm:text-4xl">
            {previous.name}
          </span>
        </Link>
        <Link href={`/projetos/${next.slug}`} className="group text-right">
          <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            {t.next} →
          </span>
          <span className="block font-display text-2xl transition-opacity group-hover:opacity-60 sm:text-4xl">
            {next.name}
          </span>
        </Link>
      </nav>
    </div>
  );
}
