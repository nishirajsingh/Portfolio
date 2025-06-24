'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Code } from 'lucide-react'

const EXPERIENCES = [
  {
    title: 'Computer Science Student',
    company: 'Parul University',
    location: 'Vadodara, Gujarat',
    period: '2024 - Present',
    type: 'Education',
    icon: GraduationCap,
    description: 'Pursuing Bachelor\'s degree in Computer Science with focus on cloud computing and mobile development.',
    highlights: [
      'Cloud Computing Specialization',
      'iOS Development Projects',
      'Software Engineering Principles',
      'Data Structures & Algorithms'
    ]
  },
  {
    title: 'Cloud Development Projects',
    company: 'Personal Projects',
    location: 'Remote',
    period: '2023 - Present',
    type: 'Development',
    icon: Code,
    description: 'Building scalable cloud solutions and iOS applications as part of learning journey.',
    highlights: [
      'AWS Infrastructure Management',
      'Swift iOS Applications',
      'Serverless Architecture',
      'DevOps Practices'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in technology and continuous learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="liquid-glass morph-card rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <experience.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{experience.title}</h3>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {experience.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 bg-white/50 dark:bg-black/20 rounded-xl p-3"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
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