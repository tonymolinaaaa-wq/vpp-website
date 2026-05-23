import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogArticleCard } from '@/components/blog/BlogArticleCard'
import { BlogBottomCTA } from '@/components/blog/BlogInlineCTA'
import { BlogEstimateForm } from '@/components/blog/BlogEstimateForm'
import { BlogTrustSignals } from '@/components/blog/BlogTrustSignals'
import { Footer } from '@/components/Footer'
import { getBlogCategories, getFeaturedBlogPosts, getPublishedBlogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Cabinet Refinishing Blog | Valley Painting Pros',
  description:
    'Cabinet refinishing guides for Phoenix and East Valley homeowners comparing cost, timeline, process, and estimate options.',
  alternates: {
    canonical: 'https://www.valleypaintingpros.com/blog',
  },
  openGraph: {
    title: 'Cabinet Refinishing Blog | Valley Painting Pros',
    description:
      'Cabinet refinishing guides for Phoenix and East Valley homeowners comparing cost, timeline, process, and estimate options.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function BlogPage() {
  const posts = getPublishedBlogPosts()
  const featuredPosts = getFeaturedBlogPosts()
  const categories = getBlogCategories()

  return (
    <>
      <main className="bg-cream">
        <section className="border-b border-rule bg-cream pt-8">
          <div className="mx-auto max-w-content px-6">
            <nav className="flex items-center justify-between gap-4 py-4">
              <Link href="/cabinet-refinishing" className="font-display text-xl text-ink">
                Valley Painting <span className="italic text-terra">Pros</span>
              </Link>
              <a
                href="tel:+14804332680"
                className="font-body text-sm font-semibold text-terra underline underline-offset-4"
              >
                (480) 433-2680
              </a>
            </nav>
          </div>
        </section>

        <section className="bg-cream py-16 md:py-20">
          <div className="mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-terra">
                Cabinet Refinishing Resources
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-[36px] leading-[1.15] text-ink md:text-[54px]">
                Clear answers before you refinish your kitchen.
              </h1>
              <p className="mt-5 max-w-2xl font-body text-lg leading-8 text-brown">
                Guides for Phoenix and East Valley homeowners comparing cabinet refinishing cost, timeline, durability, and what to expect before asking for an estimate.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote-form"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-lg bg-terra px-6 font-body text-base font-semibold text-white transition-colors hover:bg-terra-dark"
                >
                  Get a Cabinet Estimate
                </a>
                <Link
                  href="/cabinet-refinishing"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-lg border border-rule px-6 font-body text-base font-semibold text-ink transition-colors hover:border-terra hover:text-terra"
                >
                  View Refinishing Service
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-rule bg-sand p-5 md:p-6">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.16em] text-terra">
                What VPP is known for
              </p>
              <div className="mt-5 grid gap-4">
                {[
                  '$150 per opening',
                  'Prep, prime, topcoat, hardware audit, soft-close hinge upgrade, felt pads, and deep clean included',
                  '5-year written warranty',
                  'AZ ROC #363664',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-sage text-sm font-bold text-cream">
                      ✓
                    </span>
                    <p className="font-body text-sm leading-6 text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {featuredPosts.length > 0 && (
          <section className="bg-sand py-16 md:py-20">
            <div className="mx-auto max-w-content px-6">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-terra">
                    High-Intent Guides
                  </p>
                  <h2 className="mt-3 font-display text-[28px] leading-tight text-ink md:text-[36px]">
                    Start with the decisions that affect your estimate.
                  </h2>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {featuredPosts.map((post, index) => (
                  <BlogArticleCard key={post.frontmatter.slug} post={post} priority={index === 0} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-cream py-16 md:py-20">
          <div className="mx-auto max-w-content px-6">
            <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-terra">
                  Article Library
                </p>
                <h2 className="mt-3 font-display text-[28px] leading-tight text-ink md:text-[36px]">
                  Cabinet refinishing guides
                </h2>
              </div>
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-rule bg-sand px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.14em] text-brown"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogArticleCard key={post.frontmatter.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sand py-14">
          <div className="mx-auto max-w-content px-6">
            <div className="mb-6 max-w-2xl">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-terra">
                Verify Before You Invite Anyone In
              </p>
              <h2 className="mt-3 font-display text-[26px] leading-tight text-ink md:text-[32px]">
                Trust signals built into every estimate.
              </h2>
            </div>
            <BlogTrustSignals />
          </div>
        </section>

        <BlogBottomCTA label="Get a Cabinet Estimate" source="blog:index" />
        <BlogEstimateForm ctaSource="blog:index" />
      </main>
      <Footer />
    </>
  )
}
