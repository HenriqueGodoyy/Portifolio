// Dados pessoais usados na página Sobre, na home e no rodapé.

export const contacts = [
  {
    label: "LinkedIn",
    value: "/in/henrique-godoy-dos-santos",
    href: "https://www.linkedin.com/in/henrique-godoy-dos-santos/",
  },
  {
    label: "GitHub",
    value: "@HenriqueGodoyy",
    href: "https://github.com/HenriqueGodoyy",
  },
  {
    label: "E-mail",
    value: "henriquegodoyds@gmail.com",
    href: "mailto:henriquegodoyds@gmail.com",
  },
  {
    label: "Instagram",
    value: "@henrique_godoy12",
    href: "https://instagram.com/henrique_godoy12",
  },
] as const;

export const githubUser = "HenriqueGodoyy";
export const siteRepo = "https://github.com/HenriqueGodoyy/Portifolio";

/**
 * Currículo em PDF. Coloque o arquivo em public/ (ex.: public/curriculo.pdf) e
 * troque `null` por "/curriculo.pdf" para o botão de download aparecer.
 */
export const resumeUrl: string | null = null;

export const skills = [
  { pt: "Front-end", en: "Front end", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"] },
  { pt: "Back-end", en: "Back end", items: ["Node.js", "Python", "REST APIs"] },
  { pt: "Dados", en: "Data", items: ["SQL", "MongoDB", "Supabase"] },
  { pt: "Também uso", en: "Also using", items: ["C", "Kotlin", "Git"] },
];

export const stack = skills.flatMap((group) => group.items);

type Localized = { pt: string; en: string };

/**
 * Trajetória, da mais recente para a mais antiga. `period` e `place` são
 * opcionais: preencha com as datas e a empresa do seu LinkedIn
 * (ex.: period: { pt: "2025 — hoje", en: "2025 — present" }).
 */
export const journey: {
  role: Localized;
  place?: Localized;
  period?: Localized;
  description: Localized;
  tags: string[];
}[] = [
  {
    role: { pt: "Estagiário em Desenvolvimento de Software", en: "Software Development Intern" },
    description: {
      pt: "Desenvolvimento e automação no dia a dia de uma equipe de software, com APIs REST e banco de dados. Versões didáticas do que construí estão no repositório Estágio.",
      en: "Day-to-day development and automation on a software team, with REST APIs and databases. Teaching versions of what I built live in the Estágio repository.",
    },
    tags: ["Python", "Node.js", "Playwright", "REST APIs"],
  },
  {
    role: { pt: "Desenvolvedor, projeto de extensão", en: "Developer, extension project" },
    place: { pt: "Unaerp Esportes", en: "Unaerp Esportes" },
    description: {
      pt: "Construo o sistema que acompanha a evolução dos atletas de natação da universidade: cadastro, métricas de desempenho e painel para treinadores.",
      en: "I build the system that tracks the progress of the university's swimming athletes: registration, performance metrics and a panel for coaches.",
    },
    tags: ["React", "TypeScript", "Supabase"],
  },
  {
    role: { pt: "Engenharia de Software", en: "Software Engineering" },
    place: { pt: "UNAERP", en: "UNAERP" },
    description: {
      pt: "Graduação em andamento.",
      en: "Bachelor's degree in progress.",
    },
    tags: [],
  },
];

/** O que estou fazendo agora. Atualize quando mudar. */
export const now: Localized[] = [
  {
    pt: "Finalizando o dashboard web do Unaerp Esportes",
    en: "Finishing the Unaerp Esportes web dashboard",
  },
  {
    pt: "Estudando segurança em aplicativos Android com Kotlin",
    en: "Studying Android app security with Kotlin",
  },
  {
    pt: "Evoluindo este portfólio com Next.js",
    en: "Growing this portfolio with Next.js",
  },
];

export const about = {
  pt: {
    title: "Sobre",
    lead: "Sou o Henrique, estudante de Engenharia de Software apaixonado por tecnologia e focado em aplicações modernas.",
    body: [
      "Curso Engenharia de Software na UNAERP e trabalho como estagiário em desenvolvimento de software. Gosto de passar pelas duas pontas de um produto: a interface que a pessoa usa e a API e o banco de dados que sustentam tudo por trás.",
      "Hoje meu principal projeto é o sistema do Unaerp Esportes, que acompanha a evolução dos atletas de natação da universidade. Em paralelo, estudo segurança, de aplicativos mobile a sistemas de IA, e registro o que aprendo em repositórios abertos.",
    ],
    facts: [
      ["Formação", "Engenharia de Software, UNAERP"],
      ["Atuação", "Estagiário em desenvolvimento de software"],
      ["Foco", "Web, front-end e back-end"],
      ["Estudando", "Segurança de aplicações"],
    ],
    journeyTitle: "Trajetória",
    nowTitle: "Agora",
    githubTitle: "Atividade no GitHub",
    githubUpdated: "Atualizado em",
    githubAll: "Ver todos os repositórios",
    stackTitle: "Linguagens e tecnologias",
    contactTitle: "Contato",
    projectsCta: "Ver os projetos",
    resume: "Baixar currículo",
  },
  en: {
    title: "About",
    lead: "I'm Henrique, a Software Engineering student who loves technology and focuses on modern applications.",
    body: [
      "I study Software Engineering at UNAERP and work as a software development intern. I like working on both ends of a product: the interface people use and the API and database that hold everything up behind it.",
      "My main project today is the Unaerp Esportes system, which tracks the progress of the university's swimming athletes. On the side I study security, from mobile apps to AI systems, and log what I learn in open repositories.",
    ],
    facts: [
      ["Education", "Software Engineering, UNAERP"],
      ["Role", "Software development intern"],
      ["Focus", "Web, front end and back end"],
      ["Studying", "Application security"],
    ],
    journeyTitle: "Journey",
    nowTitle: "Now",
    githubTitle: "GitHub activity",
    githubUpdated: "Updated",
    githubAll: "See all repositories",
    stackTitle: "Languages and technologies",
    contactTitle: "Contact",
    projectsCta: "See the projects",
    resume: "Download résumé",
  },
} as const;
