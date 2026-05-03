function AboutSection({ about }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="reveal grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">{about.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white">{about.heading}</h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-slate-300 shadow-xl">
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
