import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function PilotNote({ onContact }) {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative p-7 md:p-9 rounded-[20px] border border-hair bg-surface"
        >
          {/* Small accent corner */}
          <div
            aria-hidden
            className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-40 -z-0 pointer-events-none"
            style={{ background: 'var(--accent)' }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="tag mb-2">An honest note</div>
              <p className="display text-xl md:text-[22px] font-semibold leading-[1.35] tracking-[-0.015em]">
                We're looking for more unions to build this with, mainly the kind who are prepared to co-design a reimagined platform.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button onClick={onContact} className="btn btn-primary">
                Start a conversation <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
