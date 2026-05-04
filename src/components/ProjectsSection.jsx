function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">{projects.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white">{projects.heading}</h2>
        </div>
        <p className="max-w-xl text-slate-300">{projects.description}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.items.map((project) => (
          <article key={project.title} className="reveal overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl transition hover:-translate-y-2 hover:border-cyan-400/40">
            {project.screenshot ? (
              <img src={project.screenshot} alt={`${project.title} screenshot`} className="h-44 w-full object-cover" loading="lazy" />
            ) : (
              <div className={`h-44 bg-gradient-to-br ${project.gradient}`}></div>
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-cyan-200">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-cyan-400/10 px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
