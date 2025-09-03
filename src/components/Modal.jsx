import React, { useState } from 'react'

export default function Modal({ onClose, endpoint = '/api/lead' }) {
  const [name, setName] = useState('')
  const [uni, setUni] = useState('')
  const [message, setMessage] = useState('')

  async function submit(e) {
    e.preventDefault()
    try {
      await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, uni, message }) })
      onClose()
    } catch (e) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-gray-900 p-8 rounded-xl border border-gray-700 max-w-md w-full text-center">
        <h3 className="text-2xl font-bold mb-2 text-white">Get in touch</h3>
        <p className="text-gray-400 mb-6">We'll get back to you as soon as we can.</p>
        <form onSubmit={submit} className="grid gap-4">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500" />
          <input value={uni} onChange={e => setUni(e.target.value)} placeholder="University Name" className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500" />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message" className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 h-24" />
          <button type="submit" className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90">Request Demo</button>
        </form>
      </div>
    </div>
  )
}
