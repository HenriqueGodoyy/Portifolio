"use client";

import Link from "next/link";
import type { Category } from "@/content/projects";
import { dict, setLocale, useLocale } from "@/lib/i18n";

const categories: Category[] = ["web", "security", "study"];

export function SiteHeader() {
  const locale = useLocale();
  const t = dict[locale];

  return (
    <header className="flex items-baseline justify-between gap-4 font-display text-2xl leading-none sm:text-3xl">
      <div className="flex items-baseline gap-2">
        <Link href="/" className="text-[1.25em]">
          Henrique Godoy.
        </Link>
        <nav className="hidden items-baseline gap-2 text-muted sm:flex">
          {categories.map((c) => (
            <span key={c} className="flex gap-2">
              <span aria-hidden>/</span>
              <Link href={`/#${c}`} className="transition-colors hover:text-ink">
                {t.nav[c]}
              </Link>
            </span>
          ))}
        </nav>
      </div>
      <div className="flex items-baseline gap-4 sm:gap-6">
        <Link href="/sobre" className="text-muted transition-colors hover:text-ink">
          {t.nav.about}
        </Link>
        <div className="flex items-baseline gap-2">
          {(["pt", "en"] as const).map((l, i) => (
          <span key={l} className="flex gap-2">
            {i > 0 && (
              <span aria-hidden className="text-muted">
                /
              </span>
            )}
            <button
              type="button"
              onClick={() => setLocale(l)}
              aria-pressed={locale === l}
              className={`cursor-pointer transition-colors hover:text-ink ${locale === l ? "text-ink" : "text-muted"}`}
            >
              {l.toUpperCase()}
            </button>
          </span>
          ))}
        </div>
      </div>
    </header>
  );
}
