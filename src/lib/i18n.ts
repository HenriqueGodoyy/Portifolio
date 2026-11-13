"use client";

import { useSyncExternalStore } from "react";

export type Locale = "pt" | "en";

const KEY = "locale";
const listeners = new Set<() => void>();

function read(): Locale {
  try {
    return localStorage.getItem(KEY) === "en" ? "en" : "pt";
  } catch {
    return "pt";
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function setLocale(locale: Locale) {
  try {
    localStorage.setItem(KEY, locale);
  } catch {
    // sem armazenamento disponível: a troca vale só até recarregar
  }
  document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  listeners.forEach((cb) => cb());
}

export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, read, () => "pt");
}

export const dict = {
  pt: {
    nav: { web: "Web", security: "Segurança", study: "Estudos", about: "Sobre" },
    pitch: {
      a: "Eu construo ",
      web: "aplicações web",
      b: ", estudo ",
      security: "segurança",
      c: " e registro meus ",
      study: "estudos",
      d: ". Ou só ",
      contact: "fale comigo",
      e: ".",
    },
    stats: { repositories: "Repositórios", languages: "Linguagens", since: "No GitHub desde" },
    hint: "Arraste para girar",
    sections: {
      web: "Aplicações web",
      security: "Segurança",
      study: "Estudos",
    },
    live: "ao vivo",
    code: "código",
    back: "Todos os projetos",
    openLive: "Ver no ar",
    openCode: "Ver o código",
    previous: "Anterior",
    next: "Próximo",
    contactTitle: "Vamos conversar",
    contactBody:
      "Estudante de Engenharia de Software na UNAERP. Me chame por qualquer um destes canais.",
    contactCta: "Mais sobre mim",
  },
  en: {
    nav: { web: "Web", security: "Security", study: "Learning", about: "About" },
    pitch: {
      a: "I build ",
      web: "web apps",
      b: ", study ",
      security: "security",
      c: " and log what I ",
      study: "learn",
      d: ". Or just ",
      contact: "say hi",
      e: ".",
    },
    stats: { repositories: "Repositories", languages: "Languages", since: "On GitHub since" },
    hint: "Drag to spin",
    sections: {
      web: "Web apps",
      security: "Security",
      study: "Learning",
    },
    live: "live",
    code: "code",
    back: "All projects",
    openLive: "View live",
    openCode: "View the code",
    previous: "Previous",
    next: "Next",
    contactTitle: "Let's talk",
    contactBody:
      "Software Engineering student at UNAERP. Reach me through any of these.",
    contactCta: "More about me",
  },
} as const;
