'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Cloud,
  Brain,
  Code2,
  Rocket,
  MapPin,
  Sparkles,
  ChevronRight,
  Target,
  Terminal
} from 'lucide-react'

const SKILLS = [
  {
    title: 'Cloud Engineering',
    desc: 'Scalable infra & deployments',
    icon: Cloud,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'AI / ML Development',
    desc: 'Intelligent systems',
    icon: Brain,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    title: 'Full-Stack',
    desc: 'Modern web platforms',
    icon: Code2,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  {
    title: 'Optimization',
    desc: 'Architecture & logic',
    icon: Target,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
]

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white dark:bg-[#030303] px-6 lg:px-12 py-24"
    >
      {/* Background System Sync */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Asymmetrical Bento Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-orange-600 dark:text-orange-500 font-mono text-sm mb-4"
            >
              <Terminal size={16} />
              <span className="tracking-[0.2em] uppercase">System.Information</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter leading-[0.9]"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
              Persona.
              </span>
            </motion.h2>
          </div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="hidden lg:block text-zinc-400 font-mono text-sm border-l border-zinc-200 dark:border-zinc-800 pl-6"
          >
            // Engineer mindset <br />
            // Builder mentality
          </motion.div>
        </div>

        {/* --- THE BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* 1. MAIN BIO CARD (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-12 lg:col-span-7 group relative p-8 md:p-12 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-900/20 backdrop-blur-md overflow-hidden"
          >
            <div className="relative z-10 space-y-6">
              <p className="text-2xl md:text-3xl text-zinc-800 dark:text-zinc-200 leading-tight font-medium tracking-tight">
                I’m <span className="text-orange-500">Nishiraj Singh Panwar</span>, 
                a developer engineering scalable cloud platforms and intelligent AI-powered applications.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                My journey evolved from mastering web security fundamentals to engineering complex production systems. I specialize in turning architectural challenges into clean, optimized, and scalable codebases.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm text-sm font-semibold dark:text-white">
                  <MapPin size={14} className="text-orange-500" /> Based in Ratlam, India
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm text-sm font-semibold dark:text-white">
                  <Rocket size={14} className="text-orange-500" /> Parul University Graduate
                </div>
              </div>
            </div>
            
            {/* Visual Flare */}
            <div className="absolute top-0 right-0 p-8 opacity-10 dark:opacity-20 group-hover:rotate-12 transition-transform duration-500">
               <Target size={180} />
            </div>
          </motion.div>

          {/* 2. SKILLS MESH GRID (5 Columns) */}
          <div className="md:col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/50 transition-all shadow-sm flex items-center gap-5"
              >
                <div className={`p-3 rounded-2xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}>
                  <skill.icon size={22} />
                </div>
                <div>
                  <h4 className="text-md font-bold text-zinc-900 dark:text-white mb-0.5 tracking-tight">
                    {skill.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {skill.desc}
                  </p>
                </div>
                <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-500" />
              </motion.div>
            ))}
          </div>

          {/* 3. FOOTER ACTION CALL (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-12 mt-4"
          >
            <Link
              href="/profile"
              className="w-full flex items-center justify-between p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 group hover:bg-orange-500 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-500 transition-colors">
                  <Sparkles size={18} />
                </div>
                <span className="font-bold text-zinc-900 dark:text-white group-hover:text-white transition-colors">Explore my full engineering process</span>
              </div>
              <ChevronRight className="text-zinc-400 group-hover:text-white transition-all transform group-hover:translate-x-2" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}