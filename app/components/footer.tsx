'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react'

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/nishirajsingh',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/nishiraj-singh-panwar/',
    label: 'LinkedIn'
  },
  {
    icon: Twitter,
    href: 'http://twitter.com/nishirajpanwar',
    label: 'Twitter'
  },
  {
    icon: Mail,
    href: 'mailto:nishirajsingh2005@gmail.com',
    label: 'Email'
  }
]

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ready to turn your ideas into reality? Let's connect and create innovative solutions.
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-200 hover:text-blue-500"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <p className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                Made with 
                <Heart 
                  size={16} 
                  className="text-red-500 animate-pulse" 
                  fill="currentColor" 
                />
                by Nishiraj Singh Panwar
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}