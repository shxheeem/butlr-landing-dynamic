import React, { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Navbar from './components/shell/Navbar'
import Footer from './components/shell/Footer'
import ScrollToTop from './components/shell/ScrollToTop'
import PilotModal from './components/shell/PilotModal'
import LandingPage from './routes/LandingPage'
import FeaturesSUPage from './routes/FeaturesSUPage'
import FeaturesUniversitiesPage from './routes/FeaturesUniversitiesPage'
import BlogIndexPage from './routes/BlogIndexPage'
import BlogPostPage from './routes/BlogPostPage'
import CareersPage from './routes/CareersPage'
import PilotPage from './routes/PilotPage'
import NotFoundPage from './routes/NotFoundPage'

function Shell() {
  const [open, setOpen] = useState(false)
  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])

  return (
    <div className="font-sans text-ink bg-paper min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] btn btn-primary"
      >
        Skip to content
      </a>
      <Navbar onContact={openModal} />
      <main id="main" className="flex-1">
        <Outlet context={{ onContact: openModal }} />
      </main>
      <Footer onContact={openModal} />
      <PilotModal open={open} onClose={closeModal} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<LandingPage />} />
          {/* The landing page IS the student story. Deep links still work via redirect. */}
          <Route path="/features/students" element={<Navigate to="/" replace />} />
          <Route path="/features/su" element={<FeaturesSUPage />} />
          <Route path="/features/universities" element={<FeaturesUniversitiesPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/pilot" element={<PilotPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
