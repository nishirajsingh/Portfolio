'use client'

import { motion } from 'framer-motion'

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Primary Aurora Layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(120, 119, 198, 0.4) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 30%, rgba(255, 119, 198, 0.3) 0%, transparent 60%)',
            'radial-gradient(ellipse 90% 60% at 30% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 60%), radial-gradient(ellipse 70% 90% at 70% 40%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)',
            'radial-gradient(ellipse 100% 70% at 40% 60%, rgba(120, 219, 255, 0.2) 0%, transparent 60%), radial-gradient(ellipse 80% 100% at 60% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 60%)',
            'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(120, 119, 198, 0.4) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 30%, rgba(255, 119, 198, 0.3) 0%, transparent 60%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          filter: 'blur(120px)',
          opacity: 0.6
        }}
      />
      
      {/* Secondary Aurora Layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 120% 80% at 10% 60%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(ellipse 80% 120% at 90% 40%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse 100% 90% at 20% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(ellipse 90% 100% at 80% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse 110% 70% at 30% 50%, rgba(14, 165, 233, 0.12) 0%, transparent 50%), radial-gradient(ellipse 70% 110% at 70% 60%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse 120% 80% at 10% 60%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(ellipse 80% 120% at 90% 40%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5
        }}
        style={{
          filter: 'blur(100px)',
          opacity: 0.4
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            x: [-10, 10, -10],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}