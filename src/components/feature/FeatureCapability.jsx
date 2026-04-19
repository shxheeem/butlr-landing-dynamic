import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * One capability row: heading, 2-3 sentences, UI demonstration.
 * Alternates side on the grid if `flip` is set.
 */
export default function FeatureCapability({ index, title, body, media, flip = false }) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.article
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
        flip ? 'md:[&>div:first-child]:order-2' : ''
      }`}
    >
      <div className="md:col-span-5">
        <div className="text-[12px] text-mute mb-2 tracking-wider">{index}</div>
        <div className="display text-3xl md:text-[38px] font-bold leading-[1.08] tracking-[-0.025em]">
          {title}
        </div>
        <div className="mt-4 text-[17px] text-mute leading-relaxed max-w-[44ch]">
          {body}
        </div>
      </div>
      <div className="md:col-span-7 flex justify-center md:justify-start">
        {media}
      </div>
    </motion.article>
  )
}
