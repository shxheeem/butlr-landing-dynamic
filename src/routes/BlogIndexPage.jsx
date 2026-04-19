import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { posts } from '../content/posts'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

export default function BlogIndexPage() {
  const prefersReduced = useReducedMotion()

  const [featured, ...rest] = posts.filter((p) => p.status === 'published')
  const upcoming = posts.filter((p) => p.status === 'upcoming')

  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="tag mb-3">Blog</div>
          <h1 className="display text-5xl md:text-7xl font-bold tracking-[-0.035em] leading-[0.98]">
            Field notes.
          </h1>
          <p className="mt-5 text-lg text-mute max-w-xl leading-relaxed">
            Short updates, notes from the pilot, the occasional founder essay.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <Link
              to={`/blog/${featured.slug}`}
              className="group block rounded-[20px] border border-hair bg-surface p-6 md:p-10 hover:-translate-y-0.5 hover:shadow-soft transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-ink text-on-ink">
                  {featured.kind}
                </span>
                <span className="text-[11px] text-mute">{formatDate(featured.date)}</span>
                <span className="tag ml-auto hidden md:inline">Latest</span>
              </div>
              <h2 className="display text-3xl md:text-[44px] font-bold leading-[1.05] tracking-[-0.03em] max-w-3xl">
                {featured.title}
              </h2>
              {featured.deck && (
                <p className="mt-4 text-lg text-mute leading-relaxed max-w-2xl">
                  {featured.deck}
                </p>
              )}
              <div className="mt-6 text-sm font-semibold inline-flex items-center gap-1.5 transition-all group-hover:gap-3">
                Read
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other published posts */}
      {rest.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <div className="tag mb-6">More posts</div>
            <div className="divide-y divide-hair border-y border-hair">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-6 py-5 md:py-6 hover:bg-surface-2 -mx-5 md:-mx-6 px-5 md:px-6 transition-colors"
                >
                  <div className="text-[11px] text-mute md:w-28 flex-shrink-0">{formatDate(p.date)}</div>
                  <div className="flex-1">
                    <div className="tag" style={{ color: 'var(--accent-3)' }}>{p.kind}</div>
                    <div className="display text-xl md:text-2xl font-bold leading-tight tracking-[-0.02em] mt-1">{p.title}</div>
                    {p.deck && <div className="text-mute text-[15px] mt-1 leading-relaxed max-w-2xl">{p.deck}</div>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming posts ,  honest stubs */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="tag mb-6">In the drafts folder</div>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {upcoming.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="p-5 rounded-2xl border border-dashed border-hair bg-surface/60 relative"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="tag">{p.kind}</span>
                  <span className="text-[11px] text-mute ml-auto">Drafting</span>
                </div>
                <div className="display text-lg font-bold leading-tight tracking-[-0.02em] opacity-80">{p.title}</div>
                {p.excerpt && <div className="text-mute text-sm mt-1.5 leading-relaxed opacity-80">{p.excerpt}</div>}
              </motion.div>
            ))}
          </div>
          <p className="text-[13px] text-mute mt-8 max-w-lg leading-relaxed">
            We'd rather publish one well-written note a month than a steady stream of filler. If you want a heads up when a post lands, drop us a line.
          </p>
        </div>
      </section>
    </>
  )
}
