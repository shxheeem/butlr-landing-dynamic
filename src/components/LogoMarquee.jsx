import React from 'react'

const logos = ['Oxford', 'Cambridge', 'UCL', 'Imperial', 'Manchester', 'Bristol', 'Leeds', 'Warwick']

export default function LogoMarquee() {
  return (
    <section className="py-10 border-y border-gray-900 bg-black/60">
      <div className="overflow-hidden">
        <div className="marquee whitespace-nowrap text-gray-400 opacity-80">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8">
              {logos.map((l, idx) => (
                <div key={`${i}-${idx}`} className="text-sm tracking-wider uppercase">{l}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
