function Navbar({ menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <header className="nav-blur fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-white">
          John<span className="text-cyan-400">Doe</span>
        </a>

        <button
          onClick={onToggleMenu}
          className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
          aria-label="Open navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          className={`${menuOpen ? 'block' : 'hidden'} absolute left-0 top-full w-full border-b border-white/10 bg-slate-950/95 px-6 py-4 md:static md:flex md:w-auto md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          <a onClick={onCloseMenu} href="#about" className="block py-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400">
            About
          </a>
          <a onClick={onCloseMenu} href="#skills" className="block py-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400">
            Skills
          </a>
          <a onClick={onCloseMenu} href="#projects" className="block py-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400">
            Projects
          </a>
          <a
            onClick={onCloseMenu}
            href="#contact"
            className="mt-3 inline-flex rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 md:mt-0"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
