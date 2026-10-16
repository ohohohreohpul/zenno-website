import type { Lang } from '@/lib/marketing/lang'

export interface CalendarDemoCopy {
  tabs: readonly [string, string, string]
  blockTitle: string
  blockNote: string
  blockBlocked: string
  blockColour: string
  blockButton: string
  phoneTitle: string
  phoneSearch: string
  phoneResult: string
  phoneTimes: string
  phoneAdd: string
  payTitle: string
  payCame: string
  payYes: string
  payNoShow: string
  payHow: string
  payCard: string
  payCash: string
  payVoucher: string
  paid: string
  calLabel: string
}

export const CALENDAR_DEMO: Record<Lang, CalendarDemoCopy> = {
  en: {
    tabs: ['Block time', 'Phone booking', 'Payment'],
    blockTitle: 'Block time',
    blockNote: 'Training',
    blockBlocked: 'Blocked',
    blockColour: 'Colour',
    blockButton: 'Block',
    phoneTitle: 'New appointment',
    phoneSearch: 'Search by name or phone',
    phoneResult: 'Mrs. Lee',
    phoneTimes: 'Free with Anna',
    phoneAdd: 'Add appointment',
    payTitle: 'Lena M. · Aroma oil · 95 €',
    payCame: 'Did she come?',
    payYes: 'Yes, came',
    payNoShow: 'No-show',
    payHow: 'Pay with',
    payCard: 'Card',
    payCash: 'Cash',
    payVoucher: 'Voucher',
    paid: 'Paid · 95,00 €',
    calLabel: 'The POS calendar for Saturday with Nok, Ploy and Anna: bookings in each therapist’s colour, a pending booking, time blocked for training and a paid booking.',
  },
  de: {
    tabs: ['Zeit blocken', 'Telefonbuchung', 'Bezahlen'],
    blockTitle: 'Zeit blocken',
    blockNote: 'Schulung',
    blockBlocked: 'Geblockt',
    blockColour: 'Farbe',
    blockButton: 'Blocken',
    phoneTitle: 'Neuer Termin',
    phoneSearch: 'Name oder Telefon suchen',
    phoneResult: 'Frau Lee',
    phoneTimes: 'Frei bei Anna',
    phoneAdd: 'Termin hinzufügen',
    payTitle: 'Lena M. · Aromaöl · 95 €',
    payCame: 'Ist sie gekommen?',
    payYes: 'Ja, gekommen',
    payNoShow: 'No-Show',
    payHow: 'Bezahlen mit',
    payCard: 'Karte',
    payCash: 'Bar',
    payVoucher: 'Gutschein',
    paid: 'Bezahlt · 95,00 €',
    calLabel: 'Der Kassenkalender für Samstag mit Nok, Ploy und Anna: Buchungen in der Farbe jeder Therapeutin, eine offene Anfrage, eine geblockte Schulung und eine bezahlte Buchung.',
  },
  th: {
    tabs: ['บล็อกเวลา', 'จองทางโทรศัพท์', 'ชำระเงิน'],
    blockTitle: 'บล็อกเวลา',
    blockNote: 'อบรม',
    blockBlocked: 'บล็อกไว้',
    blockColour: 'สี',
    blockButton: 'บล็อก',
    phoneTitle: 'นัดหมายใหม่',
    phoneSearch: 'ค้นหาชื่อหรือเบอร์โทร',
    phoneResult: 'คุณลี',
    phoneTimes: 'แอนนาว่าง',
    phoneAdd: 'เพิ่มนัดหมาย',
    payTitle: 'Lena M. · นวดน้ำมันอโรมา · 95 €',
    payCame: 'ลูกค้ามาไหม',
    payYes: 'มาแล้ว',
    payNoShow: 'ไม่มาตามนัด',
    payHow: 'ชำระด้วย',
    payCard: 'บัตร',
    payCash: 'เงินสด',
    payVoucher: 'บัตรของขวัญ',
    paid: 'ชำระแล้ว · 95,00 €',
    calLabel: 'ปฏิทินหน้าร้านวันเสาร์ของนก พลอย และแอนนา มีคิวตามสีของพนักงานแต่ละคน คิวที่รอยืนยัน เวลาที่บล็อกไว้สำหรับอบรม และคิวที่ชำระเงินแล้ว',
  },
}
