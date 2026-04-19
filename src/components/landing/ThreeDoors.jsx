import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

const doors = [
  {
    to: '/',
    no: '01',
    label: 'For students',
    line: 'A home for campus life. Events, societies, voice, wellbeing.',
    accent: 'var(--accent)',
    glyph: (
      // small abstract: stacked "cards" ,  the feed idea
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="4" y="10" width="26" height="8" rx="2.5" fill="currentColor" opacity="0.18" />
        <rect x="6" y="18" width="28" height="8" rx="2.5" fill="currentColor" opacity="0.35" />
        <rect x="8" y="26" width="26" height="8" rx="2.5" fill="currentColor" />
      </svg>
    ),
    onClickIsSelf: true,
  },
  {
    to: '/features/su',
    no: '02',
    label: 'For student unions',
    line: 'A workspace for committees, reach, and handover.',
    accent: 'var(--accent-3)',
    glyph: (
      // small abstract: grid ,  admin workspace
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="5" y="5" width="13" height="13" rx="3" fill="currentColor" opacity="0.3" />
        <rect x="22" y="5" width="13" height="13" rx="3" fill="currentColor" />
        <rect x="5" y="22" width="13" height="13" rx="3" fill="currentColor" />
        <rect x="22" y="22" width="13" height="13" rx="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    to: '/features/universities',
    no: '03',
    label: 'For universities',
    line: 'A read on how engaged students are, and what\u2019s getting used.',
    accent: 'var(--accent-4)',
    glyph: (
      // small abstract: an "aggregate line" ,  the privacy-aware chart
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M4 28 L12 22 L18 25 L26 14 L34 18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="14" r="3" fill="currentColor" />
      </svg>
    ),
  },
]

export default function ThreeDoors() {
  const prefersReduced = useReducedMotion()

  const onStudentsClick = (e) => {
    // Already on the landing page ,  smooth-scroll to top instead of routing
    if (window.location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' })
    }
  }

  return (
    <section className="relative py-24 md:py-32 bg-paper">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="tag mb-3">Three doors</div>
            <h2 className="display text-4xl md:text-5xl font-bold leading-[1] tracking-[-0.035em] max-w-xl">
              Depending on who you are.
            </h2>
          </div>
          <p className="text-mute md:text-right md:max-w-sm leading-relaxed">
            Same app, three lenses. Students see a home for campus. SUs see a workspace.
            Universities see how things are going.
          </p>
        </div>

        {/* Doors */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {doors.map((d, i) => (
            <motion.div
              key={d.no}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              <Link
                to={d.to}
                onClick={d.onClickIsSelf ? onStudentsClick : undefined}
                className="group block relative p-7 md:p-8 h-full rounded-[20px] border border-hair bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-soft"
              >
                {/* Accent door-wash ,  sweeps in on hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"
                  style={{
                    background: `radial-gradient(80% 80% at 100% 0%, ${d.accent} 0%, transparent 60%)`,
                    mixBlendMode: 'multiply',
                    filter: 'saturate(0.6)',
                  }}
                />
                {/* Faint door-frame line, drawn bottom → top on hover */}
                <div
                  aria-hidden
                  className="absolute left-0 top-full h-full w-full border-t-2 transition-transform duration-500 group-hover:-translate-y-full"
                  style={{ borderColor: d.accent }}
                />

                <div className="relative z-10 flex items-start justify-between mb-10 md:mb-14">
                  <div
                    className="w-11 h-11 rounded-xl grid place-items-center transition-colors"
                    style={{ color: d.accent, background: 'var(--paper)', border: '1px solid var(--hair)' }}
                  >
                    {d.glyph}
                  </div>
                  <span className="text-[11px] text-mute tracking-wider">{d.no}</span>
                </div>

                <div className="relative z-10">
                  <div className="display text-2xl md:text-[26px] font-bold leading-[1.1] tracking-[-0.025em]">
                    {d.label}
                  </div>
                  <div className="text-mute mt-2 leading-relaxed text-[15px] max-w-[22ch]">
                    {d.line}
                  </div>

                  {/* Enter affordance */}
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink inline-flex items-center gap-1.5 transition-all group-hover:gap-3">
                      Enter
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span
                      className="w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                      style={{ background: d.accent }}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
