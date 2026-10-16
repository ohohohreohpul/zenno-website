import { ogAlt, renderOgImage } from '@/components/marketing/OgImage'
import { landingContent } from '@/lib/marketing/content/landing'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = ogAlt('de', landingContent('commission-free', 'de').og)

export default function OpengraphImage() {
  return renderOgImage('de', landingContent('commission-free', 'de').og, landingContent('commission-free', 'en').og)
}
