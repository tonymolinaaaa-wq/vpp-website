'use client'

import { useState, useEffect } from 'react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 bg-cream border-b border-sand transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        {/* Compact Horizontal Logo */}
        <div className="flex items-center gap-3">
          {/* VP Monogram Mark */}
          <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0">
            <rect x="1" y="1" width="62" height="62" rx="4" stroke="#C4B9AF" strokeWidth="1.5"/>
            <text x="32" y="44" textAnchor="middle" fontFamily="'DM Serif Display', Georgia, serif" fontSize="32" fontWeight="400" fill="#1E1C1A">V</text>
            <text x="32" y="44" textAnchor="middle" fontFamily="'DM Serif Display', Georgia, serif" fontSize="32" fontWeight="400" fontStyle="italic" fill="#C4613A" dx="14">P</text>
            <line x1="12" y1="52" x2="52" y2="52" stroke="#C4613A" strokeWidth="2"/>
          </svg>

          {/* Vertical Divider */}
          <div className="w-px h-7 bg-terra/40" />

          {/* Wordmark + Credential */}
          <div className="flex flex-col justify-center">
            <span className="text-base leading-tight">
              <span className="font-display">Valley Painting </span>
              <span className="font-display italic text-terra">Pros</span>
            </span>
            <span className="text-[10px] font-body font-medium uppercase tracking-wider text-mid leading-tight">
              AZ ROC #363664
            </span>
          </div>
        </div>

        {/* Right side: ROC badge + phone */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Phone — icon only on mobile, full on desktop */}
          <a
            href="tel:+14804332680"
            className="flex items-center gap-2 font-body font-semibold text-terra hover:text-terra-light transition-colors min-h-[48px] min-w-[48px] justify-center sm:justify-start"
            aria-label="Call (480) 433-2680"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 flex-shrink-0"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline text-sm">(480) 433-2680</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
