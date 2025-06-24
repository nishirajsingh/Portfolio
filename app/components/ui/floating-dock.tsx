'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface FloatingDockProps {
  items: {
    title: string
    icon: React.ReactNode
    href: string
  }[]
  className?: string
}

export function FloatingDock({ items, className }: FloatingDockProps) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'mx-auto flex h-16 items-end gap-4 rounded-2xl liquid-glass px-4 pb-3',
        className
      )}
    >
      {items.map((item) => (
        <AppIcon mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function AppIcon({ mouseX, title, icon, href }: {
  mouseX: any
  title: string
  icon: React.ReactNode
  href: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square w-10 rounded-full liquid-glass flex items-center justify-center"
    >
      <a
        href={href}
        className="flex h-full w-full items-center justify-center rounded-full"
        title={title}
      >
        {icon}
      </a>
    </motion.div>
  )
}