import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import FeatureHero from '../components/feature/FeatureHero'
import FeatureCapability from '../components/feature/FeatureCapability'
import FeatureCTA from '../components/feature/FeatureCTA'
import BrowserCard from '../components/feature/BrowserCard'

// ============================================================
// UI snippets for university-facing surfaces.
// ============================================================

function UniHeroAggregate() {
  return (
    <BrowserCard label="butlr.app/uni/your-uni/engagement">
      <div className="p-5 bg-paper">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[11px] text-mute">YOUR UNIVERSITY · ENGAGEMENT</div>
            <div className="display text-xl font-bold mt-0.5">Autumn term</div>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold"
            style={{ background: 'var(--surface-2)', color: 'var(--ink)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-4)' }} />
            This week
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { k: 'Active students', v: '14,820', s: '76% of cohort' },
            { k: 'Events attended', v: '1,284', s: 'this week' },
            { k: 'Wellbeing bookings', v: '312', s: 'this week' },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-hair bg-surface p-3">
              <div className="text-[10px] text-mute">{s.k.toUpperCase()}</div>
              <div className="display text-xl font-bold mt-0.5 leading-none">{s.v}</div>
              <div className="text-[10px] text-mute mt-1">{s.s}</div>
            </div>
          ))}
        </div>

        {/* Simple area-ish chart */}
        <div className="rounded-xl border border-hair bg-surface p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[11px] font-semibold">Activity by week</div>
            <div className="text-[10px] text-mute">12 weeks</div>
          </div>
          <svg viewBox="0 0 220 60" className="w-full h-16">
            <defs>
              <linearGradient id="uniChartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--accent-4)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--accent-4)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,55 L0,40 L20,35 L40,38 L60,28 L80,30 L100,22 L120,20 L140,14 L160,18 L180,12 L200,15 L220,8 L220,55 Z"
              fill="url(#uniChartFill)"
            />
            <path
              d="M0,40 L20,35 L40,38 L60,28 L80,30 L100,22 L120,20 L140,14 L160,18 L180,12 L200,15 L220,8"
              fill="none"
              stroke="var(--accent-4)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex items-center justify-between mt-1">
            <div className="text-[10px] text-mute">Week 1</div>
            <div className="text-[10px] text-mute">Now</div>
          </div>
        </div>
      </div>
    </BrowserCard>
  )
}

function UniAggregateSnippet() {
  const cohorts = [
    { n: 'Business', v: 82, c: 'var(--accent-3)' },
    { n: 'Engineering', v: 74, c: 'var(--accent-4)' },
    { n: 'Life sciences', v: 71, c: 'var(--lilac)' },
    { n: 'Health professions', v: 66, c: 'var(--accent)' },
    { n: 'Humanities', v: 58, c: 'var(--accent-2)' },
  ]
  return (
    <BrowserCard label="butlr.app/uni/your-uni/engagement/cohorts" className="max-w-[500px]">
      <div className="p-5 bg-paper">
        <div className="flex items-center justify-between mb-3">
          <div className="display text-lg font-bold">Engagement, by cohort</div>
          <div className="text-[10px] text-mute">% of cohort active · 7d</div>
        </div>
        <div className="space-y-2.5">
          {cohorts.map((c) => (
            <div key={c.n}>
              <div className="flex items-center justify-between text-[12px] mb-1">
                <span className="font-semibold">{c.n}</span>
                <span className="text-mute">{c.v}%</span>
              </div>
              <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${c.v}%`, background: c.c, opacity: 0.6 }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-hair text-[11px] text-mute leading-relaxed">
          Aggregates with a cohort threshold. Numbers, not names.
        </div>
      </div>
    </BrowserCard>
  )
}

function UniWellbeingSnippet() {
  return (
    <BrowserCard label="butlr.app/uni/your-uni/wellbeing" className="max-w-[500px]">
      <div className="p-5 bg-paper">
        <div className="flex items-center justify-between mb-4">
          <div className="display text-lg font-bold">Wellbeing uptake</div>
          <div className="text-[10px] text-mute">This term</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl border border-hair bg-surface p-3">
            <div className="text-[10px] text-mute">BOOKINGS</div>
            <div className="display text-2xl font-bold mt-0.5 leading-none">1,248</div>
            <div className="text-[10px] mt-1.5" style={{ color: 'var(--accent-4)' }}>
              ↑ 23% vs last year
            </div>
          </div>
          <div className="rounded-xl border border-hair bg-surface p-3">
            <div className="text-[10px] text-mute">UNIQUE STUDENTS</div>
            <div className="display text-2xl font-bold mt-0.5 leading-none">732</div>
            <div className="text-[10px] mt-1.5 text-mute">~3.8% of cohort</div>
          </div>
        </div>

        <div className="rounded-xl border border-hair bg-surface">
          <div className="px-3 py-2 border-b border-hair text-[11px] font-semibold">How students got there</div>
          {[
            { k: 'From the home feed', v: 48 },
            { k: 'From a society post', v: 22 },
            { k: 'Direct search', v: 18 },
            { k: 'Signposted by SU', v: 12 },
          ].map((r, i, a) => (
            <div key={r.k} className={`px-3 py-2 flex items-center gap-3 ${i < a.length - 1 ? 'border-b border-hair' : ''}`}>
              <div className="flex-1 min-w-0 text-[12px]">{r.k}</div>
              <div className="flex-[2] h-2 rounded-full bg-surface-2 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${r.v * 2}%`, background: 'var(--accent-4)', opacity: 0.5 }} />
              </div>
              <div className="text-[11px] font-semibold w-8 text-right">{r.v}%</div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-[11px] text-mute leading-relaxed">
          Booking content stays with the wellbeing team.
        </div>
      </div>
    </BrowserCard>
  )
}

function UniSUSupportSnippet() {
  return (
    <div className="w-full max-w-[440px]">
      <div className="relative rounded-3xl border border-hair bg-surface p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-ink text-on-ink grid place-items-center font-bold text-sm">U</div>
          <div className="flex-1 text-[13px] font-semibold">University</div>
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" aria-hidden>
            <path d="M1 8 H23 M17 3 L23 8 L17 13" stroke="var(--mute)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex-1 text-[13px] font-semibold text-right">SU</div>
          <div className="w-10 h-10 rounded-xl grid place-items-center font-bold text-sm" style={{ background: 'var(--accent-3)', color: 'var(--on-ink)' }}>S</div>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-2">
            <div className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold text-on-ink flex-shrink-0" style={{ background: 'var(--accent-4)' }}>✓</div>
            <div className="text-[12.5px] leading-snug">
              <span className="font-semibold">SU owns the student relationship.</span> Posts, polls, society admin all sit with the SU.
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-2">
            <div className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold text-on-ink flex-shrink-0" style={{ background: 'var(--accent-4)' }}>✓</div>
            <div className="text-[12.5px] leading-snug">
              <span className="font-semibold">University sees aggregate summaries.</span> Not what any one student did.
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-2">
            <div className="w-6 h-6 rounded-full grid place-items-center text-[11px] font-bold text-on-ink flex-shrink-0" style={{ background: 'var(--accent-4)' }}>✓</div>
            <div className="text-[12.5px] leading-snug">
              <span className="font-semibold">Wellbeing team has its own view.</span> Direct booking data, never shared out.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function UniDataHandlingSnippet() {
  const items = [
    { k: 'Hosting', v: 'UK · AWS eu-west-2' },
    { k: 'Data controller', v: 'Your institution' },
    { k: 'DPA', v: 'Signed before pilot' },
    { k: 'Consent', v: 'Opt-in at sign-up · revocable' },
    { k: 'Export', v: 'On request · 7 days' },
    { k: 'Retention', v: 'Configurable per data class' },
  ]
  return (
    <BrowserCard label="butlr.app/uni/your-uni/data-handling" className="max-w-[520px]">
      <div className="p-5 bg-paper">
        <div className="flex items-center justify-between mb-4">
          <div className="display text-lg font-bold">The boring bits</div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold" style={{ background: 'var(--surface-2)', color: 'var(--ink)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent-4)' }} />
            Pilot-ready
          </div>
        </div>

        <div className="rounded-xl border border-hair bg-surface divide-y divide-hair">
          {items.map((i) => (
            <div key={i.k} className="px-3 py-2.5 flex items-center justify-between gap-3">
              <div className="text-[11px] text-mute tracking-wider">{i.k.toUpperCase()}</div>
              <div className="text-[12px] font-semibold text-right">{i.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 text-[11px] text-mute leading-relaxed">
          We write pilot agreements alongside your legal team, not around them.
        </div>
      </div>
    </BrowserCard>
  )
}

// ============================================================
// How it fits. For a wellbeing or engagement lead.
// ============================================================

function HowItFits() {
  const prefersReduced = useReducedMotion()
  const items = [
    { t: 'You want a read on how the term is going', s: 'Open the engagement view. Cohort trends, weekly activity, no emails to chase.' },
    { t: 'You want to know what services are getting used', s: 'Uptake by service, by route-in. Numbers you can take to trustees without a spreadsheet rebuild.' },
    { t: 'You want to stay alongside the SU', s: 'The SU runs with students. You see the summary and weigh in where it counts.' },
    { t: "You want nothing to land on legal's desk unannounced", s: 'DPA and scope agreed before pilot, not after.' },
  ]

  return (
    <section className="py-24 md:py-32 bg-surface-2 relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-12">
          <div className="tag mb-3">How it fits</div>
          <h2 className="display text-4xl md:text-5xl font-bold leading-[1.02] tracking-[-0.03em]">
            For wellbeing, engagement, retention.
          </h2>
          <p className="mt-4 text-mute text-lg leading-relaxed">
            A straightforward view for the teams that need one. Aggregates where it matters, direct booking data where it doesn't leave the room.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-hair bg-surface p-6"
            >
              <div className="display text-xl font-bold leading-tight">{it.t}</div>
              <div className="mt-2 text-[15px] text-mute leading-relaxed">{it.s}</div>
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

export default function FeaturesUniversitiesPage() {
  const { onContact } = useOutletContext() || {}

  return (
    <>
      <FeatureHero
        eyebrow="For universities"
        headline="See how campus life is going."
        sub="A picture of what students are engaging with, what services are getting used, and how the SU is doing. Laid out so your teams can actually use it."
        accent="var(--accent-4)"
        media={<UniHeroAggregate />}
        onContact={onContact}
      />

      <section id="capabilities" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 md:px-8 space-y-24 md:space-y-32">
          <FeatureCapability
            index="01 · Engagement"
            title="See who's showing up."
            body="Where engagement is landing this term, and where it's slipping. By cohort, by week, by initiative. The kind of thing that usually lives in a spreadsheet nobody updates."
            media={<UniAggregateSnippet />}
          />
          <FeatureCapability
            flip
            index="02 · Wellbeing"
            title="See what's getting used."
            body="Which services students are booking. How they got there. What got them to act. Useful when you're writing a report, handier when you're deciding what to fund next."
            media={<UniWellbeingSnippet />}
          />
          <FeatureCapability
            index="03 · Alongside the SU"
            title="Alongside the SU, not over it."
            body="The SU owns the student-facing side. You see summaries of how the term's going. Each team gets their own view, so nobody's reading someone else's inbox."
            media={<UniSUSupportSnippet />}
          />
          <FeatureCapability
            flip
            index="04 · The boring bits"
            title="The bits your legal team will ask about."
            body="UK-hosted on AWS eu-west-2, with your institution as the data controller and a DPA signed before the pilot begins. Reporting stays aggregate with cohort thresholds applied so small groups can't be re-identified, and the pilot agreement is drafted alongside your legal team rather than around them."
            media={<UniDataHandlingSnippet />}
          />
        </div>
      </section>

      <HowItFits />

      <FeatureCTA
        onContact={onContact}
        body="Twenty minutes with a founder. Bring anything your engagement, wellbeing, or legal team want to put on the table."
      />
    </>
  )
}
