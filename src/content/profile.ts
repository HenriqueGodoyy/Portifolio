// Dados pessoais usados na página Sobre e no contato da home.

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

export const stack = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Python",
  "Node.js",
  "C",
  "SQL",
  "MongoDB",
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
    stackTitle: "Linguagens e tecnologias",
    contactTitle: "Contato",
    projectsCta: "Ver os projetos",
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
    stackTitle: "Languages and technologies",
    contactTitle: "Contact",
    projectsCta: "See the projects",
  },
} as const;
