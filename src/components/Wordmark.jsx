import React from 'react'

export default function Wordmark({ className = '', size = 'md', withWord = true, tone = 'ink' }) {
  const sizes = {
    sm: { mark: 'brand-mark', word: 'text-lg' },
    md: { mark: 'brand-mark', word: 'text-xl' },
    lg: { mark: 'brand-mark brand-mark--lg', word: 'text-3xl' },
  }
  const s = sizes[size] || sizes.md
  const wordTone = tone === 'on-ink' ? 'text-on-ink' : 'text-ink'

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`} aria-label="butlr">
      <span className={s.mark} style={tone === 'on-ink' ? { background: 'var(--on-ink)', color: 'var(--ink)' } : undefined}>
        b
      </span>
      {withWord && (
        <span className={`brand-wordmark ${wordTone} ${s.word}`} style={{ color: tone === 'on-ink' ? 'var(--on-ink)' : 'var(--ink)' }}>
          butlr
        </span>
      )}
    </span>
  )
}
