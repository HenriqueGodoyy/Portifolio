"use client";

import Link from "next/link";
import { ContactLinks } from "@/components/ContactLinks";
import { SiteHeader } from "@/components/SiteHeader";
import { about, stack } from "@/content/profile";
import { useLocale } from "@/lib/i18n";

export function About() {
  const locale = useLocale();
  const t = about[locale];

  return (
    <div className="flex min-h-dvh flex-col gap-4 p-4 sm:gap-5 sm:p-6">
      <SiteHeader />

      <main className="flex-1">
        <div className="stage flex min-h-[46vh] flex-col justify-between gap-12 overflow-hidden rounded-[28px] p-6 text-white sm:p-10">
          <p className="font-mono text-xs tracking-[0.16em] text-white/60 uppercase">{t.title}</p>
          <h1 className="max-w-[18em] font-display text-[clamp(2.2rem,5.6vw,4.8rem)] leading-[1.02] text-balance">
            {t.lead}
          </h1>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 px-1 py-12 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            {t.body.map((paragraph) => (
              <p key={paragraph} className="mb-5 text-lg leading-relaxed text-ink/80">
                {paragraph}
              </p>
            ))}
            <Link
              href="/#web"
              className="mt-4 inline-block rounded-full bg-ink px-6 py-3 font-mono text-xs tracking-[0.16em] text-paper uppercase transition-opacity hover:opacity-80"
            >
              {t.projectsCta} →
            </Link>
          </div>

          <dl className="border-t border-line">
            {t.facts.map(([label, value]) => (
              <div key={label} className="border-b border-line py-4">
                <dt className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                  {label}
                </dt>
                <dd className="mt-1 font-display text-2xl leading-tight">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto max-w-5xl px-1 pb-16">
          <section className="border-t border-line pt-8 pb-12">
            <h2 className="font-display text-3xl sm:text-4xl">{t.stackTitle}</h2>
            <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs tracking-[0.12em] uppercase">
              {stack.map((item) => (
                <li key={item} className="rounded-full border border-ink/25 px-4 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-line pt-8">
            <h2 className="font-display text-3xl sm:text-4xl">{t.contactTitle}</h2>
            <ContactLinks />
          </section>
        </div>
      </main>
    </div>
  );
}
