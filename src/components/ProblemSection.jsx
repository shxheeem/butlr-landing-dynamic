import React from 'react'
import { motion } from 'framer-motion'

const apps = [
  { n: 'Eventbrite', c: '#F05537' },
  { n: 'WhatsApp', c: '#25D366' },
  { n: 'Instagram', c: '#E1306C' },
  { n: 'SU Portal', c: '#2E6CFF' },
  { n: 'Facebook', c: '#1877F2' },
  { n: 'Discord', c: '#5865F2' },
  { n: 'Forms', c: '#673AB7' },
  { n: 'Canvas', c: '#EE1B2E' },
  { n: 'SU Site', c: '#0F1115' },
  { n: 'Ticketmaster', c: '#026CDF' },
  { n: 'TikTok', c: '#FE2C55' },
  { n: 'Linktree', c: '#39E09B' },
  { n: 'Email', c: '#FF9500' },
  { n: 'Mailchimp', c: '#FFE01B', dark: true },
  { n: 'Notion', c: '#0F1115' },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 md:py-36 bg-ink text-on-ink overflow-hidden">
      <div aria-hidden className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(closest-side, var(--accent), transparent 70%)' }} />
      <div aria-hidden className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(closest-side, var(--accent-3), transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="pill mb-6" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'var(--on-ink-hair)', color: 'var(--on-ink)' }}>
            <span className="pill-dot" />
            The problem
          </div>

          <h2 className="display-black text-[10vw] sm:text-[7vw] md:text-[5.8vw] lg:text-[5vw] xl:text-[4.6rem] leading-[0.95]">
            <span className="block">Students juggle</span>
            <span className="block"><span className="text-gradient-accent">15 apps.</span></span>
            <span className="block">Zero connection.</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg md:text-xl text-on-ink-mute leading-relaxed">
            Events on Eventbrite. Chats on WhatsApp. Elections on a portal nobody opens.
            Engagement is fragmented — so students miss out, and SUs can't prove reach.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6">
            {[
              { k: '62%', v: "never open their SU's app" },
              { k: '3×', v: 'lower election turnout vs potential' },
              { k: '£14k+', v: 'average tooling spend / SU / yr' },
            ].map((s) => (
              <div key={s.v} className="pt-4" style={{ borderTop: '1px solid var(--on-ink-hair)' }}>
                <div className="display text-2xl md:text-3xl font-bold text-gradient-accent">{s.k}</div>
                <div className="text-xs text-on-ink-mute mt-1.5 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative h-[520px] md:h-[600px]">
          <div className="absolute inset-0 grid grid-cols-5 gap-3 md:gap-4 p-4">
            {apps.map((a, i) => {
              const rot = ((i * 37) % 21) - 10
              const yOff = ((i * 13) % 16) - 8
              return (
                <motion.div
                  key={a.n}
                  initial={{ opacity: 0, scale: 0.7, rotate: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: rot, y: yOff }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.08, rotate: 0, y: 0, zIndex: 10 }}
                  className="aspect-square rounded-2xl grid place-items-center text-center p-2 shadow-hard cursor-pointer"
                  style={{ background: a.c, color: a.dark ? '#0F1115' : '#FAFAF7' }}
                >
                  <div className="text-[10px] md:text-[11px] font-bold leading-tight">{a.n}</div>
                </motion.div>
              )
            })}
          </div>

          <div aria-hidden className="pointer-events-none absolute inset-0" style={{
            background: 'radial-gradient(closest-side, transparent 30%, var(--ink) 95%)',
          }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute left-1/2 bottom-4 -translate-x-1/2 bg-accent text-on-ink px-5 py-3 rounded-full shadow-glow flex items-center gap-3 whitespace-nowrap"
            style={{ color: 'var(--on-ink)' }}
          >
            <span className="mono text-[11px] opacity-80">REPLACED BY</span>
            <div className="flex items-center gap-2">
              <div className="brand-mark" style={{ width: 22, height: 22, fontSize: 13, borderRadius: 7, background: 'var(--on-ink)', color: 'var(--ink)' }}>b</div>
              <span className="font-bold text-sm">butlr</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
