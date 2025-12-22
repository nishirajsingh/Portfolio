'use client'

import { motion } from 'framer-motion'
import { Cloud, Brain, Code, Wrench, Sparkles, Crown, Gem } from 'lucide-react'
import { TextReveal } from './ui/text-reveal'

const SKILL_CATEGORIES = [
  {
    title: 'Cloud Technologies',
    skills: [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Serverless', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ],
    icon: Cloud,
    gradient: 'from-orange-500 to-amber-600',
    border: 'border-orange-300 dark:border-orange-700'
  },
  {
    title: 'AI/ML Technologies',
    skills: [
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'OpenAI API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Hugging Face', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'LangChain', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
    ],
    icon: Brain,
    gradient: 'from-red-500 to-orange-600',
    border: 'border-red-300 dark:border-red-700'
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' }
    ],
    icon: Code,
    gradient: 'from-amber-500 to-yellow-600',
    border: 'border-amber-300 dark:border-amber-700'
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' }
    ],
    icon: Wrench,
    gradient: 'from-yellow-500 to-orange-600',
    border: 'border-yellow-300 dark:border-yellow-700'
  }
]

export function Skills() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Royal Background Pattern */}
      <div className="absolute inset-0 mandala-bg opacity-5" />
      <div className="absolute top-10 left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-2 border-orange-500/20 rounded-full text-sm font-bold text-orange-600 dark:text-orange-400 mb-6"
            animate={isMobile ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Crown className="w-5 h-5" />
            Royal Technical Arsenal
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-2">
            <TextReveal className="gradient-text">
              Skills & Mastery
            </TextReveal>
          </h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            A royal collection of modern technologies, forged through dedication and continuous learning.
          </motion.p>
        </motion.div>

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
        </div>
        
        {/* Royal Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={isMobile ? {} : { opacity: 0, y: 30 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-xl" />
            <div className="relative bg-gradient-to-br from-orange-50/90 to-amber-50/90 dark:from-orange-900/30 dark:to-amber-900/30 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-300/50 dark:border-orange-700/50">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Crown className="w-6 h-6 text-orange-600" />
                <h3 className="text-2xl font-bold gradient-text">Continuous Evolution</h3>
                <Crown className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Like the timeless traditions of Rajputana, these skills are constantly refined and expanded. 
                Currently mastering advanced AI architectures and cloud-native solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}