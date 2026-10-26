import type { CityContentSet } from './types'

/** Düsseldorf: well-groomed clientele around the Kö, international guests, trade-fair weeks at the Messe. */
export const DUESSELDORF: CityContentSet = {
  de: {
    clientele:
      'Düsseldorf legt Wert auf ein gepflegtes Auftreten, und das merkt man im Terminkalender. Rund um die Königsallee und in Oberkassel bucht eine Kundschaft, die ihre feste Stylistin hat und Pünktlichkeit erwartet. Dazu kommen internationale Gäste: Beschäftigte ausländischer Firmen, darunter viele aus der japanischen Community, die oft auf Englisch schreiben, und in Messewochen Besucherinnen, die nur wenige freie Stunden in der Stadt haben.',
    industries: {
      'salons-spas': {
        districts: ['Königsallee', 'Carlstadt', 'Oberkassel', 'Pempelfort', 'Unterbilk', 'Flingern'],
        hero: {
          title: ['Salons in Düsseldorf,', 'so gepflegt gebucht wie frisiert.'],
          lead: 'Zwischen Carlstadt und Oberkassel erwartet Ihre Kundschaft, dass die Buchung so reibungslos läuft wie der Termin selbst. Mit Zenno bucht sie Farbe, Schnitt oder Gesichtsbehandlung auf Ihrer eigenen Seite, auf Deutsch oder Englisch, und auch über KI-Assistenten.',
        },
        local: {
          title: ['Stammkundschaft an der Kö,', 'Messegäste am Abend.'],
          paragraphs: [
            'Wer in Düsseldorf zum Friseur oder zur Kosmetikerin geht, hat meist eine feste Ansprechpartnerin und einen festen Rhythmus: alle fünf Wochen der Ansatz, vor dem Wochenende die Maniküre. Auf Ihrer Zenno-Seite wählt die Kundin genau diese Person, sieht deren echte freie Zeiten und bucht in einer Minute. Kommt im Büro etwas dazwischen, verschiebt sie selbst im Kundenportal, und niemand muss zurückrufen.',
            'In Messewochen ist die Stadt voll, und Gäste aus dem Ausland suchen kurzfristig eine Föhnfrisur vor dem Abendessen oder eine Massage nach einem langen Tag am Stand. Sie schreiben meist auf Englisch und meist abends. Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch oder Englisch und bucht freie Zeiten direkt ein. Lange Farbtermine sichern Sie mit einer Anzahlung über Stripe ab.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Any salon near Königsallee with a blow-dry slot tomorrow before 6 pm?' },
            { from: 'bot', text: 'Salon Rheinufer has Thu 16:30 free, blow-dry with Mira, 45 min, €55. Book it on their page?' },
            { from: 'me', text: 'Perfect, book it' },
            { from: 'bot', text: 'Booked directly with Salon Rheinufer. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Salon Rheinufer · ohne Provision',
        },
        faq: [
          {
            q: 'In Messewochen schreiben mir viele Gäste aus dem Ausland. Wie halte ich da mit?',
            a: 'Ihre Buchungsseite gibt es auf Deutsch und Englisch, und sie zeigt jederzeit Ihre echten freien Zeiten. Die KI-Rezeption beantwortet Nachrichten auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch, Englisch oder Thai und bucht direkt in Ihren Kalender. Bestätigung und Erinnerung gehen per SMS und E-Mail raus.',
          },
          {
            q: 'Kann ich Gutscheine verkaufen, ohne dass jemand in den Salon kommen muss?',
            a: 'Ja. Gutscheine und Geschenkkarten verkaufen Sie online über Ihre Buchungsseite, bezahlt wird über Stripe. Für Stammkundinnen vergeben Sie zusätzlich Treuepunkte.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Flingern', 'Pempelfort', 'Unterbilk', 'Oberkassel', 'Bilk', 'Derendorf'],
        hero: {
          title: ['Yogastudios in Düsseldorf,', 'gebucht zwischen zwei Meetings.'],
          lead: 'In Flingern, Pempelfort und Unterbilk liegen viele Studios nah an den Büros. Ihre Kundschaft bucht Probestunde, Einzelstunde oder Personal Training auf Ihrer eigenen Seite, auch über KI-Assistenten, und kurzfristige Absagen sichern Sie mit hinterlegter Karte ab.',
        },
        local: {
          title: ['Medienhafen am Mittag,', 'Flingern am Abend.'],
          paragraphs: [
            'Viele Düsseldorferinnen arbeiten in Agenturen, Kanzleien und Beratungen zwischen Medienhafen und Innenstadt und planen ihre Woche im Kalender durch. Eine Pilates-Einzelstunde in der Mittagspause oder Yoga am frühen Abend wird dann gebucht, wenn der freie Slot sichtbar ist. Ihre Zenno-Seite zeigt Angebote, Preise und freie Zeiten so, dass Menschen und KI-Assistenten sie lesen und direkt bei Ihnen buchen können.',
            'In Flingern und Unterbilk gibt es viele kleine Studios, die eine Lehrerin allein führt. Wer gerade unterrichtet, kann nicht ans Telefon. Die KI-Rezeption beantwortet Fragen zu Preisen und freien Zeiten auf WhatsApp, per E-Mail und im Website-Chat. Erinnerungen per SMS und E-Mail senken das Risiko leerer Termine, und bei zu später Absage berechnen Sie über Stripe eine Gebühr.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Gibt es in Pempelfort am Dienstag um 12:30 eine Pilates-Einzelstunde?' },
            { from: 'bot', text: 'Studio Nordlicht hat Di. 12:30 frei, Pilates-Einzelstunde mit Lena, 50 Min., 75 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, bitte' },
            { from: 'bot', text: 'Gebucht, direkt bei Studio Nordlicht. Die Bestätigung kommt per E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Studio Nordlicht · ohne Provision',
        },
        faq: [
          {
            q: 'Ich bin Kleinunternehmerin. Passt die Abrechnung trotzdem?',
            a: 'Ja. Zenno berücksichtigt die Kleinunternehmerregelung. Sind Sie umsatzsteuerpflichtig, legen Sie die Umsatzsteuer pro Leistung fest. Für Ihre Steuerberatung gibt es den DATEV-Export.',
          },
          {
            q: 'Was passiert, wenn jemand die Einzelstunde kurzfristig absagt?',
            a: 'Sie entscheiden: Vorkasse bei der Buchung oder hinterlegte Karte mit einer Gebühr bei No-Show oder zu später Absage. Im Kundenportal kann Ihre Kundschaft rechtzeitig selbst verschieben, statt einfach nicht zu kommen.',
          },
        ],
      },
      clinics: {
        districts: ['Königsallee', 'Carlstadt', 'Oberkassel', 'Pempelfort', 'Stadtmitte', 'Golzheim'],
        hero: {
          title: ['Ästhetikpraxen in Düsseldorf,', 'diskret gebucht.'],
          lead: 'Rund um die Kö und in Oberkassel erwartet Ihre Kundschaft Diskretion und einen reibungslosen Ablauf. Mit Zenno bucht sie Beratung und Behandlung online auf Ihrer eigenen Seite, auf Deutsch oder Englisch, mit Anzahlung für lange Termine.',
        },
        local: {
          title: ['Diskretion beginnt', 'bei der Terminbuchung.'],
          paragraphs: [
            'Wer eine ästhetische Behandlung plant, möchte das selten am Telefon besprechen, während im Büro jemand mithört. In Düsseldorf kommt eine internationale Kundschaft dazu, etwa aus der japanischen Community rund um die Immermannstraße, die schriftlich und oft auf Englisch anfragt. Mit Zenno buchen sie Beratungstermine auf Ihrer Seite, in Ruhe und zu jeder Uhrzeit, und erhalten die Bestätigung per E-Mail oder SMS.',
            'Die KI-Rezeption beantwortet Fragen zu Ablauf, Dauer und Preisen aus Ihren eigenen Angaben. Alles, was die Gesundheit betrifft, übergibt sie an Sie oder Ihr Team, und im Entwurfsmodus geben Sie jede Antwort vor dem Versand frei. Für längere Behandlungen verlangen Sie bei der Buchung eine Anzahlung über Stripe, damit ein abgesagter Termin am Freitagnachmittag nicht unbezahlt bleibt.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Ich hätte gern einen Beratungstermin für eine Hautbehandlung in Oberkassel, am liebsten Freitagvormittag.' },
            { from: 'bot', text: 'Praxis Weidenhof hat Fr. 10:15 frei, Erstberatung, 30 Min., 60 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, bitte buchen' },
            { from: 'bot', text: 'Gebucht, direkt bei Praxis Weidenhof. Die Bestätigung kommt per E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Praxis Weidenhof · ohne Provision',
        },
        faq: [
          {
            q: 'Viele meiner Kundinnen schreiben auf Englisch. Wie läuft das?',
            a: 'Buchungsseite und Bestätigungen gibt es auf Deutsch und Englisch. Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch, Englisch oder Thai. Medizinische Fragen beantwortet sie nicht, sondern übergibt sie an Sie.',
          },
          {
            q: 'Wie sieht es mit Umsatzsteuer und Buchhaltung aus?',
            a: 'Sie legen die Umsatzsteuer pro Leistung fest, so bleiben unterschiedliche Steuersätze sauber getrennt. Für Ihre Steuerberatung exportieren Sie die Daten im DATEV-Format.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'Düsseldorf cares about looking well put together, and it shows in the appointment book. Around the Königsallee and in Oberkassel, clients have their regular stylist and expect things to run on time. Add international guests: staff of foreign companies, many from the Japanese community, who often write in English, and during trade-fair weeks visitors with only a few free hours in town.',
    industries: {
      'salons-spas': {
        districts: ['Königsallee', 'Carlstadt', 'Oberkassel', 'Pempelfort', 'Unterbilk', 'Flingern'],
        hero: {
          title: ['Salons in Düsseldorf,', 'booked as smoothly as they style.'],
          lead: 'Between Carlstadt and Oberkassel, clients expect booking to go as smoothly as the appointment itself. With Zenno they book colour, a cut or a facial on your own page, in German or English, and through AI assistants too.',
        },
        local: {
          title: ['Regulars on the Kö,', 'trade-fair guests in the evening.'],
          paragraphs: [
            'In Düsseldorf, people going to the hairdresser or beautician usually have one person they trust and a fixed rhythm: roots every five weeks, a manicure before the weekend. On your Zenno page a client picks exactly that person, sees their real free times and books in a minute. If something comes up at work, she moves the appointment herself in the client portal, and nobody has to call back.',
            'During trade-fair weeks the city is full, and visitors from abroad look for a blow-dry before dinner or a massage after a long day on the stand. They mostly write in English, and mostly in the evening. The AI receptionist replies on WhatsApp, by email and in your website chat in German or English and books free times straight into your calendar. Long colour appointments are secured with a deposit through Stripe.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Any salon near Königsallee with a blow-dry slot tomorrow before 6 pm?' },
            { from: 'bot', text: 'Salon Rheinufer has Thu 16:30 free, blow-dry with Mira, 45 min, €55. Book it on their page?' },
            { from: 'me', text: 'Perfect, book it' },
            { from: 'bot', text: 'Booked directly with Salon Rheinufer. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Salon Rheinufer's calendar · no commission",
        },
        faq: [
          {
            q: 'During trade-fair weeks I get lots of messages from visitors abroad. How do I keep up?',
            a: 'Your booking page is available in German and English and always shows your real free times. The AI receptionist answers on WhatsApp, by email and in your website chat in German, English or Thai and books straight into your calendar. Confirmations and reminders go out by SMS and email.',
          },
          {
            q: 'Can I sell vouchers without clients having to come into the salon?',
            a: 'Yes. You sell vouchers and gift cards online through your booking page, with payment via Stripe. For regulars you can also award loyalty points.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Flingern', 'Pempelfort', 'Unterbilk', 'Oberkassel', 'Bilk', 'Derendorf'],
        hero: {
          title: ['Yoga studios in Düsseldorf,', 'booked between two meetings.'],
          lead: 'In Flingern, Pempelfort and Unterbilk many studios sit close to the offices. Clients book a trial, a private session or personal training on your own page, through AI assistants too, and a card on file covers you against last-minute cancellations.',
        },
        local: {
          title: ['Medienhafen at lunch,', 'Flingern in the evening.'],
          paragraphs: [
            'Many people in Düsseldorf work in agencies, law firms and consultancies between the Medienhafen and the city centre, and their week is planned in a calendar. A private Pilates session at lunch or yoga in the early evening gets booked when the free slot is visible. Your Zenno page shows offers, prices and free times in a way people and AI assistants can read, so they book you directly.',
            'Flingern and Unterbilk have many small studios run by a single teacher. While you teach, you can’t pick up the phone. The AI receptionist answers questions about prices and free times on WhatsApp, by email and in your website chat. SMS and email reminders reduce the risk of empty slots, and for a late cancellation you charge a fee through Stripe.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Is there a private Pilates session in Pempelfort on Tuesday at 12:30?' },
            { from: 'bot', text: 'Studio Nordlicht has Tue 12:30 free, private Pilates with Lena, 50 min, €75. Book it on their page?' },
            { from: 'me', text: 'Yes, please' },
            { from: 'bot', text: 'Booked directly with Studio Nordlicht. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Studio Nordlicht's calendar · no commission",
        },
        faq: [
          {
            q: 'I’m registered as a Kleinunternehmer. Does billing still work?',
            a: 'Yes. Zenno supports the Kleinunternehmer rule. If you charge VAT, you set it per service. For your tax adviser there is a DATEV export.',
          },
          {
            q: 'What happens when someone cancels a private session at short notice?',
            a: 'You decide: prepayment at booking, or a card on file with a fee for a no-show or late cancellation. In the client portal, clients can reschedule in good time themselves instead of simply not turning up.',
          },
        ],
      },
      clinics: {
        districts: ['Königsallee', 'Carlstadt', 'Oberkassel', 'Pempelfort', 'Stadtmitte', 'Golzheim'],
        hero: {
          title: ['Aesthetic clinics in Düsseldorf,', 'booked discreetly.'],
          lead: 'Around the Kö and in Oberkassel, clients expect discretion and a smooth process. With Zenno they book consultations and treatments online on your own page, in German or English, with a deposit for long appointments.',
        },
        local: {
          title: ['Discretion starts', 'with the booking.'],
          paragraphs: [
            'Someone planning an aesthetic treatment rarely wants to discuss it on the phone while colleagues are listening. Düsseldorf also has an international clientele, for example from the Japanese community around Immermannstraße, who ask in writing and often in English. With Zenno they book consultations on your page, calmly and at any hour, and receive the confirmation by email or SMS.',
            'The AI receptionist answers questions about the process, duration and prices from your own information. Anything health-related goes to you or your team, and in draft mode you approve every reply before it is sent. For longer treatments you ask for a deposit through Stripe at booking, so a cancelled Friday-afternoon appointment doesn’t go unpaid.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'I’d like a consultation for a skin treatment in Oberkassel, ideally Friday morning.' },
            { from: 'bot', text: 'Praxis Weidenhof has Fri 10:15 free, first consultation, 30 min, €60. Book it on their page?' },
            { from: 'me', text: 'Yes, book it' },
            { from: 'bot', text: 'Booked directly with Praxis Weidenhof. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Praxis Weidenhof's calendar · no commission",
        },
        faq: [
          {
            q: 'Many of my clients write in English. How does that work?',
            a: 'The booking page and confirmations are available in German and English. The AI receptionist replies on WhatsApp, by email and in your website chat in German, English or Thai. It doesn’t answer medical questions; it hands them to you.',
          },
          {
            q: 'What about VAT and bookkeeping?',
            a: 'You set VAT per service, so different rates stay cleanly separated. For your tax adviser you export the data in DATEV format.',
          },
        ],
      },
    },
  },
}
