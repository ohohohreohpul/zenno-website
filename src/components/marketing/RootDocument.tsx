import type { ReactNode } from 'react'
import { Geist, Geist_Mono, Noto_Sans_Thai } from 'next/font/google'
import type { Lang } from '@/lib/marketing/lang'
import { organizationSchema, websiteSchema } from '@/lib/marketing/jsonld'
import { JsonLd } from './JsonLd'
import '@/app/globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
// Geist has no Thai glyphs; only the Thai locale loads this font.
const notoThai = Noto_Sans_Thai({ variable: '--font-thai', subsets: ['thai'], preload: false })

interface RootDocumentProps {
  lang: Lang
  children: ReactNode
}

/**
 * The `<html>` shell shared by the per-locale root layouts. Each locale has its
 * own root layout so the static HTML ships the right `lang` attribute — the
 * signal Google uses, which a client-side fix never reached.
 */
export function RootDocument({ lang, children }: RootDocumentProps) {
  const fonts = [geistSans.variable, geistMono.variable, lang === 'th' ? notoThai.variable : '']
  return (
    <html lang={lang} className={`${fonts.join(' ')} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema(lang)} />
        {children}
      </body>
    </html>
  )
}
