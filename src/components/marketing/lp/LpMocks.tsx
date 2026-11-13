import { Check, CalendarCheck2, Gift } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import styles from './LpMocks.module.css'

/** Small, quiet UI sketches for the four numbered cards: one idea each, no real data. */
const T: Record<Lang, {
  ask: string
  reply: string
  booked: string
  voucher: string
  sold: string
  reminder: string
  noShows: string
  ownPage: string
  commission: string
}> = {
  de: {
    ask: 'Haben Sie Samstag noch was frei?',
    reply: 'Ja, 10:00 bei Nok. Soll ich buchen?',
    booked: 'Gebucht · Sa 10:00',
    voucher: 'Gutschein',
    sold: 'Verkauft · 02:14',
    reminder: 'Bis morgen um 10:00, Lea!',
    noShows: 'Ausfälle pro Woche',
    ownPage: 'Buchung · eigene Seite',
    commission: '0 % Provision',
  },
  en: {
    ask: 'Any time free on Saturday?',
    reply: 'Yes, 10:00 with Nok. Shall I book it?',
    booked: 'Booked · Sat 10:00',
    voucher: 'Gift card',
    sold: 'Sold · 02:14',
    reminder: 'See you tomorrow at 10:00, Lea!',
    noShows: 'No-shows per week',
    ownPage: 'Booking · own page',
    commission: '0 % commission',
  },
  th: {
    ask: 'เสาร์นี้ยังว่างไหมคะ?',
    reply: 'ว่างค่ะ 10:00 กับนก จองเลยไหมคะ?',
    booked: 'จองแล้ว · เสาร์ 10:00',
    voucher: 'บัตรของขวัญ',
    sold: 'ขายแล้ว · 02:14',
    reminder: 'พรุ่งนี้ 10:00 เจอกันนะคะ คุณลีอา!',
    noShows: 'คิวที่เบี้ยวต่อสัปดาห์',
    ownPage: 'คิว · หน้าจองของร้าน',
    commission: 'ค่าคอม 0 %',
  },
}

export function ChatMock({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <div className={styles.stack}>
      <span className={styles.time}>23:47</span>
      <p className={`${styles.bubble} ${styles.them}`}>{t.ask}</p>
      <p className={`${styles.bubble} ${styles.us}`}>{t.reply}</p>
      <span className={styles.pill}>
        <CalendarCheck2 size={14} aria-hidden /> {t.booked}
      </span>
    </div>
  )
}

export function VoucherMock({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <div className={styles.stack}>
      <div className={styles.voucher}>
        <span className={styles.voucherTop}>
          <Gift size={16} aria-hidden /> {t.voucher}
        </span>
        <strong>50 €</strong>
        <span className={styles.qr} aria-hidden>
          {Array.from({ length: 16 }, (_, i) => (
            <i key={i} className={[0, 2, 5, 6, 9, 11, 12, 15].includes(i) ? styles.qrOn : ''} />
          ))}
        </span>
      </div>
      <span className={`${styles.pill} ${styles.pillFloat}`}>
        <Check size={14} aria-hidden /> {t.sold}
      </span>
    </div>
  )
}

export function ReminderMock({ lang }: { lang: Lang }) {
  const t = T[lang]
  const bars = [5, 4, 3, 2, 2, 1]
  return (
    <div className={styles.stack}>
      <p className={styles.notice}>
        <b>Zenno</b>
        <span>{t.reminder}</span>
      </p>
      <div className={styles.bars}>
        <span className={styles.barsLabel}>{t.noShows}</span>
        <div className={styles.barsRow} aria-hidden>
          {bars.map((h, i) => (
            <i key={i} style={{ height: `${h * 18}%` }} className={i >= 3 ? styles.barGood : ''} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function CommissionMock({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <div className={styles.rows}>
      {['65 €', '89 €', '58 €'].map((price) => (
        <div key={price} className={styles.row}>
          <span className={styles.rowLine} />
          <span className={styles.rowText}>{t.ownPage}</span>
          <span className={styles.rowPrice}>{price}</span>
          <span className={styles.rowTag}>{t.commission}</span>
        </div>
      ))}
    </div>
  )
}
