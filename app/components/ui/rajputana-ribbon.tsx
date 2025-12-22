'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function RajputanaRibbon() {
  const [triangleCount, setTriangleCount] = useState(30)
  
  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth
      setTriangleCount(Math.floor(width / 40))
    }
    updateCount()
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none h-6 sm:h-8"
    >
      <div className="flex w-full h-full justify-center items-end gap-0.5 sm:gap-1">
        {Array.from({ length: triangleCount }).map((_, i) => (
          <div key={i} className="relative w-8 sm:w-10 h-5 sm:h-6">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] sm:border-l-[20px] border-l-transparent border-r-[16px] sm:border-r-[20px] border-r-transparent border-b-[20px] sm:border-b-[24px] border-b-red-600" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] sm:border-l-[18px] border-l-transparent border-r-[14px] sm:border-r-[18px] border-r-transparent border-b-[18px] sm:border-b-[22px] border-b-orange-500" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-4 sm:h-5 bg-yellow-400" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
