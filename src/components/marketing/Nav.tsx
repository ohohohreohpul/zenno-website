'use client'

import { useEffect, useState } from 'react'
import type { Lang } from '@/lib/marketing/lang'
import { appHref } from '@/lib/marketing/config'
import { bookingPath } from '@/lib/marketing/content/booking'
import { Magnetic } from './primitives/Magnetic'
import styles from './Nav.module.css'

interface NavLink {
  label: string
  /** In-page anchor on the homepage (resolved per locale), or… */
  hash?: string
  /** …an absolute site path for standalone pages. */
  path?: string
  isNew?: boolean
}

const STRINGS: Record<Lang, { links: NavLink[]; newBadge: string; signin: string; cta: string; ctaShort: string }> = {
  en: {
    links: [
      { label: 'How it works', hash: '#how' },
      { label: 'Features', hash: '#features' },
      { label: 'Channels', hash: '#channels' },
      { label: 'Pricing', hash: '#pricing' },
      { label: 'Booking', path: bookingPath('en'), isNew: true },
    ],
    newBadge: 'New',
    signin: 'Sign in',
    cta: 'Get started free',
    ctaShort: 'Get started',
  },
  de: {
    links: [
      { label: 'So funktioniert’s', hash: '#how' },
      { label: 'Funktionen', hash: '#features' },
      { label: 'Kanäle', hash: '#channels' },
      { label: 'Preise', hash: '#pricing' },
      { label: 'Buchung', path: bookingPath('de'), isNew: true },
    ],
    newBadge: 'Neu',
    signin: 'Anmelden',
    cta: 'Kostenlos starten',
    ctaShort: 'Loslegen',
  },
}

interface NavProps {
  lang?: Lang
  /**
   * Set on pages that don't open with a dark photo hero (e.g. the pricing and
   * comparison deep-dive pages). Forces the ink-on-cream color scheme instead
   * of the white-on-photo scheme, which is otherwise invisible until scrolled.
   */
  onLightBg?: boolean
  /** Same page in the other language; defaults to the other homepage. */
  alternatePath?: string
}

export function Nav({ lang = 'en', onLightBg = false, alternatePath }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const t = STRINGS[lang]
  const home = lang === 'de' ? '/de' : '/'
  const switchTo =
    lang === 'de' ? { href: alternatePath ?? '/', label: 'EN' } : { href: alternatePath ?? '/de', label: 'DE' }
  const solid = scrolled || onLightBg

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.nav} ${solid ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href={`${home}#top`} className={styles.logo} aria-label="Zenno home">
          <img
            src={solid ? '/logo/wordmark-black.svg' : '/logo/wordmark-cream.svg'}
            alt="Zenno"
            width={94}
            height={26}
            className={styles.wordmark}
          />
        </a>

        <nav className={styles.links} aria-label="Primary">
          {t.links.map((l) => (
            <a key={l.label} href={l.path ?? `${home}${l.hash ?? ''}`} className={styles.link}>
              {l.label}
              {l.isNew && <span className={styles.newBadge}>{t.newBadge}</span>}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={switchTo.href} className={styles.langSwitch} aria-label={`Switch language to ${switchTo.label}`}>
            {switchTo.label}
          </a>
          <a href={appHref()} className={styles.signin}>
            {t.signin}
          </a>
          <Magnetic strength={0.4}>
            <a href={appHref()} className={`btn ${styles.cta}`}>
              <span className={styles.ctaFull}>{t.cta}</span>
              <span className={styles.ctaShort}>{t.ctaShort}</span>
              <span className="arrow">→</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  )
}
