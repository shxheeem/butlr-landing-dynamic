import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PhoneFrame from './PhoneFrame'
import FeedMock from './mockups/FeedMock'
import SocietiesMock from './mockups/SocietiesMock'
import EngageMock from './mockups/EngageMock'
import RewardsMock from './mockups/AdminMock'

const pillars = [
  {
    tag: '01 / FEED',
    title: 'Today, at a glance.',
    blurb: 'One home screen curates every event, notice and moment worth caring about — filtered for what each student already follows.',
    points: ['Smart feed, zero spam', 'RSVP in one tap', 'Personalised by timetable, society and interests'],
    color: 'var(--accent)',
    mock: <FeedMock />,
  },
  {
    tag: '02 / SOCIETIES',
    title: 'Your society, no spreadsheets.',
    blurb: 'Build the society, fill the membership, run the night. Payments, comms and attendance live in the same place.',
    points: ['Membership + payments built-in', 'Event tools with check-in QRs', 'Budget and finance at society level'],
    color: 'var(--accent-3)',
    mock: <SocietiesMock />,
  },
  {
    tag: '03 / VOICE',
    title: 'Representation that moves.',
    blurb: 'Polls, elections and consultations where students already are. Turnout stops being a lottery.',
    points: ['Secure, verified elections', 'Rolling polls + sentiment', 'Close the feedback loop publicly'],
    color: 'var(--lilac)',
    mock: <EngageMock />,
  },
  {
    tag: '04 / REWARDS',
    title: 'Showing up, rewarded.',
    blurb: 'Points, streaks and campus perks turn everyday engagement into a loop students actually chase.',
    points: ['Points for RSVPs, votes, volunteering', 'Local + SU perks', 'Streaks and leaderboards'],
    color: 'var(--accent-4)',
    mock: <RewardsMock />,
  },
]

export default function PlatformOverview() {
  const containerRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observers = []
    pillars.forEach((_, i) => {
      const el = document.getElementById(`pillar-${i}`)
      if (!el) return
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(i)
          })
        },
        { rootMargin: '-45% 0% -45% 0%', threshold: 0 }
      )
      io.observe(el)
      observers.push(io)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section id="platform" ref={containerRef} className="relative py-24 md:py-36 bg-paper">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="pill mb-6"><span className="pill-dot" /> The platform</div>
          <h2 className="display-black text-[10vw] sm:text-[7vw] md:text-[5.6vw] lg:text-[4.6vw] xl:text-[4.4rem] leading-[0.95]">
            Campus life —{' '}
            <span className="text-gradient-accent">one coherent product.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-mute leading-relaxed max-w-2xl">
            Four surfaces, one sign-in. Built so the student never leaves and the SU never loses context.
          </p>
        </div>

        <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left scrolling sections */}
          <div className="lg:col-span-7 space-y-36 md:space-y-52">
            {pillars.map((p, i) => (
              <motion.div
                id={`pillar-${i}`}
                key={p.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
                  <span className="mono text-[11px] tracking-[0.12em] text-mute">{p.tag}</span>
                </div>
                <h3 className="display text-4xl md:text-5xl lg:text-6xl font-bold mb-5">{p.title}</h3>
                <p className="text-lg md:text-xl text-mute leading-relaxed max-w-xl">{p.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-base">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Inline phone on mobile only */}
                <div className="lg:hidden mt-10 flex justify-center">
                  <PhoneFrame width={280}>{p.mock}</PhoneFrame>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sticky right phone */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-28 flex flex-col items-center">
              <div className="relative">
                {/* Color ring behind phone that changes */}
                <motion.div
                  aria-hidden
                  animate={{ background: `radial-gradient(closest-side, ${pillars[active].color}, transparent 70%)` }}
                  transition={{ duration: 0.6 }}
                  className="absolute -inset-10 rounded-full blur-3xl opacity-40"
                />
                <PhoneFrame width={320}>
                  {pillars.map((p, i) => (
                    <motion.div
                      key={p.tag}
                      className="absolute inset-0"
                      initial={false}
                      animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 24 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {p.mock}
                    </motion.div>
                  ))}
                </PhoneFrame>
              </div>

              <div className="mt-8 flex items-center gap-2">
                {pillars.map((p, i) => (
                  <button
                    key={p.tag}
                    onClick={() => document.getElementById(`pillar-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    className={`h-1.5 rounded-full transition-all ${active === i ? 'w-10' : 'w-1.5 bg-ink/20 hover:bg-ink/40'}`}
                    style={active === i ? { background: pillars[i].color, width: 40 } : undefined}
                    aria-label={p.tag}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
