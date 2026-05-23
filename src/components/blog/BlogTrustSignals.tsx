export function BlogTrustSignals({ dark = false }: { dark?: boolean }) {
  const items = [
    'AZ ROC #363664',
    'Bonded',
    'Insured',
    '5-year written warranty',
  ]

  return (
    <div
      className={
        dark
          ? 'grid gap-3 sm:grid-cols-2 lg:grid-cols-4'
          : 'grid gap-3 sm:grid-cols-2 lg:grid-cols-4'
      }
    >
      {items.map((item) => (
        <div
          key={item}
          className={
            dark
              ? 'rounded-lg border border-sand/15 bg-cream/5 px-4 py-4'
              : 'rounded-lg border border-rule bg-cream px-4 py-4 shadow-sm'
          }
        >
          <div className="flex items-center gap-3">
            <span
              className={
                dark
                  ? 'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-sage text-sm font-bold text-cream'
                  : 'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-sage text-sm font-bold text-cream'
              }
              aria-hidden="true"
            >
              ✓
            </span>
            <span className={dark ? 'font-body text-sm font-semibold text-sand' : 'font-body text-sm font-semibold text-ink'}>
              {item}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
