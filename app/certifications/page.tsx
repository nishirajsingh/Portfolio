'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Star } from 'lucide-react'
import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Footer } from '../components/footer'

const CERTIFICATIONS = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Coming Soon',
    credentialId: 'AWS-CCP-2024',
    link: '#',
    description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
    status: 'in-progress'
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Coming Soon', 
    credentialId: 'TF-DEV-2024',
    link: '#',
    description: 'Machine learning and deep learning using TensorFlow framework and modern AI practices.',
    status: 'in-progress'
  },
  {
    title: 'Google Cloud Associate',
    issuer: 'Google Cloud',
    date: 'Coming Soon',
    credentialId: 'GCP-ACE-2024',
    link: '#',
    description: 'Cloud engineering fundamentals and Google Cloud Platform services.',
    status: 'planned'
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Coming Soon',
    credentialId: 'AZ-900-2024',
    link: '#',
    description: 'Core Azure services, Azure pricing and support, and the fundamentals of cloud security.',
    status: 'planned'
  },
  {
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: 'Coming Soon',
    credentialId: 'DCA-2024',
    link: '#',
    description: 'Container orchestration and Docker platform administration skills.',
    status: 'planned'
  },
  {
    title: 'Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Coming Soon',
    credentialId: 'CKA-2024',
    link: '#',
    description: 'Kubernetes cluster administration and container orchestration expertise.',
    status: 'planned'
  }
]

export default function CertificationsPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <EnhancedNavbar />
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-2 border-orange-500/20 rounded-full text-sm font-bold text-orange-600 dark:text-orange-400 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-5 h-5" />
              Professional Excellence
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Certifications & Achievements
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Industry-recognized certifications validating expertise in cloud computing, AI/ML, and modern software engineering.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Decorative corners */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-orange-500 rounded-tl-lg" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-amber-500 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-amber-500 rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-orange-500 rounded-br-lg" />
                
                <div className="group bg-gradient-to-br from-orange-50/80 to-amber-50/80 dark:from-orange-900/20 dark:to-amber-900/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-300 dark:border-orange-700 h-full">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : cert.status === 'in-progress'
                        ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {cert.status === 'completed' ? 'Certified' : cert.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </span>
                    
                    {cert.status === 'completed' && (
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    )}
                  </div>

                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-3 text-center">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
                    {cert.description}
                  </p>
                  
                  {cert.credentialId && (
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 mb-4 border border-orange-200/50 dark:border-orange-700/50">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 text-center">Credential ID</p>
                      <p className="text-xs font-mono text-gray-700 dark:text-gray-300 text-center">{cert.credentialId}</p>
                    </div>
                  )}

                  {/* Action Button */}
                  <a
                    href={cert.link}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                      cert.status === 'completed'
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ExternalLink size={16} />
                    {cert.status === 'completed' ? 'View Certificate' : 'Coming Soon'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}