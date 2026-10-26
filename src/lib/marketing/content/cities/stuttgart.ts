import type { CityContentSet } from './types'

/** Stuttgart: commuters and engineers with tight schedules, early and late bookings, a hilly city where clients plan the trip. */
export const STUTTGART: CityContentSet = {
  de: {
    clientele:
      'In Stuttgart ist der Tag oft durchgetaktet. Viele Kundinnen und Kunden pendeln mit der S-Bahn oder dem Auto aus der Region, arbeiten in Ingenieurbüros und bei Zulieferern und buchen deshalb früh am Morgen oder nach Feierabend. Dazu kommt die Lage im Kessel: Wer von Degerloch in den Westen will, plant die Anfahrt mit ein. Ein verbindlicher Termin mit klarer Uhrzeit zählt hier mehr als spontanes Vorbeischauen.',
    industries: {
      'salons-spas': {
        districts: ['Stuttgart-West', 'Stuttgart-Mitte', 'Stuttgart-Süd', 'Bad Cannstatt', 'Degerloch', 'Stuttgart-Ost'],
        hero: {
          title: ['Salons in Stuttgart,', 'gebucht vor der ersten S-Bahn.'],
          lead: 'Haarschnitt um 7:30, Maniküre nach Feierabend, Massage am Samstag in Bad Cannstatt: Ihre Kundschaft bucht ihre Zeit auf Ihrer eigenen Seite, auch über KI-Assistenten. SMS-Erinnerungen und Anzahlungen halten Ihren Kalender verlässlich.',
        },
        local: {
          title: ['Früh rein, spät raus.', 'Ihr Kalender kennt die Randzeiten.'],
          paragraphs: [
            'Im Stuttgarter Westen und in der Innenstadt öffnen viele Salons früh, weil die Kundschaft vor der Arbeit kommt und abends lange im Büro bleibt. Diese Randzeiten sind schnell vergeben, und genau um sie dreht sich der Anruf, den Sie während eines Schnitts nicht annehmen können. Auf Ihrer Zenno-Seite sieht die Kundschaft, ob Dienstag um 7:30 oder Donnerstag um 19:00 noch frei ist, und bucht sofort.',
            'Wer aus Degerloch, Vaihingen oder dem Remstal anreist, rechnet Parkplatzsuche und Steigungen mit ein und möchte nicht umsonst kommen. Bestätigungen und Erinnerungen per SMS und E-Mail geben beiden Seiten Sicherheit, und wer verschieben muss, erledigt das selbst im Kundenportal. Für Strähnen, Farbe oder lange Wellness-Behandlungen verlangen Sie eine Anzahlung über Stripe, damit ein leerer Stuhl kein Verlust ist.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Hat ein Friseur in Stuttgart-West morgen vor 8 Uhr noch einen Termin für einen Herrenschnitt?' },
            { from: 'bot', text: 'Salon Hasenberg hat Mi. 7:30 frei, Herrenschnitt mit Deniz, 30 Min., 34 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, passt' },
            { from: 'bot', text: 'Gebucht, direkt bei Salon Hasenberg. Die Bestätigung kommt per SMS.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Salon Hasenberg · ohne Provision',
        },
        faq: [
          {
            q: 'Meine Kundschaft möchte früh morgens buchen, wenn der Salon noch zu ist. Wie geht das?',
            a: 'Die Buchungsseite nimmt Termine rund um die Uhr an, auch für Ihre frühen und späten Zeiten. Die Bestätigung geht sofort per SMS und E-Mail raus, und Sie sehen den Termin in Ihrem Kalender, sobald Sie ihn öffnen.',
          },
          {
            q: 'Wie verhindere ich, dass Kundinnen einfach nicht kommen?',
            a: 'Erinnerungen per SMS und E-Mail helfen schon viel. Zusätzlich verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis, oder Sie lassen die Karte hinterlegen und berechnen bei No-Show eine Gebühr. Bezahlt wird über Stripe.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Stuttgart-West', 'Stuttgart-Süd', 'Stuttgart-Mitte', 'Bad Cannstatt', 'Degerloch', 'Stuttgart-Nord'],
        hero: {
          title: ['Yogastudios in Stuttgart,', 'eingeplant wie ein Meeting.'],
          lead: 'Ihre Kundschaft plant Yoga, Pilates oder Personal Training wie jeden anderen Termin: im Kalender, mit fester Uhrzeit. Mit Zenno bucht sie Probestunde und Einzelstunde direkt auf Ihrer eigenen Seite, auch über KI-Assistenten.',
        },
        local: {
          title: ['Die Woche ist verplant.', 'Die Yogastunde muss hineinpassen.'],
          paragraphs: [
            'Wer bei einem Zulieferer in Feuerbach oder in einem Ingenieurbüro in Vaihingen arbeitet, hat einen vollen Kalender und wenig Lust, für eine Probestunde zu telefonieren. Gebucht wird abends vom Sofa aus oder morgens in der S-Bahn. Ihre Zenno-Seite zeigt Angebote, Preise und freie Zeiten so, dass Menschen und KI-Assistenten sie lesen und direkt bei Ihnen buchen, ohne Umweg über ein Kontaktformular.',
            'Im Süden und Westen liegen viele Studios an steilen Straßen oder oben an den Stäffele, und mancher Weg dauert im Berufsverkehr länger als gedacht. Im Kundenportal verschiebt Ihre Kundschaft dann selbst, statt einfach wegzubleiben. Für Einzelstunden und Personal Training verlangen Sie Vorkasse oder lassen die Karte hinterlegen, und bei zu später Absage wird eine Gebühr fällig.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Is there a private yoga session in Stuttgart-Süd on Monday at 18:30?' },
            { from: 'bot', text: 'Yogaraum Stäffele has Mon 18:30 free, private session with Anja, 60 min, €70. Book it on their page?' },
            { from: 'me', text: 'Yes, book it' },
            { from: 'bot', text: 'Booked directly with Yogaraum Stäffele. The confirmation is on its way.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Yogaraum Stäffele · ohne Provision',
        },
        faq: [
          {
            q: 'Können Kundinnen ihre Termine selbst verschieben?',
            a: 'Ja. Über das Kundenportal verschieben sie ihren Termin selbst. Die Änderung steht sofort in Ihrem Kalender, und Sie müssen nichts am Telefon klären.',
          },
          {
            q: 'Kann ich Gutscheine für Einzelstunden verkaufen?',
            a: 'Ja. Gutscheine und Geschenkkarten verkaufen Sie online, bezahlt wird über Stripe. Für Ihre Stammkundschaft können Sie außerdem Treuepunkte vergeben.',
          },
        ],
      },
      clinics: {
        districts: ['Stuttgart-Mitte', 'Stuttgart-West', 'Stuttgart-Nord', 'Stuttgart-Süd', 'Degerloch', 'Bad Cannstatt'],
        hero: {
          title: ['Praxen in Stuttgart,', 'Termine mit Plan.'],
          lead: 'Ihre Kundschaft plant Beratung und Behandlung so genau wie ihren Arbeitstag. Mit Zenno bucht sie online auf Ihrer eigenen Seite, sieht Dauer und Preis vorab und erhält Bestätigung und Erinnerung per SMS und E-Mail.',
        },
        local: {
          title: ['Wer genau plant,', 'möchte genau wissen, was kommt.'],
          paragraphs: [
            'In Stuttgart fragen viele vor der Buchung präzise nach: Wie lange dauert die Behandlung, was kostet sie, wann bin ich wieder im Büro? Wer zwischen Halbhöhenlage und Innenstadt pendelt, will die Antwort schriftlich und schnell. Auf Ihrer Zenno-Seite stehen Leistungen, Dauer und Preise klar beschrieben, und die Kundschaft bucht Beratungstermine direkt in Ihren Kalender, auch früh am Morgen oder spät am Abend.',
            'Die KI-Rezeption beantwortet Fragen zu Ablauf, Dauer und Kosten aus Ihren eigenen Angaben, auf WhatsApp, per E-Mail und im Website-Chat. Gesundheitliche Fragen übergibt sie an Sie, und im Entwurfsmodus prüfen Sie jede Antwort vor dem Versand. Längere Behandlungen sichern Sie mit einer Anzahlung über Stripe ab, und die Umsatzsteuer legen Sie pro Leistung fest, passend für den DATEV-Export.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Gibt es in Stuttgart-Süd am Donnerstag nach 17 Uhr eine Erstberatung zur Laser-Haarentfernung?' },
            { from: 'bot', text: 'Praxis Bopserwald hat Do. 17:45 frei, Erstberatung, 20 Min., 40 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, gern' },
            { from: 'bot', text: 'Gebucht, direkt bei Praxis Bopserwald. Die Bestätigung kommt per SMS und E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Praxis Bopserwald · ohne Provision',
        },
        faq: [
          {
            q: 'Sagt die KI-Rezeption, ob eine Behandlung für jemanden geeignet ist?',
            a: 'Nein. Ob eine Behandlung passt, entscheiden Sie oder Ihr Team. Die KI-Rezeption beantwortet nur Fragen zu Terminen, Preisen und Ablauf aus Ihren Angaben und übergibt Gesundheitsfragen an Sie.',
          },
          {
            q: 'Was kostet der Einstieg?',
            a: 'Sie starten mit dem kostenlosen Plan. Auf Buchungen nimmt Zenno keine Provision, egal ob die Buchung über Ihre Seite, die KI-Rezeption oder einen KI-Assistenten kommt.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'In Stuttgart the day is often tightly scheduled. Many clients commute by S-Bahn or car from the surrounding region, work in engineering offices and at suppliers, and so book early in the morning or after work. Then there is the city’s basin: getting from Degerloch to Stuttgart-West means planning the trip. A firm appointment at a clear time counts for more here than dropping by on a whim.',
    industries: {
      'salons-spas': {
        districts: ['Stuttgart-West', 'Stuttgart-Mitte', 'Stuttgart-Süd', 'Bad Cannstatt', 'Degerloch', 'Stuttgart-Ost'],
        hero: {
          title: ['Salons in Stuttgart,', 'booked before the first S-Bahn.'],
          lead: 'A haircut at 7:30, a manicure after work, a massage on Saturday in Bad Cannstatt: clients book their slot on your own page, through AI assistants too. SMS reminders and deposits keep your calendar reliable.',
        },
        local: {
          title: ['In early, out late.', 'Your calendar knows the edge hours.'],
          paragraphs: [
            'In Stuttgart-West and the city centre, many salons open early because clients come before work and stay late at the office. Those early and late slots go fast, and they are exactly what the phone call you can’t take mid-cut is about. On your Zenno page clients see whether Tuesday at 7:30 or Thursday at 19:00 is still free, and book on the spot.',
            'Anyone coming in from Degerloch, Vaihingen or the Rems valley factors in parking and steep streets and doesn’t want a wasted trip. Confirmations and reminders by SMS and email give both sides certainty, and anyone who needs to reschedule does it themselves in the client portal. For highlights, colour or long wellness treatments you ask for a deposit through Stripe, so an empty chair isn’t a loss.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Does a barber or salon in Stuttgart-West have a men’s cut free tomorrow before 8?' },
            { from: 'bot', text: 'Salon Hasenberg has Wed 7:30 free, men’s cut with Deniz, 30 min, €34. Book it on their page?' },
            { from: 'me', text: 'Works for me' },
            { from: 'bot', text: 'Booked directly with Salon Hasenberg. The confirmation is on its way by SMS.', booked: true },
          ],
          bookedLabel: "In Salon Hasenberg's calendar · no commission",
        },
        faq: [
          {
            q: 'My clients want to book early in the morning, before the salon opens. How does that work?',
            a: 'The booking page takes appointments around the clock, including your early and late slots. The confirmation goes out by SMS and email straight away, and the appointment is in your calendar when you open it.',
          },
          {
            q: 'How do I stop clients from simply not showing up?',
            a: 'SMS and email reminders already help a lot. On top of that you can ask for a deposit or the full price at booking, or keep the card on file and charge a no-show fee. Payments run through Stripe.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Stuttgart-West', 'Stuttgart-Süd', 'Stuttgart-Mitte', 'Bad Cannstatt', 'Degerloch', 'Stuttgart-Nord'],
        hero: {
          title: ['Yoga studios in Stuttgart,', 'scheduled like a meeting.'],
          lead: 'Your clients plan yoga, Pilates or personal training like any other appointment: in the calendar, at a fixed time. With Zenno they book a trial or a private session directly on your own page, through AI assistants too.',
        },
        local: {
          title: ['The week is full.', 'The yoga session has to fit in.'],
          paragraphs: [
            'Someone working at a supplier in Feuerbach or an engineering office in Vaihingen has a packed calendar and little patience for phoning about a trial session. They book from the sofa in the evening or on the S-Bahn in the morning. Your Zenno page shows offers, prices and free times so that people and AI assistants can read them and book you directly, without a contact form in between.',
            'In the south and west, many studios sit on steep streets or at the top of the city’s public stairways, and some trips take longer than expected in rush hour. Clients then reschedule themselves in the client portal instead of just staying away. For private sessions and personal training you ask for prepayment or keep a card on file, and a late cancellation carries a fee.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Is there a private yoga session in Stuttgart-Süd on Monday at 18:30?' },
            { from: 'bot', text: 'Yogaraum Stäffele has Mon 18:30 free, private session with Anja, 60 min, €70. Book it on their page?' },
            { from: 'me', text: 'Yes, book it' },
            { from: 'bot', text: 'Booked directly with Yogaraum Stäffele. The confirmation is on its way.', booked: true },
          ],
          bookedLabel: "In Yogaraum Stäffele's calendar · no commission",
        },
        faq: [
          {
            q: 'Can clients reschedule their own appointments?',
            a: 'Yes. In the client portal they move their appointment themselves. The change shows up in your calendar right away, and nothing has to be sorted out by phone.',
          },
          {
            q: 'Can I sell vouchers for private sessions?',
            a: 'Yes. You sell vouchers and gift cards online, with payment via Stripe. For regulars you can also award loyalty points.',
          },
        ],
      },
      clinics: {
        districts: ['Stuttgart-Mitte', 'Stuttgart-West', 'Stuttgart-Nord', 'Stuttgart-Süd', 'Degerloch', 'Bad Cannstatt'],
        hero: {
          title: ['Clinics in Stuttgart,', 'appointments with a plan.'],
          lead: 'Your clients plan consultations and treatments as carefully as their working day. With Zenno they book online on your own page, see duration and price up front, and get confirmations and reminders by SMS and email.',
        },
        local: {
          title: ['People who plan carefully', 'want to know what to expect.'],
          paragraphs: [
            'In Stuttgart many clients ask precise questions before booking: how long does the treatment take, what does it cost, when will I be back at the office? Commuting between the hillside neighbourhoods and the centre, they want the answer in writing and quickly. On your Zenno page, services, duration and prices are clearly described, and clients book consultations straight into your calendar, early in the morning or late in the evening too.',
            'The AI receptionist answers questions about the process, duration and cost from your own information, on WhatsApp, by email and in your website chat. Health questions go to you, and in draft mode you check every reply before it is sent. Longer treatments are secured with a deposit through Stripe, and you set VAT per service, ready for the DATEV export.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Is there a first consultation for laser hair removal in Stuttgart-Süd on Thursday after 5 pm?' },
            { from: 'bot', text: 'Praxis Bopserwald has Thu 17:45 free, first consultation, 20 min, €40. Book it on their page?' },
            { from: 'me', text: 'Yes, please' },
            { from: 'bot', text: 'Booked directly with Praxis Bopserwald. The confirmation is on its way by SMS and email.', booked: true },
          ],
          bookedLabel: "In Praxis Bopserwald's calendar · no commission",
        },
        faq: [
          {
            q: 'Does the AI receptionist tell people whether a treatment suits them?',
            a: 'No. Whether a treatment is right is for you or your team to decide. The AI receptionist only answers questions about appointments, prices and the process from your information, and hands health questions to you.',
          },
          {
            q: 'What does it cost to get started?',
            a: 'You start on the free plan. Zenno takes no commission on bookings, whether they come through your page, the AI receptionist or an AI assistant.',
          },
        ],
      },
    },
  },
}
