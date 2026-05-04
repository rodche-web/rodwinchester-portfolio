function SiteFooter({ fullName }) {
  return (
    <footer className="border-t border-[var(--outline-variant)] px-6 py-8 text-center text-sm text-[var(--on-surface-variant)]">
      <p>
        &copy; {new Date().getFullYear()} {fullName}. All rights reserved.
      </p>
    </footer>
  )
}

export default SiteFooter
