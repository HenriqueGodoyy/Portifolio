"use client";

import Link from "next/link";
import { ContactLinks } from "@/components/ContactLinks";
import { Ring } from "@/components/Ring";
import { SiteHeader } from "@/components/SiteHeader";
import { projects, stats, type Category } from "@/content/projects";
import { dict, useLocale } from "@/lib/i18n";

const categories: Category[] = ["web", "security", "study"];

const underline: Record<Category | "contact", string> = {
  web: "decoration-web",
  security: "decoration-security",
  study: "decoration-study",
  contact: "decoration-ink",
};

function PitchLink({
  href,
  tone,
  index,
  children,
}: {
  href: string;
  tone: Category | "contact";
  index: number;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`underline decoration-[0.09em] underline-offset-[0.14em] transition-opacity hover:opacity-60 ${underline[tone]}`}
    >
      {children}
      <sup className="ml-[0.2em] inline-block font-mono text-[0.3em] tracking-wider text-muted">
        0{index}
      </sup>
    </a>
  );
}

export function Home() {
  const locale = useLocale();
  const t = dict[locale];

  return (
    <>
      <div className="flex h-dvh min-h-[560px] flex-col gap-4 p-4 sm:gap-5 sm:p-6">
        <SiteHeader />

        <main id="top" className="min-h-0 flex-1">
          <Ring />
        </main>

        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <h1 className="max-w-[22em] font-display text-[clamp(1.7rem,3.4vw,3rem)] leading-[1.08] text-balance">
            {t.pitch.a}
            <PitchLink href="#web" tone="web" index={1}>
              {t.pitch.web}
            </PitchLink>
            {t.pitch.b}
            <PitchLink href="#security" tone="security" index={2}>
              {t.pitch.security}
            </PitchLink>
            {t.pitch.c}
            <PitchLink href="#study" tone="study" index={3}>
              {t.pitch.study}
            </PitchLink>
            {t.pitch.d}
            <PitchLink href="#contact" tone="contact" index={4}>
              {t.pitch.contact}
            </PitchLink>
            {t.pitch.e}
          </h1>
          <dl className="flex shrink-0 gap-7 sm:gap-9">
            {(
              [
                [stats.repositories, t.stats.repositories],
                [stats.languages, t.stats.languages],
                [stats.since, t.stats.since],
              ] as const
            ).map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  {label}
                </dt>
                <dd className="font-display text-4xl leading-none tabular-nums sm:text-5xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        {categories.map((c, ci) => (
          <section key={c} id={c} className="scroll-mt-8 border-t border-line pt-8 pb-14">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-mono text-xs tracking-[0.18em] text-muted">0{ci + 1}</span>
              <h2 className="font-display text-4xl sm:text-5xl">{t.sections[c]}</h2>
            </div>
            <ul>
              {projects
                .filter((p) => p.category === c)
                .map((p) => (
                  <li
                    key={p.slug}
                    className="grid grid-cols-1 gap-x-6 gap-y-1 border-t border-line py-5 sm:grid-cols-[1fr_1.4fr_auto] sm:items-baseline"
                  >
                    <h3 className="font-display text-2xl sm:text-3xl">
                      <Link
                        href={`/projetos/${p.slug}`}
                        className="transition-opacity hover:opacity-60"
                      >
                        {p.name}
                      </Link>
                    </h3>
                    <p className="text-[15px] leading-relaxed text-ink/75">
                      {p.description[locale]}
                      <span className="ml-2 font-mono text-[11px] tracking-wider text-muted uppercase">
                        {p.tech}
                      </span>
                    </p>
                    <div className="flex gap-4 font-mono text-xs tracking-[0.14em] uppercase">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-4 hover:opacity-60"
                        >
                          {t.live} ↗
                        </a>
                      )}
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 hover:opacity-60"
                      >
                        {t.code} ↗
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        ))}

        <section id="contact" className="scroll-mt-8 border-t border-line pt-8">
          <h2 className="font-display text-4xl sm:text-5xl">{t.contactTitle}</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/75">{t.contactBody}</p>
          <ContactLinks />
          <Link
            href="/sobre"
            className="mt-8 inline-block rounded-full bg-ink px-6 py-3 font-mono text-xs tracking-[0.16em] text-paper uppercase transition-opacity hover:opacity-80"
          >
            {t.contactCta} →
          </Link>
        </section>
      </div>
    </>
  );
}
