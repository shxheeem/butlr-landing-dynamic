import React from 'react'
import { motion } from 'framer-motion'
import DashboardMock from './mockups/DashboardMock'

export default function FeatureDeepDives() {
  return (
    <>
      {/* ===========================================================
          FOR STUDENTS — bento
          =========================================================== */}
      <section id="students" className="relative py-24 md:py-36 bg-paper">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14 md:mb-20">
            <div className="max-w-3xl">
              <div className="pill mb-6"><span className="pill-dot" /> For students</div>
              <h2 className="display-black text-[10vw] sm:text-[7vw] md:text-[5.6vw] lg:text-[4.6vw] xl:text-[4.4rem] leading-[0.95]">
                Finally, a feed for{' '}
                <span className="text-gradient-accent">real life.</span>
              </h2>
              <p className="mt-6 text-lg md:text-xl text-mute leading-relaxed max-w-2xl">
                The app students actually open — because everything they're looking for already lives here.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-5 auto-rows-[minmax(170px,auto)]">
            {/* Card: Discovery */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
              className="col-span-12 md:col-span-7 card p-6 md:p-8 relative overflow-hidden row-span-2">
              <div className="tag mb-3">DISCOVER</div>
              <h3 className="display text-3xl md:text-4xl font-bold mb-3">Find your people in five taps.</h3>
              <p className="text-mute max-w-md">Browse 260+ societies, filter by vibe, join instantly. Bleed less bandwidth on group chats.</p>
              <div className="mt-6 grid grid-cols-3 gap-2.5 max-w-md">
                {[
                  { n: 'Photography', c: 'var(--accent)' },
                  { n: 'MUN', c: 'var(--accent-3)' },
                  { n: 'FC Aston', c: 'var(--accent-4)' },
                  { n: 'Drama', c: 'var(--lilac)' },
                  { n: 'Dev Soc', c: 'var(--accent-2)' },
                  { n: 'Climbing', c: 'var(--accent)' },
                ].map((t, i) => (
                  <motion.div key={t.n} whileHover={{ y: -4, rotate: 0 }}
                    initial={{ rotate: (i % 2 ? -3 : 2) }}
                    className="rounded-xl p-3 text-white text-xs font-semibold cursor-pointer"
                    style={{ background: t.c }}>
                    {t.n}
                  </motion.div>
                ))}
              </div>
              <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(closest-side, var(--accent), transparent)' }} />
            </motion.div>

            {/* Card: One tap RSVP */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: 0.05 }}
              className="col-span-12 md:col-span-5 card-ink p-6 md:p-8 relative overflow-hidden">
              <div className="tag mb-3" style={{ color: 'var(--on-ink-mute)' }}>RSVP</div>
              <h3 className="display text-3xl md:text-4xl font-bold mb-3">One-tap tickets.</h3>
              <p className="text-on-ink-mute">From discovery to ticket to door check-in — same app, no queueing through five tools.</p>
              <motion.div className="absolute -bottom-4 -right-4 text-[12rem] leading-none font-black opacity-10"
                animate={{ rotate: [0, 6, 0] }}
                transition={{ duration: 8, repeat: Infinity }}>
                🎟
              </motion.div>
            </motion.div>

            {/* Card: Voice */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-5 card p-6 md:p-8" style={{ background: 'var(--accent-3)', color: 'var(--on-ink)' }}>
              <div className="text-[10px] mono opacity-80 mb-2 tracking-widest">VOICE</div>
              <h3 className="display text-2xl md:text-3xl font-bold mb-3">Vote where you scroll.</h3>
              <p className="opacity-80 text-sm mb-5">Elections, polls and consultations — all in the feed, all counted.</p>
              <div className="space-y-2">
                {[{ l: 'Yes, 24/7 library', v: 68 }, { l: 'Status quo', v: 32 }].map((r) => (
                  <div key={r.l} className="relative h-7 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.18)' }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${r.v}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute inset-y-0 left-0" style={{ background: 'rgba(255,255,255,0.35)' }} />
                    <div className="absolute inset-0 flex items-center justify-between px-3 text-[11px] font-semibold"><span>{r.l}</span><span>{r.v}%</span></div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card: Rewards */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: 0.15 }}
              className="col-span-6 md:col-span-4 card p-6 relative overflow-hidden" style={{ background: 'var(--accent-2)' }}>
              <div className="tag mb-2">POINTS</div>
              <div className="display text-4xl md:text-5xl font-bold">1,240</div>
              <div className="text-xs mt-1 mono text-ink/60">🔥 12-day streak</div>
              <div className="mt-4 h-2 rounded-full bg-ink/10 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '68%' }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full bg-ink" />
              </div>
            </motion.div>

            {/* Card: Wellbeing */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: 0.2 }}
              className="col-span-6 md:col-span-3 card p-5 flex flex-col justify-between">
              <div>
                <div className="tag mb-2">WELLBEING</div>
                <div className="text-sm font-semibold leading-tight">Counsellor drop-ins, booked in seconds.</div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                <div className="w-2 h-2 rounded-full bg-accent-4 animate-pulseDot" />
                <span className="text-[10px] mono text-mute">8 slots today</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===========================================================
          FOR SUs — Dashboard
          =========================================================== */}
      <section id="unions" className="relative py-24 md:py-36 bg-ink text-on-ink overflow-hidden">
        <div aria-hidden className="absolute inset-0 ink-glow opacity-80" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="pill mb-6" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--on-ink-hair)', color: 'var(--on-ink)' }}>
                <span className="pill-dot" /> For Students' Unions
              </div>
              <h2 className="display-black text-[10vw] sm:text-[7vw] md:text-[5.6vw] lg:text-[4.6vw] xl:text-[4.2rem] leading-[0.95]">
                Run your SU from{' '}
                <span className="text-gradient-accent">one tab.</span>
              </h2>
              <p className="mt-6 text-lg md:text-xl text-on-ink-mute leading-relaxed max-w-xl">
                Events, comms, voice, societies, insights — the operational workbench
                your team has been duct-taping together.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { k: 'Unified events pipeline', v: 'From draft → ticket → check-in → report, in one place.' },
                  { k: 'Reach students where they are', v: 'Push, feed, email, web — composed once, delivered everywhere.' },
                  { k: 'Insights that settle debates', v: 'Term-over-term engagement by demographic, society, campus.' },
                  { k: 'Role-safe, audit-ready', v: 'Permissions, version history, SSO for staff.' },
                ].map((r) => (
                  <div key={r.k} className="flex items-start gap-3 pb-4 border-b" style={{ borderColor: 'var(--on-ink-hair)' }}>
                    <div className="mt-1 w-5 h-5 rounded-full grid place-items-center text-[11px]" style={{ background: 'var(--accent)' }}>✓</div>
                    <div>
                      <div className="font-semibold">{r.k}</div>
                      <div className="text-sm text-on-ink-mute mt-0.5">{r.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-hard ring-1" style={{ '--tw-ring-color': 'rgba(255,255,255,0.08)' }}>
                <div className="aspect-[16/10]">
                  <DashboardMock />
                </div>
              </div>

              {/* Floating stat chips */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                className="absolute -left-3 md:-left-8 top-10 card p-3 w-[200px] animate-float-slow shadow-card"
                style={{ background: 'var(--surface)' }}
              >
                <div className="tag text-[9px] mb-1">VS LAST TERM</div>
                <div className="display text-3xl font-bold text-accent-4">+312%</div>
                <div className="text-[10px] mono text-mute">engagement growth</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                className="absolute -right-3 md:-right-6 -bottom-6 card p-3 w-[230px] animate-float shadow-card"
                style={{ background: 'var(--accent)', color: 'var(--on-ink)' }}
              >
                <div className="text-[10px] mono opacity-80 mb-1">LIVE</div>
                <div className="text-sm font-bold mb-2">Freshers Ball · 412 tickets / 2h</div>
                <div className="flex -space-x-1.5">
                  {['#fff', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.35)'].map((c, i) => (
                    <div key={i} className="w-5 h-5 rounded-full border-2" style={{ background: c, borderColor: 'var(--accent)' }} />
                  ))}
                  <div className="w-5 h-5 rounded-full border-2 grid place-items-center text-[9px] font-bold" style={{ background: 'rgba(0,0,0,0.3)', borderColor: 'var(--accent)' }}>+</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
