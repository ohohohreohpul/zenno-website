import type { Lang } from '@/lib/marketing/lang'

export interface ChargeDemoCopy {
  all: string
  needsYou: string
  rows: readonly { name: string; preview: string; time: string }[]
  question: string
  handover: string
  draft: string
  send: string
  you: string
  draftMode: string
  draftModeHint: string
  label: string
}

export const CHARGE_DEMO: Record<Lang, ChargeDemoCopy> = {
  en: {
    all: 'All',
    needsYou: 'Needs you',
    rows: [
      { name: 'Mrs. Lee', preview: 'I had back surgery in August…', time: '09:12' },
      { name: 'Lea S.', preview: "Done! You're booked for Saturday.", time: '23:05' },
      { name: 'Julia K.', preview: 'Here is your 50 € voucher.', time: '22:41' },
    ],
    question: 'I had back surgery in August. Is a Thai massage okay for me?',
    handover: 'Handed to you · health question',
    draft: 'Thank you for asking, Mrs. Lee. Let’s start with a gentle oil massage, and please check with your doctor first.',
    send: 'Send',
    you: 'You',
    draftMode: 'Draft mode',
    draftModeHint: 'You approve every reply before it is sent',
    label: 'The inbox filtered to Needs you: a health question the receptionist handed to the owner, who writes the reply.',
  },
  de: {
    all: 'Alle',
    needsYou: 'Braucht Sie',
    rows: [
      { name: 'Frau Lee', preview: 'Ich hatte im August eine Rücken-OP…', time: '09:12' },
      { name: 'Lea S.', preview: 'Erledigt! Sie sind für Samstag gebucht.', time: '23:05' },
      { name: 'Julia K.', preview: 'Hier ist Ihr 50-€-Gutschein.', time: '22:41' },
    ],
    question: 'Ich hatte im August eine Rücken-OP. Ist eine Thai-Massage für mich in Ordnung?',
    handover: 'An Sie übergeben · Gesundheitsfrage',
    draft: 'Danke für Ihre Frage, Frau Lee. Wir beginnen mit einer sanften Ölmassage. Bitte sprechen Sie vorher kurz mit Ihrem Arzt.',
    send: 'Senden',
    you: 'Sie',
    draftMode: 'Entwurfsmodus',
    draftModeHint: 'Sie geben jede Antwort frei, bevor sie rausgeht',
    label: 'Der Posteingang gefiltert auf „Braucht Sie“: eine Gesundheitsfrage, die die Rezeption an die Inhaberin übergeben hat, die selbst antwortet.',
  },
  th: {
    all: 'ทั้งหมด',
    needsYou: 'รอคุณตอบ',
    rows: [
      { name: 'คุณลี', preview: 'เพิ่งผ่าตัดหลังเมื่อเดือนสิงหาคม…', time: '09:12' },
      { name: 'Lea S.', preview: 'เรียบร้อยค่ะ จองวันเสาร์ไว้แล้ว', time: '23:05' },
      { name: 'Julia K.', preview: 'นี่คือบัตรของขวัญ 50 € ค่ะ', time: '22:41' },
    ],
    question: 'เพิ่งผ่าตัดหลังเมื่อเดือนสิงหาคม นวดไทยได้ไหมคะ',
    handover: 'ส่งต่อให้คุณ · คำถามเรื่องสุขภาพ',
    draft: 'ขอบคุณที่ถามนะคะคุณลี เริ่มจากนวดน้ำมันแบบเบาๆ ก่อนดีกว่าค่ะ และรบกวนปรึกษาคุณหมอก่อนนะคะ',
    send: 'ส่ง',
    you: 'คุณ',
    draftMode: 'โหมดร่างข้อความ',
    draftModeHint: 'คุณอนุมัติทุกคำตอบก่อนส่ง',
    label: 'กล่องข้อความกรองเฉพาะ "รอคุณตอบ" มีคำถามเรื่องสุขภาพที่พนักงานต้อนรับส่งต่อให้เจ้าของร้านตอบเอง',
  },
}
