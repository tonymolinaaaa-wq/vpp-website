import Image from 'next/image'

type TrustSignalCardsProps = {
  compact?: boolean
}

function StarRating() {
  return (
    <span className="mb-4 flex justify-center gap-[2px]" aria-label="5.0 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#C24A22" className="h-5 w-5" aria-hidden="true">
          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
        </svg>
      ))}
    </span>
  )
}

function WarrantyIcon() {
  return (
    <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-sage/30 bg-sage/15 text-sage shadow-sm" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
        <path
          d="M12 2.75l7 2.55v5.65c0 4.55-2.88 8.62-7 10.13-4.12-1.51-7-5.58-7-10.13V5.3l7-2.55z"
          fill="currentColor"
          opacity="0.95"
        />
        <path
          d="M8.25 12.2l2.35 2.35 5.15-5.3"
          stroke="#FAF6EC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.1}
        />
      </svg>
    </span>
  )
}

export function TrustSignalCards({ compact = false }: TrustSignalCardsProps) {
  const gridClass = compact
    ? 'grid grid-cols-1 gap-3 sm:grid-cols-2'
    : 'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'

  return (
    <div className={gridClass}>
      <a
        href="https://g.page/r/CX7AG1aNL5PkEBE"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center rounded-lg border border-rule/70 bg-cream p-5 text-center transition-all hover:-translate-y-0.5 hover:border-terra/60 hover:shadow-md"
        aria-label="Read all 7 five-star Google reviews - opens Google in a new tab"
      >
        <StarRating />
        <div className="font-body text-lg font-bold text-ink">5.0 Google Rating</div>
        <div className="mt-1 font-body text-sm text-brown">7 public reviews from East Valley homeowners.</div>
        <span className="mt-4 inline-block font-body text-xs font-semibold uppercase tracking-[0.16em] text-terra group-hover:text-terra-dark">
          Read reviews
        </span>
      </a>

      <a
        href="https://azroc.my.site.com/AZRoc/s/contractor-search?licenseId=a0ocs00000JC2pVAAT"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center rounded-lg border border-rule/70 bg-cream p-5 text-center transition-all hover:-translate-y-0.5 hover:border-terra/60 hover:shadow-md"
        aria-label="Verify AZ ROC CR-34 license #363664 on the Arizona Registrar of Contractors website - opens in a new tab"
      >
        <picture>
          <source srcSet="/images/badge-az-roc.webp" type="image/webp" />
          <Image
            src="/images/badge-az-roc.png"
            alt="Arizona Registrar of Contractors licensed contractor badge"
            width={48}
            height={48}
            className="mb-4 h-12 w-12"
            unoptimized
          />
        </picture>
        <div className="font-body text-lg font-bold text-ink">AZ ROC CR-34 #363664</div>
        <div className="mt-1 font-body text-sm text-brown">Bonded, insured, and publicly verifiable.</div>
        <span className="mt-4 inline-block font-body text-xs font-semibold uppercase tracking-[0.16em] text-terra group-hover:text-terra-dark">
          Verify license
        </span>
      </a>

      <a
        href="https://www.bbb.org/us/az/mesa/profile/painting-contractors/valley-painting-pros-llc-1126-1000156113/#sealclick"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="group flex flex-col items-center rounded-lg border border-rule/70 bg-cream p-5 text-center transition-all hover:-translate-y-0.5 hover:border-terra/60 hover:shadow-md"
        aria-label="Verify Valley Painting Pros BBB Accreditation - opens BBB Business Profile in a new tab"
      >
        <div className="mb-4 flex h-[52px] w-full items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://seal-central-northern-western-arizona.bbb.org/seals/blue-seal-250-52-whitetxt-bbb-1000156113.png"
            alt="Valley Painting Pros LLC BBB Business Review"
            width={250}
            height={52}
            style={{ border: 0 }}
            className="h-[52px] w-auto max-w-full"
          />
        </div>
        <div className="font-body text-lg font-bold text-ink">BBB Accredited</div>
        <div className="mt-1 font-body text-sm text-brown">Torch Awards nominee for ethics.</div>
        <span className="mt-4 inline-block font-body text-xs font-semibold uppercase tracking-[0.16em] text-terra group-hover:text-terra-dark">
          View profile
        </span>
      </a>

      <div className="flex flex-col items-center rounded-lg border border-rule/70 bg-cream p-5 text-center">
        <WarrantyIcon />
        <div className="font-body text-lg font-bold text-ink">5-Year Warranty</div>
        <div className="mt-1 font-body text-sm text-brown">Delivered in writing at job completion.</div>
        <span className="mt-4 inline-block font-body text-xs font-semibold uppercase tracking-[0.16em] text-terra">
          Written protection
        </span>
      </div>
    </div>
  )
}
