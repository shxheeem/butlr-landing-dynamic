import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Honest placeholder for routes not yet built.
 * Per spec: "Write a clear stub and flag it ,  rather see 80% of the site
 * with honest blanks than a polished mock I have to unpick."
 */
export default function PageStub({ eyebrow, title, children, back = true }) {
  return (
    <section className="pt-32 pb-24 min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="tag mb-4">{eyebrow}</div>
        <h1 className="display text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
        <div className="mt-6 text-mute leading-relaxed text-lg">
          {children}
        </div>
        {back && (
          <Link to="/" className="btn btn-ghost mt-10">← Back to home</Link>
        )}
      </div>
    </section>
  )
}
