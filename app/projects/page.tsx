'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Cloud, Brain, Server, Sparkles, Code, Database, Globe, Shield, ExternalLink, Github, Terminal, Lock } from 'lucide-react'
import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Footer } from '../components/footer'

const ICON_MAP: Record<string, any> = { Cloud, Brain, Server, Sparkles, Code, Globe, Database, Shield }

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/admin/projects').then(r => r.json()).then(setProjects)
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-[#030303] relative overflow-x-hidden">
      <EnhancedNavbar />

      <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="relative z-10 py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-orange-500 font-mono text-sm mb-4"
          >
            <Terminal size={16} /> <span>./portfolio-builds</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold dark:text-white tracking-tighter leading-[0.9]">
            Recent <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Deployments.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = ICON_MAP[project.icon] || Code
            const isLive = project.status === 'Live'
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-8 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 transition-all overflow-hidden ${
                  project.size === 'large' ? 'lg:col-span-2' : ''
                }`}
              >
                {!isLive && (
                  <div className="absolute inset-0 bg-zinc-100/50 dark:bg-black/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-2xl">
                      <Lock size={14} className="text-orange-500" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
                        {project.status}
                      </span>
                    </div>
                  </div>
                )}

                <div className="mb-6 relative z-0">
                  <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500 inline-block">
                    <IconComponent size={28} />
                  </div>
                </div>

                <div className="relative z-0">
                  <h3 className="text-2xl font-bold dark:text-white mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t: string) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md border border-zinc-200 dark:border-zinc-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${!isLive ? 'opacity-30 grayscale' : ''}`}>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest hover:text-orange-600 transition-colors">
                        <ExternalLink size={14} /> Live
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest cursor-not-allowed">
                        <ExternalLink size={14} /> Live
                      </span>
                    )}
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest hover:text-orange-600 transition-colors">
                        <Github size={14} /> Source
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest cursor-not-allowed">
                        <Github size={14} /> Source
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-20 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-[1px] bg-orange-500/50" />
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">More developments in pipeline</p>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
