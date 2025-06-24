'use client'

import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient' | 'neon'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  href?: string
  magnetic?: boolean
  glow?: boolean
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    children, 
    href,
    magnetic = true,
    glow = false,
    ...props 
  }, ref) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!magnetic) return
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setMousePosition({ x: x * 0.1, y: y * 0.1 })
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 })
    }

    const baseClasses = cn(
      'relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group',
      {
        'px-3 py-1.5 text-sm rounded-lg': size === 'sm',
        'px-4 py-2 text-base rounded-xl': size === 'md',
        'px-6 py-3 text-lg rounded-xl': size === 'lg',
        'px-8 py-4 text-xl rounded-2xl': size === 'xl',
      },
      {
        'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl': variant === 'primary',
        'liquid-glass text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-black/20 focus:ring-gray-500': variant === 'secondary',
        'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500': variant === 'ghost',
        'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 focus:ring-purple-500 shadow-lg hover:shadow-xl': variant === 'gradient',
        'bg-black text-white border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400 shadow-lg shadow-cyan-400/25 hover:shadow-cyan-400/50': variant === 'neon',
      },
      glow && 'animate-glow',
      className
    )

    const ButtonComponent = (
      <motion.button
        ref={ref}
        className={baseClasses}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...(props as any)}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        
        <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        
        {variant === 'neon' && (
          <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </motion.button>
    )

    if (href) {
      return (
        <a href={href} className="inline-block">
          {ButtonComponent}
        </a>
      )
    }

    return ButtonComponent
  }
)

EnhancedButton.displayName = 'EnhancedButton'

export { EnhancedButton }