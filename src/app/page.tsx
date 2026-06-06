import type { Metadata } from 'next'
import HomePage from './HomePage'

const pageTitle =
  'Interior, Exterior & Cabinet Painting in the East Valley | Valley Painting Pros'
const pageDescription =
  'Valley Painting Pros — your East Valley painting company for interior painting, exterior painting, and cabinet refinishing. Licensed (AZ ROC #363664), bonded, insured, and 5-star rated. Fixed quotes in writing, free in-home estimates. Call (480) 433-2680.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: 'https://www.valleypaintingpros.com/',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://www.valleypaintingpros.com/',
    siteName: 'Valley Painting Pros',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/VPP_og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Valley Painting Pros — interior, exterior & cabinet painting in the East Valley. AZ ROC #363664.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/VPP_og-image.png'],
  },
}

export default function Home() {
  return <HomePage />
}
