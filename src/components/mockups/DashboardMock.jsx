import React from 'react'

export default function DashboardMock() {
  return (
    <div className="w-full h-full bg-paper text-ink">
      <div className="flex items-center justify-between px-4 py-3 hair-border-b">
        <div className="flex items-center gap-2">
          <div className="brand-mark" style={{ width: 22, height: 22, fontSize: 12, borderRadius: 7 }}>b</div>
          <div className="text-[13px] font-semibold">Aston SU · Admin</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="tag text-[9px]">LIVE</div>
          <div className="w-6 h-6 rounded-full bg-accent-3/20 grid place-items-center text-[10px] font-bold text-accent-3">A</div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-12 gap-3">
        <div className="col-span-4 card p-3">
          <div className="tag text-[9px]">ACTIVE · WK 12</div>
          <div className="display text-[28px] font-bold mt-1">21,840</div>
          <div className="text-[10px] mono text-accent-4 mt-0.5">+14% vs last term</div>
        </div>
        <div className="col-span-4 card p-3">
          <div className="tag text-[9px]">RSVP RATE</div>
          <div className="display text-[28px] font-bold mt-1">91%</div>
          <div className="text-[10px] mono text-mute mt-0.5">↑ from 62%</div>
        </div>
        <div className="col-span-4 card p-3" style={{ background: 'var(--accent)', color: 'var(--on-ink)' }}>
          <div className="text-[9px] mono opacity-80">EVENTS THIS WK</div>
          <div className="display text-[28px] font-bold mt-1">38</div>
          <div className="text-[10px] mono opacity-70 mt-0.5">12 tonight</div>
        </div>

        <div className="col-span-8 card p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="tag text-[9px]">ENGAGEMENT · 8 WEEKS</div>
            <div className="text-[10px] mono text-accent-4">+312%</div>
          </div>
          <div className="h-24 flex items-end gap-1">
            {[18,24,22,30,40,48,62,76].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i > 5 ? 'var(--accent)' : 'var(--hair)' }} />
            ))}
          </div>
        </div>

        <div className="col-span-4 card p-3">
          <div className="tag text-[9px] mb-2">TOP SOCIETIES</div>
          {['Photography','MUN','FC Aston'].map((s, i) => (
            <div key={s} className="flex items-center justify-between py-1 text-[11px]">
              <span className="font-medium truncate">{s}</span>
              <span className="mono text-mute text-[9px]">{[412, 238, 680][i]}</span>
            </div>
          ))}
        </div>

        <div className="col-span-12 card p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="tag text-[9px]">LIVE FEED</div>
              <div className="text-[12px] font-semibold mt-0.5">Freshers Ball ticket sales · 412 in last 2h</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="pill-dot" />
              <span className="text-[10px] mono">now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
