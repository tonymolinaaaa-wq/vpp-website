export function Footer() {
  return (
    <footer className="bg-ink py-12 md:py-16">
      <div className="mx-auto max-w-content px-6">
        {/* Row 1 — Brand + Contact */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-14 flex-shrink-0 overflow-hidden rounded bg-ink" aria-hidden="true">
                <img
                  src="/logos/svgs/vppmonogramcolorondark.svg"
                  alt=""
                  width={1254}
                  height={1254}
                  className="absolute left-[47%] top-1/2 h-[76px] w-[76px] max-w-none -translate-x-1/2 -translate-y-1/2"
                  loading="lazy"
                />
              </span>
              <span>
                <span className="font-display text-cream text-xl leading-none">Valley Painting </span>
                <span className="font-display italic text-terra text-xl leading-none">Pros</span>
                <span className="block w-40 h-[2px] bg-terra mt-2" />
              </span>
            </div>
            <a
              href="tel:+14804332680"
              className="block font-body font-semibold text-lg text-terra-light hover:text-terra transition-colors"
            >
              (480) 433-2680
            </a>
            <a
              href="mailto:valleypaintingprosllc@gmail.com"
              className="block font-body text-sm text-rule hover:text-sand-light transition-colors"
            >
              valleypaintingprosllc@gmail.com
            </a>
            <p className="font-body text-sm text-rule">
              Chandler · Gilbert · Mesa · Queen Creek · Scottsdale · Tempe
            </p>
          </div>

          {/* Trust credentials */}
          <div className="space-y-3">
            {/* BBB Badge */}
            <a
              href="https://www.bbb.org/us/az/mesa/profile/painting-contractors/valley-painting-pros-llc-1126-1000156113/#sealclick"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity group"
              aria-label="BBB Accredited Business — View VPP profile"
            >
              <span className="inline-flex items-center justify-center bg-[#005A78] text-white font-bold text-[13px] tracking-wide rounded px-2 py-1 leading-none flex-shrink-0">
                BBB
              </span>
              <div className="flex flex-col">
                <span className="font-body font-semibold text-[13px] text-sand-light leading-tight">
                  Accredited Business
                </span>
                <span className="font-body text-[11px] text-mid leading-tight mt-0.5">
                  A+ Rating · Torch Awards Nominee
                </span>
              </div>
            </a>

            <p className="font-body text-[13px] text-mid">
              AZ ROC #363664 · Licensed, Bonded &amp; Insured
            </p>
            <p className="font-body text-[13px] text-mid flex items-center gap-1">
              5.0{' '}
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#C24A22" className="w-3.5 h-3.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                ))}
              </span>{' '}
              Google Reviews
            </p>
          </div>
        </div>

        {/* Bottom row — Legal */}
        <div className="border-t border-mid/30 pt-6 space-y-2">
          <p className="font-body font-light text-[11px] text-rule">
            &copy; 2026 Valley Painting Pros, LLC. All rights reserved.
          </p>
          <p className="font-body font-light text-[11px] text-rule">
            You may file a complaint with the Registrar of Contractors at{' '}
            <a href="tel:+16025421525" className="underline hover:text-sand-light">
              (602) 542-1525
            </a>{' '}
            or{' '}
            <a
              href="https://www.roc.az.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-sand-light"
            >
              www.roc.az.gov
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
