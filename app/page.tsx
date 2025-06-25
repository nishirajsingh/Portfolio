import { EnhancedNavbar } from './components/enhanced-navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Projects } from './components/projects'
import { Experience } from './components/experience'
import { Certifications } from './components/certifications'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <EnhancedNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}