import { GitHubRepository } from "@/types/github";

export async function getRepositories(): Promise<GitHubRepository[]> {

  const response = await fetch("https://api.github.com/users/thiagobritto/repos", {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios.");
  }

  const repositories: GitHubRepository[] = await response.json();
  return repositories.filter((repo) => !repo.private);
  
}