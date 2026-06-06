'use client'

import { type ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

type StickyMobileCTAProps = {
  trackingPage?: string
  desktopBlurb?: string
  desktopCtaLabel?: string
  mobileLabel?: string
  mobileSubline?: ReactNode
}

export function StickyMobileCTA({
  trackingPage = 'cabinet_refinishing',
  desktopBlurb = 'Cabinet refinishing quotes are fixed in writing before work begins.',
  desktopCtaLabel = 'Get Your Quote',
  mobileLabel = 'Call for a Cabinet Quote',
  mobileSubline = 'AZ ROC #363664 | 5-year warranty',
}: StickyMobileCTAProps) {
  return (
    <>
      {/* Desktop bottom bar */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-ink/95 shadow-[0_-4px_20px_rgba(0,0,0,0.16)] h-16 flex items-center backdrop-blur-md border-t border-sand/10">
          <div className="mx-auto max-w-content w-full px-6 flex items-center justify-between">
            <p className="font-body font-medium text-sm text-sand">
              {desktopBlurb}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  trackEvent('estimate_cta_click', {
                    page: trackingPage,
                    placement: 'desktop_sticky_bar',
                  })
                  const el = document.getElementById('quote-form')
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80
                    window.scrollTo({ top, behavior: 'smooth' })
                  }
                }}
                className="bg-terra text-white font-body font-semibold text-sm px-5 h-10 rounded-lg hover:bg-terra-dark transition-colors"
              >
                {desktopCtaLabel}
              </button>
              <a
                href="tel:+14804332680"
                className="text-sand font-body text-sm underline underline-offset-2 flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                (480) 433-2680
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <a
          href="tel:+14804332680"
          className="block bg-terra shadow-[0_-4px_20px_rgba(0,0,0,0.15)] h-16"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <span className="font-body font-semibold text-[15px] text-white">
              {mobileLabel}
            </span>
            <span className="font-body font-light text-[11px] text-cream/80">
              {mobileSubline}
            </span>
          </div>
        </a>
      </div>
    </>
  )
}
