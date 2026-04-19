import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../content/posts'
import PageStub from '../components/shell/PageStub'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

function RenderBlock({ block }) {
  if (block.type === 'p') return <p>{block.text}</p>
  if (block.type === 'h2') return <h2 className="display">{block.text}</h2>
  if (block.type === 'quote') return (
    <blockquote className="relative border-l-2 pl-6 my-10" style={{ borderColor: 'var(--accent)' }}>
      <span
        aria-hidden
        className="absolute -top-4 -left-2 text-7xl opacity-15 leading-none"
        style={{ color: 'var(--accent)', fontFamily: 'serif' }}
      >
        "
      </span>
      <p className="display text-2xl md:text-[28px] font-semibold leading-snug tracking-[-0.01em] text-ink">
        {block.text}
      </p>
    </blockquote>
  )
  return null
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post || post.status !== 'published') {
    return (
      <PageStub eyebrow={`Post · ${slug || ''}`} title="This post isn't published yet.">
        <p>
          It's in the drafts folder. Head back to the{' '}
          <Link to="/blog" className="text-ink underline decoration-accent/60 underline-offset-4">blog index</Link>
          {' '}for what's already out.
        </p>
      </PageStub>
    )
  }

  return (
    <article>
      {/* Header */}
      <header className="pt-32 md:pt-36 pb-10">
        <div className="max-w-[680px] mx-auto px-5 md:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-mute hover:text-ink transition-colors mb-8">
            <span aria-hidden>←</span> All posts
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-ink text-on-ink">
              {post.kind}
            </span>
            <span className="text-[12px] text-mute">{formatDate(post.date)}</span>
          </div>
          <h1 className="display text-4xl md:text-[56px] font-bold leading-[1.03] tracking-[-0.035em]">
            {post.title}
          </h1>
          {post.deck && (
            <p className="mt-5 text-xl text-mute leading-relaxed">
              {post.deck}
            </p>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="pb-24 md:pb-32">
        <div className="max-w-[680px] mx-auto px-5 md:px-8 prose-butlr">
          {post.body?.map((block, i) => (
            <RenderBlock key={i} block={block} />
          ))}
        </div>
      </div>

      {/* Foot ,  back to blog + pilot nudge */}
      <div className="pb-24">
        <div className="max-w-[680px] mx-auto px-5 md:px-8 flex items-center justify-between border-t border-hair pt-8">
          <Link to="/blog" className="btn btn-ghost">← More posts</Link>
          <div className="text-[12px] text-mute">Butlr · field notes</div>
        </div>
      </div>
    </article>
  )
}
