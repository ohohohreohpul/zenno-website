import type { Lang } from '@/lib/marketing/lang'
import { PhotoHero, type PhotoScene } from '../photo-hero/PhotoHero'
import { HeroDemo } from './HeroDemo'
import styles from './Hero.module.css'

interface HeroCopy {
  eyebrow: string
  title: string
  sub: string
  primary: string
  secondary: string
  scenesLabel: string
  shotLine: string
  scenes: readonly PhotoScene[]
}

const COPY: Record<Lang, HeroCopy> = {
  en: {
    eyebrow: 'Booking software for spas, salons and studios',
    title: 'Booking software that books itself.',
    sub: 'One calendar, an online booking page, vouchers and payments. And an AI receptionist that answers on WhatsApp, email and your website, then books for you.',
    primary: 'Start free',
    secondary: 'See it book',
    scenesLabel: 'Choose a business',
    shotLine: 'A message at 23:04. Booked before you wake up.',
    scenes: [
      {
        label: 'Massage',
        image: '/images/thai-shop.webp',
        alt: 'A Thai massage shop: Lea S. booked Saturday 10:00 with Nok on WhatsApp.',
        card: {
          notice: { channel: 'whatsapp', from: 'Lea S.', text: 'Any time for a Thai massage on Saturday?', time: '23:04' },
          reply: 'Saturday 10:00 with Nok is free. Shall I book it?',
          booking: { time: '10:00', name: 'Lea S.', service: 'Thai massage · 60 min', staff: 'Nok', color: 1 },
          around: [
            { time: '09:00', name: 'Tom B.', color: 1 },
            { time: '11:30', name: 'Kai W.', color: 1 },
          ],
          status: 'Booked · Sat 10:00',
        },
      },
      {
        label: 'Beauty',
        image: '/images/beauty-studio.webp',
        alt: 'A beauty studio: Julia K. booked a facial with Anna by email.',
        card: {
          notice: { channel: 'email', from: 'Julia K.', text: 'Do you have a facial on Friday afternoon?', time: '21:40' },
          reply: 'Friday 15:00 with Anna is free. Shall I book it?',
          booking: { time: '15:00', name: 'Julia K.', service: 'Facial · 60 min', staff: 'Anna', color: 3 },
          around: [
            { time: '13:30', name: 'Eva H.', color: 3 },
            { time: '16:30', name: 'Mia T.', color: 3 },
          ],
          status: 'Booked · Fri 15:00',
        },
      },
      {
        label: 'Yoga',
        image: '/images/yoga-hero.webp',
        alt: 'A yoga studio: a beginner booked Tuesday 18:30 from the website chat.',
        card: {
          notice: { channel: 'web', from: 'Website', text: 'Do you have a class for beginners?', time: '07:12' },
          reply: 'Yes, Tuesday 18:30 is for beginners. One spot for you?',
          booking: { time: '18:30', name: 'Sophie R.', service: 'Yoga for beginners', staff: 'Ploy', color: 2 },
          around: [
            { time: '17:00', name: 'Flow class', color: 2 },
            { time: '20:00', name: 'Yin yoga', color: 2 },
          ],
          status: 'Booked · Tue 18:30',
        },
      },
      {
        label: 'Clinic',
        image: '/images/clinic-hero.webp',
        alt: 'A wellness practice: Max R. moved his appointment to Thursday 15:00.',
        card: {
          notice: { channel: 'whatsapp', from: 'Max R.', text: 'Can I move my appointment to Thursday?', time: '12:31' },
          reply: 'Done. Thursday 15:00 with Anna, see you then.',
          booking: { time: '15:00', name: 'Max R.', service: 'Facial · 60 min', staff: 'Anna', color: 3 },
          around: [
            { time: '14:00', name: 'Eva H.', color: 3 },
            { time: '16:30', name: 'Julia K.', color: 3 },
          ],
          status: 'Moved · Thu 15:00',
        },
      },
    ],
  },
  de: {
    eyebrow: 'Buchungssoftware für Spas, Salons und Studios',
    title: 'Die Buchungssoftware, die für Sie bucht.',
    sub: 'Ein Kalender, eine Online-Buchungsseite, Gutscheine und Zahlungen. Und eine KI-Rezeption, die auf WhatsApp, per E-Mail und auf Ihrer Website antwortet und für Sie bucht.',
    primary: 'Kostenlos starten',
    secondary: 'Sehen, wie sie bucht',
    scenesLabel: 'Betrieb wählen',
    shotLine: 'Eine Nachricht um 23:04. Gebucht, bevor Sie aufwachen.',
    scenes: [
      {
        label: 'Massage',
        image: '/images/thai-shop.webp',
        alt: 'Ein Thai-Massagestudio: Lea S. hat Samstag 10:00 bei Nok per WhatsApp gebucht.',
        card: {
          notice: { channel: 'whatsapp', from: 'Lea S.', text: 'Haben Sie Samstag Zeit für eine Thai-Massage?', time: '23:04' },
          reply: 'Samstag 10:00 ist bei Nok frei. Soll ich buchen?',
          booking: { time: '10:00', name: 'Lea S.', service: 'Thai-Massage · 60 Min.', staff: 'Nok', color: 1 },
          around: [
            { time: '09:00', name: 'Tom B.', color: 1 },
            { time: '11:30', name: 'Kai W.', color: 1 },
          ],
          status: 'Gebucht · Sa 10:00',
        },
      },
      {
        label: 'Kosmetik',
        image: '/images/beauty-studio.webp',
        alt: 'Ein Kosmetikstudio: Julia K. hat per E-Mail eine Gesichtsbehandlung bei Anna gebucht.',
        card: {
          notice: { channel: 'email', from: 'Julia K.', text: 'Haben Sie Freitagnachmittag eine Gesichtsbehandlung frei?', time: '21:40' },
          reply: 'Freitag 15:00 ist bei Anna frei. Soll ich buchen?',
          booking: { time: '15:00', name: 'Julia K.', service: 'Gesicht · 60 Min.', staff: 'Anna', color: 3 },
          around: [
            { time: '13:30', name: 'Eva H.', color: 3 },
            { time: '16:30', name: 'Mia T.', color: 3 },
          ],
          status: 'Gebucht · Fr 15:00',
        },
      },
      {
        label: 'Yoga',
        image: '/images/yoga-hero.webp',
        alt: 'Ein Yogastudio: eine Anfängerin hat über den Website-Chat Dienstag 18:30 gebucht.',
        card: {
          notice: { channel: 'web', from: 'Website', text: 'Gibt es einen Kurs für Anfänger?', time: '07:12' },
          reply: 'Ja, Dienstag 18:30 ist für Anfänger. Ein Platz für Sie?',
          booking: { time: '18:30', name: 'Sophie R.', service: 'Yoga für Anfänger', staff: 'Ploy', color: 2 },
          around: [
            { time: '17:00', name: 'Flow', color: 2 },
            { time: '20:00', name: 'Yin Yoga', color: 2 },
          ],
          status: 'Gebucht · Di 18:30',
        },
      },
      {
        label: 'Praxis',
        image: '/images/clinic-hero.webp',
        alt: 'Eine Wellnesspraxis: Max R. hat seinen Termin auf Donnerstag 15:00 verschoben.',
        card: {
          notice: { channel: 'whatsapp', from: 'Max R.', text: 'Kann ich meinen Termin auf Donnerstag legen?', time: '12:31' },
          reply: 'Erledigt. Donnerstag 15:00 bei Anna, bis dann.',
          booking: { time: '15:00', name: 'Max R.', service: 'Gesicht · 60 Min.', staff: 'Anna', color: 3 },
          around: [
            { time: '14:00', name: 'Eva H.', color: 3 },
            { time: '16:30', name: 'Julia K.', color: 3 },
          ],
          status: 'Verschoben · Do 15:00',
        },
      },
    ],
  },
  th: {
    eyebrow: 'ระบบจองคิวสำหรับสปา ร้านเสริมสวย และสตูดิโอ',
    // Thai has no word spaces, so the line break is set by hand.
    title: 'ระบบจองคิว\nที่รับจองแทนคุณ',
    sub: 'ปฏิทินเดียว หน้าจองออนไลน์ บัตรของขวัญและการชำระเงิน พร้อมพนักงานต้อนรับ AI ที่ตอบลูกค้าทาง WhatsApp อีเมล และเว็บไซต์ แล้วรับจองคิวให้คุณ',
    primary: 'เริ่มใช้ฟรี',
    secondary: 'ดูการจองจริง',
    scenesLabel: 'เลือกประเภทร้าน',
    shotLine: 'ลูกค้าทักมาตอน 23:04 คิวลงปฏิทินก่อนคุณตื่น',
    scenes: [
      {
        label: 'ร้านนวด',
        image: '/images/thai-shop.webp',
        alt: 'ร้านนวดไทย: Lea S. จองวันเสาร์ 10:00 กับนกผ่าน WhatsApp',
        card: {
          notice: { channel: 'whatsapp', from: 'Lea S.', text: 'วันเสาร์มีคิวนวดไทยว่างไหมคะ', time: '23:04' },
          reply: 'วันเสาร์ 10:00 คุณนกว่างค่ะ จองไว้เลยไหมคะ',
          booking: { time: '10:00', name: 'Lea S.', service: 'นวดไทย · 60 นาที', staff: 'นก', color: 1 },
          around: [
            { time: '09:00', name: 'Tom B.', color: 1 },
            { time: '11:30', name: 'Kai W.', color: 1 },
          ],
          status: 'จองแล้ว · ส. 10:00',
        },
      },
      {
        label: 'ความงาม',
        image: '/images/beauty-studio.webp',
        alt: 'ร้านเสริมสวย: Julia K. จองทรีตเมนต์หน้ากับแอนนาทางอีเมล',
        card: {
          notice: { channel: 'email', from: 'Julia K.', text: 'วันศุกร์บ่ายมีคิวทำหน้าว่างไหมคะ', time: '21:40' },
          reply: 'วันศุกร์ 15:00 แอนนาว่างค่ะ จองไว้เลยไหมคะ',
          booking: { time: '15:00', name: 'Julia K.', service: 'ทรีตเมนต์หน้า · 60 นาที', staff: 'แอนนา', color: 3 },
          around: [
            { time: '13:30', name: 'Eva H.', color: 3 },
            { time: '16:30', name: 'Mia T.', color: 3 },
          ],
          status: 'จองแล้ว · ศ. 15:00',
        },
      },
      {
        label: 'โยคะ',
        image: '/images/yoga-hero.webp',
        alt: 'สตูดิโอโยคะ: ลูกค้าใหม่จองวันอังคาร 18:30 ผ่านแชทบนเว็บไซต์',
        card: {
          notice: { channel: 'web', from: 'เว็บไซต์', text: 'มีคลาสสำหรับมือใหม่ไหมคะ', time: '07:12' },
          reply: 'มีค่ะ วันอังคาร 18:30 สำหรับมือใหม่ จองที่ให้ไหมคะ',
          booking: { time: '18:30', name: 'Sophie R.', service: 'โยคะสำหรับมือใหม่', staff: 'พลอย', color: 2 },
          around: [
            { time: '17:00', name: 'Flow', color: 2 },
            { time: '20:00', name: 'Yin Yoga', color: 2 },
          ],
          status: 'จองแล้ว · อ. 18:30',
        },
      },
      {
        label: 'คลินิก',
        image: '/images/clinic-hero.webp',
        alt: 'คลินิกเวลเนส: Max R. เลื่อนนัดเป็นวันพฤหัสบดี 15:00',
        card: {
          notice: { channel: 'whatsapp', from: 'Max R.', text: 'ขอเลื่อนนัดเป็นวันพฤหัสได้ไหมครับ', time: '12:31' },
          reply: 'เรียบร้อยค่ะ วันพฤหัส 15:00 กับแอนนา แล้วพบกันนะคะ',
          booking: { time: '15:00', name: 'Max R.', service: 'ทรีตเมนต์หน้า · 60 นาที', staff: 'แอนนา', color: 3 },
          around: [
            { time: '14:00', name: 'Eva H.', color: 3 },
            { time: '16:30', name: 'Julia K.', color: 3 },
          ],
          status: 'เลื่อนแล้ว · พฤ. 15:00',
        },
      },
    ],
  },
}

interface HomeHeroProps {
  lang: Lang
}

/** The photo hero, then the product shot: the guest's phone beside the shop's calendar. */
export function HomeHero({ lang }: HomeHeroProps) {
  const t = COPY[lang]
  return (
    <>
      <PhotoHero
        eyebrow={t.eyebrow}
        title={t.title}
        sub={t.sub}
        primary={t.primary}
        secondary={t.secondary}
        secondaryHref="#tour"
        scenes={t.scenes}
        scenesLabel={t.scenesLabel}
      />
      <section className={styles.shot} aria-label={t.shotLine}>
        <div className="wrap">
          <p data-reveal className={styles.shotLine}>
            {t.shotLine}
          </p>
          <div data-reveal>
            <HeroDemo lang={lang} />
          </div>
        </div>
      </section>
    </>
  )
}
