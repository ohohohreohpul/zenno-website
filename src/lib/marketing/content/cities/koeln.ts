import type { CityContentSet } from './types'

/** Köln: sociable, spontaneous clientele, many students, and Karneval season driving styling demand. */
export const KOELN: CityContentSet = {
  de: {
    clientele:
      'Köln ist gesellig und spontan. Viele buchen kurzfristig, schreiben lieber eine Nachricht, als anzurufen, und erzählen danach im Veedel weiter, wo es gut war. Mit Universität und Hochschulen kommt viel junge Kundschaft in die Stadt, die preisbewusst ist und auf dem Handy bucht. Und eine Jahreszeit verschiebt den ganzen Kalender: Rund um Karneval sind Styling-, Make-up- und Haartermine schneller vergeben als sonst.',
    industries: {
      'salons-spas': {
        districts: ['Belgisches Viertel', 'Ehrenfeld', 'Südstadt', 'Agnesviertel', 'Nippes', 'Lindenthal'],
        hero: {
          title: ['Salons in Köln,', 'bereit für Weiberfastnacht.'],
          lead: 'Ob Karnevals-Make-up an Weiberfastnacht oder Balayage im Belgischen Viertel: Ihre Kundschaft bucht direkt auf Ihrer Seite, auch über KI-Assistenten. Mit Vorkasse bleibt in der Session kein Termin unbezahlt.',
        },
        local: {
          title: ['An den tollen Tagen', 'zählt jede freie Minute.'],
          paragraphs: [
            'Von Weiberfastnacht bis Rosenmontag wollen in Ehrenfeld, Nippes und der Südstadt gefühlt alle gleichzeitig geschminkt oder frisiert werden, und zwar morgens, bevor es auf die Straße geht. Mit Zenno öffnen Sie dafür zusätzliche frühe Termine und legen eigene Leistungen wie Karnevals-Make-up an. Ihre Kundschaft bucht online und bezahlt bei der Buchung. Bleibt jemand beim ersten Zug hängen, ist der Termin trotzdem bezahlt.',
            'Nach Aschermittwoch bucht in Köln eine andere Kundschaft. Im Belgischen Viertel und im Agnesviertel ist sie jung, oft spontan und bucht auf dem Handy, und viele Studierende vergleichen Preise, bevor sie sich festlegen. Ihre Buchungsseite zeigt Preise und freie Zeiten offen, und die KI-Rezeption beantwortet Fragen auf WhatsApp. Mit Treuepunkten kommen Kundinnen aus dem Veedel wieder, und Geburtstagsgutscheine verkaufen Sie online.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Belgisches Viertel',
            body: 'Rund um den Brüsseler Platz reihen sich kleine Boutiquen, Cafés und Ateliers, und die Kundschaft arbeitet in Mode, Design oder Werbung. Gefragt sind Balayage, aktuelle Schnitte und Farbe, die nach etwas aussieht, und dafür zahlt man auch. Viele wählen die Stylistin gezielt aus. Zeigen Sie deshalb bei jeder Leistung, wer im Team sie anbietet, damit die Kundin direkt bei ihrer Stylistin bucht. Gebucht wird am liebsten für Samstag oder den Abend. Für Balayage über drei Stunden lohnt eine Anzahlung von 40 €.',
          },
          {
            name: 'Ehrenfeld',
            body: 'An der Venloer Straße mischt sich alles: türkische Familien, die seit Generationen hier leben, Studierende, Leute aus der Musik- und Clubszene. Gefragt sind kurze Leistungen, Augenbrauen, Bartpflege und Herrenschnitte, und vieles läuft über WhatsApp statt über das Telefon. Ein Teil der Kundschaft schreibt auf Englisch. Richten Sie die KI-Rezeption auf Ihrer eigenen WhatsApp-Nummer ein, dann bekommt jede Nachricht eine Antwort mit echten freien Zeiten, auch wenn Sie gerade schneiden. Kurze Leistungen mit festem Preis füllen die Lücken zwischen langen Terminen.',
          },
          {
            name: 'Südstadt',
            body: 'Rund um Chlodwigplatz und Severinstraße gehört Karneval zum Leben, mit eigenem Veedelszoch und Kneipen, die an den tollen Tagen ab dem Morgen voll sind. Viele Stammkundinnen wohnen hier seit Jahrzehnten und wollen an Weiberfastnacht und Rosenmontag früh frisiert und geschminkt werden. Öffnen Sie an diesen Tagen Zeiten ab 6:30 und legen Sie eine Leistung mit eigenem Preis an. Wenn Sie den vollen Preis bei der Buchung verlangen, ist jeder Platz bezahlt, auch wenn der Abend vorher lang war.',
          },
          {
            name: 'Nippes',
            body: 'Nippes ist bodenständig, und samstags trifft sich das Viertel auf dem Markt am Wilhelmplatz. Die Kundschaft sind Familien und ältere Nachbarinnen, die seit Jahren zum selben Salon gehen und vor allem eines schätzen: einen fairen Preis, den man vorher kennt. Empfehlungen laufen hier von Tür zu Tür. Stellen Sie jeden Preis auf die Buchungsseite und belohnen Sie Stammkundinnen mit Treuepunkten. Samstagvormittag nach dem Markt ist die gefragteste Zeit, also lohnt es sich, ihn früh online freizugeben und unter der Woche Abendtermine anzubieten.',
          },
        ],
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
          {
            q: 'Im Veedel kennt man sich. Wie belohne ich meine Stammkundinnen?',
            a: 'Mit Treuepunkten, die Ihre Kundschaft bei jedem Besuch sammelt. Dazu verkaufen Sie Gutscheine online und am Tresen, eingelöst per QR-Code. Wer seiner Nachbarin zum Geburtstag einen Termin schenken will, kauft den Gutschein abends auf Ihrer Seite.',
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
            'In Köln beginnt das Jahr gefühlt zweimal: im Januar und noch einmal am Aschermittwoch. Wenn die Kostüme wieder im Schrank hängen, suchen viele einen ruhigen Ausgleich und buchen die erste Probestunde, oft abends auf dem Sofa. Zwischen Sülz, Lindenthal und dem Stadtwald liegen viele kleine Studios nah beieinander. Gebucht wird dort, wo Preis und freie Zeit sofort zu sehen sind, und auf Ihrer Zenno-Seite finden das auch KI-Assistenten.',
            'Rund um die Universität bucht eine junge Kundschaft, die gern kurzfristig umplant. Im Kundenportal verschiebt sie ihren Termin selbst, ohne dass jemand anrufen muss. Wer gar nicht kommt, zahlt über die hinterlegte Karte die Gebühr, die Sie für No-Shows und späte Absagen festlegen. Und wer einer Freundin eine Stunde schenken will, kauft den Gutschein online auf Ihrer Seite.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Sülz',
            body: 'In Sülz wohnen Studierende neben jungen Familien, und der Kalender folgt dem Semester. Während der Vorlesungszeit kommen viele zur Probestunde und bleiben ein paar Wochen, in den Prüfungsphasen und Semesterferien wird es ruhiger, weil viele nach Hause fahren. Planen Sie das ein: Öffnen Sie im Oktober und April mehr Abendzeiten, im August weniger. Die Probestunde bekommt einen eigenen, günstigen Preis. Weil Studierende spontan absagen, sorgt die hinterlegte Karte mit einer kleinen Gebühr dafür, dass gebuchte Plätze auch genutzt werden.',
          },
          {
            name: 'Lindenthal',
            body: 'Lindenthal am Stadtwald ist ruhig und grün, und in der Nähe liegt das Universitätsklinikum. Unter Ihrer Kundschaft sind deshalb viele, die im Schichtdienst arbeiten, in Pflege und Medizin. Feste Wochentermine passen nicht zu ihrem Dienstplan, der oft erst kurz vorher feststeht. Bieten Sie Einzelstunden zu ungewöhnlichen Zeiten an, am frühen Nachmittag oder um 9 Uhr nach dem Nachtdienst. Über das Kundenportal verschiebt diese Kundschaft selbst, wenn sich der Plan ändert. Die KI-Rezeption beantwortet Fragen auch nachts, wenn jemand Pause hat.',
          },
          {
            name: 'Ehrenfeld',
            body: 'In Ehrenfeld arbeiten viele in der Musik-, Event- und Kreativbranche, mit Wochen, die nie gleich aussehen. Gebucht wird am Sonntagabend oder Montagmorgen, nur für die laufende Woche. Wenn im November und rund um Karneval die Veranstaltungen laufen, haben viele kaum Zeit, danach kommen sie zurück. Personal Training und Einzelstunden am späten Vormittag passen zu diesem Rhythmus. Schicken Sie Bestätigung und Erinnerung per SMS, denn in vollen Wochen gehen E-Mails unter. Eine hinterlegte Karte macht späte Absagen planbar.',
          },
          {
            name: 'Südstadt',
            body: 'Am Rheinauhafen in der Südstadt arbeiten viele in Büros mit Blick auf den Rhein, und rund um den Chlodwigplatz wohnen Menschen, die das Veedel seit Jahrzehnten kennen. Für die Büroleute zählt die Stunde direkt nach der Arbeit: zwischen 18 und 19:30 Uhr, fußläufig erreichbar. Öffnen Sie dieses Fenster für Einzelstunden und Personal Training und zeigen Sie es online. Die Erinnerung per SMS am Tag des Termins hält die Stunde fest, wenn das Meeting länger dauert. Und wenn ein Team eine Kollegin verabschiedet, verschenkt es einen Gutschein.',
          },
        ],
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
          {
            q: 'Viele Studierende in Sülz wollen erst eine günstige Probestunde. Kann ich dafür einen eigenen Preis festlegen?',
            a: 'Ja. Sie legen die Probestunde als eigene Leistung mit eigenem Preis und eigener Dauer an, zum Beispiel 60 Minuten für 12 €. Auch dafür können Sie Vorkasse verlangen oder die Karte hinterlegen lassen, damit die günstige Stunde nicht leer bleibt.',
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
        neighbourhoods: [
          {
            name: 'Marienburg',
            body: 'Marienburg ist das Villenviertel im Kölner Süden, mit großen Gärten und einer Kundschaft, die Diskretion erwartet. Termine werden am liebsten vormittags gebucht, mit Zeit für ein ausführliches Gespräch, und häufig über eine Assistenz oder per E-Mail. Hier lohnt sich der Entwurfsmodus: Die KI-Rezeption formuliert die Antwort, Sie lesen sie, bevor sie rausgeht. Planen Sie Beratungen großzügig, 45 statt 30 Minuten. Den vollen Preis bei der Buchung zu verlangen, ist bei längeren Behandlungen auch für diese Kundschaft selbstverständlich.',
          },
          {
            name: 'Rodenkirchen',
            body: 'Rodenkirchen liegt direkt am Rhein, mit Uferpromenade und dem Gefühl einer Kleinstadt. Viele Familien und ältere Paare wohnen hier und fahren für eine Behandlung ungern in die Innenstadt. Eine Praxis im Ort wird deshalb zur festen Adresse, und Empfehlungen machen die Runde. Gefragt sind Termine am Samstagvormittag, wenn auch Berufstätige Zeit haben. Öffnen Sie diesen Vormittag online und schicken Sie Erinnerungen per SMS und E-Mail. Wer am Wochenende verreist, verschiebt im Kundenportal, ohne dass Sie am Montag zurückrufen müssen.',
          },
          {
            name: 'Junkersdorf',
            body: 'Junkersdorf im Kölner Westen ist ruhig, mit Einfamilienhäusern, Tennisplätzen und Stadion und Sporthochschule ganz in der Nähe. Die Kundschaft ist sportlich und kommt oft für Massagen und Wellnessbehandlungen, die sich an Training und Wettkämpfe anschließen. Gebucht wird abends nach dem Sport, häufig für die kommende Woche. Geben Sie Dauer und Preis jeder Behandlung genau an, damit niemand nachfragen muss. Weil Trainingspläne sich kurzfristig ändern, hilft eine hinterlegte Karte mit klarer Gebühr für Absagen unter 24 Stunden.',
          },
          {
            name: 'Agnesviertel',
            body: 'Im Agnesviertel rund um die Neusser Straße wohnen viele, die in Medien, Werbung und Fernsehen arbeiten, in Altbauten nah an der Innenstadt. Vor einem Drehtag oder einer Präsentation soll die Haut ruhig aussehen, deshalb wird eine Behandlung oft eine Woche vorher gebucht und genauso oft verschoben, wenn sich der Termin bewegt. Das Kundenportal nimmt Ihnen die Telefonate ab. Fragen nach dem Abendessen beantwortet die KI-Rezeption aus Ihren Angaben. Für Behandlungen ab einer Stunde nehmen Sie eine Anzahlung, damit eine Verschiebung nicht zur Lücke wird.',
          },
        ],
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
            a: 'Ja. Sie legen die Umsatzsteuer für jede Leistung einzeln fest. Ihre Umsätze exportieren Sie im DATEV-Format, und Ihre Steuerberatung arbeitet direkt damit weiter. Welcher Satz für welche Leistung gilt, klären Sie am besten mit ihr.',
          },
          {
            q: 'In meiner Praxis in Rodenkirchen behandelt an zwei Tagen eine Kollegin mit. Sieht die Kundschaft, bei wem sie bucht?',
            a: 'Ja. Im Kalender hat jede Person aus Ihrem Team eine eigene Spalte, und für jede Leistung legen Sie fest, wer sie anbietet. Auf der Buchungsseite sieht die Kundschaft dann, bei wem der Termin ist, und an den Tagen Ihrer Kollegin erscheinen ihre freien Zeiten.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'Cologne is sociable and spontaneous. Many people book at short notice, would rather send a message than call, and then tell the whole Veedel where they had a good experience. The university and colleges bring plenty of young clients who watch their budget and book on their phone. And one season shifts the entire calendar: around Karneval, styling, make-up and hair appointments go faster than at any other time.',
    industries: {
      'salons-spas': {
        districts: ['Belgisches Viertel', 'Ehrenfeld', 'Südstadt', 'Agnesviertel', 'Nippes', 'Lindenthal'],
        hero: {
          title: ['Salons in Cologne,', 'ready for Weiberfastnacht.'],
          lead: 'Karneval make-up on Weiberfastnacht or balayage in the Belgisches Viertel: clients book straight on your page, and through AI assistants too. With prepayment, every appointment in the season is paid for.',
        },
        local: {
          title: ['On the crazy days,', 'every free minute counts.'],
          paragraphs: [
            'From Weiberfastnacht to Rosenmontag, it feels like everyone in Ehrenfeld, Nippes and the Südstadt wants make-up or styling at the same time, and all in the morning before heading out into the streets. With Zenno you open extra early slots and add your own services such as Karneval make-up. Clients book online and pay at booking. If someone gets caught up at the first parade, the appointment is paid for anyway.',
            'After Ash Wednesday, a different crowd books in Cologne. In the Belgisches Viertel and the Agnesviertel, clients are young, often spontaneous and book on their phone, and many students compare prices before they commit. Your booking page shows prices and free times openly, and the AI receptionist answers questions on WhatsApp. Loyalty points bring clients from the neighbourhood back, and you sell birthday vouchers online.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Belgisches Viertel',
            body: 'Around Brüsseler Platz, small boutiques, cafés and studios line the streets, and clients work in fashion, design or advertising. Balayage, current cuts and colour that makes a statement are in demand, and people pay for it. Many choose their stylist deliberately. So show for each service who on your team offers it, and the client books directly with the stylist she wants. Saturdays and evenings are the favourite times. For balayage over three hours, a €40 deposit makes sense.',
          },
          {
            name: 'Ehrenfeld',
            body: 'Venloer Straße mixes everything: Turkish families who have lived here for generations, students, people from the music and club scene. Short services are in demand, eyebrows, beard care and men’s cuts, and much of it runs over WhatsApp rather than the phone. Some clients write in English. Set the AI receptionist up on your own WhatsApp number and every message gets a reply with real free times, even while you are cutting. Short services at a fixed price fill the gaps between long appointments.',
          },
          {
            name: 'Südstadt',
            body: 'Around Chlodwigplatz and Severinstraße, Karneval is part of life, with the neighbourhood’s own parade and pubs that are full from the morning on the crazy days. Many regulars have lived here for decades and want their hair and make-up done early on Weiberfastnacht and Rosenmontag. Open slots from 6:30 on those days and set up a service with its own price. If you charge the full price at booking, every seat is paid for, even when the night before ran late.',
          },
          {
            name: 'Nippes',
            body: 'Nippes is down to earth, and on Saturdays the neighbourhood meets at the market on Wilhelmplatz. Clients are families and older neighbours who have gone to the same salon for years and value one thing above all: a fair price they know in advance. Recommendations travel from door to door here. Put every price on your booking page and reward regulars with loyalty points. Saturday morning after the market is the most popular time, so open it online early and offer evening slots during the week.',
          },
        ],
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
          {
            q: 'Everyone in the Veedel knows each other. How do I reward my regulars?',
            a: 'With loyalty points that clients collect at every visit. You also sell vouchers online and at the counter, redeemed by QR code. Anyone who wants to give a neighbour an appointment for her birthday buys the voucher on your page in the evening.',
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
            'In Cologne the year seems to start twice: in January, and again on Ash Wednesday. Once the costumes are back in the wardrobe, many people look for something calmer and book their first trial session, often from the sofa in the evening. Between Sülz, Lindenthal and the Stadtwald, many small studios sit close together. People book where price and free time are visible at once, and on your Zenno page AI assistants can see them too.',
            'Around the university, clients are young and happy to change plans at short notice. In the client portal they reschedule themselves, without anyone having to call. Anyone who doesn’t show up pays the no-show or late-cancellation fee you set, charged to the card on file. And anyone who wants to give a friend a session buys the voucher online on your page.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Sülz',
            body: 'Students live next to young families in Sülz, and the calendar follows the semester. During term many come for a trial session and stay for a few weeks; during exams and the semester break it gets quieter because many go home. Plan for it: open more evening slots in October and April, fewer in August. Give the trial session its own low price. Because students cancel on a whim, a card on file with a small fee makes sure booked places actually get used.',
          },
          {
            name: 'Lindenthal',
            body: 'Lindenthal by the Stadtwald is quiet and green, and the university hospital is close by. Many of your clients therefore work shifts in nursing and medicine. Fixed weekly slots don’t fit their rota, which is often settled only shortly before. Offer private sessions at unusual times, in the early afternoon or at 9 am after a night shift. These clients reschedule themselves in the client portal when the rota changes. The AI receptionist answers questions at night too, whenever someone is on a break.',
          },
          {
            name: 'Ehrenfeld',
            body: 'Many people in Ehrenfeld work in music, events and the creative industries, and no two weeks look alike. They book on Sunday evening or Monday morning, only for the week ahead. In November and around Karneval, when events are running, many hardly have time; afterwards they come back. Personal training and private sessions in the late morning suit this rhythm. Send confirmations and reminders by SMS, because emails get lost in busy weeks. A card on file makes late cancellations something you can plan around.',
          },
          {
            name: 'Südstadt',
            body: 'At the Rheinauhafen in the Südstadt, many people work in offices overlooking the Rhine, while around Chlodwigplatz live people who have known the neighbourhood for decades. For the office crowd, the hour straight after work counts most: between 6 and 7:30 pm, within walking distance. Open that window for private sessions and personal training and show it online. The SMS reminder on the day of the session holds the slot when a meeting runs over. And when a team says goodbye to a colleague, it gives a voucher.',
          },
        ],
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
          {
            q: 'Many students in Sülz want a cheap trial session first. Can I give it its own price?',
            a: 'Yes. You set up the trial session as its own service with its own price and duration, for example 60 minutes for €12. You can ask for prepayment or a card on file for it too, so the cheap session doesn’t end up empty.',
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
        neighbourhoods: [
          {
            name: 'Marienburg',
            body: 'Marienburg is the villa district in the south of Cologne, with large gardens and clients who expect discretion. They prefer morning appointments with time for a proper conversation, and they often book through an assistant or by email. Draft mode pays off here: the AI receptionist drafts the reply and you read it before it goes out. Plan consultations generously, 45 minutes rather than 30. For longer treatments, charging the full price at booking is perfectly normal for these clients too.',
          },
          {
            name: 'Rodenkirchen',
            body: 'Rodenkirchen sits right on the Rhine, with a riverside promenade and the feel of a small town. Many families and older couples live here and don’t like driving into the city centre for a treatment. A local clinic becomes their regular address, and recommendations get around. Saturday morning appointments are in demand, when working people have time as well. Open that morning online and send reminders by SMS and email. Anyone going away for the weekend reschedules in the client portal, without you having to call back on Monday.',
          },
          {
            name: 'Junkersdorf',
            body: 'Junkersdorf in the west of Cologne is quiet, with family homes and tennis courts, and the stadium and the sports university nearby. Clients are sporty and often come for massages and wellness treatments that follow training and competitions. They book in the evening after sport, usually for the coming week. State the duration and price of every treatment precisely so nobody has to ask. Because training plans change at short notice, a card on file with a clear fee for cancellations under 24 hours helps.',
          },
          {
            name: 'Agnesviertel',
            body: 'In the Agnesviertel around Neusser Straße, many residents work in media, advertising and television and live in old buildings close to the city centre. Before a shooting day or a presentation the skin should look calm, so treatments are often booked a week ahead and moved just as often when the date shifts. The client portal saves you those phone calls. The AI receptionist answers questions after dinner from your own information. For treatments of an hour or more, take a deposit so that a reschedule doesn’t turn into a gap.',
          },
        ],
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
            a: 'Yes. You set VAT for each service individually. You export your sales in DATEV format, and your tax adviser works with them directly. Which rate applies to which service is best settled with your tax adviser.',
          },
          {
            q: 'At my clinic in Rodenkirchen a colleague treats clients two days a week. Can clients see who they are booking with?',
            a: 'Yes. Each team member has their own column in the calendar, and for every service you decide who offers it. On the booking page clients then see who the appointment is with, and on your colleague’s days her free times appear.',
          },
        ],
      },
    },
  },
}
