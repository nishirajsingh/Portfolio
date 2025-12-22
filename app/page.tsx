import { EnhancedNavbar } from './components/enhanced-navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Footer } from './components/footer'
import Link from 'next/link'
import { FolderOpen, Briefcase, Calendar, MessageCircle, Award } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <EnhancedNavbar />
      <Hero />
      <About />
      <Skills />
      
      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link href="/projects" className="group relative overflow-hidden p-8 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-200 dark:border-orange-800/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <FolderOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Projects</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">View my work</p>
              </div>
            </Link>
            <Link href="/experience" className="group relative overflow-hidden p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-200 dark:border-red-800/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Experience</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">My journey</p>
              </div>
            </Link>
            <Link href="/certifications" className="group relative overflow-hidden p-8 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-200 dark:border-yellow-800/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Certifications</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Achievements</p>
              </div>
            </Link>
            <Link href="/events" className="group relative overflow-hidden p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-200 dark:border-amber-800/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Events</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Community</p>
              </div>
            </Link>
            <Link href="/contact" className="group relative overflow-hidden p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-200 dark:border-orange-800/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Contact</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get in touch</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}