'use client'

import { motion } from 'framer-motion'
import {
  Cloud,
  Brain,
  Code,
  Rocket,
  MapPin,
  Sparkles
} from 'lucide-react'

const SKILLS = [
  {
    title: 'Cloud Engineering',
    desc: 'Scalable infrastructure & deployments',
    icon: Cloud,
  },
  {
    title: 'AI / ML Development',
    desc: 'Intelligent & data-driven systems',
    icon: Brain,
  },
  {
    title: 'Full-Stack Development',
    desc: 'Modern web apps & platforms',
    icon: Code,
  },
  {
    title: 'Problem Solving',
    desc: 'Architecture, logic & optimization',
    icon: Rocket,
  },
]

export function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        px-4 sm:px-6 lg:px-16
        pt-10 pb-32
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_50%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_50%)]
        dark:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_45%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.25),transparent_45%)]
      " />
      <div className="absolute inset-0 -z-10 backdrop-blur-[100px]" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6
            rounded-full bg-indigo-500/10 dark:bg-indigo-400/10
            border border-indigo-500/20 dark:border-indigo-400/20
            text-indigo-600 dark:text-indigo-300 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            About Me
          </div>

          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold
            text-gray-900 dark:text-white">
            Engineer mindset.
            <span className="block bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Builder mentality.
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m <span className="font-semibold text-gray-900 dark:text-white">Nishiraj Singh Panwar</span>,
              a developer focused on building scalable cloud platforms,
              automation tools, and AI-powered applications.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey started with security and web fundamentals and evolved
              into full-stack development, cloud engineering, and AI/ML.
              I enjoy turning complex problems into clean, production-ready systems.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-2">
              <MapPin className="w-4 h-4" />
              Vadodara, Gujarat • Parul University
            </div>
          </motion.div>

          {/* RIGHT — Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.title}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25 }}
                className="
                  relative rounded-2xl p-6
                  bg-white/70 dark:bg-white/10
                  backdrop-blur-xl
                  border border-black/10 dark:border-white/20
                  shadow-xl
                "
              >
                <skill.icon className="w-8 h-8 mb-4 text-indigo-500" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {skill.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <a
            href="/contact"
            className="
              inline-flex items-center gap-2
              px-8 py-4 rounded-full font-semibold
              bg-gradient-to-r from-indigo-500 to-pink-500
              text-white shadow-lg hover:shadow-xl
              transition-all
            "
          >
            <Rocket className="w-5 h-5" />
            Let’s Build Something Together
          </a>
        </motion.div>

      </div>
    </section>
  )
}
