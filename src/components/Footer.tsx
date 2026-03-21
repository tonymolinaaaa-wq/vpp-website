import { BrandName } from './BrandName'

export function Footer() {
  return (
    <footer className="bg-ink text-sand-light">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
          {/* Company Info */}
          <div className="space-y-2">
            <BrandName className="text-xl text-sand-light" />
            <p className="text-sm text-rule">Valley Painting Pros, LLC</p>
            <a
              href="tel:+14804332680"
              className="block text-lg font-body font-semibold text-terra-light hover:text-terra transition-colors"
            >
              (480) 433-2680
            </a>
            <a
              href="mailto:valleypaintingprosllc@gmail.com"
              className="block text-sm text-rule hover:text-sand-light transition-colors"
            >
              valleypaintingprosllc@gmail.com
            </a>
          </div>

          {/* Service Area */}
          <div className="space-y-2">
            <p className="font-body font-semibold text-sm uppercase tracking-wide text-mid">
              Service Area
            </p>
            <p className="text-sm text-rule">
              Chandler · Gilbert · Mesa · Tempe
            </p>
          </div>

          {/* Credentials */}
          <div className="space-y-2">
            <p className="font-body font-semibold text-sm uppercase tracking-wide text-mid">
              Credentials
            </p>
            <p className="text-sm text-rule">AZ ROC #363664</p>
            <p className="text-sm text-rule">Licensed, Bonded &amp; Insured</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 border-t border-mid/30 pt-6 space-y-2">
          <p className="text-xs text-mid">
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
          <p className="text-xs text-mid">
            &copy; {new Date().getFullYear()} Valley Painting Pros, LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
