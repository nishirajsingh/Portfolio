'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Cpu } from 'lucide-react'

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/nishirajsingh',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/nishiraj-singh-panwar/',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: 'http://twitter.com/nishirajpanwar',
    label: 'Twitter',
  },
  {
    icon: Mail,
    href: 'mailto:nishiraj.work@gmail.com',
    label: 'Email',
  },
]

export function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 lg:px-16 pt-10 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Top Divider */}
        <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative rounded-3xl
            bg-white/70 dark:bg-white/5
            backdrop-blur-xl
            border border-black/10 dark:border-white/15
            p-6 sm:p-10
          "
        >
          {/* Identity Card */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-12">

            {/* Left: Developer Card */}
            <div className="flex items-center gap-5">
              {/* Logo / Mark */}
              <div
                className="
                  w-14 h-14 rounded-xl
                  bg-black/5 dark:bg-white/10
                  border border-black/10 dark:border-white/20
                  flex items-center justify-center
                  font-semibold tracking-widest
                  text-gray-900 dark:text-white
                "
              >
                NSP
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Nishiraj Singh Panwar
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Cloud & AI Developer
                </p>

                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  <Cpu size={14} />
                  <span>System Status: Online</span>
                </div>
              </div>
            </div>

            {/* Right: System Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                { label: 'Mode', value: 'Production' },
                { label: 'Focus', value: 'Cloud • AI' },
                { label: 'Build', value: new Date().getFullYear() },
              ].map(item => (
                <div
                  key={item.label}
                  className="
                    rounded-xl px-4 py-3
                    bg-black/5 dark:bg-white/10
                    border border-black/10 dark:border-white/15
                  "
                >
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-1 font-medium text-gray-900 dark:text-gray-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

            {/* Socials */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Endpoints
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="
                      w-11 h-11
                      rounded-xl
                      bg-black/5 dark:bg-white/10
                      border border-black/10 dark:border-white/15
                      flex items-center justify-center
                      text-gray-700 dark:text-gray-300
                      hover:text-indigo-500
                      transition-colors
                    "
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Signature */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>© {new Date().getFullYear()} Nishiraj Singh Panwar</p>
              <p className="mt-1">Designed & built as a system.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
