'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Code, Sparkles, Terminal, Users } from 'lucide-react'

const EXPERIENCES = [
  {
    title: 'Volunteer - Marketing & Crowd Management',
    company: 'AWS Cloud Club at Parul University',
    location: 'Vadodara, Gujarat',
    period: 'Oct 2025 - Dec 2025',
    type: 'Volunteer',
    icon: Users,
    description: 'Played a key role in organizing community events, managing attendee logistics, and promoting cloud awareness among students.',
    highlights: [
      'Event Coordination',
      'Community Outreach',
      'Crowd Management',
      'Public Relations'
    ],
    color: 'text-orange-500',
    dotColor: 'bg-orange-500'
  },
  {
    title: 'Computer Science Student',
    company: 'Parul University',
    location: 'Vadodara, Gujarat',
    period: '2024 - Present',
    type: 'Education',
    icon: GraduationCap,
    description: 'Pursuing a Bachelor\'s degree in Computer Science with a core focus on distributed systems, cloud infrastructure, and AI/ML development.',
    highlights: [
      'Cloud Computing Specialization',
      'Data Structures & Algorithms',
      'Software Architecture',
      'AI/ML Fundamentals'
    ],
    color: 'text-amber-500',
    dotColor: 'bg-amber-500'
  },
  {
    title: 'AI/ML Development Projects',
    company: 'Personal Labs',
    location: 'Remote',
    period: '2023 - Present',
    type: 'Development',
    icon: Code,
    description: 'Engineering scalable cloud solutions and training neural networks. Focused on building production-ready serverless architectures.',
    highlights: [
      'AWS Infrastructure',
      'Serverless Design',
      'Model Optimization',
      'DevOps Pipelines'
    ],
    color: 'text-orange-600',
    dotColor: 'bg-orange-600'
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#030303] relative overflow-hidden">
      {/* 1. Background Grid Sync */}
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
            <Terminal size={16} /> <span>./career-roadmap</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold dark:text-white tracking-tighter"
          >
            The Journey <br /> <span className="text-zinc-400">& Milestones.</span>
          </motion.h2>
        </header>

        {/* Timeline Pipeline */}
        <div className="relative space-y-12">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800 md:-translate-x-1/2" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.title + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-[#030303] z-20 md:-translate-x-1/2 ${exp.dotColor} shadow-[0_0_15px_rgba(249,115,22,0.5)]`} />

              {/* Card Container */}
              <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                <div className="group relative p-8 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/50 transition-all">
                  
                  {/* Floating Icon */}
                  <div className={`absolute -top-4 -right-4 p-3 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-xl group-hover:rotate-6 transition-transform ${exp.color}`}>
                    <exp.icon size={24} />
                  </div>

                  {/* Header */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded-full border border-orange-500/20">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-bold dark:text-white mt-3 tracking-tight">{exp.title}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 font-medium">{exp.company}</p>
                  </div>

                  {/* Body */}
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Stats / Info */}
                  <div className="flex flex-wrap gap-4 text-[11px] font-mono text-zinc-400 mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5"><Calendar size={12} /> {exp.period}</div>
                    <div className="flex items-center gap-1.5"><MapPin size={12} /> {exp.location}</div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {exp.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                        <div className={`w-1 h-1 rounded-full ${exp.dotColor}`} />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Spacer for empty side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 text-sm italic">
            <Sparkles size={16} className="text-orange-500" />
            Evolving and growing every single day...
          </div>
        </motion.div>
      </div>
    </section>
  )
}