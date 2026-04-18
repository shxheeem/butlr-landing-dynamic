import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Wordmark from './Wordmark'

const links = [
  { href: '#problem', label: 'The problem' },
  { href: '#platform', label: 'Platform' },
  { href: '#students', label: 'Students' },
  { href: '#unions', label: "Unions" },
  { href: '#pilot', label: 'Pilot' },
]

const palettes = [
  { id: 'campus', label: 'Campus', swatch: '#FF5B2E' },
  { id: 'lime',   label: 'Lime',   swatch: '#9AE600' },
  { id: 'berry',  label: 'Berry',  swatch: '#FF3D6E' },
  { id: 'cobalt', label: 'Cobalt', swatch: '#2E6CFF' },
  { id: 'sun',    label: 'Sun',    swatch: '#FFB400' },
]

export default function Navbar({ onContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [active, setActive] = useState('campus')

  useEffect(() => {
    const saved = localStorage.getItem('butlr-palette')
    if (saved) {
      document.documentElement.setAttribute('data-palette', saved)
      setActive(saved)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const setPalette = (id) => {
    document.documentElement.setAttribute('data-palette', id)
    localStorage.setItem('butlr-palette', id)
    setActive(id)
    setPaletteOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/80 backdrop-blur-md border-b border-hair' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="butlr — home">
          <Wordmark size="sm" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-ink/70 hover:text-ink transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <button
              onClick={() => setPaletteOpen((v) => !v)}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-hair hover:border-ink/40 transition-colors"
              aria-label="Change palette"
            >
              <span className="w-4 h-4 rounded-full border border-hair" style={{ background: palettes.find((p) => p.id === active)?.swatch }} />
              <span className="tag text-[10px]">palette</span>
            </button>
            <AnimatePresence>
              {paletteOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute right-0 top-full mt-2 card shadow-card p-2 min-w-[180px]"
                >
                  {palettes.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setPalette(p.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium hover:bg-surface-2 transition-colors ${
                        active === p.id ? 'bg-surface-2' : ''
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full border border-hair" style={{ background: p.swatch }} />
                      <span>{p.label}</span>
                      {active === p.id && <span className="ml-auto text-accent">●</span>}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={onContact}
            className="btn btn-primary text-sm px-4 md:px-5 py-2.5"
          >
            Pilot enquiry
            <span aria-hidden>→</span>
          </button>

          <button
            className="lg:hidden p-2"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <div className="w-5 h-0.5 bg-ink mb-1" />
            <div className="w-5 h-0.5 bg-ink mb-1" />
            <div className="w-5 h-0.5 bg-ink" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-hair bg-paper/95 backdrop-blur overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-base font-medium text-ink/80 border-b border-hair last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-2 mt-3">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPalette(p.id)}
                    className={`w-8 h-8 rounded-full border ${active === p.id ? 'border-ink ring-2 ring-ink/20' : 'border-hair'}`}
                    style={{ background: p.swatch }}
                    aria-label={`Switch to ${p.label} palette`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
