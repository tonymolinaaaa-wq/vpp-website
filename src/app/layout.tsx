import type { Metadata } from 'next'
import { Alfa_Slab_One, Inter } from 'next/font/google'
import './globals.css'

const alfaSlab = Alfa_Slab_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cabinet Refinishing in Chandler, Gilbert, Mesa, Queen Creek, Scottsdale & Tempe | Valley Painting Pros',
  description:
    'Cabinet refinishing in the East Valley. AZ ROC #363664, 5-star rated, 5-year warranty. Custom quote — free in-home estimate. Same cabinets, completely different kitchen in 3–5 days. Call (480) 433-2680.',
  openGraph: {
    title: 'Cabinet Refinishing in Chandler, Gilbert, Mesa, Queen Creek, Scottsdale & Tempe | Valley Painting Pros',
    description:
      'Cabinet refinishing in the East Valley. AZ ROC #363664, 5-star rated, 5-year warranty. Custom quote — free in-home estimate. Same cabinets, completely different kitchen in 3–5 days. Call (480) 433-2680.',
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
    { '@type': 'City', name: 'Scottsdale, AZ' },
    { '@type': 'City', name: 'Tempe, AZ' },
  ],
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '7',
    bestRating: '5',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'license',
    name: 'AZ ROC License #363664',
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
      className={`${alfaSlab.variable} ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:image" content="/VPP_og-image.png" />
        <meta name="theme-color" content="#C24A22" />
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
