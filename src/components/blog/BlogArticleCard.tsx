import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

export function BlogArticleCard({
  post,
  priority = false,
}: {
  post: BlogPost
  priority?: boolean
}) {
  const { frontmatter } = post

  return (
    <article className="group overflow-hidden rounded-lg border border-rule bg-cream shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-terra/60 hover:shadow-md">
      <Link href={`/blog/${frontmatter.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-sand">
          <Image
            src={frontmatter.featuredImage}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority={priority}
          />
        </div>
        <div className="p-5 md:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs font-semibold uppercase tracking-[0.16em] text-terra">
            <span>{frontmatter.category}</span>
            <span className="text-mid" aria-hidden="true">|</span>
            <span className="text-brown">{frontmatter.readingTime}</span>
          </div>
          <h2 className="font-body text-xl font-bold leading-tight text-ink transition-colors group-hover:text-terra">
            {frontmatter.title}
          </h2>
          <p className="mt-3 font-body text-sm leading-6 text-brown">
            {frontmatter.description}
          </p>
          <span className="mt-5 inline-flex font-body text-sm font-semibold text-terra underline underline-offset-4">
            Read guide
          </span>
        </div>
      </Link>
    </article>
  )
}
