import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/sobre`, priority: 0.8 },
    ...projects.map((project) => ({
      url: `${siteUrl}/projetos/${project.slug}`,
      priority: 0.6,
    })),
  ];
}
