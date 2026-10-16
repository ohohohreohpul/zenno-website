import type { Lang } from '../lang'
import type { PhotoScene } from '@/components/marketing/home/photo-hero/PhotoHero'
import type { FeaturePageSlug } from './featurePages'

/** Photo scenes for the feature pages' heroes, with what the app shows on each. */
export const FEATURE_SCENES: Record<FeaturePageSlug, Record<Lang, { label: string; scenes: PhotoScene[] }>> = {
  'ai-receptionist': {
    en: {
      label: 'Choose a moment',
      scenes: [
        {
          label: 'Mid-massage',
          image: '/images/massage-call.webp',
          alt: 'The phone rings during a massage; the receptionist answers and books Saturday 10:00.',
          card: {
            notice: { channel: 'whatsapp', from: 'Lea S.', text: 'Any time for a Thai massage on Saturday?', time: '14:20' },
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
          label: 'After hours',
          image: '/images/spa-dusk.webp',
          alt: 'The shop is closed for the night; the receptionist books a guest at 23:04.',
          card: {
            notice: { channel: 'web', from: 'Website', text: 'Is there anything free tomorrow morning?', time: '23:04' },
            reply: 'Tomorrow 09:30 with Ploy is free. Shall I book it?',
            booking: { time: '09:30', name: 'Mia T.', service: 'Aroma oil · 90 min', staff: 'Ploy', color: 2 },
            around: [
              { time: '08:00', name: 'Lena M.', color: 2 },
              { time: '11:30', name: 'Sara P.', color: 2 },
            ],
            status: 'Booked · tomorrow 09:30',
          },
        },
      ],
    },
    de: {
      label: 'Moment wählen',
      scenes: [
        {
          label: 'Mitten in der Massage',
          image: '/images/massage-call.webp',
          alt: 'Das Telefon klingelt während der Massage; die Rezeption antwortet und bucht Samstag 10:00.',
          card: {
            notice: { channel: 'whatsapp', from: 'Lea S.', text: 'Haben Sie Samstag Zeit für eine Thai-Massage?', time: '14:20' },
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
          label: 'Nach Feierabend',
          image: '/images/spa-dusk.webp',
          alt: 'Der Laden ist geschlossen; die Rezeption bucht um 23:04 einen Gast.',
          card: {
            notice: { channel: 'web', from: 'Website', text: 'Ist morgen früh noch etwas frei?', time: '23:04' },
            reply: 'Morgen 09:30 ist bei Ploy frei. Soll ich buchen?',
            booking: { time: '09:30', name: 'Mia T.', service: 'Aromaöl · 90 Min.', staff: 'Ploy', color: 2 },
            around: [
              { time: '08:00', name: 'Lena M.', color: 2 },
              { time: '11:30', name: 'Sara P.', color: 2 },
            ],
            status: 'Gebucht · morgen 09:30',
          },
        },
      ],
    },
    th: {
      label: 'เลือกช่วงเวลา',
      scenes: [
        {
          label: 'ระหว่างนวด',
          image: '/images/massage-call.webp',
          alt: 'โทรศัพท์ดังระหว่างนวด พนักงานต้อนรับตอบและจองวันเสาร์ 10:00 ให้',
          card: {
            notice: { channel: 'whatsapp', from: 'Lea S.', text: 'วันเสาร์มีคิวนวดไทยว่างไหมคะ', time: '14:20' },
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
          label: 'หลังปิดร้าน',
          image: '/images/spa-dusk.webp',
          alt: 'ร้านปิดแล้ว พนักงานต้อนรับยังจองคิวให้ลูกค้าตอน 23:04',
          card: {
            notice: { channel: 'web', from: 'เว็บไซต์', text: 'พรุ่งนี้เช้ามีคิวว่างไหมคะ', time: '23:04' },
            reply: 'พรุ่งนี้ 09:30 พลอยว่างค่ะ จองไว้เลยไหมคะ',
            booking: { time: '09:30', name: 'Mia T.', service: 'นวดน้ำมันอโรมา · 90 นาที', staff: 'พลอย', color: 2 },
            around: [
              { time: '08:00', name: 'Lena M.', color: 2 },
              { time: '11:30', name: 'Sara P.', color: 2 },
            ],
            status: 'จองแล้ว · พรุ่งนี้ 09:30',
          },
        },
      ],
    },
  },
  vouchers: {
    en: {
      label: 'Choose where it sells',
      scenes: [
        {
          label: 'At the counter',
          image: '/images/voucher-counter.webp',
          alt: 'A voucher is sold at the counter and paid in cash.',
          card: {
            notice: { channel: 'web', from: 'Counter', text: 'A 50 € voucher for my sister, please.', time: '11:05' },
            reply: 'Sold: 50 € gift voucher, paid in cash. QR code printed.',
            booking: { time: '11:05', name: '50 € · ZN-7Q4K', service: 'Gift voucher · cash', staff: 'Vouchers today', color: 3 },
            around: [
              { time: '09:40', name: '25 € · Tom B.', color: 3 },
              { time: '12:20', name: '100 € · Eva H.', color: 3 },
            ],
            status: 'Voucher sold · 50 €',
          },
        },
        {
          label: 'Redeemed by QR',
          image: '/images/qr-hands.webp',
          alt: 'A guest shows the voucher QR code; it is scanned and redeemed.',
          card: {
            notice: { channel: 'email', from: 'Julia K.', text: 'Can I use my voucher for a facial?', time: '16:10' },
            reply: 'Of course. Show the QR at the counter and we take it off.',
            booking: { time: '16:30', name: 'Julia K.', service: 'Facial · voucher −50 €', staff: 'Anna', color: 3 },
            around: [
              { time: '15:00', name: 'Max R.', color: 3 },
              { time: '17:30', name: 'Mia T.', color: 3 },
            ],
            status: 'Redeemed · 20 € left to pay',
          },
        },
      ],
    },
    de: {
      label: 'Wählen, wo verkauft wird',
      scenes: [
        {
          label: 'An der Theke',
          image: '/images/voucher-counter.webp',
          alt: 'Ein Gutschein wird an der Theke verkauft und bar bezahlt.',
          card: {
            notice: { channel: 'web', from: 'Theke', text: 'Einen 50-€-Gutschein für meine Schwester, bitte.', time: '11:05' },
            reply: 'Verkauft: 50-€-Geschenkgutschein, bar bezahlt. QR-Code gedruckt.',
            booking: { time: '11:05', name: '50 € · ZN-7Q4K', service: 'Geschenkgutschein · bar', staff: 'Gutscheine heute', color: 3 },
            around: [
              { time: '09:40', name: '25 € · Tom B.', color: 3 },
              { time: '12:20', name: '100 € · Eva H.', color: 3 },
            ],
            status: 'Gutschein verkauft · 50 €',
          },
        },
        {
          label: 'Per QR eingelöst',
          image: '/images/qr-hands.webp',
          alt: 'Ein Gast zeigt den QR-Code des Gutscheins; er wird gescannt und eingelöst.',
          card: {
            notice: { channel: 'email', from: 'Julia K.', text: 'Kann ich meinen Gutschein für eine Gesichtsbehandlung nutzen?', time: '16:10' },
            reply: 'Natürlich. Zeigen Sie den QR-Code an der Theke, wir ziehen ihn ab.',
            booking: { time: '16:30', name: 'Julia K.', service: 'Gesicht · Gutschein −50 €', staff: 'Anna', color: 3 },
            around: [
              { time: '15:00', name: 'Max R.', color: 3 },
              { time: '17:30', name: 'Mia T.', color: 3 },
            ],
            status: 'Eingelöst · noch 20 € zu zahlen',
          },
        },
      ],
    },
    th: {
      label: 'เลือกช่องทางขาย',
      scenes: [
        {
          label: 'ที่เคาน์เตอร์',
          image: '/images/voucher-counter.webp',
          alt: 'ขายบัตรของขวัญที่เคาน์เตอร์ จ่ายเงินสด',
          card: {
            notice: { channel: 'web', from: 'เคาน์เตอร์', text: 'ขอบัตรของขวัญ 50 € ให้น้องสาวค่ะ', time: '11:05' },
            reply: 'ขายแล้ว: บัตรของขวัญ 50 € จ่ายเงินสด พิมพ์ QR แล้ว',
            booking: { time: '11:05', name: '50 € · ZN-7Q4K', service: 'บัตรของขวัญ · เงินสด', staff: 'บัตรที่ขายวันนี้', color: 3 },
            around: [
              { time: '09:40', name: '25 € · Tom B.', color: 3 },
              { time: '12:20', name: '100 € · Eva H.', color: 3 },
            ],
            status: 'ขายบัตรแล้ว · 50 €',
          },
        },
        {
          label: 'ใช้ด้วย QR',
          image: '/images/qr-hands.webp',
          alt: 'ลูกค้าแสดง QR ของบัตรของขวัญ สแกนแล้วใช้งาน',
          card: {
            notice: { channel: 'email', from: 'Julia K.', text: 'ใช้บัตรของขวัญกับทรีตเมนต์หน้าได้ไหมคะ', time: '16:10' },
            reply: 'ได้เลยค่ะ แสดง QR ที่เคาน์เตอร์ แล้วเราจะหักยอดให้',
            booking: { time: '16:30', name: 'Julia K.', service: 'ทรีตเมนต์หน้า · บัตร −50 €', staff: 'แอนนา', color: 3 },
            around: [
              { time: '15:00', name: 'Max R.', color: 3 },
              { time: '17:30', name: 'Mia T.', color: 3 },
            ],
            status: 'ใช้บัตรแล้ว · ชำระเพิ่ม 20 €',
          },
        },
      ],
    },
  },
}
