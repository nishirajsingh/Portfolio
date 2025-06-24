'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import hero from './images/nishiraj.png'
import { ArrowDown, Sparkles, Code, Cloud } from 'lucide-react'
import { TextReveal } from './ui/text-reveal'
import { EnhancedButton } from './ui/enhanced-button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">

      
      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Profile section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Floating icons */}
            <motion.div
              className="absolute -top-8 -left-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
            
            <motion.div
              className="absolute -top-4 -right-12 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
              animate={{ 
                y: [10, -10, 10],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <Cloud className="w-5 h-5 text-white" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
            
            {/* Profile image with advanced effects */}
            <div className="relative w-56 h-56 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full blur-2xl opacity-40 animate-spin-slow" />
              <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-60 animate-pulse" />
              
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={hero}
                  alt="Nishiraj Singh Panwar"
                  width={224}
                  height={224}
                  className="relative rounded-full object-cover border-4 border-white/30 dark:border-gray-800/30 shadow-2xl backdrop-blur-sm"
                  priority
                />
                
                {/* Rotating ring */}
                <div className="absolute inset-0 border-2 border-dashed border-blue-400/50 rounded-full animate-spin-slow" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
                Available for opportunities
              </motion.div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight pb-4">
                <TextReveal className="gradient-text">
                  Nishiraj Singh Panwar
                </TextReveal>
              </h1>
            </div>
            
            <motion.div
              className="space-y-4 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                Cloud Developer & Swift Developer
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Student at Parul University crafting innovative solutions in cloud technologies and iOS development. 
                Passionate about building scalable applications that make a difference.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
          >
            <EnhancedButton
              variant="gradient"
              size="lg"
              href="#projects"
              glow
              className="min-h-[60px] px-8 py-4"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">View My Work</span>
            </EnhancedButton>
            
            <EnhancedButton
              variant="secondary"
              size="lg"
              href="#contact"
              className="min-h-[60px] px-8 py-4"
            >
              <span className="font-semibold">Get In Touch</span>
            </EnhancedButton>
          </motion.div>
          

        </motion.div>
      </div>
    </section>
  )
}