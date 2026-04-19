import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Shared hero for /features/* pages.
 * Shape: eyebrow, headline, one-sentence sub, walkthrough CTA, product media on the right.
 */
export default function FeatureHero({ eyebrow, headline, sub, accent = 'var(--accent)', media, onContact }) {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 grain-paper opacity-70" />
      <div
        aria-hidden
        className="absolute -z-10 right-[-15%] top-[-10%] w-[60vw] h-[60vw] max-w-[620px] max-h-[620px] rounded-full blur-3xl opacity-40"
        style={{ background: `radial-gradient(closest-side, ${accent} 0%, transparent 70%)` }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-6">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="tag"
            style={{ color: accent }}
          >
            {eyebrow}
          </motion.div>

          <motion.h1
            initial={prefersReduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="display text-5xl md:text-[68px] leading-[0.98] tracking-[-0.035em] mt-4"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={prefersReduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-mute leading-relaxed max-w-xl"
          >
            {sub}
          </motion.p>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button onClick={onContact} className="btn btn-primary">
              Book a walkthrough <span aria-hidden>→</span>
            </button>
            <a href="#capabilities" className="btn btn-ghost">See the product</a>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          {media}
        </motion.div>
      </div>
    </section>
  )
}
