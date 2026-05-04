function SkillsSection({ skills }) {
  return (
    <section id="skills" className="container-frame section-stack">
      <div className="reveal text-center">
        <p className="section-eyebrow">{skills.eyebrow}</p>
        <h2 className="font-heading mt-3 text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-[var(--on-surface)]">{skills.heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--on-surface-variant)]">{skills.description}</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.items.map((item) => (
          <div key={item.title} className="surface-card reveal p-6 transition hover:border-[var(--primary)]">
            <h3 className="font-heading text-xl font-medium text-[var(--on-surface)]">{item.title}</h3>
            <p className="mt-3 text-[var(--on-surface-variant)]">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
