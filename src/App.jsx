import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './components/Modal'
import FeatureStripe from './components/FeatureStripe'
import PhoneMockup from './components/PhoneMockup'
import LogoMarquee from './components/LogoMarquee'
import MetricsStrip from './components/MetricsStrip'
import FloatingCTA from './components/FloatingCTA'

import goodAfternoon from './assets/good-afternoon.png'
import studentUnion from './assets/student-union.png'

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div className="font-sans antialiased text-white bg-black relative overflow-clip">
      <div className="bg-animated -z-10" />

      <header className="fixed w-full z-30 bg-black/60 backdrop-blur border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="text-white font-bold tracking-wide text-lg">Butlr</a>
          <nav className="flex gap-4 items-center text-sm">
            <a href="#features" className="hover:opacity-90">Features</a>
            <button onClick={() => setModalOpen(true)} className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:opacity-90">Get in touch</button>
          </nav>
        </div>
      </header>

      <main className="pt-28">
        <section id="hero" className="max-w-6xl mx-auto px-6 min-h-screen flex flex-col justify-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 50, scale: 0.8 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-6xl md:text-8xl xl:text-[10rem] leading-[0.85] font-black tracking-tighter hero-font pr-4"
            >
              <motion.span 
                className="rainbow-text-premium block relative"
                initial={{ 
                  backgroundPosition: "0% 50%",
                  opacity: 0,
                  y: 30
                }}
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  opacity: 1,
                  y: 0
                }}
                transition={{ 
                  backgroundPosition: { duration: 12, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 1.2, delay: 0.2 },
                  y: { duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                Your Campus
              </motion.span>
              <motion.span 
                className="rainbow-text-premium block relative"
                initial={{ 
                  opacity: 0, 
                  x: -40,
                  scale: 0.9
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                Assistant
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8 max-w-xl text-xl text-gray-300 leading-relaxed"
            >
              Butlr centralises Students' Union services into just one platform. From clubs and governance to activities and admin tools.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex gap-4"
            >
              <a href="#features" className="px-5 py-3 rounded-lg text-sm border border-gray-700 hover:bg-gray-900">Explore features</a>
              <button onClick={() => setModalOpen(true)} className="px-5 py-3 rounded-lg text-sm bg-white text-black hover:opacity-90">Request Demo</button>
            </motion.div>
          </div>
        </section>

        <div id="features">
          <FeatureStripe
            eyebrow="Governance"
            title="Close the gap between students and SU decisions"
            text="Enable direct participation, voting and transparent communication between students and the Students' Union."
            image={studentUnion}
            flip={false}
          />
          <FeatureStripe
            eyebrow="Activities"
            title="Make campus life engaging and measurable"
            text="Gamify participation with points, badges and analytics that highlight what students value most."
            image={goodAfternoon}
            flip={true}
          />
          <FeatureStripe
            eyebrow="Admin"
            title="One dashboard for organisers & teams"
            text="Content, events, reporting and permissions — streamlined for SU teams."
            image={studentUnion}
            flip={false}
          />
        </div>

        <section className="py-24">
          <div className="max-w-4xl mx-auto rounded-3xl p-12 text-center bg-gradient-to-r from-orange-700 via-amber-600 to-red-700">
            <h2 className="text-4xl font-bold">Interested in working with Butlr?</h2>
            <p className="mt-3 text-gray-200 max-w-2xl mx-auto">Contact us to arrange a demo, pilot or partnership — we’d love to talk.</p>
            <button onClick={() => setModalOpen(true)} className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:opacity-90">Request Demo</button>
          </div>
        </section>

        <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500">© {new Date().getFullYear()} Butlr — Your Campus Assistant</footer>
      </main>

      {isModalOpen && <Modal onClose={() => setModalOpen(false)} endpoint={'/api/lead'} />}
    </div>
  )
}
