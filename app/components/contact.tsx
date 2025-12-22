'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { EnhancedContactForm } from './ui/enhanced-contact-form'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nishiraj.work@gmail.com',
    href: 'mailto:nishiraj.work@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 62684 74575',
    href: 'tel:+916268474575'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Vadodara, Gujarat, India',
    href: '#'
  }
]

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/nishirajsingh',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nishiraj-singh-panwar/',
    color: 'hover:text-blue-600'
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://x.com/nishirajpanwar',
    color: 'hover:text-blue-400'
  }
]

export function Contact() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
<<<<<<< HEAD
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
=======
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
=======
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next cloud or AI/ML project? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
<<<<<<< HEAD
            initial={isMobile ? {} : { opacity: 0, x: -30 }}
            whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
=======
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
            viewport={{ once: true }}
            className="space-y-8"
          >
<<<<<<< HEAD
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
=======
=======
            viewport={{ once: true }}
            className="space-y-8"
          >
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {CONTACT_INFO.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className={`flex items-center gap-4 p-4 bg-white/50 dark:bg-black/20 rounded-xl ${isMobile ? '' : 'hover:scale-105'} transition-transform duration-200`}
                  >
                    <div className="w-12 h-12 min-w-[3rem] bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{contact.label}</p>
                      <p className="font-semibold break-words">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
<<<<<<< HEAD
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
=======
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/50 dark:bg-black/20 rounded-xl flex items-center justify-center transition-all duration-200 ${isMobile ? '' : 'hover:scale-110'} ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
            initial={isMobile ? {} : { opacity: 0, x: 30 }}
            whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
=======
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
=======
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
            viewport={{ once: true }}
          >
            <EnhancedContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}