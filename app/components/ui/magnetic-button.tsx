'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  strength?: number
}

export function MagneticButton({ 
  children, 
  className, 
  strength = 0.3, 
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * strength, y: middleY * strength })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        'relative overflow-hidden rounded-xl px-6 py-3 font-medium transition-all duration-200',
        'liquid-glass liquid-button hover:scale-105',
        className
      )}
      {...(props as any)}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}