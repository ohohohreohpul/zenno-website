import { ImageResponse } from 'next/og'
import type { Lang } from '@/lib/marketing/lang'
import { OgLogoMark } from './OgLogoMark'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

export interface OgCopy {
  line1: string
  line2: string
  sub: string
}

export const OG_COPY: Record<Lang, OgCopy> = {
  de: { line1: 'Mehr Buchungen,', line2: 'Gutscheine & Stammgäste.', sub: 'Online-Buchung · Gutscheine · Treuepunkte · KI-Rezeption' },
  en: { line1: 'More bookings,', line2: 'gift cards & regulars.', sub: 'Online booking · gift cards · loyalty · AI receptionist' },
  th: {
    line1: 'คิวเต็มขึ้น',
    line2: 'ลูกค้ากลับมาบ่อยขึ้น',
    sub: 'จองออนไลน์ · บัตรของขวัญ · แต้มสะสม · พนักงานต้อนรับ AI',
  },
}

export const ogAlt = (lang: Lang, copy: OgCopy = OG_COPY[lang]): string => `Zenno — ${copy.line1} ${copy.line2}`

/**
 * The image renderer's default font has no Thai glyphs, so Thai images fetch
 * Noto Sans Thai (subset to the exact text) at build time. Without network the
 * Thai image falls back to the English copy rather than rendering empty boxes.
 */
async function loadThaiFont(text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@700&text=${encodeURIComponent(text)}`,
    ).then((r) => r.text())
    const url = css.match(/src: url\((.+?)\) format/)?.[1]
    if (!url) return null
    return await fetch(url).then((r) => r.arrayBuffer())
  } catch (error) {
    console.warn('OG image: Thai font unavailable, using English copy.', error)
    return null
  }
}

/**
 * Shared Open Graph card used by every opengraph-image route. Pass `copy` for a
 * page-specific card; `fallback` is used for Thai when the Thai font can't load.
 */
export async function renderOgImage(
  lang: Lang,
  copy: OgCopy = OG_COPY[lang],
  fallback: OgCopy = OG_COPY.en,
): Promise<ImageResponse> {
  let fonts: { name: string; data: ArrayBuffer; weight: 700; style: 'normal' }[] = []

  if (lang === 'th') {
    const data = await loadThaiFont(Object.values(copy).join(''))
    if (data) fonts = [{ name: 'Noto Sans Thai', data, weight: 700, style: 'normal' }]
    else copy = fallback
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#1A1714',
          color: '#FDFCFA',
          fontFamily: fonts.length ? 'Noto Sans Thai' : 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: '#FDFCFA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <OgLogoMark size={26} />
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -1, fontFamily: 'sans-serif' }}>zenno</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 66, fontWeight: 700, letterSpacing: -2, lineHeight: 1.1 }}>{copy.line1}</div>
          <div style={{ fontSize: 66, fontWeight: 700, letterSpacing: -2, lineHeight: 1.1, color: '#6ee7b7' }}>
            {copy.line2}
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: 'rgba(255,255,255,0.62)' }}>{copy.sub}</div>
      </div>
    ),
    // An empty `fonts` array replaces the built-in font, so only pass it when Thai loaded one.
    { ...OG_SIZE, ...(fonts.length ? { fonts } : {}) },
  )
}
