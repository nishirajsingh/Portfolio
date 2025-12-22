'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'

import devfest2024_1 from './images/events/devfest-2024/1.jpg'
import devfest2024_2 from './images/events/devfest-2024/2.jpg'
import devfest2024_3 from './images/events/devfest-2024/3.jpg'

import awsAhmedabad1 from './images/events/aws-ahmedabad/1.jpg'
import awsAhmedabad2 from './images/events/aws-ahmedabad/2.jpg'
import awsAhmedabad3 from './images/events/aws-ahmedabad/3.jpg'
import awsAhmedabad4 from './images/events/aws-ahmedabad/4.jpg'
import awsAhmedabad5 from './images/events/aws-ahmedabad/5.jpg'
import awsAhmedabad6 from './images/events/aws-ahmedabad/6.jpg'
import awsAhmedabad7 from './images/events/aws-ahmedabad/7.jpg'

import devopsAi1 from './images/events/devops-ai/1.jpg'
import devopsAi2 from './images/events/devops-ai/2.jpg'

import awsSummit1 from './images/events/aws-summit/1.jpg'
import awsSummit2 from './images/events/aws-summit/2.jpg'
import awsSummit3 from './images/events/aws-summit/3.jpg'
import awsSummit4 from './images/events/aws-summit/4.jpg'
import awsSummit5 from './images/events/aws-summit/5.jpg'

import gcpGandhinagar1 from './images/events/gcp-gandhinagar/1.jpg'
import gcpGandhinagar2 from './images/events/gcp-gandhinagar/2.jpg'
import gcpGandhinagar3 from './images/events/gcp-gandhinagar/3.jpg'
import gcpGandhinagar4 from './images/events/gcp-gandhinagar/4.jpg'
import gcpGandhinagar5 from './images/events/gcp-gandhinagar/5.jpg'

import awsVadodara1 from './images/events/aws-vadodara/1.jpg'
import awsVadodara2 from './images/events/aws-vadodara/2.jpg'
import awsVadodara3 from './images/events/aws-vadodara/3.jpg'
import awsVadodara4 from './images/events/aws-vadodara/4.jpg'
import awsVadodara5 from './images/events/aws-vadodara/5.jpg'
import awsVadodara6 from './images/events/aws-vadodara/6.jpg'
import awsVadodara7 from './images/events/aws-vadodara/7.jpg'

import devfest2025_1 from './images/events/devfest-2025/1.jpg'
import devfest2025_2 from './images/events/devfest-2025/2.jpg'
import devfest2025_3 from './images/events/devfest-2025/3.jpg'
import devfest2025_4 from './images/events/devfest-2025/4.jpg'
import devfest2025_5 from './images/events/devfest-2025/5.jpg'
import devfest2025_6 from './images/events/devfest-2025/6.jpg'
import devfest2025_7 from './images/events/devfest-2025/7.jpg'

const events = [
  {
    title: 'GDG DevFest Baroda 2025',
    date: '5 Oct 2025',
    type: 'In-Person',
    images: [devfest2025_1, devfest2025_2, devfest2025_3, devfest2025_4, devfest2025_5, devfest2025_6, devfest2025_7],
  },
  {
    title: 'AWS Community Day Vadodara 2025',
    date: '13 Sept 2025',
    type: 'In-Person',
    images: [awsVadodara1, awsVadodara2, awsVadodara3, awsVadodara4, awsVadodara5, awsVadodara6, awsVadodara7],
  },
  {
    title: 'Google Cloud Community Day 2025 – Gandhinagar',
    date: '5 July 2025',
    type: 'In-Person',
    images: [gcpGandhinagar1, gcpGandhinagar2, gcpGandhinagar3, gcpGandhinagar4, gcpGandhinagar5],
  },
  {
    title: 'AWS Summit India 2025',
    date: '26 June 2025',
    type: 'Online',
    images: [awsSummit1, awsSummit2, awsSummit3, awsSummit4, awsSummit5],
  },
  {
    title: 'DevOps Meets AI by Shubham Londhe',
    date: '23 June 2025',
    type: 'In-Person',
    images: [devopsAi1, devopsAi2],
  },
  {
    title: 'AWS Community Day Ahmedabad 2025',
    date: '21 June 2025',
    type: 'In-Person',
    images: [awsAhmedabad1, awsAhmedabad2, awsAhmedabad3, awsAhmedabad4, awsAhmedabad5, awsAhmedabad6, awsAhmedabad7],
  },
  {
    title: 'GDG Baroda DevFest 2024',
    date: '1 Dec 2024',
    type: 'In-Person',
    images: [devfest2024_1, devfest2024_2, devfest2024_3],
  },
]

function EventCard({ event, index, onClick }: { event: typeof events[0]; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 dark:border-gray-700/20"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.images[0]}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            event.type === 'In-Person' 
              ? 'bg-green-500 text-white' 
              : 'bg-blue-500 text-white'
          }`}>
            {event.type}
          </span>
        </div>
        
        {event.images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
            +{event.images.length - 1} photos
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {event.title}
        </h3>
        
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{event.date}</span>
        </div>
      </div>
    </motion.div>
  )
}

function ImageModal({ event, onClose }: { event: typeof events[0]; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % event.images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + event.images.length) % event.images.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-video">
          <Image
            src={event.images[currentImage]}
            alt={`${event.title} - ${currentImage + 1}`}
            fill
            className="object-contain"
          />
        </div>

        {event.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {event.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentImage ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="mt-4 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-300">{event.date} • {event.type}</p>
          <p className="text-sm text-gray-400 mt-2">{currentImage + 1} / {event.images.length}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Events & Community
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Active participant in tech communities and events, constantly learning and networking
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} onClick={() => setSelectedEvent(event)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && <ImageModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </AnimatePresence>
    </section>
  )
}
