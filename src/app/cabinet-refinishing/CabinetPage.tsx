'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider'
import { Footer } from '@/components/Footer'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'

/* ───────── ANIMATION HOOK ───────── */

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function RevealSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={className}
      data-reveal={isVisible ? 'true' : ''}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ───────── ICONS ───────── */

function PhoneIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}

function StarIcon({ className = 'w-5 h-5 text-terra' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0 shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FAF7F4" strokeWidth={3} className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  )
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C4613A" strokeWidth={2} className="w-16 h-16 mx-auto" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#7A6558" strokeWidth={1.5} className="w-12 h-12" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
  )
}

function BrandName({ className = '' }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-display">Valley Painting </span>
      <span className="font-display italic text-terra">Pros</span>
    </span>
  )
}

/* ───────── SMOOTH SCROLL ───────── */

function smoothScrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 80
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

/* ───────── 1. STICKY NAV ───────── */

function StickyNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] flex items-center transition-all duration-200 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-sand'
          : 'bg-cream border-b border-sand'
      }`}
    >
      <div className="mx-auto max-w-content w-full px-4 md:px-6 flex items-center justify-between">
        {/* Compact Horizontal Logo */}
        <div className="flex items-center gap-3">
          {/* VP Monogram Mark */}
          <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0">
            <rect x="1" y="1" width="62" height="62" rx="4" stroke="#C4B9AF" strokeWidth="1.5"/>
            <text x="32" y="44" textAnchor="middle" fontFamily="'DM Serif Display', Georgia, serif" fontSize="32" fontWeight="400" fill="#1E1C1A">V</text>
            <text x="32" y="44" textAnchor="middle" fontFamily="'DM Serif Display', Georgia, serif" fontSize="32" fontWeight="400" fontStyle="italic" fill="#C4613A" dx="14">P</text>
            <line x1="12" y1="52" x2="52" y2="52" stroke="#C4613A" strokeWidth="2"/>
          </svg>

          {/* Vertical Divider */}
          <div className="w-px h-8 bg-terra/40" />

          {/* Wordmark + Credential */}
          <div className="flex flex-col justify-center">
            <span className="text-xl md:text-2xl leading-tight">
              <span className="font-display">Valley Painting </span>
              <span className="font-display italic text-terra">Pros</span>
            </span>
            <span className="text-[10px] font-body font-medium uppercase tracking-wider text-mid leading-tight">
              AZ ROC #363664
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="tel:+14804332680"
            className="hidden sm:flex items-center gap-1.5 font-body font-medium text-sm text-brown hover:text-terra transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            (480) 433-2680
          </a>
          <button
            onClick={() => smoothScrollTo('quote-form')}
            className="bg-terra text-white font-body font-semibold text-xs md:text-[13px] px-4 py-2 rounded-xl hover:bg-terra-dark transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  )
}

/* ───────── 2. HERO ───────── */

function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-cream pt-[72px] md:pt-[80px]">
      <div className="mx-auto max-w-content px-6 pb-16 md:pb-24 min-h-[75vh] md:min-h-[85vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-10 md:gap-12 items-center w-full">
          {/* Left column — copy */}
          <div>
            <p
              className="font-body font-semibold text-[11px] tracking-[0.22em] uppercase text-terra mb-4"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms ease 300ms, transform 600ms ease 300ms',
              }}
            >
              East Valley&apos;s Cabinet Refinishing Specialists
            </p>

            <h1
              className="font-display text-ink text-[34px] md:text-[52px] leading-[1.15] mb-5"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms ease 400ms, transform 600ms ease 400ms',
              }}
            >
              Same Cabinets.<br />Completely Different Kitchen.
            </h1>

            <p
              className="font-body text-brown text-base md:text-[19px] leading-[1.7] max-w-[520px] mb-7"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms ease 600ms, transform 600ms ease 600ms',
              }}
            >
              Still walking past cabinets you don&apos;t love? Your kitchen should feel like yours — not the last owner&apos;s taste. We refinish your existing cabinets in 3–5 days, for a fraction of what a remodel costs.
            </p>

            <div
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms ease 800ms, transform 600ms ease 800ms',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-5">
                <button
                  onClick={() => smoothScrollTo('quote-form')}
                  className="btn-primary text-base h-14 px-8 shadow-lg"
                >
                  Get Your Cabinet Quote
                </button>
                <a
                  href="tel:+14804332680"
                  className="font-body font-medium text-sm text-terra underline underline-offset-4 hover:text-terra-dark transition-colors pt-2 sm:pt-4"
                >
                  or call (480) 433-2680
                </a>
              </div>

              <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3 list-none p-0">
                {[
                  { label: 'Licensed, Bonded & Insured', kind: 'check' as const },
                  { label: '5-Star Rated', kind: 'stars' as const },
                  { label: '5-Year Warranty', kind: 'check' as const },
                ].map((item) => (
                  <li key={item.label} className="inline-flex items-center gap-1.5">
                    {item.kind === 'stars' ? (
                      <span className="inline-flex items-center flex-shrink-0" aria-label="5 out of 5 stars">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} viewBox="0 0 20 20" fill="#E8A33D" className="w-[13px] h-[13px]" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-sage flex-shrink-0">
                        <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none" stroke="#FAF7F4" strokeWidth={2.5} aria-hidden="true">
                          <path d="M2.5 6.5L5 9l4.5-5.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                    <span className="font-body font-semibold text-[13px] md:text-sm text-brown tracking-tight">{item.label}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body italic text-[13px] text-terra">
                We take 4–6 cabinet projects per month to maintain our quality standard.
              </p>
            </div>
          </div>

          {/* Right column — image area */}
          <div
            className="relative"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 600ms ease 600ms, transform 600ms ease 600ms',
            }}
          >
            {/* Poster fallback — shown on mobile (saves data) and when reduced-motion is preferred. Also acts as <video> poster. */}
            <Image
              src="/images/cabinet-hero-poster.jpg"
              alt="Refinished kitchen by Valley Painting Pros — gray cabinets with white range under skylight"
              width={720}
              height={960}
              className="rounded-2xl shadow-sm border-l-[3px] border-terra object-cover w-full h-auto block motion-safe:md:hidden"
              priority
            />
            {/* Desktop video — autoplay-loop on md+ when motion is allowed */}
            <video
              className="rounded-2xl shadow-sm border-l-[3px] border-terra object-cover w-full h-auto hidden motion-safe:md:block"
              poster="/images/cabinet-hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src="/videos/cabinet-hero.webm" type="video/webm" />
              <source src="/videos/cabinet-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 3. SOCIAL PROOF BAR ───────── */

function SocialProofBar() {
  return (
    <section className="bg-sand border-y border-rule">
      <div className="mx-auto max-w-content px-4 py-6 md:py-7">
        <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-5">

          {/* 5.0 Google Reviews — gold stars */}
          <div className="flex items-center gap-2.5">
            <span className="flex gap-[2px]" aria-label="5.0 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="#E8A33D" className="w-[20px] h-[20px]" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
              ))}
            </span>
            <div className="text-left leading-tight">
              <div className="font-body font-bold text-[15px] text-ink">5.0 Rating</div>
              <div className="font-body text-[12px] text-brown">Google Reviews</div>
            </div>
          </div>

          {/* BBB Standing Trust Seal — official live-linked seal from BBB CDN.
              Must be served from BBB's own URL so consumers can verify accreditation is current. */}
          <a
            href="https://www.bbb.org/us/az/mesa/profile/painting-contractors/valley-painting-pros-llc-1126-1000156113/#sealclick"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center transition-opacity hover:opacity-85"
            aria-label="Verify Valley Painting Pros BBB Accreditation — opens BBB Business Profile in new tab"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-250-52-whitetxt-bbb-1000156113.png"
              alt="Valley Painting Pros LLC BBB Business Review"
              width={250}
              height={52}
              style={{ border: 0 }}
              className="h-[52px] w-auto"
            />
          </a>

          {/* AZ ROC — official seal + license number */}
          <div className="flex items-center gap-2.5">
            <picture>
              <source srcSet="/images/badge-az-roc.webp" type="image/webp" />
              <Image
                src="/images/badge-az-roc.png"
                alt="Arizona Registrar of Contractors — Licensed since 1931"
                width={48}
                height={48}
                className="w-12 h-12 flex-shrink-0"
                unoptimized
              />
            </picture>
            <div className="text-left leading-tight">
              <div className="font-body font-bold text-[15px] text-ink">AZ ROC Licensed</div>
              <div className="font-body text-[12px] text-brown">#363664</div>
            </div>
          </div>

          {/* BBB Torch Awards Nominee — custom badge */}
          <div className="flex items-center gap-2.5">
            <span
              className="w-12 h-12 rounded-full bg-terra flex items-center justify-center flex-shrink-0 shadow-sm"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                {/* Outer flame — gold */}
                <path
                  d="M12 2.2c-1.6 2.4-4.2 4-3.4 7.6.3 1.6 1.6 2.7 3.4 2.5 1.8.2 3.1-.9 3.4-2.5C16.2 6.2 13.6 4.6 12 2.2z"
                  fill="#E8A33D"
                />
                {/* Inner flame highlight — cream */}
                <path
                  d="M12 5.4c-.9 1.4-2.1 2.6-1.5 4.4.2.7.9 1.2 1.5 1.1.6.1 1.3-.4 1.5-1.1.6-1.8-.6-3-1.5-4.4z"
                  fill="#FAF7F4"
                />
                {/* Bowl */}
                <rect x="8.5" y="12.4" width="7" height="2.4" rx="0.6" fill="#FAF7F4" />
                {/* Handle */}
                <rect x="10.5" y="14.8" width="3" height="6.4" rx="0.5" fill="#FAF7F4" />
              </svg>
            </span>
            <div className="text-left leading-tight">
              <div className="font-body font-bold text-[15px] text-ink">Torch Awards</div>
              <div className="font-body text-[12px] text-brown">Nominee for Ethics</div>
            </div>
          </div>

        </div>

        <p className="mt-5 text-center font-body font-medium text-[12px] tracking-wide uppercase text-mid">
          Licensed · Bonded · Insured
        </p>
      </div>
    </section>
  )
}

/* ───────── 4. HOW IT WORKS ───────── */

function HowItWorks() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="text-center mb-14">
          <p className="font-body font-semibold text-[11px] tracking-[0.22em] uppercase text-terra mb-3">
            How It Works
          </p>
          <h2 className="font-display text-ink text-[28px] md:text-[38px] leading-[1.2]">
            Three Steps to a Kitchen You Love
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
          {/* Connecting lines on desktop */}
          <div className="hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px] border-t-2 border-dashed border-rule" />

          {[
            {
              num: 1,
              title: 'Your Consultation',
              desc: 'We walk your kitchen, take measurements, and build a detailed quote — typically same day. No pressure. No sales pitch.',
            },
            {
              num: 2,
              title: 'We Refinish',
              desc: 'Our crew removes every door, preps meticulously, applies a professional 3-coat system, installs new soft-close hinges, and puts everything back — in 3–5 days.',
            },
            {
              num: 3,
              title: 'Love Your Kitchen',
              desc: 'Walk into a kitchen that finally feels like yours. Protected by a 5-year written warranty and backed by a team that answers when you call.',
            },
          ].map((step, i) => (
            <RevealSection key={step.num} delay={i * 100} className="text-center relative z-10">
              <div className="w-14 h-14 rounded-full bg-terra text-white font-body font-bold text-2xl flex items-center justify-center mx-auto mb-5">
                {step.num}
              </div>
              <h3 className="font-display text-ink text-[22px] mb-3">{step.title}</h3>
              <p className="font-body text-brown text-[15px] leading-[1.7] max-w-sm mx-auto">
                {step.desc}
              </p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 5. WHAT'S INCLUDED ───────── */

function WhatsIncluded() {
  const items = [
    { title: 'Professional-grade primer, paint & topcoat', benefit: 'So the finish lasts years without yellowing or chipping' },
    { title: 'New soft-close hinges sourced & installed', benefit: 'So you never hear a cabinet slam again' },
    { title: 'Hardware audit & installation', benefit: 'Misaligned holes filled, re-drilled to the correct position — every handle sits perfectly straight' },
    { title: 'Full deep clean including cabinet tops', benefit: 'You get your kitchen back spotless, not dusty' },
    { title: 'Felt pads on every door and drawer', benefit: 'Protects your new finish from sticking or rubbing — quiet, clean contact every time you open and close' },
    { title: 'Fully contained workspace', benefit: 'We tackle your base cabinets first and get your kitchen back in about 2 days — not the full 3–5 day project timeline.' },
    { title: '3–5 day turnaround for most kitchens', benefit: 'Your life isn\u2019t disrupted for weeks — we\u2019re in and out' },
    { title: '5-year warranty provided in writing', benefit: 'Real protection delivered at job completion, not a verbal promise' },
    { title: 'Fixed price confirmed before work begins', benefit: 'Zero surprises on your invoice — the quote is the price' },
    { title: 'Important cabinet labels preserved', benefit: 'Emergency contacts, warranty info — removed, reprinted clean, reapplied. Nothing gets lost' },
  ]

  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="text-center mb-14">
          <p className="font-body font-semibold text-[11px] tracking-[0.22em] uppercase text-terra mb-3">
            Everything Included
          </p>
          <h2 className="font-display text-ink text-[28px] md:text-[38px] leading-[1.2] mb-3">
            This Is What&apos;s Included in Your Quote
          </h2>
          <p className="font-body text-brown text-base max-w-xl mx-auto">
            Every item below is included in your quoted price. No add-ons. No surprises.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <RevealSection key={i} delay={i * 80} className="flex items-start gap-4">
              <CheckCircleIcon />
              <div>
                <p className="font-body font-medium text-ink text-base">{item.title}</p>
                <p className="font-body text-brown text-sm mt-1">{item.benefit}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 6. THE GUARANTEE ───────── */

function Guarantee() {
  return (
    <section className="bg-cream py-16">
      <RevealSection className="mx-auto max-w-3xl px-6">
        <div className="bg-sand-light rounded-2xl p-8 md:p-10 text-center border-t-[3px] border-terra">
          <ShieldIcon />
          <h2 className="font-display text-ink text-[28px] md:text-[32px] mt-5 mb-4">
            Our 5-Year Written Warranty
          </h2>
          <p className="font-body text-brown text-base max-w-xl mx-auto mb-5 leading-[1.7]">
            Every cabinet refinishing job comes with a written warranty delivered at job completion — not a verbal promise. If the finish fails under normal use within 5 years, we come back and make it right. No fine print. No runaround.
          </p>
          <p className="font-body font-medium text-sm text-terra">
            AZ ROC #363664 · Licensed, Bonded &amp; Insured · Your protection is backed by a licensed contractor, not a handyman.
          </p>
        </div>
      </RevealSection>
    </section>
  )
}

/* ───────── 7. COMPARISON CARDS ───────── */

function ComparisonCards() {
  return (
    <section className="bg-sand py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="text-center mb-14">
          <p className="font-body font-semibold text-[11px] tracking-[0.22em] uppercase text-terra mb-3">
            Compare Your Options
          </p>
          <h2 className="font-display text-ink text-[28px] md:text-[38px] leading-[1.2] mb-3">
            The Math Speaks for Itself
          </h2>
          <p className="font-body text-brown text-lg">
            Same cabinets. Same layout. Completely different kitchen.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Card 1 — DIY */}
          <RevealSection delay={0}>
            <div className="bg-sand-light rounded-xl p-8 border-t-[3px] border-rule h-full">
              <p className="font-body font-semibold text-base text-mid mb-2">DIY Paint Kit</p>
              <p className="font-body text-[28px] text-mid mb-5">$200–$500</p>
              <ul className="space-y-3 mb-6">
                {[
                  'No primer system — peels within months',
                  'Brush marks and drips visible',
                  'No warranty',
                  'Your entire weekend gone',
                  'Hardware damage from overtightening',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-mid">
                    <span className="text-rule font-bold mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-body italic text-[13px] text-rule">&ldquo;The YouTube Special&rdquo;</p>
            </div>
          </RevealSection>

          {/* Card 2 — VPP (winner) */}
          <RevealSection delay={100}>
            <div className="bg-cream rounded-xl p-8 ring-2 ring-sage/30 shadow-xl md:scale-[1.03] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage text-white font-body font-semibold text-[11px] tracking-[0.15em] uppercase rounded-full px-4 py-1">
                Recommended
              </span>
              <p className="font-body font-semibold text-base text-ink mb-2 mt-2">VPP Cabinet Refinishing</p>
              <p className="font-display text-[32px] text-terra mb-1">Custom quote</p>
              <p className="font-body font-medium text-[13px] text-brown mb-5">Free in-home estimate — every kitchen is different, so your quote is based on exactly what you have.</p>
              <ul className="space-y-3 mb-6">
                {[
                  'Professional 3-coat system that lasts years',
                  'New soft-close hinges included',
                  '5-year written warranty',
                  'Done in 3–5 days',
                  'Kitchen bases done in 2 days — your kitchen is back before the job is finished',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-brown">
                    <span className="text-sage text-lg font-bold mt-[-2px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => smoothScrollTo('quote-form')}
                className="w-full btn-primary"
              >
                Get Your Quote
              </button>
            </div>
          </RevealSection>

          {/* Card 3 — Full Remodel */}
          <RevealSection delay={200}>
            <div className="bg-sand rounded-xl p-8 border-t-[3px] border-rule h-full">
              <p className="font-body font-semibold text-base text-mid mb-2">Full Kitchen Remodel</p>
              <p className="font-body text-[28px] text-mid line-through decoration-rule mb-5">$30,000+</p>
              <ul className="space-y-3 mb-6">
                {[
                  '4–8 week timeline',
                  'Kitchen completely unusable',
                  'Permits and contractor coordination',
                  'Demolition, dust, and waste disposal',
                  'Living around a construction zone',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-mid">
                    <span className="text-rule font-bold mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-body italic text-[13px] text-rule">&ldquo;When you want an entirely new layout&rdquo;</p>
            </div>
          </RevealSection>
        </div>

        {/* Below-cards testimonial */}
        <RevealSection delay={300} className="text-center mt-10">
          <p className="font-accent italic text-lg text-brown">
            &ldquo;My gorgeous kitchen cabinets!&rdquo;
          </p>
          <p className="font-body font-medium text-sm text-mid mt-2 flex items-center justify-center gap-1">
            — Rita S. · Google{' '}
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 text-terra" />
              ))}
            </span>
          </p>
        </RevealSection>
      </div>
    </section>
  )
}

/* ───────── 8. BEFORE / AFTER ───────── */

function BeforeAfter() {
  return (
    <section className="bg-sand-light py-20">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="text-center mb-10">
          <h2 className="font-display text-ink text-[28px] md:text-[32px]">See the Difference</h2>
        </RevealSection>

        <RevealSection>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg relative">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="/images/cabinet-hero-before.png"
                  alt="Kitchen cabinets before refinishing by Valley Painting Pros"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="/images/cabinet-hero-after.jpg"
                  alt="Kitchen cabinets after refinishing by Valley Painting Pros"
                />
              }
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    backgroundColor: '#C4613A',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  }}
                  linesStyle={{ color: '#C4613A' }}
                />
              }
            />
            <span className="absolute top-4 left-4 bg-ink/70 text-white font-body font-semibold text-xs px-3 py-1 rounded-full pointer-events-none">
              Before
            </span>
            <span className="absolute top-4 right-4 bg-ink/70 text-white font-body font-semibold text-xs px-3 py-1 rounded-full pointer-events-none">
              After
            </span>
          </div>
          <p className="font-body text-brown text-sm text-center mt-4 italic">
            Same cabinets. Same kitchen. Completely different feel.
          </p>
        </RevealSection>

        {/* Gallery grid */}
        <RevealSection className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                src="/images/cabinet-ushaped-swirl-granite.png"
                alt="U-shaped kitchen with white cabinets and swirl granite countertops"
                width={1024}
                height={1536}
                className="rounded-xl shadow-sm object-cover w-full h-auto"
              />
              <p className="font-body text-xs text-mid mt-2 text-center">White cabinets with swirl granite countertops</p>
            </div>
            <div>
              <Image
                src="/images/cabinet-shaker-evening.png"
                alt="White shaker cabinets with travertine backsplash and granite countertops"
                width={1536}
                height={1024}
                className="rounded-xl shadow-sm object-cover w-full h-auto"
              />
              <p className="font-body text-xs text-mid mt-2 text-center">White shaker cabinets with travertine backsplash</p>
            </div>
            <div>
              <Image
                src="/images/cabinet-white-granite-backsplash.png"
                alt="White cabinets with mosaic backsplash and stainless range hood"
                width={1536}
                height={1024}
                className="rounded-xl shadow-sm object-cover w-full h-auto"
              />
              <p className="font-body text-xs text-mid mt-2 text-center">White cabinets with mosaic backsplash</p>
            </div>
            <div>
              <Image
                src="/images/cabinet-bathroom-vanity.png"
                alt="Refinished white bathroom double vanity with marble countertop"
                width={1024}
                height={1536}
                className="rounded-xl shadow-sm object-cover w-full h-auto"
              />
              <p className="font-body text-xs text-mid mt-2 text-center">Refinished bathroom double vanity</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

/* ───────── 9. REVIEWS ───────── */

function Reviews() {
  const condensedReviews = [
    { name: 'Robin C.', quote: '', service: 'Google Review' },
    { name: 'James D.', quote: '', service: 'Google Review' },
    { name: 'Shannon R.', quote: '', service: 'Google Review' },
    { name: 'Kenneth S.', quote: '', service: 'Google Review' },
    { name: 'Paola', quote: '', service: 'Google Review' },
  ]

  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="text-center mb-14">
          <p className="font-body font-semibold text-[11px] tracking-[0.22em] uppercase text-terra mb-3">
            What Homeowners Say
          </p>
          <h2 className="font-display text-ink text-[28px] md:text-[38px] leading-[1.2]">
            All 5 Stars. Zero Exceptions.
          </h2>
        </RevealSection>

        {/* Featured reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <RevealSection>
            <div className="bg-sand-light rounded-xl p-8 border-l-4 border-sage h-full">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="font-accent italic text-lg text-brown leading-relaxed mb-4">
                &ldquo;Thank you Ricardo for my gorgeous kitchen cabinets! They look beautiful!&rdquo;
              </p>
              <p className="font-body font-medium text-sm text-mid">
                Rita S. · Cabinet Refinishing · Google Review
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="bg-sand-light rounded-xl p-8 border-l-4 border-terra h-full">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="font-accent italic text-lg text-brown leading-relaxed mb-4">
                &ldquo;They were more careful and thorough with their prep than I would have been. They are perfectionists.&rdquo;
              </p>
              <p className="font-body font-medium text-sm text-mid">
                Dustin T. · Cabinet Refinishing · Google Review
              </p>
            </div>
          </RevealSection>
        </div>

        {/* Condensed reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {condensedReviews.map((review, i) => (
            <RevealSection key={i} delay={i * 80}>
              <div className="bg-sand-light rounded-lg p-5">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} className="w-3.5 h-3.5 text-terra" />)}
                </div>
                {review.quote && (
                  <p className="font-body text-sm text-brown mb-2">&ldquo;{review.quote}&rdquo;</p>
                )}
                <p className="font-body text-xs text-mid">{review.name} · {review.service}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection className="text-center">
          <a
            href="https://g.page/r/CX7AG1aNL5PkEBE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
          >
            Read All Reviews on Google
          </a>
        </RevealSection>
      </div>
    </section>
  )
}

/* ───────── 10. FAQ ───────── */

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Will the paint peel or chip?',
      a: 'Not when it\u2019s done right. We use a professional 3-coat system \u2014 bonding primer, two coats of premium cabinet-grade finish, with full degreasing and sanding for adhesion before any paint touches the surface. This is not a DIY kit. Our process is backed by a 5-year written warranty.',
    },
    {
      q: 'How messy is this going to be?',
      a: 'Your kitchen will be out of commission for about 2 days while we work on the base cabinets. We tackle the bases first so you get your kitchen back as fast as possible. Day one we mask everything and begin prep. Day two we seal, prime, and apply two finish coats to the bases \u2014 by end of day or first thing the next morning, the masking comes down and your kitchen is yours again. Meanwhile, we work on your doors and drawers simultaneously on the driveway and in your garage. Everything stays at your home \u2014 we never take your doors offsite. Start to finish, on your property.',
    },
    {
      q: 'Can I pick any color?',
      a: 'Yes. We work with any cabinet-grade paint color you choose. During your consultation, we\u2019ll walk you through options and help you select a finish that matches your kitchen\u2019s lighting, countertops, and style. Most homeowners go lighter \u2014 whites, warm grays, and greiges are the most popular choices in the East Valley right now.',
    },
    {
      q: 'How is this different from what I\u2019d get at Home Depot?',
      a: 'A consumer paint kit gives you one coat of acrylic over whatever\u2019s already on your cabinets. That\u2019s why DIY cabinet paint peels within months \u2014 no primer system, no proper prep, no degreasing. Our process includes full degreasing, mechanical sanding for adhesion, bonding primer, and two coats of professional-grade finish. Plus new soft-close hinges, hardware alignment, and a 5-year warranty. It\u2019s a professional result \u2014 not a weekend experiment.',
    },
    {
      q: 'What if I don\u2019t like the result?',
      a: 'We stand behind our work. If there\u2019s a defect in workmanship \u2014 uneven coverage, drips, adhesion issues, anything that doesn\u2019t meet the professional standard we promised \u2014 we come back and make it right at no charge. That\u2019s covered under your written warranty. Before we start, we confirm your exact color choice and sheen together so there are no surprises. If you want to change colors after the job is complete, we\u2019re happy to do it \u2014 that\u2019s a new project at a new price, not a warranty issue.',
    },
  ]

  return (
    <section className="bg-sand-light py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="text-center mb-14">
          <p className="font-body font-semibold text-[11px] tracking-[0.22em] uppercase text-terra mb-3">
            Common Questions
          </p>
          <h2 className="font-display text-ink text-[28px] md:text-[38px] leading-[1.2]">
            Questions Homeowners Always Ask
          </h2>
        </RevealSection>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <RevealSection key={i} delay={i * 80}>
              <div className="bg-cream rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                >
                  <span className="font-body font-medium text-ink text-base md:text-[17px] pr-4">
                    {faq.q}
                  </span>
                  <span
                    className="text-terra text-2xl flex-shrink-0 transition-transform duration-200"
                    style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-200 ease-in-out"
                  style={{
                    maxHeight: openIndex === i ? '500px' : '0px',
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 font-body text-brown text-[15px] leading-[1.7]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 11. SERVICE AREA MAP ───────── */

function ServiceAreaMap() {
  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="text-center mb-10">
          <h2 className="font-display text-ink text-[28px] md:text-[32px] mb-3">
            Your Neighbors Trust Us
          </h2>
          <p className="font-body font-medium text-lg text-brown mb-3">
            Chandler <span className="text-terra">·</span> Gilbert <span className="text-terra">·</span> Mesa <span className="text-terra">·</span> Queen Creek <span className="text-terra">·</span> Tempe
          </p>
          <p className="font-body text-brown text-base max-w-lg mx-auto">
            Every consultation, every job, every follow-up — handled by our team personally. No call centers. No subcontractors from across town.
          </p>
        </RevealSection>

        <RevealSection className="flex justify-center">
          <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1AhSOOR0VpZ9hKeRr9CbbS3VuMJd6UI8&ehbc=2E312F"
              width="100%"
              height="480"
              style={{ border: 0 }}
              loading="lazy"
              title="Valley Painting Pros service area map"
            />
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

/* ───────── 12. YOUR KITCHEN DESERVES BETTER ───────── */

function EmotionalClose() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-ink text-[28px] md:text-[38px] leading-[1.2] mb-8">
            Your Kitchen Deserves Better Than &ldquo;Good Enough&rdquo;
          </h2>
          <div className="font-body text-brown text-[17px] leading-[1.8] space-y-5 mb-8">
            <p>
              You&apos;ve thought about it every time you walk in. The dark, dated cabinets. The worn-out hardware. The kitchen that looks like someone else&apos;s home.
            </p>
            <p>
              Most homeowners assume the only fix is a $30,000 remodel — ripping everything out, living without a kitchen for weeks, coordinating with contractors who stop returning calls halfway through.
            </p>
            <p>
              There&apos;s a better path. We refinish what you already have — same cabinet boxes, completely different kitchen — in 3–5 days, for a fraction of the cost. We walk your kitchen, answer every question, and build your quote on the spot. No salespeople. No pressure. No middlemen.
            </p>
          </div>
          <p className="font-body font-medium text-sm text-terra mb-8">
            We take 4–6 cabinet projects per month to maintain our quality standard. Spots fill early.
          </p>
          <button
            onClick={() => smoothScrollTo('quote-form')}
            className="btn-primary h-14 text-base"
          >
            Schedule Your Consultation
          </button>
        </RevealSection>
      </div>
    </section>
  )
}

/* ───────── 13. QUOTE FORM ───────── */

function QuoteForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', zip: '', cabinetCount: '', howHeard: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{ name?: string; phone?: string; zip?: string; cabinetCount?: string; howHeard?: string }>({})

  const validate = (data: typeof formData) => {
    const e: { name?: string; phone?: string; zip?: string; cabinetCount?: string; howHeard?: string } = {}
    if (data.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).'
    const digits = data.phone.replace(/\D/g, '')
    if (digits.length < 10) e.phone = 'Please enter a valid phone number (at least 10 digits).'
    if (!/^\d{5}$/.test(data.zip)) e.zip = 'Enter your 5-digit zip code'
    if (!data.cabinetCount) e.cabinetCount = 'Please select an approximate count.'
    if (!data.howHeard) e.howHeard = 'Please let us know how you heard about us.'
    return e
  }

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate(formData)
    setErrors(v)
    if (Object.keys(v).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xaqankry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _source: 'cabinet-refinishing' }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }, [formData])

  return (
    <section id="quote-form" className="bg-ink py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-10 md:gap-12 items-start">
          {/* Left column — text */}
          <RevealSection>
            <h2 className="font-display text-cream text-[28px] md:text-[32px] leading-[1.2] mb-4">
              Ready to Love Your Kitchen?
            </h2>
            <p className="font-body text-sand text-base leading-[1.7] mb-6">
              Fill out the form and we'll reach out — typically within a few hours. Or call anytime.
            </p>
            <a
              href="tel:+14804332680"
              className="font-display text-terra text-2xl md:text-[28px] hover:text-terra-light transition-colors block mb-5"
            >
              (480) 433-2680
            </a>
            <p className="font-body text-[13px] text-mid mb-2">
              ✓ No-obligation consultation · ✓ Same-day quotes · ✓ No pressure
            </p>
            <p className="font-body italic text-sm text-terra mb-6">
              We take 4–6 cabinet projects per month. Scheduling fills early.
            </p>

            {/* Adjacent testimonial */}
            <div className="bg-sand-light/10 rounded-lg p-4">
              <p className="font-accent italic text-base text-sand leading-relaxed mb-2">
                &ldquo;He gave me an accurate quote and showed up exactly on time.&rdquo;
              </p>
              <p className="font-body text-xs text-mid flex items-center gap-1">
                — Kenneth S. · Google{' '}
                <span className="flex">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-3 h-3 text-terra" />)}
                </span>
              </p>
            </div>
          </RevealSection>

          {/* Right column — form */}
          <RevealSection delay={200}>
            <div className="bg-cream rounded-2xl p-6 md:p-8 shadow-2xl">
              {status === 'success' ? (
                /* Success state */
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6B8C6E" strokeWidth={2.5} className="w-6 h-6" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-ink text-2xl mb-3">
                    Thanks — We Got Your Request
                  </h3>
                  <p className="font-body text-brown text-[15px] leading-[1.7] mb-4 max-w-md mx-auto">
                    We&apos;ll reach out within a few hours, usually sooner. Or call us anytime at{' '}
                    <a href="tel:+14804332680" className="text-terra underline underline-offset-2 hover:text-terra-dark">
                      (480) 433-2680
                    </a>.
                  </p>
                  <p className="font-body text-[13px] text-mid">
                    In the meantime, see what other homeowners say about working with us →{' '}
                    <a
                      href="https://g.page/r/CX7AG1aNL5PkEBE/review"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terra underline underline-offset-2 hover:text-terra-dark"
                    >
                      Google Reviews
                    </a>
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <input type="hidden" name="_source" value="cabinet-refinishing" />
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-sm text-ink mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 rounded-lg border border-sand bg-white px-4 font-body text-base text-ink placeholder:text-mid/60 focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent transition-shadow"
                      placeholder="First and last name"
                    />
                    {errors.name && (
                      <p className="font-body text-sm text-terra mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-body font-medium text-sm text-ink mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-12 rounded-lg border border-sand bg-white px-4 font-body text-base text-ink placeholder:text-mid/60 focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent transition-shadow"
                      placeholder="(___) ___-____"
                    />
                    {errors.phone && (
                      <p className="font-body text-sm text-terra mt-1.5">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="zip" className="block font-body font-medium text-sm text-ink mb-1.5">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      id="zip"
                      name="zip"
                      maxLength={5}
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value.replace(/\D/g, '').slice(0, 5) })}
                      className="w-full h-12 rounded-lg border border-sand bg-white px-4 font-body text-base text-ink placeholder:text-mid/60 focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent transition-shadow"
                      placeholder="85249"
                    />
                    {errors.zip && (
                      <p className="font-body text-sm text-terra mt-1.5">{errors.zip}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cabinetCount" className="block font-body font-medium text-sm text-ink mb-1.5">
                      Approximate Cabinet Count
                    </label>
                    <select
                      id="cabinetCount"
                      name="cabinetCount"
                      value={formData.cabinetCount}
                      onChange={(e) => setFormData({ ...formData, cabinetCount: e.target.value })}
                      className="w-full h-12 rounded-lg border border-sand bg-white px-4 font-body text-base text-ink focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent transition-shadow appearance-none"
                    >
                      <option value="">Select approximate count...</option>
                      <option value="Under 20 doors & drawers">Under 20 doors & drawers</option>
                      <option value="20–30 doors & drawers">20–30 doors & drawers</option>
                      <option value="30–40 doors & drawers">30–40 doors & drawers</option>
                      <option value="40+ doors & drawers">40+ doors & drawers</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                    {errors.cabinetCount && (
                      <p className="font-body text-sm text-terra mt-1.5">{errors.cabinetCount}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="howHeard" className="block font-body font-medium text-sm text-ink mb-1.5">
                      How did you hear about us?
                    </label>
                    <select
                      id="howHeard"
                      name="howHeard"
                      value={formData.howHeard}
                      onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                      className="w-full h-12 rounded-lg border border-sand bg-white px-4 font-body text-base text-ink focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent transition-shadow appearance-none"
                    >
                      <option value="">Select one...</option>
                      <option value="Door Hanger">Door Hanger</option>
                      <option value="Neighbor Referral">Neighbor Referral</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Nextdoor">Nextdoor</option>
                      <option value="Drove Past a Job Site">Drove Past a Job Site</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.howHeard && (
                      <p className="font-body text-sm text-terra mt-1.5">{errors.howHeard}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full btn-primary h-14 text-base ${
                      status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Get My Cabinet Quote'
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="font-body text-sm text-terra text-center">
                      Something went wrong. Please call us directly at{' '}
                      <a href="tel:+14804332680" className="underline underline-offset-2">(480) 433-2680</a>.
                    </p>
                  )}

                  <p className="font-body font-light text-xs text-mid text-center">
                    No spam. No call centers. Just our team.
                  </p>
                </form>
              )}
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}

/* ───────── PAGE ───────── */

export default function CabinetPage() {
  return (
    <>
      <StickyNav />
      <Hero />
      <SocialProofBar />
      <HowItWorks />
      <WhatsIncluded />
      <Guarantee />
      <ComparisonCards />
      <BeforeAfter />
      <Reviews />
      <FAQ />
      <ServiceAreaMap />
      <EmotionalClose />
      <QuoteForm />
      <Footer />
      <StickyMobileCTA />
      {/* Bottom padding so sticky CTA doesn't cover footer content */}
      <div className="h-16" aria-hidden="true" />
    </>
  )
}
