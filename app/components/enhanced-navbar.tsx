'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Moon, Sun, User, FolderOpen, 
  Briefcase, Calendar, MessageCircle,
  Sparkles, Award, GraduationCap,
  Command
} from 'lucide-react'
import { useTheme } from './theme-provider' 
import { MagneticButton } from './ui/magnetic-button' 
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Full site map for Desktop
const NAVIGATION_ITEMS = [
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Events', href: '/events' },
]

// Priority items for Mobile Dock
const NAVIGATION_DOCK_ITEMS = [
  { title: 'Home', icon: <User size={20} />, href: '/' },
  { title: 'Works', icon: <FolderOpen size={20} />, href: '/projects' },
  { title: 'Exp', icon: <Briefcase size={20} />, href: '/experience' },
  { title: 'Awards', icon: <Award size={20} />, href: '/certifications' },
  { title: 'Mail', icon: <MessageCircle size={20} />, href: '/contact' },
]

export function EnhancedNavbar() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* --- DESKTOP NAVBAR (Centred Glass Pill) --- */}
      <div className="fixed top-0 left-0 w-full z-[60] flex justify-center px-4 py-6 pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            pointer-events-auto
            flex items-center gap-2 sm:gap-4 px-4 sm:px-5 py-2 rounded-[2rem]
            transition-all duration-500 border
            ${isScrolled 
              ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-black/10' 
              : 'bg-white/40 dark:bg-zinc-950/20 backdrop-blur-md border-zinc-200/50 dark:border-white/10'}
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group mr-2">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/20"
            >
              <Command size={18} />
            </motion.div>
          </Link>

          <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800 hidden lg:block" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-2 text-xs lg:text-sm font-medium rounded-xl transition-all ${
                    isActive 
                    ? 'text-orange-500 bg-orange-500/10 font-bold' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

          {/* Controls */}
          <div className="flex items-center gap-2">
            <MagneticButton
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-orange-500 transition-colors"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </MagneticButton>

            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 bg-zinc-950 dark:bg-orange-600 hover:bg-black dark:hover:bg-orange-500 text-white px-5 py-2 rounded-xl text-xs font-bold transition-all"
            >
              Connect <Sparkles size={14} />
            </Link>
          </div>
        </motion.nav>
      </div>

      {/* --- MOBILE SYSTEM DOCK --- */}
      <div className="fixed bottom-6 left-0 w-full flex justify-center z-[100] md:hidden px-4">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        >
          <div className="relative flex items-center gap-1 p-2 rounded-[2.5rem] bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            {NAVIGATION_DOCK_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.title} href={item.href} className="relative group">
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 flex flex-col items-center justify-center rounded-2xl transition-all duration-300 ${
                      isActive ? 'bg-orange-500/15 text-orange-500' : 'text-zinc-500'
                    }`}
                  >
                    <div className={isActive ? 'text-orange-500' : 'group-active:text-orange-400'}>
                      {item.icon}
                    </div>
                    
                    {/* Sliding Indicator */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeDot"
                        className="absolute -bottom-1 w-1 h-1 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" 
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
            
            <div className="w-[1px] h-6 bg-zinc-200 dark:bg-zinc-800 mx-1.5" />
            
            <motion.button 
              whileTap={{ rotate: 90, scale: 0.8 }}
              onClick={toggleTheme}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  )
} 