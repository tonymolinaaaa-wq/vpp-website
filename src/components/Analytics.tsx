'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (gaMeasurementId) {
      window.gtag?.('config', gaMeasurementId, {
        page_path: pathname,
      })
    }

    if (metaPixelId) {
      window.fbq?.('track', 'PageView')
    }
  }, [pathname])

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return

      const clickable = target.closest<HTMLElement>('a, button')
      if (!clickable) return

      const trackedEvent = clickable.dataset.analyticsEvent
      if (trackedEvent) {
        trackEvent(trackedEvent, {
          label: clickable.dataset.analyticsLabel || clickable.textContent?.trim() || undefined,
          placement: clickable.dataset.analyticsPlacement,
        })
        return
      }

      if (!(clickable instanceof HTMLAnchorElement)) return

      if (new URL(clickable.href).hash === '#quote-form') {
        trackEvent('estimate_cta_click', {
          label: clickable.textContent?.trim() || 'estimate CTA',
          page: pathname,
        })
      }

      if (clickable.href.startsWith('tel:')) {
        trackEvent('phone_click', {
          label: clickable.textContent?.trim() || 'phone',
          phone: clickable.href.replace('tel:', ''),
        })
      }

      if (clickable.href.startsWith('mailto:')) {
        trackEvent('email_click', {
          label: clickable.textContent?.trim() || 'email',
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  return (
    <>
      {gaMeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', { send_page_view: false });
            `}
          </Script>
        </>
      ) : null}

      {metaPixelId ? (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      ) : null}
    </>
  )
}
