export type Category = "web" | "security" | "study";

export type Project = {
  slug: string;
  name: string;
  category: Category;
  tech: string;
  description: { pt: string; en: string };
  repo: string;
  live?: string;
  /** Caminho de um screenshot em /public (ex.: "/projects/natacao.png"). Opcional. */
  image?: string;
};

const gh = (repo: string) => `https://github.com/HenriqueGodoyy/${repo}`;

// Para postar um projeto novo: adicione um item nesta lista.
export const projects: Project[] = [
  {
    slug: "natacao-unaerp",
    name: "Natação UNAERP",
    category: "web",
    tech: "TypeScript",
    description: {
      pt: "Projeto de extensão da UNAERP, no ar na Vercel.",
      en: "University extension project for UNAERP, live on Vercel.",
    },
    repo: gh("Natacao_Unaerp"),
    live: "https://natacao-unaerp.vercel.app",
  },
  {
    slug: "mobile-security",
    name: "Mobile Security",
    category: "security",
    tech: "Kotlin",
    description: {
      pt: "Segurança em aplicativos mobile com Kotlin.",
      en: "Mobile application security with Kotlin.",
    },
    repo: gh("mobile-security"),
  },
  {
    slug: "mini-curso-api-rest",
    name: "Mini-curso API REST",
    category: "web",
    tech: "Java",
    description: {
      pt: "API REST em Java construída durante um mini-curso.",
      en: "REST API in Java built during a short course.",
    },
    repo: gh("Mini-Curso-API-Rest"),
  },
  {
    slug: "cybersecurity-in-ai",
    name: "Cybersecurity in AI",
    category: "security",
    tech: "Research",
    description: {
      pt: "Cibersegurança aplicada a sistemas de IA.",
      en: "Cybersecurity applied to AI systems.",
    },
    repo: gh("cybersecurity-in-AI"),
  },
  {
    slug: "estagio",
    name: "Estágio",
    category: "study",
    tech: "Python",
    description: {
      pt: "Código em Python do período de estágio.",
      en: "Python code from my internship.",
    },
    repo: gh("Estagio"),
  },
  {
    slug: "spotify-clone",
    name: "Spotify Clone",
    category: "web",
    tech: "HTML · CSS",
    description: {
      pt: "Meu primeiro projeto: uma interface em HTML e CSS.",
      en: "My first project: an interface in HTML and CSS.",
    },
    repo: gh("Spotify-clone"),
  },
  {
    slug: "estudos",
    name: "Estudos",
    category: "study",
    tech: "HTML",
    description: {
      pt: "Meus estudos pessoais, registrados em código.",
      en: "My personal studies, logged as code.",
    },
    repo: gh("Estudos"),
  },
];

export const stats = {
  repositories: 12,
  languages: 5,
  since: 2025,
};

export const githubProfile = "https://github.com/HenriqueGodoyy";
