import type { Lang } from '@/lib/marketing/lang'
import { HELP_URL, LEGACY_BOOKING_DOMAIN } from '@/lib/marketing/config'
import styles from './ExistingCustomers.module.css'

const STRINGS: Record<
  Lang,
  { kicker: string; titlePre: string; titleGhost: string; lead: string; cta: string; carried: string; items: string[] }
> = {
  en: {
    kicker: `Already on ${LEGACY_BOOKING_DOMAIN}?`,
    titlePre: 'New name.',
    titleGhost: 'Nothing else to do.',
    lead: 'onbuuk is now Zenno. Everything you set up is still there, and the calendar, vouchers and AI receptionist are now in the same app.',
    cta: 'Help centre',
    carried: 'carried over',
    items: ['Your account & login', 'Services & specialists', 'Your booking link', 'Client history', 'Your plan & billing'],
  },
  de: {
    kicker: `Schon bei ${LEGACY_BOOKING_DOMAIN}?`,
    titlePre: 'Neuer Name.',
    titleGhost: 'Sonst nichts zu tun.',
    lead: 'onbuuk ist jetzt Zenno. Alles, was Sie eingerichtet haben, ist noch da, und Kalender, Gutscheine und KI-Rezeption sind jetzt in derselben App.',
    cta: 'Hilfe-Center',
    carried: 'übernommen',
    items: ['Konto & Login', 'Leistungen & Fachkräfte', 'Ihr Buchungslink', 'Kundenhistorie', 'Tarif & Abrechnung'],
  },
  th: {
    kicker: `ใช้ ${LEGACY_BOOKING_DOMAIN} อยู่แล้ว?`,
    titlePre: 'ชื่อใหม่',
    titleGhost: 'ไม่ต้องทำอะไรเพิ่ม',
    lead: 'ตอนนี้ onbuuk คือ Zenno ทุกอย่างที่คุณตั้งค่าไว้ยังอยู่ครบ และปฏิทิน บัตรของขวัญ และพนักงานต้อนรับ AI อยู่ในแอปเดียวกันแล้ว',
    cta: 'ศูนย์ช่วยเหลือ',
    carried: 'ย้ายมาครบ',
    items: ['บัญชีและการเข้าสู่ระบบ', 'บริการและผู้ให้บริการ', 'ลิงก์จองของคุณ', 'ประวัติลูกค้า', 'แพ็กเกจและการชำระเงิน'],
  },
}

interface ExistingCustomersProps {
  lang?: Lang
}

/** Reassurance for the people who were already paying onbuuk. */
export function ExistingCustomers({ lang = 'en' }: ExistingCustomersProps) {
  const t = STRINGS[lang]
  return (
    <section className="pad-y">
      <div className={`wrap ${styles.wrap}`}>
        <div data-reveal className={styles.copy}>
          <span className="kicker">{t.kicker}</span>
          <h2 className="title">
            {t.titlePre} <span className="ghost-word">{t.titleGhost}</span>
          </h2>
          <p className="lead">{t.lead}</p>
          <a href={HELP_URL} className="btn">
            {t.cta} <span className="arrow">→</span>
          </a>
        </div>

        <ul data-reveal className={`card ${styles.list}`}>
          {t.items.map((item) => (
            <li key={item}>
              <span className={styles.check}>✓</span>
              {item}
              <em>{t.carried}</em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
