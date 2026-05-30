import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { BlogEstimateForm } from '@/components/blog/BlogEstimateForm'
import { BlogInlineCTA } from '@/components/blog/BlogInlineCTA'
import { BlogTrustSignals } from '@/components/blog/BlogTrustSignals'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { Footer } from '@/components/Footer'
import { SiteHeader } from '@/components/SiteHeader'
import {
  getBlogPostBySlug,
  getPublishedBlogPosts,
  getRelatedBlogPosts,
  type BlogPost,
} from '@/lib/blog'

type PageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({
    slug: post.frontmatter.slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}

  const { frontmatter } = post

  return {
    title: frontmatter.seoTitle,
    description: frontmatter.description,
    alternates: {
      canonical: frontmatter.canonicalUrl,
    },
    openGraph: {
      title: frontmatter.ogTitle,
      description: frontmatter.ogDescription,
      url: frontmatter.canonicalUrl,
      siteName: 'Valley Painting Pros',
      type: 'article',
      locale: 'en_US',
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.updated,
      authors: [frontmatter.author],
      images: [frontmatter.featuredImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.ogTitle,
      description: frontmatter.ogDescription,
      images: [frontmatter.featuredImage],
    },
  }
}

function articleSchema(post: BlogPost) {
  const { frontmatter } = post

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.description,
    image: frontmatter.featuredImage,
    datePublished: frontmatter.date,
    dateModified: frontmatter.updated,
    author: {
      '@type': 'Organization',
      name: frontmatter.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Valley Painting Pros',
      url: 'https://www.valleypaintingpros.com',
    },
    mainEntityOfPage: frontmatter.canonicalUrl,
    keywords: [frontmatter.primaryKeyword, frontmatter.cityFocus, frontmatter.category],
  }
}

function breadcrumbSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Cabinet Refinishing',
        item: 'https://www.valleypaintingpros.com/cabinet-refinishing',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.valleypaintingpros.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.frontmatter.title,
        item: post.frontmatter.canonicalUrl,
      },
    ],
  }
}

function faqSchema(post: BlogPost) {
  const { faqItems, faqSchema: shouldRenderFaq } = post.frontmatter
  if (!shouldRenderFaq || !faqItems || faqItems.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export default function BlogArticlePage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const { frontmatter } = post
  const relatedPosts = getRelatedBlogPosts(post)
  const optionalFaqSchema = faqSchema(post)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(post)) }}
      />
      {optionalFaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(optionalFaqSchema) }}
        />
      )}

      <SiteHeader trackingPage={`blog_${frontmatter.slug}`} />
      <main className="bg-cream">
        <article>
          <header id="top" className="bg-cream pb-12 pt-[104px] md:pb-16 md:pt-[128px]">
            <div className="mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <Link href="/blog" className="mb-5 inline-flex font-body text-sm font-semibold text-terra underline underline-offset-4">
                  Cabinet Refinishing Blog
                </Link>
                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs font-semibold uppercase tracking-[0.16em] text-terra">
                  <span>{frontmatter.category}</span>
                  <span className="text-mid" aria-hidden="true">|</span>
                  <span className="text-brown">{frontmatter.readingTime}</span>
                </div>
                <h1 className="max-w-[310px] break-words font-display text-[27px] leading-[1.15] text-ink sm:max-w-full md:text-[48px]">
                  {frontmatter.title}
                </h1>
                <p className="mt-5 max-w-[310px] break-words font-body text-lg leading-8 text-brown sm:max-w-full">
                  {frontmatter.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-body text-sm text-brown">
                  <span>By {frontmatter.author}</span>
                  <span aria-hidden="true">|</span>
                  <time dateTime={frontmatter.updated}>Updated {frontmatter.updated}</time>
                </div>
              </div>

              <div className="relative aspect-[16/11] overflow-hidden rounded-lg border-l-[4px] border-terra bg-sand shadow-sm">
                <Image
                  src={frontmatter.featuredImage}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </header>

          <section className="bg-sand py-8">
            <div className="mx-auto max-w-content px-6">
              <BlogTrustSignals />
            </div>
          </section>

          <section className="bg-cream py-12 md:py-16">
            <div className="mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-[minmax(0,720px)_320px] lg:items-start">
              <div className="blog-prose">
                <MDXRemote
                  source={post.content}
                  components={{
                    InlineBlogCTA: () => (
                      <BlogInlineCTA label={frontmatter.ctaLabel} source={frontmatter.ctaSource} />
                    ),
                  }}
                />
              </div>

              <aside className="lg:sticky lg:top-6">
                <div className="rounded-lg border border-rule bg-sand p-5">
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-terra">
                    Estimate Next Step
                  </p>
                  <p className="mt-3 font-body text-sm leading-6 text-brown">
                    Use this guide to get oriented, then send the basics when you want a clear cabinet refinishing estimate for your own kitchen.
                  </p>
                  <a
                    href="#quote-form"
                    className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-terra px-5 font-body text-sm font-semibold text-white transition-colors hover:bg-terra-dark"
                  >
                    {frontmatter.ctaLabel}
                  </a>
                </div>
              </aside>
            </div>
          </section>
        </article>

        <BlogEstimateForm ctaSource={frontmatter.ctaSource} />
        <RelatedPosts posts={relatedPosts} />
      </main>
      <Footer />
    </>
  )
}
