import type { Metadata } from 'next'
import CabinetPage from './CabinetPage'

export const metadata: Metadata = {
  title: 'Cabinet Refinishing in Chandler, Gilbert, Mesa & Tempe | Valley Painting Pros',
  description:
    'Cabinet refinishing at $150 per opening. 5-star rated, ROC licensed, 5-year warranty. Same cabinets, completely different kitchen in 3–5 days. Call (480) 433-2680.',
  openGraph: {
    title: 'Cabinet Refinishing in Chandler, Gilbert, Mesa & Tempe | Valley Painting Pros',
    description:
      'Cabinet refinishing at $150 per opening. 5-star rated, ROC licensed, 5-year warranty. Same cabinets, completely different kitchen in 3–5 days. Call (480) 433-2680.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function CabinetRefinishingPage() {
  return <CabinetPage />
}
