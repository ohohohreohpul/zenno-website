import type { Lang } from '../lang'
import { COMPANY } from './company'
import { companyBlock, field, fieldLines, type LegalDoc } from './types'

/**
 * Imprint (Impressum). Zenno serves businesses in Germany, so the page follows
 * § 5 DDG and § 18 (2) MStV even though the company is registered in Thailand.
 */
interface ImprintStrings {
  meta: LegalDoc['meta']
  label: string
  title: string
  intro: string
  h: { provider: string; represented: string; register: string; tax: string; responsible: string; disputes: string }
  email: string
  phone: string
  registerLine: string
  regNo: string
  taxId: string
  vat: string
  disputes: string
  previously: string
}

const STRINGS: Record<Lang, ImprintStrings> = {
  de: {
    meta: { title: 'Impressum | Zenno', description: 'Anbieterkennzeichnung von Zenno nach § 5 DDG.' },
    label: 'Impressum',
    title: 'Impressum',
    intro: 'Angaben nach § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV).',
    h: { provider: 'Anbieter', represented: 'Vertreten durch', register: 'Registereintrag', tax: 'Steuernummer', responsible: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV', disputes: 'Streitbeilegung' },
    email: 'E-Mail',
    phone: 'Telefon',
    registerLine: 'Department of Business Development, Ministry of Commerce, Thailand',
    regNo: 'Registernummer',
    taxId: 'Steuernummer (Thailand)',
    vat: 'Umsatzsteuer-Registrierung (Thailand)',
    disputes: 'Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
    previously: 'Zenno hieß früher onbuuk (onbuuk.com).',
  },
  en: {
    meta: { title: 'Imprint | Zenno', description: 'Legal notice and company details for Zenno.' },
    label: 'Imprint',
    title: 'Imprint',
    intro: 'Provider information under § 5 of the German Digital Services Act (DDG) and § 18 (2) of the Interstate Media Treaty (MStV).',
    h: { provider: 'Provider', represented: 'Represented by', register: 'Company register', tax: 'Tax ID', responsible: 'Responsible for content under § 18 (2) MStV', disputes: 'Dispute resolution' },
    email: 'Email',
    phone: 'Phone',
    registerLine: 'Department of Business Development, Ministry of Commerce, Thailand',
    regNo: 'Registration number',
    taxId: 'Tax ID (Thailand)',
    vat: 'VAT registration (Thailand)',
    disputes: 'We are neither obliged nor willing to take part in dispute resolution proceedings before a consumer arbitration board.',
    previously: 'Zenno was previously called onbuuk (onbuuk.com).',
  },
  th: {
    meta: { title: 'ข้อมูลบริษัท | Zenno', description: 'ข้อมูลผู้ให้บริการและข้อมูลบริษัทของ Zenno' },
    label: 'ข้อมูลบริษัท',
    title: 'ข้อมูลบริษัท',
    intro: 'ข้อมูลผู้ให้บริการ ตามกฎหมายเยอรมัน (§ 5 DDG และ § 18 Abs. 2 MStV) เนื่องจากเราให้บริการธุรกิจในประเทศเยอรมนี',
    h: { provider: 'ผู้ให้บริการ', represented: 'ผู้มีอำนาจลงนาม', register: 'ทะเบียนนิติบุคคล', tax: 'เลขประจำตัวผู้เสียภาษี', responsible: 'ผู้รับผิดชอบเนื้อหา', disputes: 'การระงับข้อพิพาท' },
    email: 'อีเมล',
    phone: 'โทรศัพท์',
    registerLine: 'กรมพัฒนาธุรกิจการค้า กระทรวงพาณิชย์',
    regNo: 'เลขทะเบียนนิติบุคคล',
    taxId: 'เลขประจำตัวผู้เสียภาษี',
    vat: 'ทะเบียนภาษีมูลค่าเพิ่ม',
    disputes: 'เราไม่มีหน้าที่และไม่ประสงค์เข้าร่วมกระบวนการระงับข้อพิพาทผู้บริโภคตามกฎหมายเยอรมัน',
    previously: 'Zenno เดิมชื่อ onbuuk (onbuuk.com)',
  },
}

export function imprintContent(lang: Lang): LegalDoc {
  const t = STRINGS[lang]
  const representatives = fieldLines(COMPANY.representatives, lang)
  return {
    meta: t.meta,
    label: t.label,
    title: t.title,
    intro: t.intro,
    sections: [
      { h: t.h.provider, blocks: [companyBlock(lang, { email: t.email, phone: t.phone })] },
      { h: t.h.represented, blocks: [{ lines: representatives }] },
      { h: t.h.register, blocks: [{ lines: [t.registerLine, `${t.regNo}: ${field(COMPANY.registrationNumber, lang)}`] }] },
      {
        h: t.h.tax,
        blocks: [
          {
            lines: [
              `${t.taxId}: ${field(COMPANY.registrationNumber, lang)}`,
              ...(COMPANY.vatNumber ? [`${t.vat}: ${COMPANY.vatNumber}`] : []),
            ],
          },
        ],
      },
      { h: t.h.responsible, blocks: [{ lines: [...representatives, ...fieldLines(COMPANY.address, lang)] }] },
      { h: t.h.disputes, blocks: [{ p: t.disputes }, { p: t.previously }] },
    ],
  }
}
