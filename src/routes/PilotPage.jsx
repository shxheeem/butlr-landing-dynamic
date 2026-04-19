import React from 'react'
import PilotForm from '../components/shell/PilotForm'

export default function PilotPage() {
  return (
    <section className="pt-32 md:pt-36 pb-24 md:pb-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-5">
          <div className="tag mb-3">Pilot enquiry</div>
          <h1 className="display text-4xl md:text-5xl font-bold leading-[1.03] tracking-[-0.03em]">
            Start a conversation.
          </h1>
          <p className="mt-5 text-lg text-mute leading-relaxed">
            We're onboarding two or three more unions this year.
            A founder replies to every message, usually within a couple of days.
          </p>

          <div className="mt-8 space-y-3 text-[14px] text-mute">
            <div className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full grid place-items-center flex-shrink-0 mt-0.5"
                style={{ background: 'var(--accent-4)', color: 'var(--on-ink)' }}
              >
                <span className="text-[10px] font-bold">✓</span>
              </div>
              <div>A walkthrough of the product, not a slide deck.</div>
            </div>
            <div className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full grid place-items-center flex-shrink-0 mt-0.5"
                style={{ background: 'var(--accent-4)', color: 'var(--on-ink)' }}
              >
                <span className="text-[10px] font-bold">✓</span>
              </div>
              <div>Pilot terms written with your legal team. DPA signed before anything ships.</div>
            </div>
            <div className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full grid place-items-center flex-shrink-0 mt-0.5"
                style={{ background: 'var(--accent-4)', color: 'var(--on-ink)' }}
              >
                <span className="text-[10px] font-bold">✓</span>
              </div>
              <div>One SU officer, one uni staffer, and a founder. That's the whole kickoff.</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-3xl border border-hair bg-surface p-6 md:p-8">
            <PilotForm />
          </div>
          <div className="text-[12px] text-mute mt-4">
            Or email <a href="mailto:pilot@butlr.app" className="text-ink underline decoration-accent/60 underline-offset-4">pilot@butlr.app</a> directly.
          </div>
        </div>
      </div>
    </section>
  )
}
