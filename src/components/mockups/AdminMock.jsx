import React from 'react'

export default function RewardsMock() {
  const badges = [
    { n: 'Freshers', c: 'var(--accent)' },
    { n: '7-day streak', c: 'var(--accent-2)' },
    { n: 'Volunteer', c: 'var(--accent-4)' },
    { n: 'First vote', c: 'var(--accent-3)' },
  ]
  return (
    <div className="h-full w-full bg-paper text-ink flex flex-col pt-10">
      <div className="px-5 pt-3 pb-3">
        <div className="tag text-[9px]">rewards</div>
        <div className="display text-[20px] font-bold mt-0.5">Your campus</div>
      </div>

      <div className="px-4 flex-1 space-y-3 overflow-hidden">
        <div className="rounded-2xl p-4 text-center" style={{ background: 'var(--ink)', color: 'var(--on-ink)' }}>
          <div className="text-[10px] mono opacity-70 mb-1">BUTLR POINTS</div>
          <div className="display text-[34px] font-bold">1,240</div>
          <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.12)' }}>
            <div className="h-full rounded-full" style={{ width: '68%', background: 'var(--accent)' }} />
          </div>
          <div className="text-[10px] mono opacity-60 mt-1.5">360 pts to Gold tier</div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="card p-2.5">
            <div className="text-[10px] mono text-mute">STREAK</div>
            <div className="text-[18px] display font-bold mt-0.5">🔥 12 days</div>
          </div>
          <div className="card p-2.5">
            <div className="text-[10px] mono text-mute">RANK</div>
            <div className="text-[18px] display font-bold mt-0.5">#38 <span className="text-[10px] mono text-mute font-normal">of 21k</span></div>
          </div>
        </div>

        <div className="card p-3">
          <div className="text-[10px] mono text-mute mb-2">BADGES</div>
          <div className="grid grid-cols-4 gap-2">
            {badges.map((b) => (
              <div key={b.n} className="text-center">
                <div className="w-full aspect-square rounded-xl grid place-items-center text-white font-bold text-xs" style={{ background: b.c }}>★</div>
                <div className="text-[8px] mono text-mute mt-1 truncate">{b.n}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-3 hair-border-t bg-surface/60 flex items-center justify-between">
        {['🏠','🔍','🎫','🏆','👤'].map((i, idx) => (
          <div key={idx} className={`text-lg ${idx===3 ? 'opacity-100' : 'opacity-40'}`}>{i}</div>
        ))}
      </div>
    </div>
  )
}
