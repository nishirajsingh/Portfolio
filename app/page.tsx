import { EnhancedNavbar } from './components/enhanced-navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Projects } from './components/projects'
import { Experience } from './components/experience'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <EnhancedNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}