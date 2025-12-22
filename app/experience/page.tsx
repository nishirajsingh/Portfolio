import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Experience } from '../components/experience'
import { Footer } from '../components/footer'

export default function ExperiencePage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <EnhancedNavbar />
      <div className="">
        <Experience />
      </div>
      <Footer />
    </main>
  )
}
