import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProjectView } from "@/components/ProjectView";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: `${project?.name} | Henrique Godoy`,
    description: project?.description.pt,
  };
}

export default function Page({ params }: PageProps<"/projetos/[slug]">) {
  // O slug só é lido dentro do Suspense, como o Next.js pede para manter a
  // navegação instantânea.
  return (
    <Suspense fallback={null}>
      <Project params={params} />
    </Suspense>
  );
}

async function Project({ params }: Pick<PageProps<"/projetos/[slug]">, "params">) {
  const { slug } = await params;
  if (!projects.some((p) => p.slug === slug)) notFound();
  // O texto de cada projeto vive em src/content/projects/<slug>.<idioma>.mdx
  const [{ default: Pt }, { default: En }] = await Promise.all([
    import(`@/content/projects/${slug}.pt.mdx`),
    import(`@/content/projects/${slug}.en.mdx`),
  ]);

  return <ProjectView slug={slug} pt={<Pt />} en={<En />} />;
}
