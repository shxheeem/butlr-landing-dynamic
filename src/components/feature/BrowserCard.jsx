import React from 'react'

/**
 * Admin/web UI frame for product screenshots. Small window chrome, rounded,
 * hairline border. Used on feature pages for SU and University views.
 */
export default function BrowserCard({ children, label, className = '', style }) {
  return (
    <div
      className={`w-full max-w-[560px] rounded-2xl border border-hair bg-surface shadow-card overflow-hidden ${className}`}
      style={style}
    >
      <div className="h-8 px-3 flex items-center gap-2 border-b border-hair bg-surface-2">
        <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
        <div className="flex-1 flex justify-center">
          {label && (
            <div className="text-[11px] text-mute truncate max-w-[240px]">
              {label}
            </div>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}
