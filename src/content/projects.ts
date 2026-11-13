export type Category = "web" | "security" | "study";

export type Project = {
  slug: string;
  name: string;
  category: Category;
  /** Rótulo curto mostrado no card. */
  tech: string;
  /** Tecnologias listadas na página do projeto. */
  stack: string[];
  description: { pt: string; en: string };
  repo: string;
  live?: string;
  /** Caminho de um screenshot em /public (ex.: "/projects/natacao.png"). Opcional. */
  image?: string;
};

const gh = (repo: string) => `https://github.com/HenriqueGodoyy/${repo}`;

export const palette: Record<Category, { bg: string; fg: string; chip: string }> = {
  web: { bg: "#2f5bea", fg: "#ffffff", chip: "rgb(255 255 255 / 0.18)" },
  security: { bg: "#e5484d", fg: "#ffffff", chip: "rgb(255 255 255 / 0.18)" },
  study: { bg: "#f3c63f", fg: "#16181d", chip: "rgb(22 24 29 / 0.12)" },
};

// Para postar um projeto novo: adicione um item nesta lista e crie os arquivos
// src/content/projects/<slug>.pt.mdx e <slug>.en.mdx com o texto da página.
export const projects: Project[] = [
  {
    slug: "natacao-unaerp",
    name: "Natação UNAERP",
    category: "web",
    tech: "TypeScript",
    stack: ["React", "TypeScript", "Node.js", "Supabase", "REST API"],
    description: {
      pt: "Sistema para acompanhar a evolução dos atletas de natação da UNAERP.",
      en: "A system to track the progress of the UNAERP swimming team.",
    },
    repo: gh("Natacao_Unaerp"),
    live: "https://natacao-unaerp.vercel.app",
  },
  {
    slug: "mobile-security",
    name: "Mobile Security",
    category: "security",
    tech: "Kotlin",
    stack: ["Kotlin", "Android", "Gradle"],
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
    stack: ["Java", "REST API"],
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
    stack: [],
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
    stack: ["Python", "Node.js", "Playwright", "REST API"],
    description: {
      pt: "Versões didáticas de projetos feitos no meu estágio.",
      en: "Teaching versions of projects from my internship.",
    },
    repo: gh("Estagio"),
  },
  {
    slug: "spotify-clone",
    name: "Spotify Clone",
    category: "web",
    tech: "HTML · CSS",
    stack: ["HTML5", "CSS3", "Flexbox", "Grid"],
    description: {
      pt: "Meu primeiro projeto: a interface de um player de música em HTML e CSS.",
      en: "My first project: a music player interface in HTML and CSS.",
    },
    repo: gh("Spotify-clone"),
  },
  {
    slug: "estudos",
    name: "Estudos",
    category: "study",
    tech: "HTML",
    stack: ["HTML", "CSS", "JavaScript", "Python", "React"],
    description: {
      pt: "Exercícios, anotações e projetos dos meus estudos.",
      en: "Exercises, notes and projects from my studies.",
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
