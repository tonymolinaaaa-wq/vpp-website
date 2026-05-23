import Link from 'next/link'
import { BlogTrustSignals } from './BlogTrustSignals'

export function BlogInlineCTA({
  label,
  source,
}: {
  label: string
  source: string
}) {
  return (
    <aside className="my-10 rounded-lg border-l-[4px] border-terra bg-sand p-5 md:p-6">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-terra">
        Cabinet Refinishing Estimate
      </p>
      <h2 className="mt-2 font-display text-[24px] leading-tight text-ink md:text-[28px]">
        Want numbers for your kitchen?
      </h2>
      <p className="mt-3 font-body text-base leading-7 text-brown">
        VPP quotes cabinet refinishing at $150 per opening, with a fixed price in writing before work begins.
      </p>
      <Link
        href="#quote-form"
        data-cta-source={source}
        className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-terra px-5 font-body text-sm font-semibold text-white transition-colors hover:bg-terra-dark"
      >
        {label}
      </Link>
    </aside>
  )
}

export function BlogBottomCTA({
  label,
  source,
}: {
  label: string
  source: string
}) {
  return (
    <section id="estimate" className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sand">
              Fixed Cabinet Refinishing Quotes
            </p>
            <h2 className="mt-3 font-display text-[28px] leading-tight text-cream md:text-[36px]">
              Get a clear estimate before you commit.
            </h2>
            <p className="mt-4 max-w-xl font-body text-base leading-7 text-sand">
              Cabinet refinishing is priced at $150 per opening. Prep, primer, topcoat, soft-close hinge upgrade, hardware audit, felt pads, deep clean, and a 5-year written warranty are included.
            </p>
          </div>
          <div className="rounded-lg border border-sand/15 bg-cream/5 p-5">
            <BlogTrustSignals dark />
            <a
              href="#quote-form"
              data-cta-source={source}
              className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-terra px-6 font-body text-base font-semibold text-white transition-colors hover:bg-terra-dark"
            >
              {label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
