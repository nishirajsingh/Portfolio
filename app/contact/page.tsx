import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <EnhancedNavbar />
      <div className="">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
