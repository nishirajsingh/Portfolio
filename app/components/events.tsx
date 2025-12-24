'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Calendar, MapPin, ChevronLeft, ChevronRight, X, ArrowUpRight, Camera, Terminal } from 'lucide-react'

/* ---------------- IMAGES (Imports remain same) ---------------- */
import devfest2025_1 from './images/events/devfest-2025/1.jpg'
import devfest2025_2 from './images/events/devfest-2025/2.jpg'
import devfest2025_3 from './images/events/devfest-2025/3.jpg'
import devfest2025_4 from './images/events/devfest-2025/4.jpg'
import devfest2025_5 from './images/events/devfest-2025/5.jpg'
import devfest2025_6 from './images/events/devfest-2025/6.jpg'
import devfest2025_7 from './images/events/devfest-2025/7.jpg'

import awsVadodara1 from './images/events/aws-vadodara/1.jpg'
import awsVadodara2 from './images/events/aws-vadodara/2.jpg'
import awsVadodara3 from './images/events/aws-vadodara/3.jpg'
import awsVadodara4 from './images/events/aws-vadodara/4.jpg'
import awsVadodara5 from './images/events/aws-vadodara/5.jpg'
import awsVadodara6 from './images/events/aws-vadodara/6.jpg'
import awsVadodara7 from './images/events/aws-vadodara/7.jpg'

import gcp1 from './images/events/gcp-gandhinagar/1.jpg'
import gcp2 from './images/events/gcp-gandhinagar/2.jpg'
import gcp3 from './images/events/gcp-gandhinagar/3.jpg'
import gcp4 from './images/events/gcp-gandhinagar/4.jpg'
import gcp5 from './images/events/gcp-gandhinagar/5.jpg'

import awsSummit1 from './images/events/aws-summit/1.jpg'
import awsSummit2 from './images/events/aws-summit/2.jpg'
import awsSummit3 from './images/events/aws-summit/3.jpg'
import awsSummit4 from './images/events/aws-summit/4.jpg'
import awsSummit5 from './images/events/aws-summit/5.jpg'

import devops1 from './images/events/devops-ai/1.jpg'
import devops2 from './images/events/devops-ai/2.jpg'

import awsAhmedabad1 from './images/events/aws-ahmedabad/1.jpg'
import awsAhmedabad2 from './images/events/aws-ahmedabad/2.jpg'
import awsAhmedabad3 from './images/events/aws-ahmedabad/3.jpg'
import awsAhmedabad4 from './images/events/aws-ahmedabad/4.jpg'
import awsAhmedabad5 from './images/events/aws-ahmedabad/5.jpg'
import awsAhmedabad6 from './images/events/aws-ahmedabad/6.jpg'
import awsAhmedabad7 from './images/events/aws-ahmedabad/7.jpg'

import devfest2024_1 from './images/events/devfest-2024/1.jpg'
import devfest2024_2 from './images/events/devfest-2024/2.jpg'
import devfest2024_3 from './images/events/devfest-2024/3.jpg'

/* ---------------- DATA ---------------- */

const events = [
  {
    title: 'GDG DevFest Baroda 2025',
    date: '5 Oct 2025',
    location: 'Baroda',
    type: 'In-Person',
    size: 'large',
    images: [devfest2025_1, devfest2025_2, devfest2025_3, devfest2025_4, devfest2025_5, devfest2025_6, devfest2025_7],
  },
  {
    title: 'AWS Community Day Vadodara',
    date: '13 Sept 2025',
    location: 'Vadodara',
    type: 'In-Person',
    size: 'medium',
    images: [awsVadodara1, awsVadodara2, awsVadodara3, awsVadodara4, awsVadodara5, awsVadodara6, awsVadodara7],
  },
  {
    title: 'Google Cloud Community Day',
    date: '5 July 2025',
    location: 'Gandhinagar',
    type: 'In-Person',
    size: 'small',
    images: [gcp1, gcp2, gcp3, gcp4, gcp5],
  },
  {
    title: 'AWS Summit India 2025',
    date: '26 June 2025',
    location: 'Virtual',
    type: 'Online',
    size: 'small',
    images: [awsSummit1, awsSummit2, awsSummit3, awsSummit4, awsSummit5],
  },
  {
    title: 'DevOps Meets AI',
    date: '23 June 2025',
    location: 'India',
    type: 'In-Person',
    size: 'medium',
    images: [devops1, devops2],
  },
  {
    title: 'AWS Community Day Ahmedabad',
    date: '21 June 2025',
    location: 'Ahmedabad',
    type: 'In-Person',
    size: 'small',
    images: [awsAhmedabad1, awsAhmedabad2, awsAhmedabad3, awsAhmedabad4, awsAhmedabad5, awsAhmedabad6, awsAhmedabad7],
  },
  {
    title: 'GDG DevFest Baroda 2024',
    date: '1 Dec 2024',
    location: 'Baroda',
    type: 'In-Person',
    size: 'small',
    images: [devfest2024_1, devfest2024_2, devfest2024_3],
  },
]

/* ---------------- BENTO CARD ---------------- */

function BentoCard({ event, onClick, index }: { event: any; onClick: () => void; index: number }) {
  const sizeClass =
    event.size === 'large'
      ? 'md:col-span-2 md:row-span-2 h-[500px]'
      : event.size === 'medium'
      ? 'md:col-span-2 h-[240px]'
      : 'md:col-span-1 h-[240px]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 ${sizeClass}`}
    >
      <Image
        src={event.images[0]}
        alt={event.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
      
      <div className="absolute top-5 left-5">
        <div className={`backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-tighter text-white ${event.type === 'Online' ? 'bg-blue-500/20' : 'bg-white/10'}`}>
          {event.type}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:-translate-y-2">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-orange-400 font-mono text-xs">
              <Calendar size={14} />
              <span>{event.date}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
              {event.title}
            </h3>
            <div className="flex items-center gap-1 text-zinc-400 text-sm">
              <MapPin size={14} />
              <span>{event.location}</span>
            </div>
          </div>
          <div className="bg-orange-500 p-3 rounded-2xl text-white transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ---------------- IMAGE MODAL ---------------- */

function ImageModal({ event, onClose }: { event: any; onClose: () => void }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-8 right-8 text-white/50 hover:text-white z-[110] transition-colors">
        <X size={32} />
      </button>

      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-6">
        <div className="relative w-full h-[60vh] md:h-[75vh]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 1.05 }} 
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image src={event.images[index]} alt="" fill className="object-contain" priority />
            </motion.div>
          </AnimatePresence>
          {event.images.length > 1 && (
            <>
              <button 
                onClick={() => setIndex((index - 1 + event.images.length) % event.images.length)} 
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 text-white transition-all"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={() => setIndex((index + 1) % event.images.length)} 
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 text-white transition-all"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>
        
        {/* Modal Info Strip */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="text-center md:text-left text-white">
            <h4 className="text-xl font-bold tracking-tight">{event.title}</h4>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-1">
              {event.date} • {index + 1} of {event.images.length}
            </p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto max-w-full md:max-w-md pb-2 scrollbar-hide">
            {event.images.map((img: any, i: number) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)} 
                className={`relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  index === i ? 'ring-2 ring-orange-500 scale-110 opacity-100 shadow-lg shadow-orange-500/20' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ---------------- MAIN SECTION ---------------- */

export function Events() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <section id="events" className="py-24 px-6 lg:px-12 bg-white dark:bg-[#030303] min-h-screen relative overflow-hidden">
      {/* 1. Background System Sync */}
      <div 
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`, backgroundSize: '50px 50px' }} 
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-4"
          >
            <Camera size={16} /> <span>./visual-archives</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter"
          >
            Moments in <br /> 
            <span className="text-zinc-400 dark:text-zinc-700 italic underline decoration-orange-500/20 underline-offset-8">
              Tech Community.
            </span>
          </motion.h2>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-6">
          {events.map((event, i) => (
            <BentoCard key={i} index={i} event={event} onClick={() => setSelected(event)} />
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selected && <ImageModal event={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}