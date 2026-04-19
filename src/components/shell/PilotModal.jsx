import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PilotForm from './PilotForm'

export default function PilotModal({ open, onClose }) {
  const dialogRef = useRef(null)

  // ESC to close, body scroll lock
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="pilot-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-paper rounded-3xl border border-hair shadow-card overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full hover:bg-surface-2 transition-colors z-10"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                <path d="M2 2 L12 12 M12 2 L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div className="p-8 md:p-10">
              <div className="tag mb-3">Pilot enquiry</div>
              <h2 id="pilot-modal-title" className="display text-2xl md:text-3xl font-bold leading-tight">
                Tell us a bit about you.
              </h2>
              <p className="text-mute mt-2 text-sm">
                We're onboarding two or three more unions this year. A founder reads every message.
              </p>
              <div className="mt-6">
                <PilotForm compact />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
