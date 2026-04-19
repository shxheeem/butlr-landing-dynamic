import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../components/landing/Hero'
import WeekOnButlr from '../components/landing/WeekOnButlr'
import ThreeDoors from '../components/landing/ThreeDoors'
import PilotNote from '../components/landing/PilotNote'

export default function LandingPage() {
  const { onContact } = useOutletContext() || {}
  return (
    <>
      <Hero onContact={onContact} />
      <WeekOnButlr />
      <ThreeDoors />
      <PilotNote onContact={onContact} />
    </>
  )
}
