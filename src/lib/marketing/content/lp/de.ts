import type { LpCopy } from './types'

export const lpDe: LpCopy = {
  meta: {
    title: 'Ihr Studio verliert Buchungen. Zenno holt sie zurück. | Zenno',
    description:
      'Zenno beantwortet Anfragen rund um die Uhr, verkauft Gutscheine online, erinnert Ihre Kundschaft und nimmt Buchungen ohne Provision an. Kostenlos starten.',
  },
  cta: 'Kostenlos starten',
  ctaNote: 'Free-Plan dauerhaft 0 € · Zenno kostenlos testen',
  hero: {
    title: 'Ihr Studio verliert jeden Monat Buchungen. Zenno holt sie zurück.',
    lede: 'Zenno beantwortet Anfragen, verkauft Gutscheine und erinnert Ihre Kundschaft. Rund um die Uhr, auch wenn Sie gerade massieren.',
    mediaLabel: 'So arbeitet Zenno',
  },
  doesWork: {
    title: 'Die meisten Buchungstools geben Ihnen einen Kalender.',
    titleMark: 'Zenno macht die Arbeit.',
    paragraphs: [
      'Noch ein Kalender, den Sie selbst pflegen müssen? Noch eine App, die Sie abends um elf an Nachrichten erinnert? Kennen wir.',
      'Deshalb gibt es Zenno.',
    ],
    closing: 'Zenno erledigt die Rezeption für Sie.',
    cards: [
      { title: 'Beantwortet jede Anfrage', text: 'Auf WhatsApp, per E-Mail und auf Ihrer Website, auch um 23:47.' },
      { title: 'Verkauft Gutscheine online', text: 'Ein Gutschein-Shop, der Tag und Nacht offen hat. Einlösen per QR-Code.' },
      { title: 'Erinnert Ihre Kundschaft', text: 'Automatische Erinnerungen vor jedem Termin, damit weniger Termine platzen.' },
      { title: 'Bucht ohne Provision', text: 'Jede Buchung landet auf Ihrer eigenen Seite. 0 % Provision, bei jedem Termin.' },
    ],
    more: '…und *Kasse, Kalender und DATEV-Export* dazu',
  },
  stat: {
    quote: '„Rund 46 % der Termine werden gebucht, während das Studio geschlossen ist.“',
    source: 'Phorest, Auswertung von über 5.000 Salons',
  },
  check: {
    pill: 'Studio-Check in 60 Sekunden',
    title: 'Sehen Sie, was Ihr Studio heute verliert.',
    lede: 'Ein paar Fragen zu Ihrem Studio, dann rechnet Zenno in Euro aus, was Provision, Ausfälle und verpasste Anfragen kosten.',
    exampleLabel: 'Beispiel',
    cardTitle: '4 Dinge, die ich in Ihrem Studio übernehmen würde',
    cardLede: 'Für ein Massage-Studio mit 3 Personen und rund 40 Terminen pro Woche.',
    actions: [
      'Ich beantworte die *12 Anfragen*, die nach 20 Uhr reinkommen, und trage die Termine direkt ein.',
      'Ich erinnere *jede Kundin am Vortag* an ihren Termin, automatisch.',
      'Ich verkaufe Gutscheine im Online-Shop, *auch um 02:14*, mit QR-Code zum Einlösen.',
      'Ich nehme neue Buchungen über *Ihre eigene Seite* an, mit *0 % Provision*.',
    ],
    cta: 'Studio-Check starten',
    ctaNote: 'Ohne E-Mail · Ergebnis sofort',
  },
  reception: {
    title: 'Ihre eigene KI-Rezeption',
    subtitle: 'Immer da. Immer freundlich. Immer im Kalender.',
    blocks: [
      { title: 'Antwortet, wann immer Kundschaft schreibt', text: 'Fragen zu Preisen, Öffnungszeiten und freien Terminen beantwortet Zenno sofort, auch nachts und am Wochenende.' },
      { title: 'Alle Kanäle in einem Postfach', text: 'WhatsApp, E-Mail und Ihre Website landen an einem Ort. Sie sehen alles, Zenno erledigt das meiste.' },
      { title: 'Bucht direkt in Ihren Kalender', text: 'Zenno bietet freie Zeiten an und trägt den Termin ein. Ohne Rückruf, ohne Doppelbuchung.' },
    ],
  },
  studios: {
    pill: 'Ein Zenno. Jedes Studio.',
    title: 'Gebaut für Studios, die von Terminen leben.',
    lede: 'Massage, Spa, Kosmetik, Nägel, Friseur, Yoga oder Praxis: Zenno passt sich an Ihre Behandlungen an.',
    cards: [
      { studio: 'Massage-Studio', service: 'Thai-Massage · 60 Min', meta: 'Sa 10:00 · 65 €' },
      { studio: 'Kosmetik', service: 'Gesichtsbehandlung', meta: 'Do 17:30 · 89 €' },
      { studio: 'Day Spa', service: 'Hot Stone · 90 Min', meta: 'Fr 19:00 · 110 €' },
      { studio: 'Friseur', service: 'Schnitt & Föhnen', meta: 'Mi 09:15 · 58 €' },
      { studio: 'Yoga-Studio', service: 'Vinyasa Flow', meta: 'Di 18:30 · 18 €' },
      { studio: 'Praxis', service: 'Physiotherapie', meta: 'Mo 08:00 · 45 €' },
    ],
  },
  examples: {
    pill: 'Beispielrechnungen',
    title: 'So rechnet sich Zenno im Studio-Alltag.',
    lede: 'Drei typische Fälle, gerechnet mit vorsichtigen Annahmen.',
    before: 'Vorher',
    zenno: 'Zenno',
    after: 'Danach',
    cases: [
      { tag: 'Massage-Studio · Marktplatz', before: '10 neue Buchungen im Monat über einen Marktplatz, à 60 € mit 25 % Provision', zenno: 'Buchungen laufen über die eigene Buchungsseite', after: '150 € Provision weniger im Monat' },
      { tag: 'Kosmetik · Ausfälle', before: '4 Termine pro Woche platzen ohne Absage, à 80 €', zenno: 'Automatische Erinnerungen vor jedem Termin', after: 'Bei 25–40 % weniger Ausfällen: 340–550 € mehr im Monat' },
      { tag: 'Day Spa · Gutscheine', before: 'Gutscheine nur auf Papier, an der Theke', zenno: 'Gutschein-Shop online, Tag und Nacht offen', after: 'Verkauf auch abends und am Wochenende, Einlösen per QR-Code' },
    ],
    note: 'Beispielrechnungen, keine Kundendaten. Ihre Zahlen rechnet der Studio-Check aus.',
    cta: 'Mit meinen Zahlen rechnen',
  },
  pricing: {
    title: 'Ihre Rezeption. Ohne Rezeptionistin.',
    lede: 'Die Arbeit einer Rezeption, für weniger als eine Stunde Aushilfe pro Woche.',
    perMonth: '/ Monat',
  },
  final: {
    title: 'Hören Sie auf, Anfragen hinterherzulaufen. Zenno macht das.',
    lede: 'Ihr Kalender, Ihre Preise, Ihr Studio. Der Free-Plan bleibt dauerhaft kostenlos.',
  },
}
