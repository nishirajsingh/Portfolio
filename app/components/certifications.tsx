'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Star } from 'lucide-react'
import { TextReveal } from './ui/text-reveal'

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
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Indian Heritage Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b35' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-full text-sm font-medium text-orange-600 dark:text-orange-400 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Award className="w-4 h-4" />
            Professional Excellence
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-2">
            <TextReveal className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </TextReveal>
          </h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Pursuing industry-recognized certifications to validate expertise and stay current with evolving technologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.slice(0, 3).map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Indian Heritage Border Design */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
              
              <div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 h-full border-2 border-transparent hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 shadow-xl hover:shadow-2xl">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : cert.status === 'in-progress'
                      ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {cert.status === 'completed' ? 'Certified' : cert.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </div>
                  
                  {cert.status === 'completed' && (
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  )}
                </div>

                {/* Certificate Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award size={32} />
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
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Credential ID</p>
                      <p className="text-sm font-mono text-gray-700 dark:text-gray-300">{cert.credentialId}</p>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <motion.a
                  href={cert.link}
                  className={`mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    cert.status === 'completed'
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={cert.status === 'completed' ? { scale: 1.02 } : {}}
                  whileTap={cert.status === 'completed' ? { scale: 0.98 } : {}}
                >
                  <ExternalLink size={16} />
                  {cert.status === 'completed' ? 'View Certificate' : 'Coming Soon'}
                </motion.a>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-60" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-red-400 rounded-full opacity-60" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/certifications"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Award className="w-5 h-5" />
            View All Certifications
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}