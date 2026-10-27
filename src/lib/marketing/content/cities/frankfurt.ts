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
          lead: 'Der Schnitt um halb acht vor dem Büro ist meist als Erstes vergeben. Ihre Kundschaft bucht ihn direkt auf Ihrer Seite, auf Deutsch oder Englisch und auch über KI-Assistenten.',
        },
        local: {
          title: ['Früh, spät', 'und dazwischen die Mittagspause.'],
          paragraphs: [
            'Im Nordend und in Bornheim sind die Randzeiten am begehrtesten: der Termin um halb acht vor dem Büro und der um halb acht am Abend danach. Wer im Westend oder am Main arbeitet, bucht nach Kalender, meistens zwischen zwei Besprechungen. Mit Zenno sieht Ihre Kundschaft genau diese freien Zeiten, bucht in einer Minute und bekommt die Bestätigung sofort per SMS und E-Mail.',
            'Während großer Messen ist Frankfurt voller Gäste, die kurzfristig einen Schnitt, eine Rasur oder ein Styling vor dem Abendtermin brauchen, und viele davon fragen auf Englisch. Ihre Buchungsseite gibt es auf Deutsch und Englisch, und die KI-Rezeption antwortet auf WhatsApp und im Website-Chat. Mit hinterlegter Karte und einer Gebühr für No-Shows bleibt ein vergessener Termin nicht unbezahlt.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Nordend',
            body: 'Rund um den Oeder Weg und die Glauburgstraße wohnen viele junge Familien in Altbauwohnungen. Der Friseurtermin muss hier zwischen Kita und Homeoffice passen, oft an einem Vormittag unter der Woche, wenn ein Elternteil die Kinder übernommen hat. Gefragt sind pflegeleichte Schnitte, Kinderschnitte und Strähnen, für die man sich zwei Stunden freinimmt. Ein praktischer Tipp: Legen Sie Kinderschnitt und Erwachsenenschnitt bei zwei Stylistinnen zur selben Uhrzeit an. Dann bucht die Familie beide Plätze auf einmal, und niemand sitzt eine Stunde im Wartebereich.',
          },
          {
            name: 'Bornheim',
            body: 'Die obere Berger Straße hat etwas von einer Kleinstadt, mit Wochenmarkt, Apfelweinkneipen und Nachbarn, die sich beim Bäcker grüßen. Hier geht die Kundschaft seit Jahren zur selben Friseurin und macht den nächsten Termin am liebsten gleich beim Bezahlen fest. An Markttagen ist viel los, weil ohnehin alle auf der Straße sind, und dann sind Bartpflege und kurze Maniküren gefragt. Unser Tipp: Halten Sie Markttage für kurze Leistungen frei und legen Sie lange Farbtermine auf Donnerstag und Freitag, wo sie den Kalender nicht blockieren.',
          },
          {
            name: 'Bahnhofsviertel',
            body: 'Zwischen Kaiserstraße und Münchener Straße reiht sich ein Barbershop an den nächsten. Die Kundschaft ist so gemischt wie das Viertel: Hotelgäste, Pendler auf dem Weg vom Hauptbahnhof, Leute, die hier wohnen und abends ausgehen. Viele entscheiden eine Stunde vorher und schreiben auf Englisch. Fade, Bartkontur und Rasur mit heißem Tuch laufen bis spät in den Abend. Tipp für Inhaber: Lassen Sie auch die nächsten zwei Stunden online buchbar und verlangen Sie von neuen Gästen eine hinterlegte Karte, damit der Termin um 21 Uhr nicht verloren ist, wenn jemand doch den Zug nimmt.',
          },
          {
            name: 'Sachsenhausen',
            body: 'An der Schweizer Straße und in den ruhigeren Straßen Richtung Südsachsenhausen nimmt sich die Kundschaft Zeit für Salon und Spa, gern am Samstagvormittag oder am Freitagnachmittag vor dem Wochenende. Gebucht werden Farbe mit Pflege, Gesichtsbehandlungen und Massagen von 60 oder 90 Minuten. Viele verschenken eine Behandlung zum Geburtstag und kaufen den Gutschein dafür am Abend online. Ein Rat für diesen Stadtteil: Verkaufen Sie Gutscheine online und an der Kasse, und verlangen Sie für alles ab 90 Minuten eine Anzahlung, damit der lange Block am Samstag sicher ist.',
          },
        ],
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
          {
            q: 'Zum Jahresende kaufen Frankfurter Firmen bei mir Gutscheine für ihr Team. Geht das über Zenno?',
            a: 'Ja. Gutscheine verkaufen Sie online über Ihre Buchungsseite oder an der Kasse, bezahlt wird über Stripe. Eingelöst wird per QR-Code im Salon. Ob eine Firma dafür eine Rechnung mit ausgewiesener Umsatzsteuer braucht, klären Sie am besten mit Ihrer Steuerberatung.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Nordend', 'Bornheim', 'Westend', 'Sachsenhausen', 'Bockenheim', 'Ostend'],
        hero: {
          title: ['Yogastudios in Frankfurt,', 'gebucht zwischen zwei Besprechungen.'],
          lead: 'Ob vor dem Büro oder in der Mittagspause im Westend: Ihre Kundschaft bucht Einzelstunde, Probestunde oder Personal Training direkt bei Ihnen, auf Deutsch oder Englisch und auch über KI-Assistenten.',
        },
        local: {
          title: ['Yoga findet statt,', 'wo im Kalender Platz ist.'],
          paragraphs: [
            'Viele Ihrer Kundinnen und Kunden arbeiten in Banken, Kanzleien und Beratungen, und ihr Tag ist eng getaktet. Yoga kommt dorthin, wo eine Lücke ist, etwa um sieben am Mainufer oder nach Feierabend im Nordend. Ihre Zenno-Seite zeigt Angebote, Preise und freie Zeiten so, dass diese Lücke in einer Minute gebucht ist, direkt bei Ihnen und auch über KI-Assistenten, die für ihre Nutzer nach einem passenden Termin suchen.',
            'Ein eng getakteter Kalender heißt auch: Manchmal kommt etwas dazwischen. Wer rechtzeitig verschiebt, macht das selbst im Kundenportal. Wer kurzfristig absagt oder nicht erscheint, zahlt die Gebühr, die Sie festlegen, über die hinterlegte Karte, abgewickelt über Stripe. Und weil viele Ihrer Kundinnen aus dem Ausland kommen, gibt es Buchungsseite, Bestätigungen und Erinnerungen auf Deutsch und Englisch.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Westend',
            body: 'Im Westend arbeiten Kanzleien und Beratungen in alten Villen, und am Grüneburgpark liegt der Uni-Campus. Wer hier sitzt, hat mittags 60 Minuten und keine mehr. Eine Einzelstunde um 12:15, mit Umziehen und Duschen, muss genau passen. Deshalb wird sie eine Woche vorher eingeplant, und viele kommen jede Woche am selben Tag. Gefragt sind ruhiges Hatha, Arbeit für den Rücken und Atemübungen nach Vormittagen am Bildschirm. Bieten Sie 45-Minuten-Einheiten an und schreiben Sie die Dauer in den Namen der Leistung, dann muss niemand nachrechnen, ob es bis zum nächsten Call reicht.',
          },
          {
            name: 'Ostend',
            body: 'Seit die Europäische Zentralbank an der alten Großmarkthalle sitzt, arbeiten im Ostend viele Menschen aus ganz Europa, und an der Hanauer Landstraße sind Lofts, Agenturen und neue Wohnhäuser entstanden. Diese Kundschaft schreibt auf Englisch und bucht abends nach acht auf dem Handy, für den nächsten Morgen um sieben. Personal Training, Pilates-Einzelstunden und Yoga vor dem Büro sind hier gefragt. Wer im Ostend unterrichtet, sollte die Buchungsseite auf Englisch anbieten und die Zeiten vor acht Uhr früh freigeben, denn die sind zuerst vergeben.',
          },
          {
            name: 'Bockenheim',
            body: 'Bockenheim liegt zwischen Messe und Uni. Auf der Leipziger Straße mischen sich Studierende, Familien und Leute, die seit Jahrzehnten hier wohnen. Viele probieren erst einmal aus, bevor sie sich festlegen, etwa mit einer Probestunde am Sonntagvormittag oder am frühen Abend unter der Woche. Der Preis spielt dabei eine Rolle, und gefragt sind ruhige Stunden für Einsteiger und Yoga für den Rücken. Eine günstige Probestunde mit Vorkasse funktioniert hier gut, zusammen mit einer SMS-Erinnerung am Vorabend. So bleibt die Matte nicht leer, nur weil jemand die Uhrzeit vergessen hat.',
          },
          {
            name: 'Nordend',
            body: 'Im Nordend arbeiten viele selbstständig oder im Homeoffice, als Übersetzerin, Architekt oder in der Werbung. Ihr Tag ist beweglich, und sie buchen gern um zehn Uhr vormittags, wenn der Raum sonst leer stünde. Die Räume liegen oft in Ladenlokalen im Erdgeschoss rund um den Merianplatz und den unteren Teil der Berger Straße. Gefragt sind Vinyasa, Yin am späten Abend und Einzelstunden für die Haltung nach langen Stunden am Schreibtisch. Legen Sie eine eigene Vormittags-Einzelstunde zu einem etwas niedrigeren Preis an, dann verteilen sich die Buchungen besser über den Tag.',
          },
        ],
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
          {
            q: 'Ich unterrichte im Studio im Ostend und gebe zusätzlich Personal Training in Büros im Westend. Passt beides auf eine Seite?',
            a: 'Ja. Sie legen beides als eigene Leistung an, jeweils mit Dauer, Preis und der Person, die unterrichtet. In die Beschreibung schreiben Sie, wo die Stunde stattfindet, und die Fahrzeit zwischen zwei Terminen planen Sie in der Dauer mit ein.',
          },
        ],
      },
      clinics: {
        districts: ['Westend', 'Sachsenhausen', 'Nordend', 'Bockenheim', 'Dornbusch', 'Innenstadt'],
        hero: {
          title: ['Praxen in Frankfurt,', 'auf Deutsch und Englisch gebucht.'],
          lead: 'Die Nachkontrolle muss noch vor die nächste Geschäftsreise passen. Ihre Kundschaft bucht online in ihrer Sprache, und lange Behandlungen sichern Sie mit einer Anzahlung ab.',
        },
        local: {
          title: ['Kundschaft aus vielen Ländern,', 'eine Rezeption für alle.'],
          paragraphs: [
            'In Frankfurt kommt die Kundschaft einer Ästhetik- oder Wellnesspraxis oft aus vielen Ländern, und viele pendeln aus dem Taunus oder sind die halbe Woche beruflich unterwegs. Termine müssen um Flüge und Besprechungen herum passen. Mit Zenno buchen sie Beratung und Behandlung direkt auf Ihrer Seite, auf Deutsch oder Englisch, und bekommen Bestätigung und Erinnerung per SMS und E-Mail, egal wo sie gerade sind.',
            'Ihre Rezeption muss nicht jede Frage zu Preisen und Ablauf am Telefon klären. Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch, Englisch oder Thai, mit Ihren eigenen Angaben. Alles Medizinische und jede Beschwerde gibt sie an Sie weiter. Für längere Behandlungen wird bei der Buchung eine Anzahlung fällig, und Ihre Umsätze gehen im DATEV-Format an die Steuerberatung.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Westend',
            body: 'Im Westend liegen viele Praxen in Gründerzeitvillen, mit Messingschild an der Tür und ohne Schaufenster. Die Kundschaft wohnt oft ein paar Straßen weiter oder arbeitet in den Konsulaten und Kanzleien des Viertels. Sie bucht zuerst eine Beratung und entscheidet danach in Ruhe, ob sie eine Hautbehandlung oder eine Laserserie beginnt. Am Telefon aus dem Großraumbüro will das niemand besprechen. Machen Sie die Erstberatung deshalb online buchbar und kostenpflichtig, und schreiben Sie in die Beschreibung, ob der Betrag später auf die Behandlung angerechnet wird.',
          },
          {
            name: 'Innenstadt',
            body: 'Rund um Hauptwache, Zeil und Goethestraße arbeiten viele Menschen in Büros, Banken und Geschäften, und am Samstag kommen Besucherinnen aus dem Umland zum Einkaufen. Für eine Praxis hier heißt das: kurze Termine. Nachkontrollen, Hautpflege oder eine Beratung von 20 bis 30 Minuten müssen in die Mittagspause passen, mit dem Rückweg ins Büro. Gebucht wird meist am Vorabend oder morgens in der S-Bahn. Halten Sie zwischen zwölf und zwei Uhr kurze Termine frei und lassen Sie die Erinnerung per SMS am Vormittag rausgehen, wenn der Tag noch planbar ist.',
          },
          {
            name: 'Dornbusch',
            body: 'Dornbusch ist ein ruhiger Wohnstadtteil entlang der Eschersheimer Landstraße, mit Einfamilienhäusern, Gärten und vielen Menschen, die seit Jahrzehnten hier leben. Diese Kundschaft kommt gern vormittags unter der Woche, schätzt einen festen Rhythmus bei Behandlungsserien und liest Erinnerungen lieber per E-Mail als in einer App. Manche buchen beim ersten Mal noch telefonisch und beim zweiten Mal schon online. Schicken Sie die Erinnerung zwei Tage vorher, und weisen Sie auf das Kundenportal hin, damit ein verschobener Arzttermin nicht zu einem leeren Behandlungsraum führt.',
          },
          {
            name: 'Sachsenhausen',
            body: 'Südlich des Mains wohnen viele, die über die Brücken in die Innenstadt pendeln, und Familien in den Villenstraßen Richtung Stadtwald. Behandlungen werden hier gern auf den Freitagnachmittag oder Samstagvormittag gelegt, damit danach ein freier Tag folgt. Diese Termine sind knapp, und eine kurzfristige Absage reißt ein Loch, das sich am Wochenende kaum füllen lässt. Gefragt sind längere Gesichtsbehandlungen und Behandlungsserien. Für Freitag und Samstag lohnt sich eine Anzahlung bei der Buchung, über Stripe, und eine Erinnerung per SMS am Mittwoch davor.',
          },
        ],
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
          {
            q: 'Viele meiner Kundinnen pendeln aus dem Taunus und zahlen lieber vorab, statt nach der Behandlung an der Kasse zu stehen. Geht das?',
            a: 'Ja. Bei der Buchung kann eine Anzahlung oder der volle Preis fällig werden, bezahlt wird per Karte über Stripe. Die Bestätigung kommt per SMS und E-Mail. Wer einen Gutschein hat, löst ihn per QR-Code bei Ihnen ein.',
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
          lead: 'The 7:30 cut before the office is usually the first slot to go. Clients book it straight on your page, in German or English, and through AI assistants too.',
        },
        local: {
          title: ['Early, late,', 'and the lunch break in between.'],
          paragraphs: [
            'In the Nordend and Bornheim, the edges of the day are most in demand: the 7:30 slot before the office and the 7:30 slot in the evening after it. People working in the Westend or by the Main book by their calendar, usually between two meetings. With Zenno, clients see exactly those free times, book in a minute and get the confirmation right away by SMS and email.',
            'During major trade fairs, Frankfurt fills with visitors who need a cut, a shave or styling before an evening event at short notice, and many of them ask in English. Your booking page is available in German and English, and the AI receptionist answers on WhatsApp and in your website chat. With a card on file and a no-show fee, a forgotten appointment doesn’t go unpaid.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Nordend',
            body: 'Around Oeder Weg and Glauburgstraße, many young families live in old apartment buildings. A salon visit here has to fit between nursery and working from home, often on a weekday morning when one parent has taken the kids. People ask for low-maintenance cuts, children’s cuts and highlights they clear two hours for. A practical tip: set up a child’s cut and an adult cut with two stylists at the same time. The family then books both chairs in one go, and nobody spends an hour in reception.',
          },
          {
            name: 'Bornheim',
            body: 'The upper Berger Straße feels like a small town, with a weekly market, cider taverns and neighbours who say hello at the bakery. Clients here have gone to the same stylist for years and like to fix the next appointment while they pay. Market days are busy because everyone is out on the street anyway, and beard trims and quick manicures are in demand. Our tip: keep market days for short services and put long colour appointments on Thursday and Friday, where they don’t block the calendar.',
          },
          {
            name: 'Bahnhofsviertel',
            body: 'Between Kaiserstraße and Münchener Straße, one barbershop follows the next. The clients are as mixed as the area: hotel guests, commuters coming off the main station, residents heading out for the evening. Many decide an hour ahead and write in English. Fades, beard lines and hot-towel shaves keep going until late. A tip for owners: keep the next two hours bookable online and ask new guests for a card on file, so the 9 pm slot isn’t lost when someone catches a train after all.',
          },
          {
            name: 'Sachsenhausen',
            body: 'On Schweizer Straße and in the quieter streets towards Südsachsenhausen, clients take their time for the salon and spa, often on a Saturday morning or a Friday afternoon before the weekend. They book colour with a treatment, facials and massages of 60 or 90 minutes. Many give a treatment as a birthday present and buy the voucher online in the evening. In this part of town, sell vouchers online and at the counter, and ask for a deposit on anything 90 minutes or longer, so the long Saturday block is safe.',
          },
        ],
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
          {
            q: 'At the end of the year, Frankfurt companies buy vouchers from me for their teams. Can I do that through Zenno?',
            a: 'Yes. You sell vouchers online through your booking page or at the counter, with payment via Stripe. They are redeemed by QR code in the salon. Whether a company needs an invoice showing VAT is something to check with your tax adviser.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Nordend', 'Bornheim', 'Westend', 'Sachsenhausen', 'Bockenheim', 'Ostend'],
        hero: {
          title: ['Yoga studios in Frankfurt,', 'booked between two meetings.'],
          lead: 'Before the office or at lunch in the Westend: clients book a private session, a trial or personal training directly with you, in German or English, and through AI assistants too.',
        },
        local: {
          title: ['Yoga happens', 'where the calendar has room.'],
          paragraphs: [
            'Many of your clients work in banks, law firms and consultancies, and their days are tightly scheduled. Yoga goes wherever there is a gap, say at seven by the Main or after work in the Nordend. Your Zenno page shows offers, prices and free times so that gap is booked in a minute, directly with you, and through AI assistants searching for a suitable slot on their users’ behalf.',
            'A tight calendar also means something sometimes comes up. Anyone who reschedules in good time does it themselves in the client portal. Anyone who cancels late or doesn’t show up pays the fee you set, charged to the card on file through Stripe. And because many of your clients come from abroad, the booking page, confirmations and reminders are available in German and English.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Westend',
            body: 'Law firms and consultancies work out of old villas in the Westend, and the university campus sits by the Grüneburgpark. People here have 60 minutes at lunch and not one more. A private session at 12:15, with changing and a shower, has to fit exactly, so it gets planned a week ahead. Gentle Hatha, back work and breathing practice after a morning at the screen are in demand. Offer 45-minute sessions and put the length in the service name, so nobody has to check it against the next call.',
          },
          {
            name: 'Ostend',
            body: 'Since the European Central Bank moved into the old wholesale market hall, the Ostend has drawn people from all over Europe, and lofts, agencies and new apartment blocks have gone up along Hanauer Landstraße. These clients write in English and book on their phone after 8 pm for seven o’clock the next morning. Personal training, private Pilates and yoga before the office are what they ask for. If you teach in the Ostend, offer an English booking page and open your slots before 8 am, because those go first.',
          },
          {
            name: 'Bockenheim',
            body: 'Bockenheim sits between the Messe and the university. On Leipziger Straße, students, families and people who have lived here for decades all mix. Many want to try before they commit, with a trial on Sunday morning or early on a weekday evening. Price matters, and calm beginner sessions and yoga for the back are what people book. A low-priced trial paid in advance works well here, together with an SMS reminder the evening before. That way a mat doesn’t stay empty just because someone forgot the time.',
          },
          {
            name: 'Nordend',
            body: 'Plenty of people in the Nordend are self-employed or work from home, as translators, architects or in advertising. Their days are flexible, and they like to book at ten in the morning, when the room would otherwise be empty. Studios here often sit in ground-floor shopfronts around Merianplatz and the lower end of Berger Straße. Vinyasa, late-evening Yin and private sessions for posture after long hours at a desk are in demand. Set up a separate morning private session at a slightly lower price, and bookings spread more evenly across the day.',
          },
        ],
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
          {
            q: 'I teach at my studio in the Ostend and also do personal training in offices in the Westend. Can both go on one page?',
            a: 'Yes. You set each one up as its own service, with duration, price and the person teaching it. The description says where the session takes place, and you build the travel time between two appointments into the duration.',
          },
        ],
      },
      clinics: {
        districts: ['Westend', 'Sachsenhausen', 'Nordend', 'Bockenheim', 'Dornbusch', 'Innenstadt'],
        hero: {
          title: ['Clinics in Frankfurt,', 'booked in German and English.'],
          lead: 'The follow-up has to fit in before the next business trip. Clients book online in their own language, and you secure long treatments with a deposit.',
        },
        local: {
          title: ['Clients from many countries,', 'one front desk for all of them.'],
          paragraphs: [
            'In Frankfurt, an aesthetic or wellness clinic often sees clients from many countries, and many commute in from the Taunus or travel for work half the week. Appointments have to fit around flights and meetings. With Zenno they book consultations and treatments directly on your page, in German or English, and get confirmations and reminders by SMS and email wherever they happen to be.',
            'Your front desk no longer has to settle every question about prices and the process by phone. The AI receptionist answers on WhatsApp, by email and in your website chat in German, English or Thai, using your own information. Anything medical and every complaint is passed to you. For longer treatments a deposit is due at booking, and your sales go to your tax adviser in DATEV format.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Westend',
            body: 'In the Westend, many clinics sit in late 19th-century villas, with a brass plate by the door and no shop window. Clients often live a few streets away or work at the consulates and law firms in the area. They book a consultation first and then decide in their own time whether to start a skin treatment or a laser course. Nobody wants to discuss that on the phone from an open-plan office. So make the first consultation bookable online and paid, and say in the description whether the fee counts towards the treatment later.',
          },
          {
            name: 'Innenstadt',
            body: 'Around the Hauptwache, the Zeil and Goethestraße, many people work in offices, banks and shops, and on Saturdays visitors come in from the surrounding towns to shop. For a clinic here that means short appointments. A follow-up or a consultation of 20 to 30 minutes has to fit into a lunch break, walk back included. Most people book the evening before or on the S-Bahn in the morning. Keep short slots free between noon and two, and send the SMS reminder in the morning, while the day is still open.',
          },
          {
            name: 'Dornbusch',
            body: 'Dornbusch is a quiet residential area along Eschersheimer Landstraße, with family houses, gardens and many people who have lived here for decades. These clients like weekday mornings, value a fixed rhythm for a course of treatments and would rather read a reminder by email than in an app. Some book by phone the first time and online the second. Send the reminder two days ahead and point to the client portal, so a doctor’s appointment that moves doesn’t leave your treatment room empty.',
          },
          {
            name: 'Sachsenhausen',
            body: 'South of the Main live many people who commute across the bridges into the centre, and families in the villa streets towards the city forest. Treatments here are often booked for Friday afternoon or Saturday morning, so a day off follows. Those slots are scarce, and a late cancellation leaves a gap that is hard to fill at the weekend. Longer facials and courses of treatment are in demand. For Friday and Saturday a deposit at booking through Stripe pays off, along with an SMS reminder on the Wednesday before.',
          },
        ],
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
          {
            q: 'Many of my clients commute in from the Taunus and would rather pay in advance than queue at the counter after a treatment. Is that possible?',
            a: 'Yes. A deposit or the full price can be due at booking, paid by card through Stripe. The confirmation goes out by SMS and email. Clients with a voucher redeem it by QR code at your clinic.',
          },
        ],
      },
    },
  },
}
