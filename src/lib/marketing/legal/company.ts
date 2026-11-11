/**
 * The legal entity behind Zenno, shown on the imprint and privacy pages.
 * Zenno is run by a Thai company, so the register is Thailand's Department of
 * Business Development and the 13-digit registration number doubles as the
 * tax ID. Fields still `null` render as "to be added" and fail `isCompanyComplete`.
 */
export interface CompanyDetails {
  /** Registered name in English, e.g. "Zenno Co., Ltd." */
  legalNameEn: string | null
  /** Registered name in Thai, e.g. "บริษัท เซนโน จำกัด" */
  legalNameTh: string | null
  /** Registered office, one line per array entry. */
  address: string[] | null
  /** Director(s) authorised to represent the company. */
  representatives: string[] | null
  /** 13-digit juristic person registration number (also the Thai tax ID). */
  registrationNumber: string | null
  /** Thai VAT registration, if registered; usually the same 13 digits. */
  vatNumber: string | null
  email: string
  /** A second fast contact channel (phone or WhatsApp), required by the German imprint rules. */
  phone: string | null
  /** Representative in the EU under Art. 27 GDPR, if one has been appointed. */
  euRepresentative: string[] | null
}

export const COMPANY: CompanyDetails = {
  legalNameEn: 'WX Company Limited',
  legalNameTh: null,
  address: ['79/108 Nawamintra Rd.', 'Bangkok 10230', 'Thailand'],
  representatives: null,
  registrationNumber: null,
  vatNumber: null,
  email: 'hello@wxcompany.com',
  phone: null,
  euRepresentative: null,
}

/** Required fields for the imprint; the EU representative and VAT number are optional. */
export function isCompanyComplete(c: CompanyDetails = COMPANY): boolean {
  return Boolean(c.legalNameEn && c.address?.length && c.representatives?.length && c.registrationNumber && c.phone)
}

/** Date the privacy policy text last changed (ISO), shown at the top of the page. */
export const PRIVACY_UPDATED = '2026-11-11'

/** Meta pixel for zennohq.com; unset means no pixel and no consent banner. */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || ''
