import { cacheLife } from "next/cache";
import { githubUser } from "@/content/profile";

export type RepoActivity = {
  name: string;
  url: string;
  language: string | null;
  pushedAt: string;
};

/**
 * Repositórios públicos mexidos mais recentemente. O resultado fica em cache
 * por algumas horas; se o GitHub não responder, a seção simplesmente some.
 */
export async function getRecentRepos(): Promise<RepoActivity[]> {
  "use cache";
  cacheLife("hours");

  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/repos?sort=pushed&per_page=10`,
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!response.ok) return [];
    const repos: {
      name: string;
      html_url: string;
      language: string | null;
      pushed_at: string;
      fork: boolean;
    }[] = await response.json();

    return repos
      .filter((repo) => !repo.fork && repo.name !== githubUser)
      .slice(0, 4)
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        language: repo.language,
        pushedAt: repo.pushed_at,
      }));
  } catch {
    return [];
  }
}
