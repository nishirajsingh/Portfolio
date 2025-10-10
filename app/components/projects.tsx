'use client'

import { motion } from 'framer-motion'
import { Cloud, Brain, Server, Sparkles } from 'lucide-react'
import { ProjectCard } from './ui/project-card'
import { TextReveal } from './ui/text-reveal'

const PROJECTS = [
  {
    title: 'Cloud Infrastructure Manager',
    description: 'A comprehensive cloud management platform built with modern cloud technologies for automated deployment and monitoring. Features real-time analytics, cost optimization, and multi-cloud support.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'React', 'TypeScript', 'Terraform'],
    icon: Cloud,
    gradient: 'from-blue-500 to-cyan-500',
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    title: 'AI-Powered Chatbot Platform',
    description: 'Intelligent conversational AI platform with natural language processing and machine learning capabilities. Features context awareness, multi-language support, and real-time learning.',
    tech: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Serverless API Gateway',
    description: 'Scalable serverless architecture for API management with automatic scaling and cost optimization. Built with microservices architecture and event-driven design.',
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Python', 'CloudFormation'],
    icon: Server,
    gradient: 'from-green-500 to-teal-500',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Modern analytics dashboard with AI-powered insights and real-time data visualization. Features predictive analytics and automated reporting.',
    tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
    icon: Sparkles,
    gradient: 'from-orange-500 to-red-500',
    liveUrl: '#',
    githubUrl: '#'
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 particle-bg opacity-30" />
      
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200 dark:border-blue-500/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
            Featured Work
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Projects & Solutions
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building innovative solutions with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
              
              <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/30 dark:border-gray-700/30 hover:border-gray-300/50 dark:hover:border-gray-600/50 transition-all duration-300 shadow-xl hover:shadow-2xl h-full">
                {/* Icon */}
                <motion.div 
                  className={`w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <project.icon size={24} />
                </motion.div>
                
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
                      className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    View Project
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 text-center py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    GitHub
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Sparkles className="w-5 h-5" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}