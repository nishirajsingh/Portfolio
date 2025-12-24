'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Terminal } from 'lucide-react'

type ModuleKey = 'cloud' | 'ai' | 'app' | 'languages' | 'tools' | null

const MODULES: Record<Exclude<ModuleKey, null>, {
  title: string
  status: 'ACTIVE' | 'STABLE'
  skills: { name: string; logo: string }[]
}> = {
  cloud: {
    title: 'Cloud Core',
    status: 'ACTIVE',
    skills: [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
      { name: 'Serverless', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
  },

  ai: {
    title: 'AI Pipeline',
    status: 'ACTIVE',
    skills: [
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'OpenAI API', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'LangChain', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Hugging Face', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },

  app: {
    title: 'Application Stack',
    status: 'STABLE',
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    ],
  },

  languages: {
    title: 'Programming Languages',
    status: 'STABLE',
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    ],
  },

  tools: {
    title: 'Dev Systems',
    status: 'STABLE',
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Automation', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    ],
  },
}

export function Skills() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>([])
  const [activeModule, setActiveModule] = useState<ModuleKey>(null)
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)
  const [isTyping, setIsTyping] = useState(false)

  /* Apple-style auto typing */
  function autoTypeCommand(command: string) {
    if (isTyping) return
    setIsTyping(true)
    setInput('')
    let i = 0

    const interval = setInterval(() => {
      i++
      setInput(command.slice(0, i))
      if (i === command.length) {
        clearInterval(interval)
        setTimeout(() => {
          runCommand(command)
          setIsTyping(false)
        }, 300)
      }
    }, 60)
  }

  function runCommand(command: string) {
    const cmd = command.trim().toLowerCase()
    setInput('')
    setHistory(prev => [...prev, command])
    setHistoryIndex(null)

    if (!cmd) return

    if (cmd === 'help') {
      setActiveModule(null)
      setOutput([
        'Available commands:',
        'stack cloud',
        'stack ai',
        'stack app',
        'stack languages',
        'stack tools',
      ])
      return
    }

    if (cmd.startsWith('stack ')) {
      const key = cmd.replace('stack ', '') as ModuleKey
      if (key && MODULES[key]) {
        setActiveModule(key)
        setOutput(MODULES[key].skills.map(s => s.name))
        return
      }
    }

    setActiveModule(null)
    setOutput([`zsh: command not found: ${command}`])
  }

  /* Auto start */
  useEffect(() => {
    setOutput(['Welcome to Tech Control Room.', 'Type `help` to begin.'])
    setTimeout(() => autoTypeCommand('help'), 700)
  }, [])

  return (
    <section id="skills" className="relative px-4 sm:px-6 lg:px-16 pt-10 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6
            rounded-full bg-white/60 dark:bg-white/10
            backdrop-blur border border-black/10 dark:border-white/20 text-sm">
            <Terminal className="w-4 h-4" />
            Developer Control Room
          </div>

          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white">
            Skills as
            <span className="block text-indigo-500">Operational Systems</span>
          </h2>
        </div>

        {/* Control Room */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(Object.keys(MODULES) as ModuleKey[]).map(key => {
              if (!key) return null
              const module = MODULES[key]
              const isActive = activeModule === key
              const isDimmed = activeModule && !isActive

              return (
                <motion.div
                  key={key}
                  animate={{ scale: isActive ? 1.03 : 1 }}
                  className={`
                    rounded-2xl p-6 backdrop-blur-xl border transition-all
                    ${isActive ? 'border-indigo-500 shadow-xl' : 'border-black/10 dark:border-white/20'}
                    ${isDimmed ? 'opacity-50' : ''}
                    bg-white/70 dark:bg-white/5
                  `}
                >
                  <div className="flex justify-between mb-4">
                    <h3 className="font-semibold">{module.title}</h3>
                    <span className="text-xs opacity-60">{module.status}</span>
                  </div>

                  {isActive && (
                    <div className="grid grid-cols-2 gap-3">
                      {module.skills.map(skill => (
                        <div key={skill.name} className="flex items-center gap-2">
                          <Image src={skill.logo} alt={skill.name} width={22} height={22} />
                          <span className="text-sm">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Apple Terminal */}
          <div className="rounded-2xl p-6 font-mono text-sm bg-[#0f1115] text-gray-200 border border-white/10 shadow-2xl">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-3 text-xs opacity-50">zsh</span>
            </div>

            <div className="space-y-1 min-h-[140px]">
              {output.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>

            <form
              onSubmit={e => {
                e.preventDefault()
                runCommand(input)
              }}
              className="mt-4 flex gap-2"
            >
              <span className="opacity-70">&gt;</span>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'ArrowUp') {
                    e.preventDefault()
                    if (!history.length) return
                    const idx = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1)
                    setHistoryIndex(idx)
                    setInput(history[idx])
                  }
                  if (e.key === 'ArrowDown') {
                    e.preventDefault()
                    if (historyIndex === null) return
                    const idx = historyIndex + 1
                    if (idx >= history.length) {
                      setHistoryIndex(null)
                      setInput('')
                    } else {
                      setHistoryIndex(idx)
                      setInput(history[idx])
                    }
                  }
                }}
                className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500"
                placeholder="type command or help"
              />
            </form>

            {/* Mobile shortcuts */}
            <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
              {(['cloud', 'ai', 'app', 'languages', 'tools'] as ModuleKey[]).map(cmd => (
                <button
                  key={cmd}
                  onClick={() => autoTypeCommand(`stack ${cmd}`)}
                  className="px-4 py-2 rounded-lg text-sm bg-white/10 border border-white/20"
                >
                  {cmd?.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}