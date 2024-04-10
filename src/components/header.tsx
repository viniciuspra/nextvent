export function Header() {
  return (
    <header className="w-full h-20 flex p-2 items-center gap-4 rounded-lg">
      <a
        href="/"
        className="hover:scale-95 cursor-pointer transition-transform"
      >
        <img
          src="/NV-Icon.png"
          alt="NextVent Logo"
          className="w-12 h-12 rounded-lg aspect-square"
        />
      </a>

      <nav className="flex gap-4">
        <a href="" className="hover:opacity-75 transition-opacity">
          Eventos
        </a>
        <a href="" className="hover:opacity-75 transition-opacity">
          Participantes
        </a>
      </nav>
    </header>
  );
}
