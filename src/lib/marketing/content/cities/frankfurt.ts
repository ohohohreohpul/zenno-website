import type { CityContentSet } from './types'

/** Frankfurt: tightly scheduled professionals, international English-speaking residents, and trade-fair weeks at the Messe. */
export const FRANKFURT: CityContentSet = {
  de: {
    clientele:
      'Frankfurt arbeitet viel und bucht präzise. Wer im Bankenviertel oder im Westend arbeitet, hat vor acht Uhr Zeit, in der Mittagspause oder nach sieben, und will den Termin in zwei Minuten erledigt haben. Ein großer Teil der Kundschaft kommt aus dem Ausland und schreibt auf Englisch. Und wenn auf der Messe große Veranstaltungen laufen, ist die Stadt voller Gäste, die kurzfristig einen Termin suchen.',
    industries: {
      'salons-spas': {
        districts: ['Nordend', 'Bornheim', 'Sachsenhausen', 'Westend', 'Bockenheim', 'Bahnhofsviertel'],
        hero: {
          title: ['Salons in Frankfurt,', 'gebucht vor dem ersten Meeting.'],
          lead: 'Schnitt um halb acht, Föhnen vor dem Geschäftsessen, Rasur vor dem Messetermin: Ihre Kundschaft bucht direkt auf Ihrer Seite, auf Deutsch oder Englisch und auch über KI-Assistenten.',
        },
        local: {
          title: ['Früh, spät', 'und dazwischen die Mittagspause.'],
          paragraphs: [
            'Im Nordend und in Bornheim sind die Randzeiten am begehrtesten: der Termin um halb acht vor dem Büro und der um halb acht am Abend danach. Wer im Westend oder am Main arbeitet, bucht nicht nach Lust und Laune, sondern nach Kalender, meistens zwischen zwei Besprechungen. Mit Zenno sieht Ihre Kundschaft genau diese freien Zeiten, bucht in einer Minute und bekommt die Bestätigung sofort per SMS und E-Mail.',
            'Während großer Messen ist Frankfurt voller Gäste, die kurzfristig einen Schnitt, eine Rasur oder ein Styling vor dem Abendtermin brauchen, und viele davon fragen auf Englisch. Ihre Buchungsseite gibt es auf Deutsch und Englisch, und die KI-Rezeption antwortet auf WhatsApp und im Website-Chat. Mit hinterlegter Karte und einer Gebühr für No-Shows verlieren Sie nichts, wenn ein Gast seinen Termin doch vergisst.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'I’m in town for the fair. Any haircut near the Messe tomorrow before 9?' },
            { from: 'bot', text: 'Salon Mainlicht in Bockenheim has tomorrow 7:45 free, haircut with Deniz, 45 min, €42. Book it on their page?' },
            { from: 'me', text: 'Perfect' },
            { from: 'bot', text: 'Booked directly with Salon Mainlicht. The confirmation is on its way by SMS.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Salon Mainlicht · ohne Provision',
        },
        faq: [
          {
            q: 'Meine Kundschaft hat nur vor oder nach der Arbeit Zeit. Wie fülle ich die Randzeiten?',
            a: 'Legen Sie Ihre Arbeitszeiten so fest, wie Sie tatsächlich arbeiten, auch früh morgens oder spät abends. Ihre Buchungsseite zeigt genau diese freien Zeiten und nimmt rund um die Uhr Buchungen an. Wer verschieben muss, erledigt das im Kundenportal.',
          },
          {
            q: 'In Messewochen schreiben viele Gäste auf Englisch. Wer antwortet?',
            a: 'Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat in der Sprache, in der geschrieben wird: Deutsch, Englisch oder Thai. Sie nennt Preise und freie Zeiten und übergibt Beschwerden und Sonderfälle an Sie.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Nordend', 'Bornheim', 'Westend', 'Sachsenhausen', 'Bockenheim', 'Ostend'],
        hero: {
          title: ['Yogastudios in Frankfurt,', 'gebucht zwischen zwei Besprechungen.'],
          lead: 'Morgens vor dem Büro, mittags im Westend, abends in Bornheim: Ihre Kundschaft bucht Einzelstunde, Probestunde oder Personal Training direkt bei Ihnen, auf Deutsch oder Englisch und auch über KI-Assistenten.',
        },
        local: {
          title: ['Hier entscheidet der Kalender,', 'nicht die Laune.'],
          paragraphs: [
            'Viele Ihrer Kundinnen und Kunden arbeiten in Banken, Kanzleien und Beratungen, und ihr Tag ist eng getaktet. Yoga findet dort statt, wo eine Lücke ist: um sieben am Mainufer, in der Mittagspause im Westend, nach Feierabend im Nordend. Ihre Zenno-Seite zeigt Angebote, Preise und freie Zeiten so, dass diese Lücke in einer Minute gebucht ist, direkt bei Ihnen und auch über KI-Assistenten, die für ihre Nutzer nach einem passenden Termin suchen.',
            'Ein eng getakteter Kalender heißt auch: Manchmal kommt etwas dazwischen. Wer rechtzeitig verschiebt, macht das selbst im Kundenportal. Wer kurzfristig absagt oder nicht erscheint, zahlt die Gebühr, die Sie festlegen, über die hinterlegte Karte, abgewickelt über Stripe. Und weil viele Ihrer Kundinnen aus dem Ausland kommen, gibt es Buchungsseite, Bestätigungen und Erinnerungen auf Deutsch und Englisch.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Gibt es im Westend am Freitag in der Mittagspause eine Yoga-Einzelstunde?' },
            { from: 'bot', text: 'Studio Grüneburg hat Fr. 12:15 frei, Einzelstunde mit Mara, 45 Min., 70 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, buchen' },
            { from: 'bot', text: 'Gebucht, direkt bei Studio Grüneburg. Die Bestätigung kommt per E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Studio Grüneburg · ohne Provision',
        },
        faq: [
          {
            q: 'Viele meiner Kundinnen kommen aus dem Ausland. Können sie auf Englisch buchen?',
            a: 'Ja. Ihre Buchungsseite gibt es auf Deutsch und Englisch, Bestätigungen und Erinnerungen gehen in der Sprache der Buchung raus, und die KI-Rezeption antwortet in der Sprache, in der geschrieben wird.',
          },
          {
            q: 'Was passiert, wenn jemand wegen eines Bürotermins kurzfristig absagt?',
            a: 'Das entscheiden Sie. Sie verlangen Vorkasse oder lassen die Karte hinterlegen und berechnen bei zu später Absage oder No-Show eine Gebühr. Wer rechtzeitig Bescheid gibt, verschiebt einfach im Kundenportal.',
          },
        ],
      },
      clinics: {
        districts: ['Westend', 'Sachsenhausen', 'Nordend', 'Bockenheim', 'Dornbusch', 'Innenstadt'],
        hero: {
          title: ['Praxen in Frankfurt,', 'auf Deutsch und Englisch gebucht.'],
          lead: 'Beratung im Westend, Behandlung in Sachsenhausen, Nachkontrolle vor der nächsten Geschäftsreise: Ihre Kundschaft bucht online in ihrer Sprache, und lange Behandlungen sichern Sie mit einer Anzahlung ab.',
        },
        local: {
          title: ['Viele Sprachen, wenig Zeit,', 'eine Rezeption.'],
          paragraphs: [
            'In Frankfurt kommt die Kundschaft einer Ästhetik- oder Wellnesspraxis oft aus vielen Ländern, und viele pendeln aus dem Taunus oder sind die halbe Woche beruflich unterwegs. Termine müssen um Flüge und Besprechungen herum passen. Mit Zenno buchen sie Beratung und Behandlung direkt auf Ihrer Seite, auf Deutsch oder Englisch, und bekommen Bestätigung und Erinnerung per SMS und E-Mail, egal wo sie gerade sind.',
            'Ihre Rezeption muss nicht jede Frage zu Preisen und Ablauf am Telefon klären. Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch, Englisch oder Thai, mit Ihren eigenen Angaben. Alles Medizinische und jede Beschwerde gibt sie an Sie weiter. Für längere Behandlungen wird bei der Buchung eine Anzahlung fällig, und Ihre Umsätze gehen im DATEV-Format an die Steuerberatung.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Can I get a skin consultation in Sachsenhausen on Monday at 8, before work?' },
            { from: 'bot', text: 'Praxis Lindenhain has Mon 8:00 free, skin consultation, 30 min, €60. Book it on their page?' },
            { from: 'me', text: 'Great, yes' },
            { from: 'bot', text: 'Booked directly with Praxis Lindenhain. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Praxis Lindenhain · ohne Provision',
        },
        faq: [
          {
            q: 'Viele Patientinnen schreiben auf Englisch. Beantwortet die KI-Rezeption auch medizinische Fragen?',
            a: 'Nein, in keiner Sprache. Auf Deutsch, Englisch oder Thai beantwortet sie Fragen zu Terminen, Preisen und Ablauf aus Ihren Angaben. Gesundheitsfragen und Beschwerden übergibt sie an Sie.',
          },
          {
            q: 'Zahle ich eine Provision pro Buchung?',
            a: 'Nein. Buchungen über Ihre Seite, über die KI-Rezeption oder über KI-Assistenten kosten keine Provision. Starten können Sie mit dem kostenlosen Tarif.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'Frankfurt works hard and books precisely. People working in the banking district or the Westend have time before eight, over lunch or after seven, and want the appointment sorted in two minutes. A large share of clients come from abroad and write in English. And when big events are on at the Messe, the city fills with visitors looking for an appointment at short notice.',
    industries: {
      'salons-spas': {
        districts: ['Nordend', 'Bornheim', 'Sachsenhausen', 'Westend', 'Bockenheim', 'Bahnhofsviertel'],
        hero: {
          title: ['Salons in Frankfurt,', 'booked before the first meeting.'],
          lead: 'A cut at 7:30, a blow-dry before a business dinner, a shave before a meeting at the fair: clients book straight on your page, in German or English, and through AI assistants too.',
        },
        local: {
          title: ['Early, late,', 'and the lunch break in between.'],
          paragraphs: [
            'In the Nordend and Bornheim, the edges of the day are most in demand: the 7:30 slot before the office and the 7:30 slot in the evening after it. People working in the Westend or by the Main don’t book on a whim but by their calendar, usually between two meetings. With Zenno, clients see exactly those free times, book in a minute and get the confirmation right away by SMS and email.',
            'During major trade fairs, Frankfurt fills with visitors who need a cut, a shave or styling before an evening event at short notice, and many of them ask in English. Your booking page is available in German and English, and the AI receptionist answers on WhatsApp and in your website chat. With a card on file and a no-show fee, you lose nothing when a guest forgets the appointment.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'I’m in town for the fair. Any haircut near the Messe tomorrow before 9?' },
            { from: 'bot', text: 'Salon Mainlicht in Bockenheim has tomorrow 7:45 free, haircut with Deniz, 45 min, €42. Book it on their page?' },
            { from: 'me', text: 'Perfect' },
            { from: 'bot', text: 'Booked directly with Salon Mainlicht. The confirmation is on its way by SMS.', booked: true },
          ],
          bookedLabel: "In Salon Mainlicht's calendar · no commission",
        },
        faq: [
          {
            q: 'My clients only have time before or after work. How do I fill those hours?',
            a: 'Set your working hours the way you actually work, including early mornings and late evenings. Your booking page shows exactly those free times and takes bookings around the clock. Anyone who needs to reschedule does it in the client portal.',
          },
          {
            q: 'During trade-fair weeks many visitors write in English. Who replies?',
            a: 'The AI receptionist answers on WhatsApp, by email and in your website chat in the language the client writes in: German, English or Thai. It gives prices and free times, and hands complaints and special cases to you.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Nordend', 'Bornheim', 'Westend', 'Sachsenhausen', 'Bockenheim', 'Ostend'],
        hero: {
          title: ['Yoga studios in Frankfurt,', 'booked between two meetings.'],
          lead: 'Before the office, at lunch in the Westend, in the evening in Bornheim: clients book a private session, a trial or personal training directly with you, in German or English, and through AI assistants too.',
        },
        local: {
          title: ['Here the calendar decides,', 'not the mood.'],
          paragraphs: [
            'Many of your clients work in banks, law firms and consultancies, and their days are tightly scheduled. Yoga happens wherever there is a gap: at seven by the Main, at lunch in the Westend, after work in the Nordend. Your Zenno page shows offers, prices and free times so that gap is booked in a minute, directly with you, and through AI assistants searching for a suitable slot on their users’ behalf.',
            'A tight calendar also means something sometimes comes up. Anyone who reschedules in good time does it themselves in the client portal. Anyone who cancels late or doesn’t show up pays the fee you set, charged to the card on file through Stripe. And because many of your clients come from abroad, the booking page, confirmations and reminders are available in German and English.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Is there a private yoga session near the Westend at lunchtime on Friday?' },
            { from: 'bot', text: 'Studio Grüneburg has Fri 12:15 free, private session with Mara, 45 min, €70. Book it on their page?' },
            { from: 'me', text: 'Yes, book it' },
            { from: 'bot', text: 'Booked directly with Studio Grüneburg. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Studio Grüneburg's calendar · no commission",
        },
        faq: [
          {
            q: 'Many of my clients are from abroad. Can they book in English?',
            a: 'Yes. Your booking page is available in German and English, confirmations and reminders go out in the language of the booking, and the AI receptionist replies in the language the client writes in.',
          },
          {
            q: 'What happens when someone cancels at short notice because of a work meeting?',
            a: 'That’s up to you. You ask for prepayment, or keep a card on file and charge a fee for a late cancellation or no-show. Anyone who lets you know in time simply reschedules in the client portal.',
          },
        ],
      },
      clinics: {
        districts: ['Westend', 'Sachsenhausen', 'Nordend', 'Bockenheim', 'Dornbusch', 'Innenstadt'],
        hero: {
          title: ['Clinics in Frankfurt,', 'booked in German and English.'],
          lead: 'Consultation in the Westend, treatment in Sachsenhausen, follow-up before the next business trip: clients book online in their own language, and you secure long treatments with a deposit.',
        },
        local: {
          title: ['Many languages, little time,', 'one front desk.'],
          paragraphs: [
            'In Frankfurt, an aesthetic or wellness clinic often sees clients from many countries, and many commute in from the Taunus or travel for work half the week. Appointments have to fit around flights and meetings. With Zenno they book consultations and treatments directly on your page, in German or English, and get confirmations and reminders by SMS and email wherever they happen to be.',
            'Your front desk no longer has to settle every question about prices and the process by phone. The AI receptionist answers on WhatsApp, by email and in your website chat in German, English or Thai, using your own information. Anything medical and every complaint is passed to you. For longer treatments a deposit is due at booking, and your sales go to your tax adviser in DATEV format.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Can I get a skin consultation in Sachsenhausen on Monday at 8, before work?' },
            { from: 'bot', text: 'Praxis Lindenhain has Mon 8:00 free, skin consultation, 30 min, €60. Book it on their page?' },
            { from: 'me', text: 'Great, yes' },
            { from: 'bot', text: 'Booked directly with Praxis Lindenhain. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Praxis Lindenhain's calendar · no commission",
        },
        faq: [
          {
            q: 'Many clients write in English. Does the AI receptionist answer medical questions too?',
            a: 'No, in no language. In German, English or Thai it answers questions about appointments, prices and the process from your own information. Health questions and complaints are handed to you.',
          },
          {
            q: 'Do I pay a commission per booking?',
            a: 'No. Bookings through your page, the AI receptionist or AI assistants carry no commission. You can start on the free plan.',
          },
        ],
      },
    },
  },
}
