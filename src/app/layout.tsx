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
  title: 'Valley Painting Pros | East Valley Residential Painting',
  description:
    'Licensed residential painting in Chandler, Gilbert, Mesa & Tempe. Cabinet refinishing from $2,250. AZ ROC #363664.',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Valley Painting Pros',
  telephone: '+14804332680',
  email: 'valleypaintingprosllc@gmail.com',
  url: 'https://valleypaintingpros.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chandler',
    addressRegion: 'AZ',
  },
  areaServed: ['Chandler', 'Gilbert', 'Mesa', 'Tempe'],
  priceRange: '$$',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
