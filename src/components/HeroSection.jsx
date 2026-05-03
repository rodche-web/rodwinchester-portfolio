function HeroSection() {
  return (
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
  )
}

export default HeroSection
