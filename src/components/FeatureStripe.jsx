import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureStripe({ eyebrow, title, text, image, flip }) {
  return (
    <section className={`py-24 relative overflow-hidden ${flip ? 'bg-black' : 'bg-gradient-to-r from-gray-900 to-black'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-animated" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div>
          {eyebrow && <div className="text-sm tracking-widest text-indigo-400 uppercase mb-2">{eyebrow}</div>}
          <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-4">{title}</motion.h2>
          <p className="text-gray-300 text-lg">{text}</p>
        </div>
    </section>
  )
}

  )
}