'use client'

import { motion } from 'framer-motion'
import { Cloud, Brain, Code, Wrench, Sparkles } from 'lucide-react'
import { SkillCard } from './ui/skill-card'
import { TextReveal } from './ui/text-reveal'

const SKILL_CATEGORIES = [
  {
    title: 'Cloud Technologies',
    skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Serverless'],
    icon: Cloud,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  {
    title: 'AI/ML Technologies',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'Hugging Face', 'LangChain'],
    icon: Brain,
    color: 'bg-gradient-to-br from-indigo-500 to-purple-600'
  },
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Go', 'R'],
    icon: Code,
    color: 'bg-gradient-to-br from-emerald-500 to-teal-600'
  },
  {
    title: 'Tools & Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Git', 'CI/CD', 'Terraform'],
    icon: Wrench,
    color: 'bg-gradient-to-br from-orange-500 to-amber-600'
  }
]

export function Skills() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 particle-bg opacity-30" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full text-sm font-medium text-green-600 dark:text-green-400 mb-6"
            animate={isMobile ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
            Technical Expertise
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-2">
            <TextReveal className="gradient-text">
              Skills & Technologies
            </TextReveal>
          </h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit for building modern cloud and AI-powered solutions. 
            Constantly learning and adapting to the latest technologies and best practices.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard
              key={category.title}
              {...category}
              index={index}
            />
          ))}
        </div>
        
        {/* Additional info */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="liquid-glass rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Always Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Technology evolves rapidly, and so do I. Currently exploring advanced AI/ML models, 
              cloud-native architectures, and cutting-edge machine learning frameworks. 
              Passionate about staying at the forefront of innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}