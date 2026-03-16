'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Calendar, ShieldCheck, Zap, Terminal, X, Search } from 'lucide-react'
import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Footer } from '../components/footer'

const BADGES = [
  { title: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS Training & Certification", date: "Dec 17, 2025", image: "https://images.credly.com/images/30816e43-2550-4e1c-be22-3f03c5573bb9/blob", link: "https://www.credly.com/badges/a389dba4-e540-4907-a29a-296dea078f76" },
  { title: "AWS Educate Introduction to Cloud 101", issuer: "AWS Training & Certification", date: "Jul 30, 2025", image: "https://images.credly.com/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob", link: "https://www.credly.com/badges/5f2a9c86-b8c4-4308-afc7-6b6f0b82e56a" },
  { title: "AWS Academy Graduate - Cloud Foundations", issuer: "AWS Training & Certification", date: "Jul 28, 2025", image: "https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob", link: "https://www.credly.com/badges/87264ef3-a415-441a-aa2d-84ba97c42d3c" },
  { title: "AWS Educate Machine Learning Foundations", issuer: "AWS Training & Certification", date: "Jul 18, 2025", image: "https://images.credly.com/images/247efe36-9fa6-4209-ad56-0fd522283872/blob", link: "https://www.credly.com/badges/9af0bdc7-1923-4d6b-b41b-f7678b437191" },
  { title: "Build Google Cloud Infrastructure for Azure Professionals", issuer: "Google Cloud", date: "Jun 27, 2025", image: "https://images.credly.com/images/b734b28a-683b-43f2-bb9d-2b952890e545/image.png", link: "https://www.credly.com/badges/0f9595df-253a-418c-8cc2-f67344507383" },
  { title: "Develop Serverless Apps with Firebase", issuer: "Google Cloud", date: "Jun 27, 2025", image: "https://images.credly.com/images/826e89a5-1a1d-4e6c-b740-531957965a78/image.png", link: "https://www.credly.com/badges/49bb637d-165b-4996-976c-de2f87b8960e" },
  { title: "Monitor and Manage Google Cloud Resources", issuer: "Google Cloud", date: "Jun 27, 2025", image: "https://images.credly.com/images/c07b49a7-c295-4e2a-9557-09c22032e3ae/image.png", link: "https://www.credly.com/badges/39d2a919-2773-4580-a31f-55b8237ef38a" },
  { title: "Build a Secure Google Cloud Network", issuer: "Google Cloud", date: "Jun 26, 2025", image: "https://images.credly.com/images/e1131ae3-4a52-4af1-9801-b7853767cf79/image.png", link: "https://www.credly.com/badges/cc442bce-9792-4abd-8ad6-924c2a522464" },
  { title: "Develop GenAI Apps with Gemini and Streamlit", issuer: "Google Cloud", date: "Jun 5, 2025", image: "https://images.credly.com/images/1dbef1bd-cdb0-40e1-bff4-8200448c3161/blob", link: "https://www.credly.com/badges/ebf5ff47-2a16-4f17-bbcf-6a8e9c71a2fe" },
  { title: "Implement CI/CD Pipelines on GC", issuer: "Google Cloud", date: "May 21, 2025", image: "https://images.credly.com/images/0daf1b0e-28c3-4102-96cf-e9d5f9213cc3/image.png", link: "https://www.credly.com/badges/554a4b6e-5e08-4630-8992-303c014efb0f" },
  { title: "Manage Kubernetes in Google Cloud", issuer: "Google Cloud", date: "May 9, 2025", image: "https://images.credly.com/images/20cd679d-43c3-460e-979a-8feba38eaba6/image.png", link: "https://www.credly.com/badges/1f8017f4-5d35-45ba-89fd-6480f5a4721f" },
  { title: "Infrastructure with Terraform on GC", issuer: "Google Cloud", date: "Apr 24, 2025", image: "https://images.credly.com/images/b18154fb-9bd3-47e5-a6f1-554be512947d/image.png", link: "https://www.credly.com/badges/c6bac894-eb0f-476c-8440-eabc71069bff" },
  { title: "Deploy Kubernetes Applications on GC", issuer: "Google Cloud", date: "Apr 23, 2025", image: "https://images.credly.com/images/f0388a0c-130f-47cd-8750-d6357e907e58/image.png", link: "https://www.credly.com/badges/c14e2327-390b-49df-8cb6-2ce592466b94" },
  { title: "Prompt Design in Vertex AI", issuer: "Google Cloud", date: "Apr 25, 2025", image: "https://images.credly.com/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/image.png", link: "https://www.credly.com/badges/24c7dd88-712c-4a79-a106-006b7e6f3989" },
  { title: "Networking Fundamentals on GC", issuer: "Google Cloud", date: "Dec 10, 2024", image: "https://images.credly.com/images/6edf3d92-7a1f-425f-aa2b-d17223df9cf7/image.png", link: "https://www.credly.com/badges/e3aeb888-8c46-464d-b1d8-a5766ccb8022" },
  { title: "Basics of Google Cloud Compute", issuer: "Google Cloud", date: "Nov 12, 2024", image: "https://images.credly.com/images/7623fefd-ebbd-4d8f-a053-f41dca852d9e/image.png", link: "https://www.credly.com/badges/7cd4f349-ff5e-47cc-9ca8-feb1519b1a22" },
]

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<any[]>([])
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/admin/certifications').then(r => r.json()).then(setCertifications)
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-[#030303]">
      <EnhancedNavbar />

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

          {/* Certifications from API */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl overflow-hidden hover:border-orange-500/50 transition-all shadow-sm"
              >
                {cert.image ? (
                  <div
                    className="relative h-52 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImg(cert.image)}
                  >
                    <Image src={cert.image} alt={cert.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Search className="text-white" size={32} />
                    </div>
                  </div>
                ) : (
                  <div className="h-52 w-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <span className="text-zinc-400 font-mono text-xs">No image</span>
                  </div>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono font-bold text-orange-500 border border-orange-500/30 px-2 py-0.5 rounded uppercase">{cert.issuer}</span>
                    <ShieldCheck size={18} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white leading-tight mb-2 group-hover:text-orange-500 transition-colors">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono mb-4">
                    <Calendar size={12} /> {cert.date}
                    {cert.expiry && <span className="opacity-50">· Exp: {cert.expiry}</span>}
                  </div>
                  {cert.credentialId && (
                    <div className="text-[10px] font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 p-2 rounded-lg mb-4">
                      ID: {cert.credentialId}
                    </div>
                  )}
                  {cert.link && cert.link !== '#' && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 hover:text-orange-600 transition-colors">
                      Show Credential <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Badges — hardcoded Credly data */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <h2 className="text-4xl font-bold dark:text-white tracking-tight flex items-center gap-3">
                  System Badges <Zap className="text-orange-500 fill-orange-500" size={24} />
                </h2>
                <p className="text-zinc-500 mt-2 font-mono text-sm">// Verified via Credly.com profile</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {BADGES.map((badge, i) => (
                <motion.a
                  key={i}
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative p-6 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 backdrop-blur-sm group flex flex-col items-center text-center overflow-hidden hover:border-orange-500/40 transition-all shadow-sm"
                >
                  <div className="relative w-24 h-24 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:rotate-3">
                    <img src={badge.image} alt={badge.title} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-[10px] font-bold dark:text-zinc-300 leading-tight mb-2 uppercase tracking-tight h-10 overflow-hidden line-clamp-3 group-hover:text-orange-500 transition-colors">
                    {badge.title}
                  </h4>
                  <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800/50 w-full flex justify-between items-center text-[8px] font-mono text-zinc-500 uppercase tracking-tighter">
                    <span>{badge.date}</span>
                    <ExternalLink size={10} className="group-hover:text-orange-500" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform"><X size={40} /></button>
            <div className="relative w-full h-full max-w-5xl">
              <img src={selectedImg} alt="Certificate" className="w-full h-full object-contain shadow-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}
