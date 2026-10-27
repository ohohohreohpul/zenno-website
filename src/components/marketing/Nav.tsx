'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LANGS, LANG_LABEL, LANG_NAME, homePath, localePath, type Lang } from '@/lib/marketing/lang'
import { HELP_URL, START_URL } from '@/lib/marketing/config'
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

const STRINGS: Record<Lang, { links: NavLink[]; newBadge: string; cta: string; ctaShort: string; switchTo: string; menu: string }> = {
  de: {
    links: [
      { label: 'Kalender', hash: '#calendar' },
      { label: 'KI-Rezeption', path: localePath('de', '/ai-receptionist'), isNew: true },
      { label: 'Gutscheine', path: localePath('de', '/vouchers') },
      { label: 'Preise', hash: '#pricing' },
      { label: 'Hilfe', path: HELP_URL },
    ],
    newBadge: 'Neu',
    cta: 'Kostenlos starten',
    ctaShort: 'Starten',
    switchTo: 'Sprache wechseln zu',
    menu: 'Menü',
  },
  en: {
    links: [
      { label: 'Calendar', hash: '#calendar' },
      { label: 'AI receptionist', path: localePath('en', '/ai-receptionist'), isNew: true },
      { label: 'Vouchers', path: localePath('en', '/vouchers') },
      { label: 'Pricing', hash: '#pricing' },
      { label: 'Help', path: HELP_URL },
    ],
    newBadge: 'New',
    cta: 'Start free',
    ctaShort: 'Start',
    switchTo: 'Switch language to',
    menu: 'Menu',
  },
  th: {
    links: [
      { label: 'ปฏิทิน', hash: '#calendar' },
      { label: 'พนักงานต้อนรับ AI', path: localePath('th', '/ai-receptionist'), isNew: true },
      { label: 'บัตรของขวัญ', path: localePath('th', '/vouchers') },
      { label: 'ราคา', hash: '#pricing' },
      { label: 'ช่วยเหลือ', path: HELP_URL },
    ],
    newBadge: 'ใหม่',
    cta: 'เริ่มใช้ฟรี',
    ctaShort: 'เริ่ม',
    switchTo: 'เปลี่ยนภาษาเป็น',
    menu: 'เมนู',
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
  /**
   * Locale-free path of this page when it exists in every locale (e.g.
   * '/booking'), so the switcher stays on the same page. Omit on English-only
   * pages: the switcher then points at each locale's homepage.
   */
  localizedPath?: string
  /**
   * Per-locale path overrides for routes missing in some locales (location
   * pages have no Thai version, so the TH switch points at the industry page).
   */
  langPaths?: Partial<Record<Lang, string>>
}

export function Nav({ lang = 'en', onLightBg = false, localizedPath, langPaths }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = STRINGS[lang]
  const otherLangs = LANGS.filter((l) => l !== lang)
  const solid = scrolled || onLightBg || isMenuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  return (
    <header className={`${styles.nav} ${solid ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href={homePath(lang, '#top')} className={styles.logo} aria-label="Zenno home">
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
            <a key={l.label} href={l.path ?? homePath(lang, l.hash)} className={styles.link}>
              {l.label}
              {l.isNew && <span className={styles.newBadge}>{t.newBadge}</span>}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <span className={styles.langs}>
            {otherLangs.map((l) => (
              <a
                key={l}
                href={localePath(l, langPaths?.[l] ?? localizedPath ?? '/')}
                hrefLang={l}
                lang={l}
                className={styles.langSwitch}
                aria-label={`${t.switchTo} ${LANG_NAME[l]}`}
              >
                {LANG_LABEL[l]}
              </a>
            ))}
          </span>
          <Magnetic strength={0.4}>
            <a href={START_URL} className={`btn ${styles.cta}`}>
              <span className={styles.ctaFull}>{t.cta}</span>
              <span className={styles.ctaShort}>{t.ctaShort}</span>
              <span className="arrow">→</span>
            </a>
          </Magnetic>
          <button
            type="button"
            className={styles.menuButton}
            aria-label={t.menu}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            onClick={() => setIsMenuOpen((o) => !o)}
          >
            {isMenuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="site-menu" className={styles.panel} aria-label={t.menu}>
          {t.links.map((l) => (
            <a
              key={l.label}
              href={l.path ?? homePath(lang, l.hash)}
              className={styles.panelLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {l.label}
              {l.isNew && <span className={styles.newBadge}>{t.newBadge}</span>}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
