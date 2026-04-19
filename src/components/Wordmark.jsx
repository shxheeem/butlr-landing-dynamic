import React from 'react'

export default function Wordmark({ className = '', size = 'md', tone = 'ink' }) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  }
  const wordSize = sizes[size] || sizes.md
  const wordTone = tone === 'on-ink' ? 'text-on-ink' : 'text-ink'

  return (
    <span className={`inline-flex items-center select-none ${className}`} aria-label="butlr">
      <span
        className={`brand-wordmark ${wordTone} ${wordSize}`}
        style={{ color: tone === 'on-ink' ? 'var(--on-ink)' : 'var(--ink)' }}
      >
        butlr
      </span>
    </span>
  )
}
