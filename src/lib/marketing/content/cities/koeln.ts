import type { CityContentSet } from './types'

/** Köln: sociable, spontaneous clientele, many students, and Karneval season driving styling demand. */
export const KOELN: CityContentSet = {
  de: {
    clientele:
      'Köln ist offen, gesellig und spontan. Viele buchen kurzfristig, schreiben lieber eine Nachricht, als anzurufen, und erzählen danach im Veedel weiter, wo es gut war. Mit Universität und Hochschulen kommt viel junge Kundschaft in die Stadt, die preisbewusst ist und auf dem Handy bucht. Und eine Jahreszeit verschiebt den ganzen Kalender: Rund um Karneval sind Styling-, Make-up- und Haartermine schneller vergeben als sonst.',
    industries: {
      'salons-spas': {
        districts: ['Belgisches Viertel', 'Ehrenfeld', 'Südstadt', 'Agnesviertel', 'Nippes', 'Lindenthal'],
        hero: {
          title: ['Salons in Köln,', 'bereit für Weiberfastnacht.'],
          lead: 'Ob Karnevals-Make-up an Weiberfastnacht oder Balayage im Belgischen Viertel: Ihre Kundschaft bucht direkt auf Ihrer Seite, auch über KI-Assistenten. Mit Vorkasse bleibt in der Session kein Stuhl leer.',
        },
        local: {
          title: ['An den tollen Tagen', 'zählt jede freie Minute.'],
          paragraphs: [
            'Von Weiberfastnacht bis Rosenmontag wollen in Ehrenfeld, Nippes und der Südstadt gefühlt alle gleichzeitig geschminkt, geflochten oder frisiert werden, und zwar morgens, bevor es auf die Straße geht. Mit Zenno öffnen Sie dafür zusätzliche frühe Termine und legen eigene Leistungen wie Karnevals-Make-up an. Ihre Kundschaft bucht online und bezahlt bei der Buchung. Wer dann doch beim ersten Zug hängen bleibt, hat den Termin trotzdem bezahlt.',
            'Nach Aschermittwoch wird es in Köln nicht ruhiger, nur anders. Im Belgischen Viertel und im Agnesviertel bucht eine junge, oft spontane Kundschaft auf dem Handy, und viele Studierende vergleichen Preise, bevor sie sich festlegen. Ihre Buchungsseite zeigt Preise und freie Zeiten offen, die KI-Rezeption beantwortet Fragen auf WhatsApp, und Treuepunkte holen Kundinnen aus dem Veedel zurück. Gutscheine zum Geburtstag verkaufen Sie online.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Hat in Ehrenfeld an Weiberfastnacht morgens noch jemand Zeit für Karnevals-Make-up?' },
            { from: 'bot', text: 'Salon Rheinlust hat Do. 8:15 frei, Karnevals-Make-up mit Lea, 40 Min., 35 €, Bezahlung bei der Buchung. Direkt dort buchen?' },
            { from: 'me', text: 'Jo, bitte!' },
            { from: 'bot', text: 'Gebucht, direkt bei Salon Rheinlust. Die Bestätigung kommt per SMS.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Salon Rheinlust · ohne Provision',
        },
        faq: [
          {
            q: 'Kann ich Karnevalstermine nur gegen Vorkasse anbieten?',
            a: 'Ja. Für einzelne Leistungen legen Sie fest, dass bei der Buchung der volle Preis oder eine Anzahlung fällig wird. Alternativ wird die Karte hinterlegt und bei No-Show eine Gebühr berechnet. Bezahlt wird über Stripe.',
          },
          {
            q: 'Viele meiner Kundinnen schreiben lieber, als anzurufen. Wer antwortet?',
            a: 'Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat auf Fragen zu Preisen und freien Zeiten, auf Deutsch, Englisch oder Thai. Termine landen in Ihrem Kalender, Beschwerden und Sonderfälle übergibt sie an Sie.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Sülz', 'Lindenthal', 'Ehrenfeld', 'Südstadt', 'Belgisches Viertel', 'Nippes'],
        hero: {
          title: ['Yogastudios in Köln,', 'gebucht ab Aschermittwoch.'],
          lead: 'Nach der Session kommt der Neustart: Probestunde in Sülz, Einzelstunde in Ehrenfeld. Mit Zenno bucht Ihre Kundschaft direkt bei Ihnen, auch über KI-Assistenten, und eine hinterlegte Karte schützt Sie vor No-Shows.',
        },
        local: {
          title: ['Nach dem Karneval', 'kommt die Probestunde.'],
          paragraphs: [
            'In Köln beginnt das Jahr gefühlt zweimal: im Januar und noch einmal am Aschermittwoch. Wenn die Kostüme wieder im Schrank hängen, suchen viele einen ruhigen Ausgleich und buchen die erste Probestunde, oft abends auf dem Sofa. Zwischen Sülz, Lindenthal und dem Stadtwald liegen viele kleine Studios nah beieinander. Ihre Zenno-Seite zeigt Angebote, Preise und freie Zeiten so, dass Menschen und KI-Assistenten direkt bei Ihnen buchen.',
            'Rund um die Universität bucht eine junge Kundschaft, die spontan ist und gern kurzfristig umplant. Im Kundenportal verschiebt sie ihren Termin selbst, ohne dass jemand anrufen muss. Wer gar nicht kommt, zahlt über die hinterlegte Karte die Gebühr, die Sie für No-Shows und späte Absagen festlegen. Und wer einer Freundin eine Stunde schenken will, kauft den Gutschein online auf Ihrer Seite.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Gibt es in Sülz am Montagabend eine Yoga-Probestunde?' },
            { from: 'bot', text: 'Studio Weiher hat Mo. 19:30 frei, Probestunde mit Jana, 60 Min., 12 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, gerne' },
            { from: 'bot', text: 'Gebucht, direkt bei Studio Weiher. Die Bestätigung kommt per E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Studio Weiher · ohne Provision',
        },
        faq: [
          {
            q: 'Meine Kundschaft verschiebt oft kurzfristig. Muss ich alles selbst umtragen?',
            a: 'Nein. Im Kundenportal verschiebt Ihre Kundschaft Termine selbst, und Ihr Kalender ist sofort aktuell. Für zu späte Absagen legen Sie eine Gebühr fest, die über die hinterlegte Karte berechnet wird.',
          },
          {
            q: 'Kann ich Gutscheine für Einzelstunden verkaufen?',
            a: 'Ja. Gutscheine verkaufen Sie online über Ihre Buchungsseite. Zusätzlich sammeln Stammkundinnen Treuepunkte.',
          },
        ],
      },
      clinics: {
        districts: ['Lindenthal', 'Marienburg', 'Rodenkirchen', 'Junkersdorf', 'Agnesviertel', 'Südstadt'],
        hero: {
          title: ['Praxen in Köln,', 'gebucht nach Drehplan.'],
          lead: 'Ob Hautberatung in Lindenthal oder Behandlung vor einem Drehtag: Ihre Kundschaft bucht online, bekommt Erinnerungen per SMS und E-Mail und leistet bei langen Behandlungen eine Anzahlung.',
        },
        local: {
          title: ['Zwischen Marienburg und Mediapark:', 'Termine, die halten müssen.'],
          paragraphs: [
            'In Köln arbeiten viele in der Medien- und Fernsehbranche, und deren Kalender richtet sich nach Drehtagen, Sendungen und Auftritten vor der Kamera. Eine Behandlung muss dann zuverlässig in die richtige Woche fallen. Mit Zenno bucht Ihre Kundschaft Beratung und Behandlung direkt auf Ihrer Seite, sieht echte freie Zeiten und verschiebt bei Bedarf selbst im Kundenportal, statt Ihre Rezeption dreimal anzurufen.',
            'In Lindenthal, Marienburg und Rodenkirchen kommt eine Kundschaft dazu, die Wert auf Ruhe und persönliche Betreuung legt. Die KI-Rezeption beantwortet Fragen zu Ablauf, Dauer und Preisen aus Ihren Angaben, auf WhatsApp, per E-Mail und im Website-Chat. Alles Medizinische und jede Beschwerde gibt sie an Sie weiter. Im Entwurfsmodus prüfen Sie jede Antwort, bevor sie verschickt wird.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Ich hätte gern in Lindenthal einen Termin für eine Gesichtsbehandlung, nächsten Mittwoch vormittags.' },
            { from: 'bot', text: 'Praxis am Stadtwald hat Mi. 10:00 frei, Gesichtsbehandlung mit Frau Krämer, 60 Min., 120 €, 30 € Anzahlung. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, bitte' },
            { from: 'bot', text: 'Gebucht, direkt bei Praxis am Stadtwald. Die Bestätigung kommt per E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Praxis am Stadtwald · ohne Provision',
        },
        faq: [
          {
            q: 'Empfiehlt die KI-Rezeption Behandlungen?',
            a: 'Nein. Sie beantwortet nur Fragen zu Terminen, Preisen und Ablauf aus Ihren Angaben. Fragen zur Gesundheit, zur Eignung einer Behandlung und Beschwerden übergibt sie an Sie.',
          },
          {
            q: 'Meine Leistungen haben unterschiedliche Umsatzsteuersätze. Geht das?',
            a: 'Ja. Sie legen die Umsatzsteuer für jede Leistung einzeln fest. Ihre Umsätze exportieren Sie im DATEV-Format, und Ihre Steuerberatung arbeitet direkt damit weiter.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'Cologne is open, sociable and spontaneous. Many people book at short notice, would rather send a message than call, and then tell the whole Veedel where they had a good experience. The university and colleges bring plenty of young clients who watch their budget and book on their phone. And one season shifts the entire calendar: around Karneval, styling, make-up and hair appointments go faster than at any other time.',
    industries: {
      'salons-spas': {
        districts: ['Belgisches Viertel', 'Ehrenfeld', 'Südstadt', 'Agnesviertel', 'Nippes', 'Lindenthal'],
        hero: {
          title: ['Salons in Cologne,', 'ready for Weiberfastnacht.'],
          lead: 'Karneval make-up on Weiberfastnacht or balayage in the Belgisches Viertel: clients book straight on your page, and through AI assistants too. With prepayment, no chair stays empty during the season.',
        },
        local: {
          title: ['On the crazy days,', 'every free minute counts.'],
          paragraphs: [
            'From Weiberfastnacht to Rosenmontag, it feels like everyone in Ehrenfeld, Nippes and the Südstadt wants make-up, braids or styling at the same time, and all in the morning before heading out into the streets. With Zenno you open extra early slots and add your own services such as Karneval make-up. Clients book online and pay at booking. If someone gets caught up at the first parade, the appointment is still paid for.',
            'After Ash Wednesday, Cologne doesn’t get quieter, just different. In the Belgisches Viertel and the Agnesviertel, young and often spontaneous clients book on their phone, and many students compare prices before they commit. Your booking page shows prices and free times openly, the AI receptionist answers questions on WhatsApp, and loyalty points bring clients from the neighbourhood back. Birthday vouchers you sell online.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Does anyone in Ehrenfeld still have time for Karneval make-up on Weiberfastnacht morning?' },
            { from: 'bot', text: 'Salon Rheinlust has Thu 8:15 free, Karneval make-up with Lea, 40 min, €35, paid at booking. Book it on their page?' },
            { from: 'me', text: 'Yes, go!' },
            { from: 'bot', text: 'Booked directly with Salon Rheinlust. The confirmation is on its way by SMS.', booked: true },
          ],
          bookedLabel: "In Salon Rheinlust's calendar · no commission",
        },
        faq: [
          {
            q: 'Can I offer Karneval appointments with prepayment only?',
            a: 'Yes. For individual services you decide that the full price or a deposit is due at booking. Alternatively the card is kept on file and a no-show fee charged. Payments run through Stripe.',
          },
          {
            q: 'Many of my clients would rather write than call. Who replies?',
            a: 'The AI receptionist answers questions about prices and free times on WhatsApp, by email and in your website chat, in German, English or Thai. Appointments land in your calendar; complaints and special cases are handed to you.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Sülz', 'Lindenthal', 'Ehrenfeld', 'Südstadt', 'Belgisches Viertel', 'Nippes'],
        hero: {
          title: ['Yoga studios in Cologne,', 'booked from Ash Wednesday.'],
          lead: 'After the season comes the fresh start: a trial in Sülz, a private session in Ehrenfeld. With Zenno clients book you directly, through AI assistants too, and a card on file protects you from no-shows.',
        },
        local: {
          title: ['After Karneval', 'comes the trial session.'],
          paragraphs: [
            'In Cologne the year seems to start twice: in January, and again on Ash Wednesday. Once the costumes are back in the wardrobe, many people look for something calmer and book their first trial session, often from the sofa in the evening. Between Sülz, Lindenthal and the Stadtwald, many small studios sit close together. Your Zenno page shows offers, prices and free times so people and AI assistants can book you directly.',
            'Around the university, clients are young, spontaneous and happy to change plans at short notice. In the client portal they reschedule themselves, without anyone having to call. Anyone who doesn’t show up pays the no-show or late-cancellation fee you set, charged to the card on file. And anyone who wants to give a friend a session buys the voucher online on your page.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Is there a trial yoga session in Sülz on Monday evening?' },
            { from: 'bot', text: 'Studio Weiher has Mon 19:30 free, trial session with Jana, 60 min, €12. Book it on their page?' },
            { from: 'me', text: 'Yes, please' },
            { from: 'bot', text: 'Booked directly with Studio Weiher. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Studio Weiher's calendar · no commission",
        },
        faq: [
          {
            q: 'My clients often reschedule at short notice. Do I have to move everything myself?',
            a: 'No. Clients reschedule in the client portal themselves, and your calendar updates straight away. For late cancellations you set a fee that is charged to the card on file.',
          },
          {
            q: 'Can I sell vouchers for private sessions?',
            a: 'Yes. You sell vouchers online through your booking page. Regulars also collect loyalty points.',
          },
        ],
      },
      clinics: {
        districts: ['Lindenthal', 'Marienburg', 'Rodenkirchen', 'Junkersdorf', 'Agnesviertel', 'Südstadt'],
        hero: {
          title: ['Clinics in Cologne,', 'booked around the shooting schedule.'],
          lead: 'A skin consultation in Lindenthal or a treatment before a day on set: clients book online, get reminders by SMS and email, and pay a deposit for long treatments.',
        },
        local: {
          title: ['Between Marienburg and the Mediapark,', 'appointments have to hold.'],
          paragraphs: [
            'Many people in Cologne work in media and television, and their calendars follow shooting days, broadcasts and appearances on camera. A treatment has to land reliably in the right week. With Zenno, clients book consultations and treatments directly on your page, see real free times and reschedule themselves in the client portal when needed, instead of calling your front desk three times.',
            'In Lindenthal, Marienburg and Rodenkirchen there are also clients who value calm and personal care. The AI receptionist answers questions about the process, duration and prices from your own information, on WhatsApp, by email and in your website chat. Anything medical and every complaint is passed to you. In draft mode you check each reply before it is sent.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'I’d like a facial in Lindenthal next Wednesday morning.' },
            { from: 'bot', text: 'Praxis am Stadtwald has Wed 10:00 free, facial with Ms Krämer, 60 min, €120, €30 deposit. Book it on their page?' },
            { from: 'me', text: 'Yes, please' },
            { from: 'bot', text: 'Booked directly with Praxis am Stadtwald. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Praxis am Stadtwald's calendar · no commission",
        },
        faq: [
          {
            q: 'Does the AI receptionist recommend treatments?',
            a: 'No. It only answers questions about appointments, prices and the process from your own information. Questions about health, whether a treatment is suitable, and complaints are handed to you.',
          },
          {
            q: 'My services have different VAT rates. Is that possible?',
            a: 'Yes. You set VAT for each service individually. You export your sales in DATEV format, and your tax adviser works with them directly.',
          },
        ],
      },
    },
  },
}
