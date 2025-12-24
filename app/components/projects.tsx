'use client'

import { motion } from 'framer-motion'
import { Cloud, Brain, Server, Sparkles, ExternalLink, Github, Terminal, Lock } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Cloud Infrastructure Manager',
    description: 'Automated deployment and monitoring system for multi-cloud environments. Focused on cost optimization and real-time observability.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    icon: Cloud,
    status: 'Coming Soon',
    size: 'large' // Spans 2 columns
  },
  {
    title: 'AI Chatbot Platform',
    description: 'Intelligent NLP-driven conversational AI with context awareness and multi-language support.',
    tech: ['Python', 'OpenAI', 'FastAPI'],
    icon: Brain,
    status: 'Coming Soon',
    size: 'small'
  },
  {
    title: 'Serverless Gateway',
    description: 'Event-driven API management architecture using microservices and serverless logic.',
    tech: ['AWS Lambda', 'DynamoDB', 'Python'],
    icon: Server,
    status: 'Coming Soon',
    size: 'small'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform with predictive AI-powered reporting insights.',
    tech: ['Next.js', 'PostgreSQL', 'Redis'],
    icon: Sparkles,
    status: 'Coming Soon',
    size: 'medium'
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#030303] relative overflow-hidden">
      {/* Background System Sync */}
      <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-4"
          >
            <Terminal size={16} /> <span>./production-builds</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold dark:text-white tracking-tighter"
          >
            Project <br /> <span className="text-zinc-400">Architecture.</span>
          </motion.h2>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 transition-all overflow-hidden ${
                project.size === 'large' ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Coming Soon Overlay Effect */}
              <div className="absolute inset-0 bg-zinc-100/50 dark:bg-black/40 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center opacity-100 group-hover:backdrop-blur-[1px] transition-all">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-2xl">
                  <Lock size={14} className="text-orange-500" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Icon Area */}
              <div className="mb-6 relative z-0">
                <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500 inline-block">
                  <project.icon size={28} />
                </div>
              </div>

              {/* Content Area */}
              <div className="relative z-0">
                <h3 className="text-2xl font-bold dark:text-white mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md border border-zinc-200 dark:border-zinc-700">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link Placeholders */}
                <div className="flex gap-4 opacity-30 grayscale">
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest cursor-not-allowed">
                    <ExternalLink size={14} /> Live
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest cursor-not-allowed">
                    <Github size={14} /> Source
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center justify-center gap-4"
        >
          <div className="w-12 h-[1px] bg-orange-500/50" />
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em]">
            More developments in pipeline
          </p>
        </motion.div>
      </div>
    </section>
  )
}