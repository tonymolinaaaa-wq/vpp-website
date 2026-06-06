/**
 * services.ts — Single source of truth for VPP's service lines.
 *
 * Every customer-facing surface that needs to know "what services exist" reads
 * from here: the homepage service cards, the header/footer nav, each service
 * page's metadata + schema, the sitemap, the root Organization service catalog,
 * and the lead-form service tags.
 *
 * Adding a new service later = add one entry below (and drop photos in
 * public/images/gallery/). Nothing else has to change for it to appear in nav,
 * sitemap, and the business schema.
 *
 * STATUS controls visibility:
 *   - 'live'  → page exists; shown in nav + footer + sitemap
 *   - 'draft' → defined here but NOT shown anywhere yet (page not built)
 * Cabinet refinishing is the only 'live' service today. Interior and exterior
 * are drafted so the foundation is ready, but stay hidden until their pages ship
 * (see the phased rollout in the plan). Draft copy below is placeholder — real
 * owner/advisor-supplied copy replaces every `DRAFT`/`TODO(owner)` before each
 * page goes live.
 *
 * NOTE: warranty copy is intentionally NOT stored here yet. Warranty differs per
 * service and is a Level 1 gated change (see AGENTS.md). It lands together with
 * the service-aware TrustSignalCards update so all warranty copy is reviewed in
 * one place. Cabinet keeps its 5-year warranty; interior/exterior warranty terms
 * are owner-supplied.
 */

const SITE_URL = 'https://www.valleypaintingpros.com'

export type ServiceSlug =
  | 'cabinet-refinishing'
  | 'interior-painting'
  | 'exterior-painting'

export type ServiceStatus = 'live' | 'draft'
export type ProofState = 'rich' | 'partial' | 'coming-soon'
export type ServiceAccent = 'terra' | 'sage' | 'charcoal'

export type GalleryImage = {
  src: string
  alt: string
  caption: string
}

export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceDefinition = {
  slug: ServiceSlug
  path: string
  status: ServiceStatus
  order: number

  // Navigation / labels
  navLabel: string
  shortLabel: string
  displayName: string
  cardTagline: string

  // SEO / metadata
  metaTitle: string
  metaDescription: string
  canonical: string
  ogImage: string
  serviceType: string // schema.org Service `serviceType`

  // Hero
  heroEyebrow: string
  heroHeadline: string
  heroSub: string
  heroImage: string
  heroImageAlt: string
  primaryCtaLabel: string

  // Proof
  proofState: ProofState
  gallery: GalleryImage[]
  faqs: ServiceFaq[]

  // Presentation — existing brand tokens only (no new colors)
  accent: ServiceAccent

  // Lead routing (Formspree payload + analytics)
  leadSource: string // Formspree `_source`
  leadServiceTag: string // Formspree `service`
  trackingPage: string // analytics page id
}

const services: Record<ServiceSlug, ServiceDefinition> = {
  'cabinet-refinishing': {
    slug: 'cabinet-refinishing',
    path: '/cabinet-refinishing',
    status: 'live',
    order: 1,
    navLabel: 'Cabinet Refinishing',
    shortLabel: 'Cabinets',
    displayName: 'Cabinet Refinishing',
    cardTagline:
      'Refinish your existing cabinets in 3–5 days — a professional result for a fraction of replacement cost.',
    // Transcribed verbatim from the live src/app/cabinet-refinishing/page.tsx.
    // The cabinet page keeps its own metadata authoritative for byte-stable SEO;
    // these fields are here so nav/sitemap/homepage can reference one source.
    metaTitle:
      'Cabinet Refinishing in Chandler, Gilbert, Mesa, Queen Creek, Scottsdale & Tempe | Valley Painting Pros',
    metaDescription:
      'Cabinet refinishing in the East Valley. AZ ROC #363664, 5-star rated, 5-year warranty. Custom quote — free in-home estimate. Same cabinets, completely different kitchen in 3–5 days. Call (480) 433-2680.',
    canonical: `${SITE_URL}/cabinet-refinishing`,
    ogImage: '/VPP_og-image.png',
    serviceType: 'Cabinet Refinishing',
    heroEyebrow: 'East Valley Cabinet Refinishing',
    heroHeadline: 'Same Cabinets. Completely Different Kitchen.',
    heroSub:
      'Still walking past cabinets you don’t love? We refinish your existing cabinets in 3–5 days, for a fraction of what replacement costs.',
    heroImage: '/images/gallery/suburban-gilbert-kitchen.png',
    heroImageAlt: 'Suburban Gilbert kitchen with white cabinets and a large island.',
    primaryCtaLabel: 'Get Your Cabinet Quote',
    proofState: 'rich',
    gallery: [
      {
        src: '/images/gallery/vpp-gallery-kitchen-wide.jpg',
        alt: 'Wide kitchen with refinished white cabinets and granite countertops by Valley Painting Pros',
        caption: 'White cabinet refinish with existing granite preserved',
      },
      {
        src: '/images/gallery/vpp-gallery-dark-vanity.jpg',
        alt: 'Dark refinished bathroom vanity with framed mirror and granite counter',
        caption: 'Dark vanity refinish with existing hardware reset',
      },
      {
        src: '/images/gallery/vpp-gallery-range-detail.jpg',
        alt: 'Refinished white kitchen cabinets around stainless range',
        caption: 'Cabinet finish detail around high-use cooking zone',
      },
      {
        src: '/images/gallery/vpp-gallery-white-black-hardware.jpg',
        alt: 'Long kitchen wall with refinished white cabinets and black pulls',
        caption: 'White finish with black hardware contrast',
      },
    ],
    // Cabinet FAQs + FAQPage JSON-LD stay inline in page.tsx / CabinetPage.tsx
    // for byte-stable SEO. Left empty here in Phase 0; migrate later in a
    // verified step so the serialized schema output never drifts.
    faqs: [],
    accent: 'terra',
    leadSource: 'cabinet-refinishing',
    leadServiceTag: 'cabinet refinishing',
    trackingPage: 'cabinet_refinishing',
  },

  'interior-painting': {
    slug: 'interior-painting',
    path: '/interior-painting',
    status: 'draft', // not routed or shown yet — page ships in its own phase
    order: 2,
    navLabel: 'Interior Painting',
    shortLabel: 'Interior',
    displayName: 'Interior Painting',
    // Neutral category description (owner may refine). Page-level meta/hero below
    // stay DRAFT until the interior page is built.
    cardTagline:
      'Walls, ceilings, trim, and doors — clean lines and a durable finish that stands up to daily life.',
    metaTitle: 'Interior Painting in the East Valley | Valley Painting Pros', // TODO(owner): finalize
    metaDescription:
      'DRAFT — pending owner copy. Interior painting in the East Valley by Valley Painting Pros. AZ ROC #363664.', // TODO(owner)
    canonical: `${SITE_URL}/interior-painting`,
    ogImage: '/VPP_og-image.png', // TODO(owner): service-specific OG image
    serviceType: 'Interior Painting',
    heroEyebrow: 'East Valley Interior Painting',
    heroHeadline: 'DRAFT — pending owner copy.', // TODO(owner)
    heroSub: 'DRAFT — pending owner copy.', // TODO(owner)
    heroImage: '', // TODO(owner): add a real interior photo to public/images/gallery/
    heroImageAlt: '',
    primaryCtaLabel: 'Get Your Painting Quote',
    proofState: 'coming-soon',
    gallery: [], // TODO(owner): real interior project photos
    faqs: [], // TODO(owner)
    accent: 'sage',
    leadSource: 'interior-painting',
    leadServiceTag: 'interior painting',
    trackingPage: 'interior_painting',
  },

  'exterior-painting': {
    slug: 'exterior-painting',
    path: '/exterior-painting',
    status: 'draft', // not routed or shown yet — page ships in its own phase
    order: 3,
    navLabel: 'Exterior Painting',
    shortLabel: 'Exterior',
    displayName: 'Exterior Painting',
    // Neutral category description (owner may refine). Page-level meta/hero below
    // stay DRAFT until the exterior page is built.
    cardTagline:
      'Stucco, siding, and trim, prepped and coated to handle the Arizona sun.',
    metaTitle: 'Exterior Painting in the East Valley | Valley Painting Pros', // TODO(owner): finalize
    metaDescription:
      'DRAFT — pending owner copy. Exterior house painting in the East Valley by Valley Painting Pros. AZ ROC #363664.', // TODO(owner)
    canonical: `${SITE_URL}/exterior-painting`,
    ogImage: '/VPP_og-image.png', // TODO(owner): service-specific OG image
    serviceType: 'Exterior House Painting',
    heroEyebrow: 'East Valley Exterior Painting',
    heroHeadline: 'DRAFT — pending owner copy.', // TODO(owner)
    heroSub: 'DRAFT — pending owner copy.', // TODO(owner)
    heroImage: '', // TODO(owner): add a real exterior photo to public/images/gallery/
    heroImageAlt: '',
    primaryCtaLabel: 'Get Your Painting Quote',
    proofState: 'coming-soon',
    gallery: [], // TODO(owner): real exterior project photos
    faqs: [], // TODO(owner)
    accent: 'charcoal',
    leadSource: 'exterior-painting',
    leadServiceTag: 'exterior painting',
    trackingPage: 'exterior_painting',
  },
}

/** All services, sorted by display order (includes drafts). */
export function getAllServices(): ServiceDefinition[] {
  return Object.values(services).sort((a, b) => a.order - b.order)
}

/** A single service by slug, or undefined if not found. */
export function getService(slug: string): ServiceDefinition | undefined {
  return (services as Record<string, ServiceDefinition>)[slug]
}

/**
 * Live services only (the page exists). This is what nav, footer, and sitemap
 * should iterate — never link to a service whose page hasn't shipped.
 */
export function getLiveServices(): ServiceDefinition[] {
  return getAllServices().filter((service) => service.status === 'live')
}

/** Alias for header/footer nav consumers. */
export function getNavServices(): ServiceDefinition[] {
  return getLiveServices()
}

export { services }
