import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Events } from '../components/events'
import { Footer } from '../components/footer'

export default function EventsPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Royal Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 via-amber-900/5 to-red-900/5 dark:from-orange-950/10 dark:via-amber-950/10 dark:to-red-950/10" />
        <div className="absolute inset-0 mandala-bg opacity-5" />
      </div>
      
      <EnhancedNavbar />
      <div className="">
        <Events />
      </div>
      <Footer />
    </main>
  )
}
