'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Crown } from 'lucide-react'
import { EnhancedContactForm } from './ui/enhanced-contact-form'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'nishiraj.work@gmail.com', href: 'mailto:nishiraj.work@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 62684 74575', href: 'tel:+916268474575' },
  { icon: MapPin, label: 'Location', value: 'Vadodara, Gujarat, India', href: '#' }
]

const SOCIAL_LINKS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/nishirajsingh' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nishiraj-singh-panwar/' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/nishirajpanwar' }
]

export function Contact() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Let's Connect</h2>
            <Crown className="w-8 h-8 text-orange-600" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on your next cloud or AI/ML project?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={isMobile ? {} : { opacity: 0, x: -30 }}
            whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {CONTACT_INFO.map((contact, i) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0 : i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-800 dark:to-orange-950/20 rounded-2xl border-2 border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <contact.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{contact.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="p-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Send className="w-5 h-5" /> Follow Me
              </h3>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={isMobile ? {} : { opacity: 0, x: 30 }}
            whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <EnhancedContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}