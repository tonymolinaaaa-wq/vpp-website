import type { Metadata } from 'next'
import { DM_Serif_Display, Outfit, Lora } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--font-accent',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cabinet Refinishing in Chandler, Gilbert, Mesa, Queen Creek & Tempe | Valley Painting Pros',
  description:
    'Cabinet refinishing at $150 per opening. 5-star rated, ROC licensed, 5-year warranty. Same cabinets, completely different kitchen in 3–5 days. Call (480) 433-2680.',
  openGraph: {
    title: 'Cabinet Refinishing in Chandler, Gilbert, Mesa, Queen Creek & Tempe | Valley Painting Pros',
    description:
      'Cabinet refinishing at $150 per opening. 5-star rated, ROC licensed, 5-year warranty. Same cabinets, completely different kitchen in 3–5 days. Call (480) 433-2680.',
    type: 'website',
    locale: 'en_US',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Valley Painting Pros',
  description:
    'Professional cabinet refinishing in the East Valley. Licensed, insured, 5-star rated.',
  url: 'https://valleypaintingpros.com',
  telephone: '+14804332680',
  email: 'valleypaintingprosllc@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chandler',
    addressRegion: 'AZ',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Chandler, AZ' },
    { '@type': 'City', name: 'Gilbert, AZ' },
    { '@type': 'City', name: 'Mesa, AZ' },
    { '@type': 'City', name: 'Queen Creek, AZ' },
    { '@type': 'City', name: 'Tempe, AZ' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '7',
    bestRating: '5',
  },
  priceRange: '$$',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'AZ ROC License #363664 — CR-34 Painting and Wallcovering',
  },
  sameAs: [
    'https://www.facebook.com/valleyprosaz',
    'https://www.instagram.com/valleyprosaz',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${outfit.variable} ${lora.variable}`}
    >
      <head>
        <link rel="icon" href="/VPP_favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/VPP_apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:image" content="/VPP_og-image.png" />
        <meta name="theme-color" content="#C4613A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <noscript>
          <style>{`[data-reveal] { opacity: 1 !important; transform: none !important; animation: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
