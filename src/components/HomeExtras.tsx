"use client";

import { Journey } from "@/components/Journey";
import { about, githubUser, now } from "@/content/profile";
import type { RepoActivity } from "@/lib/github";
import { useLocale } from "@/lib/i18n";

function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="font-mono text-xs tracking-[0.18em] text-muted">{number}</span>
      <h2 className="font-display text-4xl sm:text-5xl">{children}</h2>
    </div>
  );
}

/** Seções da home depois dos projetos: agora, trajetória e GitHub. */
export function HomeExtras({ activity }: { activity: RepoActivity[] }) {
  const locale = useLocale();
  const t = about[locale];
  const date = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <section id="now" className="scroll-mt-8 border-t border-line pt-8 pb-14">
        <SectionTitle number="04">{t.nowTitle}</SectionTitle>
        <ul className="grid gap-4 sm:grid-cols-3">
          {now.map((item, i) => (
            <li key={item.pt} className="rounded-2xl border border-line bg-white/40 p-5">
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-6 font-display text-2xl leading-tight">{item[locale]}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="journey" className="scroll-mt-8 border-t border-line pt-8 pb-14">
        <SectionTitle number="05">{t.journeyTitle}</SectionTitle>
        <Journey />
      </section>

      {activity.length > 0 && (
        <section id="github" className="scroll-mt-8 border-t border-line pt-8 pb-14">
          <SectionTitle number="06">{t.githubTitle}</SectionTitle>
          <ul>
            {activity.map((repo) => (
              <li key={repo.name} className="border-t border-line">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-4 sm:grid-cols-[1.4fr_1fr_auto]"
                >
                  <span className="truncate font-display text-2xl transition-opacity group-hover:opacity-60">
                    {repo.name} ↗
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase max-sm:order-3">
                    {t.githubUpdated} {date.format(new Date(repo.pushedAt))}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
                    {repo.language ?? "—"}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`https://github.com/${githubUser}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block font-mono text-xs tracking-[0.16em] uppercase underline underline-offset-4 hover:opacity-60"
          >
            {t.githubAll} ↗
          </a>
        </section>
      )}
    </>
  );
}
