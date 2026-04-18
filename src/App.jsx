import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import PlatformOverview from './components/PlatformOverview'
import FeatureDeepDives from './components/FeatureDeepDives'
import MarketSection from './components/MarketSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import Modal from './components/Modal'

export default function App() {
  const [open, setOpen] = useState(false)
  const contact = () => setOpen(true)

  return (
    <div className="font-sans text-ink bg-paper min-h-screen">
      <Navbar onContact={contact} />
      <main>
        <Hero onContact={contact} />
        <ProblemSection />
        <PlatformOverview />
        <FeatureDeepDives />
        <MarketSection />
        <CTASection onContact={contact} />
      </main>
      <Footer />
      <Modal open={open} onClose={() => setOpen(false)} endpoint="/api/lead" />
    </div>
  )
}
