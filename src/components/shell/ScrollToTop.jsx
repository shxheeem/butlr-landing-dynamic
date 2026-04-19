import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll to top on route change. Respect in-page anchors (#foo).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return // let the browser handle anchors
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])

  return null
}
