'use client'

export function StickyMobileCTA() {
  return (
    <>
      {/* Desktop bottom bar */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-terra shadow-[0_-4px_20px_rgba(0,0,0,0.15)] h-16 flex items-center">
          <div className="mx-auto max-w-content w-full px-6 flex items-center justify-between">
            <p className="font-display italic text-lg text-cream">
              Ready to love your kitchen again?
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('quote-form')
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80
                    window.scrollTo({ top, behavior: 'smooth' })
                  }
                }}
                className="bg-ink text-white font-body font-semibold text-sm px-5 h-10 rounded-xl hover:bg-ink/90 transition-colors"
              >
                Get Your Quote
              </button>
              <a
                href="tel:+14804332680"
                className="text-cream font-body text-sm underline underline-offset-2 flex items-center gap-1.5 hover:text-white transition-colors"
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
              Transform Your Kitchen — Call Now
            </span>
            <span className="font-body font-light text-[11px] text-cream/80">
              Tap to call us directly
            </span>
          </div>
        </a>
      </div>
    </>
  )
}
