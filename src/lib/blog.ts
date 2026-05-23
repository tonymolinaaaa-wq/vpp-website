import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { z } from 'zod'

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

const faqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
})

export const blogFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  date: z.string().min(1),
  updated: z.string().min(1),
  author: z.string().min(1),
  category: z.string().min(1),
  readingTime: z.string().min(1),
  draft: z.boolean(),
  featuredImage: z.string().min(1),
  ctaLabel: z.string().min(1),
  ctaSource: z.string().min(1),
  seoTitle: z.string().min(1),
  ogTitle: z.string().min(1),
  ogDescription: z.string().min(1),
  canonicalUrl: z.string().url(),
  featured: z.boolean(),
  primaryKeyword: z.string().min(1),
  cityFocus: z.string().min(1),
  faqSchema: z.boolean().optional(),
  faqItems: z.array(faqItemSchema).optional(),
})

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>

export type BlogPost = {
  frontmatter: BlogFrontmatter
  content: string
  filePath: string
}

function formatZodError(error: z.ZodError) {
  return error.issues
    .map((issue) => {
      const field = issue.path.length > 0 ? issue.path.join('.') : 'frontmatter'
      return `${field}: ${issue.message}`
    })
    .join('; ')
}

function readBlogFile(fileName: string): BlogPost {
  const filePath = path.join(BLOG_DIR, fileName)
  const source = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(source)
  const result = blogFrontmatterSchema.safeParse(parsed.data)

  if (!result.success) {
    throw new Error(
      `Invalid blog frontmatter in ${path.relative(process.cwd(), filePath)}: ${formatZodError(result.error)}`
    )
  }

  if (result.data.slug !== fileName.replace(/\.mdx$/, '')) {
    throw new Error(
      `Invalid blog frontmatter in ${path.relative(process.cwd(), filePath)}: slug must match file name`
    )
  }

  return {
    frontmatter: result.data,
    content: parsed.content,
    filePath,
  }
}

export function getAllBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []

  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map(readBlogFile)
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    })
}

export function getPublishedBlogPosts() {
  return getAllBlogPosts().filter((post) => !post.frontmatter.draft)
}

export function getFeaturedBlogPosts() {
  return getPublishedBlogPosts().filter((post) => post.frontmatter.featured)
}

export function getBlogPostBySlug(slug: string) {
  const post = getAllBlogPosts().find((item) => item.frontmatter.slug === slug)
  if (!post || post.frontmatter.draft) return null
  return post
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3) {
  const published = getPublishedBlogPosts().filter(
    (item) => item.frontmatter.slug !== post.frontmatter.slug
  )

  const sameCategory = published.filter(
    (item) => item.frontmatter.category === post.frontmatter.category
  )
  const otherPosts = published.filter(
    (item) => item.frontmatter.category !== post.frontmatter.category
  )

  return [...sameCategory, ...otherPosts].slice(0, limit)
}

export function getBlogCategories() {
  return Array.from(new Set(getPublishedBlogPosts().map((post) => post.frontmatter.category)))
}
