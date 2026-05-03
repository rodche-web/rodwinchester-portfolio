function SkillsSection() {
  return (
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
  )
}

export default SkillsSection
