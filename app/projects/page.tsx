'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Cloud, Brain, Server, Sparkles, Code, Database, Globe, ExternalLink, Github, Star } from 'lucide-react'
import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Footer } from '../components/footer'
import Link from 'next/link'
import { useRef } from 'react'

const PROJECTS = [
  {
    title: 'Cloud Infrastructure Manager',
    description: 'A comprehensive cloud management platform built with modern cloud technologies for automated deployment and monitoring.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'React', 'TypeScript', 'Terraform'],
    icon: Cloud,
    gradient: 'from-blue-500 to-cyan-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'Cloud'
  },
  {
    title: 'AI-Powered Chatbot Platform',
    description: 'Intelligent conversational AI platform with natural language processing and machine learning capabilities.',
    tech: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    category: 'AI/ML'
  },
  {
    title: 'Serverless API Gateway',
    description: 'Scalable serverless architecture for API management with automatic scaling and cost optimization.',
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Python', 'CloudFormation'],
    icon: Server,
    gradient: 'from-green-500 to-teal-500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Backend'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Modern analytics dashboard with AI-powered insights and real-time data visualization.',
    tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
    icon: Sparkles,
    gradient: 'from-orange-500 to-red-500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'AI/ML'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern payment integration and real-time order tracking.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Docker'],
    icon: Globe,
    gradient: 'from-indigo-500 to-purple-500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack'
  },
  {
    title: 'Real-time Chat Application',
    description: 'Scalable real-time messaging platform with end-to-end encryption and group chat capabilities.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    icon: Code,
    gradient: 'from-pink-500 to-rose-500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack'
  },
  {
    title: 'Data Visualization Suite',
    description: 'Interactive data visualization platform for business intelligence with custom chart types.',
    tech: ['D3.js', 'React', 'Python', 'FastAPI', 'PostgreSQL'],
    icon: Database,
    gradient: 'from-emerald-500 to-cyan-500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'Frontend'
  },
  {
    title: 'DevOps Automation Pipeline',
    description: 'Complete CI/CD pipeline automation with infrastructure as code and automated testing.',
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'Ansible'],
    icon: Server,
    gradient: 'from-yellow-500 to-orange-500',
    liveUrl: '#',
    githubUrl: '#',
    category: 'DevOps'
  }
]

export default function ProjectsPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <main ref={containerRef} className="min-h-screen relative overflow-x-hidden">
      <EnhancedNavbar />
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-pink-900/10 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        {[...Array(isMobile ? 10 : 30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
      
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Showcase
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Where innovation meets execution. Explore my journey through code, creativity, and cutting-edge technology.
            </motion.p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {PROJECTS.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
                  className="group relative"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl`} />
                  
                  <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/30 dark:border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                    {/* Featured Badge */}
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Featured
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-3xl flex items-center justify-center text-white shadow-2xl mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <project.icon size={32} />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:scale-105 transition-transform cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a 
                        href={project.liveUrl}
                        className={`flex-1 text-center py-3 px-6 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                      <motion.a 
                        href={project.githubUrl}
                        className="flex-1 text-center py-3 px-6 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              All Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
              {PROJECTS.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
                  
                  <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/30 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-full">
                    {/* Icon & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <project.icon size={20} />
                      </motion.div>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 rounded-md">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-2">
                      <a 
                        href={project.liveUrl}
                        className="flex-1 text-center py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="flex-1 text-center py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Let's collaborate and turn your ideas into reality with cutting-edge technology and innovative solutions.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/#contact"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Sparkles className="w-6 h-6" />
                    Let's Collaborate
                    <ExternalLink className="w-6 h-6" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}