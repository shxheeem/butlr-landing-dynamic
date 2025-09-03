import React from 'react'

export default function FloatingCTA({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 bg-white text-black font-semibold rounded-full px-5 py-3 shadow-2xl hover:opacity-90 animate-pulse"
    >
      Request Demo
    </button>
  )
}
