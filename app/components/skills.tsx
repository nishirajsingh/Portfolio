'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Terminal as TerminalIcon, Cpu, Activity, Layout, Layers, Box } from 'lucide-react'

type ModuleKey = 'cloud' | 'ai' | 'app' | 'languages' | 'tools' | null

const MODULES: Record<Exclude<ModuleKey, null>, {
  title: string
  status: 'ACTIVE' | 'STABLE'
  icon: any
  skills: { name: string; logo: string }[]
}> = {
  cloud: {
    title: 'Cloud Core',
    status: 'ACTIVE',
    icon: Activity,
    skills: [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'K8s', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    ],
  },
  ai: {
    title: 'AI Pipeline',
    status: 'ACTIVE',
    icon: Cpu,
    skills: [
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'OpenAI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'LangChain', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },
  app: {
    title: 'App Stack',
    status: 'STABLE',
    icon: Layout,
    skills: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Postgres', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
  },
  languages: {
    title: 'Languages',
    status: 'STABLE',
    icon: Box,
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JS/TS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ],
  },
  tools: {
    title: 'Dev Systems',
    status: 'STABLE',
    icon: Layers,
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
  },
}

export function Skills() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>([])
  const [activeModule, setActiveModule] = useState<ModuleKey>(null)
  const [isTyping, setIsTyping] = useState(false)

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
    }, 50)
  }

  function runCommand(command: string) {
    const cmd = command.trim().toLowerCase()
    setInput('')
    if (!cmd) return

    if (cmd === 'help') {
      setActiveModule(null)
      setOutput(['> Fetching available modules...', 'cloud, ai, app, languages, tools'])
      return
    }

    if (cmd.startsWith('stack ')) {
      const key = cmd.replace('stack ', '') as ModuleKey
      if (key && MODULES[key]) {
        setActiveModule(key)
        setOutput([`> Initializing ${MODULES[key].title}...`, `> Status: ${MODULES[key].status}`, `> Skills loaded.`])
        return
      }
    }
    setActiveModule(null)
    setOutput([`err: module '${command}' not found`])
  }

  useEffect(() => {
    setOutput(['System ready.', 'Initializing Skill-Core...'])
    setTimeout(() => autoTypeCommand('help'), 1000)
  }, [])

  return (
    <section id="skills" className="relative px-6 lg:px-12 py-24 bg-white dark:bg-[#030303] overflow-hidden">
      {/* Background Sync */}
      <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]" 
           style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-4">
              <TerminalIcon size={16} /> <span>./control-room</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold dark:text-white tracking-tighter">
              The Engine <br /> <span className="text-zinc-400">Under the Hood.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Module Bento Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {(Object.keys(MODULES) as ModuleKey[]).map((key, i) => {
              if (!key) return null
              const module = MODULES[key]
              const isActive = activeModule === key
              
              return (
                <motion.div
                  key={key}
                  onClick={() => autoTypeCommand(`stack ${key}`)}
                  whileHover={{ y: -5 }}
                  className={`relative p-6 rounded-[2rem] border transition-all cursor-pointer group h-full
                    ${isActive 
                      ? 'bg-orange-500/10 border-orange-500 shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]' 
                      : 'bg-zinc-50/50 dark:bg-zinc-900/30 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'}
                  `}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${isActive ? 'bg-orange-500 text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500'}`}>
                      <module.icon size={20} />
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${isActive ? 'border-orange-500 text-orange-500' : 'border-zinc-500/30 text-zinc-500'}`}>
                      {module.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold dark:text-white mb-2">{module.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {module.skills.map(s => (
                      <div key={s.name} className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-medium border transition-colors
                        ${isActive ? 'bg-orange-500/10 border-orange-500/20 text-orange-400' : 'bg-zinc-100 dark:bg-zinc-800/50 border-transparent text-zinc-500'}
                      `}>
                        <Image src={s.logo} alt="" width={14} height={14} className={isActive ? 'grayscale-0' : 'grayscale'} />
                        {s.name}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* RIGHT: High-Tech Terminal (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden">
              <div className="bg-zinc-900/50 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">zsh — session-01</span>
              </div>
              
              <div className="p-8 font-mono text-sm min-h-[300px] flex flex-col">
                <div className="flex-1 space-y-2">
                  <AnimatePresence mode="popLayout">
                    {output.map((line, i) => (
                      <motion.div
                        key={i + line}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={line.startsWith('err') ? 'text-red-400' : 'text-zinc-400'}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <form
                  onSubmit={e => { e.preventDefault(); runCommand(input) }}
                  className="mt-6 flex gap-3 items-center border-t border-zinc-800 pt-6"
                >
                  <span className="text-orange-500 font-bold">➜</span>
                  <span className="text-emerald-500 text-xs">~</span>
                  <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-orange-400 placeholder-zinc-700"
                    placeholder="help"
                    disabled={isTyping}
                  />
                </form>
              </div>
            </div>
            
            {/* Quick Helper Labels */}
            <p className="mt-4 text-center text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
              Click a module to auto-execute command
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}