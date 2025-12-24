'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Award, ExternalLink, Calendar, ShieldCheck, Zap, Terminal, X, Search, ChevronRight } from 'lucide-react'
import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Footer } from '../components/footer'

/* ---------------- DATA ---------------- */

const CERTIFICATIONS = [
  {
    title: 'Gemini Certified Educator',
    issuer: 'Google',
    date: 'Oct 2025',
    credentialId: '163698809',
    image: '/images/certs/gemini-educator.png',
    link: '#',
    skills: ['GenAI', 'Education Tech']
  },
  {
    title: 'Gemini Certified University Student',
    issuer: 'Google',
    date: 'Oct 2025',
    credentialId: '163699860',
    image: '/images/certs/gemini-student.png',
    link: '#'
  },
  {
    title: 'Vadodara Hackathon 6.0',
    issuer: 'PIERC - Parul University',
    date: 'Sep 2025',
    image: '/images/certs/hackathon.png',
    link: '#'
  },
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'AWS',
    date: 'Jul 2025',
    image: '/images/certs/aws-foundations.png',
    link: '#'
  },
  {
    title: 'Introducing Generative AI with AWS',
    issuer: 'Udacity',
    date: 'Jul 2025',
    image: '/images/certs/udacity-aws.png',
    link: '#'
  },
  {
    title: 'MLOps with Vertex AI',
    issuer: 'Google',
    date: 'Apr 2025',
    credentialId: '15191934',
    image: '/images/certs/mlops.png',
    link: '#'
  },
  {
    title: 'CI/CD Pipelines',
    issuer: 'Google Cloud',
    date: 'Dec 2023',
    credentialId: '6565675',
    image: '/images/certs/cicd.png',
    link: '#'
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'NPTEL',
    date: 'Dec 2023',
    image: '/images/certs/ceh.png',
    link: '#'
  }
]

const BADGES = [
  { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS", date: "Dec 17, 2025", type: 'aws' },
  { title: "AWS Educate Introduction to Cloud 101", issuer: "AWS", date: "Jul 30, 2025", type: 'aws' },
  { title: "AWS Academy Graduate - Cloud Foundations", issuer: "AWS", date: "Jul 28, 2025", type: 'aws' },
  { title: "AWS Educate Machine Learning Foundations", issuer: "AWS", date: "Jul 18, 2025", type: 'aws' },
  { title: "Build GC Infrastructure for Azure Professionals", issuer: "Google Cloud", date: "Jun 27, 2025", type: 'gcp' },
  { title: "Develop Serverless Apps with Firebase", issuer: "Google Cloud", date: "Jun 27, 2025", type: 'gcp' },
  { title: "Monitor and Manage GC Resources", issuer: "Google Cloud", date: "Jun 27, 2025", type: 'gcp' },
  { title: "Build a Secure Google Cloud Network", issuer: "Google Cloud", date: "Jun 26, 2025", type: 'gcp' },
  { title: "Cloud Speech API: 3 Ways", issuer: "Google Cloud", date: "Jun 25, 2025", type: 'gcp' },
  { title: "Create a Secure Data Lake on Cloud Storage", issuer: "Google Cloud", date: "Jun 25, 2025", type: 'gcp' },
  { title: "Monitor Environments with Managed Prometheus", issuer: "Google Cloud", date: "Jun 22, 2025", type: 'gcp' },
  { title: "Implement Multimodal Vector Search", issuer: "Google Cloud", date: "Jun 20, 2025", type: 'gcp' },
  { title: "Develop GenAI Apps with Gemini", issuer: "Google Cloud", date: "Jun 5, 2025", type: 'gcp' },
  { title: "Inspect Rich Docs with Gemini Multimodality", issuer: "Google Cloud", date: "Jun 5, 2025", type: 'gcp' },
  { title: "Analyze BigQuery Data in Connected Sheets", issuer: "Google Cloud", date: "May 28, 2025", type: 'gcp' },
  { title: "Build a Website on Google Cloud", issuer: "Google Cloud", date: "May 28, 2025", type: 'gcp' },
  { title: "Develop Your Google Cloud Network", issuer: "Google Cloud", date: "May 28, 2025", type: 'gcp' },
  { title: "Engineer Data for Predictive Modeling", issuer: "Google Cloud", date: "May 28, 2025", type: 'gcp' },
  { title: "Derive Insights from BigQuery Data", issuer: "Google Cloud", date: "May 21, 2025", type: 'gcp' },
  { title: "Implement CI/CD Pipelines on GC", issuer: "Google Cloud", date: "May 21, 2025", type: 'gcp' },
  { title: "Build a Data Warehouse with BigQuery", issuer: "Google Cloud", date: "May 19, 2025", type: 'gcp' },
  { title: "Implement Cloud Security Fundamentals", issuer: "Google Cloud", date: "May 19, 2025", type: 'gcp' },
  { title: "Secure Software Delivery", issuer: "Google Cloud", date: "May 12, 2025", type: 'gcp' },
  { title: "Implement DevOps Workflows", issuer: "Google Cloud", date: "May 10, 2025", type: 'gcp' },
  { title: "Secure BigLake Data", issuer: "Google Cloud", date: "May 10, 2025", type: 'gcp' },
  { title: "Create a Streaming Data Lake", issuer: "Google Cloud", date: "May 9, 2025", type: 'gcp' },
  { title: "Manage Kubernetes in Google Cloud", issuer: "Google Cloud", date: "May 9, 2025", type: 'gcp' },
  { title: "Perform Predictive Data Analysis", issuer: "Google Cloud", date: "May 9, 2025", type: 'gcp' },
  { title: "Prepare Data for ML APIs", issuer: "Google Cloud", date: "May 9, 2025", type: 'gcp' },
  { title: "Create ML Models with BigQuery ML", issuer: "Google Cloud", date: "May 6, 2025", type: 'gcp' },
  { title: "Develop Serverless Apps on Cloud Run", issuer: "Google Cloud", date: "May 6, 2025", type: 'gcp' },
  { title: "Implement Load Balancing on GCE", issuer: "Google Cloud", date: "May 6, 2025", type: 'gcp' },
  { title: "Monitor and Log with GC Operations Suite", issuer: "Google Cloud", date: "May 6, 2025", type: 'gcp' },
  { title: "Protect Cloud Traffic with BeyondCorp", issuer: "Google Cloud", date: "May 6, 2025", type: 'gcp' },
  { title: "Configure Service Accounts and IAM Roles", issuer: "Google Cloud", date: "May 4, 2025", type: 'gcp' },
  { title: "Analyze Speech and Language with GC APIs", issuer: "Google Cloud", date: "May 2, 2025", type: 'gcp' },
  { title: "App Building with AppSheet", issuer: "Google Cloud", date: "May 2, 2025", type: 'gcp' },
  { title: "Protect Sensitive Data with DLP", issuer: "Google Cloud", date: "May 2, 2025", type: 'gcp' },
  { title: "Set Up a Google Cloud Network", issuer: "Google Cloud", date: "May 2, 2025", type: 'gcp' },
  { title: "Analyze Images with Cloud Vision API", issuer: "Google Cloud", date: "May 1, 2025", type: 'gcp' },
  { title: "Build Real World AI with Gemini & Imagen", issuer: "Google Cloud", date: "May 1, 2025", type: 'gcp' },
  { title: "Enrich Metadata of BigLake Data", issuer: "Google Cloud", date: "May 1, 2025", type: 'gcp' },
  { title: "Streaming Analytics into BigQuery", issuer: "Google Cloud", date: "May 1, 2025", type: 'gcp' },
  { title: "Build LookML Objects in Looker", issuer: "Google Cloud", date: "Apr 25, 2025", type: 'gcp' },
  { title: "Discover and Protect Sensitive Data", issuer: "Google Cloud", date: "Apr 25, 2025", type: 'gcp' },
  { title: "Explore GenAI with Vertex AI Gemini", issuer: "Google Cloud", date: "Apr 25, 2025", type: 'gcp' },
  { title: "Prompt Design in Vertex AI", issuer: "Google Cloud", date: "Apr 25, 2025", type: 'gcp' },
  { title: "Store/Process Data - Command Line", issuer: "Google Cloud", date: "Apr 25, 2025", type: 'gcp' },
  { title: "Store/Process Data - Console", issuer: "Google Cloud", date: "Apr 25, 2025", type: 'gcp' },
  { title: "Build Infrastructure with Terraform", issuer: "Google Cloud", date: "Apr 24, 2025", type: 'gcp' },
  { title: "Deploy Kubernetes Apps on GC", issuer: "Google Cloud", date: "Apr 23, 2025", type: 'gcp' },
  { title: "Set Up an App Dev Environment", issuer: "Google Cloud", date: "Apr 23, 2025", type: 'gcp' },
  { title: "Get Started with Dataplex", issuer: "Google Cloud", date: "Dec 23, 2024", type: 'gcp' },
  { title: "Networking Fundamentals on GC", issuer: "Google Cloud", date: "Dec 10, 2024", type: 'gcp' },
  { title: "Analyze Sentiment with Natural Language API", issuer: "Google Cloud", date: "Nov 12, 2024", type: 'gcp' },
  { title: "The Basics of GC Compute", issuer: "Google Cloud", date: "Nov 12, 2024", type: 'gcp' },
]

/* ---------------- MAIN PAGE ---------------- */

export default function CertificationsPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-white dark:bg-[#030303]">
      <EnhancedNavbar />
      
      {/* Visual background sync */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <section className="relative py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <header className="mb-20">
            <motion.div className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-4">
              <Terminal size={16} /> <span>./accreditations</span>
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-bold dark:text-white tracking-tighter">
              Proof of <br /> <span className="text-zinc-400">Competence.</span>
            </h1>
          </header>

          {/* 1. Main Certifications - High Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.title + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl overflow-hidden hover:border-orange-500/50 transition-all"
              >
                <div className="relative h-52 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden cursor-pointer" onClick={() => setSelectedImg(cert.image)}>
                  <Image src={cert.image} alt={cert.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Search className="text-white" size={32} />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono font-bold text-orange-500 border border-orange-500/30 px-2 py-0.5 rounded uppercase">{cert.issuer}</span>
                    <ShieldCheck size={18} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white leading-tight mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                    <Calendar size={12} /> {cert.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Skill Badges - High Volume Bento Section */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <h2 className="text-4xl font-bold dark:text-white tracking-tight flex items-center gap-3">
                  System Badges <Zap className="text-orange-500 fill-orange-500" size={24} />
                </h2>
                <p className="text-zinc-500 mt-2 font-mono text-sm">// 70+ technical milestones achieved</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {BADGES.map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 backdrop-blur-sm group flex flex-col items-center text-center overflow-hidden"
                >
                  {/* Badge Icon (Uses placeholder based on type) */}
                  <div className="relative w-16 h-16 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image 
                      src={badge.type === 'aws' ? '/images/badges/aws-generic.png' : '/images/badges/gcp-generic.png'} 
                      alt="Badge" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-[10px] font-bold dark:text-zinc-300 leading-tight mb-2 uppercase tracking-tight h-8 overflow-hidden">
                    {badge.title}
                  </h4>
                  <div className="mt-auto pt-2 border-t border-zinc-200 dark:border-zinc-800 w-full flex justify-between items-center text-[8px] font-mono text-zinc-500">
                    <span>{badge.date}</span>
                    <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for large cert images */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform"><X size={40} /></button>
            <div className="relative w-full h-full max-w-6xl">
              <Image src={selectedImg} alt="Certificate Zoom" fill className="object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}