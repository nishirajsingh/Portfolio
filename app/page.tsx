'use client'

import { motion } from 'framer-motion'
import { EnhancedNavbar } from './components/enhanced-navbar'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Skills } from './components/skills'
import { Footer } from './components/footer'
import Link from 'next/link'
import { LucideIcon, FolderOpen, Briefcase, Award, Calendar, MessageCircle, ArrowRight, Compass } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-white dark:bg-[#030303]">
      <EnhancedNavbar />
      <Hero />
      <About />
      <Skills />
      
      {/* Explore More – Bento Hub Layout */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Consistent background sync with previous sections */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-4"
              >
                <Compass size={16} /> <span>./navigation</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-bold dark:text-white tracking-tighter">
                Explore <br /> <span className="text-zinc-400">the Ecosystem.</span>
              </h2>
            </div>
          </div>

          {/* Cards Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px]">
            <ExploreCard
              title="Projects"
              desc="Selected work & experiments"
              href="/projects"
              icon={FolderOpen}
              span="md:col-span-3 md:row-span-2" // Large card
              index={0}
            />
            <ExploreCard
              title="Experience"
              desc="Roles & growth"
              href="/experience"
              icon={Briefcase}
              span="md:col-span-3"
              index={1}
            />
            <ExploreCard
              title="Certifications"
              desc="Credentials"
              href="/certifications"
              icon={Award}
              span="md:col-span-3 lg:col-span-2"
              index={2}
            />
            <ExploreCard
              title="Events"
              desc="Community & Tech"
              href="/events"
              icon={Calendar}
              span="md:col-span-3 lg:col-span-2"
              index={3}
            />
            <ExploreCard
              title="Contact"
              desc="Let’s connect"
              href="/contact"
              icon={MessageCircle}
              span="md:col-span-6 lg:col-span-2"
              isPrimary
              index={4}
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
  span,
  isPrimary,
  index
}: {
  title: string
  desc: string
  href: string
  icon: LucideIcon
  span: string
  isPrimary?: boolean
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${span}`}
    >
      <Link
        href={href}
        className={`
          group relative flex flex-col justify-between h-full
          rounded-[2.5rem] p-8 overflow-hidden
          transition-all duration-500
          ${isPrimary 
            ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/20 hover:scale-[1.02]' 
            : 'bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-orange-500/50'}
        `}
      >
        {/* Hover Gradient Overlay */}
        {!isPrimary && (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        )}

        <div className="flex justify-between items-start relative z-10">
          <div className={`
            p-4 rounded-2xl transition-all duration-500
            ${isPrimary ? 'bg-white/20' : 'bg-white dark:bg-zinc-800 group-hover:bg-orange-500 group-hover:text-white shadow-sm'}
          `}>
            <Icon size={24} />
          </div>
          <ArrowRight className={`transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 ${isPrimary ? 'text-white' : 'text-zinc-400'}`} />
        </div>

        <div className="relative z-10">
          <h3 className={`text-2xl font-bold tracking-tight mb-1 ${isPrimary ? 'text-white' : 'text-zinc-900 dark:text-white'}`}>
            {title}
          </h3>
          <p className={`text-sm ${isPrimary ? 'text-orange-50/80' : 'text-zinc-500 dark:text-zinc-400'}`}>
            {desc}
          </p>
        </div>

        {/* Decorative watermark icon */}
        <Icon className={`
          absolute -right-8 -bottom-8 w-40 h-40 opacity-[0.03] dark:opacity-[0.05] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12
          ${isPrimary ? 'text-white' : 'text-zinc-900 dark:text-white'}
        `} />
      </Link>
    </motion.div>
  )
}