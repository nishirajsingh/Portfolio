'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SkillIcon } from './skill-icon'

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ComponentType<{ className?: string; size?: number }>
  color: string
  index: number
}

export function SkillCard({ title, skills, icon: Icon, color, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={cn(
        'absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md',
        color
      )} />
      
      <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 h-full border border-gray-200/30 dark:border-gray-700/30 hover:border-gray-300/50 dark:hover:border-gray-600/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            className={cn(
              'w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg',
              color
            )}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon size={28} />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skill}
              className="group/skill relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 + skillIndex * 0.05 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm rounded-2xl p-4 text-center border border-gray-200/30 dark:border-gray-700/30 hover:border-blue-300/40 dark:hover:border-blue-600/40 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex flex-col items-center gap-2">
                  <SkillIcon skill={skill} className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-200" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-200">
                    {skill}
                  </span>
                </div>
                
                <div className="absolute inset-0 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}