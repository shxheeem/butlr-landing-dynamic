import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const moments = [
  { t: '08:30', title: 'Lecture reminder',      body: '"Tutorial room swapped — new wing, 2.04."',     c: 'var(--accent-3)' },
  { t: '11:45', title: 'Photography Soc post',  body: 'Golden-hour walk tomorrow at 6. Tap to join.',  c: 'var(--accent)' },
  { t: '13:10', title: 'SU vote',               body: 'Should term 2 library open 24/7? One tap.',    c: 'var(--lilac)' },
  { t: '18:00', title: 'RSVP · Freshers Ball',  body: 'Ticket in wallet. Door check-in by QR.',       c: 'var(--accent-4)' },
  { t: '22:15', title: 'Points earned',         body: '+40 pts. Streak extended · 12 days.',          c: 'var(--accent-2)' },
]

export default function MarketSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const line = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%'])

  return (
    <>
      {/* ==================== DAY IN THE LIFE ==================== */}
      <section id="day" className="relative py-24 md:py-36 bg-paper">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl mb-14 md:mb-20">
            <div className="pill mb-6"><span className="pill-dot" /> A day on campus</div>
            <h2 className="display-black text-[10vw] sm:text-[7vw] md:text-[5.6vw] lg:text-[4.6vw] xl:text-[4.4rem] leading-[0.95]">
              Five moments.{' '}
              <span className="text-gradient-accent">One app.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-mute leading-relaxed max-w-2xl">
              Fifteen years of fragmented campus tooling, collapsed into a single thread.
            </p>
          </div>

          <div ref={ref} className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div aria-hidden className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-hair" />
            <motion.div aria-hidden style={{ height: line }} className="absolute left-[22px] md:left-1/2 md:-translate-x-1/2 top-0 w-px origin-top" >
              <div className="w-full h-full bg-gradient-to-b from-accent via-accent-3 to-accent-4" />
            </motion.div>

            <div className="space-y-10 md:space-y-16">
              {moments.map((m, i) => {
                const left = i % 2 === 0
                return (
                  <motion.div
                    key={m.t}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20% 0px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex items-center gap-6 md:gap-10 ${left ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="absolute left-[22px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-paper" style={{ background: m.c }} />

                    <div className="hidden md:block flex-1" />
                    <div className="ml-12 md:ml-0 flex-1">
                      <div className={`card p-5 md:p-6 ${left ? 'md:text-right' : ''}`}>
                        <div className={`flex items-center gap-2 mb-2 ${left ? 'md:justify-end' : ''}`}>
                          <span className="mono text-[11px] tracking-widest text-mute">{m.t}</span>
                          <span className="w-1 h-1 rounded-full" style={{ background: m.c }} />
                        </div>
                        <div className="display text-xl md:text-2xl font-bold">{m.title}</div>
                        <p className="text-mute mt-1 text-sm md:text-base">{m.body}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ROLLOUT ==================== */}
      <section id="rollout" className="relative py-24 md:py-32 bg-surface-2">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="pill mb-6"><span className="pill-dot" /> Rollout</div>
            <h2 className="display-black text-[10vw] sm:text-[7vw] md:text-[5.6vw] lg:text-[4.6vw] xl:text-[4.2rem] leading-[0.95]">
              Live in{' '}
              <span className="text-gradient-accent">6 weeks.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-mute leading-relaxed max-w-xl">
              We handle the heavy lift. Your team keeps running the union — we ship the app.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="card p-6 md:p-10">
              <div className="space-y-5">
                {[
                  { w: 'WK 1–2', t: 'Scoping + brand', d: 'Config the app to your SU — colours, services, societies import.' },
                  { w: 'WK 3–4', t: 'SSO + data', d: 'University SSO, student directory sync, historical events migrated.' },
                  { w: 'WK 5',   t: 'Soft launch', d: 'Pilot cohort (typically 500 students) — feed, voice and societies live.' },
                  { w: 'WK 6',   t: 'Campus-wide', d: 'Full rollout with SU team trained on admin + insights.' },
                ].map((r, i) => (
                  <motion.div
                    key={r.w}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 md:gap-6 pb-5 last:pb-0 border-b border-hair last:border-0"
                  >
                    <div className="mono text-[11px] tracking-widest text-accent mt-1 w-14 md:w-20 flex-shrink-0">{r.w}</div>
                    <div>
                      <div className="display text-lg md:text-xl font-bold">{r.t}</div>
                      <div className="text-sm md:text-base text-mute mt-1">{r.d}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section id="voices" className="relative py-24 md:py-32 bg-paper overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-14 md:mb-20">
          <div className="pill mb-6"><span className="pill-dot" /> Voices</div>
          <h2 className="display-black text-[10vw] sm:text-[7vw] md:text-[5.6vw] lg:text-[4.6vw] xl:text-[4.4rem] leading-[0.95] max-w-4xl">
            What students and SUs are{' '}
            <span className="text-gradient-accent">actually saying.</span>
          </h2>
        </div>

        <Marquee />
      </section>
    </>
  )
}

function Marquee() {
  const quotes = [
    { q: "For the first time in two years I actually know what's on — and I'm showing up.", n: 'Maya', r: 'Y2 Politics · Aston' , c: 'var(--accent)' },
    { q: 'Elections turnout tripled. We thought we had a comms problem — we had a tooling problem.', n: 'Ben', r: 'VP Democracy · Warwick SU', c: 'var(--accent-3)' },
    { q: 'We moved society finance, events and comms into one place. Saturday morning inbox: 12 emails, not 230.', n: 'Priya', r: 'Activities Coordinator · Aston SU', c: 'var(--lilac)' },
    { q: 'The only app I kept on my home screen after freshers.', n: 'Jamal', r: 'Y1 CS · Manchester', c: 'var(--accent-4)' },
    { q: 'Finally, we can prove engagement to the board in term-over-term numbers, not anecdotes.', n: 'Elena', r: 'CEO · Leeds SU', c: 'var(--accent-2)' },
    { q: 'Joining a society used to feel like filling out HMRC paperwork. Now it takes 9 seconds.', n: 'Sam', r: 'Y3 Biomed · UCL', c: 'var(--accent)' },
  ]
  const all = [...quotes, ...quotes]

  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10" style={{ background: 'linear-gradient(90deg, var(--paper), transparent)' }} />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10" style={{ background: 'linear-gradient(-90deg, var(--paper), transparent)' }} />
      <div className="marquee-track animate-marquee-slow py-4">
        {all.map((q, i) => (
          <div key={i} className="w-[360px] md:w-[440px] shrink-0 card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full grid place-items-center text-white font-bold" style={{ background: q.c }}>{q.n[0]}</div>
              <div>
                <div className="font-semibold text-sm">{q.n}</div>
                <div className="text-xs text-mute">{q.r}</div>
              </div>
            </div>
            <p className="display text-lg md:text-xl leading-snug">&ldquo;{q.q}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  )
}
