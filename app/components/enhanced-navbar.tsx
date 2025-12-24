'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun, User, Zap, FolderOpen, Briefcase, Award, Calendar, MessageCircle } from 'lucide-react'
import { useTheme } from './theme-provider'
import { FloatingDock } from './ui/floating-dock'
import { MagneticButton } from './ui/magnetic-button'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
]

const NAVIGATION_DOCK_ITEMS = [
  { title: 'Home', icon: <User size={20} />, href: '/' },
  { title: 'Projects', icon: <FolderOpen size={20} />, href: '/projects' },
  { title: 'Experience', icon: <Briefcase size={20} />, href: '/experience' },
  { title: 'Certifications', icon: <Award size={20} />, href: '/certifications' },
  { title: 'Events', icon: <Calendar size={20} />, href: '/events' },
  { title: 'Contact', icon: <MessageCircle size={20} />, href: '/contact' },
]

export function EnhancedNavbar() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'liquid-glass backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="font-bold text-xl gradient-text hover:scale-105 transition-transform duration-200">
              Nishiraj Singh Panwar
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 relative group font-medium"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-500 transition-all duration-200 group-hover:w-full"></span>
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

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
        <FloatingDock items={NAVIGATION_DOCK_ITEMS} />
      </div>
    </>
  )
}