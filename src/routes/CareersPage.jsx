import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

const kinds = [
  "Someone who's been on a committee and knows how it really runs.",
  'Someone who can move between product and field. A design meeting in the morning, a campus visit in the afternoon.',
  'Someone who cares about how things look and read.',
  'Someone comfortable cutting scope so the things we do ship actually work.',
]

export default function CareersPage() {
  const { onContact } = useOutletContext() || {}
  const prefersReduced = useReducedMotion()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="tag mb-3">Careers</div>
          <h1 className="display text-5xl md:text-7xl font-bold leading-[0.98] tracking-[-0.035em]">
            Want to join us?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-mute max-w-2xl leading-relaxed">
            This is an honest description of what we expect.
          </p>
        </div>
      </section>

      {/* What we're looking for */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <div className="tag mb-3">What we're looking for</div>
            <h2 className="display text-3xl md:text-4xl font-bold leading-[1.05] tracking-[-0.025em]">
              Less a CV checklist. More a shape of person.
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4">
              {kinds.map((k, i) => (
                <motion.li
                  key={i}
                  initial={prefersReduced ? false : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-3 pb-4 border-b border-hair last:border-0"
                >
                  <div className="w-7 h-7 rounded-full border border-hair grid place-items-center text-[11px] font-bold text-mute mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-lg leading-relaxed">{k}</div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="tag mb-6">Open roles</div>
          <div className="rounded-[20px] border border-hair bg-surface p-8 md:p-10 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-40"
              style={{ background: 'var(--accent)' }}
            />
            <div className="relative z-10">
              <div className="display text-3xl md:text-4xl font-bold leading-tight tracking-[-0.025em]">
                None open right now.
              </div>
              <p className="mt-4 text-mute text-[17px] leading-relaxed max-w-2xl">
                We'll post roles here when they're real. When we do hire next, it's likely to be{' '}
                <span className="text-ink font-semibold">a product-leaning designer</span>
                {' '}or{' '}
                <span className="text-ink font-semibold">a full-stack engineer</span>
                {' '}who doesn't mind sitting in on a committee meeting.
                If that's roughly you, send a note anyway. We keep track.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="mailto:careers@butlr.xyz?subject=Keeping%20in%20touch" className="btn btn-primary">
                  Send a note <span aria-hidden>→</span>
                </a>
                <button onClick={onContact} className="btn btn-ghost">Or ask about the pilot</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next 12 months */}
      <section className="py-16 md:py-24 bg-surface-2">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="tag mb-4">The next twelve months</div>
          <p className="display text-2xl md:text-[28px] font-semibold leading-[1.35] tracking-[-0.015em] max-w-3xl">
            Finish the current pilot well, add two or three more unions,
            keep the team small, and be the kind of company a student recommends to their friends.
          </p>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <div className="tag mb-3">How to apply</div>
              <h2 className="display text-3xl md:text-4xl font-bold leading-[1.05] tracking-[-0.025em]">
                Short, specific, yours.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-[17px] leading-relaxed">
              <p>
                Write to <a href="mailto:careers@butlr.xyz" className="text-ink underline decoration-accent/60 underline-offset-4">careers@butlr.xyz</a>.
                A short note on what you've been working on, why Butlr in particular, and one thing on the site you'd do differently usually tells us what we need to know.
              </p>
              <p className="text-mute">
                A link to something you've made is more useful than a CV, though either works.
              </p>
              <p className="text-mute">
                Every email gets read, and every email gets a reply.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
