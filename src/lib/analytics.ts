type AnalyticsParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

const metaStandardEvents: Record<string, string> = {
  quote_form_submit: 'Lead',
  phone_click: 'Contact',
  email_click: 'Contact',
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return

  window.gtag?.('event', eventName, params)

  const metaEventName = metaStandardEvents[eventName]
  if (metaEventName) {
    window.fbq?.('track', metaEventName, params)
    return
  }

  window.fbq?.('trackCustom', eventName, params)
}
