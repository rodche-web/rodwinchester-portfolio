function Navbar({ menuOpen, onToggleMenu, onCloseMenu, brand, navLinks }) {
  return (
    <header className="nav-blur fixed top-0 z-50 w-full border-b border-[var(--outline-variant)] bg-[rgba(17,19,28,0.86)]">
      <nav className="container-frame flex items-center justify-between py-4">
        <a href="#home" className="font-heading text-xl font-bold tracking-tight text-[var(--on-surface)]">
          {brand.firstName}<span className="text-[var(--primary)]">{brand.lastName}</span>
        </a>

        <button
          onClick={onToggleMenu}
          className="focus-ring rounded-md border border-[var(--outline-variant)] p-2 text-[var(--on-surface)] md:hidden"
          aria-label="Open navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          className={`${menuOpen ? 'block' : 'hidden'} absolute left-0 top-full w-full border-b border-[var(--outline-variant)] bg-[var(--surface)] px-4 py-4 md:static md:flex md:w-auto md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              onClick={onCloseMenu}
              href={link.href}
              className="focus-ring font-heading block py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--on-surface-variant)] transition hover:text-[var(--primary)]"
            >
              {link.label}
            </a>
          ))}
          <a
            onClick={onCloseMenu}
            href="#contact"
            className="btn-primary focus-ring mt-3 inline-flex px-5 py-2 text-sm transition hover:brightness-105 md:mt-0"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
