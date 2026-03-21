// VPP v2.0 deployed
import type { Metadata } from 'next'
import { BrandName } from '@/components/BrandName'
import { Footer } from '@/components/Footer'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Navigation } from '@/components/Navigation'

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
    <section className="relative bg-cream overflow-hidden">
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-light/60 via-cream to-cream pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-content px-6 pt-12 pb-16 md:pt-20 md:pb-24 text-center">
        {/* Trust bar — fade in */}
        <p className="mb-6 text-sm font-body font-medium text-mid uppercase tracking-widest animate-fade-in">
          AZ ROC #363664 · Licensed, Bonded &amp; Insured
        </p>

        {/* Headline — staggered fade in */}
        <h1 className="font-display text-ink text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 animate-fade-in-up">
          Still Walking Into a Kitchen That
          <br />
          Doesn&rsquo;t Feel Like Yours?
        </h1>

        {/* Subhead — staggered */}
        <p className="font-body text-brown text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-in-up animation-delay-200">
          Builder-grade cabinets age your entire home. A full remodel costs
          $30,000 and takes weeks. Cabinet refinishing gives you a brand new
          kitchen — same cabinets, stunning new finish — in 3 to 5 days.
        </p>

        {/* Price badge */}
        <p className="inline-block bg-terra/10 text-terra font-display text-2xl md:text-3xl px-5 py-2 rounded-full mb-8 animate-fade-in-up animation-delay-200">
          Starting at $2,250
        </p>

        {/* CTAs — staggered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a href="tel:+14804332680" className="btn-primary text-base px-8 py-4 shadow-lg shadow-terra/20">
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
            New cabinet replacement runs $8,000 to $25,000 — and that&rsquo;s
            before countertops, backsplash, and weeks of your kitchen being a
            construction zone. Cabinet refinishing delivers the same visual
            transformation for a fraction of the cost, with zero demolition and
            your kitchen back in days, not months.
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
                className={`relative rounded-2xl p-6 ${
                  item.highlight
                    ? 'bg-white border-2 border-terra shadow-md'
                    : 'bg-sand border border-rule'
                }`}
              >
                {/* "Most Popular" badge on refinishing card */}
                {item.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terra text-white font-body font-semibold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
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

function WhatsIncluded() {
  const items = [
    {
      feature: 'Professional cabinet refinishing with 2 coats of premium finish paint',
      benefit:
        'so your cabinets look and feel factory-new, not like a weekend DIY project that peels in six months.',
    },
    {
      feature: 'Full deep clean including the greasy cabinet tops near the ceiling',
      benefit:
        'so the surfaces nobody wants to touch get handled before we even start painting. You shouldn\u2019t have to clean up before paying someone to refinish your kitchen.',
    },
    {
      feature: 'Handle and hardware audit',
      benefit:
        'we inspect every existing handle position. If your builder installed them crooked (and many did), we fill the old holes, re-drill to the correct alignment, and reinstall. Whether you keep your handles or upgrade, every hole is right.',
    },
    {
      feature: 'Hardware sourcing available',
      benefit:
        'if you want new handles or knobs, we source them for you so you don\u2019t have to hunt through Home Depot trying to match hole spacing and finish. Tell us what you like, we handle the rest.',
    },
    {
      feature: 'Soft-close hinge sourcing and installation',
      benefit:
        'so you never deal with slamming cabinet doors again. We source them, install them, and adjust them.',
    },
    {
      feature: 'Important cabinet labels preserved',
      benefit:
        'any labels inside your cabinet doors (emergency contacts, utility info, warranty details from the builder) are carefully removed before painting, reprinted clean, and reapplied after the job. Nothing gets lost. Nobody else does this.',
    },
    {
      feature: '5-year warranty in writing',
      benefit:
        'not a verbal promise. A written warranty that covers the finish. Most DIY cabinet paint jobs fail within 12 months. Most competitors offer 1 year or nothing.',
    },
    {
      feature: 'Fixed price in writing before we touch a single cabinet',
      benefit:
        'so you know exactly what you\u2019re paying before the job starts. No surprises, no change orders, no \u201Cwell, once we got in there\u2026\u201D',
    },
    {
      feature: '3 to 5 day completion for most East Valley kitchens',
      benefit:
        'your kitchen is back in days, not weeks. No demolition. Fully contained workspace. You can cook dinner while we work.',
    },
  ]

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-content px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-ink text-3xl md:text-4xl mb-4">
            Everything That&rsquo;s Included — No Surprises, No Extras
          </h2>
          <p className="font-body text-brown text-lg max-w-2xl mx-auto">
            Most cabinet painters just spray your doors and leave. Here&rsquo;s
            what VPP actually delivers:
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item) => (
            <div
              key={item.feature}
              className="bg-sand-light rounded-2xl p-5 md:p-6 border border-rule/50 flex gap-4"
            >
              <CheckIcon />
              <p className="font-body text-brown text-sm md:text-base leading-relaxed">
                <span className="font-semibold text-ink">{item.feature}</span>
                {' — '}
                {item.benefit}
              </p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl mx-auto mt-10 text-center font-body font-semibold text-ink text-base md:text-lg leading-relaxed bg-sand rounded-2xl p-6 border border-rule/50">
          This is what $2,250 to $4,000 buys you. Compare that to $30,000 for a
          remodel — or $0 for another year of walking past cabinets you
          don&rsquo;t love.
        </p>
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
        'I visit your home, assess your cabinets, discuss your vision, and help you choose the perfect finish from hundreds of premium color options. You\u2019ll get a written quote on the spot — not an email three days later.',
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
        'A detailed walkthrough to make sure every single detail meets your expectations — plus a printed care guide so you know exactly how to keep your cabinets looking new for years. And your 5-year warranty documentation.',
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

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Subtle connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-px bg-rule/40" aria-hidden="true" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-sand-light rounded-2xl p-6 border border-rule/50"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terra/10 font-display text-terra text-2xl font-bold mb-3">
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
  const featuredReviews = [
    {
      text: 'Thank you Ricardo for my gorgeous kitchen cabinets! They look beautiful! It\u2019s a pleasure working with Ricardo. He is professional and ensures customer satisfaction. The team worked efficiently and were friendly! I can\u2019t wait for him to paint my interior walls this week!',
      author: 'Rita Solliday',
    },
    {
      text: 'They said they would take care of our home as if it were their own. They must live in a palace because they were more careful and thorough with their prep than I would have been. They are perfectionists. Their work is outstanding. Will definitely use them again.',
      author: 'Dustin Tibbitts',
    },
  ]

  const reviews = [
    {
      text: 'The hardest, nicest and timeliest painters around the valley. We\u2019ve had a few over the past 10 years and my business goes to them in a heartbeat in the future jobs. Thanks so much Jeramey and Ricardo for your attention to detail and hard work.',
      author: 'Robin Cancro',
    },
    {
      text: 'I was blown away by their professionalism and affordability. The crew leader, Ricardo, was friendly, and kept me informed throughout the entire job. The end result was stunning! I highly recommend. Thank you Ricardo and team!',
      author: 'James Dolph',
    },
    {
      text: 'Valley Painting Pros really went above and beyond. Ricardo was able to quickly fit our project into his schedule, and he is an excellent communicator and so pleasant to work with. Ricardo and Gereimy did an amazing job with drywall repair and painting for us. I\u2019m very glad to have been referred to Ricardo and will definitely hire Valley Painting Pros for future projects!',
      author: 'Shannon Ruecker',
    },
    {
      text: 'Ricardo did an amazing job. He gave me an accurate quote and showed up exactly on time. He was very communicative and did an amazing job. Loved working with Valley Painting and look forward to working with them again.',
      author: 'Kenneth Stauffer',
    },
    {
      text: 'Valley Painting Pros did an amazing job painting the interior of my home! I couldn\u2019t be happier with the results. Highly recommend this company for their excellent workmanship and professionalism.',
      author: 'Paola',
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

        {/* Featured reviews — full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featuredReviews.map((review) => (
            <div
              key={review.author}
              className="bg-white rounded-2xl p-8 shadow-md border-2 border-terra/20 relative"
            >
              <div className="absolute -top-3 left-6 bg-terra text-white font-body font-semibold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                Featured
              </div>
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="font-accent italic text-brown text-base md:text-lg leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-body text-sm text-ink font-semibold">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        {/* Remaining reviews — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-white rounded-2xl p-6 shadow-sm border border-rule/30"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="font-accent italic text-brown text-base leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-body text-sm text-ink font-semibold">
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
              <div className="flex-1 aspect-[4/3] rounded-xl border-2 border-rule bg-gradient-to-br from-sand to-sand-light flex items-center justify-center relative overflow-hidden">
                {/* Diagonal stripe pattern */}
                <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #7A6558 10px, #7A6558 11px)' }} aria-hidden="true" />
                <span className="relative font-body text-sm font-semibold text-mid uppercase tracking-wide">
                  Before
                </span>
              </div>
              {/* After placeholder */}
              <div className="flex-1 aspect-[4/3] rounded-xl border-2 border-terra bg-gradient-to-br from-sand-light to-cream flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #C4613A 10px, #C4613A 11px)' }} aria-hidden="true" />
                <span className="relative font-body text-sm font-semibold text-terra uppercase tracking-wide">
                  After
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-mid text-sm mt-8 italic">
          Photos coming soon — ask to see our portfolio during your consultation
        </p>
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
          Your Kitchen Deserves Better Than &ldquo;Good Enough&rdquo;
        </h2>
        <p className="font-body text-rule text-lg mb-8 max-w-xl mx-auto">
          Your complimentary cabinet consultation includes a home visit, color
          selection from hundreds of premium options, and a detailed written
          estimate — no obligation, no pressure, no &ldquo;let me get back to
          you.&rdquo; Ricardo delivers your quote on the spot.
        </p>

        <a
          href="tel:+14804332680"
          className="btn-primary text-lg px-10 py-5 mb-6 inline-flex shadow-lg shadow-terra/30"
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
      <Navigation />
      <Hero />
      <ValueProposition />
      <WhatsIncluded />
      <Process />
      <Reviews />
      <Gallery />
      <ServiceArea />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      {/* Bottom padding on mobile so sticky CTA doesn't cover footer */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  )
}
