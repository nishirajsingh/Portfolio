'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Cpu, Terminal, ShieldCheck, Globe } from 'lucide-react'

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/nishirajsingh', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nishiraj-singh-panwar/', label: 'LinkedIn' },
  { icon: Twitter, href: 'http://twitter.com/nishirajpanwar', label: 'Twitter' },
  { icon: Mail, href: 'mailto:nishiraj.work@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative px-6 lg:px-12 py-12 bg-white dark:bg-[#030303] overflow-hidden">
      {/* 1. Background Grid Sync */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Top Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
          <Terminal size={18} className="text-orange-500 opacity-50" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-xl p-8 md:p-12 shadow-2xl"
        >
          {/* Identity & Status Section */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16">
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/20">
                  NSP
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                    Nishiraj Singh Panwar
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">System Online — v2.0.25</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-sm leading-relaxed">
                Architecting scalable cloud environments and engineering intelligent AI applications with a focus on performance and reliability.
              </p>
            </div>

            {/* System Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full lg:w-auto">
              {[
                { label: 'Environment', value: 'Production', icon: Globe },
                { label: 'Security', value: 'Encrypted', icon: ShieldCheck },
                { label: 'Architecture', value: 'Cloud-Native', icon: Cpu },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
                  <item.icon size={14} className="text-orange-500" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-tighter text-zinc-500">{item.label}</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Socials & Rights */}
          <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Public Endpoints</span>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-500/50 transition-all shadow-sm"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm font-mono text-zinc-400">
                &copy; {new Date().getFullYear()} — <span className="text-zinc-900 dark:text-zinc-200">Built with Precision</span>
              </p>
              <p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest">
                Vadodara, Gujarat • India
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </footer>
  )
}