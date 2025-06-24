'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { EnhancedButton } from './enhanced-button'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  icon: React.ComponentType<{ className?: string; size?: number | string }>
  gradient: string
  image?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  tech,
  icon: Icon,
  gradient,
  image,
  liveUrl,
  githubUrl,
  featured = false
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-3xl p-1',
        featured ? 'col-span-full lg:col-span-2' : 'col-span-1'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className={cn(
        'absolute inset-0 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300',
        `bg-gradient-to-r ${gradient}`
      )} />
      
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`
        }}
      />
      
      <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 h-full">
        <div className="flex items-start justify-between mb-6">
          <motion.div 
            className={cn(
              'w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg',
              `bg-gradient-to-r ${gradient}`
            )}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon size={28} />
          </motion.div>
          
          {featured && (
            <motion.div 
              className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐ Featured
            </motion.div>
          )}
        </div>
        
        <div className="space-y-4 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((item, index) => (
            <motion.span
              key={item}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {liveUrl && (
            <EnhancedButton
              variant="gradient"
              size="md"
              href={liveUrl}
              className="flex-1"
            >
              <Eye size={16} />
              Demo Comming Soon..
            </EnhancedButton>
          )}
          
          {githubUrl && (
            <EnhancedButton
              variant="secondary"
              size="md"
              href={githubUrl}
              className="flex-1"
            >
              <Code2 size={16} />
              Comming Soon..
            </EnhancedButton>
          )}
        </div>
        
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={isHovered ? {
                y: [-10, -30, -10],
                opacity: [0, 0.6, 0],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}