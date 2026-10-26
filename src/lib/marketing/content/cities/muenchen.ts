import type { CityContentSet } from './types'

/** München: demanding, well-organised clientele, many international residents, and the Wiesn rush every September. */
export const MUENCHEN: CityContentSet = {
  de: {
    clientele:
      'In München ist die Kundschaft anspruchsvoll und gut organisiert: Viele planen Termine Wochen im Voraus, erwarten Pünktlichkeit und zahlen gern für Qualität. Dazu kommt eine große internationale Gemeinde, von Fachkräften in Technik und Industrie bis zu Familien, die auf Englisch anfragen. Und einmal im Jahr verschiebt die Wiesn alles: Ab Mitte September sind Haar- und Stylingtermine so gefragt wie sonst nie.',
    industries: {
      'salons-spas': {
        districts: ['Schwabing', 'Glockenbachviertel', 'Haidhausen', 'Maxvorstadt', 'Bogenhausen', 'Neuhausen'],
        hero: {
          title: ['Salons in München,', 'zur Wiesn voll, aber bezahlt.'],
          lead: 'Flechtfrisur um halb acht, Farbe vor dem Urlaub, Maniküre vor dem Geschäftsessen: Ihre Kundschaft bucht direkt auf Ihrer Seite, auf Deutsch oder Englisch und auch über KI-Assistenten. Mit Vorkasse bleibt kein Wiesn-Termin leer.',
        },
        local: {
          title: ['Zwei Wochen Wiesn,', 'das ganze Jahr Stammkundschaft.'],
          paragraphs: [
            'Wenn im September die Wiesn beginnt, wollen in Schwabing, Haidhausen und im Glockenbachviertel plötzlich alle gleichzeitig eine Flechtfrisur, am liebsten früh am Morgen, bevor die Zelte öffnen. Mit Zenno legen Sie diese zusätzlichen Zeiten einfach als freie Termine an, Ihre Kundschaft bucht sie online, und für Wiesn-Termine verlangen Sie den vollen Preis bei der Buchung. Wer dann nicht erscheint, hat trotzdem bezahlt.',
            'Den Rest des Jahres zählt vor allem Verlässlichkeit. Ihre Kundschaft in Bogenhausen oder der Maxvorstadt plant Schnitt und Farbe oft Wochen voraus und erwartet eine Erinnerung, bevor der Termin ansteht. SMS und E-Mail gehen automatisch raus, Treuepunkte belohnen Stammkundinnen, und Gutscheine verkaufen Sie online. Für internationale Kundschaft antwortet die KI-Rezeption auf Englisch, auf WhatsApp genauso wie im Website-Chat.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Ich brauche für den ersten Wiesn-Samstag eine Flechtfrisur in Haidhausen, möglichst früh.' },
            { from: 'bot', text: 'Salon Isarlicht hat Sa. 7:30 frei, Wiesn-Flechtfrisur mit Vroni, 45 Min., 55 €, Bezahlung bei der Buchung. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, passt' },
            { from: 'bot', text: 'Gebucht, direkt bei Salon Isarlicht. Die Bestätigung kommt per SMS.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Salon Isarlicht · ohne Provision',
        },
        faq: [
          {
            q: 'Kann ich zur Wiesn eigene Leistungen und frühere Zeiten anbieten?',
            a: 'Ja. Sie legen zum Beispiel eine Wiesn-Flechtfrisur mit eigenem Preis und eigener Dauer an und öffnen zusätzliche Zeiten am frühen Morgen. Für diese Termine kann bei der Buchung der volle Preis oder eine Anzahlung fällig werden, bezahlt über Stripe.',
          },
          {
            q: 'Viele meiner Kundinnen sprechen Englisch. Wie buchen sie?',
            a: 'Die Buchungsseite gibt es auf Deutsch und Englisch, und Bestätigungen gehen in der Sprache der Buchung raus. Die KI-Rezeption antwortet in der Sprache, in der geschrieben wird: Deutsch, Englisch oder Thai.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Schwabing', 'Maxvorstadt', 'Glockenbachviertel', 'Haidhausen', 'Neuhausen', 'Sendling'],
        hero: {
          title: ['Yogastudios in München,', 'gebucht unter der Woche.'],
          lead: 'Am Wochenende geht es in die Berge, unter der Woche auf die Matte. Mit Zenno bucht Ihre Kundschaft Probestunde, Einzelstunde oder Personal Training direkt bei Ihnen, auf Deutsch oder Englisch und auch über KI-Assistenten.',
        },
        local: {
          title: ['Am Wochenende in den Bergen,', 'am Dienstag bei Ihnen.'],
          paragraphs: [
            'München bewegt sich gern draußen: an der Isar, im Englischen Garten, am Wochenende in den Bergen. Ins Studio kommt man unter der Woche, morgens vor der Arbeit oder abends in Schwabing und Haidhausen. Wer dann eine passende Zeit sucht, bucht dort, wo sie sofort sichtbar ist. Ihre Zenno-Seite zeigt Angebote, Preise und freie Zeiten so, dass Menschen und KI-Assistenten direkt bei Ihnen buchen können.',
            'In der Maxvorstadt kommen Studierende und internationale Fachkräfte dazu, und viele davon fragen auf Englisch. Die KI-Rezeption beantwortet Fragen zu Ablauf und Preisen auf WhatsApp, per E-Mail und im Website-Chat in der Sprache, in der geschrieben wird. Für Einzelstunden verlangen Sie Vorkasse oder eine hinterlegte Karte, damit eine kurzfristige Absage vor einem Brückentag nicht zu Ihrem Verlust wird.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Any private yoga session in Schwabing on Tuesday after work?' },
            { from: 'bot', text: 'Studio Feilitzsch has Tue 18:45 free, private session with Anna, 60 min, €80. Book it on their page?' },
            { from: 'me', text: 'Sounds good' },
            { from: 'bot', text: 'Booked directly with Studio Feilitzsch. The confirmation is on its way.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Studio Feilitzsch · ohne Provision',
        },
        faq: [
          {
            q: 'Ich unterrichte auch auf Englisch. Wie finden mich internationale Kundinnen?',
            a: 'Ihre Buchungsseite gibt es auf Deutsch und Englisch, und KI-Assistenten wie ChatGPT oder Perplexity können Angebote, Preise und freie Zeiten darauf lesen. Wer dort auf Englisch nach einer Yogastunde in Schwabing fragt, kann direkt bei Ihnen buchen.',
          },
          {
            q: 'Ich bin Kleinunternehmerin. Passt Zenno dazu?',
            a: 'Ja. Zenno unterstützt die Kleinunternehmerregelung. Werden Sie später umsatzsteuerpflichtig, legen Sie die Umsatzsteuer pro Leistung fest, und Ihre Umsätze exportieren Sie im DATEV-Format.',
          },
        ],
      },
      clinics: {
        districts: ['Bogenhausen', 'Schwabing', 'Lehel', 'Maxvorstadt', 'Nymphenburg', 'Haidhausen'],
        hero: {
          title: ['Praxen in München,', 'präzise geplant.'],
          lead: 'In Bogenhausen, im Lehel und in Schwabing erwartet Ihre Kundschaft einen Ablauf ohne Reibung: Beratung online buchen, Anzahlung leisten, rechtzeitig erinnert werden. Zenno übernimmt das, auf Deutsch und Englisch.',
        },
        local: {
          title: ['Hohe Erwartungen,', 'kein Platz für leere Behandlungsräume.'],
          paragraphs: [
            'Ästhetik- und Wellnesspraxen in München behandeln eine Kundschaft, die für Qualität bezahlt und einen reibungslosen Ablauf voraussetzt. Viele wohnen in Bogenhausen oder Nymphenburg, arbeiten in internationalen Unternehmen und haben während der Sprechzeiten kaum Zeit zum Telefonieren. Mit Zenno buchen sie Beratung und Behandlung auf Ihrer eigenen Seite, mit Ihren Preisen und echten freien Zeiten, am Abend genauso wie am Sonntag.',
            'Ein leerer Behandlungsraum kostet bei einer zweistündigen Behandlung mehr als nur Zeit. Deshalb kann bei der Buchung eine Anzahlung oder der volle Preis fällig werden, bezahlt über Stripe. Die KI-Rezeption beantwortet Fragen zu Dauer, Ablauf und Preisen aus Ihren Angaben, auf Deutsch oder Englisch. Medizinische Fragen beantwortet sie nicht: Sie markiert den Chat und übergibt ihn an Sie.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'I need a consultation for laser hair removal in Bogenhausen, Thursday evening if possible.' },
            { from: 'bot', text: 'Praxis Prinzregent has Thu 18:00 free, laser consultation, 30 min, €50. Book it on their page?' },
            { from: 'me', text: 'Yes, please' },
            { from: 'bot', text: 'Booked directly with Praxis Prinzregent. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Praxis Prinzregent · ohne Provision',
        },
        faq: [
          {
            q: 'Beantwortet die KI-Rezeption Fragen zu Risiken einer Behandlung?',
            a: 'Nein. Sie beantwortet nur Fragen zu Terminen, Preisen und Ablauf aus Ihren Angaben. Fragen zur Gesundheit oder zur Eignung einer Behandlung übergibt sie an Sie und markiert den Chat mit „Braucht Sie“.',
          },
          {
            q: 'Wie sichere ich teure Behandlungen gegen kurzfristige Absagen ab?',
            a: 'Sie verlangen bei der Buchung eine Anzahlung oder den vollen Preis, oder Sie lassen die Karte hinterlegen und berechnen bei No-Show oder zu später Absage eine Gebühr. Bezahlt wird über Stripe.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'Munich clients are demanding and well organised: many plan appointments weeks ahead, expect punctuality and are happy to pay for quality. There is also a large international community, from engineers and tech professionals to families, who ask in English. And once a year the Wiesn turns everything upside down: from mid-September, hair and styling appointments are in higher demand than at any other time.',
    industries: {
      'salons-spas': {
        districts: ['Schwabing', 'Glockenbachviertel', 'Haidhausen', 'Maxvorstadt', 'Bogenhausen', 'Neuhausen'],
        hero: {
          title: ['Salons in Munich,', 'fully booked for the Wiesn, and paid.'],
          lead: 'Braids at 7:30, colour before a holiday, a manicure before a business dinner: clients book straight on your page, in German or English, and through AI assistants too. With prepayment, no Wiesn slot stays empty.',
        },
        local: {
          title: ['Two weeks of Wiesn,', 'a whole year of regulars.'],
          paragraphs: [
            'When the Wiesn starts in September, everyone in Schwabing, Haidhausen and the Glockenbachviertel suddenly wants braided hair at the same time, ideally early in the morning before the tents open. With Zenno you simply add these extra hours as free appointments, clients book them online, and for Wiesn slots you charge the full price at booking. Anyone who doesn’t turn up has still paid.',
            'For the rest of the year, reliability is what matters. Your clients in Bogenhausen or the Maxvorstadt plan cuts and colour weeks ahead and expect a reminder before the day. SMS and email go out on their own, loyalty points reward regulars, and you sell vouchers online. For international clients, the AI receptionist answers in English, on WhatsApp as well as in your website chat.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'I need braids in Haidhausen for the first Wiesn Saturday, as early as possible.' },
            { from: 'bot', text: 'Salon Isarlicht has Sat 7:30 free, Wiesn braids with Vroni, 45 min, €55, paid at booking. Book it on their page?' },
            { from: 'me', text: 'Perfect' },
            { from: 'bot', text: 'Booked directly with Salon Isarlicht. The confirmation is on its way by SMS.', booked: true },
          ],
          bookedLabel: "In Salon Isarlicht's calendar · no commission",
        },
        faq: [
          {
            q: 'Can I offer special services and earlier hours for the Wiesn?',
            a: 'Yes. You add, say, Wiesn braids with their own price and duration and open extra early-morning hours. For these appointments the full price or a deposit can be due at booking, paid through Stripe.',
          },
          {
            q: 'Many of my clients speak English. How do they book?',
            a: 'The booking page is available in German and English, and confirmations go out in the language of the booking. The AI receptionist replies in the language the client writes in: German, English or Thai.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Schwabing', 'Maxvorstadt', 'Glockenbachviertel', 'Haidhausen', 'Neuhausen', 'Sendling'],
        hero: {
          title: ['Yoga studios in Munich,', 'booked during the week.'],
          lead: 'Weekends are for the mountains, weekdays for the mat. With Zenno, clients book a trial, a private session or personal training directly with you, in German or English, and through AI assistants too.',
        },
        local: {
          title: ['In the mountains at the weekend,', 'with you on Tuesday.'],
          paragraphs: [
            'Munich likes to move outdoors: along the Isar, in the Englischer Garten, in the mountains at the weekend. The studio is for weekdays, before work or in the evening in Schwabing and Haidhausen. Whoever is looking for a slot then books where it is visible right away. Your Zenno page shows offers, prices and free times so people and AI assistants can book you directly.',
            'In the Maxvorstadt, students and international professionals join the mix, and many of them ask in English. The AI receptionist answers questions about the session and prices on WhatsApp, by email and in your website chat, in the language the client writes in. For private sessions you ask for prepayment or a card on file, so a last-minute cancellation before a long weekend doesn’t become your loss.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Any private yoga session in Schwabing on Tuesday after work?' },
            { from: 'bot', text: 'Studio Feilitzsch has Tue 18:45 free, private session with Anna, 60 min, €80. Book it on their page?' },
            { from: 'me', text: 'Sounds good' },
            { from: 'bot', text: 'Booked directly with Studio Feilitzsch. The confirmation is on its way.', booked: true },
          ],
          bookedLabel: "In Studio Feilitzsch's calendar · no commission",
        },
        faq: [
          {
            q: 'I also teach in English. How do international clients find me?',
            a: 'Your booking page is available in German and English, and AI assistants such as ChatGPT or Perplexity can read the offers, prices and free times on it. Someone asking there in English for a yoga session in Schwabing can book you directly.',
          },
          {
            q: 'I’m a Kleinunternehmer. Does Zenno work for me?',
            a: 'Yes. Zenno supports the Kleinunternehmer rule. If you later become liable for VAT, you set VAT per service, and you export your sales in DATEV format.',
          },
        ],
      },
      clinics: {
        districts: ['Bogenhausen', 'Schwabing', 'Lehel', 'Maxvorstadt', 'Nymphenburg', 'Haidhausen'],
        hero: {
          title: ['Clinics in Munich,', 'planned with precision.'],
          lead: 'In Bogenhausen, Lehel and Schwabing, clients expect a smooth process: book the consultation online, pay a deposit, get reminded in time. Zenno handles it, in German and English.',
        },
        local: {
          title: ['High expectations,', 'no room for empty treatment rooms.'],
          paragraphs: [
            'Aesthetic and wellness clinics in Munich treat clients who pay for quality and take a smooth process for granted. Many live in Bogenhausen or Nymphenburg, work for international companies and have little time to phone during opening hours. With Zenno they book consultations and treatments on your own page, with your prices and real free times, in the evening as easily as on a Sunday.',
            'An empty treatment room costs more than time when the treatment runs two hours. That is why a deposit or the full price can be due at booking, paid through Stripe. The AI receptionist answers questions about duration, process and prices from your own information, in German or English. It does not answer medical questions: it flags the chat and hands it to you.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'I need a consultation for laser hair removal in Bogenhausen, Thursday evening if possible.' },
            { from: 'bot', text: 'Praxis Prinzregent has Thu 18:00 free, laser consultation, 30 min, €50. Book it on their page?' },
            { from: 'me', text: 'Yes, please' },
            { from: 'bot', text: 'Booked directly with Praxis Prinzregent. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Praxis Prinzregent's calendar · no commission",
        },
        faq: [
          {
            q: 'Does the AI receptionist answer questions about the risks of a treatment?',
            a: 'No. It only answers questions about appointments, prices and the process from your own information. Questions about health or whether a treatment is suitable are handed to you, and the chat is marked “Needs you”.',
          },
          {
            q: 'How do I protect expensive treatments against late cancellations?',
            a: 'You ask for a deposit or the full price at booking, or keep the card on file and charge a fee for a no-show or late cancellation. Payments run through Stripe.',
          },
        ],
      },
    },
  },
}
