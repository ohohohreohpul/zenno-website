import '@/styles/marketing.css'
import { HomePage } from '@/components/marketing/HomePage'
import { JsonLd } from '@/components/marketing/JsonLd'
import { bookingApplicationSchema, faqPageSchema } from '@/lib/marketing/jsonld'
import { HOMEPAGE_FAQ } from '@/lib/marketing/content/faq'
import { pageMetadata } from '@/lib/marketing/seo'

export const metadata = pageMetadata({
  lang: 'th',
  path: '/',
  title: 'ระบบจองคิว ที่รับจองแทนคุณ | Zenno',
  description:
    'ระบบจองคิวสำหรับสปา ร้านนวด และร้านเสริมสวย ปฏิทินหน้าร้าน จองออนไลน์ บัตรของขวัญและการชำระเงิน พร้อมพนักงานต้อนรับ AI ที่ตอบทาง WhatsApp อีเมล และเว็บไซต์ แล้วจองคิวให้คุณ',
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
