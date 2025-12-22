'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Code, Crown, Gem } from 'lucide-react'

const EXPERIENCES = [
  {
    title: 'Computer Science Student',
    company: 'Parul University',
    location: 'Vadodara, Gujarat',
    period: '2024 - Present',
    type: 'Education',
    icon: GraduationCap,
    description: 'Pursuing Bachelor\'s degree in Computer Science with focus on cloud computing and AI/ML development.',
    highlights: [
      'Cloud Computing Specialization',
      'AI/ML Development Projects',
      'Software Engineering Principles',
      'Data Structures & Algorithms'
    ],
    gradient: 'from-orange-500 to-amber-600',
    border: 'border-orange-300 dark:border-orange-700'
  },
  {
    title: 'AI/ML Development Projects',
    company: 'Personal Projects',
    location: 'Remote',
    period: '2023 - Present',
    type: 'Development',
    icon: Code,
    description: 'Building scalable cloud solutions and AI/ML applications as part of learning journey.',
    highlights: [
      'AWS Infrastructure Management',
      'Machine Learning Models',
      'Serverless Architecture',
      'DevOps Practices'
    ],
    gradient: 'from-red-500 to-orange-600',
    border: 'border-red-300 dark:border-red-700'
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10" />
      <div className="absolute inset-0 mandala-bg opacity-5" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Experience & Education</h2>
            <Crown className="w-8 h-8 text-orange-600" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in technology and continuous learning
          </p>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-orange-500 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-amber-500 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-amber-500 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-orange-500 rounded-br-lg" />
              
              <div className={`relative bg-gradient-to-br from-orange-50/80 to-amber-50/80 dark:from-orange-900/20 dark:to-amber-900/20 backdrop-blur-sm rounded-2xl p-8 border-2 ${experience.border} shadow-xl hover:shadow-2xl transition-all`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${experience.gradient} rounded-xl flex items-center justify-center shadow-lg relative flex-shrink-0`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <experience.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Gem className="w-3 h-3 text-orange-900" />
                    </div>
                  </motion.div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{experience.title}</h3>
                        <p className="text-xl font-semibold gradient-text">{experience.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar size={16} />
                          <span className="text-sm">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {experience.highlights.map((highlight, i) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.15 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-orange-200/50 dark:border-orange-700/50 hover:border-orange-400 dark:hover:border-orange-500 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{highlight}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}