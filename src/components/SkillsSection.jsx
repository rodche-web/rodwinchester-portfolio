function SkillsSection({ skills }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="reveal text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">{skills.eyebrow}</p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white">{skills.heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">{skills.description}</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.items.map((item) => (
          <div key={item.title} className="reveal rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-cyan-400/40">
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-300">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
