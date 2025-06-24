'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedGradientProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
}

export function AnimatedGradient({ children, className, variant = 'primary' }: AnimatedGradientProps) {
  const gradients = {
    primary: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600',
    secondary: 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500',
    accent: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
  }

  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl p-[1px]',
        className
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className={cn(
          'absolute inset-0 opacity-75',
          gradients[variant]
        )}
        animate={{
          background: [
            'linear-gradient(0deg, #667eea, #764ba2)',
            'linear-gradient(90deg, #667eea, #764ba2)',
            'linear-gradient(180deg, #667eea, #764ba2)',
            'linear-gradient(270deg, #667eea, #764ba2)',
            'linear-gradient(360deg, #667eea, #764ba2)',
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl h-full">
        {children}
      </div>
    </motion.div>
  )
}