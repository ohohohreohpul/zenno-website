import type { CityContentSet } from './types'

/** Leipzig: young, fast-growing city, students and a creative scene, price-conscious clients, many new small studios. */
export const LEIPZIG: CityContentSet = {
  de: {
    clientele:
      'Leipzig ist jung und wächst. Studierende, Kreative und junge Familien prägen Viertel wie Plagwitz, Connewitz und die Südvorstadt, und viele Studios sind erst vor kurzem eröffnet, oft mit einer Person für Empfang, Behandlung und Buchhaltung zugleich. Die Kundschaft vergleicht Preise genau, bucht über das Handy und schreibt lieber eine Nachricht, als anzurufen.',
    industries: {
      'salons-spas': {
        districts: ['Südvorstadt', 'Connewitz', 'Plagwitz', 'Lindenau', 'Gohlis', 'Zentrum'],
        hero: {
          title: ['Salons in Leipzig,', 'gebucht per Handy, nicht per Anruf.'],
          lead: 'Ob Undercut in Connewitz, Farbe in der Südvorstadt oder Nägel in Lindenau: Ihre Kundschaft bucht auf Ihrer eigenen Seite, sieht Preise vorab und erhält die Bestätigung per SMS. Sie starten mit dem kostenlosen Plan und zahlen keine Provision pro Buchung.',
        },
        local: {
          title: ['Auf der Karli zählt der Preis.', 'Und eine schnelle Antwort.'],
          paragraphs: [
            'Entlang der Karl-Liebknecht-Straße und in Connewitz liegen Friseure, Barbershops und Nagelstudios dicht beieinander, und die Kundschaft weiß genau, was ein Schnitt zwei Häuser weiter kostet. Wer bucht, möchte den Preis sehen, bevor er schreibt. Auf Ihrer Zenno-Seite stehen Leistungen, Preise und freie Zeiten offen, und gebucht wird ohne Rückfrage. Für Studierende, die ungern telefonieren, ist das der naheliegende Weg.',
            'Viele Salons in Plagwitz und Lindenau sind klein und haben keine eigene Rezeption. Die KI-Rezeption beantwortet Nachrichten auf WhatsApp, per E-Mail und im Website-Chat, nennt Preise und freie Zeiten und bucht direkt ein. Weil keine Provision anfällt, bleibt auch bei einem Schnitt für 35 € der volle Betrag bei Ihnen. Für längere Farbtermine genügt eine kleine Anzahlung über Stripe, damit niemand einfach wegbleibt.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Kann ich in Connewitz am Freitag nach der Uni noch einen Haarschnitt bekommen?' },
            { from: 'bot', text: 'Salon Südstern hat Fr. 16:30 frei, Damenschnitt mit Paula, 45 Min., 39 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, gerne' },
            { from: 'bot', text: 'Gebucht, direkt bei Salon Südstern. Die Bestätigung kommt per SMS.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Salon Südstern · ohne Provision',
        },
        faq: [
          {
            q: 'Mein Salon ist neu und das Budget knapp. Was kostet Zenno?',
            a: 'Sie starten mit dem kostenlosen Plan, und auf Buchungen fällt keine Provision an. So nutzen Sie Buchungsseite, Kalender und Erinnerungen, bevor Sie über einen bezahlten Plan nachdenken.',
          },
          {
            q: 'Funktioniert Zenno mit der Kleinunternehmerregelung?',
            a: 'Ja. Mit der Kleinunternehmerregelung wird keine Umsatzsteuer ausgewiesen. Wächst Ihr Salon, legen Sie die Umsatzsteuer pro Leistung fest und exportieren die Daten für Ihre Steuerberatung im DATEV-Format.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Plagwitz', 'Lindenau', 'Connewitz', 'Südvorstadt', 'Schleußig', 'Gohlis'],
        hero: {
          title: ['Yogastudios in Leipzig,', 'klein angefangen, gut gebucht.'],
          lead: 'Ein neues Studio in Plagwitz oder Lindenau braucht keine teure Software, um professionell gebucht zu werden. Mit Zenno buchen Ihre Kundinnen Probestunde, Einzelstunde oder Yogatherapie direkt auf Ihrer Seite, auch über KI-Assistenten, und Sie starten kostenlos.',
        },
        local: {
          title: ['Fabriketage statt Fitnesskette.', 'Gebucht wird trotzdem online.'],
          paragraphs: [
            'Viele Leipziger Yoga- und Pilatesstudios sind in alten Fabriketagen am Karl-Heine-Kanal oder in Ladenlokalen in Lindenau entstanden, oft gegründet von einer Lehrerin, die vorher anderswo unterrichtet hat. Neue Kundschaft kommt über Empfehlungen und das Handy. Ihre Zenno-Seite läuft unter Ihrem eigenen Namen, zeigt Angebote, Preise und freie Zeiten und ist so aufgebaut, dass auch KI-Assistenten sie lesen und direkt bei Ihnen buchen können.',
            'Studierende und Kreative haben flexible Tage, aber volle Wochen, und eine Probestunde ist schnell vergessen. Erinnerungen per SMS und E-Mail helfen dagegen, und mit hinterlegter Karte berechnen Sie bei No-Show eine Gebühr. Gutscheine verkaufen Sie online, etwa als Geschenk zum Semesterende, und treue Kundschaft sammelt Punkte. Die Abrechnung bleibt übersichtlich, auch mit Kleinunternehmerregelung.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Hat ein Yogastudio in Plagwitz am Sonntagvormittag eine Probestunde frei?' },
            { from: 'bot', text: 'Studio Kanalblick hat So. 10:00 frei, Probestunde mit Henrike, 60 Min., 12 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, buch das' },
            { from: 'bot', text: 'Gebucht, direkt bei Studio Kanalblick. Die Bestätigung kommt per E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Studio Kanalblick · ohne Provision',
        },
        faq: [
          {
            q: 'Lohnt sich ein Buchungssystem für ein ganz kleines Studio?',
            a: 'Sie starten mit dem kostenlosen Plan und zahlen keine Provision auf Buchungen. Damit haben Sie von Anfang an eine eigene Buchungsseite, Erinnerungen per SMS und E-Mail und einen Kalender, den Ihre Kundschaft selbst füllt.',
          },
          {
            q: 'Kann ich für Probestunden vorab einen kleinen Betrag verlangen?',
            a: 'Ja. Bei der Buchung kann der volle Preis oder eine Anzahlung fällig werden, bezahlt wird über Stripe. Alternativ wird die Karte hinterlegt und nur bei No-Show oder zu später Absage belastet.',
          },
        ],
      },
      clinics: {
        districts: ['Zentrum', 'Gohlis', 'Waldstraßenviertel', 'Südvorstadt', 'Schleußig', 'Plagwitz'],
        hero: {
          title: ['Praxen in Leipzig,', 'offen für neue Kundschaft.'],
          lead: 'Beratung, Behandlung, Nachtermin: In Leipzig buchen Ihre Kundinnen online auf Ihrer eigenen Seite, mit klaren Preisen und echten freien Zeiten. Längere Behandlungen sichern Sie mit einer Anzahlung ab.',
        },
        local: {
          title: ['Die Stadt wächst.', 'Ihr Kalender soll mitwachsen.'],
          paragraphs: [
            'Nach Leipzig ziehen viele Menschen neu, und wer neu ist, kennt Ihre Praxis noch nicht aus dem Viertel. Gesucht wird abends auf dem Handy, nach einer Hautberatung im Zentrum oder einer Gesichtsbehandlung in Gohlis, und dabei werden Preise verglichen. Wer erst am nächsten Morgen zurückruft, ist dann oft zu spät. Mit Zenno bucht die Kundschaft Beratungstermine direkt auf Ihrer Seite, und die Bestätigung kommt sofort per SMS und E-Mail.',
            'Gerade kleinere Praxen in Gohlis oder Schleußig haben keine Rezeption, die den ganzen Tag besetzt ist. Die KI-Rezeption beantwortet Fragen zu Ablauf, Dauer und Preisen aus Ihren Angaben, und alles, was die Gesundheit betrifft, landet bei Ihnen. Im Entwurfsmodus geben Sie jede Antwort selbst frei. Für längere Behandlungen verlangen Sie eine Anzahlung, und im Kundenportal verschiebt Ihre Kundschaft selbst, statt abzusagen.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Ich suche in Gohlis einen Termin für eine Gesichtsbehandlung, am besten Mittwochabend.' },
            { from: 'bot', text: 'Praxis Rosental hat Mi. 18:00 frei, Gesichtsbehandlung, 60 Min., 69 €, 20 € Anzahlung. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, bitte' },
            { from: 'bot', text: 'Gebucht, direkt bei Praxis Rosental. Die Bestätigung kommt per E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Praxis Rosental · ohne Provision',
        },
        faq: [
          {
            q: 'Was macht die KI-Rezeption, wenn jemand nach Nebenwirkungen fragt?',
            a: 'Sie beantwortet solche Fragen nicht selbst. Gesundheitsfragen und Beschwerden übergibt sie an Sie und markiert den Chat mit „Braucht Sie“. Zu Terminen, Preisen und Ablauf antwortet sie aus Ihren eigenen Angaben.',
          },
          {
            q: 'Kann ich Gutscheine für Behandlungen verkaufen?',
            a: 'Ja. Gutscheine und Geschenkkarten verkaufen Sie online über Ihre Buchungsseite, bezahlt wird über Stripe. Für Stammkundinnen vergeben Sie zusätzlich Treuepunkte.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'Leipzig is young and growing. Students, creatives and young families shape neighbourhoods like Plagwitz, Connewitz and the Südvorstadt, and many studios opened only recently, often with one person handling the front desk, the treatments and the books. Clients compare prices closely, book on their phone and would rather send a message than call.',
    industries: {
      'salons-spas': {
        districts: ['Südvorstadt', 'Connewitz', 'Plagwitz', 'Lindenau', 'Gohlis', 'Zentrum'],
        hero: {
          title: ['Salons in Leipzig,', 'booked by phone screen, not phone call.'],
          lead: 'An undercut in Connewitz, colour in the Südvorstadt or nails in Lindenau: clients book on your own page, see prices up front and get the confirmation by SMS. You start on the free plan and pay no commission per booking.',
        },
        local: {
          title: ['On the Karli, price matters.', 'So does a quick answer.'],
          paragraphs: [
            'Along Karl-Liebknecht-Straße and in Connewitz, hairdressers, barbers and nail studios sit close together, and clients know exactly what a cut costs two doors down. Before they write, they want to see the price. On your Zenno page, services, prices and free times are out in the open, and booking happens without a back-and-forth. For students who don’t like phoning, that is the obvious way to book.',
            'Many salons in Plagwitz and Lindenau are small and have no front desk. The AI receptionist answers messages on WhatsApp, by email and in your website chat, gives prices and free times and books straight in. Because there is no commission, even a €35 cut leaves the full amount with you. For longer colour appointments a small deposit through Stripe is enough to keep people from simply not turning up.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Can I still get a haircut in Connewitz on Friday after uni?' },
            { from: 'bot', text: 'Salon Südstern has Fri 16:30 free, women’s cut with Paula, 45 min, €39. Book it on their page?' },
            { from: 'me', text: 'Yes, please' },
            { from: 'bot', text: 'Booked directly with Salon Südstern. The confirmation is on its way by SMS.', booked: true },
          ],
          bookedLabel: "In Salon Südstern's calendar · no commission",
        },
        faq: [
          {
            q: 'My salon is new and money is tight. What does Zenno cost?',
            a: 'You start on the free plan, and there is no commission on bookings. That way you use the booking page, calendar and reminders before you think about a paid plan.',
          },
          {
            q: 'Does Zenno work with the Kleinunternehmer rule?',
            a: 'Yes. Under the Kleinunternehmer rule no VAT is shown. As your salon grows, you set VAT per service and export the data for your tax adviser in DATEV format.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Plagwitz', 'Lindenau', 'Connewitz', 'Südvorstadt', 'Schleußig', 'Gohlis'],
        hero: {
          title: ['Yoga studios in Leipzig,', 'started small, well booked.'],
          lead: 'A new studio in Plagwitz or Lindenau doesn’t need expensive software to be booked professionally. With Zenno, clients book a trial, a private session or yoga therapy directly on your page, through AI assistants too, and you start for free.',
        },
        local: {
          title: ['A factory loft, not a gym chain.', 'Bookings still happen online.'],
          paragraphs: [
            'Many of Leipzig’s yoga and Pilates studios have opened in old factory floors along the Karl-Heine-Kanal or in shopfronts in Lindenau, often founded by a teacher who used to teach somewhere else. New clients arrive through recommendations and their phone. Your Zenno page runs under your own name, shows offers, prices and free times, and is built so that AI assistants can read it and book you directly too.',
            'Students and creatives have flexible days but full weeks, and a trial session is easily forgotten. SMS and email reminders help, and with a card on file you charge a fee for a no-show. You sell vouchers online, say as a gift at the end of term, and loyal clients collect points. Billing stays simple, including under the Kleinunternehmer rule.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Does a yoga studio in Plagwitz have a trial session free on Sunday morning?' },
            { from: 'bot', text: 'Studio Kanalblick has Sun 10:00 free, trial session with Henrike, 60 min, €12. Book it on their page?' },
            { from: 'me', text: 'Yes, book it' },
            { from: 'bot', text: 'Booked directly with Studio Kanalblick. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Studio Kanalblick's calendar · no commission",
        },
        faq: [
          {
            q: 'Is a booking system worth it for a very small studio?',
            a: 'You start on the free plan and pay no commission on bookings. From day one you have your own booking page, SMS and email reminders, and a calendar your clients fill themselves.',
          },
          {
            q: 'Can I charge a small amount up front for trial sessions?',
            a: 'Yes. The full price or a deposit can be due at booking, with payment via Stripe. Alternatively the card is kept on file and only charged for a no-show or late cancellation.',
          },
        ],
      },
      clinics: {
        districts: ['Zentrum', 'Gohlis', 'Waldstraßenviertel', 'Südvorstadt', 'Schleußig', 'Plagwitz'],
        hero: {
          title: ['Clinics in Leipzig,', 'open to new clients.'],
          lead: 'Consultation, treatment, follow-up: in Leipzig clients book online on your own page, with clear prices and real free times. You secure longer treatments with a deposit.',
        },
        local: {
          title: ['The city is growing.', 'Your calendar should grow with it.'],
          paragraphs: [
            'Many people move to Leipzig, and newcomers don’t yet know your clinic from the neighbourhood. They search on their phone in the evening, for a skin consultation in the centre or a facial in Gohlis, and compare prices as they go. Calling back the next morning is often too late. With Zenno, clients book consultations directly on your page, and the confirmation arrives straight away by SMS and email.',
            'Smaller clinics in Gohlis or Schleußig in particular rarely have a front desk staffed all day. The AI receptionist answers questions about the process, duration and prices from your information, and anything health-related comes to you. In draft mode you approve every reply yourself. For longer treatments you ask for a deposit, and in the client portal clients reschedule themselves instead of cancelling.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'I’m looking for a facial in Gohlis, ideally Wednesday evening.' },
            { from: 'bot', text: 'Praxis Rosental has Wed 18:00 free, facial, 60 min, €69, €20 deposit. Book it on their page?' },
            { from: 'me', text: 'Yes, please' },
            { from: 'bot', text: 'Booked directly with Praxis Rosental. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Praxis Rosental's calendar · no commission",
        },
        faq: [
          {
            q: 'What does the AI receptionist do if someone asks about side effects?',
            a: 'It doesn’t answer those questions itself. Health questions and complaints are handed to you and the chat is marked “Needs you”. On appointments, prices and the process it answers from your own information.',
          },
          {
            q: 'Can I sell vouchers for treatments?',
            a: 'Yes. You sell vouchers and gift cards online through your booking page, with payment via Stripe. For regulars you can also award loyalty points.',
          },
        ],
      },
    },
  },
}
