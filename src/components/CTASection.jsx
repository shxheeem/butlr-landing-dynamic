import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function CTASection({ onContact }) {
  const ref = useRef(null)
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const sx = useSpring(mx, { damping: 30, stiffness: 80 })
  const sy = useSpring(my, { damping: 30, stiffness: 80 })
  const bg = useTransform([sx, sy], ([x, y]) =>
    `radial-gradient(60% 60% at ${x}% ${y}%, rgba(255,91,46,0.45) 0%, rgba(255,91,46,0) 60%), radial-gradient(40% 40% at ${100-x}% ${100-y}%, rgba(46,108,255,0.3) 0%, transparent 60%)`
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      mx.set(((e.clientX - r.left) / r.width) * 100)
      my.set(((e.clientY - r.top) / r.height) * 100)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <section id="pilot" ref={ref} className="relative py-24 md:py-36 bg-ink text-on-ink overflow-hidden">
      <motion.div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: bg }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="pill mb-6" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--on-ink-hair)', color: 'var(--on-ink)' }}>
              <span className="pill-dot" /> Pilot program · 2026
            </div>
            <h2 className="display-black text-[12vw] sm:text-[9vw] md:text-[7.4vw] lg:text-[6vw] xl:text-[6rem] leading-[0.92]">
              Let's pilot on{' '}
              <span className="text-gradient-accent">your campus.</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-on-ink-mute leading-relaxed max-w-xl">
              Six-week rollout. First term of insights free. We build the app around your SU — you ship real engagement to the students you serve.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button onClick={onContact} className="btn btn-accent">
                Start a pilot <span aria-hidden>→</span>
              </button>
              <a href="mailto:hello@butlr.xyz" className="btn btn-ink-on-ink">
                hello@butlr.xyz
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="card-ink p-7" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--on-ink-hair)' }}>
            <div className="tag mb-4" style={{ color: 'var(--on-ink-mute)' }}>NOT ANOTHER UNI APP</div>
            <ul className="space-y-4">
              {[
                'Built by students, for students',
                'Opinionated, not a CMS',
                'One platform replaces 15 tools',
                'Insights that move the needle',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full grid place-items-center text-[11px]" style={{ background: 'var(--accent)' }}>✓</div>
                  <span className="text-base">{t}</span>
                </li>
              ))}
            </ul>
            <div className="hair-divider my-6" style={{ background: 'var(--on-ink-hair)' }} />
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1.5">
                {['var(--accent)', 'var(--accent-3)', 'var(--accent-4)', 'var(--accent-2)'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2" style={{ background: c, borderColor: 'var(--ink)' }} />
                ))}
              </div>
              <div className="text-sm text-on-ink-mute">Onboarding cohort · Autumn 2026</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
