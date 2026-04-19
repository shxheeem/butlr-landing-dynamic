import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Wordmark from '../Wordmark'

const featureItems = [
  {
    to: '/',
    label: 'For students',
    desc: 'Events, societies, voice, wellbeing. One home.',
  },
  {
    to: '/features/su',
    label: 'For student unions',
    desc: 'Committee tools, reach, engagement, handover.',
  },
  {
    to: '/features/universities',
    label: 'For universities',
    desc: 'A read on engagement and wellbeing across campus.',
  },
]

export default function Navbar({ onContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const featuresBtnRef = useRef(null)
  const featuresMenuRef = useRef(null)
  const closeTimer = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu and dropdown on route change
  useEffect(() => {
    setMenuOpen(false)
    setFeaturesOpen(false)
  }, [location.pathname])

  // Keyboard: Escape closes dropdown
  useEffect(() => {
    if (!featuresOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setFeaturesOpen(false)
        featuresBtnRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [featuresOpen])

  // Click-outside close
  useEffect(() => {
    if (!featuresOpen) return
    const onClick = (e) => {
      if (
        !featuresMenuRef.current?.contains(e.target) &&
        !featuresBtnRef.current?.contains(e.target)
      ) {
        setFeaturesOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [featuresOpen])

  const openFeatures = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setFeaturesOpen(true)
  }
  const scheduleCloseFeatures = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setFeaturesOpen(false), 120)
  }

  const featuresActive = location.pathname.startsWith('/features')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || menuOpen
          ? 'bg-paper/85 backdrop-blur-md border-b border-hair'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Butlr home">
          <Wordmark size="sm" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          <div
            className="relative"
            onMouseEnter={openFeatures}
            onMouseLeave={scheduleCloseFeatures}
          >
            <button
              ref={featuresBtnRef}
              type="button"
              aria-haspopup="menu"
              aria-expanded={featuresOpen}
              onClick={() => setFeaturesOpen((v) => !v)}
              onFocus={openFeatures}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-full flex items-center gap-1.5 ${
                featuresActive ? 'text-ink' : 'text-ink/70 hover:text-ink'
              }`}
            >
              Features
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden
                className={`transition-transform ${featuresOpen ? 'rotate-180' : ''}`}
              >
                <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <AnimatePresence>
              {featuresOpen && (
                <motion.div
                  ref={featuresMenuRef}
                  role="menu"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                  onMouseEnter={openFeatures}
                  onMouseLeave={scheduleCloseFeatures}
                >
                  <div className="card shadow-card p-2 min-w-[340px]">
                    {featureItems.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        role="menuitem"
                        className={({ isActive }) =>
                          `block rounded-xl px-3 py-2.5 transition-colors ${
                            isActive ? 'bg-surface-2' : 'hover:bg-surface-2'
                          }`
                        }
                      >
                        <div className="text-sm font-semibold text-ink">{item.label}</div>
                        <div className="text-[12px] text-mute mt-0.5">{item.desc}</div>
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium transition-colors rounded-full ${
                isActive ? 'text-ink' : 'text-ink/70 hover:text-ink'
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium transition-colors rounded-full ${
                isActive ? 'text-ink' : 'text-ink/70 hover:text-ink'
              }`
            }
          >
            Careers
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={onContact} className="hidden md:inline-flex btn btn-primary text-sm px-4 py-2">
            Pilot enquiry
            <span aria-hidden>→</span>
          </button>
          <button
            className="md:hidden p-2 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <div className={`w-5 h-0.5 bg-ink transition-transform ${menuOpen ? 'translate-y-[6px] rotate-45' : 'mb-1.5'}`} />
            <div className={`w-5 h-0.5 bg-ink transition-opacity ${menuOpen ? 'opacity-0' : 'mb-1.5'}`} />
            <div className={`w-5 h-0.5 bg-ink transition-transform ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-hair bg-paper/95 backdrop-blur overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col">
              <div className="tag mb-2">Features</div>
              {featureItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="py-2 text-base font-medium text-ink/90"
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="hair-divider my-3" />
              <NavLink to="/blog" className="py-2 text-base font-medium text-ink/90">Blog</NavLink>
              <NavLink to="/careers" className="py-2 text-base font-medium text-ink/90">Careers</NavLink>
              <button
                onClick={() => { setMenuOpen(false); onContact() }}
                className="btn btn-primary mt-4"
              >
                Pilot enquiry <span aria-hidden>→</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
