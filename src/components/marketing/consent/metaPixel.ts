type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue: unknown[][]; loaded: boolean; version: string; push: Fbq }

declare global {
  interface Window {
    fbq?: Fbq
    _fbq?: Fbq
  }
}

const SCRIPT_SRC = 'https://connect.facebook.net/en_US/fbevents.js'

/** Meta's base pixel code, loaded only after consent, then one PageView. */
export function loadMetaPixel(pixelId: string): void {
  if (window.fbq) return
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue.push(args)
  } as Fbq
  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.queue = []
  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = SCRIPT_SRC
  document.head.appendChild(script)

  fbq('init', pixelId)
  fbq('track', 'PageView')
}

/** Reports a click on any "Start free" link (into the app) as a Meta Lead event. */
let isTrackingClicks = false

export function trackStartFreeClicks(startUrl: string): void {
  if (isTrackingClicks) return
  isTrackingClicks = true
  const appOrigin = new URL(startUrl).origin
  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest?.('a[href]')
    if (!(link instanceof HTMLAnchorElement)) return
    if (new URL(link.href, window.location.href).origin !== appOrigin) return
    window.fbq?.('track', 'Lead', { content_name: 'start_free' })
  })
}
