function ContactSection({ contact, email }) {
  return (
    <section id="contact" className="container-frame section-stack">
      <div className="surface-card reveal p-8 text-center md:p-12">
        <h2 className="font-heading text-3xl font-semibold tracking-[-0.01em] text-[var(--on-surface)] md:text-4xl">{contact.heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--on-surface-variant)]">{contact.description}</p>
        <a href={`mailto:${email}`} className="btn-primary focus-ring mt-8 inline-flex px-7 py-3 transition hover:brightness-105">
          {email}
        </a>
      </div>
    </section>
  )
}

export default ContactSection
