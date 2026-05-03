function ProjectsSection() {
  return (
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
  )
}

export default ProjectsSection
