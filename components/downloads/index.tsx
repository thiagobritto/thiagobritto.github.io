import Container from "../container";

export default function Downloads() {

  const arquivos = [

    {
      nome: "Currículo PDF",
      link: "/downloads/curriculo.pdf"
    },

    {
      nome: "Portfólio PDF",
      link: "/downloads/portfolio.pdf"
    }

  ];

  return (

    <section
      id="downloads"
      className="max-w-5xl mx-auto py-24">

      <Container>

        <h2 className="text-4xl font-bold mb-10">
          Downloads
        </h2>

        <div className="space-y-4">

          {arquivos.map(item => (

            <a
              key={item.nome}
              href={item.link}
              download
              className="block bg-zinc-900 p-5 rounded-lg hover:bg-zinc-800">

              📄 {item.nome}

            </a>

          ))}

        </div>

      </Container>

    </section>

  )

}