import type { Lang } from '@/lib/marketing/lang'

export interface TalksDemoCopy {
  page: string
  tabs: readonly [string, string, string]
  personality: string
  tones: readonly [string, string, string]
  briefLabel: string
  brief: string
  learn: string
  reading: string
  learned: string
  sample: string
  guest: string
  replies: readonly [string, string, string]
  label: string
}

export const TALKS_DEMO: Record<Lang, TalksDemoCopy> = {
  en: {
    page: 'AI receptionist',
    tabs: ['Personality', 'Knowledge', 'Channels'],
    personality: 'Personality',
    tones: ['Professional', 'Warm', 'Short'],
    briefLabel: 'Brief your receptionist',
    brief: 'You are Mali, the front desk of Sabai Spa. Warm, short, never pushy. First-time guests get the 90-minute aroma massage suggested.',
    learn: 'Learn from my website',
    reading: 'Reading your website …',
    learned: 'Taken from your website. Check it and save.',
    sample: 'Sample reply',
    guest: 'Do you have time for a massage this week?',
    replies: [
      'Good afternoon. We have free times on Thursday at 15:00 and Saturday at 10:00. Which would suit you?',
      "Hi, I'm Mali from Sabai Spa, lovely to hear from you! This week we still have a few spots. Is it more for relaxing, or is something bothering you?",
      'Hi! Thu 15:00 or Sat 10:00 are free. Which one?',
    ],
    label: 'The receptionist’s personality screen: choose Professional, Warm or Short and the sample reply changes.',
  },
  de: {
    page: 'KI-Rezeption',
    tabs: ['Persönlichkeit', 'Wissen', 'Kanäle'],
    personality: 'Persönlichkeit',
    tones: ['Professionell', 'Herzlich', 'Kurz'],
    briefLabel: 'Briefen Sie Ihre Rezeption',
    brief: 'Sie sind Mali, der Empfang vom Sabai Spa. Herzlich, kurz, nie aufdringlich. Neuen Gästen die 90-Minuten-Aromamassage vorschlagen.',
    learn: 'Von meiner Website lernen',
    reading: 'Ihre Website wird gelesen …',
    learned: 'Von Ihrer Website übernommen. Prüfen und speichern.',
    sample: 'Beispielantwort',
    guest: 'Haben Sie diese Woche Zeit für eine Massage?',
    replies: [
      'Guten Tag. Wir haben am Donnerstag um 15:00 und am Samstag um 10:00 freie Termine. Welcher passt Ihnen?',
      'Hallo, hier ist Mali vom Sabai Spa, schön von Ihnen zu hören! Diese Woche haben wir noch ein paar Termine frei. Geht es eher um Entspannung, oder plagt Sie etwas?',
      'Hallo! Do 15:00 oder Sa 10:00 sind frei. Was passt?',
    ],
    label: 'Die Persönlichkeit der Rezeption: Professionell, Herzlich oder Kurz wählen, und die Beispielantwort ändert sich.',
  },
  th: {
    page: 'พนักงานต้อนรับ AI',
    tabs: ['บุคลิก', 'ข้อมูลร้าน', 'ช่องทาง'],
    personality: 'บุคลิก',
    tones: ['ทางการ', 'อบอุ่น', 'กระชับ'],
    briefLabel: 'บรีฟพนักงานต้อนรับของคุณ',
    brief: 'คุณคือมะลิ พนักงานต้อนรับของ Sabai Spa อบอุ่น กระชับ ไม่เร่งขาย แนะนำนวดน้ำมันอโรมา 90 นาทีให้ลูกค้าใหม่',
    learn: 'เรียนรู้จากเว็บไซต์ของฉัน',
    reading: 'กำลังอ่านเว็บไซต์ของคุณ …',
    learned: 'นำมาจากเว็บไซต์ของคุณแล้ว ตรวจดูแล้วกดบันทึก',
    sample: 'ตัวอย่างคำตอบ',
    guest: 'สัปดาห์นี้มีคิวนวดว่างไหมคะ',
    replies: [
      'สวัสดีค่ะ มีคิวว่างวันพฤหัสบดี 15:00 และวันเสาร์ 10:00 ค่ะ สะดวกวันไหนคะ',
      'สวัสดีค่ะ มะลิจาก Sabai Spa ค่ะ ยินดีมากเลยที่ทักมานะคะ สัปดาห์นี้ยังมีคิวว่างอยู่บ้างค่ะ อยากผ่อนคลาย หรือมีจุดไหนปวดเมื่อยเป็นพิเศษคะ',
      'สวัสดีค่ะ ว่าง พฤ. 15:00 หรือ ส. 10:00 ค่ะ เอาวันไหนดีคะ',
    ],
    label: 'หน้าตั้งค่าบุคลิกของพนักงานต้อนรับ เลือกทางการ อบอุ่น หรือกระชับ แล้วตัวอย่างคำตอบจะเปลี่ยนตาม',
  },
}
