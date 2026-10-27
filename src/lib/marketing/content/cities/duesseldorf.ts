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
        neighbourhoods: [
          {
            name: 'Königsallee',
            body: 'An der Kö bucht, wer den Friseurtermin in einen Einkaufstag einbaut oder abends eine Einladung hat. Dazu kommen Beschäftigte aus den Boutiquen und Privatbanken, die vor Ladenöffnung um neun oder nach Feierabend kommen, und internationale Gäste, die aus dem Hotel auf Englisch schreiben. Gefragt sind Föhnfrisuren, Hochsteckfrisuren und Farbauffrischungen, oft mit einer festen Stylistin. Legen Sie die Föhnfrisur als kurze Leistung an, die man noch am selben Nachmittag buchen kann, und verlangen Sie für Hochsteckfrisuren vor einem Abendtermin eine Anzahlung.',
          },
          {
            name: 'Oberkassel',
            body: 'Auf der linken Rheinseite, rund um die Luegallee und den Barbarossaplatz, wohnen Familien in großen Altbauwohnungen, darunter viele japanische Familien. Die Kundschaft ist treu und kommt im festen Rhythmus, die Mutter alle sechs Wochen zur Farbe, die Kinder in den Ferien zum Schnitt. Gebucht wird oft am Wochenende für die kommende Woche. Viele Gäste aus der japanischen Community schreiben auf Englisch, und mit einer englischen Buchungsseite sparen Sie sich manche Rückfrage. Eine Erinnerung per SMS am Vortag hilft, wenn zwischen Schule und Sportverein ein Termin untergeht.',
          },
          {
            name: 'Flingern',
            body: 'Rund um die Ackerstraße in Flingern haben sich Cafés, kleine Läden und Ateliers angesiedelt, und die Kundschaft ist jung und arbeitet oft in der Kreativbranche. Sie bucht abends vom Sofa aus, gern nach 18 Uhr und am Samstag. Gefragt sind Barbershop-Schnitte, Nageldesign und auffällige Farben, die drei Stunden dauern. Wer hier allein oder zu zweit arbeitet, kann während der Behandlung keine Nachrichten beantworten. Lassen Sie die KI-Rezeption auf WhatsApp antworten, und sichern Sie lange Farbtermine mit hinterlegter Karte ab.',
          },
          {
            name: 'Unterbilk',
            body: 'Unterbilk grenzt an den Medienhafen, wo Agenturen, Beratungen und Medienfirmen ihre Büros haben. Auf der Lorettostraße liegen kleine Salons zwischen Cafés und Läden, die von Menschen leben, die in der Mittagspause oder direkt nach der Arbeit vorbeikommen. Gefragt ist alles, was in 30 Minuten erledigt ist, vom nachgeschnittenen Pony bis zum schnellen Herrenschnitt. Machen Sie diese kurzen Leistungen zwischen zwölf und zwei Uhr online buchbar, auch noch am selben Vormittag, und schicken Sie die Bestätigung per SMS, die liest man zwischen zwei Besprechungen.',
          },
        ],
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
          {
            q: 'Samstags arbeiten in meinem Salon an der Kö vier Leute gleichzeitig. Behalte ich da den Überblick?',
            a: 'Ja. Im Kalender hat jede Person ihre eigene Spalte, und jede Leistung ist mit Dauer, Preis und der zuständigen Person angelegt. Auf der Buchungsseite wählt die Kundin ihre Stylistin direkt aus und sieht nur deren freie Zeiten.',
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
        neighbourhoods: [
          {
            name: 'Derendorf',
            body: 'Auf dem ehemaligen Güterbahnhof in Derendorf sind neue Wohnviertel und Bürohäuser entstanden, und viele, die hier wohnen, sind erst vor ein paar Jahren nach Düsseldorf gezogen. Sie kennen noch kein Studio aus der Nachbarschaft und suchen auf dem Handy oder fragen einen KI-Assistenten nach Yoga in der Nähe. Gebucht wird vor der Arbeit um sieben oder am Sonntagvormittag. Gefragt sind Personal Training und Pilates-Einzelstunden. Schreiben Sie Adresse, Angebote und Preise vollständig auf Ihre Seite, damit Menschen und KI-Assistenten Sie finden und direkt buchen können.',
          },
          {
            name: 'Bilk',
            body: 'In Bilk prägen die Universität und das große Klinikgelände den Alltag. Studierende haben wenig Geld und viel Zeit am Nachmittag, Pflegekräfte und Ärztinnen arbeiten im Schichtdienst und buchen zu Zeiten, an die andere nicht denken, etwa dienstags um 14 Uhr oder am Mittwochvormittag. Gefragt sind Yoga für den Rücken, Entspannung nach dem Nachtdienst und günstige Probestunden. Öffnen Sie auch die ruhigen Stunden am frühen Nachmittag für Buchungen, und weisen Sie auf das Kundenportal hin, denn ein Dienstplan ändert sich oft kurzfristig.',
          },
          {
            name: 'Oberkassel',
            body: 'In Oberkassel liegt die Yogamatte nicht weit von den Rheinwiesen, und viele Kundinnen sind Eltern, die vormittags Zeit haben, wenn die Kinder in der Schule sind. Die Einzelstunde um neun direkt nach dem Schulweg ist beliebt, ebenso Pilates am Sonntagmorgen, bevor die Familie wach ist. Gebucht wird oft am Vorabend, wenn die Woche geplant wird. Wer die Kinder noch zur Schule bringt, kommt selten auf die Minute. Planen Sie deshalb zwischen zwei Einzelstunden 15 Minuten Puffer ein, dann gerät der Vormittag nicht ins Rutschen.',
          },
          {
            name: 'Flingern',
            body: 'Viele Studios in Flingern sind klein, liegen in einem Ladenlokal an der Ackerstraße oder in einem Hinterhof und werden von einer einzigen Lehrerin geführt. Die Kundschaft arbeitet oft frei oder in Agenturen und schreibt lieber auf WhatsApp, als anzurufen. Während Sie unterrichten, bleiben Nachrichten liegen, und wer zwei Stunden auf eine Antwort wartet, bucht woanders. Die KI-Rezeption beantwortet Fragen zu Preisen und freien Zeiten und bucht direkt. Starten Sie im Entwurfsmodus, dann geben Sie jede Antwort frei, bis Sie dem Ton vertrauen.',
          },
        ],
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
          {
            q: 'Viele Zugezogene in Derendorf fragen ChatGPT nach einem Yogastudio in der Nähe. Komme ich da vor?',
            a: 'Ihre Zenno-Seite ist bereit dafür, dass KI-Assistenten wie ChatGPT oder Perplexity Ihre Angebote, Preise und freien Zeiten lesen und direkt bei Ihnen buchen. Welche Studios ein Assistent vorschlägt, entscheidet der Assistent selbst. Vollständige Angaben zu Adresse und Leistungen machen es ihm leichter.',
          },
        ],
      },
      clinics: {
        districts: ['Königsallee', 'Carlstadt', 'Oberkassel', 'Pempelfort', 'Stadtmitte', 'Golzheim'],
        hero: {
          title: ['Ästhetikpraxen in Düsseldorf,', 'diskret gebucht.'],
          lead: 'Rund um die Kö und in Oberkassel fragt man eine Behandlung lieber schriftlich an als am Telefon. Mit Zenno bucht Ihre Kundschaft Beratung und Behandlung online auf Ihrer eigenen Seite, auf Deutsch oder Englisch, mit Anzahlung für lange Termine.',
        },
        local: {
          title: ['Beratung anfragen,', 'ohne dass im Büro jemand mithört.'],
          paragraphs: [
            'Wer eine ästhetische Behandlung plant, möchte das selten am Telefon besprechen, während im Büro jemand mithört. In Düsseldorf kommt eine internationale Kundschaft dazu, etwa aus der japanischen Community rund um die Immermannstraße, die schriftlich und oft auf Englisch anfragt. Mit Zenno buchen sie Beratungstermine auf Ihrer Seite, in Ruhe und zu jeder Uhrzeit, und erhalten die Bestätigung per E-Mail oder SMS.',
            'Die KI-Rezeption beantwortet Fragen zu Ablauf, Dauer und Preisen aus Ihren eigenen Angaben. Alles, was die Gesundheit betrifft, übergibt sie an Sie oder Ihr Team, und im Entwurfsmodus geben Sie jede Antwort vor dem Versand frei. Für längere Behandlungen verlangen Sie bei der Buchung eine Anzahlung über Stripe, damit ein abgesagter Termin am Freitagnachmittag nicht unbezahlt bleibt.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Königsallee',
            body: 'In den oberen Etagen der Geschäftshäuser an der Kö sitzen Praxen, deren Kundschaft teils von weit her anreist, aus dem Umland oder über die Grenze aus den Niederlanden. Wer für eine Behandlung extra nach Düsseldorf kommt, bucht Wochen vorher, oft auf Englisch, und verbindet den Termin mit einer Übernachtung oder einem Einkauf. Gefragt sind längere Behandlungen und Erstberatungen mit festem Nachtermin. Verlangen Sie bei der Buchung eine Anzahlung und schicken Sie die Erinnerung per E-Mail eine Woche vorher, damit die Anreise noch umgeplant werden kann.',
          },
          {
            name: 'Stadtmitte',
            body: 'Zwischen Hauptbahnhof, Immermannstraße und Schadowstraße arbeiten viele in Büros, und ein Teil der Kundschaft pendelt mit dem Zug aus Duisburg, Essen oder Wuppertal. Der Termin wird um den Fahrplan gelegt, also um 7:30 vor dem Büro oder um 17:45 vor dem Zug nach Hause. Gefragt sind kurze Beratungen, Nachkontrollen und Hautbehandlungen unter einer Stunde. Geben Sie in der Beschreibung an, wie lange der Fußweg vom Bahnhof dauert, und halten Sie die Randzeiten online frei, statt sie für Anrufe aufzuheben.',
          },
          {
            name: 'Golzheim',
            body: 'Golzheim liegt am Rhein zwischen Nordpark und den Bürotürmen am Kennedydamm, wo Versicherungen und Beratungen ihre Büros haben. Zu den Anwohnern gehören viele, die in ruhigen Straßen mit Blick aufs Wasser wohnen und Wert auf eine persönliche Betreuung legen. Gebucht wird gern am frühen Morgen vor dem ersten Meeting oder am Freitagnachmittag. Gefragt sind Gesichtsbehandlungen und längere Wellnessanwendungen. Wer im Büroturm sitzt, verschiebt eher, als abzusagen. Machen Sie das Kundenportal in der Bestätigung sichtbar, damit der Termin bei Ihnen bleibt.',
          },
          {
            name: 'Pempelfort',
            body: 'Pempelfort rund um die Nordstraße ist ein Einkaufsviertel mit Wohnhäusern darüber, und die Kundschaft einer Praxis hier ist gemischt, von jungen Angestellten bis zu älteren Damen, die seit Jahrzehnten im selben Haus wohnen. Viele kommen regelmäßig, etwa einmal im Monat zur Gesichtsbehandlung, und verbinden den Termin am Samstag mit dem Einkauf. Für diese Stammkundschaft lohnen sich Treuepunkte, die sie bei jedem Besuch sammeln. Verkaufen Sie außerdem Gutscheine an der Kasse, denn wer zufrieden ist, verschenkt die Behandlung gern weiter.',
          },
        ],
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
          {
            q: 'Viele Kundinnen kommen mit dem Zug aus dem Ruhrgebiet. Was, wenn der Zug ausfällt?',
            a: 'Dann verschiebt die Kundin den Termin selbst im Kundenportal, auch vom Bahnsteig aus. Die Änderung steht sofort in Ihrem Kalender. Ob Sie bei sehr kurzfristigen Absagen eine Gebühr berechnen, legen Sie selbst fest.',
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
        neighbourhoods: [
          {
            name: 'Königsallee',
            body: 'On the Kö, people book a salon appointment as part of a shopping day or because they have an invitation that evening. Staff from the boutiques and private banks come before the shops open at nine or after work, and international guests write in English from their hotel. Blow-dries, updos and colour refreshes are in demand, often with a regular stylist. Set up the blow-dry as a short service that can still be booked the same afternoon, and ask for a deposit on updos before an evening event.',
          },
          {
            name: 'Oberkassel',
            body: 'On the left bank of the Rhine, around Luegallee and Barbarossaplatz, families live in large old apartments, among them many Japanese families. Clients are loyal and come on a fixed rhythm: colour every six weeks for the parents, a cut for the kids in the school holidays. They often book at the weekend for the week ahead. Many guests from the Japanese community write in English, and an English booking page saves you a lot of back-and-forth. An SMS reminder the day before helps when an appointment gets lost between school and sports club.',
          },
          {
            name: 'Flingern',
            body: 'Around Ackerstraße in Flingern, cafés, small shops and studios have moved in, and clients are young and often work in the creative industries. They book from the sofa in the evening, usually after 6 pm or for Saturday. Barbershop cuts, nail art and bold colours that take three hours are in demand. If you work alone or as a pair, you can’t answer messages during a treatment. Let the AI receptionist reply on WhatsApp, and secure long colour appointments with a card on file.',
          },
          {
            name: 'Unterbilk',
            body: 'Unterbilk borders the Medienhafen, where agencies, consultancies and media companies have their offices. Small salons on Lorettostraße sit between cafés and shops, and they live off people who drop by at lunch or straight after work. Anything that takes 30 minutes is in demand, from a fringe trim to a quick men’s cut. Make those short services bookable online between noon and two, right up to the same morning, and send the confirmation by SMS, which people read between two meetings.',
          },
        ],
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
          {
            q: 'On Saturdays four people work in my salon on the Kö at the same time. Can I keep track?',
            a: 'Yes. In the calendar each person has their own column, and every service is set up with duration, price and the person who does it. On the booking page the client picks her stylist directly and only sees that person’s free times.',
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
        neighbourhoods: [
          {
            name: 'Derendorf',
            body: 'New residential streets and office blocks have gone up on the old freight yard in Derendorf, and many people living there moved to Düsseldorf only a few years ago. They don’t know a studio in the neighbourhood yet, so they search on their phone or ask an AI assistant for yoga nearby. They book for seven before work or for Sunday morning, and personal training and private Pilates are in demand. Put your full address, offers and prices on your page, so people and AI assistants can find you and book directly.',
          },
          {
            name: 'Bilk',
            body: 'In Bilk, the university and the large hospital campus shape daily life. Students have little money and plenty of free afternoons, while nurses and doctors work shifts and book at times nobody else thinks of, like Tuesday at 2 pm or Wednesday morning. Yoga for the back, relaxation after a night shift and low-priced trials are what they ask for. Open up the quiet early-afternoon hours for bookings, and point people to the client portal, because a shift rota often changes at short notice.',
          },
          {
            name: 'Oberkassel',
            body: 'In Oberkassel the yoga mat is never far from the Rhine meadows, and many clients are parents who have time in the morning while the kids are at school. The private session at nine, straight after the school run, is popular, and so is Pilates early on Sunday before the family is up. People often book the evening before, when the week gets planned. Parents coming from the school gate rarely arrive on the dot, so leave a 15-minute buffer between two private sessions and the morning won’t slide.',
          },
          {
            name: 'Flingern',
            body: 'Many studios in Flingern are small, in a shopfront on Ackerstraße or a back courtyard, and run by a single teacher. Clients often freelance or work at agencies and would rather send a WhatsApp than call. While you teach, messages pile up, and someone waiting two hours for an answer may book elsewhere. The AI receptionist answers questions about prices and free times and books directly. Start in draft mode, so you approve each reply until you trust the tone.',
          },
        ],
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
          {
            q: 'Lots of newcomers in Derendorf ask ChatGPT for a yoga studio nearby. Will I show up?',
            a: 'Your Zenno page is ready for AI assistants such as ChatGPT or Perplexity to read your offers, prices and free times and book you directly. Which studios an assistant suggests is up to the assistant. Complete details on your address and services make its job easier.',
          },
        ],
      },
      clinics: {
        districts: ['Königsallee', 'Carlstadt', 'Oberkassel', 'Pempelfort', 'Stadtmitte', 'Golzheim'],
        hero: {
          title: ['Aesthetic clinics in Düsseldorf,', 'booked discreetly.'],
          lead: 'Around the Kö and in Oberkassel, people would rather ask about a treatment in writing than on the phone. With Zenno they book consultations and treatments online on your own page, in German or English, with a deposit for long appointments.',
        },
        local: {
          title: ['Booking a consultation', 'without colleagues listening in.'],
          paragraphs: [
            'Someone planning an aesthetic treatment rarely wants to discuss it on the phone while colleagues are listening. Düsseldorf also has an international clientele, for example from the Japanese community around Immermannstraße, who ask in writing and often in English. With Zenno they book consultations on your page, calmly and at any hour, and receive the confirmation by email or SMS.',
            'The AI receptionist answers questions about the process, duration and prices from your own information. Anything health-related goes to you or your team, and in draft mode you approve every reply before it is sent. For longer treatments you ask for a deposit through Stripe at booking, so a cancelled Friday-afternoon appointment doesn’t go unpaid.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Königsallee',
            body: 'On the upper floors of the commercial buildings along the Kö are clinics whose clients sometimes travel a long way, from the surrounding region or across the border from the Netherlands. Someone coming to Düsseldorf specially for a treatment books weeks ahead, often in English, and combines it with an overnight stay or some shopping. Longer treatments and first consultations with a fixed follow-up are in demand. Ask for a deposit at booking and send the email reminder a week ahead, so the trip can still be rearranged if needed.',
          },
          {
            name: 'Stadtmitte',
            body: 'Between the main station, Immermannstraße and Schadowstraße, many people work in offices, and some clients commute by train from Duisburg, Essen or Wuppertal. The appointment is planned around the timetable: 7:30 before the office, or 17:45 before the train home. Short consultations, follow-ups and skin treatments under an hour are in demand. State in the description how long the walk from the station takes, and keep the early and late slots open online instead of holding them back for phone calls.',
          },
          {
            name: 'Golzheim',
            body: 'Golzheim lies on the Rhine between the Nordpark and the office towers on Kennedydamm, where insurers and consultancies have their offices. Many residents live on quiet streets near the water and value personal attention. They like to book early in the morning before the first meeting or on Friday afternoon, and facials and longer wellness treatments are in demand. Someone working in an office tower is more likely to reschedule than cancel. Make the client portal link easy to find in the confirmation, so the appointment stays with you.',
          },
          {
            name: 'Pempelfort',
            body: 'Pempelfort around Nordstraße is a shopping street with flats above the shops, and a clinic here sees a mixed crowd, from young office workers to older ladies who have lived in the same building for decades. Many come regularly, say once a month for a facial, and combine a Saturday appointment with their shopping. Loyalty points that build up with every visit suit these regulars well. Sell vouchers at the counter too, since satisfied clients like to pass a treatment on as a gift.',
          },
        ],
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
          {
            q: 'Many clients come by train from the Ruhr area. What if the train is cancelled?',
            a: 'Then the client moves the appointment herself in the client portal, even from the platform. The change shows up in your calendar right away. Whether you charge a fee for very late cancellations is up to you.',
          },
        ],
      },
    },
  },
}
