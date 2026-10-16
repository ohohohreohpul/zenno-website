import { ogAlt, renderOgImage } from '@/components/marketing/OgImage'
import { PRICING_PAGE } from '@/lib/marketing/content/landing'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = ogAlt('th', PRICING_PAGE.th.og)

export default function OpengraphImage() {
  return renderOgImage('th', PRICING_PAGE.th.og, PRICING_PAGE.en.og)
}
