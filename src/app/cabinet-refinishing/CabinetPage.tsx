'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
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
    <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C4613A" strokeWidth={2.5} className="w-6 h-6" aria-hidden="true">
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
      className={`fixed top-0 left-0 right-0 z-50 h-14 md:h-16 flex items-center transition-all duration-200 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-sand'
          : 'bg-cream border-b border-sand'
      }`}
    >
      <div className="mx-auto max-w-content w-full px-4 md:px-6 flex items-center justify-between">
        {/* Logo lockup */}
        <div className="flex flex-col">
          <div className="leading-tight">
            <span className="font-display text-ink text-lg md:text-xl">Valley Painting </span>
            <span className="font-display italic text-terra text-lg md:text-xl">Pros</span>
          </div>
          <div className="w-full h-[2px] bg-terra mt-0.5" />
          <span className="font-body font-semibold text-mid uppercase tracking-[0.2em] text-[9px] mt-0.5">
            ROC #363664
          </span>
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
            Get a Free Quote
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
    <section className="bg-cream pt-20 md:pt-24">
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
                  Get Your Free Cabinet Quote
                </button>
                <a
                  href="tel:+14804332680"
                  className="font-body font-medium text-sm text-terra underline underline-offset-4 hover:text-terra-dark transition-colors pt-2 sm:pt-4"
                >
                  or call (480) 433-2680
                </a>
              </div>

              <p className="font-body text-[13px] text-mid mb-2">
                ✓ Licensed &amp; Insured · ✓ 5-Star Rated · ✓ 5-Year Warranty
              </p>
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
            <div className="bg-sand rounded-2xl p-12 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] border-l-[3px] border-terra shadow-sm">
              <CameraIcon />
              <p className="font-body text-sm text-mid mt-4 text-center">
                Real transformation photos coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 3. SOCIAL PROOF BAR ───────── */

function SocialProofBar() {
  return (
    <section className="bg-sand-light">
      <div className="mx-auto max-w-content px-4 py-4 md:py-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
        <span className="font-body font-medium text-xs md:text-[13px] text-mid flex items-center gap-1">
          5.0{' '}
          <span className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-3.5 h-3.5 text-terra" />
            ))}
          </span>{' '}
          Google Reviews
        </span>
        <span className="text-rule">·</span>
        <span className="font-body font-medium text-xs md:text-[13px] text-mid">AZ ROC #363664</span>
        <span className="text-rule">·</span>
        <span className="font-body font-medium text-xs md:text-[13px] text-mid">BBB A+ Rated</span>
        <span className="text-rule">·</span>
        <span className="font-body font-medium text-xs md:text-[13px] text-mid">Torch Awards Nominee</span>
        <span className="text-rule">·</span>
        <span className="font-body font-medium text-xs md:text-[13px] text-mid">Licensed &amp; Insured</span>
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
              title: 'Free Consultation',
              desc: 'Ricardo personally walks your kitchen, takes measurements, and builds a detailed quote — typically same day. No pressure. No sales pitch.',
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
    { title: 'Fully contained workspace', benefit: 'Cook dinner the same night we\u2019re working — zero mess in your living space' },
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
            This Is What $2,250–$4,000 Gets You
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
            AZ ROC #363664 · Licensed &amp; Insured · Your protection is backed by a licensed contractor, not a handyman.
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
              <p className="font-display text-[32px] text-terra mb-1">$2,250–$4,000</p>
              <p className="font-body font-medium text-[13px] text-brown mb-5">$125 per door &amp; drawer</p>
              <ul className="space-y-3 mb-6">
                {[
                  'Professional 3-coat system that lasts years',
                  'New soft-close hinges included',
                  '5-year written warranty',
                  'Done in 3–5 days',
                  'Zero disruption — cook dinner the same night',
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
                Get Your Free Quote
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
            &ldquo;Gorgeous kitchen cabinets.&rdquo;
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
          <div className="bg-sand rounded-2xl p-10 md:p-12 max-w-2xl mx-auto text-center border-l-4 border-terra">
            <CameraIcon />
            <h3 className="font-display text-ink text-xl md:text-2xl mt-4 mb-3">
              Real VPP Transformation Photos
            </h3>
            <p className="font-body text-brown text-[15px] leading-[1.7] max-w-md mx-auto">
              We&apos;re building our portfolio one kitchen at a time. Ask to see our recent work during your free consultation.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

/* ───────── 9. REVIEWS ───────── */

function Reviews() {
  const condensedReviews = [
    { name: 'Kevin S.', quote: 'Did a great job. Highly recommended.', service: 'Interior Painting' },
    { name: 'Mike R.', quote: 'Very professional and detail-oriented.', service: 'Cabinet Refinishing' },
    { name: 'Sarah M.', quote: 'Exceeded our expectations. Beautiful work.', service: 'Interior Painting' },
    { name: 'James L.', quote: 'On time, clean, and the results are perfect.', service: 'Exterior Painting' },
    { name: 'Lisa P.', quote: 'Ricardo was great to work with from start to finish.', service: 'Cabinet Refinishing' },
  ]

  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="text-center mb-14">
          <p className="font-body font-semibold text-[11px] tracking-[0.22em] uppercase text-terra mb-3">
            What Homeowners Say
          </p>
          <h2 className="font-display text-ink text-[28px] md:text-[38px] leading-[1.2]">
            7 Reviews. All 5 Stars. Zero Exceptions.
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
                &ldquo;Gorgeous kitchen cabinets. Ricardo ensures customer satisfaction.&rdquo;
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
                &ldquo;They are perfectionists. More careful and thorough with their prep than I would have been.&rdquo;
              </p>
              <p className="font-body font-medium text-sm text-mid">
                Dustin T. · Interior Painting · Google Review
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
                <p className="font-body text-sm text-brown mb-2">&ldquo;{review.quote}&rdquo;</p>
                <p className="font-body text-xs text-mid">{review.name} · {review.service}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection className="text-center">
          <a
            href="https://g.page/r/CX7AG1aNL5PkEBE/review"
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
      a: 'We do a detailed walkthrough with you at job completion before final payment. If anything isn\u2019t right, we fix it on the spot. After that, your 5-year written warranty covers the finish. We\u2019re a licensed contractor with a perfect 5-star Google review record \u2014 our reputation depends on you being thrilled, not just satisfied.',
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
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="text-center mb-10">
          <h2 className="font-display text-ink text-[28px] md:text-[32px] mb-3">
            Your Neighbors Trust Us
          </h2>
          <p className="font-body font-medium text-lg text-brown mb-3">
            Chandler <span className="text-terra">·</span> Gilbert <span className="text-terra">·</span> Mesa <span className="text-terra">·</span> Tempe
          </p>
          <p className="font-body text-brown text-base max-w-lg mx-auto">
            Every consultation, every job, every follow-up — handled by Ricardo personally. No call centers. No subcontractors from across town.
          </p>
        </RevealSection>

        <RevealSection className="flex justify-center">
          <div className="relative max-w-lg w-full">
            <svg viewBox="0 0 500 400" className="w-full h-auto" role="img" aria-label="Map showing VPP service area: Tempe, Mesa, Chandler, and Gilbert">
              {/* Tempe - upper left */}
              <polygon
                points="30,30 200,30 200,180 100,200 30,180"
                fill={hoveredCity === 'Tempe' ? 'rgba(143,175,146,0.6)' : 'rgba(143,175,146,0.4)'}
                stroke="#C4B9AF"
                strokeWidth="1.5"
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredCity('Tempe')}
                onMouseLeave={() => setHoveredCity(null)}
                style={{ transform: hoveredCity === 'Tempe' ? 'scale(1.01)' : 'scale(1)', transformOrigin: '115px 115px' }}
              />
              <text x="110" y="120" textAnchor="middle" className="font-body font-semibold text-[13px] fill-ink pointer-events-none">Tempe</text>

              {/* Mesa - upper right (largest) */}
              <polygon
                points="210,30 470,30 470,210 350,220 210,200 200,180 200,30"
                fill={hoveredCity === 'Mesa' ? 'rgba(212,130,94,0.5)' : 'rgba(212,130,94,0.3)'}
                stroke="#C4B9AF"
                strokeWidth="1.5"
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredCity('Mesa')}
                onMouseLeave={() => setHoveredCity(null)}
                style={{ transform: hoveredCity === 'Mesa' ? 'scale(1.01)' : 'scale(1)', transformOrigin: '335px 120px' }}
              />
              <text x="335" y="130" textAnchor="middle" className="font-body font-semibold text-[13px] fill-ink pointer-events-none">Mesa</text>

              {/* Chandler - lower left */}
              <polygon
                points="30,190 100,210 200,210 240,230 240,370 30,370"
                fill={hoveredCity === 'Chandler' ? 'rgba(196,97,58,0.5)' : 'rgba(196,97,58,0.3)'}
                stroke="#C4B9AF"
                strokeWidth="1.5"
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredCity('Chandler')}
                onMouseLeave={() => setHoveredCity(null)}
                style={{ transform: hoveredCity === 'Chandler' ? 'scale(1.01)' : 'scale(1)', transformOrigin: '135px 290px' }}
              />
              <text x="135" y="300" textAnchor="middle" className="font-body font-semibold text-[13px] fill-ink pointer-events-none">Chandler</text>

              {/* Gilbert - lower right */}
              <polygon
                points="250,230 350,230 470,220 470,370 250,370"
                fill={hoveredCity === 'Gilbert' ? 'rgba(107,140,110,0.6)' : 'rgba(107,140,110,0.3)'}
                stroke="#C4B9AF"
                strokeWidth="1.5"
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredCity('Gilbert')}
                onMouseLeave={() => setHoveredCity(null)}
                style={{ transform: hoveredCity === 'Gilbert' ? 'scale(1.01)' : 'scale(1)', transformOrigin: '360px 300px' }}
              />
              <text x="360" y="300" textAnchor="middle" className="font-body font-semibold text-[13px] fill-ink pointer-events-none">Gilbert</text>
            </svg>

            {/* Tooltip */}
            {hoveredCity && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-cream text-ink font-body text-sm font-medium px-4 py-2 rounded-lg shadow-md pointer-events-none z-10">
                We serve {hoveredCity}!
              </div>
            )}
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
              There&apos;s a better path. We refinish what you already have — same cabinet boxes, completely different kitchen — in 3–5 days, for a fraction of the cost. Ricardo personally walks through your kitchen, answers every question, and builds your quote. No salespeople. No pressure. No middlemen.
            </p>
          </div>
          <p className="font-body font-medium text-sm text-terra mb-8">
            We take 4–6 cabinet projects per month to maintain our quality standard. Spots fill early.
          </p>
          <button
            onClick={() => smoothScrollTo('quote-form')}
            className="btn-primary h-14 text-base"
          >
            Schedule Your Free Consultation
          </button>
        </RevealSection>
      </div>
    </section>
  )
}

/* ───────── 13. QUOTE FORM ───────── */

function QuoteForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', howHeard: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent('New Cabinet Quote Request')
        const body = encodeURIComponent(
          `Name: ${formData.name}\nPhone: ${formData.phone}\nHow they heard about us: ${formData.howHeard || 'Not specified'}`
        )
        window.location.href = `mailto:valleypaintingprosllc@gmail.com?subject=${subject}&body=${body}`
        setStatus('success')
      }
    } catch {
      // Fallback to mailto
      const subject = encodeURIComponent('New Cabinet Quote Request')
      const body = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nHow they heard about us: ${formData.howHeard || 'Not specified'}`
      )
      window.location.href = `mailto:valleypaintingprosllc@gmail.com?subject=${subject}&body=${body}`
      setStatus('success')
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
              Fill out the form and Ricardo will personally reach out — typically within a few hours. Or call anytime.
            </p>
            <a
              href="tel:+14804332680"
              className="font-display text-terra text-2xl md:text-[28px] hover:text-terra-light transition-colors block mb-5"
            >
              (480) 433-2680
            </a>
            <p className="font-body text-[13px] text-mid mb-2">
              ✓ Free consultation · ✓ Same-day quotes · ✓ No obligations
            </p>
            <p className="font-body italic text-sm text-terra mb-6">
              We take 4–6 cabinet projects per month. Scheduling fills early.
            </p>

            {/* Adjacent testimonial */}
            <div className="bg-sand-light/10 rounded-lg p-4">
              <p className="font-accent italic text-base text-sand leading-relaxed mb-2">
                &ldquo;Accurate quote. Showed up exactly on time.&rdquo;
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
                    Got It — Ricardo Will Call You Soon
                  </h3>
                  <p className="font-body text-brown text-[15px] leading-[1.7] mb-4 max-w-md mx-auto">
                    You&apos;ll hear from Ricardo personally — typically within a few hours during business hours. He&apos;ll walk through your project, answer every question, and if you&apos;d like, schedule a time to see your kitchen in person.
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block font-body font-medium text-sm text-ink mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 rounded-lg border border-sand bg-white px-4 font-body text-base text-ink placeholder:text-mid/60 focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent transition-shadow"
                      placeholder="First and last name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-body font-medium text-sm text-ink mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-12 rounded-lg border border-sand bg-white px-4 font-body text-base text-ink placeholder:text-mid/60 focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent transition-shadow"
                      placeholder="(___) ___-____"
                    />
                  </div>

                  <div>
                    <label htmlFor="howHeard" className="block font-body font-medium text-sm text-ink mb-1.5">
                      How did you hear about us?
                    </label>
                    <select
                      id="howHeard"
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
                      'Get My Free Cabinet Quote'
                    )}
                  </button>

                  <p className="font-body font-light text-xs text-mid text-center">
                    No spam. No call centers. Just Ricardo.
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
