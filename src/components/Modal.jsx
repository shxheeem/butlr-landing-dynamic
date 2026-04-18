import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ open, onClose, endpoint = '/api/lead' }) {
  const [form, setForm] = useState({ name: '', email: '', uni: '', role: '', message: '' })
  const [state, setState] = useState('idle')

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    setState('sending')
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setState('sent')
      setTimeout(() => {
        onClose?.()
        setState('idle')
        setForm({ name: '', email: '', uni: '', role: '', message: '' })
      }, 1400)
    } catch {
      setState('error')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg card shadow-hard overflow-hidden"
          >
            <div className="relative px-7 py-7" style={{ background: 'var(--ink)', color: 'var(--on-ink)' }}>
              <button
                aria-label="Close"
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full hover:bg-white/10 transition-colors"
                style={{ color: 'var(--on-ink)' }}
              >
                <span className="text-xl leading-none">×</span>
              </button>
              <div className="pill mb-3" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'var(--on-ink-hair)', color: 'var(--on-ink)' }}>
                <span className="pill-dot" /> Pilot enquiry
              </div>
              <h3 className="display text-3xl font-bold">Let's talk about your SU.</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--on-ink-mute)' }}>
                Tell us a bit about your Union — we'll reply within one working day.
              </p>
            </div>

            <form onSubmit={submit} className="p-7 grid gap-3.5">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Full name" value={form.name} onChange={update('name')} required />
                <Field label="Work email" type="email" value={form.email} onChange={update('email')} required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="University / SU" value={form.uni} onChange={update('uni')} required />
                <Field label="Your role" value={form.role} onChange={update('role')} />
              </div>
              <label className="block">
                <div className="tag mb-1.5 text-[10px]">What can we help with?</div>
                <textarea
                  value={form.message}
                  onChange={update('message')}
                  rows={3}
                  className="w-full rounded-xl border border-hair bg-paper px-3 py-2.5 text-ink placeholder-mute focus:outline-none focus:border-accent"
                  placeholder="Curious about a pilot? Want a specific pillar demo?"
                />
              </label>

              <button
                type="submit"
                disabled={state === 'sending' || state === 'sent'}
                className="btn btn-primary justify-center mt-2 disabled:opacity-60"
              >
                {state === 'sent' ? "Thanks — we'll be in touch ✓" : state === 'sending' ? 'Sending…' : 'Request pilot'}
                {state === 'idle' && <span aria-hidden>→</span>}
              </button>
              {state === 'error' && (
                <p className="text-xs text-red-600 text-center">Couldn't send — try emailing hello@butlr.xyz.</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({ label, type = 'text', value, onChange, required = false }) {
  return (
    <label className="block">
      <div className="tag mb-1.5 text-[10px]">{label}</div>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-hair bg-paper px-3 py-2.5 text-ink placeholder-mute focus:outline-none focus:border-accent"
      />
    </label>
  )
}
