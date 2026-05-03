function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="reveal shadow-glow rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 text-center md:p-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Let&apos;s build something great.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">Interested in working together? Reach out to discuss web apps, product ideas, or engineering opportunities.</p>
        <a href="mailto:john.doe@example.com" className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300">
          john.doe@example.com
        </a>
      </div>
    </section>
  )
}

export default ContactSection
