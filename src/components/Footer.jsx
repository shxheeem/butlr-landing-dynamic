import React from 'react'
import Wordmark from './Wordmark'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-hair bg-paper">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Wordmark size="md" />
            <p className="mt-5 text-mute max-w-sm leading-relaxed">
              The home screen of campus life. Butlr is the modern operating layer for
              UK Students' Unions and the students they serve.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-4 animate-pulseDot" />
              <span className="text-xs mono text-mute">All systems operational</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="tag mb-4">Product</div>
            <ul className="space-y-2 text-ink">
              <li><a href="#platform" className="hover:text-accent transition-colors">Platform</a></li>
              <li><a href="#students" className="hover:text-accent transition-colors">Students</a></li>
              <li><a href="#unions" className="hover:text-accent transition-colors">Unions</a></li>
              <li><a href="#rollout" className="hover:text-accent transition-colors">Rollout</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="tag mb-4">Company</div>
            <ul className="space-y-2 text-ink">
              <li><a href="#pilot" className="hover:text-accent transition-colors">Pilot</a></li>
              <li><a href="#voices" className="hover:text-accent transition-colors">Voices</a></li>
              <li><a href="mailto:hello@butlr.xyz" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="tag mb-4">Get in touch</div>
            <a href="mailto:hello@butlr.xyz" className="display text-2xl font-bold hover:text-accent transition-colors block">
              hello@butlr.xyz
            </a>
            <div className="text-sm text-mute mt-3">Birmingham, UK · scaling globally</div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-hair flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-mute">
          <div>© {year} Butlr Ltd. All rights reserved.</div>
          <div className="flex items-center gap-3 mono text-xs">
            <span>Made in the UK</span>
            <span aria-hidden>·</span>
            <span>v1 · pilot</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
