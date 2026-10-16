import { ogAlt, renderOgImage } from '@/components/marketing/OgImage'
import { FEATURE_PAGES } from '@/lib/marketing/content/featurePages'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const og = FEATURE_PAGES['vouchers'].th.og
export const alt = ogAlt('th', og)

export default function OpengraphImage() {
  return renderOgImage('th', og, FEATURE_PAGES['vouchers'].en.og)
}
