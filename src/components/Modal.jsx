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
      <div className="relative bg-black p-6 rounded-xl border border-gray-700 max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4 text-white">Request Demo</h3>
        <form onSubmit={submit} className="grid gap-3">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="p-2 rounded bg-black border border-gray-700 text-white" />
          <input value={uni} onChange={e => setUni(e.target.value)} placeholder="University" className="p-2 rounded bg-black border border-gray-700 text-white" />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" className="p-2 rounded bg-black border border-gray-700 text-white" />
          <button type="submit" className="bg-white text-black px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </div>
  )
}
