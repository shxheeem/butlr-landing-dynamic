import React from 'react'

export default function EngageMock() {
  return (
    <div className="h-full w-full bg-paper text-ink flex flex-col pt-10">
      <div className="px-5 pt-3 pb-3">
        <div className="tag text-[9px]">student voice</div>
        <div className="display text-[20px] font-bold mt-0.5">Your say</div>
      </div>

      <div className="px-4 pt-1 flex-1 space-y-3 overflow-hidden">
        <div className="rounded-2xl p-3" style={{ background: 'var(--accent-3)', color: 'var(--on-ink)' }}>
          <div className="text-[10px] mono opacity-80 mb-1">ELECTIONS · OPEN</div>
          <div className="text-[13px] font-bold mb-2">SU President 2026</div>
          <div className="grid grid-cols-3 gap-1.5">
            {['Ada','Ben','Priya'].map((n, i) => (
              <div key={n} className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.14)' }}>
                <div className="text-[11px] font-semibold">{n}</div>
                <div className="text-[9px] mono opacity-70 mt-0.5">{[42,31,27][i]}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-3">
          <div className="text-[10px] mono text-accent mb-1">CONSULTATION · 2 DAYS LEFT</div>
          <div className="text-[12px] font-semibold mb-2">Rework the campus shuttle routes</div>
          <div className="flex gap-2">
            <div className="flex-1 py-2 text-center rounded-full text-[11px] font-semibold border border-hair">Read brief</div>
            <div className="flex-1 py-2 text-center rounded-full text-[11px] font-semibold bg-ink text-on-ink">Submit idea</div>
          </div>
        </div>

        <div className="card p-3">
          <div className="text-[10px] mono text-mute mb-1">POLL · LIVE</div>
          <div className="text-[12px] font-semibold mb-2">More plant-based options in the canteen?</div>
          <div className="space-y-1.5">
            {[{l:'Yes', v:74, c:'var(--accent-4)'}, {l:'No', v:26, c:'var(--hair)'}].map((r) => (
              <div key={r.l} className="relative h-6 rounded-full bg-surface-2 overflow-hidden">
                <div className="absolute inset-y-0 left-0" style={{ width: `${r.v}%`, background: r.c, opacity: 0.4 }} />
                <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] font-semibold"><span>{r.l}</span><span>{r.v}%</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-3 hair-border-t bg-surface/60 flex items-center justify-between">
        {['🏠','🔍','🎫','🏆','👤'].map((i, idx) => (
          <div key={idx} className={`text-lg ${idx===2 ? 'opacity-100' : 'opacity-40'}`}>{i}</div>
        ))}
      </div>
    </div>
  )
}
