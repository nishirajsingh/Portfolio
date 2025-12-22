import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Events } from '../components/events'
import { Footer } from '../components/footer'

export default function EventsPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <EnhancedNavbar />
      <div className="pt-32">
        <Events />
      </div>
      <Footer />
    </main>
  )
}
