import { ogAlt, renderOgImage } from '@/components/marketing/OgImage'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = ogAlt('en')

export default function OpengraphImage() {
  return renderOgImage('en')
}
