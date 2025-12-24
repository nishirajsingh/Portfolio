'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Cloud, Brain, Server, Sparkles, Code, Database, Globe, ExternalLink, Github, Star, Terminal, Lock } from 'lucide-react'
import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Footer } from '../components/footer'
import Link from 'next/link'
import { useRef } from 'react'

const PROJECTS = [
  {
    title: 'Cloud Infrastructure Manager',
    description: 'A comprehensive cloud management platform for automated deployment and multi-cloud monitoring.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    icon: Cloud,
    gradient: 'from-orange-500 to-amber-500',
    status: 'Coming Soon',
    featured: true,
    category: 'Cloud'
  },
  {
    title: 'AI Chatbot Platform',
    description: 'Intelligent conversational AI platform with natural language processing and real-time learning.',
    tech: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI'],
    icon: Brain,
    gradient: 'from-orange-600 to-red-600',
    status: 'Coming Soon',
    featured: true,
    category: 'AI/ML'
  },
  {
    title: 'Serverless API Gateway',
    description: 'Scalable serverless architecture for API management with automatic scaling.',
    tech: ['AWS Lambda', 'DynamoDB', 'Python'],
    icon: Server,
    gradient: 'from-amber-500 to-orange-500',
    status: 'Coming Soon',
    category: 'Backend'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Modern analytics dashboard with AI-powered insights and real-time data visualization.',
    tech: ['Next.js', 'Python', 'Redis'],
    icon: Sparkles,
    gradient: 'from-red-500 to-orange-500',
    status: 'Coming Soon',
    category: 'AI/ML'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern payment integration and order tracking.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    icon: Globe,
    gradient: 'from-orange-400 to-amber-600',
    status: 'Coming Soon',
    category: 'Full Stack'
  },
  {
    title: 'Real-time Chat App',
    description: 'Scalable messaging platform with end-to-end encryption and group capabilities.',
    tech: ['Socket.io', 'Node.js', 'WebRTC'],
    icon: Code,
    gradient: 'from-orange-500 to-rose-500',
    status: 'Coming Soon',
    category: 'Full Stack'
  }
]

export default function ProjectsPage() {
  const containerRef = useRef(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <main ref={containerRef} className="min-h-screen bg-white dark:bg-[#030303] relative overflow-x-hidden">
      <EnhancedNavbar />
      
      {/* 1. Background System Sync */}
      <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      
      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [0, 1.5, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative z-10 py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-24 text-center lg:text-left">
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

        {/* Featured Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {PROJECTS.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative p-8 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden"
            >
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-[4px] z-20 flex flex-col items-center justify-center">
                 <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl">
                    <Lock size={16} className="text-orange-500" />
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">
                      {project.status}
                    </span>
                 </div>
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white shadow-xl shadow-orange-500/20`}>
                    <project.icon size={32} />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-[10px] font-bold uppercase tracking-widest">
                    <Star size={10} fill="currentColor" /> Featured
                  </div>
                </div>

                <h3 className="text-3xl font-bold dark:text-white mb-4 tracking-tight">{project.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed text-lg italic">
                  "{project.description}"
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-[10px] font-mono border border-zinc-200 dark:border-zinc-800 text-zinc-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="group relative p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[2px] z-20 flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-400">
                  Coming Soon
                </span>
              </div>

              <div className="relative z-10">
                <div className="text-orange-500 mb-6 opacity-60">
                   <project.icon size={24} />
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 line-clamp-2 italic">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                   {project.tech.map(t => (
                     <span key={t} className="text-[9px] font-mono text-zinc-500">{t}</span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  )
}