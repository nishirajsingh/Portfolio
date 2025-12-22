'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail, Crown } from 'lucide-react'
import { RajputanaRibbon } from './ui/rajputana-ribbon'

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
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-5" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="relative">
            <div className="hidden md:block absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-orange-500 rounded-tl-xl" />
            <div className="hidden md:block absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-amber-500 rounded-tr-xl" />
            <div className="hidden md:block absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-amber-500 rounded-bl-xl" />
            <div className="hidden md:block absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-orange-500 rounded-br-xl" />
            
            <div className="bg-gradient-to-br from-orange-50/90 to-amber-50/90 dark:from-orange-900/30 dark:to-amber-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-300 dark:border-orange-700">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Crown className="w-6 h-6 text-orange-600" />
                <h3 className="text-2xl font-bold gradient-text">
                  Let's Build Something Amazing Together
                </h3>
                <Crown className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Ready to turn your ideas into reality? Let's connect and create innovative solutions.
              </p>
              
              <div className="flex justify-center gap-4 mb-8">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={isMobile ? {} : { scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-xl flex items-center justify-center shadow-lg transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
              
              <div className="border-t-2 border-orange-300 dark:border-orange-700 pt-6">
                <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                  Crafted with 
                  <Heart 
                    size={16} 
                    className="text-red-500 animate-pulse" 
                    fill="currentColor" 
                  />
                  by Nishiraj Singh Panwar
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <RajputanaRibbon />
    </footer>
  )
}