import React from 'react'

export default function FeedMock() {
  return (
    <div className="h-full w-full bg-paper text-ink flex flex-col pt-10">
      <div className="px-5 pt-3 pb-3 flex items-center justify-between">
        <div>
          <div className="tag text-[9px]">wednesday · 14 oct</div>
          <div className="display text-[20px] font-bold mt-0.5">Hey, Maya.</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 grid place-items-center text-accent text-xs font-bold">M</div>
      </div>

      <div className="px-4 flex gap-2 overflow-hidden">
        {['Today','Societies','Voice','Wellbeing'].map((t, i) => (
          <div key={t} className={`px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap ${i===0 ? 'bg-ink text-on-ink' : 'bg-surface-2 text-ink/60 border border-hair'}`}>{t}</div>
        ))}
      </div>

      <div className="px-4 pt-3 flex-1 overflow-hidden space-y-3">
        <div className="card p-3 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl grid place-items-center text-lg" style={{ background: 'var(--accent)' }}>🎟</div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] mono text-mute">TONIGHT · 8PM</div>
            <div className="text-[13px] font-semibold truncate">Freshers Ball · Aston SU</div>
          </div>
          <div className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: 'var(--accent-2)' }}>RSVP</div>
        </div>

        <div className="card p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg" style={{ background: 'var(--accent-3)' }} />
            <div className="text-[11px] font-semibold">Photography Soc</div>
            <div className="text-[9px] mono text-mute ml-auto">2h</div>
          </div>
          <div className="text-[12px] leading-snug mb-2">Golden hour walk tomorrow — bring a camera or a phone, we'll show you the ropes.</div>
          <div className="rounded-lg h-16" style={{ background: 'linear-gradient(120deg, var(--accent-2), var(--accent))' }} />
        </div>

        <div className="card p-3">
          <div className="text-[10px] mono text-accent-3 mb-1">STUDENT VOICE</div>
          <div className="text-[12px] font-semibold mb-2">Should the library open 24/7 in term 2?</div>
          <div className="space-y-1.5">
            <div className="relative h-6 rounded-full bg-surface-2 overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-accent/30" style={{ width: '68%' }} />
              <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] font-semibold"><span>Yes</span><span>68%</span></div>
            </div>
            <div className="relative h-6 rounded-full bg-surface-2 overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-ink/20" style={{ width: '32%' }} />
              <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] font-semibold"><span>No</span><span>32%</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-3 hair-border-t bg-surface/60 flex items-center justify-between">
        {['🏠','🔍','🎫','🏆','👤'].map((i, idx) => (
          <div key={idx} className={`text-lg ${idx===0 ? 'opacity-100' : 'opacity-40'}`}>{i}</div>
        ))}
      </div>
    </div>
  )
}
