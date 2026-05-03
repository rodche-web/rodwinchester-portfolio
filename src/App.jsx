import { useEffect, useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [])

  const closeMenuOnMobile = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false)
    }
  }

  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>
      </div>

      <header className="nav-blur fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-extrabold tracking-tight text-white">
            John<span className="text-cyan-400">Doe</span>
          </a>

          <button
            onClick={() => setMenuOpen((open) => !open)}
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
            <a onClick={closeMenuOnMobile} href="#about" className="block py-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400">
              About
            </a>
            <a onClick={closeMenuOnMobile} href="#skills" className="block py-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400">
              Skills
            </a>
            <a onClick={closeMenuOnMobile} href="#projects" className="block py-2 text-sm font-medium text-slate-300 transition hover:text-cyan-400">
              Projects
            </a>
            <a
              onClick={closeMenuOnMobile}
              href="#contact"
              className="mt-3 inline-flex rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 md:mt-0"
            >
              Contact Me
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-24">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="reveal active">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Software Engineer · 3 Years Experience
              </p>
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Hi, I&apos;m <span className="text-cyan-400">John Doe</span>. I build fast, clean, user-friendly software.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I create responsive web applications, intuitive interfaces, and dependable backend systems that help teams ship better digital products.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#projects" className="shadow-glow rounded-full bg-cyan-400 px-7 py-3 text-center font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300">
                  View Projects
                </a>
                <a href="#about" className="rounded-full border border-white/15 px-7 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300">
                  Learn More
                </a>
              </div>
            </div>

            <div className="reveal flex justify-center md:justify-end">
              <div className="relative h-72 w-72 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/40 sm:h-96 sm:w-96">
                <div className="absolute -right-5 -top-5 h-24 w-24 rounded-3xl bg-cyan-400/20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-violet-500/20 blur-xl"></div>
                <div className="relative flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-slate-900 p-6">
                  <div>
                    <div className="mb-6 flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400"></span>
                      <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                      <span className="h-3 w-3 rounded-full bg-green-400"></span>
                    </div>
                    <pre className="overflow-hidden text-sm leading-7 text-slate-300">
                      <code>{`const engineer = {
  name: 'John Doe',
  role: 'Software Engineer',
  experience: '3 years',
  focus: ['Web Apps', 'APIs', 'UX']
};`}</code>
                    </pre>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-200">
                    Currently building scalable products with modern web technologies.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <div className="reveal grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">About Me</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white">Engineer with a product mindset.</h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-slate-300 shadow-xl">
              <p className="leading-8">
                I&apos;m John Doe, a software engineer with 3 years of experience designing, developing, and maintaining web applications. I enjoy turning complex problems into simple, reliable, and polished user experiences.
              </p>
              <p className="mt-5 leading-8">
                My work spans frontend interfaces, backend APIs, database design, and performance optimization. I care about readable code, strong collaboration, and building tools that people actually enjoy using.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
          <div className="reveal text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">Skills</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white">Technologies I use</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">A practical toolkit for building responsive, maintainable, and production-ready applications.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-cyan-400/40">
              <h3 className="text-xl font-bold text-white">Frontend</h3>
              <p className="mt-3 text-slate-300">HTML, CSS, JavaScript, React, Tailwind CSS</p>
            </div>
            <div className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-cyan-400/40">
              <h3 className="text-xl font-bold text-white">Backend</h3>
              <p className="mt-3 text-slate-300">Node.js, Express, REST APIs, Authentication</p>
            </div>
            <div className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-cyan-400/40">
              <h3 className="text-xl font-bold text-white">Database</h3>
              <p className="mt-3 text-slate-300">PostgreSQL, MongoDB, Prisma, SQL</p>
            </div>
            <div className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-cyan-400/40">
              <h3 className="text-xl font-bold text-white">Tools</h3>
              <p className="mt-3 text-slate-300">Git, GitHub, Docker, Vercel, Agile</p>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">Projects</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white">Featured work</h2>
            </div>
            <p className="max-w-xl text-slate-300">A few sample projects that show John&apos;s ability to build useful, scalable, and visually polished applications.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="reveal overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl transition hover:-translate-y-2 hover:border-cyan-400/40">
              <div className="h-44 bg-gradient-to-br from-cyan-400/30 to-blue-600/20"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">TaskFlow</h3>
                <p className="mt-3 text-slate-300">A productivity dashboard for managing tasks, deadlines, and team workflows.</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-cyan-200">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1">React</span>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1">Node.js</span>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1">MongoDB</span>
                </div>
              </div>
            </article>

            <article className="reveal overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl transition hover:-translate-y-2 hover:border-cyan-400/40">
              <div className="h-44 bg-gradient-to-br from-violet-400/30 to-fuchsia-600/20"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">ShopLite</h3>
                <p className="mt-3 text-slate-300">A responsive e-commerce storefront with product filtering and cart interactions.</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-cyan-200">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1">JavaScript</span>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1">Tailwind</span>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1">API</span>
                </div>
              </div>
            </article>

            <article className="reveal overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl transition hover:-translate-y-2 hover:border-cyan-400/40">
              <div className="h-44 bg-gradient-to-br from-emerald-400/30 to-cyan-600/20"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">DevTrack</h3>
                <p className="mt-3 text-slate-300">A developer analytics app that visualizes repository activity and sprint progress.</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-cyan-200">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1">Vue</span>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1">Express</span>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1">PostgreSQL</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="reveal shadow-glow rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 text-center md:p-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Let&apos;s build something great.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">Interested in working together? Reach out to discuss web apps, product ideas, or engineering opportunities.</p>
            <a href="mailto:john.doe@example.com" className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300">
              john.doe@example.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
