import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// ============================================================
// Small in-context UI snippets. One per moment.
// These are sized like app cards, not full phone screens.
// ============================================================

function MondayEventSnippet() {
  return (
    <div className="w-full max-w-[380px] space-y-3">
      {/* Incoming notification */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        className="card shadow-soft p-3 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl grid place-items-center text-lg flex-shrink-0" style={{ background: 'var(--accent)' }}>🎟</div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] text-mute">PHOTOGRAPHY SOC · 2 MIN AGO</div>
          <div className="text-[13px] font-semibold truncate">Golden hour walk, Wednesday 6pm</div>
        </div>
      </motion.div>

      {/* Event card with RSVP */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card shadow-soft overflow-hidden"
      >
        <div className="h-28" style={{ background: 'linear-gradient(135deg, var(--accent-2), var(--accent))' }} />
        <div className="p-4">
          <div className="text-[10px] text-mute">WED · 6:00 PM · STUDENT GREEN</div>
          <div className="display text-[17px] font-bold mt-1 leading-tight">Golden hour walk</div>
          <div className="text-[12px] text-mute mt-1.5 leading-snug">
            Bring a camera or a phone, we'll show you the ropes.
          </div>
          <div className="mt-3 flex items-center gap-2">
            <motion.div
              initial={{ scale: 1, background: 'var(--ink)' }}
              whileInView={{
                scale: [1, 0.96, 1],
                background: ['var(--ink)', 'var(--accent)', 'var(--accent)'],
              }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex-1 py-2.5 text-center rounded-full text-[12px] font-semibold text-on-ink"
            >
              ✓ Going
            </motion.div>
            <div className="w-10 h-10 rounded-full border border-hair grid place-items-center text-sm">
              ⌵
            </div>
          </div>
        </div>
      </motion.div>

      {/* Points floater */}
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-ink text-on-ink text-[12px] font-semibold ml-auto block w-fit"
      >
        <span>+50 pts</span>
        <span className="text-[10px] opacity-60">· going to events</span>
      </motion.div>
    </div>
  )
}

function WednesdayVoteSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="card shadow-soft p-5 w-full max-w-[380px]"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="tag">Student voice</div>
        <div className="text-[10px] text-mute">1,284 votes · live</div>
      </div>
      <div className="display text-[17px] font-bold leading-tight">
        Should the library open 24/7 in term 2?
      </div>
      <div className="mt-4 space-y-2.5">
        {[
          { l: 'Yes, we need it', v: 68, c: 'var(--accent-4)' },
          { l: 'No, current hours are fine', v: 32, c: 'var(--hair)' },
        ].map((r, i) => (
          <motion.div
            key={r.l}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
            className="relative h-9 rounded-full bg-surface-2 overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${r.v}%` }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0"
              style={{ background: r.c, opacity: 0.5 }}
            />
            <div className="absolute inset-0 flex items-center justify-between px-4 text-[12px] font-semibold">
              <span>{r.l}</span>
              <span>{r.v}%</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 text-[11px] text-mute">
        Closes Friday · SU will publish the result by Monday.
      </div>
    </motion.div>
  )
}

function FridayWellbeingSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="card shadow-soft p-5 w-full max-w-[380px]"
    >
      <div className="tag mb-3">Wellbeing · confidential</div>
      <div className="display text-[17px] font-bold leading-tight">
        Whatever you're carrying, there's someone here.
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2">
        {[
          { t: 'Talk to a counsellor', s: 'Tue · 2:00 pm · in-person', sel: true },
          { t: 'Talk to a counsellor', s: 'Wed · 10:30 am · video', sel: false },
          { t: 'Drop-in this week', s: 'Thu · 4–6 pm · no booking', sel: false },
        ].map((slot, i) => (
          <motion.button
            key={i}
            type="button"
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.3, delay: 0.25 + i * 0.08 }}
            className={`w-full text-left p-3 rounded-2xl border transition-colors ${
              slot.sel
                ? 'border-ink bg-ink text-on-ink'
                : 'border-hair bg-surface hover:border-ink/30'
            }`}
          >
            <div className="text-[12px] font-semibold">{slot.t}</div>
            <div className={`text-[11px] mt-0.5 ${slot.sel ? 'opacity-70' : 'text-mute'}`}>{slot.s}</div>
          </motion.button>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="mt-4 text-[11px] text-mute leading-relaxed"
      >
        No record visible to staff outside wellbeing. Cancel any time.
      </motion.div>
    </motion.div>
  )
}

function SundayStreakSnippet() {
  return (
    <div className="w-full max-w-[380px] space-y-3">
      {/* Streak card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="card-ink p-5"
      >
        <div className="text-[10px] opacity-70 mb-1">YOUR STREAK</div>
        <div className="display text-[42px] font-bold leading-none flex items-baseline gap-2">
          <motion.span
            initial={{ scale: 0.9 }}
            whileInView={{ scale: [0.9, 1.08, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            🔥
          </motion.span>
          13
          <span className="text-[14px] opacity-60 font-normal">days</span>
        </div>
        <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.12)' }}>
          <motion.div
            initial={{ width: '50%' }}
            whileInView={{ width: '72%' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full"
            style={{ background: 'var(--accent)' }}
          />
        </div>
        <div className="text-[10px] opacity-60 mt-1.5">2 days to Campus Regular</div>
      </motion.div>

      {/* Badge unlock toast */}
      <motion.div
        initial={{ opacity: 0, y: -8, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="card shadow-soft p-3 flex items-center gap-3"
      >
        <motion.div
          initial={{ rotate: -20, scale: 0.6 }}
          whileInView={{ rotate: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 260 }}
          className="w-11 h-11 rounded-xl grid place-items-center text-white font-bold"
          style={{ background: 'var(--accent-2)', color: 'var(--ink)' }}
        >
          ★
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] text-mute">NEW BADGE</div>
          <div className="text-[13px] font-semibold">First vote cast</div>
        </div>
        <div className="text-[11px] text-mute">+25 pts</div>
      </motion.div>
    </div>
  )
}

// ============================================================
// The section
// ============================================================

const moments = [
  {
    day: 'MON · 09:24',
    caption: 'your society drops an event.',
    line: 'tap once. you\'re in.',
    snippet: <MondayEventSnippet />,
    side: 'right', // UI side (desktop)
  },
  {
    day: 'WED · 13:10',
    caption: 'your SU puts a vote out.',
    line: 'weigh in in five seconds.',
    snippet: <WednesdayVoteSnippet />,
    side: 'left',
  },
  {
    day: 'FRI · 22:40',
    caption: 'Stuck? Need support?',
    line: 'book a wellbeing slot, confidentially.',
    snippet: <FridayWellbeingSnippet />,
    side: 'right',
  },
  {
    day: 'SUN · 19:02',
    caption: 'your streak ticks up.',
    line: 'a badge unlocks.',
    snippet: <SundayStreakSnippet />,
    side: 'left',
  },
]

export default function WeekOnButlr() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="week-on-butlr" className="relative py-24 md:py-36 bg-paper">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="tag mb-4">A week on Butlr</div>
          <h2 className="display text-4xl md:text-6xl font-bold leading-[1] tracking-[-0.035em]">
            One app. <br className="hidden sm:block" />Every beat of campus.
          </h2>
          <p className="mt-5 text-lg text-mute max-w-xl leading-relaxed">
            Not a feed to scroll. Just the things you care about, in the moments they matter.
          </p>
        </div>

        {/* Moments */}
        <div className="mt-16 md:mt-20 space-y-20 md:space-y-28">
          {moments.map((m, i) => (
            <motion.article
              key={m.day}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                m.side === 'left' ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              {/* Copy column */}
              <div className="md:col-span-5">
                <div className="tag">{m.day}</div>
                <div className="display text-3xl md:text-4xl font-bold mt-2 leading-tight tracking-[-0.025em]">
                  {m.caption}
                </div>
                <div className="text-xl md:text-2xl text-mute mt-2 leading-tight">
                  {m.line}
                </div>
              </div>

              {/* UI column */}
              <div className="md:col-span-7 flex justify-center md:justify-start">
                {m.snippet}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
