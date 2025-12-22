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
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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

<<<<<<< HEAD
        {/* Hexagonal/Diamond Layout */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {SKILL_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.title}
                initial={isMobile ? {} : { opacity: 0, scale: 0.9 }}
                whileInView={isMobile ? {} : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: isMobile ? 0 : index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Decorative corners */}
                <div className="hidden md:block absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-orange-500 rounded-tl-lg" />
                <div className="hidden md:block absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-amber-500 rounded-tr-lg" />
                <div className="hidden md:block absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-amber-500 rounded-bl-lg" />
                <div className="hidden md:block absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-orange-500 rounded-br-lg" />
                
                {/* Main Card */}
                <div className={`relative bg-gradient-to-br from-orange-50/80 to-amber-50/80 dark:from-orange-900/20 dark:to-amber-900/20 backdrop-blur-sm rounded-2xl p-8 border-2 ${category.border} shadow-xl transition-all`}>
                  {/* Icon with Royal Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg relative`}
                      whileHover={isMobile ? {} : { rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Gem className="w-3 h-3 text-orange-900" />
                      </div>
                    </motion.div>
                    
                    <div className="text-right">
                      <div className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">Mastery Level</div>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.15 + i * 0.1 }}
                            viewport={{ once: true }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  
                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={isMobile ? {} : { opacity: 0, x: -20 }}
                        whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
                        transition={{ delay: isMobile ? 0 : index * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-orange-200/50 dark:border-orange-700/50 hover:border-orange-400 dark:hover:border-orange-500 transition-colors group/skill">
                          <div className="flex items-center gap-2">
                            <img src={skill.logo} alt={skill.name} className="w-5 h-5 object-contain" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-orange-600 dark:group-hover/skill:text-orange-400 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard
              key={category.title}
              {...category}
              index={index}
            />
          ))}
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
        </div>
        
        {/* Additional info */}
        <motion.div
<<<<<<< HEAD
          className="mt-16 text-center"
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
=======
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
>>>>>>> parent of 7a66104 (Add royal Rajputana theme with triangular ribbon banner and update UI components)
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