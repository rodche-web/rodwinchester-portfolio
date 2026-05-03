function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="reveal grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">About Me</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white">Engineer with a product mindset.</h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-slate-300 shadow-xl">
          <p className="leading-8">
            I&apos;m John Doe, a software engineer with 3 years of experience designing, developing, and maintaining web applications. I enjoy turning complex problems into simple, reliable, and polished user experiences.
          </p>
          <p className="mt-5 leading-8">
            My work spans frontend interfaces, backend APIs, database design, and performance optimization. I care about readable code, strong collaboration, and building tools that people actually enjoy using.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
