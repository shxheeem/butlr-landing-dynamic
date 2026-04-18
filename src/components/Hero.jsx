import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import PhoneFrame from './PhoneFrame'
import FeedMock from './mockups/FeedMock'
import SocietiesMock from './mockups/SocietiesMock'
import EngageMock from './mockups/EngageMock'
import RewardsMock from './mockups/AdminMock'

const screens = [
  { k: 'feed', label: 'Today', c: <FeedMock /> },
  { k: 'societies', label: 'Societies', c: <SocietiesMock /> },
  { k: 'voice', label: 'Voice', c: <EngageMock /> },
  { k: 'rewards', label: 'Rewards', c: <RewardsMock /> },
]

export default function Hero({ onContact }) {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { damping: 20, stiffness: 120 })
  const smy = useSpring(my, { damping: 20, stiffness: 120 })
  const blobX = useTransform(smx, (v) => `${v}px`)
  const blobY = useTransform(smy, (v) => `${v}px`)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % screens.length), 3600)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mx.set(x * 0.08)
      my.set(y * 0.08)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden hero-wash grain-paper"
    >
      {/* Animated blob that follows cursor */}
      <motion.div
        aria-hidden
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[760px] max-h-[760px] rounded-full blur-3xl opacity-60"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(closest-side, var(--accent) 0%, transparent 70%)' }} />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: useTransform(smx, (v) => `${-v * 0.6}px`), y: useTransform(smy, (v) => `${-v * 0.6}px`) }}
        className="pointer-events-none absolute bottom-[-15%] left-[-5%] w-[45vw] h-[45vw] max-w-[560px] max-h-[560px] rounded-full blur-3xl opacity-50"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(closest-side, var(--accent-3) 0%, transparent 70%)' }} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pill mb-6"
          >
            <span className="pill-dot" />
            Now onboarding UK Students' Unions · 2026
          </motion.div>

          <h1 className="display-black text-[13.5vw] sm:text-[10vw] md:text-[8.4vw] lg:text-[7.2vw] xl:text-[7.6rem]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Campus,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              in{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gradient-accent">one tap.</span>
                <svg aria-hidden className="absolute left-0 right-0 -bottom-2 w-full" viewBox="0 0 300 20" preserveAspectRatio="none">
                  <motion.path
                    d="M2 14 Q 75 2, 150 10 T 298 8"
                    stroke="var(--accent)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                  />
                </svg>
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-7 max-w-xl text-lg md:text-xl text-mute leading-relaxed"
          >
            The home screen of campus life — one place for societies, events, student voice, wellbeing and rewards.
            Built with UK universities and their Students' Unions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button onClick={onContact} className="btn btn-primary">
              Start a pilot <span aria-hidden>→</span>
            </button>
            <a href="#platform" className="btn btn-ghost">See the platform</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-4 md:gap-6 max-w-xl"
          >
            {[
              { k: '6 wks', v: 'typical rollout' },
              { k: '260+', v: 'societies per SU' },
              { k: '7M+', v: 'UK students' },
            ].map((s) => (
              <div key={s.v}>
                <div className="display text-3xl md:text-4xl font-bold text-gradient-accent">{s.k}</div>
                <div className="text-xs text-mute mt-1">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — phone with rotating screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="relative">
            {/* Floating sticker */}
            <motion.div
              initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -8, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="sticker absolute -top-3 -left-6 z-10"
            >
              ✦ Aston SU · live
            </motion.div>

            {/* Phone */}
            <div className="relative">
              <PhoneFrame width={310}>
                {screens.map((s, i) => (
                  <motion.div
                    key={s.k}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: active === i ? 1 : 0,
                      y: active === i ? 0 : 20,
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {s.c}
                  </motion.div>
                ))}
              </PhoneFrame>

              {/* Floating stat chip */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -left-8 bottom-12 md:-left-12 md:bottom-16 card p-3 animate-float w-[190px]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl grid place-items-center font-bold text-white" style={{ background: 'var(--accent-4)' }}>+38%</div>
                  <div>
                    <div className="text-[12px] font-semibold">engagement</div>
                    <div className="text-[10px] mono text-mute">vs legacy stack</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating count chip */}
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.25 }}
                className="absolute -right-4 top-16 md:-right-10 md:top-24 card p-3 animate-float-slow w-[170px]"
              >
                <div className="tag text-[9px] mb-1">RSVP · LIVE</div>
                <div className="text-[12px] font-semibold">412 students tonight</div>
                <div className="mt-2 flex -space-x-1.5">
                  {['var(--accent)', 'var(--accent-3)', 'var(--accent-4)', 'var(--accent-2)', 'var(--lilac)'].map((c, i) => (
                    <div key={i} className="w-5 h-5 rounded-full border-2 border-surface" style={{ background: c }} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Screen indicator dots */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {screens.map((s, i) => (
                <button
                  key={s.k}
                  onClick={() => setActive(i)}
                  aria-label={s.label}
                  className={`h-1.5 rounded-full transition-all ${active === i ? 'w-6 bg-ink' : 'w-1.5 bg-ink/20 hover:bg-ink/40'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trusted by strip */}
      <div className="relative mt-20 md:mt-28 max-w-7xl mx-auto px-5 md:px-8">
        <div className="tag mb-4">Built with students &amp; SUs across the UK</div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-ink/55 text-lg md:text-xl font-semibold">
          {['Aston University', 'University of Birmingham', 'Warwick SU', 'UCL Union', 'Manchester SU', 'Leeds SU'].map((n) => (
            <span key={n} className="opacity-70 hover:opacity-100 transition-opacity">{n}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
