import type { CityContentSet } from './types'

/** Leipzig: young, growing city, students and a creative scene, price-conscious clients, many small owner-run studios. */
export const LEIPZIG: CityContentSet = {
  de: {
    clientele:
      'Leipzig ist jung und wächst. Studierende, Kreative und junge Familien prägen Viertel wie Plagwitz, Connewitz und die Südvorstadt, und in so manchem kleinen Studio macht eine einzige Person Empfang, Behandlung und Buchhaltung. Die Kundschaft vergleicht Preise genau, bucht über das Handy und schreibt lieber eine Nachricht, als anzurufen.',
    industries: {
      'salons-spas': {
        districts: ['Südvorstadt', 'Connewitz', 'Plagwitz', 'Lindenau', 'Gohlis', 'Zentrum'],
        hero: {
          title: ['Salons in Leipzig,', 'gebucht in der Straßenbahn.'],
          lead: 'Ihre Kundschaft schreibt lieber, als anzurufen, und bucht auf Ihrer eigenen Seite, sieht Preise vorab und erhält die Bestätigung per SMS. Sie starten mit dem kostenlosen Plan und zahlen keine Provision pro Buchung.',
        },
        local: {
          title: ['Auf der Karli zählt der Preis.', 'Und eine schnelle Antwort.'],
          paragraphs: [
            'Entlang der Karl-Liebknecht-Straße und in Connewitz liegen Friseure, Barbershops und Nagelstudios dicht beieinander, und die Kundschaft weiß genau, was ein Schnitt zwei Häuser weiter kostet. Wer bucht, möchte den Preis sehen, bevor er schreibt. Auf Ihrer Zenno-Seite stehen Leistungen, Preise und freie Zeiten offen, und gebucht wird ohne Rückfrage. Für Studierende, die ungern telefonieren, ist das der naheliegende Weg.',
            'Viele Salons in Plagwitz und Lindenau sind klein und haben keine eigene Rezeption. Die KI-Rezeption beantwortet Nachrichten auf WhatsApp, per E-Mail und im Website-Chat, nennt Preise und freie Zeiten und bucht direkt ein. Weil keine Provision anfällt, bleibt auch bei einem Schnitt für 35 € der volle Betrag bei Ihnen. Für längere Farbtermine genügt eine kleine Anzahlung über Stripe, damit niemand einfach wegbleibt.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Südvorstadt',
            body: 'Auf der Karli beginnt der Abend in den Bars, und wer am Freitag oder Samstag ausgeht, will vorher noch zum Friseur oder zur Maniküre. Viele Kundinnen studieren, wohnen in WGs in den Seitenstraßen und planen ihre Woche am Sonntagabend auf dem Handy. Gefragt sind Schnitte, Pony nachschneiden und Styling am späten Freitagnachmittag. Legen Sie einen Studierendenpreis als eigene Leistung an und schreiben Sie dazu, dass der Ausweis im Salon gezeigt wird. Dann sieht jede vorab, was sie zahlt, und an der Kasse gibt es keine Diskussion.',
          },
          {
            name: 'Lindenau',
            body: 'Rund um die Georg-Schwarz-Straße und die Spinnerei wohnen Künstlerinnen, Handwerker und junge Familien, und viele Salons hier sind Ein-Personen-Betriebe in einem Ladenlokal mit großer Scheibe. Wer allein schneidet und färbt, hat keine Hand frei für das Telefon. Die Kundschaft bucht deshalb gern per Nachricht, auch spät abends, und fragt nach Farbe, Undercut oder Nägeln. Lassen Sie die KI-Rezeption auf WhatsApp antworten und Termine direkt eintragen. Für Färbungen ab zwei Stunden lohnt sich eine hinterlegte Karte.',
          },
          {
            name: 'Gohlis',
            body: 'In Gohlis stehen Gründerzeitvillen neben sanierten Mehrfamilienhäusern, und die Kundschaft reicht von Familien bis zu Leuten, die seit Jahrzehnten im Viertel wohnen. Sie hat ihre feste Friseurin und bucht den Samstagvormittag, am liebsten gleich um acht, damit der Rest des Tages frei bleibt. Farbe, Strähnen und klassische Schnitte stehen vorn. Öffnen Sie den ersten Samstagstermin schon um acht, schicken Sie am Freitag eine Erinnerung per SMS und verlangen Sie für lange Farbtermine am Samstag eine kleine Anzahlung, weil diese Zeiten schnell weg sind.',
          },
          {
            name: 'Zentrum',
            body: 'In der Innenstadt, zwischen den Passagen und dem Markt, arbeiten viele in Büros und Läden, und zur Buchmesse im März oder zum Weihnachtsmarkt im Dezember kommen Gäste aus dem ganzen Land und aus dem Ausland. Sie suchen kurzfristig einen Schnitt oder eine Föhnfrisur vor dem Abend, oft auf Englisch. Unter der Woche ist die Mittagspause gefragt. Stellen Sie Ihre Buchungsseite auf Englisch bereit, öffnen Sie in Messewochen zusätzliche Abendtermine und schreiben Sie dazu, dass niemand ein Kundenkonto braucht. Wer nur drei Tage in der Stadt ist, legt ungern eins an.',
          },
        ],
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
          {
            q: 'Viele meiner Kundinnen studieren an der Uni Leipzig. Kann ich einen Studierendenpreis anbieten?',
            a: 'Ja. Sie legen den Schnitt für Studierende als eigene Leistung mit eigenem Preis an und schreiben in die Beschreibung, dass der Ausweis im Salon gezeigt wird. Die Kundin sieht beide Preise auf Ihrer Buchungsseite und wählt selbst.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Plagwitz', 'Lindenau', 'Connewitz', 'Südvorstadt', 'Schleußig', 'Gohlis'],
        hero: {
          title: ['Yogastudios in Leipzig,', 'klein angefangen, gut gebucht.'],
          lead: 'Ein kleines Studio in Plagwitz oder Lindenau kann mit dem kostenlosen Tarif starten. Mit Zenno buchen Ihre Kundinnen Probestunde, Einzelstunde oder Yogatherapie direkt auf Ihrer Seite, auch über KI-Assistenten.',
        },
        local: {
          title: ['Yoga in der Fabriketage,', 'gebucht auf dem Handy.'],
          paragraphs: [
            'Am Karl-Heine-Kanal unterrichten manche Yoga- und Pilatesstudios in alten Fabriketagen, in Lindenau in früheren Ladenlokalen, und oft steht eine einzelne Lehrerin dahinter. Neue Kundschaft kommt über Empfehlungen und das Handy. Ihre Zenno-Seite läuft unter Ihrem eigenen Namen, zeigt Angebote, Preise und freie Zeiten und ist so aufgebaut, dass auch KI-Assistenten sie lesen und direkt bei Ihnen buchen können.',
            'Studierende und Kreative haben flexible Tage, aber volle Wochen, und eine Probestunde ist schnell vergessen. Erinnerungen per SMS und E-Mail helfen dagegen, und mit hinterlegter Karte berechnen Sie bei No-Show eine Gebühr. Gutscheine verkaufen Sie online, etwa als Geschenk zum Semesterende, und treue Kundschaft sammelt Punkte. Die Abrechnung bleibt übersichtlich, auch mit Kleinunternehmerregelung.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Plagwitz',
            body: 'In Plagwitz arbeiten viele frei, in Coworking-Räumen am Kanal oder im eigenen Atelier, und ihr Tag folgt keinem Bürorhythmus. Eine Einzelstunde um 13 Uhr, wenn der Kopf nach dem Vormittag voll ist, passt hier besser als um 18 Uhr. Gebucht wird spontan am selben Morgen. Gefragt sind Vinyasa, Pilates und Mobility für Leute, die den ganzen Tag am Laptop sitzen. Öffnen Sie die Mittagsstunden für Buchungen am selben Tag und bieten Sie eine günstige Probestunde mit Vorkasse an, damit aus der spontanen Idee auch ein Besuch wird.',
          },
          {
            name: 'Connewitz',
            body: 'Connewitz hat eine lebendige alternative Szene, und viele hier achten darauf, wo ihr Geld hinfließt. Eine Buchungsseite unter dem Namen Ihres Studios, ohne Provision für einen Vermittler, kommt in diesem Viertel gut an. Die Kundschaft ist preisbewusst und bucht gern abends gegen 19 Uhr oder am Sonntag, bevor es in den Auwald geht. Gefragt sind Hatha, Yin und Einzelstunden zum Einstieg. Bieten Sie einen ermäßigten Preis als eigene Leistung an und erklären Sie in der Beschreibung, für wen er gedacht ist.',
          },
          {
            name: 'Schleußig',
            body: 'Schleußig liegt zwischen Clara-Zetkin-Park und Auwald, und morgens und abends sind auf den Wegen am Wasser viele Läuferinnen und Radfahrer unterwegs. Diese Kundschaft kommt mit Knie, Hüfte oder Rücken, die nach dem Training zwicken, und bucht Einzelstunden für Mobilität und Dehnung, gern am Sonntag nach dem langen Lauf. Medizinische Fragen klären die Kundinnen mit ihrer Ärztin, Sie liefern die Bewegung. Legen Sie eine Einzelstunde für Läufer mit 60 Minuten an und öffnen Sie den Sonntagvormittag, denn dann haben Läufer nach dem Training Zeit.',
          },
          {
            name: 'Gohlis',
            body: 'Rund um das Rosental und die ruhigen Straßen von Gohlis wohnen viele ältere Menschen, die sich bewegen möchten, ohne in ein lautes Fitnessstudio zu gehen. Sie buchen am liebsten vormittags um zehn, lesen Erinnerungen per E-Mail und kommen gern jede Woche zur selben Zeit. Gefragt sind sanftes Yoga, Stuhlyoga und Einzelstunden für Gleichgewicht und Rücken. Oft schenken erwachsene Kinder den Eltern die ersten Stunden. Verkaufen Sie dafür Gutscheine online, die die Beschenkten dann per QR-Code bei Ihnen einlösen.',
          },
        ],
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
          {
            q: 'An der Uni Leipzig gibt es viele internationale Studierende, die auf Englisch schreiben. Wer antwortet, während ich unterrichte?',
            a: 'Die KI-Rezeption. Sie antwortet auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch, Englisch oder Thai, nennt Preise und freie Zeiten und bucht nur Zeiten, die wirklich frei sind. Ihre Buchungsseite gibt es ebenfalls auf Englisch.',
          },
        ],
      },
      clinics: {
        districts: ['Zentrum', 'Gohlis', 'Waldstraßenviertel', 'Südvorstadt', 'Schleußig', 'Plagwitz'],
        hero: {
          title: ['Praxen in Leipzig,', 'offen für neue Kundschaft.'],
          lead: 'In Leipzig buchen Ihre Kundinnen Beratung und Nachtermin online auf Ihrer eigenen Seite, mit klaren Preisen und echten freien Zeiten. Längere Behandlungen sichern Sie mit einer Anzahlung ab.',
        },
        local: {
          title: ['Die Stadt wächst.', 'Ihr Kalender soll mitwachsen.'],
          paragraphs: [
            'Nach Leipzig ziehen viele Menschen neu, und wer neu ist, kennt Ihre Praxis noch nicht aus dem Viertel. Gesucht wird abends auf dem Handy, nach einer Hautberatung im Zentrum oder einer Gesichtsbehandlung in Gohlis, und dabei werden Preise verglichen. Wer erst am nächsten Morgen zurückruft, ist dann oft zu spät. Mit Zenno bucht die Kundschaft Beratungstermine direkt auf Ihrer Seite, und die Bestätigung kommt sofort per SMS und E-Mail.',
            'Gerade kleinere Praxen in Gohlis oder Schleußig haben keine Rezeption, die den ganzen Tag besetzt ist. Die KI-Rezeption beantwortet Fragen zu Ablauf, Dauer und Preisen aus Ihren Angaben, und alles, was die Gesundheit betrifft, landet bei Ihnen. Im Entwurfsmodus geben Sie jede Antwort selbst frei. Für längere Behandlungen verlangen Sie eine Anzahlung, und im Kundenportal verschiebt Ihre Kundschaft selbst, statt abzusagen.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Zentrum',
            body: 'Seit es den City-Tunnel gibt, ist die Innenstadt mit der S-Bahn aus Halle, Markkleeberg oder Delitzsch schnell erreichbar, und viele Kundinnen einer Praxis im Zentrum pendeln so zur Arbeit. Den Termin legen sie vor oder nach den Bürostunden, um 7:30 oder um 17:30, und die Haltestelle Markt ist das Ziel. Gefragt sind kurze Beratungen und Nachtermine. Öffnen Sie die frühen und späten Zeiten online und schicken Sie die Erinnerung per SMS am Vorabend, damit die Kundin ihre Verbindung noch planen kann.',
          },
          {
            name: 'Waldstraßenviertel',
            body: 'Das Waldstraßenviertel ist ein großes, gut erhaltenes Gründerzeitviertel zwischen Rosental und Innenstadt. Hier wohnen viele Akademikerfamilien und ältere Paare, die ihre Behandlungen sorgfältig planen und gern zu einer festen Ansprechpartnerin gehen. Gleich nebenan liegt das Stadion, und an Heimspieltagen sind Straßen und Parkplätze voll. Schauen Sie vor der Saison in den Spielplan und schreiben Sie an diesen Tagen in die Erinnerung, dass die Anreise länger dauert, oder legen Sie lange Behandlungen auf den Vormittag.',
          },
          {
            name: 'Südvorstadt',
            body: 'In der Südvorstadt sind die Kundinnen einer Praxis oft jünger als anderswo, arbeiten seit ein paar Jahren und vergleichen Preise genau, bevor sie eine Hautbehandlung buchen. Sie lesen die Leistungsbeschreibung am Abend auf dem Handy und wollen wissen, was am Ende auf der Rechnung steht. Gefragt sind Erstberatungen um 18 oder 19 Uhr nach der Arbeit. Schreiben Sie Preis, Dauer und die Höhe der Anzahlung offen in jede Leistung. Wer das vorher sieht, bucht eher, als eine Nachricht zu schreiben und auf Antwort zu warten.',
          },
          {
            name: 'Schleußig',
            body: 'In Schleußig wohnen viele junge Familien, und Eltern kleiner Kinder haben ein Problem mit Terminen: Fieber am Morgen, und der Plan ist hinfällig. Gebucht wird deshalb dann, wenn der Partner zu Hause ist, am Samstagvormittag oder abends ab 19 Uhr, gern eine Gesichtsbehandlung oder eine Massage als Pause vom Alltag. Machen Sie in der Bestätigung klar, bis wann ein Verschieben im Kundenportal kostenlos ist. Wer rechtzeitig verschiebt, kommt ein paar Tage später, und der frei gewordene Platz lässt sich noch vergeben.',
          },
        ],
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
          {
            q: 'Ich habe meine Praxis in Leipzig gerade erst eröffnet und noch keine Steuerberatung. Hilft Zenno bei der Buchhaltung?',
            a: 'Zenno sammelt, was Ihre Steuerberatung braucht: Umsatzsteuer pro Leistung, Kassenbuch für Barzahlungen, eine Übersicht pro Monat oder Quartal und den DATEV-Export. Eine Steuerberatung ersetzt das nicht. Welche Regeln für Ihre Praxis gelten, klären Sie mit einer Steuerberaterin oder einem Steuerberater.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'Leipzig is young and growing. Students, creatives and young families shape neighbourhoods like Plagwitz, Connewitz and the Südvorstadt, and in plenty of small studios one person handles the front desk, the treatments and the books. Clients compare prices closely, book on their phone and would rather send a message than call.',
    industries: {
      'salons-spas': {
        districts: ['Südvorstadt', 'Connewitz', 'Plagwitz', 'Lindenau', 'Gohlis', 'Zentrum'],
        hero: {
          title: ['Salons in Leipzig,', 'booked on the tram.'],
          lead: 'Your clients would rather message than call, and they book on your own page, see prices up front and get the confirmation by SMS. You start on the free plan and pay no commission per booking.',
        },
        local: {
          title: ['On the Karli, price matters.', 'So does a quick answer.'],
          paragraphs: [
            'Along Karl-Liebknecht-Straße and in Connewitz, hairdressers, barbers and nail studios sit close together, and clients know exactly what a cut costs two doors down. Before they write, they want to see the price. On your Zenno page, services, prices and free times are out in the open, and booking happens without a back-and-forth. For students who don’t like phoning, that is the obvious way to book.',
            'Many salons in Plagwitz and Lindenau are small and have no front desk. The AI receptionist answers messages on WhatsApp, by email and in your website chat, gives prices and free times and books straight in. Because there is no commission, even a €35 cut leaves the full amount with you. For longer colour appointments a small deposit through Stripe is enough to keep people from simply not turning up.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Südvorstadt',
            body: 'On the Karli the evening starts in the bars, and anyone going out on Friday or Saturday wants a cut or a manicure first. Many clients are students living in flatshares on the side streets, and they plan their week on their phone on Sunday evening. Cuts, fringe trims and styling late on Friday afternoon are in demand. Set up a student price as its own service and note that the student card is shown in the salon. Everyone sees up front what they will pay, and there is no discussion at the counter.',
          },
          {
            name: 'Lindenau',
            body: 'Around Georg-Schwarz-Straße and the Spinnerei live artists, craftspeople and young families, and many salons here are one-person businesses in a shopfront with a big window. If you cut and colour alone, you have no hand free for the phone. Clients therefore like to book by message, late in the evening too, asking about colour, undercuts or nails. Let the AI receptionist answer on WhatsApp and enter appointments directly. For colour work of two hours or more, a card on file pays off.',
          },
          {
            name: 'Gohlis',
            body: 'In Gohlis, Wilhelminian villas stand next to renovated apartment buildings, and clients range from families to people who have lived in the area for decades. They have their regular stylist and book Saturday morning, ideally right at eight, so the rest of the day stays free. Colour, highlights and classic cuts lead the list. Open your first Saturday slot at eight, send an SMS reminder on Friday, and ask for a small deposit on long Saturday colour appointments, because those times go quickly.',
          },
          {
            name: 'Zentrum',
            body: 'In the city centre, between the arcades and the market square, many people work in offices and shops, and the book fair in March and the Christmas market in December bring visitors from near and far. They look for a cut or a blow-dry before an evening event at short notice, often in English. Offer your booking page in English, open extra evening slots during fair weeks and say that no account is needed. Someone in town for three days won’t want to create one.',
          },
        ],
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
          {
            q: 'Many of my clients study at Leipzig University. Can I offer a student price?',
            a: 'Yes. You set up the student cut as its own service with its own price and note in the description that the student card is shown in the salon. The client sees both prices on your booking page and chooses herself.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Plagwitz', 'Lindenau', 'Connewitz', 'Südvorstadt', 'Schleußig', 'Gohlis'],
        hero: {
          title: ['Yoga studios in Leipzig,', 'started small, well booked.'],
          lead: 'A small studio in Plagwitz or Lindenau can start on the free plan. With Zenno, clients book a trial, a private session or yoga therapy directly on your page, through AI assistants too.',
        },
        local: {
          title: ['Yoga in a factory loft,', 'booked on a phone.'],
          paragraphs: [
            'Along the Karl-Heine-Kanal some yoga and Pilates studios teach in old factory floors, in Lindenau in former shopfronts, and often a single teacher runs the place. New clients arrive through recommendations and their phone. Your Zenno page runs under your own name, shows offers, prices and free times, and is built so that AI assistants can read it and book you directly too.',
            'Students and creatives have flexible days but full weeks, and a trial session is easily forgotten. SMS and email reminders help, and with a card on file you charge a fee for a no-show. You sell vouchers online, say as a gift at the end of term, and loyal clients collect points. Billing stays simple, including under the Kleinunternehmer rule.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Plagwitz',
            body: 'Many people in Plagwitz freelance, in coworking spaces by the canal or in their own studio, and their day doesn’t follow office hours. A private session at 1 pm, after a full morning, suits them better than one at 6 pm, and they often book it that same morning. Vinyasa, Pilates and mobility work for people who sit at a laptop all day are in demand. Open your midday hours to same-day bookings and offer a low-priced trial paid in advance, so a spontaneous idea turns into an actual visit.',
          },
          {
            name: 'Connewitz',
            body: 'Connewitz has a lively alternative scene, and many people here care about where their money goes. A booking page under your studio’s own name, with no commission going to a middleman, goes down well in this neighbourhood. Clients are price-conscious and like to book around 7 pm or on Sunday before heading into the Auwald forest. Hatha, Yin and private sessions for beginners are in demand. Offer a reduced price as its own service and explain in the description who it is meant for.',
          },
          {
            name: 'Schleußig',
            body: 'Schleußig lies between the Clara-Zetkin-Park and the Auwald, and in the mornings and evenings the paths by the water are full of runners and cyclists. These clients come with knees, hips or backs that niggle after training and book private sessions for mobility and stretching, often on Sunday after the long run. Medical questions are for their doctor; you provide the movement. Set up a 60-minute private session for runners and open Sunday morning, because that is when runners have time after training.',
          },
          {
            name: 'Gohlis',
            body: 'Around the Rosental and the quiet streets of Gohlis live many older people who want to keep moving without going to a loud gym. They prefer to book for ten in the morning, read reminders by email and like to come at the same time each week. Gentle yoga, chair yoga and private sessions for balance and the back are in demand. Grown-up children often give their parents the first sessions as a present. Sell vouchers online for that, which the recipients then redeem by QR code at your studio.',
          },
        ],
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
          {
            q: 'Leipzig University has many international students who write in English. Who replies while I’m teaching?',
            a: 'The AI receptionist. It answers on WhatsApp, by email and in your website chat in German, English or Thai, gives prices and free times, and only books times that are really free. Your booking page is available in English too.',
          },
        ],
      },
      clinics: {
        districts: ['Zentrum', 'Gohlis', 'Waldstraßenviertel', 'Südvorstadt', 'Schleußig', 'Plagwitz'],
        hero: {
          title: ['Clinics in Leipzig,', 'open to new clients.'],
          lead: 'In Leipzig clients book consultations and follow-ups online on your own page, with clear prices and real free times. You secure longer treatments with a deposit.',
        },
        local: {
          title: ['The city is growing.', 'Your calendar should grow with it.'],
          paragraphs: [
            'Many people move to Leipzig, and newcomers don’t yet know your clinic from the neighbourhood. They search on their phone in the evening, for a skin consultation in the centre or a facial in Gohlis, and compare prices as they go. Calling back the next morning is often too late. With Zenno, clients book consultations directly on your page, and the confirmation arrives straight away by SMS and email.',
            'Smaller clinics in Gohlis or Schleußig in particular rarely have a front desk staffed all day. The AI receptionist answers questions about the process, duration and prices from your information, and anything health-related comes to you. In draft mode you approve every reply yourself. For longer treatments you ask for a deposit, and in the client portal clients reschedule themselves instead of cancelling.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Zentrum',
            body: 'Since the City-Tunnel opened, the centre is a quick S-Bahn ride from Halle, Markkleeberg or Delitzsch, and many clients of a clinic in the Zentrum commute this way. They put the appointment before or after office hours, at 7:30 or 17:30, with the Markt station as their stop. Short consultations and follow-ups are in demand. Open the early and late slots online and send the SMS reminder the evening before, so the client can still plan her connection.',
          },
          {
            name: 'Waldstraßenviertel',
            body: 'The Waldstraßenviertel is a large, well-preserved Wilhelminian quarter between the Rosental and the city centre. Many academic families and older couples live here, plan their treatments carefully and like to see the same person each time. The stadium is right next door, and on home match days the streets and car parks are full. Check the fixture list before the season, and on those days add a note to the reminder that getting here takes longer, or put long treatments in the morning.',
          },
          {
            name: 'Südvorstadt',
            body: 'In the Südvorstadt, a clinic’s clients are often younger than elsewhere, a few years into their careers, and they compare prices closely before booking a skin treatment. They read the service description on their phone in the evening and want to know what the final bill will be. First consultations at 6 or 7 pm after work are in demand. Put the price, the duration and the deposit amount openly in every service. People who see that up front are more likely to book than to send a message and wait for a reply.',
          },
          {
            name: 'Schleußig',
            body: 'Many young families live in Schleußig, and parents of small children have a problem with appointments: a fever in the morning and the plan is off. So they book when their partner is home, on Saturday morning or from 7 pm, often a facial or a massage as a break from everyday life. Make it clear in the confirmation until when rescheduling in the client portal is free. Someone who reschedules in time comes a few days later, and the freed-up slot can still go to someone else.',
          },
        ],
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
          {
            q: 'I’ve only just opened my clinic in Leipzig and don’t have a tax adviser yet. Does Zenno help with the books?',
            a: 'Zenno collects what your tax adviser will need: VAT per service, a cash book for cash payments, a monthly or quarterly overview and the DATEV export. It doesn’t replace a tax adviser. Which rules apply to your clinic is something to settle with one.',
          },
        ],
      },
    },
  },
}
