import type { Metadata } from 'next'
import CabinetPage from './CabinetPage'

const pageTitle =
  'Cabinet Refinishing in Chandler, Gilbert, Mesa, Queen Creek, Scottsdale & Tempe | Valley Painting Pros'
const pageDescription =
  'Cabinet refinishing in the East Valley. AZ ROC #363664, 5-star rated, 5-year warranty. Custom quote — free in-home estimate. Same cabinets, completely different kitchen in 3–5 days. Call (480) 433-2680.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will the paint peel or chip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not when it’s done right. We use a professional 3-coat system — bonding primer, two coats of premium cabinet-grade finish, with full degreasing and sanding for adhesion before any paint touches the surface. This is not a DIY kit. Our process is backed by a 5-year written warranty.',
      },
    },
    {
      '@type': 'Question',
      name: 'How messy is this going to be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your kitchen will be out of commission for about 2 days while we work on the base cabinets. We tackle the bases first so you get your kitchen back as fast as possible. Day one we mask everything and begin prep. Day two we seal, prime, and apply two finish coats to the bases — by end of day or first thing the next morning, the masking comes down and your kitchen is yours again. Meanwhile, we work on your doors and drawers simultaneously on the driveway and in your garage. Everything stays at your home — we never take your doors offsite. Start to finish, on your property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pick any color?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work with any cabinet-grade paint color you choose. During your consultation, we’ll walk you through options and help you select a finish that matches your kitchen’s lighting, countertops, and style. Most homeowners go lighter — whites, warm grays, and greiges are the most popular choices in the East Valley right now.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from what I’d get at Home Depot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A consumer paint kit gives you one coat of acrylic over whatever’s already on your cabinets. That’s why DIY cabinet paint peels within months — no primer system, no proper prep, no degreasing. Our process includes full degreasing, mechanical sanding for adhesion, bonding primer, and two coats of professional-grade finish. Plus new soft-close hinges, hardware alignment, and a 5-year warranty. It’s a professional result — not a weekend experiment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I don’t like the result?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We stand behind our work. If there’s a defect in workmanship — uneven coverage, drips, adhesion issues, anything that doesn’t meet the professional standard we promised — we come back and make it right at no charge. That’s covered under your written warranty. Before we start, we confirm your exact color choice and sheen together so there are no surprises. If you want to change colors after the job is complete, we’re happy to do it — that’s a new project at a new price, not a warranty issue.',
      },
    },
    {
      '@type': 'Question',
      name: 'I want to get a few quotes first — what should I ask each refinisher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Smart move. Here’s the short list to ask every refinisher you compare us against: 1) Do you spray or brush/roll? (Spray = factory finish. Brush = visible marks.) 2) How many coats? (Our system is bonding primer plus two cabinet-grade finish coats.) 3) Do you sand and degrease before primer? (Both — skipping prep is why DIY paint peels.) 4) Do you remove doors and finish them off-cabinet? (We do. On-site finishing leaves drips and overspray.) 5) Is your warranty written and delivered at job completion? (Ours is, for 5 years.) 6) Is your ROC license active and complaint-free? (Look us up — #363664 — at roc.az.gov.) Bring our answers to your other estimates. If a refinisher dodges any of these questions, that’s your answer.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know I can trust your work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three layers of verification, none of which require you to take our word for it. First: AZ ROC #363664 — you can look up our license at roc.az.gov in 30 seconds. Active, in good standing, no complaints. Second: 5.0 Google rating across 7 reviews — every one on the public profile, every one named. No paid review services. Third: BBB accredited and a Torch Awards nominee for ethics. Beyond that, your protection is the written warranty delivered at job completion. If anything fails under normal use, you have a signed document that says we come back and fix it.',
      },
    },
  ],
}

export default function CabinetRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CabinetPage />
    </>
  )
}
