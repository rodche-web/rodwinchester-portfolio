function AboutSection({ about }) {
  return (
    <section id="about" className="container-frame section-stack">
      <div className="reveal grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <p className="section-eyebrow">{about.eyebrow}</p>
          <h2 className="font-heading mt-3 text-4xl font-semibold leading-[1.2] tracking-[-0.01em] text-[var(--on-surface)]">{about.heading}</h2>
        </div>
        <div className="surface-card p-8 text-[var(--on-surface-variant)]">
          {about.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? 'leading-8' : 'mt-5 leading-8'}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
