import React from 'react'

export default function MetricsStrip() {
  const items = [
    { k: '18.8M+', v: 'UK Students' },
    { k: 'One', v: 'Unified Platform' },
    { k: 'AI-ready', v: 'Insights & automation' },
  ]
  return (
    <section className="py-10 bg-black/70">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-6 text-center">
        {items.map((it) => (
          <div key={it.v} className="p-4 rounded-xl border border-gray-900 bg-black">
            <div className="text-2xl font-bold text-white">{it.k}</div>
            <div className="text-gray-400 text-sm mt-1">{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
