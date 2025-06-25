'use client'

import { motion } from 'framer-motion'
import { Cloud, Smartphone, Server, Sparkles, ArrowLeft, Code, Database, Globe } from 'lucide-react'
import { ProjectCard } from '../components/ui/project-card'
import { TextReveal } from '../components/ui/text-reveal'
import { Footer } from '../components/footer'
import Link from 'next/link'

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
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern payment integration, inventory management, and real-time order tracking. Built for scalability and performance.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Docker'],
    icon: Globe,
    gradient: 'from-indigo-500 to-purple-500',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Real-time Chat Application',
    description: 'Scalable real-time messaging platform with end-to-end encryption, file sharing, and group chat capabilities. Supports thousands of concurrent users.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    icon: Code,
    gradient: 'from-pink-500 to-rose-500',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Data Visualization Suite',
    description: 'Interactive data visualization platform for business intelligence with custom chart types, real-time updates, and collaborative features.',
    tech: ['D3.js', 'React', 'Python', 'FastAPI', 'PostgreSQL'],
    icon: Database,
    gradient: 'from-emerald-500 to-cyan-500',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'DevOps Automation Pipeline',
    description: 'Complete CI/CD pipeline automation with infrastructure as code, automated testing, and deployment strategies for cloud-native applications.',
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'AWS', 'Ansible'],
    icon: Server,
    gradient: 'from-yellow-500 to-orange-500',
    liveUrl: '#',
    githubUrl: '#'
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Indian Heritage Background */}
      <div className="fixed inset-0 heritage-pattern opacity-5 dark:opacity-10" />
      <div className="absolute top-20 right-10 w-32 h-32 royal-gradient rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 saffron-gradient rounded-full opacity-10 blur-3xl animate-pulse lotus-animation" />
      
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 liquid-glass rounded-xl hover:scale-105 transition-all duration-200"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20 rounded-full text-lg font-medium text-blue-600 dark:text-blue-400 mb-8"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6" />
              Innovation & Excellence
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 pb-4">
              <TextReveal className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Projects & Solutions
              </TextReveal>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              A showcase of innovative solutions spanning cloud computing, mobile development, and modern web technologies. 
              Each project represents a unique challenge solved with cutting-edge tools and methodologies.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr mb-20">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-12 border-2 border-blue-200/30 dark:border-blue-800/30">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Building the Future, One Project at a Time
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto text-lg mb-8">
                Every project is an opportunity to push boundaries, explore new technologies, and create solutions that make a difference. 
                From cloud infrastructure to mobile applications, I'm passionate about turning ideas into reality.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                whileHover={{ scale: 1.02 }}
              >
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Sparkles className="w-5 h-5" />
                  Let's Collaborate
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}