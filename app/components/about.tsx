'use client'

import { motion } from 'framer-motion'
import { Code, Cloud, Smartphone, GraduationCap } from 'lucide-react'
import { SpotlightCard } from './ui/spotlight-card'
import { TextReveal } from './ui/text-reveal'

const HIGHLIGHTS = [
  {
    icon: Cloud,
    title: 'Cloud Development',
    description: 'Expertise in cloud technologies and scalable solutions'
  },
  {
    icon: Smartphone,
    title: 'Swift Development',
    description: 'iOS app development with modern Swift practices'
  },
  {
    icon: Code,
    title: 'Full Stack',
    description: 'End-to-end development capabilities'
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Currently studying at Parul University'
  }
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            <TextReveal>About Me</TextReveal>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer currently pursuing my studies at Parul University, 
            specializing in cloud technologies and iOS development with Swift.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((highlight, index) => (
            <SpotlightCard
              key={highlight.title}
              className="p-6 text-center"
              spotlightColor="rgba(59, 130, 246, 0.15)"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
            </SpotlightCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 liquid-glass rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">My Journey</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              As a student at Parul University, I'm constantly exploring the intersection of 
              cloud computing and mobile development. My passion lies in creating efficient, 
              scalable solutions that bridge the gap between powerful cloud infrastructure 
              and intuitive user experiences on iOS platforms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}