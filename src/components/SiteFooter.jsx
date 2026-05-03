function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
      <p>
        &copy; {new Date().getFullYear()} John Doe. All rights reserved.
      </p>
    </footer>
  )
}

export default SiteFooter
