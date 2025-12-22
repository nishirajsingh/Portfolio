'use client'

import { motion } from 'framer-motion'
import { Cloud, Brain, Server, Sparkles, Crown, ExternalLink, Github, Gem } from 'lucide-react'
import { TextReveal } from './ui/text-reveal'

const PROJECTS = [
  {
    title: 'Cloud Infrastructure Manager',
    description: 'A comprehensive cloud management platform built with modern cloud technologies for automated deployment and monitoring. Features real-time analytics, cost optimization, and multi-cloud support.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'React', 'TypeScript', 'Terraform'],
    icon: Cloud,
    gradient: 'from-orange-500 to-amber-600',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'AI-Powered Chatbot Platform',
    description: 'Intelligent conversational AI platform with natural language processing and machine learning capabilities. Features context awareness, multi-language support, and real-time learning.',
    tech: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
    icon: Brain,
    gradient: 'from-red-500 to-orange-600',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Serverless API Gateway',
    description: 'Scalable serverless architecture for API management with automatic scaling and cost optimization. Built with microservices architecture and event-driven design.',
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Python', 'CloudFormation'],
    icon: Server,
    gradient: 'from-amber-500 to-yellow-600',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Modern analytics dashboard with AI-powered insights and real-time data visualization. Features predictive analytics and automated reporting.',
    tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
    icon: Sparkles,
    gradient: 'from-yellow-500 to-orange-600',
    liveUrl: '#',
    githubUrl: '#'
  }
]

export function Projects() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Royal Background */}
      <div className="absolute inset-0 mandala-bg opacity-5" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-2 border-orange-500/20 rounded-full text-sm font-bold text-orange-600 dark:text-orange-400 mb-8"
            animate={isMobile ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Crown className="w-5 h-5" />
            Royal Portfolio
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">
              Projects & Solutions
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building innovative solutions with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-orange-500 rounded-tl-xl" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-amber-500 rounded-tr-xl" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-amber-500 rounded-bl-xl" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-orange-500 rounded-br-xl" />
              
              <div className="relative bg-gradient-to-br from-orange-50/90 to-amber-50/90 dark:from-orange-900/30 dark:to-amber-900/30 backdrop-blur-xl rounded-3xl p-8 border-2 border-orange-300 dark:border-orange-700 hover:border-orange-400 dark:hover:border-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl h-full">
                {/* Icon with Badge */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg relative`}
                    whileHover={isMobile ? {} : { rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <project.icon size={28} />
                    {project.featured && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Gem className="w-3 h-3 text-orange-900" />
                      </div>
                    )}
                  </motion.div>
                  
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-lg border border-orange-200/50 dark:border-orange-700/50 hover:border-orange-400 dark:hover:border-orange-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 text-sm font-medium bg-white/80 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400 rounded-lg border border-orange-200/50 dark:border-orange-700/50">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
                
                {/* Links */}
                <div className="flex gap-3">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 text-center py-3 px-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-medium hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 text-center py-3 px-4 border-2 border-orange-300 dark:border-orange-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <Crown className="w-5 h-5" />
            View All Projects
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}