"use client";

import Link from "next/link";
import { contacts, siteRepo } from "@/content/profile";
import { useLocale } from "@/lib/i18n";

const copy = {
  pt: {
    built: "Feito com Next.js, Tailwind CSS e Motion.",
    source: "Código deste site",
    top: "Voltar ao topo",
    home: "Início",
    about: "Sobre",
  },
  en: {
    built: "Built with Next.js, Tailwind CSS and Motion.",
    source: "Source code of this site",
    top: "Back to top",
    home: "Home",
    about: "About",
  },
} as const;

export function SiteFooter() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <footer className="mx-auto w-full max-w-6xl border-t border-line px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-4xl leading-none">Henrique Godoy.</p>
          <p className="mt-3 text-sm text-muted">{t.built}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.16em] uppercase">
          <Link href="/" className="hover:opacity-60">
            {t.home}
          </Link>
          <Link href="/sobre" className="hover:opacity-60">
            {t.about}
          </Link>
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="hover:opacity-60"
            >
              {contact.label}
            </a>
          ))}
          <a href={siteRepo} target="_blank" rel="noreferrer" className="hover:opacity-60">
            {t.source} ↗
          </a>
          <a href="#top" className="hover:opacity-60">
            {t.top} ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}
