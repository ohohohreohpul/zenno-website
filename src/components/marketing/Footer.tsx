import { LANGS, LANG_NAME, homePath, localePath, type Lang } from '@/lib/marketing/lang'
import { HELP_URL, SUPPORT_EMAIL } from '@/lib/marketing/config'
import { FEATURE_SLUGS, INDUSTRY_SLUGS, PAGE_LABEL, type PageSlug } from '@/lib/marketing/pages'
import styles from './Footer.module.css'

interface FooterLink {
  label: string
  href: string
}

interface FooterCol {
  title: string
  links: FooterLink[]
}

/** The channels the receptionist answers on today. */
const CHANNELS: readonly (readonly [string, string])[] = [
  ['WhatsApp', '#10b981'],
  ['E-Mail', '#0ea5e9'],
  ['Website', '#3d3833'],
]

interface FooterStrings {
  tagline: string
  product: { title: string; calendar: string; receptionist: string; vouchers: string; pricing: string }
  useCases: { title: string }
  help: { title: string; docs: string; support: string }
  company: { title: string; links: string[] }
  languages: string
  rights: string
  previously: string
}

const STRINGS: Record<Lang, FooterStrings> = {
  de: {
    tagline: 'Die Buchungssoftware, die für Sie bucht.',
    product: { title: 'Produkt', calendar: 'Kalender', receptionist: 'KI-Rezeption', vouchers: 'Gutscheine', pricing: 'Preise' },
    useCases: { title: 'Branchen' },
    help: { title: 'Hilfe', docs: 'Hilfe-Center', support: 'Support' },
    company: { title: 'Unternehmen', links: ['Datenschutz', 'AGB', 'Impressum'] },
    languages: 'Sprache',
    rights: 'Alle Rechte vorbehalten.',
    previously: 'Früher onbuuk.com',
  },
  en: {
    tagline: 'Booking software that books itself.',
    product: { title: 'Product', calendar: 'Calendar', receptionist: 'AI receptionist', vouchers: 'Vouchers', pricing: 'Pricing' },
    useCases: { title: 'Industries' },
    help: { title: 'Help', docs: 'Help centre', support: 'Support' },
    company: { title: 'Company', links: ['Privacy', 'Terms', 'Imprint'] },
    languages: 'Language',
    rights: 'All rights reserved.',
    previously: 'Previously onbuuk.com',
  },
  th: {
    tagline: 'ระบบจองคิว ที่รับจองแทนคุณ',
    product: { title: 'ผลิตภัณฑ์', calendar: 'ปฏิทิน', receptionist: 'พนักงานต้อนรับ AI', vouchers: 'บัตรของขวัญ', pricing: 'ราคา' },
    useCases: { title: 'ประเภทธุรกิจ' },
    help: { title: 'ช่วยเหลือ', docs: 'ศูนย์ช่วยเหลือ', support: 'ฝ่ายบริการลูกค้า' },
    company: { title: 'บริษัท', links: ['ความเป็นส่วนตัว', 'ข้อกำหนด', 'ข้อมูลบริษัท'] },
    languages: 'ภาษา',
    rights: 'สงวนลิขสิทธิ์',
    previously: 'เดิมคือ onbuuk.com',
  },
}

function buildCols(lang: Lang): FooterCol[] {
  const t = STRINGS[lang]
  const pageLink = (slug: PageSlug): FooterLink => ({ label: PAGE_LABEL[slug][lang], href: localePath(lang, `/${slug}`) })
  return [
    {
      title: t.product.title,
      links: [
        { label: t.product.calendar, href: homePath(lang, '#calendar') },
        { label: t.product.receptionist, href: localePath(lang, '/ai-receptionist') },
        { label: t.product.vouchers, href: localePath(lang, '/vouchers') },
        ...FEATURE_SLUGS.map(pageLink),
        { label: t.product.pricing, href: homePath(lang, '#pricing') },
      ],
    },
    { title: t.useCases.title, links: INDUSTRY_SLUGS.map(pageLink) },
    {
      title: t.help.title,
      links: [
        { label: t.help.docs, href: HELP_URL },
        { label: t.help.support, href: `mailto:${SUPPORT_EMAIL}` },
      ],
    },
    // TODO: real Privacy / Terms / Impressum pages before launch.
    { title: t.company.title, links: t.company.links.map((label) => ({ label, href: '#' })) },
  ]
}

interface FooterProps {
  lang?: Lang
}

export function Footer({ lang = 'en' }: FooterProps) {
  const t = STRINGS[lang]

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brand}>
          <a href={homePath(lang, '#top')} className={styles.logo}>
            <img src="/logo/wordmark-black.svg" alt="Zenno" width={104} height={29} className={styles.wordmark} />
          </a>
          <p className={styles.tagline}>{t.tagline}</p>
          <div className={styles.channels}>
            {CHANNELS.map(([n, c]) => (
              <span key={n} className={styles.ch}>
                <i style={{ background: c }} />
                {n}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.cols}>
          {buildCols(lang).map((col) => (
            <nav key={col.title} className={styles.col} aria-label={col.title}>
              <span className={styles.colTitle}>{col.title}</span>
              {col.links.map((l) => (
                <a key={l.label} href={l.href} className={styles.link}>
                  {l.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>

      <div className={`wrap ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Zenno. {t.rights}</span>
        <nav className={styles.langs} aria-label={t.languages}>
          {LANGS.map((l) => (
            <a
              key={l}
              href={homePath(l)}
              hrefLang={l}
              lang={l}
              aria-current={l === lang ? 'true' : undefined}
              className={styles.langLink}
            >
              {LANG_NAME[l]}
            </a>
          ))}
        </nav>
        <span className={styles.made}>
          {t.previously} · <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </span>
      </div>
    </footer>
  )
}
