import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './components/Modal'
import FeatureStripe from './components/FeatureStripe'
import LogoMarquee from './components/LogoMarquee'
import MetricsStrip from './components/MetricsStrip'
import FloatingCTA from './components/FloatingCTA'


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
        <section id="hero" className="max-w-6xl mx-auto px-6 py-32 text-center relative">
          <div className="max-w-5xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 50, scale: 0.8 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-6xl md:text-8xl xl:text-[10rem] leading-[0.85] font-black tracking-tighter hero-font"
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
              className="mt-8 max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed"
            >
              The AI-powered platform that transforms how Students' Unions engage with their communities. One unified system for governance, activities, and campus life.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex gap-4 justify-center flex-wrap"
            >
              <a href="#features" className="px-6 py-3 rounded-lg text-sm border border-gray-700 hover:bg-gray-900 transition-all duration-300 hover:border-gray-500">Explore features</a>
              <button onClick={() => setModalOpen(true)} className="px-6 py-3 rounded-lg text-sm bg-white text-black hover:opacity-90 transition-all duration-300 hover:scale-105">Request Demo</button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                ['🎯', 'Unified Platform', 'All SU services in one place'],
                ['🤖', 'AI-Powered', 'Smart insights & automation'],
                ['📊', 'Data-Driven', 'Real-time analytics & reporting']
              ].map(([icon, title, desc]) => (
                <motion.div 
                  key={title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm px-6 py-6 text-center hover:border-gray-700 transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <div className="text-white font-bold text-lg mb-2">{title}</div>
                  <div className="text-gray-400 text-sm">{desc}</div>
                </div>
              ))}
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 opacity-20">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl"
              />
            </div>
            <div className="absolute top-40 right-20 opacity-20">
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl"
              />
            </div>
          </div>
        </section>

        <LogoMarquee />
        <MetricsStrip />

        <div id="features">
          <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Students' Union</h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">Discover how Butlr revolutionizes campus engagement with cutting-edge technology</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: '🗳️',
                    title: 'Democratic Governance',
                    description: 'Enable transparent voting, policy discussions, and direct student participation in SU decisions.',
                    features: ['Digital voting systems', 'Policy feedback loops', 'Transparent decision tracking']
                  },
                  {
                    icon: '🎉',
                    title: 'Engaging Activities',
                    description: 'Gamify campus life with points, badges, and social features that boost student participation.',
                    features: ['Event management', 'Social networking', 'Achievement systems']
                  },
                  {
                    icon: '📈',
                    title: 'Smart Analytics',
                    description: 'AI-powered insights help SU teams understand student needs and optimize their services.',
                    features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting']
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="py-24 bg-gradient-to-r from-purple-900 via-indigo-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Campus?</h2>
              <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">Join forward-thinking Students' Unions who are already using Butlr to create more engaged, connected campus communities.</p>
              <div className="mt-8 flex gap-4 justify-center flex-wrap">
                <button onClick={() => setModalOpen(true)} className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105">Request Demo</button>
                <a href="#features" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">Learn More</a>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-gray-500">© {new Date().getFullYear()} Butlr — Your Campus Assistant</footer>
      </main>

      <FloatingCTA onClick={() => setModalOpen(true)} />

      {isModalOpen && <Modal onClose={() => setModalOpen(false)} endpoint={'/api/lead'} />}
    </div>
  )
}
