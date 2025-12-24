import { EnhancedNavbar } from './components/enhanced-navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Footer } from './components/footer'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { FolderOpen, Briefcase, Award, Calendar, MessageCircle } from 'lucide-react'


export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <EnhancedNavbar />
      <Hero />
      <About />
      <Skills />
      
      {/* Quick Links Section */}
     {/* Explore More – Simple Modern Cards */}
<section className="py-24 px-4 sm:px-6 lg:px-16">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        Explore More
      </h2>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Navigate through my work, experience, and journey.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">

      <ExploreCard
        title="Projects"
        desc="Selected work & experiments"
        href="/projects"
        icon={FolderOpen}
      />

      <ExploreCard
        title="Experience"
        desc="Roles, learning & growth"
        href="/experience"
        icon={Briefcase}
      />

      <ExploreCard
        title="Certifications"
        desc="Credentials & achievements"
        href="/certifications"
        icon={Award}
      />

      <ExploreCard
        title="Events"
        desc="Community & tech events"
        href="/events"
        icon={Calendar}
      />

      <ExploreCard
        title="Contact"
        desc="Let’s connect & collaborate"
        href="/contact"
        icon={MessageCircle}
        wide
      />

    </div>
  </div>
</section>

      
      <Footer />
    </main>
  )
}


function ExploreCard({
  title,
  desc,
  href,
  icon: Icon,
  wide,
}: {
  title: string
  desc: string
  href: string
  icon: LucideIcon
  wide?: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        group relative overflow-hidden
        rounded-2xl p-6
        bg-white dark:bg-neutral-900
        border border-neutral-200 dark:border-neutral-800
        hover:border-neutral-400 dark:hover:border-neutral-600
        transition-all
        ${wide ? 'sm:col-span-2 lg:col-span-2' : ''}
      `}
    >
      {/* Soft background layer */}
      <div className="
        absolute inset-0
        bg-gradient-to-br from-neutral-100 to-transparent
        dark:from-white/5
        opacity-0 group-hover:opacity-100
        transition-opacity
      " />

      {/* Icon watermark */}
      <Icon
        className="
          absolute -right-6 -bottom-6
          w-32 h-32
          text-neutral-200 dark:text-neutral-800
          opacity-40
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <Icon className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mb-4" />

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {desc}
        </p>

        <span className="
          mt-6 inline-block text-sm
          text-neutral-500 group-hover:text-neutral-900
          dark:group-hover:text-white
          transition
        ">
          View →
        </span>
      </div>
    </Link>
  )
}
