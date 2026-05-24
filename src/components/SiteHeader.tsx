'use client'

import { useEffect, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

type SiteHeaderProps = {
  homeHref?: string
  trackingPage: string
  ctaLabel?: string
}

function PhoneIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}

export function SiteHeader({
  homeHref = '/cabinet-refinishing',
  trackingPage,
  ctaLabel = 'Get a Quote',
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleEstimateClick() {
    trackEvent('estimate_cta_click', {
      target: 'quote-form',
      page: trackingPage,
      placement: 'site_header',
    })

    const el = document.getElementById('quote-form')
    if (!el) {
      window.location.href = '/cabinet-refinishing#quote-form'
      return
    }

    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex h-16 items-center transition-all duration-200 md:h-[72px] ${
        scrolled
          ? 'border-b border-sand bg-cream/95 shadow-sm backdrop-blur-md'
          : 'border-b border-sand bg-cream'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-content items-center justify-between gap-2 px-4 md:gap-3 md:px-6" aria-label="Primary">
        <a href={homeHref} className="flex min-w-0 flex-1 items-center gap-2.5 md:gap-3" aria-label="Valley Painting Pros cabinet refinishing">
          <span className="relative h-9 w-11 flex-shrink-0 overflow-hidden rounded bg-cream shadow-[inset_0_0_0_1px_rgba(31,26,20,0.12)] md:h-10 md:w-12" aria-hidden="true">
            <img
              src="/logos/svgs/vppmonogramcoloroncream.svg"
              alt=""
              width={1254}
              height={1254}
              className="absolute left-[47%] top-1/2 h-[58px] w-[58px] max-w-none -translate-x-1/2 -translate-y-1/2 md:h-[64px] md:w-[64px]"
              fetchPriority="high"
            />
          </span>

          <span className="flex min-w-0 flex-col justify-center overflow-hidden">
            <span className="truncate font-display text-[11px] uppercase leading-none tracking-[0.01em] text-ink min-[390px]:text-[12px] sm:text-xl md:text-2xl">
              Valley Painting Pros
            </span>
            <span className="mt-1 hidden font-body text-[8px] font-semibold uppercase leading-tight tracking-[0.12em] text-mid sm:block sm:text-[10px] sm:tracking-[0.18em]">
              <span className="hidden sm:inline">Cabinet refinishing | </span>AZ ROC #363664
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-3 sm:flex md:gap-4">
          <a
            href="tel:+14804332680"
            className="hidden items-center gap-1.5 font-body text-sm font-medium text-brown transition-colors hover:text-terra sm:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            (480) 433-2680
          </a>
          <button
            type="button"
            onClick={handleEstimateClick}
            aria-label="Get a cabinet quote"
            className="flex-shrink-0 whitespace-nowrap rounded-lg bg-terra px-3 py-2 font-body text-xs font-semibold text-white transition-colors hover:bg-terra-dark md:px-4 md:text-[13px]"
          >
            <span className="hidden min-[390px]:inline">{ctaLabel}</span>
            <span className="min-[390px]:hidden">Quote</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
