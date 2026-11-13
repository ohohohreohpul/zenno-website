/**
 * Copy for the ad landing page /lp/studio. Section order follows the long-form
 * "problem → it does the work → example → proof → pricing → FAQ → CTA" funnel.
 * Text inside *asterisks* is drawn with the highlighter mark.
 */
export interface LpCopy {
  meta: { title: string; description: string }
  cta: string
  ctaNote: string
  hero: {
    title: string
    lede: string
    mediaLabel: string
  }
  doesWork: {
    title: string
    /** Second line, drawn highlighted. */
    titleMark: string
    paragraphs: readonly string[]
    closing: string
    cards: readonly { title: string; text: string }[]
    /** *starred* part highlighted */
    more: string
  }
  stat: { quote: string; source: string }
  check: {
    pill: string
    title: string
    lede: string
    exampleLabel: string
    cardTitle: string
    cardLede: string
    /** One line each; *marked* parts are highlighted. */
    actions: readonly string[]
    cta: string
    ctaNote: string
  }
  reception: {
    title: string
    subtitle: string
    blocks: readonly { title: string; text: string }[]
  }
  studios: {
    pill: string
    title: string
    lede: string
    /** One booking card per photo, in the order of STUDIO_PHOTOS. */
    cards: readonly { studio: string; service: string; meta: string }[]
  }
  examples: {
    pill: string
    title: string
    lede: string
    before: string
    zenno: string
    after: string
    cases: readonly { tag: string; before: string; zenno: string; after: string }[]
    note: string
    cta: string
  }
  pricing: {
    title: string
    lede: string
    perMonth: string
  }
  final: {
    title: string
    lede: string
  }
}
