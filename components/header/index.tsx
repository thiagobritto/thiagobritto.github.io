
export default function Header() {
  return (
    <header className="fixed w-full bg-zinc-900/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="font-bold text-xl">
          Thiago Britto
        </h1>

        <nav className="flex gap-6">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}