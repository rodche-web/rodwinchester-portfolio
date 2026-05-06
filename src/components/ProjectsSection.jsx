function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="container-frame section-stack">
      <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="section-eyebrow">{projects.eyebrow}</p>
          <h2 className="font-heading mt-3 text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-[var(--on-surface)]">{projects.heading}</h2>
        </div>
        {/* <p className="max-w-xl text-[var(--on-surface-variant)]">{projects.description}</p> */}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.items.map((project) => (
          <article key={project.title} className="surface-card reveal overflow-hidden transition hover:border-[var(--primary)] hover:shadow-[0_10px_30px_rgba(184,195,255,0.15)]">
            {project.screenshot ? (
              <img src={project.screenshot} alt={`${project.title} screenshot`} className="h-44 w-full object-cover" loading="lazy" />
            ) : (
              <div className={`h-44 bg-gradient-to-br ${project.gradient}`}></div>
            )}
            <div className="p-6">
              <h3 className="font-heading text-2xl font-medium text-[var(--on-surface)]">{project.title}</h3>
              <p className="mt-3 text-[var(--on-surface-variant)]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip-tag">{tag}</span>
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
