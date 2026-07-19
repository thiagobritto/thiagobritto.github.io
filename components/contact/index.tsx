import Container from "../container";

export default function Contact() {

  return (

    <section
      id="contato"
      className="py-24">

      <Container>

        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold">Contato</h2>

          <p className="mt-6 text-zinc-400 leading-7">
            Interessado em trabalhar comigo ou conversar sobre um projeto?
            Entre em contato pelos canais abaixo.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:seuemail@email.com"
              className="hidden rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-500"
            >
              Enviar e-mail
            </a>

            <a
              href="https://github.com/thiagobritto"
              target="_blank"
              className="rounded-lg border border-zinc-700 px-6 py-3 hover:bg-zinc-900"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              className="hidden rounded-lg border border-zinc-700 px-6 py-3 hover:bg-zinc-900"
            >
              LinkedIn
            </a>

            <a
              href="/curriculo.pdf"
              download
              className="hidden rounded-lg border border-zinc-700 px-6 py-3 hover:bg-zinc-900"
            >
              Baixar currículo
            </a>
          </div>
        </div>

      </Container>

    </section>

  );

}