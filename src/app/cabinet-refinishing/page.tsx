import type { Metadata } from 'next'
import { BrandName } from '@/components/BrandName'
import { Footer } from '@/components/Footer'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Cabinet Refinishing Chandler AZ | Valley Painting Pros',
  description:
    'Professional cabinet refinishing starting at $2,250. Same cabinets, stunning new finish in 3–5 days. AZ ROC #363664. Serving Chandler, Gilbert, Mesa & Tempe.',
}

/* ─────────────── ICONS (inline SVGs to avoid dependencies) ─────────────── */

function PhoneIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-terra" aria-hidden="true">
      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
    </svg>
  )
}

/* ─────────────── SECTION COMPONENTS ─────────────── */

function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-content px-6 pt-12 pb-16 md:pt-20 md:pb-24 text-center">
        {/* Trust bar */}
        <p className="mb-6 text-sm font-body font-medium text-mid uppercase tracking-widest">
          AZ ROC #363664 · Licensed, Bonded &amp; Insured
        </p>

        <h1 className="font-display text-ink text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
          Your Kitchen. Refreshed.
          <br />
          <span className="text-terra">Starting at $2,250.</span>
        </h1>

        <p className="font-body text-brown text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Licensed cabinet refinishing for East Valley homeowners. Same
          cabinets. Stunning new finish. Done in 3–5 days.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+14804332680" className="btn-primary text-base px-8 py-4">
            <PhoneIcon className="w-5 h-5 mr-2" />
            Get Your Complimentary Cabinet Consultation
          </a>
          <a href="#gallery" className="btn-secondary text-base px-8 py-4">
            See Our Work
          </a>
        </div>
      </div>
    </section>
  )
}

function ValueProposition() {
  return (
    <section className="bg-sand-light">
      <div className="mx-auto max-w-content px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-ink text-3xl md:text-4xl mb-6">
            Same Layout. Same Cabinets.
            <br />
            <span className="text-terra">Completely Different Kitchen.</span>
          </h2>

          <p className="font-body text-brown text-lg leading-relaxed mb-10">
            A full kitchen remodel runs $30,000 or more — and takes weeks of
            demolition, dust, and disruption. Cabinet refinishing delivers a
            stunning transformation for a fraction of the cost, with zero
            demolition and your kitchen back in 3–5 business days.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Cabinet Refinishing',
                value: '~$3K',
                detail: '3–5 days, no demolition',
                highlight: true,
              },
              {
                label: 'Cabinet Refacing',
                value: '~$10K',
                detail: '1–2 weeks, partial demo',
                highlight: false,
              },
              {
                label: 'Full Remodel',
                value: '$30K+',
                detail: '4–8 weeks, full demolition',
                highlight: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl p-6 ${
                  item.highlight
                    ? 'bg-white border-2 border-terra shadow-md'
                    : 'bg-sand border border-rule'
                }`}
              >
                <p className="font-body text-sm font-medium text-mid uppercase tracking-wide mb-2">
                  {item.label}
                </p>
                <p
                  className={`font-display text-3xl ${
                    item.highlight ? 'text-terra' : 'text-ink'
                  }`}
                >
                  {item.value}
                </p>
                <p className="font-body text-sm text-mid mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    {
      number: '01',
      title: 'Complimentary Consultation & Color Selection',
      description:
        'I visit your home, assess your cabinets, and help you choose the perfect finish from hundreds of premium color options.',
    },
    {
      number: '02',
      title: 'Door Removal & Systematic Labeling',
      description:
        'Every door and drawer front is carefully removed and labeled so each piece returns to its exact original position.',
    },
    {
      number: '03',
      title: 'Professional Prep — Degreasing, Sanding, Priming',
      description:
        'Thorough degreasing, scuff-sanding, and premium primer application. This prep work is what separates a professional finish from a DIY attempt.',
    },
    {
      number: '04',
      title: '2 Coats Premium Finish Paint',
      description:
        'Two full coats of high-durability cabinet paint, sprayed for a factory-smooth finish that resists chips, scratches, and daily wear.',
    },
    {
      number: '05',
      title: 'Reinstallation with Hardware Alignment',
      description:
        'Every door and drawer front is reinstalled with precision hardware alignment. New hardware can be installed if you choose to upgrade.',
    },
    {
      number: '06',
      title: 'Final Walkthrough & Care Instructions',
      description:
        'A detailed walkthrough to make sure every detail meets your expectations, plus care instructions to keep your cabinets looking new for years.',
    },
  ]

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-content px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-ink text-3xl md:text-4xl mb-4">
            How It Works
          </h2>
          <p className="font-body text-brown text-lg max-w-2xl mx-auto">
            A proven, systematic process that delivers a flawless finish every
            time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-sand-light rounded-2xl p-6 border border-rule/50"
            >
              <span className="inline-block font-display text-terra text-2xl mb-3">
                {step.number}
              </span>
              <h3 className="font-display text-ink text-lg mb-2">
                {step.title}
              </h3>
              <p className="font-body text-brown text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    {
      text: 'The attention to detail was incredible. Our cabinets look brand new and the whole project was done in four days.',
      author: 'East Valley Homeowner',
      rating: 5,
    },
    {
      text: 'Ricardo was professional from the first phone call to the final walkthrough. The finish quality is outstanding.',
      author: 'Gilbert Homeowner',
      rating: 5,
    },
    {
      text: 'Could not be happier with the results. Everyone who visits our home asks who did our cabinets.',
      author: 'Chandler Homeowner',
      rating: 5,
    },
    {
      text: 'On time, on budget, and the results exceeded our expectations. Highly recommend Valley Painting Pros.',
      author: 'Mesa Homeowner',
      rating: 5,
    },
  ]

  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-content px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <h2 className="font-display text-ink text-3xl md:text-4xl mb-4">
            All 5-Star Reviews on Google
          </h2>
          <p className="font-body text-brown text-lg">
            East Valley homeowners trust{' '}
            <BrandName className="text-lg" /> with their homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-rule/30"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="font-accent italic text-brown text-base leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-body text-sm text-mid font-medium">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://g.page/r/CX7AG1aNL5PkEBE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-terra hover:text-terra-light transition-colors underline underline-offset-4"
          >
            Read All Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="bg-cream">
      <div className="mx-auto max-w-content px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-ink text-3xl md:text-4xl mb-4">
            Before &amp; After
          </h2>
          <p className="font-body text-brown text-lg">
            Real cabinets. Real results. East Valley kitchens transformed by{' '}
            <BrandName className="text-lg" />.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex gap-3">
              {/* Before placeholder */}
              <div className="flex-1 aspect-[4/3] rounded-xl border-2 border-rule bg-sand flex items-center justify-center">
                <span className="font-body text-sm font-semibold text-mid uppercase tracking-wide">
                  Before
                </span>
              </div>
              {/* After placeholder */}
              <div className="flex-1 aspect-[4/3] rounded-xl border-2 border-terra bg-sand-light flex items-center justify-center">
                <span className="font-body text-sm font-semibold text-terra uppercase tracking-wide">
                  After
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceArea() {
  return (
    <section className="bg-sand-light">
      <div className="mx-auto max-w-content px-6 py-16 md:py-24 text-center">
        <h2 className="font-display text-ink text-3xl md:text-4xl mb-4">
          Serving the East Valley
        </h2>
        <p className="font-body text-brown text-lg mb-8 max-w-2xl mx-auto">
          Professional cabinet refinishing for homeowners in Chandler, Gilbert,
          Mesa, Tempe, and surrounding Phoenix Metro communities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {['Chandler', 'Gilbert', 'Mesa', 'Tempe'].map((city) => (
            <span
              key={city}
              className="bg-white border border-rule rounded-xl px-5 py-2.5 font-body font-medium text-ink text-sm"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-content px-6 py-16 md:py-24 text-center">
        <h2 className="font-display text-sand-light text-3xl md:text-4xl mb-4">
          Ready to Refresh Your Kitchen?
        </h2>
        <p className="font-body text-rule text-lg mb-8 max-w-xl mx-auto">
          Your complimentary cabinet consultation includes a home visit, color
          selection, and a detailed written estimate — no obligation.
        </p>

        <a
          href="tel:+14804332680"
          className="btn-primary text-lg px-10 py-5 mb-6 inline-flex"
        >
          <PhoneIcon className="w-6 h-6 mr-3" />
          Get Your Complimentary Cabinet Consultation
        </a>

        <p className="font-body text-sand-light text-2xl font-semibold mb-3">
          <a
            href="tel:+14804332680"
            className="hover:text-terra-light transition-colors"
          >
            (480) 433-2680
          </a>
        </p>

        <p className="font-body text-mid text-sm">
          Licensed, Bonded &amp; Insured · AZ ROC #363664
        </p>
      </div>
    </section>
  )
}

/* ─────────────── PAGE ─────────────── */

export default function CabinetRefinishingPage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Process />
      <Reviews />
      <Gallery />
      <ServiceArea />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      {/* Bottom padding on mobile so sticky CTA doesn't cover footer */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  )
}
