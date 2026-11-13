import type { CheckCopy } from './types'
import { SOURCES } from './sources'

export const checkDe: CheckCopy = {
  meta: {
    title: 'Studio-Check: Was bringt Zenno Ihrem Studio? | Zenno',
    description:
      'In 60 Sekunden ausrechnen, wie viel Provision, Ausfälle und Zeit Ihr Studio mit Online-Buchung, Gutscheinen und KI-Rezeption spart. Mit Ihren eigenen Zahlen.',
  },
  intro: {
    kicker: 'Studio-Check',
    title: 'Was bringt Zenno Ihrem Studio?',
    lede: 'Ein paar kurze Fragen, dann sehen Sie in Euro, was Provision, Ausfälle und verpasste Buchungen Sie heute kosten. Gerechnet mit Ihren eigenen Zahlen.',
    start: 'Check starten',
    promise: 'Dauert 60 Sekunden · ohne E-Mail',
  },
  stepOf: 'Frage {n} von {total}',
  back: 'Zurück',
  next: 'Weiter',
  questions: {
    studio: {
      q: 'Was für ein Studio haben Sie?',
      options: [
        { value: 'massage_spa', label: 'Massage oder Spa' },
        { value: 'beauty', label: 'Kosmetik' },
        { value: 'nails', label: 'Nägel' },
        { value: 'hair', label: 'Friseur' },
        { value: 'other', label: 'Etwas anderes' },
      ],
    },
    team: {
      q: 'Wie viele Personen behandeln bei Ihnen?',
      options: [
        { value: 'solo', label: 'Nur ich' },
        { value: '2-3', label: '2–3' },
        { value: '4-9', label: '4–9' },
        { value: '10+', label: '10 oder mehr' },
      ],
    },
    bookings: {
      q: 'Wie viele Termine haben Sie pro Woche?',
      hint: 'Ungefähr reicht.',
      options: [
        { value: 12, label: 'Unter 20' },
        { value: 35, label: '20–50' },
        { value: 75, label: '50–100' },
        { value: 120, label: 'Über 100' },
      ],
    },
    ticket: {
      q: 'Was zahlt Kundschaft im Schnitt pro Termin?',
      options: [
        { value: 40, label: 'Um 40 €' },
        { value: 60, label: 'Um 60 €' },
        { value: 80, label: 'Um 80 €' },
        { value: 120, label: '120 € oder mehr' },
      ],
    },
    channels: {
      q: 'Wie buchen Ihre Kunden heute?',
      hint: 'Mehrere Antworten möglich.',
      options: [
        { value: 'phone', label: 'Telefon oder WhatsApp' },
        { value: 'dm', label: 'Instagram- oder Facebook-Nachricht' },
        { value: 'marketplace', label: 'Über einen Marktplatz oder eine App' },
        { value: 'own_tool', label: 'Eigenes Online-Buchungstool' },
      ],
    },
    marketplaceBookings: {
      q: 'Wie viele neue Buchungen kommen im Monat über den Marktplatz?',
      options: [
        { value: 3, label: 'Bis 5' },
        { value: 10, label: '5–15' },
        { value: 22, label: '15–30' },
        { value: 40, label: 'Über 30' },
      ],
    },
    commission: {
      q: 'Welche Provision zahlen Sie dort pro Buchung?',
      options: [
        { value: 0.15, label: 'Um 15 %' },
        { value: 0.25, label: 'Um 25 %' },
        { value: 0.35, label: 'Um 35 %' },
        { value: null, label: 'Weiß ich nicht' },
      ],
    },
    noShows: {
      q: 'Wie viele Termine platzen pro Woche ohne Absage?',
      options: [
        { value: 0, label: 'Keine' },
        { value: 1.5, label: '1–2' },
        { value: 4, label: '3–5' },
        { value: 7, label: 'Mehr als 5' },
      ],
    },
    giftCards: {
      q: 'Verkaufen Sie Gutscheine?',
      options: [
        { value: 'none', label: 'Nein' },
        { value: 'paper', label: 'Ja, auf Papier im Studio' },
        { value: 'online', label: 'Ja, schon online' },
      ],
    },
    hours: {
      q: 'Wie viele Stunden pro Woche gehen für Nachrichten und Telefon drauf?',
      options: [
        { value: 1, label: 'Unter 2' },
        { value: 3.5, label: '2–5' },
        { value: 7.5, label: '5–10' },
        { value: 12, label: 'Über 10' },
      ],
    },
  },
  result: {
    kicker: 'Ihr Ergebnis',
    total: 'ca. {low}–{high} mehr im Monat',
    hours: 'und {low}–{high} Stunden weniger am Handy',
    nothing: 'Ihr Studio ist schon gut aufgestellt. Zenno spart Ihnen vor allem Zeit.',
    lines: {
      commission: {
        label: 'Provision gespart',
        how: 'Ihre Marktplatz-Buchungen × Ihr Durchschnittspreis × Ihre Provision. Bei „weiß ich nicht“ rechnen wir mit 20 %.',
      },
      afterHours: {
        label: 'Buchungen, wenn das Studio zu hat',
        how: 'Studien zeigen: rund 46 % der Termine werden gebucht, während Studios geschlossen sind. Wer nur per Telefon oder Nachricht bucht, verliert davon einen Teil. Wir rechnen vorsichtig mit 5–10 %.',
      },
      noShows: {
        label: 'Weniger Ausfälle',
        how: 'Ihre Ausfälle pro Woche × Durchschnittspreis. Automatische Erinnerungen verhindern einen Teil davon; wir rechnen mit 25–40 %.',
      },
      giftCards: {
        label: 'Gutscheine online',
        how: 'Wenn 2–4 % Ihrer Kundschaft im Monat einen Gutschein über 50 € kauft. Im November und Dezember rechnen wir mit doppelt so vielen.',
      },
    },
    seasonNote: 'Gutscheine sind mit Weihnachts-Effekt gerechnet.',
    cappedNote: 'Wir zeigen höchstens 40 % Ihres Monatsumsatzes, auch wenn die Einzelposten mehr ergeben.',
    costLabel: 'Empfehlung für Ihr Studio',
    plans: {
      free: { name: 'Free · 0 €', line: 'Online-Buchung und Buchungslink für eine Person.', cta: 'Kostenlos starten' },
      zenno: { name: 'Zenno · 49 € im Monat', line: 'Alles inklusive, auch KI-Rezeption und Erinnerungen.', cta: 'Zenno kostenlos testen' },
    },
    payback: 'Das ist etwa das {times}-Fache von dem, was Zenno kostet.',
    howTitle: 'So rechnen wir',
    howIntro: 'Alle Werte sind Schätzungen aus Ihren Antworten und den Annahmen oben. Quellen:',
    sources: SOURCES,
    disclaimer: 'Schätzung, keine Garantie. Ihre tatsächlichen Zahlen können abweichen.',
    restart: 'Noch einmal rechnen',
  },
}
