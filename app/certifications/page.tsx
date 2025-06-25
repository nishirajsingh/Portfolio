'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Star, ArrowLeft } from 'lucide-react'
import { TextReveal } from '../components/ui/text-reveal'
import { Footer } from '../components/footer'
import Link from 'next/link'

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
    title: 'iOS App Development with Swift',
    issuer: 'Apple Developer Academy',
    date: 'Coming Soon', 
    credentialId: 'SWIFT-DEV-2024',
    link: '#',
    description: 'Comprehensive iOS development using Swift and modern development practices.',
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
      {/* Indian Heritage Background */}
      <div className="fixed inset-0 mandala-bg opacity-5 dark:opacity-10" />
      <div className="absolute top-20 left-10 w-32 h-32 royal-gradient rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 saffron-gradient rounded-full opacity-10 blur-3xl animate-pulse lotus-animation" />
      
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-2 border-orange-500/20 rounded-full text-lg font-medium text-orange-600 dark:text-orange-400 mb-8"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-6 h-6" />
              Professional Excellence Journey
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 pb-4">
              <TextReveal className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Certifications & Achievements
              </TextReveal>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              A comprehensive collection of industry-recognized certifications that validate my expertise 
              in cloud computing, mobile development, and modern software engineering practices.
            </motion.p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Royal Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
                
                <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 h-full border-2 border-transparent hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      cert.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : cert.status === 'in-progress'
                        ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {cert.status === 'completed' ? '✅ Certified' : cert.status === 'in-progress' ? '🔄 In Progress' : '📋 Planned'}
                    </div>
                    
                    {cert.status === 'completed' && (
                      <Star className="w-6 h-6 text-yellow-500 fill-current" />
                    )}
                  </div>

                  {/* Certificate Icon */}
                  <motion.div 
                    className="w-20 h-20 royal-gradient rounded-3xl flex items-center justify-center text-white shadow-lg mb-6 mx-auto"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award size={40} />
                  </motion.div>

                  {/* Certificate Details */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                      {cert.title}
                    </h3>
                    
                    <p className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                      {cert.issuer}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    {cert.credentialId && (
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-4 border border-orange-200/30 dark:border-orange-800/30">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Credential ID</p>
                        <p className="text-sm font-mono text-gray-700 dark:text-gray-300">{cert.credentialId}</p>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={cert.link}
                    className={`mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all duration-200 ${
                      cert.status === 'completed'
                        ? 'royal-gradient text-white hover:shadow-xl shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-not-allowed'
                    }`}
                    whileHover={cert.status === 'completed' ? { scale: 1.02 } : {}}
                    whileTap={cert.status === 'completed' ? { scale: 0.98 } : {}}
                  >
                    <ExternalLink size={18} />
                    {cert.status === 'completed' ? 'View Certificate' : 'Coming Soon'}
                  </motion.a>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full opacity-60" />
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-red-400 rounded-full opacity-60" />
                </div>
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
            <div className="bg-gradient-to-br from-orange-100/80 via-red-50/60 to-pink-100/80 dark:from-orange-900/40 dark:via-red-900/30 dark:to-pink-900/40 rounded-2xl p-10 border border-orange-300/40 dark:border-orange-700/40 shadow-xl backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-6 text-orange-800 dark:text-orange-200">
                Continuous Learning & Excellence
              </h3>
              <p className="text-orange-700 dark:text-orange-300 leading-relaxed max-w-3xl mx-auto text-lg font-medium">
                Each certification represents a milestone in my journey to master cutting-edge technologies. 
                I believe in continuous learning and staying ahead of industry trends to deliver exceptional solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}