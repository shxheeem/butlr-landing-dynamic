import React from 'react'

const societies = [
  { n: 'Photography Soc', m: '412 members', c: 'var(--accent)' },
  { n: 'Model UN', m: '238 members', c: 'var(--accent-3)' },
  { n: 'Football', m: '680 members', c: 'var(--accent-4)' },
  { n: 'Drama Club', m: '156 members', c: 'var(--lilac)' },
  { n: 'Dev Society', m: '301 members', c: 'var(--accent-2)' },
  { n: 'Climbing', m: '94 members', c: 'var(--accent)' },
]

export default function SocietiesMock() {
  return (
    <div className="h-full w-full bg-paper text-ink flex flex-col pt-10">
      <div className="px-5 pt-3 pb-3">
        <div className="tag text-[9px]">discover</div>
        <div className="display text-[20px] font-bold mt-0.5">Societies</div>
      </div>

      <div className="px-4 pb-2">
        <div className="h-9 rounded-full border border-hair bg-surface flex items-center px-3 text-[11px] text-mute">
          <span className="mr-2">🔍</span>Search 260+ groups…
        </div>
      </div>

      <div className="px-4 pt-1 flex-1 overflow-hidden">
        <div className="grid grid-cols-2 gap-2">
          {societies.map((s) => (
            <div key={s.n} className="card p-2.5">
              <div className="w-full h-12 rounded-lg mb-2" style={{ background: s.c }} />
              <div className="text-[11px] font-semibold truncate">{s.n}</div>
              <div className="text-[9px] text-mute mt-0.5">{s.m}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-3 hair-border-t bg-surface/60 flex items-center justify-between">
        {['🏠','🔍','🎫','🏆','👤'].map((i, idx) => (
          <div key={idx} className={`text-lg ${idx===1 ? 'opacity-100' : 'opacity-40'}`}>{i}</div>
        ))}
      </div>
    </div>
  )
}
