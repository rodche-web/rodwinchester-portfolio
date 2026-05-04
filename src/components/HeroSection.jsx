function HeroSection({ brand, hero }) {
  return (
    <section id="home" className="container-frame flex min-h-screen items-center pt-24">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="reveal active">
          <p className="section-eyebrow mb-4 inline-flex rounded-full border border-[var(--outline-variant)] bg-[var(--surface-container-low)] px-4 py-2">
            {brand.role} · {brand.experience}
          </p>
          <h1 className="font-heading text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-[var(--on-surface)] sm:text-6xl lg:text-[64px]">
            {hero.intro} <span className="text-[var(--primary)]">{brand.fullName}</span>. {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-[var(--on-surface-variant)]">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={hero.ctaPrimary.href} className="btn-primary focus-ring shadow-glow px-7 py-3 text-center transition hover:brightness-105">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn-ghost focus-ring px-7 py-3 text-center transition hover:border-[var(--primary)] hover:text-[var(--primary)]">
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className="reveal flex justify-center md:justify-end">
          <div className="relative h-72 w-72 rounded-xl border border-[var(--outline-variant)] bg-[var(--surface-container-low)] p-6 sm:h-96 sm:w-96">
            <div className="relative flex h-full flex-col justify-between rounded-lg border border-[var(--outline-variant)] bg-[#010101] p-6">
              <div>
                <div className="mb-6 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--tertiary)]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--secondary)]"></span>
                </div>
                <pre className="overflow-hidden text-sm leading-7 text-[var(--on-surface-variant)]">
                  <code>{hero.codeSnippet}</code>
                </pre>
              </div>
              <div className="rounded-md border border-[var(--outline-variant)] bg-[var(--surface-container-low)] p-4 text-sm text-[var(--secondary)]">
                {hero.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
