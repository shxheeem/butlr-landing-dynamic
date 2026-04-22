import React from 'react'
import { Link } from 'react-router-dom'
import Wordmark from '../Wordmark'

export default function Footer({ onContact }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hair bg-paper">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-6">
            <Wordmark size="sm" />
            <p className="mt-4 text-sm text-mute max-w-sm leading-relaxed">
              A calmer home for campus life. Built with students, run with student unions, supported by universities.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="tag mb-4">Products</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-ink/80 hover:text-ink transition-colors">For students</Link></li>
              <li><Link to="/features/su" className="text-ink/80 hover:text-ink transition-colors">For student unions</Link></li>
              <li><Link to="/features/universities" className="text-ink/80 hover:text-ink transition-colors">For universities</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="tag mb-4">Company</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/blog" className="text-ink/80 hover:text-ink transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-ink/80 hover:text-ink transition-colors">Careers</Link></li>
              <li><Link to="/pilot" className="text-ink/80 hover:text-ink transition-colors">Pilot</Link></li>
              <li>
                <button onClick={onContact} className="text-ink/80 hover:text-ink transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-hair flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 justify-between">
          <div className="text-[12px] text-mute">
            © {year} Butlr · Made in the UK
          </div>
        </div>
      </div>
    </footer>
  )
}
