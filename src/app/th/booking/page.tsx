import '@/styles/marketing.css'
import { BookingPage } from '@/components/marketing/booking/BookingPage'
import { pageMetadata } from '@/lib/marketing/seo'

export const metadata = pageMetadata({
  lang: 'th',
  path: '/booking',
  title: 'onbuuk เปลี่ยนเป็น Zenno แล้ว – ระบบจองคิวสำหรับสปาและสตูดิโอ',
  description:
    'onbuuk.com เปลี่ยนเป็น Zenno แล้ว หน้าจอง ปฏิทิน และการชำระเงิน พร้อมบัตรของขวัญและพนักงานต้อนรับ AI ในแอปเดียว บัญชี บริการ และลิงก์จองยังอยู่ครบ',
})

export default function BookingPageTh() {
  return <BookingPage lang="th" />
}
