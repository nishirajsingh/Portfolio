'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { useTheme } from './theme-provider'
import { FloatingDock } from './ui/floating-dock'
import { MagneticButton } from './ui/magnetic-button'

const NAVIGATION_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

const SOCIAL_ITEMS = [
  { title: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/nishirajsingh' },
  { title: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/nishiraj-singh-panwar/' },
  { title: 'Twitter', icon: <Twitter size={20} />, href: 'http://twitter.com/nishirajpanwar' },
  { title: 'Email', icon: <Mail size={20} />, href: 'mailto:nishirajsingh2005@gmail.com' },
]

export function EnhancedNavbar() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'liquid-glass backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-xl gradient-text">
              Nishiraj Singh Panwar
            </div>
            
            <div className="hidden md:flex space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <MagneticButton
              onClick={toggleTheme}
              className="p-2 rounded-full"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </MagneticButton>
          </div>
        </div>
      </nav>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <FloatingDock items={SOCIAL_ITEMS} />
      </div>
    </>
  )
}