import Container from "../container";
import { getRepositories } from "@/lib/github";

export default async function Projects() {

  const repos = await getRepositories();

  return (

    <section id="projetos" className="max-w-6xl mx-auto py-24">

      <Container>

        <h2 className="text-4xl font-bold mb-10">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {repos.map(repo => (

            <div
              key={repo.id}
              className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-blue-500 transition">

              <h3 className="font-bold text-xl">
                {repo.name}
              </h3>

              <p className="text-zinc-400 mt-4">
                {repo.description}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                className="inline-block mt-5 text-blue-400">
                Ver Projeto →
              </a>

            </div>

          ))}

        </div>

      </Container>

    </section>

  )

}