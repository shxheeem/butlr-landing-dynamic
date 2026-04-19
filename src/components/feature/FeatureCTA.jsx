import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function FeatureCTA({ onContact, label = 'Book a 20-minute walkthrough', body }) {
  const prefersReduced = useReducedMotion()
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
        <motion.h2
          initial={prefersReduced ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="display text-4xl md:text-6xl font-bold tracking-[-0.035em] leading-[1]"
        >
          See it on a call.
        </motion.h2>
        {body && (
          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 text-lg text-mute max-w-xl mx-auto leading-relaxed"
          >
            {body}
          </motion.p>
        )}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button onClick={onContact} className="btn btn-primary">
            {label} <span aria-hidden>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
