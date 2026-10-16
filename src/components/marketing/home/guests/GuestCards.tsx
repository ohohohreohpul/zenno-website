import { ArrowRight, Check, QrCode } from 'lucide-react'
import type { Lang } from '@/lib/marketing/lang'
import { START_URL } from '@/lib/marketing/config'
import { ChannelBadge, type Channel } from '../../app-ui/ChannelBadge'
import styles from './GuestCards.module.css'

interface GuestCard {
  name: string
  photo: string
  service: string
  big: string
  status: string
  foot: { channel: Channel; title: string; when: string; amount: string } | { badges: [string, string] }
}

interface GuestCopy {
  title: string
  sub: string
  cta: string
  cards: readonly [GuestCard, GuestCard, GuestCard]
}

const COPY: Record<Lang, GuestCopy> = {
  en: {
    title: 'Every guest, looked after.',
    sub: 'Bookings, vouchers and changes, handled the same minute, on the channel the guest already uses.',
    cta: 'Start free',
    cards: [
      {
        name: 'Lea S.',
        photo: '/images/people/guest-lea.webp',
        service: 'Thai massage · 60 min',
        big: 'Sat 10:00',
        status: 'Booked',
        foot: { channel: 'whatsapp', title: 'Booked on WhatsApp', when: 'Friday, 23:04', amount: '70 €' },
      },
      {
        name: 'Julia K.',
        photo: '/images/people/guest-julia.webp',
        service: 'Gift voucher for her mum',
        big: '50,00 €',
        status: 'Voucher sold',
        foot: { badges: ['Paid by card', 'QR · ZN-7Q4K'] },
      },
      {
        name: 'Max R.',
        photo: '/images/people/guest-max.webp',
        service: 'Facial · 60 min',
        big: 'Thu 15:00',
        status: 'Moved',
        foot: { channel: 'email', title: 'Moved by email', when: 'Today, 12:31', amount: '85 €' },
      },
    ],
  },
  de: {
    title: 'Jeder Gast, gut betreut.',
    sub: 'Buchungen, Gutscheine und Änderungen, in derselben Minute erledigt, auf dem Kanal, den der Gast sowieso nutzt.',
    cta: 'Kostenlos starten',
    cards: [
      {
        name: 'Lea S.',
        photo: '/images/people/guest-lea.webp',
        service: 'Thai-Massage · 60 Min.',
        big: 'Sa 10:00',
        status: 'Gebucht',
        foot: { channel: 'whatsapp', title: 'Per WhatsApp gebucht', when: 'Freitag, 23:04', amount: '70 €' },
      },
      {
        name: 'Julia K.',
        photo: '/images/people/guest-julia.webp',
        service: 'Gutschein für ihre Mutter',
        big: '50,00 €',
        status: 'Gutschein verkauft',
        foot: { badges: ['Per Karte bezahlt', 'QR · ZN-7Q4K'] },
      },
      {
        name: 'Max R.',
        photo: '/images/people/guest-max.webp',
        service: 'Gesichtsbehandlung · 60 Min.',
        big: 'Do 15:00',
        status: 'Verschoben',
        foot: { channel: 'email', title: 'Per E-Mail verschoben', when: 'Heute, 12:31', amount: '85 €' },
      },
    ],
  },
  th: {
    title: 'ดูแลลูกค้าทุกคน ได้ทันที',
    sub: 'การจอง บัตรของขวัญ และการเปลี่ยนนัด จัดการได้ในนาทีเดียวกัน ผ่านช่องทางที่ลูกค้าใช้อยู่แล้ว',
    cta: 'เริ่มใช้ฟรี',
    cards: [
      {
        name: 'Lea S.',
        photo: '/images/people/guest-lea.webp',
        service: 'นวดไทย · 60 นาที',
        big: 'ส. 10:00',
        status: 'จองแล้ว',
        foot: { channel: 'whatsapp', title: 'จองผ่าน WhatsApp', when: 'วันศุกร์ 23:04', amount: '70 €' },
      },
      {
        name: 'Julia K.',
        photo: '/images/people/guest-julia.webp',
        service: 'บัตรของขวัญให้คุณแม่',
        big: '50,00 €',
        status: 'ขายบัตรแล้ว',
        foot: { badges: ['จ่ายด้วยบัตร', 'QR · ZN-7Q4K'] },
      },
      {
        name: 'Max R.',
        photo: '/images/people/guest-max.webp',
        service: 'ทรีตเมนต์หน้า · 60 นาที',
        big: 'พฤ. 15:00',
        status: 'เลื่อนนัดแล้ว',
        foot: { channel: 'email', title: 'เลื่อนนัดทางอีเมล', when: 'วันนี้ 12:31', amount: '85 €' },
      },
    ],
  },
}

interface GuestCardsProps {
  lang: Lang
}

/** Three guests, three moments: booked, voucher sold, appointment moved. */
export function GuestCards({ lang }: GuestCardsProps) {
  const t = COPY[lang]

  return (
    <section id="guests" className={styles.section} aria-labelledby="guests-heading">
      <div className="wrap">
        <div className={styles.head}>
          <h2 data-reveal id="guests-heading" className={styles.title}>
            {t.title}
          </h2>
          <p data-reveal className={styles.sub}>
            {t.sub}
          </p>
          <a data-reveal href={START_URL} className="btn">
            {t.cta} <ArrowRight size={16} className="arrow" aria-hidden />
          </a>
        </div>

        <ul className={styles.cards}>
          {t.cards.map((card, i) => (
            <li key={card.name} data-reveal className={`${styles.card} ${i === 1 ? styles.center : ''}`}>
              <img src={card.photo} alt="" width={900} height={1200} loading="lazy" decoding="async" className={styles.photo} />
              <div className={styles.overlay}>
                <span className={styles.service}>{card.service}</span>
                <b className={`tabular ${styles.big}`}>{card.big}</b>
                <span className={styles.status}>
                  <Check size={14} strokeWidth={2.5} aria-hidden /> {card.status}
                </span>
              </div>
              <div className={`zn ${styles.foot}`}>
                {'badges' in card.foot ? (
                  <div className={styles.badges}>
                    <span>
                      <Check size={15} strokeWidth={2.5} aria-hidden /> {card.foot.badges[0]}
                    </span>
                    <span>
                      <QrCode size={15} aria-hidden /> {card.foot.badges[1]}
                    </span>
                  </div>
                ) : (
                  <div className={styles.row}>
                    <span className={`zn-avatar ${styles.avatar}`}>
                      {card.name.charAt(0)}
                      <ChannelBadge channel={card.foot.channel} />
                    </span>
                    <span className={styles.rowText}>
                      <b>{card.foot.title}</b>
                      <span className="tabular">
                        {card.name} · {card.foot.when}
                      </span>
                    </span>
                    <b className="tabular">{card.foot.amount}</b>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
