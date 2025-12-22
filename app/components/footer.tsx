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
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
=======
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
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}