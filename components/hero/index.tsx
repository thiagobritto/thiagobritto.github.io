import Container from "../container";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">

      <Container>

        <h1 className="text-6xl font-bold">
          Dev Full Stack
        </h1>

        <p className="text-zinc-400 mt-4">
          Aplicações Web • APIs • Open Source
        </p>

      </Container>

    </section>
  )
}