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
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          'flex items-end gap-3 rounded-2xl liquid-glass px-3 py-4 overflow-x-auto scrollbar-hide',
          'min-h-[100px] w-full',
          className
        )}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {items.map((item) => (
          <AppIcon mouseX={mouseX} key={item.title} {...item} />
        ))}
      </motion.div>
    </div>
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

  const widthSync = useTransform(distance, [-100, 0, 100], [40, 50, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <div className="flex flex-col items-center gap-2 flex-shrink-0">
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
      
      <div className="px-2 py-1 rounded-lg backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-md">
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
          {title}
        </span>
      </div>
    </div>
  )
}