import '@/styles/marketing.css'
import { HomePage } from '@/components/marketing/HomePage'
import { JsonLd } from '@/components/marketing/JsonLd'
import { bookingApplicationSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { HOMEPAGE_FAQ } from '@/lib/marketing/content/faq'
import { pageMetadata } from '@/lib/marketing/seo'

export const metadata = pageMetadata({
  lang: 'th',
  path: '/',
  title: 'ระบบจองคิวที่เพิ่มคิว ขายบัตรของขวัญ และลูกค้าประจำ | Zenno',
  description:
    'Zenno ช่วยให้คิวเต็มขึ้น ขายบัตรของขวัญออนไลน์ได้ตลอดวัน และดึงลูกค้าประจำให้กลับมา ด้วยพนักงานต้อนรับ AI ทาง WhatsApp อีเมล และเว็บไซต์ การแจ้งเตือน และแต้มสะสม สำหรับสปา ร้านนวด และร้านเสริมสวย',
})

export default function HomePageTh() {
  return (
    <>
      <JsonLd data={bookingApplicationSchema('th')} />
      <JsonLd data={faqPageSchema(HOMEPAGE_FAQ.th)} />
      <HomePage lang="th" />
    </>
  )
}
