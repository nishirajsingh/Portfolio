'use client'

import { motion } from 'framer-motion'
import { Cloud, Smartphone, Server, Sparkles } from 'lucide-react'
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
    title: 'iOS Task Management App',
    description: 'Native iOS application with SwiftUI for efficient task management with cloud synchronization capabilities. Includes offline support, push notifications, and collaborative features.',
    tech: ['Swift', 'SwiftUI', 'Core Data', 'CloudKit', 'Combine'],
    icon: Smartphone,
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/30" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
            Featured Work
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-2">
            <TextReveal className="gradient-text">
              Projects & Solutions
            </TextReveal>
          </h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Showcasing innovative solutions in cloud computing, mobile development, and modern web technologies. 
            Each project represents a unique challenge solved with cutting-edge tools and methodologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in collaborating on a project?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5" />
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}