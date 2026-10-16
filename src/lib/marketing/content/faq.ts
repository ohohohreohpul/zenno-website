import type { Lang } from '../lang'

export interface FaqItem {
  q: string
  a: string
}

/**
 * The homepage FAQ: the owner's real objections, answered plainly.
 * Shared with the FAQPage JSON-LD schema so the structured data never drifts
 * from the visible copy.
 */
export const HOMEPAGE_FAQ: Record<Lang, FaqItem[]> = {
  en: [
    {
      q: 'Will the AI say something wrong?',
      a: 'It only uses your prices, times and offers from the app. When it is unsure, or a guest complains or asks about health, it hands the chat to you. With draft mode on, you approve every reply before it is sent.',
    },
    {
      q: 'Will WhatsApp ban my number?',
      a: 'It answers guests who wrote to you. Bulk messages go out slowly, and only to people who agreed to get them.',
    },
    {
      q: 'Where does the receptionist answer?',
      a: 'On WhatsApp with your own number, by email and in the chat on your website. Every conversation lands in one inbox in the app.',
    },
    {
      q: 'Do I have to change everything?',
      a: 'No. Import your customers, appointments and blocked times from EasyWeek, Shore or Treatwell. You can move in an afternoon.',
    },
    {
      q: 'Is it hard to use?',
      a: 'If you can use WhatsApp, you can use Zenno. The app works in German, English and Thai, and there are step-by-step guides at docs.zennohq.com.',
    },
    {
      q: 'How do vouchers work?',
      a: 'Sell value vouchers, voucher sets and multi-visit passes online or at the counter. Each voucher gets a QR code, and you redeem it by scanning.',
    },
    {
      q: 'What about no-shows and tax?',
      a: 'Charge a no-show fee right from the booking. The cash book and the DATEV export are ready for your tax advisor.',
    },
    {
      q: 'Can ChatGPT or Siri book my shop?',
      a: 'Yes. Your booking page is set up so AI assistants like ChatGPT and Siri can find your services and book a free time for a guest, in your name.',
    },
    {
      q: 'I used onbuuk. Do I need to do anything?',
      a: 'No. onbuuk is now Zenno. Your account, services, booking link and client data carry over.',
    },
  ],
  de: [
    {
      q: 'Sagt die KI etwas Falsches?',
      a: 'Sie nutzt nur Ihre Preise, Zeiten und Angebote aus der App. Wenn sie unsicher ist, ein Gast sich beschwert oder nach Gesundheit fragt, übergibt sie den Chat an Sie. Im Entwurfsmodus geben Sie jede Antwort frei, bevor sie rausgeht.',
    },
    {
      q: 'Sperrt WhatsApp meine Nummer?',
      a: 'Sie antwortet Gästen, die Ihnen geschrieben haben. Rundnachrichten gehen langsam raus, und nur an Gäste, die zugestimmt haben.',
    },
    {
      q: 'Wo antwortet die Rezeption?',
      a: 'Auf WhatsApp mit Ihrer eigenen Nummer, per E-Mail und im Chat auf Ihrer Website. Jedes Gespräch landet in einem Posteingang in der App.',
    },
    {
      q: 'Muss ich alles umstellen?',
      a: 'Nein. Importieren Sie Kunden, Termine und geblockte Zeiten aus EasyWeek, Shore oder Treatwell. Der Umzug ist an einem Nachmittag erledigt.',
    },
    {
      q: 'Ist das kompliziert?',
      a: 'Wer WhatsApp bedienen kann, kann auch Zenno. Die App gibt es auf Deutsch, Englisch und Thai, mit Schritt-für-Schritt-Anleitungen auf docs.zennohq.com.',
    },
    {
      q: 'Wie funktionieren Gutscheine?',
      a: 'Verkaufen Sie Wertgutscheine, Gutscheinsets und Mehrfachkarten online oder an der Theke. Jeder Gutschein hat einen QR-Code und wird per Scan eingelöst.',
    },
    {
      q: 'Und No-Shows und Steuern?',
      a: 'Berechnen Sie eine No-Show-Gebühr direkt aus der Buchung. Kassenbuch und DATEV-Export sind fertig für Ihre Steuerberatung.',
    },
    {
      q: 'Können ChatGPT oder Siri bei mir buchen?',
      a: 'Ja. Ihre Buchungsseite ist so eingerichtet, dass KI-Assistenten wie ChatGPT und Siri Ihre Leistungen finden und einen freien Termin für einen Gast buchen können, in Ihrem Namen.',
    },
    {
      q: 'Ich habe onbuuk genutzt. Muss ich etwas tun?',
      a: 'Nein. onbuuk ist jetzt Zenno. Ihr Konto, Ihre Leistungen, Ihr Buchungslink und Ihre Kundendaten bleiben erhalten.',
    },
  ],
  th: [
    {
      q: 'AI จะตอบอะไรผิดไหม',
      a: 'ใช้เฉพาะราคา เวลา และโปรโมชันจากแอปของคุณ ถ้าไม่แน่ใจ หรือมีลูกค้าร้องเรียนหรือถามเรื่องสุขภาพ จะส่งแชทต่อให้คุณ ถ้าเปิดโหมดร่างข้อความ คุณจะอนุมัติทุกคำตอบก่อนส่ง',
    },
    {
      q: 'WhatsApp จะแบนเบอร์ของฉันไหม',
      a: 'ตอบเฉพาะลูกค้าที่ทักมาหาร้าน ข้อความถึงหลายคนส่งช้าๆ และส่งเฉพาะคนที่ยินยอมเท่านั้น',
    },
    {
      q: 'พนักงานต้อนรับตอบที่ช่องทางไหนบ้าง',
      a: 'WhatsApp ด้วยเบอร์ของร้านเอง อีเมล และแชทบนเว็บไซต์ของคุณ ทุกบทสนทนาอยู่ในกล่องข้อความเดียวในแอป',
    },
    {
      q: 'ต้องเปลี่ยนทุกอย่างไหม',
      a: 'ไม่ต้อง นำเข้าลูกค้า นัดหมาย และเวลาที่บล็อกไว้จาก EasyWeek, Shore หรือ Treatwell ได้ ย้ายเสร็จได้ในบ่ายเดียว',
    },
    {
      q: 'ใช้งานยากไหม',
      a: 'ถ้าใช้ WhatsApp เป็น ก็ใช้ Zenno ได้ แอปมีภาษาเยอรมัน อังกฤษ และไทย พร้อมคู่มือทีละขั้นตอนที่ docs.zennohq.com',
    },
    {
      q: 'บัตรของขวัญใช้งานอย่างไร',
      a: 'ขายบัตรมูลค่า เซ็ตบัตรของขวัญ และบัตรหลายครั้ง ได้ทั้งออนไลน์และที่เคาน์เตอร์ ทุกใบมี QR code ใช้งานด้วยการสแกน',
    },
    {
      q: 'ลูกค้าไม่มาตามนัดและเรื่องภาษีล่ะ',
      a: 'เรียกเก็บค่าปรับไม่มาตามนัดจากการจองได้เลย สมุดเงินสดและไฟล์ส่งออก DATEV พร้อมส่งให้นักบัญชี',
    },
    {
      q: 'ChatGPT หรือ Siri จองร้านของฉันได้ไหม',
      a: 'ได้ หน้าจองของคุณตั้งค่าไว้ให้ผู้ช่วย AI อย่าง ChatGPT และ Siri ค้นหาบริการของคุณและจองเวลาว่างให้ลูกค้าได้ ในชื่อร้านของคุณ',
    },
    {
      q: 'ฉันเคยใช้ onbuuk ต้องทำอะไรไหม',
      a: 'ไม่ต้อง onbuuk เปลี่ยนเป็น Zenno แล้ว บัญชี บริการ ลิงก์จอง และข้อมูลลูกค้าของคุณยังอยู่ครบ',
    },
  ],
}
