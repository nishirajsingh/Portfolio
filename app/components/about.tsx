'use client'

import { motion } from 'framer-motion'
import {
  Cloud,
  Brain,
  Code2,
  Rocket,
  MapPin,
  Sparkles,
  ChevronRight,
  Target
} from 'lucide-react'

const SKILLS = [
  {
    title: 'Cloud Engineering',
    desc: 'Scalable infrastructure & deployments',
    icon: Cloud,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'AI / ML Development',
    desc: 'Intelligent & data-driven systems',
    icon: Brain,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10'
  },
  {
    title: 'Full-Stack Development',
    desc: 'Modern web apps & platforms',
    icon: Code2,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10'
  },
  {
    title: 'Problem Solving',
    desc: 'Architecture, logic & optimization',
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
      {/* 1. Background System Sync with Hero */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, 
            backgroundSize: '50px 50px' 
          }} 
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_60%,rgba(249,115,22,0.05),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header - Modern Left Aligned */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-orange-600 dark:text-orange-500 font-mono text-sm mb-4"
          >
            <Sparkles size={16} />
            <span className="tracking-[0.2em] uppercase">The Persona</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white tracking-tighter"
          >
            Engineer mindset. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Builder mentality.
            </span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT — Story & Bio (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                I’m <span className="text-zinc-900 dark:text-white font-bold underline decoration-orange-500/30 decoration-4">Nishiraj Singh Panwar</span>, 
                a developer focused on building scalable cloud platforms and intelligent AI-powered applications.
              </p>

              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                My journey evolved from mastering web security fundamentals to engineering 
                complex production systems. I specialize in turning architectural challenges 
                into clean, optimized, and scalable codebases.
              </p>
            </div>

            {/* Quick Stats / Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-zinc-900 dark:text-white font-semibold">
                  <MapPin className="text-orange-500" size={18} />
                  Based in Vadodara, India
                </div>
              </div>
              <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-zinc-900 dark:text-white font-semibold">
                  <Rocket className="text-orange-500" size={18} />
                  Parul University Graduate
                </div>
              </div>
            </div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-500 font-bold cursor-pointer pt-4 group"
            >
              Learn more about my process <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.div>

          {/* RIGHT — Bento Skills (5 Columns) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/50 transition-all shadow-sm overflow-hidden"
              >
                {/* Subtle Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className={`p-4 rounded-2xl ${skill.bg} ${skill.color} transition-colors`}>
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 tracking-tight">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}