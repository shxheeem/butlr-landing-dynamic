import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import PhoneFrame from '../PhoneFrame'
import FeedMock from '../mockups/FeedMock'
import SocietiesMock from '../mockups/SocietiesMock'
import EngageMock from '../mockups/EngageMock'
import RewardsMock from '../mockups/AdminMock'

const screens = [
  { k: 'today', label: 'Today', c: <FeedMock /> },
  { k: 'societies', label: 'Societies', c: <SocietiesMock /> },
  { k: 'voice', label: 'Voice', c: <EngageMock /> },
  { k: 'wellbeing', label: 'Rewards', c: <RewardsMock /> },
]

const ROTATE_MS = 4200

export default function Hero({ onContact }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const prefersReduced = useReducedMotion()

  // Auto-rotate until the user interacts
  useEffect(() => {
    if (paused || prefersReduced) return
    const id = setInterval(() => {
      setActive((a) => (a + 1) % screens.length)
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [paused, prefersReduced])

  const pickScreen = (i) => {
    setActive(i)
    setPaused(true)
  }

  const scrollToWeek = (e) => {
    e.preventDefault()
    const el = document.getElementById('week-on-butlr')
    if (el) el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Calm background wash ,  no parallax, no follow-cursor */}
      <div aria-hidden className="absolute inset-0 -z-10 hero-wash opacity-80" />
      <div aria-hidden className="absolute inset-0 -z-10 grain-paper opacity-70" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Headline. One idea, two lines. */}
        <motion.h1
          initial={prefersReduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="display text-center pt-6 text-[14vw] sm:text-[9vw] md:text-[76px] lg:text-[88px] leading-[0.95] tracking-[-0.035em]"
        >
          Campus life,
          <br />
          <span className="relative inline-block">
            in one calm home.
          </span>
        </motion.h1>

        {/* One-sentence sub */}
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl mx-auto text-center text-lg md:text-xl text-mute leading-relaxed"
        >
          The events your societies run, the votes your SU puts out, the wellbeing services your uni offers. All in one place.
        </motion.p>

        {/* Two CTAs ,  product-first, pilot second */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#week-on-butlr" onClick={scrollToWeek} className="btn btn-primary">
            See the app <span aria-hidden>↓</span>
          </a>
          <button onClick={onContact} className="btn btn-ghost">
            Book a pilot
          </button>
        </motion.div>

        {/* Product element ,  tappable phone with tab row */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-20"
        >
          {/* Tab row above the phone ,  the touch invitation */}
          <div role="tablist" aria-label="Preview the app" className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-1 p-1 rounded-full border border-hair bg-surface/60 backdrop-blur-sm">
              {screens.map((s, i) => {
                const selected = active === i
                return (
                  <button
                    key={s.k}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`phone-panel-${s.k}`}
                    id={`phone-tab-${s.k}`}
                    onClick={() => pickScreen(i)}
                    className={`relative px-3.5 py-1.5 text-[12px] font-semibold rounded-full transition-colors ${
                      selected ? 'text-on-ink' : 'text-ink/60 hover:text-ink'
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="hero-tab-pill"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{s.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Phone ,  the product as media */}
          <div className="relative flex items-start justify-center">
            {/* Subtle accent glow behind phone */}
            <div
              aria-hidden
              className="absolute top-16 w-[460px] h-[460px] rounded-full blur-3xl opacity-40 -z-0"
              style={{ background: 'radial-gradient(closest-side, var(--accent) 0%, transparent 70%)' }}
            />

            <div
              className="relative z-10"
              onMouseEnter={() => setPaused(true)}
              onFocus={() => setPaused(true)}
            >
              <PhoneFrame width={328}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={screens[active].k}
                    id={`phone-panel-${screens[active].k}`}
                    role="tabpanel"
                    aria-labelledby={`phone-tab-${screens[active].k}`}
                    initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    {screens[active].c}
                  </motion.div>
                </AnimatePresence>
              </PhoneFrame>
            </div>
          </div>

          {/* Progress dots under phone */}
          <div className="flex justify-center items-center gap-1.5 mt-8">
            {screens.map((s, i) => (
              <button
                key={s.k}
                aria-label={`Show ${s.label}`}
                onClick={() => pickScreen(i)}
                className={`h-1.5 rounded-full transition-all ${
                  active === i ? 'w-6 bg-ink' : 'w-1.5 bg-ink/20 hover:bg-ink/40'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
