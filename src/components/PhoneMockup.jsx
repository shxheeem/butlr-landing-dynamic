import React from 'react'
import { motion } from 'framer-motion'

export default function PhoneMockup({ src, alt, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative w-[260px] md:w-[340px] aspect-[9/19] rounded-[2.4rem] border-[6px] border-gray-700 shadow-2xl overflow-hidden bg-black ${className}`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-10" />
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  )
}
