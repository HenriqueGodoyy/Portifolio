import { Home } from "@/components/Home";
import { getRecentRepos } from "@/lib/github";

export default async function Page() {
  const activity = await getRecentRepos();
  return <Home activity={activity} />;
}
