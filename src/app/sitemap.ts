import type { MetadataRoute } from 'next'
import { getPublishedBlogPosts } from '@/lib/blog'

const siteUrl = 'https://www.valleypaintingpros.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date('2026-06-05'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/cabinet-refinishing`,
      lastModified: new Date('2026-05-23'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date('2026-05-23'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getPublishedBlogPosts().map((post) => ({
    url: post.frontmatter.canonicalUrl,
    lastModified: new Date(post.frontmatter.updated),
    changeFrequency: 'monthly',
    priority: post.frontmatter.featured ? 0.7 : 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
