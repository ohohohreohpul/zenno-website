import '@/styles/marketing.css'
import type { Metadata } from 'next'
import { RootDocument } from '@/components/marketing/RootDocument'
import { LANGS, homePath, type Lang } from '@/lib/marketing/lang'

// Next adds `noindex` to 404 responses itself.
export const metadata: Metadata = {
  title: 'Seite nicht gefunden · Page not found | Zenno',
}

const COPY: Record<Lang, { title: string; cta: string }> = {
  de: { title: 'Diese Seite gibt es nicht.', cta: 'Zur Startseite' },
  en: { title: 'This page doesn’t exist.', cta: 'Go to the homepage' },
  th: { title: 'ไม่พบหน้านี้', cta: 'กลับหน้าแรก' },
}

/** Site-wide 404 (German first, as the primary market), with a way home in every locale. */
export default function GlobalNotFound() {
  return (
    <RootDocument lang="de">
      <main className="zx" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <div className="wrap" style={{ display: 'grid', gap: '2rem', paddingBlock: '6rem' }}>
          <span className="kicker">404</span>
          {LANGS.map((lang) => (
            <div key={lang} lang={lang} style={{ display: 'grid', gap: '0.8rem', justifyItems: 'start' }}>
              {lang === 'de' ? (
                <h1 className="title">{COPY[lang].title}</h1>
              ) : (
                <p className="sub" style={{ margin: 0 }}>{COPY[lang].title}</p>
              )}
              <a href={homePath(lang)} className={lang === 'de' ? 'btn' : 'btn ghost'}>
                {COPY[lang].cta} <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </main>
    </RootDocument>
  )
}
