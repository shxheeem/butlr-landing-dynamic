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
    <div className="font-sans antialiased text-white bg-black min-h-screen relative overflow-x-clip">
      <div className="bg-animated -z-10" />

      <header className="fixed w-full z-30 bg-black/60 backdrop-blur border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="text-white font-bold tracking-wide text-lg">Butlr</a>
          <nav className="flex gap-4 items-center text-sm">
            <a href="#features" className="hover:opacity-90">Features</a>
            <button onClick={() => setModalOpen(true)} className="px-4 py-2 rounded bg-white text-black font-semibold hover:opacity-90">Get in touch</button>
          </nav>
        </div>
      </header>

      <main className="pt-28">
        <section id="hero" className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-7xl leading-[1.05]">
              <span className="rainbow-text">Your Campus Assistant</span>
            </motion.h1>
            <p className="mt-6 max-w-xl text-lg text-gray-300">
              Butlr centralises Students' Union services into just one platform — clubs, governance, activities and admin tools.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#features" className="px-5 py-3 rounded-lg text-sm border border-gray-700 hover:bg-gray-900">Explore features</a>
              <button onClick={() => setModalOpen(true)} className="px-5 py-3 rounded-lg text-sm bg-white text-black hover:opacity-90">Request Demo</button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              {[['One', 'Platform'], ['AI-ready', 'Insights'], ['24/7', 'Engagement']].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-gray-900 bg-black/60 px-4 py-3 text-center">
                  <div className="text-white font-bold">{k}</div>
                  <div className="text-gray-400 text-xs">{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <PhoneMockup src={goodAfternoon} alt="App preview" />
          </div>
        </section>

        <LogoMarquee />
        <MetricsStrip />

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

        <section className="py-24 bg-gradient-to-r from-purple-900 via-indigo-900 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold">Shape the future of Student Unions</h2>
            <p className="mt-3 text-gray-300">Join Butlr and bring your campus to life with one digital platform.</p>
            <button onClick={() => setModalOpen(true)} className="mt-8 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90">Request Demo</button>
          </div>
        </section>

        <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-gray-500">© {new Date().getFullYear()} Butlr — Your Campus Assistant</footer>
      </main>

      <FloatingCTA onClick={() => setModalOpen(true)} />

      {isModalOpen && <Modal onClose={() => setModalOpen(false)} endpoint={'/api/lead'} />}
    </div>
  )
}
