import { ImageResponse } from 'next/og'
import { OgLogoMark } from '@/components/marketing/OgLogoMark'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Zenno — Your chats, answered. Your calendar, filled.'

export default function OpengraphImage() {
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
          fontFamily: 'sans-serif',
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
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>zenno</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            Your chats, answered.
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05, color: '#6ee7b7' }}>
            Your calendar, filled.
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 24, color: 'rgba(255,255,255,0.6)' }}>
          An AI receptionist that books appointments 24/7
        </div>
      </div>
    ),
    { ...size },
  )
}
