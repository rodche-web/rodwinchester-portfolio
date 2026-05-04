import { useEffect, useState } from 'react'
import AboutSection from './components/AboutSection'
import BackgroundBlobs from './components/BackgroundBlobs'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SiteFooter from './components/SiteFooter'
import SkillsSection from './components/SkillsSection'
import portfolioData from './data/portfolioData'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
      observer.disconnect()
    }
  }, [])

  const closeMenuOnMobile = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false)
    }
  }

  return (
    <div className="app-bg min-h-screen text-[var(--on-background)] antialiased">
      <BackgroundBlobs />
      <Navbar
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={closeMenuOnMobile}
        brand={portfolioData.brand}
        navLinks={portfolioData.navLinks}
      />

      <main>
        <HeroSection brand={portfolioData.brand} hero={portfolioData.hero} />
        <AboutSection about={portfolioData.about} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection contact={portfolioData.contact} email={portfolioData.brand.email} />
      </main>
      <SiteFooter fullName={portfolioData.brand.fullName} />
    </div>
  )
}

export default App
