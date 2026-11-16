# Portfólio — Henrique Godoy

Portfólio pessoal feito com Next.js, TypeScript, Tailwind CSS e Motion.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Adicionar um projeto

Edite `src/content/projects.ts` e adicione um item à lista `projects`. O projeto
aparece no carrossel da home e na seção da sua categoria (`web`, `security` ou
`study`). Para usar um screenshot no card, coloque a imagem em `public/projects/`
e preencha o campo `image`.

Os textos da interface (PT/EN) ficam em `src/lib/i18n.ts`.

## Próximos passos

Pendências que dependem de mim (Henrique):

- [ ] Screenshots dos projetos: salvar em `public/projects/` e preencher o campo
      `image` de cada projeto em `src/content/projects.ts`.
- [ ] Trajetória: preencher datas (`period`) e empresa (`place`) em
      `src/content/profile.ts`, a partir do LinkedIn.
- [ ] Currículo: salvar o PDF em `public/` e preencher `resumeUrl` em
      `src/content/profile.ts`.
- [ ] Escrever o conteúdo de Mini-curso API REST e Cybersecurity in AI e tirar o
      `draft: true` deles em `src/content/projects.ts`.
- [ ] Abrir o pull request de `my-branch` para a `main`.
- [ ] Deploy: importar o repositório na Vercel.
- [ ] GitHub: adicionar descrição e README aos repositórios sem eles.
- [ ] GitHub: corrigir o nome do repositório ("Portifolio") e a localização do
      perfil ("Brugges").
