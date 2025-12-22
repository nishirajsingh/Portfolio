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
    description: 'Pursuing Bachelor\'s degree in Computer Science with focus on cloud computing and AI/ML development.',
    highlights: [
      'Cloud Computing Specialization',
      'AI/ML Development Projects',
      'Software Engineering Principles',
      'Data Structures & Algorithms'
    ]
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
    ]
  }
]

export function Experience() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
<<<<<<< HEAD
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
=======
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
<<<<<<< HEAD
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
=======
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
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
<<<<<<< HEAD
<<<<<<< HEAD
              initial={isMobile ? {} : { opacity: 0, scale: 0.9 }}
              whileInView={isMobile ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: isMobile ? 0 : index * 0.1 }}
=======
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
              viewport={{ once: true }}
              className="liquid-glass morph-card rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300"
            >
<<<<<<< HEAD
              <div className="hidden md:block absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-orange-500 rounded-tl-lg" />
              <div className="hidden md:block absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-amber-500 rounded-tr-lg" />
              <div className="hidden md:block absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-amber-500 rounded-bl-lg" />
              <div className="hidden md:block absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-orange-500 rounded-br-lg" />
              
              <div className={`relative bg-gradient-to-br from-orange-50/80 to-amber-50/80 dark:from-orange-900/20 dark:to-amber-900/20 backdrop-blur-sm rounded-2xl p-8 border-2 ${experience.border} shadow-xl transition-all`}>
                <div className="flex flex-col lg:flex-row gap-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${experience.gradient} rounded-xl flex items-center justify-center shadow-lg relative flex-shrink-0`}
                    whileHover={isMobile ? {} : { rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
=======
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
=======
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="liquid-glass morph-card rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
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
<<<<<<< HEAD
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
<<<<<<< HEAD
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
                          initial={isMobile ? {} : { opacity: 0, x: -20 }}
                          whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
                          transition={{ delay: isMobile ? 0 : index * 0.1 + i * 0.05 }}
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
=======
                    ))}
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
=======
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
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
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