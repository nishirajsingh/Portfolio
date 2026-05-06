'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Calendar, ShieldCheck, Zap, Terminal, X, Search } from 'lucide-react'
import { EnhancedNavbar } from '../components/enhanced-navbar'
import { Footer } from '../components/footer'



export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<any[]>([])
  const [badges, setBadges] = useState<any[]>([])
  const [badgesLoading, setBadgesLoading] = useState(true)
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    fetch('/api/admin/certifications').then(r => r.json()).then(setCertifications)
    fetch('/api/credly')
      .then(r => r.json())
      .then(d => { setBadges(d.badges || []); setBadgesLoading(false) })
      .catch(() => setBadgesLoading(false))
  }, [])

  // Unique issuers for filter tabs
  const issuers = ['All', ...Array.from(new Set(badges.map((b: any) => b.issuer))).sort()]
  const filteredBadges = filter === 'All' ? badges : badges.filter((b: any) => b.issuer === filter)

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

          {/* Badges — live from Credly API */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <h2 className="text-4xl font-bold dark:text-white tracking-tight flex items-center gap-3">
                  Digital Badges <Zap className="text-orange-500 fill-orange-500" size={24} />
                </h2>
                <p className="text-zinc-500 mt-2 font-mono text-sm">
                  // Auto-synced from{' '}
                  <a href="https://www.credly.com/users/nishiraj/badges" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Credly.com</a>
                  {!badgesLoading && <span className="ml-2 text-zinc-400">· {badges.length} badges earned</span>}
                </p>
              </div>
              <a href="https://www.credly.com/users/nishiraj/badges" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-orange-500/30 text-orange-500 text-xs font-mono hover:bg-orange-500/10 transition-colors shrink-0">
                View all on Credly <ExternalLink size={12} />
              </a>
            </div>

            {/* Issuer filter tabs */}
            {!badgesLoading && issuers.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {issuers.map(issuer => (
                  <button
                    key={issuer}
                    onClick={() => setFilter(issuer)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all ${
                      filter === issuer
                        ? 'bg-orange-500 border-orange-500 text-white'
                        : 'border-zinc-300 dark:border-zinc-700 text-zinc-500 hover:border-orange-500/50 hover:text-orange-500'
                    }`}
                  >
                    {issuer === 'All' ? `All (${badges.length})` : issuer}
                  </button>
                ))}
              </div>
            )}

            {/* Loading skeleton */}
            {badgesLoading && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="h-52 rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 animate-pulse" />
                ))}
              </div>
            )}

            {/* Badge grid */}
            {!badgesLoading && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredBadges.map((badge: any, i: number) => (
                  <motion.a
                    key={badge.id}
                    href={badge.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i * 0.03, 0.5) }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative p-5 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 backdrop-blur-sm group flex flex-col items-center text-center overflow-hidden hover:border-orange-500/40 transition-all shadow-sm"
                  >
                    {/* Level badge */}
                    {badge.level && (
                      <span className="absolute top-3 right-3 text-[8px] font-mono px-1.5 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 uppercase">
                        {badge.level}
                      </span>
                    )}

                    <div className="relative w-20 h-20 mb-3 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110">
                      <img src={badge.image} alt={badge.name} className="w-full h-full object-contain" />
                    </div>

                    <h4 className="text-[10px] font-bold dark:text-zinc-300 leading-tight mb-1 uppercase tracking-tight line-clamp-3 group-hover:text-orange-500 transition-colors">
                      {badge.name}
                    </h4>

                    <p className="text-[8px] font-mono text-zinc-400 mb-2 truncate w-full">{badge.issuer}</p>

                    <div className="mt-auto pt-2 border-t border-zinc-100 dark:border-zinc-800/50 w-full flex justify-between items-center text-[8px] font-mono text-zinc-500">
                      <span>{badge.issuedAt}</span>
                      <ExternalLink size={9} className="group-hover:text-orange-500 shrink-0" />
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
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
