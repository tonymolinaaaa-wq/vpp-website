'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { trackEvent } from '@/lib/analytics'
import { getAllServices } from '@/lib/services'

/* ───────── ANIMATION ───────── */

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

function StarIcon({ className = 'w-4 h-4 text-terra' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
    </svg>
  )
}

function CheckBadge() {
  return (
    <span className="inline-flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-sage" aria-hidden="true">
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#FAF6EC" strokeWidth={2.5}>
        <path d="M2.5 6.5L5 9l4.5-5.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

/* ───────── HELPERS ───────── */

function smoothScrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top, behavior: 'smooth' })
}

const accentText: Record<string, string> = {
  terra: 'text-terra',
  sage: 'text-sage',
  charcoal: 'text-ink',
}
const accentBar: Record<string, string> = {
  terra: 'bg-terra',
  sage: 'bg-sage',
  charcoal: 'bg-ink',
}

/* ───────── HERO ───────── */

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink pt-16 md:pt-[72px]">
      <Image
        src="/images/gallery/suburban-gilbert-kitchen.png"
        alt="East Valley home interior painted by Valley Painting Pros."
        fill
        sizes="100vw"
        className="object-cover object-[72%_center] md:object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/55 md:via-ink/65 md:to-ink/25" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-content items-center px-6 py-12 md:min-h-[82svh] md:py-16">
        <div className="w-full max-w-[680px]">
          <p className="mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-terra-light">
            East Valley Painting · Licensed &amp; Insured
          </p>

          <h1 className="mb-5 max-w-[760px] font-display text-[28px] leading-[1.22] text-cream min-[390px]:text-[31px] sm:text-[38px] sm:leading-[1.15] md:text-[52px]">
            Interior, Exterior &amp; Cabinet Painting — Done Right.
          </h1>

          <p className="mb-7 max-w-[330px] break-words font-body text-base leading-[1.7] text-sand-light md:max-w-[540px] md:text-[19px]">
            Valley Painting Pros is your East Valley painting company for interiors,
            exteriors, and cabinet refinishing. Licensed, bonded, insured, and 5-star
            rated — with fixed quotes in writing and free in-home estimates.
          </p>

          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row">
            <button
              onClick={() => {
                trackEvent('estimate_cta_click', { target: 'quote-form', page: 'home', placement: 'hero' })
                smoothScrollTo('quote-form')
              }}
              className="btn-primary h-14 px-8 text-base shadow-lg"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:+14804332680"
              className="pt-2 font-body text-sm font-medium text-brand-cream-50 underline underline-offset-4 transition-colors hover:text-terra-light sm:pt-4"
            >
              or call (480) 433-2680
            </a>
          </div>

          <ul className="m-0 flex list-none flex-col items-start gap-x-4 gap-y-2 p-0 sm:flex-row sm:flex-wrap sm:items-center">
            {['Licensed, Bonded & Insured', '5.0 on Google', 'AZ ROC #363664'].map((label) => (
              <li key={label} className="inline-flex items-center gap-1.5">
                <CheckBadge />
                <span className="font-body text-[13px] font-semibold tracking-tight text-brand-cream-50 md:text-sm">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ───────── SERVICES ───────── */

function Services({ onPickService }: { onPickService: (tag: string) => void }) {
  const services = getAllServices()

  return (
    <section id="services" className="bg-sand-light py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="mb-14 text-center">
          <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-terra">
            What We Do
          </p>
          <h2 className="font-display text-[28px] leading-[1.2] text-ink md:text-[38px]">
            Three Ways We Transform Your Home
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-base text-brown">
            One licensed crew, one fixed price in writing, whether it&apos;s a single
            room or your whole exterior.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const isLive = service.status === 'live'
            return (
              <RevealSection key={service.slug} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-rule bg-cream p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <span className={`mb-4 block h-1 w-10 rounded-full ${accentBar[service.accent]}`} aria-hidden="true" />
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="font-display text-[22px] leading-tight text-ink">
                      {service.displayName}
                    </h3>
                    {!isLive && (
                      <span className="rounded-full bg-sage/15 px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-sage">
                        Now booking
                      </span>
                    )}
                  </div>
                  <p className="mb-6 flex-1 font-body text-[15px] leading-[1.7] text-brown">
                    {service.cardTagline}
                  </p>
                  {isLive ? (
                    <a
                      href={service.path}
                      onClick={() => trackEvent('service_card_click', { service: service.slug, page: 'home' })}
                      className={`font-body text-sm font-semibold uppercase tracking-[0.16em] ${accentText[service.accent]} hover:opacity-80`}
                    >
                      Explore {service.shortLabel.toLowerCase()} →
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        trackEvent('service_card_click', { service: service.slug, page: 'home', placement: 'quote' })
                        onPickService(service.leadServiceTag)
                        smoothScrollTo('quote-form')
                      }}
                      className={`text-left font-body text-sm font-semibold uppercase tracking-[0.16em] ${accentText[service.accent]} hover:opacity-80`}
                    >
                      Get a quote →
                    </button>
                  )}
                </div>
              </RevealSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ───────── TRUST STRIP (business-level, verifiable) ───────── */

function TrustStrip() {
  return (
    <section className="border-y border-rule bg-sand">
      <div className="mx-auto max-w-content px-6 py-8 md:py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
          <a
            href="https://g.page/r/CX7AG1aNL5PkEBE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-85"
            aria-label="Read all 7 five-star Google reviews — opens Google in a new tab"
          >
            <span className="flex gap-[2px]">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-terra" />)}
            </span>
            <span className="text-left leading-tight">
              <span className="block font-body text-[15px] font-bold text-ink">5.0 Google Rating</span>
              <span className="block font-body text-[12px] text-brown">7 reviews · Verify →</span>
            </span>
          </a>

          <a
            href="https://azroc.my.site.com/AZRoc/s/contractor-search?licenseId=a0ocs00000JC2pVAAT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-85"
            aria-label="Verify AZ ROC #363664 — opens the Arizona Registrar of Contractors in a new tab"
          >
            <picture>
              <source srcSet="/images/badge-az-roc.webp" type="image/webp" />
              <Image src="/images/badge-az-roc.png" alt="Arizona Registrar of Contractors licensed contractor badge" width={44} height={44} className="h-11 w-11" unoptimized />
            </picture>
            <span className="text-left leading-tight">
              <span className="block font-body text-[15px] font-bold text-ink">AZ ROC #363664</span>
              <span className="block font-body text-[12px] text-brown">Bonded · Insured · Verify →</span>
            </span>
          </a>

          <a
            href="https://www.bbb.org/us/az/mesa/profile/painting-contractors/valley-painting-pros-llc-1126-1000156113/#sealclick"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center transition-opacity hover:opacity-85"
            aria-label="Verify Valley Painting Pros BBB Accreditation — opens BBB in a new tab"
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
        </div>
        <p className="mt-5 text-center font-body text-[12px] font-medium uppercase tracking-wide text-mid">
          Licensed · Bonded · $1M / $2M Liability Insured
        </p>
      </div>
    </section>
  )
}

/* ───────── WHY VPP ───────── */

function WhyVPP() {
  const points = [
    { title: 'Licensed, bonded & insured', desc: 'AZ ROC #363664 — verify us in 30 seconds. Real protection, not a handshake.' },
    { title: 'Fixed price, in writing', desc: 'The quote is the price. No surprise charges, no moving numbers once we start.' },
    { title: 'One local crew', desc: 'The same East Valley team from quote to final walkthrough. No call centers, no rotating subs.' },
    { title: 'Daily updates', desc: 'Photos and progress by text while we work, so you always know where things stand.' },
  ]
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="mb-14 text-center">
          <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-terra">
            Why Homeowners Choose Us
          </p>
          <h2 className="font-display text-[28px] leading-[1.2] text-ink md:text-[38px]">
            A Paint Job You Don&apos;t Have to Worry About
          </h2>
        </RevealSection>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {points.map((p, i) => (
            <RevealSection key={p.title} delay={i * 80} className="flex items-start gap-4">
              <CheckBadge />
              <div>
                <p className="font-body text-base font-medium text-ink">{p.title}</p>
                <p className="mt-1 font-body text-sm leading-[1.7] text-brown">{p.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── REVIEWS (business-level) ───────── */

function Reviews() {
  const reviews = [
    { quote: 'They were more careful and thorough with their prep than I would have been. They are perfectionists.', name: 'Dustin T.', city: 'East Valley, AZ' },
    { quote: 'He gave me an accurate quote and showed up exactly on time.', name: 'Kenneth S.', city: 'East Valley, AZ' },
  ]
  return (
    <section className="bg-sand-light py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="mb-12 text-center">
          <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-terra">
            What Homeowners Say
          </p>
          <h2 className="font-display text-[28px] leading-[1.2] text-ink md:text-[38px]">
            5.0 Across Every Google Review
          </h2>
        </RevealSection>
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {reviews.map((r, i) => (
            <RevealSection key={r.name} delay={i * 100}>
              <div className="h-full rounded-xl border-l-4 border-sage bg-cream p-8">
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="mb-4 font-body text-lg italic leading-relaxed text-brown">&ldquo;{r.quote}&rdquo;</p>
                <p className="font-body text-sm font-medium text-mid">{r.name} · {r.city} · Google Review</p>
              </div>
            </RevealSection>
          ))}
        </div>
        <RevealSection className="text-center">
          <a href="https://g.page/r/CX7AG1aNL5PkEBE" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
            Read All Reviews on Google
          </a>
        </RevealSection>
      </div>
    </section>
  )
}

/* ───────── SERVICE AREA ───────── */

function ServiceArea() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <RevealSection className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 font-display text-[26px] text-ink md:text-[32px]">Proudly Serving the East Valley</h2>
          <p className="mb-3 font-body text-lg font-medium text-brown">
            Chandler <span className="text-terra">·</span> Gilbert <span className="text-terra">·</span> Mesa <span className="text-terra">·</span> Queen Creek <span className="text-terra">·</span> Scottsdale <span className="text-terra">·</span> Tempe
          </p>
          <p className="mx-auto max-w-lg font-body text-base text-brown">
            Every consultation, every job, every follow-up — handled by our own crew.
          </p>
        </RevealSection>
      </div>
    </section>
  )
}

/* ───────── LEAD FORM ───────── */

function LeadForm({ service, setService }: { service: string; setService: (v: string) => void }) {
  const [formData, setFormData] = useState({ name: '', phone: '', zip: '', howHeard: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{ name?: string; phone?: string; zip?: string; service?: string; howHeard?: string }>({})

  const validate = () => {
    const e: typeof errors = {}
    if (formData.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).'
    if (formData.phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a valid phone number (at least 10 digits).'
    if (!/^\d{5}$/.test(formData.zip)) e.zip = 'Enter your 5-digit zip code.'
    if (!service) e.service = 'Please pick a service.'
    if (!formData.howHeard) e.howHeard = 'Please let us know how you heard about us.'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length > 0) return

    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xaqankry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, service, _source: 'homepage' }),
      })
      if (res.ok) {
        trackEvent('quote_form_submit', { source: 'homepage', form: 'homepage', service })
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full h-12 rounded-lg border border-sand bg-white px-4 font-body text-base text-ink placeholder:text-mid/60 focus:outline-none focus:ring-2 focus:ring-terra focus:border-transparent transition-shadow'

  return (
    <section id="quote-form" className="bg-ink py-20 md:py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[45%_55%] md:gap-12">
          <RevealSection>
            <h2 className="mb-4 font-display text-[28px] leading-[1.2] text-cream md:text-[32px]">
              Get Your Free Quote
            </h2>
            <p className="mb-6 font-body text-base leading-[1.7] text-sand">
              Tell us what you&apos;re thinking about and we&apos;ll reach out — usually
              within a few hours. Or call anytime.
            </p>
            <a href="tel:+14804332680" className="mb-5 block font-display text-2xl text-terra transition-colors hover:text-terra-light md:text-[28px]">
              (480) 433-2680
            </a>
            <p className="mb-2 font-body text-[13px] text-mid">
              ✓ No-obligation consultation · ✓ Fixed quote in writing · ✓ No pressure
            </p>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="rounded-2xl bg-cream p-6 shadow-2xl md:p-8">
              {status === 'success' ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#7A9577" strokeWidth={2.5} className="h-6 w-6" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="mb-3 font-display text-2xl text-ink">Thanks — We Got Your Request</h3>
                  <p className="mx-auto max-w-md font-body text-[15px] leading-[1.7] text-brown">
                    We&apos;ll reach out within a few hours, usually sooner. Or call us anytime at{' '}
                    <a href="tel:+14804332680" className="text-terra underline underline-offset-2 hover:text-terra-dark">(480) 433-2680</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <input type="hidden" name="_source" value="homepage" />
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-body text-sm font-medium text-ink">Your Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={fieldClass} placeholder="First and last name" />
                    {errors.name && <p className="mt-1.5 font-body text-sm text-terra">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block font-body text-sm font-medium text-ink">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={fieldClass} placeholder="(___) ___-____" />
                    {errors.phone && <p className="mt-1.5 font-body text-sm text-terra">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="zip" className="mb-1.5 block font-body text-sm font-medium text-ink">Zip Code</label>
                    <input type="text" inputMode="numeric" id="zip" name="zip" maxLength={5} value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value.replace(/\D/g, '').slice(0, 5) })} className={fieldClass} placeholder="85249" />
                    {errors.zip && <p className="mt-1.5 font-body text-sm text-terra">{errors.zip}</p>}
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block font-body text-sm font-medium text-ink">What do you need?</label>
                    <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} className={`${fieldClass} appearance-none`}>
                      <option value="">Select a service...</option>
                      <option value="interior painting">Interior Painting</option>
                      <option value="exterior painting">Exterior Painting</option>
                      <option value="cabinet refinishing">Cabinet Refinishing</option>
                      <option value="multiple / not sure">Multiple / Not sure yet</option>
                    </select>
                    {errors.service && <p className="mt-1.5 font-body text-sm text-terra">{errors.service}</p>}
                  </div>
                  <div>
                    <label htmlFor="howHeard" className="mb-1.5 block font-body text-sm font-medium text-ink">How did you hear about us?</label>
                    <select id="howHeard" name="howHeard" value={formData.howHeard} onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })} className={`${fieldClass} appearance-none`}>
                      <option value="">Select one...</option>
                      <option value="Door Hanger">Door Hanger</option>
                      <option value="Neighbor Referral">Neighbor Referral</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Nextdoor">Nextdoor</option>
                      <option value="Drove Past a Job Site">Drove Past a Job Site</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.howHeard && <p className="mt-1.5 font-body text-sm text-terra">{errors.howHeard}</p>}
                  </div>
                  <button type="submit" disabled={status === 'sending'} className={`btn-primary h-14 w-full text-base ${status === 'sending' ? 'cursor-not-allowed opacity-70' : ''}`}>
                    {status === 'sending' ? 'Sending...' : 'Get My Free Quote'}
                  </button>
                  {status === 'error' && (
                    <p className="text-center font-body text-sm text-terra">
                      Something went wrong. Please call us directly at{' '}
                      <a href="tel:+14804332680" className="underline underline-offset-2">(480) 433-2680</a>.
                    </p>
                  )}
                  <p className="text-center font-body text-xs font-light text-mid">No spam. No call centers. Just our team.</p>
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

export default function HomePage() {
  const [service, setService] = useState('')

  return (
    <>
      <SiteHeader
        homeHref="#top"
        trackingPage="home"
        ctaLabel="Get a Quote"
        quoteHref="/#quote-form"
        subtitle={<>Interior · Exterior · Cabinets</>}
      />
      <Hero />
      <Services onPickService={setService} />
      <TrustStrip />
      <WhyVPP />
      <Reviews />
      <ServiceArea />
      <LeadForm service={service} setService={setService} />
      <Footer />
      <StickyMobileCTA
        trackingPage="home"
        desktopBlurb="Free in-home quotes across the East Valley."
        desktopCtaLabel="Get a Quote"
        mobileLabel="Call for a Free Quote"
        mobileSubline="AZ ROC #363664 | Licensed & insured"
      />
      <div className="h-16" aria-hidden="true" />
    </>
  )
}
