'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function BlogEstimateForm({
  ctaSource,
}: {
  ctaSource: string
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    openingCount: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/xaqankry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          _source: ctaSource,
          service: 'cabinet refinishing',
        }),
      })

      if (res.ok) {
        trackEvent('quote_form_submit', {
          source: ctaSource,
          form: 'blog_estimate',
        })
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="quote-form" className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-terra">
              Estimate Request
            </p>
            <h2 className="mt-3 font-display text-[28px] leading-tight text-ink md:text-[34px]">
              See what your cabinet project would cost.
            </h2>
            <p className="mt-4 font-body text-base leading-7 text-brown">
              Share the basics and we will follow up with next steps. For most East Valley kitchens, cabinet refinishing takes 3-5 days.
            </p>
            <p className="mt-4 font-body text-sm font-semibold text-ink">
              AZ ROC #363664 | Bonded | Insured | 5-year written warranty
            </p>
          </div>

          <div className="rounded-lg border border-rule bg-sand p-5 shadow-sm md:p-6">
            {status === 'success' ? (
              <div className="py-8 text-center">
                <h3 className="font-body text-xl font-bold text-ink">
                  Got it. We received your request.
                </h3>
                <p className="mt-3 font-body text-sm leading-6 text-brown">
                  We will reach out soon. You can also call directly at{' '}
                  <a href="tel:+14804332680" className="font-semibold text-terra underline underline-offset-4">
                    (480) 433-2680
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_source" value={ctaSource} />
                <div>
                  <label htmlFor="blog-name" className="mb-1.5 block font-body text-sm font-semibold text-ink">
                    Name
                  </label>
                  <input
                    id="blog-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    className="h-12 w-full rounded-lg border border-rule bg-cream px-4 font-body text-base text-ink outline-none transition-shadow focus:ring-2 focus:ring-terra"
                  />
                </div>
                <div>
                  <label htmlFor="blog-phone" className="mb-1.5 block font-body text-sm font-semibold text-ink">
                    Phone
                  </label>
                  <input
                    id="blog-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    className="h-12 w-full rounded-lg border border-rule bg-cream px-4 font-body text-base text-ink outline-none transition-shadow focus:ring-2 focus:ring-terra"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="blog-zip" className="mb-1.5 block font-body text-sm font-semibold text-ink">
                      Zip Code
                    </label>
                    <input
                      id="blog-zip"
                      name="zip"
                      type="text"
                      inputMode="numeric"
                      maxLength={5}
                      value={formData.zip}
                      onChange={(event) => setFormData({ ...formData, zip: event.target.value.replace(/\D/g, '').slice(0, 5) })}
                      className="h-12 w-full rounded-lg border border-rule bg-cream px-4 font-body text-base text-ink outline-none transition-shadow focus:ring-2 focus:ring-terra"
                    />
                  </div>
                  <div>
                    <label htmlFor="blog-openings" className="mb-1.5 block font-body text-sm font-semibold text-ink">
                      Approx. Openings
                    </label>
                    <select
                      id="blog-openings"
                      name="openingCount"
                      value={formData.openingCount}
                      onChange={(event) => setFormData({ ...formData, openingCount: event.target.value })}
                      className="h-12 w-full rounded-lg border border-rule bg-cream px-4 font-body text-base text-ink outline-none transition-shadow focus:ring-2 focus:ring-terra"
                    >
                      <option value="">Select one</option>
                      <option value="Under 25 openings">Under 25 openings</option>
                      <option value="25-35 openings">25-35 openings</option>
                      <option value="36-45 openings">36-45 openings</option>
                      <option value="46+ openings">46+ openings</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex min-h-[54px] w-full items-center justify-center rounded-lg bg-terra px-6 font-body text-base font-semibold text-white transition-colors hover:bg-terra-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending...' : 'Request Cabinet Estimate'}
                </button>
                {status === 'error' && (
                  <p className="font-body text-sm text-terra">
                    Something went wrong. Please call us at{' '}
                    <a href="tel:+14804332680" className="underline underline-offset-4">
                      (480) 433-2680
                    </a>.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
