'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import hero from './images/nishiraj.png'
import { Cloud, Binary } from 'lucide-react'
import { EnhancedButton } from './ui/enhanced-button'
import { useEffect, useState } from 'react'

const codeLines = [
  'const developer = "Nishiraj Singh Panwar";',
  'stack = ["React", "Node", "AWS", "Python"];',
  'build(scalable, intelligent);',
  'deploy(cloud="AWS");',
]

export function Hero() {
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % codeLines.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden
  px-4 sm:px-6 lg:px-16
  pt-24 sm:pt-28 lg:pt-10 pb-20">

      {/* Adaptive background */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_50%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_50%)]
        dark:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_45%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.25),transparent_45%)]
      " />

      <div className="absolute inset-0 -z-10 backdrop-blur-[80px] sm:backdrop-blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-3xl sm:text-5xl xl:text-7xl font-bold leading-tight
            text-gray-900 dark:text-white">
            Building
            <span className="block bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Futuristic Cloud & Web
            </span>
            Solutions
          </h1>

          <p className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0
            text-gray-700 dark:text-gray-300">
            I design and engineer scalable cloud platforms, automation tools,
            and AI-driven applications with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <EnhancedButton variant="gradient" size="lg" href="/projects" glow>
              View Projects
            </EnhancedButton>

            <EnhancedButton variant="secondary" size="lg" href="/contact">
              Contact Me
            </EnhancedButton>
          </div>
        </motion.div>

        {/* RIGHT — PHOTO + TERMINAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-col items-center order-1 lg:order-2"
        >

          {/* Floating Icons (desktop only) */}
          <div className="hidden lg:block">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-12 -left-10 p-3 rounded-xl
                bg-white/60 dark:bg-white/10
                backdrop-blur border border-black/10 dark:border-white/20"
            >
              <Binary className="text-white-500" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-12 -right-10 p-3 rounded-xl
                bg-white/60 dark:bg-white/10
                backdrop-blur border border-black/10 dark:border-white/20"
            >
              <Cloud className="text-orange-500" />
            </motion.div>
          </div>

          {/* PHOTO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48
              mb-6 rounded-2xl
              bg-white/70 dark:bg-white/10
              backdrop-blur-xl border border-black/10 dark:border-white/20
              shadow-xl"
          >
            <div className="absolute inset-0 rounded-2xl
              bg-gradient-to-tr from-indigo-400/30 to-pink-400/30 blur-xl" />
            <Image
              src={hero}
              alt="Nishiraj Singh Panwar"
              fill
              className="relative rounded-2xl object-cover"
              priority
              unoptimized
            />
          </motion.div>

          {/* TERMINAL */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg
            rounded-2xl p-4 sm:p-6 font-mono text-sm text-left
            bg-white/70 dark:bg-black/40
            backdrop-blur-xl border border-black/10 dark:border-white/20
            shadow-2xl">

            <div className="flex gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <motion.pre
              key={lineIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-indigo-600 dark:text-indigo-300 whitespace-pre-wrap"
            >
              {codeLines[lineIndex]}
            </motion.pre>

            <span className="inline-block w-2 h-5 ml-1
              bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
              
          </div>
        </motion.div>
      </div>
    </section>
  )
}
