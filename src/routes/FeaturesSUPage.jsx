import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import FeatureHero from '../components/feature/FeatureHero'
import FeatureCapability from '../components/feature/FeatureCapability'
import FeatureCTA from '../components/feature/FeatureCTA'
import BrowserCard from '../components/feature/BrowserCard'

// ============================================================
// UI snippets for SU admin surfaces.
// Each is sized like a real in-product view, shown in a BrowserCard.
// ============================================================

function SUHeroDashboard() {
  return (
    <BrowserCard label="butlr.app/su/warwick/dashboard">
      <div className="p-5 bg-paper">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[11px] text-mute">WARWICK SU · COMMITTEE VIEW</div>
            <div className="display text-xl font-bold mt-0.5">This week</div>
          </div>
          <div className="flex items-center -space-x-1.5">
            {['var(--accent)', 'var(--accent-3)', 'var(--accent-4)', 'var(--lilac)'].map((c, i) => (
              <div key={i} className="w-7 h-7 rounded-full border-2 border-surface" style={{ background: c }} />
            ))}
            <div className="w-7 h-7 rounded-full border-2 border-surface bg-surface-2 grid place-items-center text-[9px] font-semibold ml-0.5">+4</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { k: 'Events live', v: '6' },
            { k: 'RSVPs today', v: '284' },
            { k: 'Poll closing', v: 'Fri' },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-hair bg-surface p-3">
              <div className="text-[10px] text-mute">{s.k.toUpperCase()}</div>
              <div className="display text-[22px] font-bold mt-0.5 leading-none">{s.v}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-hair bg-surface">
          <div className="px-3 py-2 border-b border-hair flex items-center justify-between">
            <div className="text-[11px] font-semibold">Upcoming events</div>
            <div className="text-[10px] text-mute">4 posted</div>
          </div>
          {[
            { c: 'var(--accent)', n: 'Freshers Ball', m: 'Tonight · 8pm', r: '412' },
            { c: 'var(--accent-3)', n: 'Society fair', m: 'Wed · all day', r: '126' },
            { c: 'var(--accent-4)', n: 'Sustainability talk', m: 'Thu · 6pm', r: '58' },
          ].map((e, i, a) => (
            <div key={e.n} className={`px-3 py-2.5 flex items-center gap-3 ${i < a.length - 1 ? 'border-b border-hair' : ''}`}>
              <div className="w-7 h-7 rounded-lg" style={{ background: e.c }} />
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-semibold truncate">{e.n}</div>
                <div className="text-[10px] text-mute">{e.m}</div>
              </div>
              <div className="text-[11px] font-semibold">{e.r} rsvp</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserCard>
  )
}

function SUCommitteeAdminSnippet() {
  return (
    <BrowserCard label="butlr.app/su/events/new">
      <div className="p-5 bg-paper">
        <div className="flex items-center justify-between mb-4">
          <div className="display text-lg font-bold">Post an event</div>
          <div className="flex gap-1.5">
            <div className="px-2.5 py-1 text-[11px] font-semibold rounded-full border border-hair">Draft</div>
            <div className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-ink text-on-ink">Publish</div>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <div className="text-[10px] text-mute mb-1">TITLE</div>
            <div className="rounded-lg border border-hair bg-surface px-3 py-2 text-[13px] font-semibold">
              Golden hour walk
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="text-[10px] text-mute mb-1">WHEN</div>
              <div className="rounded-lg border border-hair bg-surface px-3 py-2 text-[12px]">Wed 6 Nov · 6:00 pm</div>
            </div>
            <div>
              <div className="text-[10px] text-mute mb-1">WHERE</div>
              <div className="rounded-lg border border-hair bg-surface px-3 py-2 text-[12px]">Student green</div>
            </div>
          </div>
          <div>
            <div className="text-[10px] text-mute mb-1">WHO SHOULD SEE THIS</div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { n: 'Photography Soc members', sel: true },
                { n: 'Interested in: outdoors', sel: true },
                { n: 'First years', sel: false },
                { n: 'Everyone', sel: false },
              ].map((c) => (
                <div
                  key={c.n}
                  className={`px-2.5 py-1.5 rounded-full text-[11px] font-semibold border ${
                    c.sel ? 'bg-ink text-on-ink border-ink' : 'bg-surface border-hair text-mute'
                  }`}
                >
                  {c.sel && <span className="mr-1">✓</span>}
                  {c.n}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-hair mt-3">
            <div className="text-[11px] text-mute">Estimated reach · ~180 students</div>
            <div className="text-[11px] text-mute">Auto-posts to: Photography Soc page</div>
          </div>
        </div>
      </div>
    </BrowserCard>
  )
}

function SUReachSnippet() {
  return (
    <div className="w-full max-w-[440px] space-y-3">
      {/* Comparison card */}
      <div className="rounded-2xl border border-hair bg-surface p-4">
        <div className="text-[11px] text-mute mb-2">Email blast · last term</div>
        <div className="relative h-8 rounded-full bg-surface-2 overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-ink/25" style={{ width: '12%' }} />
          <div className="absolute inset-0 flex items-center justify-between px-3 text-[11px] font-semibold">
            <span>12% open rate</span>
            <span className="text-mute">1,340 of 11,200</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border bg-surface p-4" style={{ borderColor: 'var(--accent-3)' }}>
        <div className="text-[11px] mb-2" style={{ color: 'var(--accent-3)' }}>On Butlr · this week</div>
        <div className="relative h-8 rounded-full bg-surface-2 overflow-hidden">
          <div className="absolute inset-y-0 left-0" style={{ width: '73%', background: 'var(--accent-3)', opacity: 0.35 }} />
          <div className="absolute inset-0 flex items-center justify-between px-3 text-[11px] font-semibold">
            <span>73% saw it</span>
            <span className="text-mute">of students who care</span>
          </div>
        </div>
      </div>
      <div className="text-[12px] text-mute mt-2 leading-relaxed">
        Students are targeted by interest, not spammed.
        If they never opt into "sustainability", they don't get your sustainability post.
      </div>
    </div>
  )
}

function SUEngagementSnippet() {
  const hours = [6, 9, 13, 18, 24, 32, 28, 22]
  const max = Math.max(...hours)
  return (
    <BrowserCard label="butlr.app/su/events/freshers-ball" className="max-w-[500px]">
      <div className="p-5 bg-paper">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-[11px] text-mute">FRESHERS BALL · LIVE</div>
            <div className="display text-lg font-bold mt-0.5">Who's coming</div>
          </div>
          <div className="text-right">
            <div className="display text-2xl font-bold leading-none">412</div>
            <div className="text-[10px] text-mute mt-0.5">+38 today</div>
          </div>
        </div>
        {/* Little line chart */}
        <div className="flex items-end gap-1.5 h-20 mt-4">
          {hours.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md"
              style={{
                height: `${(h / max) * 100}%`,
                background: i === hours.length - 1 ? 'var(--accent)' : 'var(--hair)',
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-[10px] text-mute">Mon</div>
          <div className="text-[10px] text-mute">Now</div>
        </div>
        <div className="mt-4 pt-3 border-t border-hair grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-[10px] text-mute">FIRST YEARS</div>
            <div className="text-[14px] font-bold mt-0.5">62%</div>
          </div>
          <div>
            <div className="text-[10px] text-mute">REPEAT RSVPs</div>
            <div className="text-[14px] font-bold mt-0.5">41%</div>
          </div>
          <div>
            <div className="text-[10px] text-mute">FROM SOCIETY</div>
            <div className="text-[14px] font-bold mt-0.5">Photography</div>
          </div>
        </div>
      </div>
    </BrowserCard>
  )
}

function SUHandoverSnippet() {
  return (
    <BrowserCard label="butlr.app/su/photography/handover" className="max-w-[500px]">
      <div className="p-5 bg-paper">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[11px] text-mute">PHOTOGRAPHY SOC</div>
            <div className="display text-lg font-bold mt-0.5">Handover · 2026 committee</div>
          </div>
          <div className="px-2.5 py-1 text-[11px] font-semibold rounded-full" style={{ background: 'var(--accent-2)', color: 'var(--ink)' }}>
            3 steps left
          </div>
        </div>
        <div className="space-y-2">
          {[
            { d: true,  t: 'Transfer ownership to Priya K.', s: 'Done · 12 Aug' },
            { d: true,  t: 'Archive last year\u2019s events', s: 'Done · 14 Aug' },
            { d: false, t: 'Introduce new treasurer', s: 'In progress' },
            { d: false, t: 'Review carried-over budget', s: '£842 carried · awaiting review' },
            { d: false, t: 'Share society playbook with new chair', s: 'One click' },
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl border border-hair bg-surface">
              <div
                className={`w-5 h-5 rounded-full grid place-items-center flex-shrink-0 mt-0.5 text-[10px] font-bold ${
                  step.d ? 'text-on-ink' : 'border border-hair text-mute'
                }`}
                style={{ background: step.d ? 'var(--accent-4)' : 'var(--surface-2)' }}
              >
                {step.d ? '✓' : ''}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[12px] font-semibold ${step.d ? 'line-through text-mute' : ''}`}>{step.t}</div>
                <div className="text-[10px] text-mute mt-0.5">{step.s}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-[11px] text-mute">
          Every society, every year. Nothing lives in a committee email chain.
        </div>
      </div>
    </BrowserCard>
  )
}

// ============================================================
// How it fits. A typical week for an SU committee.
// ============================================================

function HowItFits() {
  const prefersReduced = useReducedMotion()
  const items = [
    { d: 'Mon', t: 'Plan the week.', s: 'Draft events, queue up a poll, see what\u2019s already live.' },
    { d: 'Tue', t: 'A society posts. Students see it.', s: 'No WhatsApp chase. No missed email.' },
    { d: 'Thu', t: 'See who\u2019s coming, and from where.', s: 'First years? Repeat RSVPs? From which society?' },
    { d: 'Sun', t: 'End the week with numbers to share.', s: 'A summary ready for the exec.' },
  ]

  return (
    <section className="py-24 md:py-32 bg-surface-2 relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-12">
          <div className="tag mb-3">How it fits</div>
          <h2 className="display text-4xl md:text-5xl font-bold leading-[1.02] tracking-[-0.03em]">
            A week in the committee.
          </h2>
          <p className="mt-4 text-mute text-lg leading-relaxed">
            Committee time is scarce. Butlr keeps the common jobs quick, so the rest of the week can go elsewhere.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.d}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-hair bg-surface p-5"
            >
              <div className="text-[11px] text-mute mb-2 tracking-wider">{it.d}</div>
              <div className="display text-lg font-bold leading-tight">{it.t}</div>
              <div className="mt-2 text-[14px] text-mute leading-relaxed">{it.s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// Page
// ============================================================

export default function FeaturesSUPage() {
  const { onContact } = useOutletContext() || {}

  return (
    <>
      <FeatureHero
        eyebrow="For student unions"
        headline="A workspace for the union."
        sub="One place for events, polls, comms, engagement, and the handover in August."
        accent="var(--accent-3)"
        media={<SUHeroDashboard />}
        onContact={onContact}
      />

      <section id="capabilities" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8 space-y-24 md:space-y-32">
          <FeatureCapability
            index="01 · Committee admin"
            title="Committee admin in one place."
            body="Post an event, target the right members, run a poll, manage your society pages. All in one place, not seven browser tabs and a WhatsApp group."
            media={<SUCommitteeAdminSnippet />}
          />
          <FeatureCapability
            flip
            index="02 · Reach"
            title="Reach by interest, not email blast."
            body="Students opt in to the things they care about. Posts arrive with the people who want them. Relevance becomes the metric, not open rates."
            media={<SUReachSnippet />}
          />
          <FeatureCapability
            index="03 · Engagement"
            title="See what's landing, while it's landing."
            body="Live RSVPs, live polls, live attendance. Something you can act on, not a PDF report in July."
            media={<SUEngagementSnippet />}
          />
          <FeatureCapability
            flip
            index="04 · Handover"
            title="A handover that carries over."
            body="When the committee changes, event history, budgets, templates and members stay. New chair, same playbook."
            media={<SUHandoverSnippet />}
          />
        </div>
      </section>

      <HowItFits />

      <FeatureCTA
        onContact={onContact}
        body="Twenty minutes together. We walk through the committee view, you tell us where it'd help first."
      />
    </>
  )
}
