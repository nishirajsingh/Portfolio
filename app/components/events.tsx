'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Calendar, ChevronLeft, ChevronRight, X, MapPin, Users, Crown, Sparkles } from 'lucide-react'
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
    location: 'Baroda',
    images: [devfest2025_1, devfest2025_2, devfest2025_3, devfest2025_4, devfest2025_5, devfest2025_6, devfest2025_7],
  },
  {
    title: 'AWS Community Day Vadodara 2025',
    date: '13 Sept 2025',
    type: 'In-Person',
    location: 'Vadodara',
    images: [awsVadodara1, awsVadodara2, awsVadodara3, awsVadodara4, awsVadodara5, awsVadodara6, awsVadodara7],
  },
  {
    title: 'Google Cloud Community Day 2025 – Gandhinagar',
    date: '5 July 2025',
    type: 'In-Person',
    location: 'Gandhinagar',
    images: [gcpGandhinagar1, gcpGandhinagar2, gcpGandhinagar3, gcpGandhinagar4, gcpGandhinagar5],
  },
  {
    title: 'AWS Summit India 2025',
    date: '26 June 2025',
    type: 'Online',
    location: 'Virtual',
    images: [awsSummit1, awsSummit2, awsSummit3, awsSummit4, awsSummit5],
  },
  {
    title: 'DevOps Meets AI by Shubham Londhe',
    date: '23 June 2025',
    type: 'In-Person',
    location: 'India',
    images: [devopsAi1, devopsAi2],
  },
  {
    title: 'AWS Community Day Ahmedabad 2025',
    date: '21 June 2025',
    type: 'In-Person',
    location: 'Ahmedabad',
    images: [awsAhmedabad1, awsAhmedabad2, awsAhmedabad3, awsAhmedabad4, awsAhmedabad5, awsAhmedabad6, awsAhmedabad7],
  },
  {
    title: 'GDG Baroda DevFest 2024',
    date: '1 Dec 2024',
    type: 'In-Person',
    location: 'Baroda',
    images: [devfest2024_1, devfest2024_2, devfest2024_3],
  },
]

function EventCard({ event, index, onClick }: { event: typeof events[0]; index: number; onClick: () => void }) {
  const isLeft = index % 2 === 0
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Timeline Node */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-xl relative z-10"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Crown className="w-10 h-10 text-white" />
        </motion.div>
      </div>

      {/* Event Card */}
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        className="flex-1 group relative cursor-pointer"
      >
        {/* Decorative corners */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-orange-500 rounded-tl-xl" />
        <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-amber-500 rounded-tr-xl" />
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-amber-500 rounded-bl-xl" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-orange-500 rounded-br-xl" />
        
        <div className="relative bg-gradient-to-br from-orange-50/90 to-amber-50/90 dark:from-orange-900/30 dark:to-amber-900/30 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-300 dark:border-orange-700">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <Image
                src={event.images[0]}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg ${
                  event.type === 'In-Person' 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                }`}>
                  {event.type}
                </span>
              </div>
              
              {event.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {event.images.length} Photos
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{event.date}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {event.title}
              </h3>
              
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{event.location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Click to view gallery</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
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
      className="fixed inset-0 bg-gradient-to-br from-black/95 via-orange-950/20 to-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      
      {/* Close Button */}
      <motion.button
        onClick={onClose}
        whileHover={{ scale: 1.1, rotate: 90 }}
        className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white p-3 rounded-full transition-all z-10 shadow-xl"
      >
        <X className="w-6 h-6" />
      </motion.button>

      <div className="relative w-full max-w-4xl px-4 sm:px-6" onClick={(e) => e.stopPropagation()}>
        {/* Decorative corners on modal - hidden on mobile */}
        <div className="hidden sm:block absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-orange-500 rounded-tl-2xl" />
        <div className="hidden sm:block absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-amber-500 rounded-tr-2xl" />
        <div className="hidden sm:block absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-amber-500 rounded-bl-2xl" />
        <div className="hidden sm:block absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-orange-500 rounded-br-2xl" />
        
        {/* Image Container */}
        <motion.div 
          className="relative w-full h-[50vh] sm:h-[60vh] bg-gradient-to-br from-orange-900/20 to-amber-900/20 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden border border-orange-500/30 sm:border-2 shadow-2xl"
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <Image
            src={event.images[currentImage]}
            alt={`${event.title} - ${currentImage + 1}`}
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Navigation Buttons */}
        {event.images.length > 1 && (
          <>
            <motion.button
              onClick={prevImage}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white p-2 sm:p-3 rounded-full transition-all shadow-xl"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={nextImage}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white p-2 sm:p-3 rounded-full transition-all shadow-xl"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            
            {/* Thumbnail Navigation */}
            <div className="absolute -bottom-12 sm:-bottom-14 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 bg-gradient-to-r from-orange-900/80 to-amber-900/80 backdrop-blur-xl px-3 sm:px-4 py-2 rounded-full border border-orange-500/30">
              {event.images.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  whileHover={{ scale: 1.2 }}
                  className={`transition-all rounded-full ${
                    i === currentImage 
                      ? 'w-6 sm:w-8 h-2 bg-gradient-to-r from-orange-500 to-amber-500' 
                      : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Event Info */}
        <motion.div 
          className="mt-4 sm:mt-6 text-center bg-gradient-to-r from-orange-900/80 to-amber-900/80 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-orange-500/30"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            <h3 className="text-base sm:text-xl font-bold text-white line-clamp-1">{event.title}</h3>
            <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-orange-200">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{event.location}</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
              event.type === 'In-Person' 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-500 text-white'
            }`}>
              {event.type}
            </span>
          </div>
          <p className="text-xs text-orange-300 mt-2 font-semibold">
            {currentImage + 1} / {event.images.length}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null)

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-2 border-orange-500/20 rounded-full text-sm font-bold text-orange-600 dark:text-orange-400 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Crown className="w-5 h-5" />
            Community Journey
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">
            Events & Gatherings
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A royal chronicle of tech community participation, knowledge sharing, and networking across India
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-500 rounded-full" />
          
          <div className="space-y-16">
            {events.map((event, index) => (
              <EventCard key={index} event={event} index={index} onClick={() => setSelectedEvent(event)} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && <ImageModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </AnimatePresence>
    </section>
  )
}
