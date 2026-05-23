import type { BlogPost } from '@/lib/blog'
import { BlogArticleCard } from './BlogArticleCard'

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null

  return (
    <section className="bg-sand py-16 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="mb-8 max-w-2xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-terra">
            Keep Researching
          </p>
          <h2 className="mt-3 font-display text-[28px] leading-tight text-ink md:text-[34px]">
            Related cabinet refinishing guides
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <BlogArticleCard key={post.frontmatter.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
