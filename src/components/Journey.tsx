"use client";

import { journey } from "@/content/profile";
import { useLocale } from "@/lib/i18n";

export function Journey() {
  const locale = useLocale();

  return (
    <ol>
      {journey.map((entry) => (
        <li
          key={entry.role.pt}
          className="grid gap-x-8 gap-y-2 border-t border-line py-6 sm:grid-cols-[1fr_1.4fr]"
        >
          <div>
            {entry.period && (
              <p className="mb-1 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                {entry.period[locale]}
              </p>
            )}
            <h3 className="font-display text-2xl leading-tight sm:text-3xl">
              {entry.role[locale]}
            </h3>
            {entry.place && <p className="mt-1 text-[15px] text-muted">{entry.place[locale]}</p>}
          </div>
          <div>
            <p className="text-[15px] leading-relaxed text-ink/75">{entry.description[locale]}</p>
            {entry.tags.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase">
                {entry.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-ink/20 px-2.5 py-1">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
