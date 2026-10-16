import { ogAlt, renderOgImage } from '@/components/marketing/OgImage'
import { landingContent } from '@/lib/marketing/content/landing'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = ogAlt('th', landingContent('clinics', 'th').og)

export default function OpengraphImage() {
  return renderOgImage('th', landingContent('clinics', 'th').og, landingContent('clinics', 'en').og)
}
