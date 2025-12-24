'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import hero from './images/nishiraj.png'
import { Cloud, Binary, Code2, Sparkles, Terminal as TerminalIcon, Cpu } from 'lucide-react'
import { EnhancedButton } from './ui/enhanced-button'
import { useEffect, useState } from 'react'

const codeLines = [
  { text: 'const dev = new Developer("Nishiraj");', color: 'text-blue-400' },
  { text: 'dev.stack = ["AWS", "Next.js", "Python"];', color: 'text-purple-400' },
  { text: 'dev.focus = "Cloud & AI Solutions";', color: 'text-emerald-400' },
  { text: 'await dev.deploy();', color: 'text-orange-400' },
]

export function Hero() {
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % codeLines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#030303] pt-20">
      {/* 1. Background System */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(249,115,22,0.08),transparent_50%)]" />
        <div 
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]" 
          style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT — 7 COLUMNS */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-mono tracking-widest uppercase"
          >
            <Sparkles size={14} /> Available for new projects
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] text-zinc-900 dark:text-white">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
                Digital Scalability.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
          >
            I build robust cloud architectures and high-performance AI applications, 
            bridging the gap between complex backend systems and seamless user experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <EnhancedButton variant="gradient" size="xl" href="/projects" glow className="rounded-2xl px-8">
              Explore Work
            </EnhancedButton>
            <EnhancedButton variant="secondary" size="xl" href="/contact" className="rounded-2xl px-8 backdrop-blur-md">
              Get in Touch
            </EnhancedButton>
          </motion.div>

          {/* Tech Stack Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-zinc-400"
          >
            <p className="text-xs font-mono uppercase tracking-widest w-full lg:w-auto mb-2 lg:mb-0">Prime Stack:</p>
            <div className="flex gap-4 grayscale opacity-70">
               <Cloud size={24} />
               <Code2 size={24} />
               <Cpu size={24} />
               <Binary size={24} />
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL — 5 COLUMNS */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Profile Image Area */}
            <div className="relative z-20 w-64 h-64 md:w-80 md:h-80 mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-[3rem] rotate-6 group-hover:rotate-3 transition-transform duration-500" />
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-[3rem] overflow-hidden border-2 border-white dark:border-zinc-700">
                <Image
                  src={hero}
                  alt="Nishiraj Singh Panwar"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
              
              {/* Floating Dashboard Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-10 z-30 p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <TerminalIcon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Status</p>
                    <p className="text-sm font-bold dark:text-white">System: Optimized</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Terminal Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-2xl font-mono text-xs"
            >
              <div className="bg-zinc-200 dark:bg-zinc-800/50 px-4 py-2 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
                </div>
                <span className="text-[10px] text-zinc-500">bash — nishiraj.dev</span>
              </div>
              <div className="p-5 h-28 flex flex-col justify-center">
                <motion.p
                  key={lineIndex}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={codeLines[lineIndex].color}
                >
                  <span className="text-zinc-500 mr-2">$</span>
                  {codeLines[lineIndex].text}
                </motion.p>
                <div className="mt-1 w-2 h-4 bg-orange-500 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}