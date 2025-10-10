'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Cloud, Brain, GraduationCap, Sparkles, Zap, Target, Rocket, MapPin } from 'lucide-react'
import { useRef } from 'react'

const SKILLS = [
  { 
    name: 'Cloud Technologies', 
    color: '#3B82F6', 
    icon: Cloud,
    tags: ['AWS', 'Azure', 'Docker', 'Kubernetes']
  },
  { 
    name: 'AI/ML Development', 
    color: '#8B5CF6', 
    icon: Brain,
    tags: ['TensorFlow', 'PyTorch', 'OpenAI', 'Python']
  },
  { 
    name: 'Full Stack Development', 
    color: '#10B981', 
    icon: Code,
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript']
  },
  { 
    name: 'Problem Solving', 
    color: '#F59E0B', 
    icon: Target,
    tags: ['Algorithms', 'Architecture', 'Optimization', 'Debugging']
  }
]

const JOURNEY_POINTS = [
  { year: '2018-19', title: 'Ethical Hacking', desc: 'Started with cybersecurity fundamentals', icon: Target },
  { year: '2020-21', title: 'Web Foundations', desc: 'HTML, CSS and debugging skills', icon: Code },
  { year: '2021-22', title: 'JEE Preparation', desc: 'Focused on engineering entrance', icon: GraduationCap },
  { year: '2023', title: 'Security & Networking', desc: 'Cyber-security and networking certifications', icon: Target },
  { year: '2024', title: 'Google Cloud Journey', desc: 'Google Cloud & Arcade program', icon: Cloud },
  { year: '2025', title: 'Full Stack & AWS', desc: 'Web development, DSA & AWS mastery', icon: Rocket }
]

export function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  return (
    <section ref={containerRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 particle-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        {/* Floating Header */}
        <motion.div
          style={{ y }}
          className="text-center mb-16 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full font-medium text-sm">
                <Sparkles className="inline w-4 h-4 mr-2" />
                Get to know me
              </div>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
        </motion.div>

        {/* Timeline Journey */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            My Journey
          </motion.h3>
          
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />
            
            <div className="space-y-8 md:space-y-12">
              {JOURNEY_POINTS.map((point, index) => (
                <motion.div
                  key={point.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} text-center mb-4 md:mb-0`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">{point.year}</div>
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white">{point.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{point.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 mb-4 md:mb-0">
                    <motion.div
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <point.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                  </div>
                  
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl" />
          <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Vadodara, Gujarat • Parul University</span>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">                Passionate about creating intelligent cloud solutions that bridge the gap between 
                powerful infrastructure and user-centric AI applications. Always learning, always building.
              </p>
              
              <motion.div
                className="mt-6 flex justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg">
                  <Zap className="w-5 h-5" />
                  Let's Build Something Amazing
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}