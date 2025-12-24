'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Star, ShieldCheck, Zap, Terminal } from 'lucide-react'

const CERTIFICATIONS = [
  {
    title: 'Gemini Certified Educator',
    issuer: 'Google',
    date: 'Oct 2025',
    expiry: 'Oct 2028',
    credentialId: '163698809',
    link: '#',
    status: 'completed',
    skills: ['Gen AI', 'Education Tech']
  },
  {
    title: 'Gemini Certified University Student',
    issuer: 'Google',
    date: 'Oct 2025',
    expiry: 'Oct 2028',
    credentialId: '163699860',
    link: '#',
    status: 'completed',
    skills: ['Gemini', 'Google AI']
  },
  {
    title: 'Vadodara Hackathon 6.0',
    issuer: 'PIERC - Parul University',
    date: 'Sep 2025',
    link: '#',
    status: 'completed',
    skills: ['Hackathon', 'Problem Solving']
  },
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Jul 2025',
    link: '#',
    status: 'completed',
    skills: ['Cloud Foundations', 'AWS']
  },
  {
    title: 'Introducing Generative AI with AWS',
    issuer: 'Udacity',
    date: 'Jul 2025',
    link: '#',
    status: 'completed',
    skills: ['Artificial Intelligence (AI)']
  },
  {
    title: 'Machine Learning Operations (MLOps) with Vertex AI',
    issuer: 'Google',
    date: 'Apr 2025',
    credentialId: '15191934',
    link: '#',
    status: 'completed',
    skills: ['Machine Learning', 'MLOps']
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'NPTEL',
    date: 'Dec 2023',
    link: '#',
    status: 'completed',
    skills: ['Ethical Hacking', 'Cybersecurity']
  }
]

const BADGES = [
  { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS", date: "Dec 2025" },
  { title: "Develop GenAI Apps with Gemini", issuer: "Google Cloud", date: "Jun 2025" },
  { title: "Build Real World AI Applications", issuer: "Google Cloud", date: "May 2025" },
  { title: "Implement CI/CD Pipelines", issuer: "Google Cloud", date: "May 2021" },
  { title: "Monitor and Manage Resources", issuer: "Google Cloud", date: "Jun 2025" },
  { title: "Build a Secure Network", issuer: "Google Cloud", date: "Jun 2026" },
  { title: "Manage Kubernetes in GKE", issuer: "Google Cloud", date: "May 2025" },
  { title: "Infrastructure with Terraform", issuer: "Google Cloud", date: "Apr 2025" }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#030303] relative overflow-hidden">
      {/* Background System Sync */}
      <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <header className="mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-4">
            <Terminal size={16} /> <span>./validated-credentials</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold dark:text-white tracking-tighter">
            Verified <br /> <span className="text-zinc-400">Certifications.</span>
          </h2>
        </header>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/50 transition-all shadow-sm"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500">
                  <Award size={24} />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                  <ShieldCheck size={12} /> VERIFIED
                </div>
              </div>

              <h3 className="text-xl font-bold dark:text-white mb-2 leading-tight group-hover:text-orange-500 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4">{cert.issuer}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Calendar size={14} /> <span>{cert.date}</span>
                  {cert.expiry && <span className="opacity-50">| Exp: {cert.expiry}</span>}
                </div>
                {cert.credentialId && (
                  <div className="text-[10px] font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              <a href={cert.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 hover:text-orange-600 transition-colors">
                Show Credential <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Badges Section */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-bold dark:text-white tracking-tight">Technical Skill Badges</h3>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            <Zap className="text-orange-500" size={24} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BADGES.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-center flex flex-col items-center justify-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Star size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold dark:text-zinc-200 leading-tight mb-1">{badge.title}</p>
                  <p className="text-[8px] font-mono text-zinc-500 uppercase">{badge.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}