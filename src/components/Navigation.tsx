'use client'

import { useState, useEffect } from 'react'
import { BrandName } from './BrandName'

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
        {/* Logo / Brand Name */}
        <BrandName className="text-lg sm:text-xl" />

        {/* Right side: ROC badge + phone */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* ROC badge — hidden on very small screens */}
          <span className="hidden sm:inline-block text-xs font-body font-medium text-mid">
            AZ ROC #363664
          </span>

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
