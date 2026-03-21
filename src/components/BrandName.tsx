'use client'

interface BrandNameProps {
  className?: string
}

export function BrandName({ className = '' }: BrandNameProps) {
  return (
    <span className={className}>
      <span className="font-display">Valley Painting </span>
      <span className="font-display italic text-terra">Pros</span>
    </span>
  )
}
