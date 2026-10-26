import type { CityContentSet } from './types'

/** Hamburg: spread-out city, loyal regulars who expect reliability, clients from the suburbs and visitors from abroad. */
export const HAMBURG: CityContentSet = {
  de: {
    clientele:
      'Hamburg ist weitläufig. Wer in Eimsbüttel wohnt und in der HafenCity arbeitet, bucht dort, wo der Termin in den Tag passt, oft in der Mittagspause oder in der S-Bahn auf dem Heimweg. Die Kundschaft ist treu, erwartet aber Verlässlichkeit: eine klare Bestätigung, eine Erinnerung zur rechten Zeit und Preise, die vorher feststehen. Dazu kommen Gäste aus aller Welt, die über Hafen und Elbe in die Stadt kommen und auf Englisch anfragen.',
    industries: {
      'salons-spas': {
        districts: ['Eppendorf', 'Winterhude', 'Eimsbüttel', 'Ottensen', 'Sternschanze', 'St. Georg'],
        hero: {
          title: ['Salons in Hamburg,', 'verlässlich gebucht.'],
          lead: 'Von Ottensen bis Winterhude: Ihre Stammkundschaft bucht Schnitt, Farbe oder Massage direkt auf Ihrer Seite, mit Preis und Dauer auf einen Blick. Bestätigung und Erinnerung kommen per SMS und E-Mail, und Treuepunkte holen sie wieder zu Ihnen.',
        },
        local: {
          title: ['Treue Kundschaft', 'erwartet einen Termin, der steht.'],
          paragraphs: [
            'In Eppendorf und Winterhude hat fast jede Straße ihren Friseur, ihr Kosmetikstudio und ihre Nagelbar. Viele Kundinnen gehen seit Jahren zur selben Stylistin und erwarten, dass ein vereinbarter Termin genau so stattfindet. Mit Zenno buchen sie direkt auf Ihrer eigenen Seite, sehen vorher Preis und Dauer und bekommen Bestätigung und Erinnerung per SMS und E-Mail. Verschieben geht über das Kundenportal, ohne Anruf in der Mittagspause.',
            'Treue lohnt sich, wenn Sie sie sichtbar belohnen. Mit Treuepunkten danken Sie Stammkundinnen, und Gutscheine verkaufen Sie online, zum Geburtstag oder vor Weihnachten, auch an Menschen, die am anderen Ende der Stadt wohnen. In Ottensen und der Sternschanze fragen viele auf Englisch: Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch, Englisch oder Thai und gibt Beschwerden an Sie weiter.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Gibt es in Eppendorf am Donnerstag nach der Arbeit noch einen Termin für Schnitt und Föhnen?' },
            { from: 'bot', text: 'Salon Möwe hat Do. 18:30 frei, Schnitt und Föhnen mit Merle, 60 Min., 68 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, gern' },
            { from: 'bot', text: 'Gebucht, direkt bei Salon Möwe. Die Bestätigung kommt per SMS.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Salon Möwe · ohne Provision',
        },
        faq: [
          {
            q: 'Meine Stammkundinnen rufen seit Jahren an. Kommen die mit einer Buchungsseite zurecht?',
            a: 'Die Buchungsseite zeigt Leistungen, Preise und freie Zeiten übersichtlich, und Bestätigung und Erinnerung kommen per SMS und E-Mail. Wer lieber schreibt, erreicht die KI-Rezeption auf WhatsApp; sie nennt freie Zeiten und trägt den Termin in Ihren Kalender ein.',
          },
          {
            q: 'Kann ich Gutscheine online verkaufen?',
            a: 'Ja. Gutscheine verkaufen Sie direkt über Ihre Buchungsseite, eingelöst werden sie beim nächsten Termin. Zusätzlich vergeben Sie Treuepunkte an Ihre Stammkundschaft.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Ottensen', 'Eimsbüttel', 'Winterhude', 'Sternschanze', 'Eppendorf', 'HafenCity'],
        hero: {
          title: ['Yogastudios in Hamburg,', 'gebucht auf dem Heimweg.'],
          lead: 'Einzelstunde in Ottensen oder Personal Training in der HafenCity: In einer Stadt mit langen Wegen bucht Ihre Kundschaft, was in den Tag passt. Mit Zenno geht das direkt bei Ihnen, auch über KI-Assistenten.',
        },
        local: {
          title: ['Lange Wege, volle Tage.', 'Gebucht wird, was dazwischen passt.'],
          paragraphs: [
            'Hamburg ist eine Stadt der langen Wege. Wer in Eimsbüttel wohnt und in der HafenCity arbeitet, entscheidet oft erst in der S-Bahn, ob die Yogastunde morgens vor dem Büro oder abends in Ottensen stattfindet. Ihre Zenno-Seite zeigt freie Zeiten, Angebote und Preise so klar, dass diese Entscheidung in einer Minute fällt und die Buchung direkt bei Ihnen landet, auch wenn ein KI-Assistent die Suche übernimmt.',
            'Wenn der Regen quer über die Elbe zieht, bleiben manche lieber zu Hause. Damit das nicht Ihr Risiko ist, verlangen Sie für Einzelstunden und Personal Training Vorkasse oder lassen die Karte hinterlegen und berechnen bei zu später Absage eine Gebühr. Erinnerungen per SMS und E-Mail gehen rechtzeitig raus, und wer verschieben muss, erledigt das selbst im Kundenportal, statt einfach wegzubleiben.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Gibt es in Ottensen morgen früh vor der Arbeit eine Yoga-Einzelstunde?' },
            { from: 'bot', text: 'Studio Elbdeich hat morgen 7:15 frei, Einzelstunde mit Hanna, 60 Min., 75 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, bitte' },
            { from: 'bot', text: 'Gebucht, direkt bei Studio Elbdeich. Die Bestätigung kommt per SMS.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Studio Elbdeich · ohne Provision',
        },
        faq: [
          {
            q: 'Meine Kundschaft kommt aus der ganzen Stadt. Wie finden mich Menschen, die mich noch nicht kennen?',
            a: 'Ihre Buchungsseite ist so aufgebaut, dass KI-Assistenten wie ChatGPT oder Perplexity Angebote, Preise und freie Zeiten lesen können. Ihre Seite ist damit bereit, auch über KI-Assistenten gebucht zu werden, direkt bei Ihnen und ohne Provision.',
          },
          {
            q: 'Wie kommen meine Umsätze zur Steuerberatung?',
            a: 'Sie legen die Umsatzsteuer pro Leistung fest oder nutzen die Kleinunternehmerregelung. Ihre Umsätze exportieren Sie im DATEV-Format.',
          },
        ],
      },
      clinics: {
        districts: ['Eppendorf', 'Harvestehude', 'Rotherbaum', 'Winterhude', 'Blankenese', 'St. Georg'],
        hero: {
          title: ['Praxen in Hamburg,', 'mit Ruhe gebucht.'],
          lead: 'Zwischen Harvestehude und Blankenese erwartet Ihre Kundschaft Zurückhaltung und Verlässlichkeit. Mit Zenno bucht sie Beratung und Behandlung online, bekommt eine klare Bestätigung, und lange Behandlungen sichern Sie mit einer Anzahlung ab.',
        },
        local: {
          title: ['Rund um die Alster', 'zählt Verlässlichkeit.'],
          paragraphs: [
            'Ästhetik- und Wellnesspraxen in Eppendorf, Harvestehude und Rotherbaum haben Kundschaft, die nicht nur aus dem Viertel kommt, sondern aus den Elbvororten und aus dem Umland. Wer eine Stunde Anfahrt einplant, möchte sich auf den Termin verlassen können. Zenno schickt Bestätigung und Erinnerung per SMS und E-Mail, und im Kundenportal lässt sich ein Termin verschieben, ohne dass Ihre Rezeption zurückrufen muss.',
            'Viele Fragen kommen schriftlich und in Ruhe, abends per E-Mail oder WhatsApp. Die KI-Rezeption beantwortet, was in Ihren Angaben steht: Ablauf, Dauer, Preise und freie Termine. Alles, was die Gesundheit betrifft, übergibt sie an Sie. Wenn Sie anfangs jede Antwort selbst prüfen möchten, arbeitet sie im Entwurfsmodus, und Sie geben frei, was verschickt wird. Für längere Behandlungen wird bei der Buchung eine Anzahlung fällig.',
          ],
        },
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Ich komme aus Pinneberg und suche in Winterhude einen Beratungstermin für Microneedling, gern Freitagvormittag.' },
            { from: 'bot', text: 'Hautpraxis Leinpfad hat Fr. 10:30 frei, Beratung Microneedling, 30 Min., 40 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, passt' },
            { from: 'bot', text: 'Gebucht, direkt bei Hautpraxis Leinpfad. Die Bestätigung kommt per E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Hautpraxis Leinpfad · ohne Provision',
        },
        faq: [
          {
            q: 'Kann ich jede Antwort der KI-Rezeption vorher prüfen?',
            a: 'Ja. Im Entwurfsmodus schreibt sie Antwortvorschläge, und Sie entscheiden, was verschickt wird. Gesundheitsfragen und Beschwerden beantwortet sie nicht selbst, sondern übergibt sie an Sie.',
          },
          {
            q: 'Viele Kundinnen kommen von außerhalb. Wie vermeide ich vergessene Termine?',
            a: 'Bestätigung und Erinnerung gehen automatisch per SMS und E-Mail raus. Wer nicht kann, verschiebt selbst im Kundenportal. Und wer ohne Absage fehlt, zahlt über die hinterlegte Karte die Gebühr, die Sie für No-Shows festlegen.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'Hamburg is spread out. Someone who lives in Eimsbüttel and works in HafenCity books wherever the appointment fits the day, often over lunch or on the S-Bahn home. Clients are loyal, but they expect reliability: a clear confirmation, a reminder at the right time and prices fixed in advance. On top of that come visitors from all over the world, drawn by the harbour and the Elbe, who ask in English.',
    industries: {
      'salons-spas': {
        districts: ['Eppendorf', 'Winterhude', 'Eimsbüttel', 'Ottensen', 'Sternschanze', 'St. Georg'],
        hero: {
          title: ['Salons in Hamburg,', 'booked you can count on.'],
          lead: 'From Ottensen to Winterhude: your regulars book a cut, colour or massage straight on your page, with price and duration at a glance. Confirmations and reminders arrive by SMS and email, and loyalty points bring them back to you.',
        },
        local: {
          title: ['Loyal clients', 'expect the appointment to hold.'],
          paragraphs: [
            'In Eppendorf and Winterhude almost every street has its own hairdresser, beauty studio and nail bar. Many clients have seen the same stylist for years and expect a booked appointment to happen exactly as agreed. With Zenno they book on your own page, see price and duration up front, and get a confirmation and reminder by SMS and email. Rescheduling happens in the client portal, without a call during your lunch break.',
            'Loyalty pays when you reward it visibly. Loyalty points thank your regulars, and you sell vouchers online for birthdays or Christmas, even to people on the other side of the city. In Ottensen and the Sternschanze many people write in English: the AI receptionist answers on WhatsApp, by email and in your website chat in German, English or Thai, and passes complaints on to you.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Is there a slot in Eppendorf on Thursday after work for a cut and blow-dry?' },
            { from: 'bot', text: 'Salon Möwe has Thu 18:30 free, cut and blow-dry with Merle, 60 min, €68. Book it on their page?' },
            { from: 'me', text: 'Yes, please' },
            { from: 'bot', text: 'Booked directly with Salon Möwe. The confirmation is on its way by SMS.', booked: true },
          ],
          bookedLabel: "In Salon Möwe's calendar · no commission",
        },
        faq: [
          {
            q: 'My regulars have phoned me for years. Will they manage with a booking page?',
            a: 'The booking page lays out services, prices and free times clearly, and confirmations and reminders arrive by SMS and email. Anyone who prefers to write reaches the AI receptionist on WhatsApp; it suggests free times and puts the appointment in your calendar.',
          },
          {
            q: 'Can I sell vouchers online?',
            a: 'Yes. You sell vouchers straight from your booking page, and they are redeemed at the next appointment. You can also give your regulars loyalty points.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Ottensen', 'Eimsbüttel', 'Winterhude', 'Sternschanze', 'Eppendorf', 'HafenCity'],
        hero: {
          title: ['Yoga studios in Hamburg,', 'booked on the way home.'],
          lead: 'A private session in Ottensen or personal training in HafenCity: in a city of long journeys, clients book whatever fits the day. With Zenno they book you directly, through AI assistants too.',
        },
        local: {
          title: ['Long journeys, full days.', 'People book what fits in between.'],
          paragraphs: [
            'Hamburg is a city of long journeys. Someone who lives in Eimsbüttel and works in HafenCity often decides on the S-Bahn whether yoga happens before the office or in Ottensen in the evening. Your Zenno page shows free times, offers and prices so clearly that the decision takes a minute and the booking lands directly with you, even when an AI assistant does the searching.',
            'When rain blows sideways across the Elbe, some people would rather stay home. So that this isn’t your risk, you ask for prepayment for private sessions and personal training, or keep a card on file and charge a fee for late cancellations. SMS and email reminders go out in good time, and anyone who needs to reschedule does it in the client portal instead of simply not turning up.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Is there a private yoga session in Ottensen tomorrow morning before work?' },
            { from: 'bot', text: 'Studio Elbdeich has tomorrow 7:15 free, private session with Hanna, 60 min, €75. Book it on their page?' },
            { from: 'me', text: 'Yes please' },
            { from: 'bot', text: 'Booked directly with Studio Elbdeich. The confirmation is on its way by SMS.', booked: true },
          ],
          bookedLabel: "In Studio Elbdeich's calendar · no commission",
        },
        faq: [
          {
            q: 'My clients come from all over the city. How do new people find me?',
            a: 'Your booking page is built so that AI assistants such as ChatGPT or Perplexity can read your offers, prices and free times. That makes your page ready for AI assistants to book you, directly and without commission.',
          },
          {
            q: 'How do my sales figures get to my tax adviser?',
            a: 'You set VAT per service or use the Kleinunternehmer rule, and export your sales in DATEV format.',
          },
        ],
      },
      clinics: {
        districts: ['Eppendorf', 'Harvestehude', 'Rotherbaum', 'Winterhude', 'Blankenese', 'St. Georg'],
        hero: {
          title: ['Clinics in Hamburg,', 'booked with calm.'],
          lead: 'Between Harvestehude and Blankenese, clients expect discretion and reliability. With Zenno they book consultations and treatments online and get a clear confirmation, and you secure long treatments with a deposit.',
        },
        local: {
          title: ['Around the Alster,', 'reliability is what counts.'],
          paragraphs: [
            'Aesthetic and wellness clinics in Eppendorf, Harvestehude and Rotherbaum see clients not just from the neighbourhood but from the Elbe suburbs and the surrounding countryside. Someone who plans an hour’s drive wants to rely on the appointment. Zenno sends confirmations and reminders by SMS and email, and the client portal lets people reschedule without your front desk having to call back.',
            'Many questions arrive in writing and at leisure, in the evening by email or WhatsApp. The AI receptionist answers what is in your own information: process, duration, prices and free appointments. Anything to do with health is handed to you. If you want to check every reply at first, it works in draft mode and you approve what goes out. For longer treatments a deposit is due at booking.',
          ],
        },
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'I’m coming from Pinneberg and looking for a microneedling consultation in Winterhude, ideally Friday morning.' },
            { from: 'bot', text: 'Hautpraxis Leinpfad has Fri 10:30 free, microneedling consultation, 30 min, €40. Book it on their page?' },
            { from: 'me', text: 'Yes, that works' },
            { from: 'bot', text: 'Booked directly with Hautpraxis Leinpfad. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Hautpraxis Leinpfad's calendar · no commission",
        },
        faq: [
          {
            q: 'Can I check every reply from the AI receptionist first?',
            a: 'Yes. In draft mode it writes suggested replies and you decide what is sent. It never answers health questions or complaints itself; it hands them to you.',
          },
          {
            q: 'Many clients travel in from outside the city. How do I avoid forgotten appointments?',
            a: 'Confirmations and reminders go out automatically by SMS and email. Anyone who can’t make it reschedules in the client portal. And anyone who misses the appointment without cancelling pays the no-show fee you set, charged to the card on file.',
          },
        ],
      },
    },
  },
}
