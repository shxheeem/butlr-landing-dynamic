import React, { useRef, useState } from 'react'

const ROLES = [
  'Student union officer / exec',
  'Student union staff',
  'University staff',
  'Student',
  'Other',
]

const FALLBACK_EMAIL = 'pilot@butlr.xyz'

/**
 * Shared pilot enquiry form. Used inside the PilotModal and on the /pilot page.
 * Stays dumb: owns its own submission state, calls `onSent` when done.
 */
export default function PilotForm({ compact = false, onSent }) {
  const [state, setState] = useState('idle') // idle | submitting | sent | error
  const firstFieldRef = useRef(null)

  const submit = async (e) => {
    e.preventDefault()
    setState('submitting')
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setState('sent')
      onSent?.()
    } catch (err) {
      console.error('Pilot form submission failed:', err)
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className={compact ? 'py-2' : 'py-8'}>
        <div className="tag mb-3">Thanks</div>
        <h3 className={`display font-bold ${compact ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
          We'll be in touch.
        </h3>
        <p className="text-mute leading-relaxed mt-3">
          Expect a reply within a couple of days, usually from a founder directly. If it's time-sensitive, email{' '}
          <a href={`mailto:${FALLBACK_EMAIL}`} className="text-ink underline decoration-accent/60 underline-offset-4">{FALLBACK_EMAIL}</a>.
        </p>
      </div>
    )
  }

  const submitting = state === 'submitting'

  return (
    <form onSubmit={submit}>
      <div className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'} gap-3`}>
        <label className="flex flex-col gap-1">
          <span className="tag">Name</span>
          <input
            ref={firstFieldRef}
            name="name"
            required
            className="px-3 py-2.5 rounded-xl border border-hair bg-surface focus:outline-none focus:border-ink"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="tag">Email</span>
          <input
            name="email"
            type="email"
            required
            className="px-3 py-2.5 rounded-xl border border-hair bg-surface focus:outline-none focus:border-ink"
          />
        </label>
        <label className={`flex flex-col gap-1 ${compact ? 'sm:col-span-2' : 'md:col-span-2'}`}>
          <span className="tag">Institution</span>
          <input
            name="institution"
            required
            placeholder="e.g. University of ..."
            className="px-3 py-2.5 rounded-xl border border-hair bg-surface focus:outline-none focus:border-ink"
          />
        </label>
        <label className={`flex flex-col gap-1 ${compact ? 'sm:col-span-2' : 'md:col-span-2'}`}>
          <span className="tag">Role</span>
          <select
            name="role"
            required
            className="px-3 py-2.5 rounded-xl border border-hair bg-surface focus:outline-none focus:border-ink"
            defaultValue=""
          >
            <option value="" disabled>Choose one</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </label>
        <label className={`flex flex-col gap-1 ${compact ? 'sm:col-span-2' : 'md:col-span-2'}`}>
          <span className="tag">Anything else (optional)</span>
          <textarea
            name="message"
            rows={4}
            className="px-3 py-2.5 rounded-xl border border-hair bg-surface focus:outline-none focus:border-ink resize-none"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="submit" disabled={submitting} className="btn btn-primary disabled:opacity-60">
          {submitting ? 'Sending…' : 'Send enquiry'} <span aria-hidden>→</span>
        </button>
        <div className="text-[12px] text-mute">A founder will reply.</div>
      </div>

      {state === 'error' && (
        <div
          role="alert"
          className="mt-4 rounded-xl border border-hair bg-surface-2 px-4 py-3 text-[13px] leading-relaxed"
        >
          Something went wrong on our end. Please try again in a moment, or email{' '}
          <a href={`mailto:${FALLBACK_EMAIL}`} className="text-ink underline decoration-accent/60 underline-offset-4">
            {FALLBACK_EMAIL}
          </a>{' '}
          directly and we'll pick it up there.
        </div>
      )}
    </form>
  )
}
