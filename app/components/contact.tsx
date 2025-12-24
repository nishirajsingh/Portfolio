'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, ExternalLink, MessageSquare, Sparkles, Terminal } from 'lucide-react'
import { EnhancedContactForm } from './ui/enhanced-contact-form'

const CONTACT_INFO = [
  { 
    icon: Mail, 
    label: 'Email', 
    value: 'nishiraj.work@gmail.com', 
    href: 'mailto:nishiraj.work@gmail.com', 
    color: 'text-orange-500',
    bg: 'bg-orange-500/10' 
  },
  { 
    icon: Phone, 
    label: 'Phone', 
    value: '+91 62684 74575', 
    href: 'tel:+916268474575', 
    color: 'text-amber-500',
    bg: 'bg-amber-500/10' 
  },
  { 
    icon: MapPin, 
    label: 'Location', 
    value: 'Vadodara, India', 
    href: '#', 
    color: 'text-orange-600',
    bg: 'bg-orange-600/10' 
  }
]

const SOCIAL_LINKS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/nishirajsingh', color: 'hover:bg-zinc-800' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nishiraj-singh-panwar/', color: 'hover:bg-blue-600' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/nishirajpanwar', color: 'hover:bg-sky-500' }
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-[#030303]">
      {/* Background System Sync */}
      <div className="absolute inset-0 z-0 opacity-[0.1] dark:opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-4"
          >
            <Terminal size={16} /> <span>./communication-channel</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.9]"
          >
            Let's build <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 italic">
              something great.
            </span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Info Bento Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {CONTACT_INFO.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center justify-between p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/50 transition-all shadow-sm overflow-hidden"
              >
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-2xl ${info.bg} ${info.color} group-hover:scale-110 transition-transform`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">{info.label}</p>
                    <p className="text-zinc-900 dark:text-zinc-200 font-bold text-lg">{info.value}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-all text-orange-500">
                  <ExternalLink size={18} />
                </div>
              </motion.a>
            ))}

            {/* High-Impact Socials Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-8 rounded-[2.5rem] bg-zinc-900 dark:bg-orange-600 text-white flex flex-col justify-between h-56 overflow-hidden shadow-2xl shadow-orange-500/20"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                <MessageSquare size={120} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold flex items-center gap-2 mb-2">
                  Connect <Sparkles size={20} />
                </h3>
                <p className="text-white/70 text-sm max-w-[200px]">Find me on digital platforms and social networks.</p>
              </div>

              <div className="flex gap-4 relative z-10">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-End Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="relative p-[1px] rounded-[3rem] bg-gradient-to-b from-zinc-200 to-transparent dark:from-zinc-800 dark:to-transparent">
              <div className="bg-white dark:bg-zinc-950 rounded-[2.9rem] p-8 md:p-12 shadow-2xl">
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-8 bg-orange-500" />
                    <span className="text-orange-500 font-mono text-xs uppercase tracking-tighter">Direct Transmission</span>
                  </div>
                  <h3 className="text-3xl font-bold dark:text-white mb-3">Send a Message</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                    Have a specific project in mind? Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </div>
                
                <EnhancedContactForm />
                
                {/* Status bar inside form box */}
                <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    SYSTEMS READY
                  </div>
                  <span>ENCRYPTED_CHANNEL_ENABLED</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}