import type { Lang } from '@/lib/marketing/lang'

export interface MoneyTile {
  title: string
  line: string
}

export interface VouchersDemoCopy {
  sell: string
  amount: string
  other: string
  payWith: string
  cash: string
  card: string
  sellButton: string
  sold: string
  voucher: string
  validUntil: string
  scan: string
  redeemed: string
  redeemLine: string
  leftToPay: string
  label: string
  tiles: readonly [MoneyTile, MoneyTile, MoneyTile, MoneyTile]
}

export const VOUCHERS_DEMO: Record<Lang, VouchersDemoCopy> = {
  en: {
    sell: 'Sell voucher',
    amount: 'Amount',
    other: 'Other',
    payWith: 'Paid with',
    cash: 'Cash',
    card: 'Card',
    sellButton: 'Sell voucher',
    sold: 'Sold',
    voucher: 'Gift voucher',
    validUntil: 'Valid until 31.12.2027',
    scan: 'Scan to redeem',
    redeemed: 'Voucher redeemed',
    redeemLine: 'Thai massage 70 € · voucher −50 €',
    leftToPay: 'Left to pay: 20,00 €',
    label: 'Selling a 50 € voucher at the counter, paid in cash, issued with a QR code, then redeemed by scan for a Thai massage.',
    tiles: [
      { title: 'No-show fees', line: 'Tom B. · Sat 12:00 · 35,00 € charged' },
      { title: 'Cash book', line: 'Today 1.240,00 € · 18 entries' },
      { title: 'DATEV export', line: 'October 2026 · ready for your tax advisor' },
      { title: 'Invoices', line: 'RE-2026-0412 · sent by email' },
    ],
  },
  de: {
    sell: 'Gutschein verkaufen',
    amount: 'Betrag',
    other: 'Anderer',
    payWith: 'Bezahlt mit',
    cash: 'Bar',
    card: 'Karte',
    sellButton: 'Gutschein verkaufen',
    sold: 'Verkauft',
    voucher: 'Geschenkgutschein',
    validUntil: 'Gültig bis 31.12.2027',
    scan: 'Zum Einlösen scannen',
    redeemed: 'Gutschein eingelöst',
    redeemLine: 'Thai-Massage 70 € · Gutschein −50 €',
    leftToPay: 'Noch zu zahlen: 20,00 €',
    label: 'Ein 50-€-Gutschein wird an der Theke bar verkauft, mit QR-Code ausgestellt und später für eine Thai-Massage per Scan eingelöst.',
    tiles: [
      { title: 'No-Show-Gebühren', line: 'Tom B. · Sa 12:00 · 35,00 € berechnet' },
      { title: 'Kassenbuch', line: 'Heute 1.240,00 € · 18 Buchungen' },
      { title: 'DATEV-Export', line: 'Oktober 2026 · fertig für Ihre Steuerberatung' },
      { title: 'Rechnungen', line: 'RE-2026-0412 · per E-Mail verschickt' },
    ],
  },
  th: {
    sell: 'ขายบัตรของขวัญ',
    amount: 'มูลค่า',
    other: 'อื่นๆ',
    payWith: 'ชำระด้วย',
    cash: 'เงินสด',
    card: 'บัตร',
    sellButton: 'ขายบัตรของขวัญ',
    sold: 'ขายแล้ว',
    voucher: 'บัตรของขวัญ',
    validUntil: 'ใช้ได้ถึง 31.12.2027',
    scan: 'สแกนเพื่อใช้บัตร',
    redeemed: 'ใช้บัตรของขวัญแล้ว',
    redeemLine: 'นวดไทย 70 € · บัตรของขวัญ −50 €',
    leftToPay: 'ต้องชำระเพิ่ม: 20,00 €',
    label: 'ขายบัตรของขวัญ 50 € ที่เคาน์เตอร์ จ่ายเงินสด ออกบัตรพร้อม QR code แล้วสแกนใช้กับนวดไทย',
    tiles: [
      { title: 'ค่าปรับไม่มาตามนัด', line: 'Tom B. · ส. 12:00 · เรียกเก็บ 35,00 €' },
      { title: 'สมุดเงินสด', line: 'วันนี้ 1.240,00 € · 18 รายการ' },
      { title: 'ส่งออก DATEV', line: 'ตุลาคม 2026 · พร้อมส่งให้นักบัญชี' },
      { title: 'ใบแจ้งหนี้', line: 'RE-2026-0412 · ส่งทางอีเมลแล้ว' },
    ],
  },
}
