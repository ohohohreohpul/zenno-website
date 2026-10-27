import type { CityContentSet } from './types'

/** Hamburg: spread-out city, loyal regulars who expect reliability, clients from the suburbs and visitors from abroad. */
export const HAMBURG: CityContentSet = {
  de: {
    clientele:
      'Hamburg ist weitläufig. Wer in Eimsbüttel wohnt und in der HafenCity arbeitet, bucht dort, wo der Termin in den Tag passt, oft in der Mittagspause oder in der S-Bahn auf dem Heimweg. Die Kundschaft ist treu und erwartet Verlässlichkeit: eine klare Bestätigung, eine Erinnerung vor dem Termin und Preise, die vorher feststehen. Dazu kommen Gäste aus dem Ausland, die über Hafen, Messe und Kreuzfahrtterminal in die Stadt kommen und auf Englisch anfragen.',
    industries: {
      'salons-spas': {
        districts: ['Eppendorf', 'Winterhude', 'Eimsbüttel', 'Ottensen', 'Sternschanze', 'St. Georg'],
        hero: {
          title: ['Salons in Hamburg,', 'verlässlich gebucht.'],
          lead: 'Von Ottensen bis Winterhude bucht Ihre Stammkundschaft Schnitt, Farbe oder Massage direkt auf Ihrer Seite und sieht Preis und Dauer vorher. Bestätigung und Erinnerung kommen per SMS und E-Mail, und mit Treuepunkten kommt sie gern wieder.',
        },
        local: {
          title: ['Treue Kundschaft', 'erwartet einen Termin, der steht.'],
          paragraphs: [
            'In Eppendorf und Winterhude hat fast jede Straße ihren Friseur und ihre Nagelbar. Viele Kundinnen gehen seit Jahren zur selben Stylistin und erwarten, dass ein vereinbarter Termin genau so stattfindet. Mit Zenno buchen sie auf Ihrer eigenen Seite, sehen vorher Preis und Dauer und bekommen Bestätigung und Erinnerung per SMS und E-Mail. Verschieben geht über das Kundenportal, ohne Anruf in Ihrer Mittagspause.',
            'Stammkundinnen sammeln bei Ihnen Treuepunkte, und Gutscheine verkaufen Sie online, zum Geburtstag oder vor Weihnachten, auch an Menschen am anderen Ende der Stadt. In Ottensen und der Sternschanze fragen viele auf Englisch. Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch, Englisch oder Thai und gibt Beschwerden an Sie weiter.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Eppendorf',
            body: 'Am Eppendorfer Baum und an der Eppendorfer Landstraße ist die Kundschaft gut situiert, meist über vierzig, und kommt seit Jahren. Gefragt sind aufwendige Farbtechniken, Pflegebehandlungen und Termine, die drei Stunden dauern dürfen. Viele vereinbaren den nächsten Termin direkt beim Bezahlen, sechs Wochen im Voraus. Tragen Sie ihn gleich an der Kasse ein, dann kommen Bestätigung und Erinnerung automatisch. Für lange Farbtermine lohnt sich eine Anzahlung von 50 €, auch bei Stammkundinnen: Fällt so ein Termin kurzfristig aus, steht der Stuhl sonst einen halben Tag leer.',
          },
          {
            name: 'Eimsbüttel',
            body: 'Rund um die Osterstraße wohnen junge Familien in Altbauwohnungen, dazu Studierende von der nahen Uni. Am Samstagvormittag will das ganze Viertel gleichzeitig zum Friseur, Kinder inklusive, und unter der Woche bleiben Lücken. Legen Sie den Kinderhaarschnitt als eigene Leistung mit eigenem Preis und eigener Dauer an, damit der Kalender realistisch plant. Termine am Dienstag- oder Mittwochabend bis 20 Uhr füllen sich, sobald sie online sichtbar sind. Studierende vergleichen Preise, also sollte jeder Preis auf der Buchungsseite stehen.',
          },
          {
            name: 'Sternschanze',
            body: 'Am Schulterblatt beginnt der Tag später. Die Kundschaft arbeitet in Agenturen, in der Gastronomie oder freiberuflich, und gebucht wird ab Mittag, gern bis in den Abend. Gefragt sind kräftige Farben, Undercuts und Styling vor dem Wochenende. Die Schanze zieht auch Besucher an, die auf Englisch schreiben. Öffnen Sie lieber bis 20 Uhr als ab 8 Uhr, wenn Ihre Kundschaft so lebt. Für Farbtermine ab drei Stunden schützt eine hinterlegte Karte mit No-Show-Gebühr, und die englische Buchungsseite erspart Ihnen Rückfragen.',
          },
          {
            name: 'St. Georg',
            body: 'Zwischen Hauptbahnhof und Außenalster mischen sich in St. Georg Anwohner, Hotelgäste und Menschen, die nur einen Tag in der Stadt sind. An der Langen Reihe ist die Kundschaft vielfältig und oft männlich: Bartpflege, kurze Schnitte, Augenbrauen. Viele buchen für denselben Tag, manche schon im ICE. Bieten Sie kurze Leistungen von 20 oder 30 Minuten mit festem Preis an und halten Sie ein paar Zeiten am Nachmittag frei. Die englische Buchungsseite und die KI-Rezeption auf WhatsApp erreichen auch Gäste, die Hamburg nicht kennen.',
          },
        ],
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
          {
            q: 'Im Dezember will halb Eppendorf Gutscheine. Muss ich die alle am Tresen verkaufen?',
            a: 'Nein. Sie verkaufen Gutscheine online und am Tresen, eingelöst wird per QR-Code. Wer am Sonntagabend noch ein Geschenk braucht, kauft ihn auf Ihrer Seite und bekommt ihn per E-Mail. Wie Gutscheinverkäufe steuerlich zu buchen sind, besprechen Sie mit Ihrer Steuerberatung.',
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
            'Wer in Eimsbüttel wohnt und in der HafenCity arbeitet, entscheidet oft erst in der S-Bahn, ob die Yogastunde morgens vor dem Büro oder abends in Ottensen stattfindet. Ihre Zenno-Seite zeigt freie Zeiten und Preise auf einen Blick. Die Entscheidung dauert eine Minute, und die Buchung landet direkt bei Ihnen, auch wenn ein KI-Assistent die Suche übernimmt.',
            'Wenn der Regen quer über die Elbe zieht, bleiben manche lieber zu Hause. Für Einzelstunden und Personal Training verlangen Sie deshalb Vorkasse oder lassen die Karte hinterlegen und berechnen bei zu später Absage eine Gebühr. Erinnerungen per SMS und E-Mail gehen rechtzeitig raus, und wer verschieben muss, erledigt das selbst im Kundenportal, statt einfach wegzubleiben.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Ottensen',
            body: 'In Ottensen arbeiten viele in Agenturen und Medienbüros in alten Fabrikgebäuden, und viele haben kleine Kinder. Der Tag ist durchgetaktet: Kita um acht, Büro um neun, abends Familie. Was bleibt, ist der frühe Morgen. Einzelstunden um 6:45 oder 7:15 tragen hier das Geschäft. Öffnen Sie diese Zeiten online, damit niemand vorher anrufen muss. Die Erinnerung per SMS kommt rechtzeitig vor dem Termin, und wer wegen eines kranken Kindes absagt, verschiebt im Kundenportal.',
          },
          {
            name: 'Winterhude',
            body: 'Zwischen Stadtpark und Mühlenkamp wohnen viele Berufstätige zwischen Mitte dreißig und Mitte fünfzig, die schon laufen gehen und sich trotzdem um Rücken und Beweglichkeit kümmern wollen. Gebucht wird gern für Samstagvormittag und für den frühen Abend unter der Woche. Im Sommer trainieren viele lieber draußen. Legen Sie dafür Personal Training im Stadtpark als eigene Leistung mit Preis und Dauer an. Wer bei Ihnen regelmäßig kommt, sammelt Treuepunkte, und zum Geburtstag verschenkt die Familie einen Gutschein.',
          },
          {
            name: 'HafenCity',
            body: 'In der HafenCity stehen Bürotürme neben neuen Wohnungen, und viele, die hier wohnen, sind erst vor Kurzem nach Hamburg gezogen, oft aus dem Ausland. Ein Netzwerk aus Empfehlungen haben sie noch nicht. Sie suchen auf Englisch, häufig über KI-Assistenten, und buchen dort, wo Angebot und freie Zeiten sofort lesbar sind. Pflegen Sie die englische Buchungsseite deshalb genauso sorgfältig wie die deutsche. Gefragt sind Einzelstunden nach Feierabend, ab 18 Uhr, und am Sonntagvormittag, wenn die Wochenendtouristen noch nicht unterwegs sind.',
          },
          {
            name: 'Eimsbüttel',
            body: 'In Eimsbüttel wohnen Familien neben Studierenden, und beide Gruppen haben späte Zeitfenster. Eltern kommen, wenn die Kinder schlafen, also um halb neun abends. Studierende probieren erst einmal aus und achten auf den Preis. Bieten Sie eine Probestunde mit eigenem, günstigem Preis an und Einzelstunden um 20:30, die in anderen Vierteln kaum jemand anbietet. Gerade bei späten Terminen hilft eine hinterlegte Karte: Wer nach einem langen Tag doch auf dem Sofa bleibt, zahlt die Absagegebühr, die Sie festgelegt haben.',
          },
        ],
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
          {
            q: 'Meine ersten Einzelstunden beginnen um 6:30. Denken die Leute daran?',
            a: 'Bestätigung und Erinnerung gehen automatisch per SMS und E-Mail raus, Sie müssen niemandem schreiben. Wer morgens doch nicht kann, verschiebt selbst im Kundenportal. Für Absagen in letzter Minute legen Sie eine Gebühr fest, die über die hinterlegte Karte berechnet wird.',
          },
        ],
      },
      clinics: {
        districts: ['Eppendorf', 'Harvestehude', 'Rotherbaum', 'Winterhude', 'Blankenese', 'St. Georg'],
        hero: {
          title: ['Praxen in Hamburg,', 'mit Ruhe gebucht.'],
          lead: 'Zwischen Harvestehude und Blankenese erwartet Ihre Kundschaft Zurückhaltung und Verlässlichkeit. Mit Zenno bucht sie Beratung und Behandlung online und bekommt eine klare Bestätigung. Lange Behandlungen sichern Sie mit einer Anzahlung ab.',
        },
        local: {
          title: ['Rund um die Alster', 'zählt Verlässlichkeit.'],
          paragraphs: [
            'Ästhetik- und Wellnesspraxen in Eppendorf, Harvestehude und Rotherbaum haben Kundschaft aus dem Viertel, aus den Elbvororten und aus dem Umland. Wer eine Stunde Anfahrt einplant, möchte sich auf den Termin verlassen können. Zenno schickt Bestätigung und Erinnerung per SMS und E-Mail, und im Kundenportal lässt sich ein Termin verschieben, ohne dass Ihre Rezeption zurückrufen muss.',
            'Viele Fragen kommen schriftlich und in Ruhe, abends per E-Mail oder WhatsApp. Die KI-Rezeption beantwortet, was in Ihren Angaben steht: Ablauf, Dauer, Preise und freie Termine. Alles, was die Gesundheit betrifft, übergibt sie an Sie. Wenn Sie anfangs jede Antwort selbst prüfen möchten, arbeitet sie im Entwurfsmodus, und Sie geben frei, was verschickt wird. Für längere Behandlungen wird bei der Buchung eine Anzahlung fällig.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Harvestehude',
            body: 'An den Alsterufern von Harvestehude stehen Villen und große Altbauwohnungen, die Kundschaft ist wohlhabend, oft älter und schätzt Diskretion. Anfragen kommen per E-Mail, in ganzen Sätzen und mit Anrede, und erwarten eine Antwort im selben Ton. Hier lohnt sich der Entwurfsmodus: Die KI-Rezeption schreibt den Vorschlag, Sie passen die Formulierung an und schicken ihn ab. Gebucht werden längere Behandlungen am Vormittag. Eine Anzahlung bei der Buchung ist auch hier üblich, wenn sie freundlich erklärt ist.',
          },
          {
            name: 'Blankenese',
            body: 'Blankenese liegt weit im Westen, am Elbhang mit dem Treppenviertel, und die Praxen dort ziehen Kundschaft aus den Elbvororten und aus Wedel oder Pinneberg an. Viele kommen mit dem Auto und verbinden den Termin mit Erledigungen im Ort. Gebucht wird Wochen im Voraus, bevorzugt am Vormittag. Bei so langem Vorlauf ist die Erinnerung per SMS und E-Mail wichtiger als die Bestätigung. Wer den Termin verschieben muss, macht das im Kundenportal, und der Platz ist wieder buchbar, statt leer zu bleiben.',
          },
          {
            name: 'Rotherbaum',
            body: 'In Rotherbaum liegen die Universität und viele Konsulate, dazwischen das Grindelviertel mit seinen Altbauten. Die Kundschaft ist international: Lehrende, Diplomatenfamilien, Gäste, die für ein Semester bleiben. Viele fragen auf Englisch und haben unterschiedliche Erwartungen an Ablauf und Preise, je nachdem, wo sie herkommen. Schreiben Sie Ablauf und Preis jeder Leistung so konkret wie möglich auf, auf Deutsch und Englisch. Die KI-Rezeption beantwortet dann die meisten Fragen aus Ihren Angaben und gibt Gesundheitsfragen mit „Braucht Sie“ an Sie weiter.',
          },
          {
            name: 'St. Georg',
            body: 'Eine Praxis in St. Georg liegt ein paar Minuten vom Hauptbahnhof entfernt, und das zieht Kundschaft aus Lübeck, Lüneburg oder Kiel an, die mit dem Zug kommt. Diese Menschen planen den Termin um die Verbindung herum. Geben Sie deshalb die Dauer jeder Behandlung genau an, damit niemand den Rückzug verpasst. Weil die Anreise Aufwand ist, sagen sie selten ab, aber Verspätungen der Bahn passieren. Lassen Sie zwischen zwei Terminen fünfzehn Minuten Luft. Für Behandlungen ab einer Stunde nehmen Sie bei der Buchung eine Anzahlung.',
          },
        ],
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
            a: 'Ja. Im Entwurfsmodus schreibt sie Antwortvorschläge, und Sie entscheiden, was verschickt wird. Gesundheitsfragen und Beschwerden übergibt sie an Sie.',
          },
          {
            q: 'Viele Kundinnen kommen von außerhalb. Wie vermeide ich vergessene Termine?',
            a: 'Bestätigung und Erinnerung gehen automatisch per SMS und E-Mail raus. Wer nicht kann, verschiebt selbst im Kundenportal. Und wer ohne Absage fehlt, zahlt über die hinterlegte Karte die Gebühr, die Sie für No-Shows festlegen.',
          },
          {
            q: 'Meine Kundinnen aus Blankenese schreiben lieber E-Mails als WhatsApp. Geht beides?',
            a: 'Ja. Die KI-Rezeption antwortet auf WhatsApp unter Ihrer eigenen Nummer, per E-Mail und im Website-Chat. Wer schreibt, wählt den Weg selbst. Die Antworten kommen in allen drei Kanälen aus denselben Angaben zu Leistungen, Preisen und freien Zeiten.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'Hamburg is spread out. Someone who lives in Eimsbüttel and works in HafenCity books wherever the appointment fits the day, often over lunch or on the S-Bahn home. Clients are loyal and expect reliability: a clear confirmation, a reminder before the appointment and prices fixed in advance. On top of that come visitors from abroad, arriving for the port, the trade fair or a cruise, who ask in English.',
    industries: {
      'salons-spas': {
        districts: ['Eppendorf', 'Winterhude', 'Eimsbüttel', 'Ottensen', 'Sternschanze', 'St. Georg'],
        hero: {
          title: ['Salons in Hamburg,', 'with bookings that hold.'],
          lead: 'From Ottensen to Winterhude, your regulars book a cut, colour or massage straight on your page and see price and duration up front. Confirmations and reminders arrive by SMS and email, and loyalty points give them a reason to come back.',
        },
        local: {
          title: ['Loyal clients', 'expect the appointment to hold.'],
          paragraphs: [
            'In Eppendorf and Winterhude almost every street has its own hairdresser and nail bar. Many clients have seen the same stylist for years and expect a booked appointment to happen exactly as agreed. With Zenno they book on your own page, see price and duration up front, and get a confirmation and reminder by SMS and email. Rescheduling happens in the client portal, without a call during your lunch break.',
            'Regulars collect loyalty points with you, and you sell vouchers online for birthdays or Christmas, even to people on the other side of the city. In Ottensen and the Sternschanze many people write in English. The AI receptionist answers on WhatsApp, by email and in your website chat in German, English or Thai, and passes complaints on to you.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Eppendorf',
            body: 'Along Eppendorfer Baum and Eppendorfer Landstraße, clients are well off, mostly over forty, and have been coming for years. They ask for elaborate colour techniques, conditioning treatments and appointments that are allowed to take three hours. Many arrange the next visit while paying, six weeks ahead. Enter it at the till straight away and the confirmation and reminder go out on their own. For long colour appointments a €50 deposit makes sense even with regulars: if one falls through at short notice, the chair otherwise sits empty for half a day.',
          },
          {
            name: 'Eimsbüttel',
            body: 'Around Osterstraße, young families live in old apartment buildings alongside students from the nearby university. On Saturday morning the whole neighbourhood wants a haircut at once, children included, while weekdays leave gaps. Set up the children’s cut as its own service with its own price and duration so the calendar plans realistically. Tuesday and Wednesday evening slots until 8 pm fill up once they are visible online. Students compare prices, so every price belongs on the booking page.',
          },
          {
            name: 'Sternschanze',
            body: 'On Schulterblatt the day starts later. Clients work in agencies, in bars and restaurants or freelance, and bookings come in from midday and into the evening. Bold colours, undercuts and styling before the weekend are in demand. The Schanze also draws visitors who write in English. If that is how your clients live, open until 8 pm rather than from 8 am. For colour appointments of three hours or more, a card on file with a no-show fee protects you, and the English booking page saves you a lot of back and forth.',
          },
          {
            name: 'St. Georg',
            body: 'Between the main station and the Außenalster, St. Georg mixes residents, hotel guests and people in town for a single day. On Lange Reihe the clientele is diverse and often male: beard trims, short cuts, eyebrows. Many book for the same day, some from the ICE on the way in. Offer short 20- or 30-minute services at a fixed price and keep a few afternoon slots open. The English booking page and the AI receptionist on WhatsApp also reach guests who don’t know Hamburg at all.',
          },
        ],
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
          {
            q: 'In December half of Eppendorf wants vouchers. Do I have to sell them all at the counter?',
            a: 'No. You sell vouchers online and at the counter, and they are redeemed by QR code. Someone who needs a present on Sunday evening buys it on your page and gets it by email. How voucher sales are booked for tax purposes is something to settle with your tax adviser.',
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
            'Someone who lives in Eimsbüttel and works in HafenCity often decides on the S-Bahn whether yoga happens before the office or in Ottensen in the evening. Your Zenno page shows free times and prices at a glance. The decision takes a minute, and the booking lands directly with you, even when an AI assistant does the searching.',
            'When rain blows sideways across the Elbe, some people would rather stay home. For private sessions and personal training you therefore ask for prepayment, or keep a card on file and charge a fee for late cancellations. SMS and email reminders go out in good time, and anyone who needs to reschedule does it in the client portal instead of simply not turning up.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Ottensen',
            body: 'Many people in Ottensen work in agencies and media offices in old factory buildings, and many have small children. The day runs to a tight schedule: Kita at eight, office at nine, family in the evening. What is left is the early morning. Private sessions at 6:45 or 7:15 are the core of the business here. Open those slots online so nobody has to call first. The SMS reminder arrives ahead of the session, and anyone who cancels because a child is ill moves the booking in the client portal.',
          },
          {
            name: 'Winterhude',
            body: 'Between the Stadtpark and Mühlenkamp live many professionals between their mid-thirties and mid-fifties who already run and still want to look after their back and mobility. They like Saturday mornings and early weekday evenings. In summer many would rather train outdoors. Set up personal training in the Stadtpark as its own service with a price and duration. Clients who come regularly collect loyalty points, and for birthdays the family gives a voucher.',
          },
          {
            name: 'HafenCity',
            body: 'In HafenCity, office towers stand next to new apartment blocks, and many residents have only recently moved to Hamburg, often from abroad. They don’t have a network of recommendations yet. They search in English, often through AI assistants, and book wherever offers and free times are readable at once. So keep the English booking page as carefully as the German one. Private sessions after work, from 6 pm, are in demand, and so is Sunday morning, before the weekend tourists arrive.',
          },
          {
            name: 'Eimsbüttel',
            body: 'Families live next to students in Eimsbüttel, and both groups have late time windows. Parents come once the children are asleep, around half past eight. Students want to try things out first and watch the price. Offer a trial session at its own lower price, plus private sessions at 20:30, which hardly anyone in other neighbourhoods offers. Late slots are where a card on file helps most: anyone who stays on the sofa after a long day pays the cancellation fee you have set.',
          },
        ],
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
          {
            q: 'My first private sessions start at 6:30. Will people remember?',
            a: 'Confirmations and reminders go out automatically by SMS and email, so you don’t have to message anyone. Anyone who can’t make it reschedules in the client portal. For last-minute cancellations you set a fee that is charged to the card on file.',
          },
        ],
      },
      clinics: {
        districts: ['Eppendorf', 'Harvestehude', 'Rotherbaum', 'Winterhude', 'Blankenese', 'St. Georg'],
        hero: {
          title: ['Clinics in Hamburg,', 'booked with calm.'],
          lead: 'Between Harvestehude and Blankenese, clients expect discretion and reliability. With Zenno they book consultations and treatments online and get a clear confirmation. You secure long treatments with a deposit.',
        },
        local: {
          title: ['Around the Alster,', 'reliability is what counts.'],
          paragraphs: [
            'Aesthetic and wellness clinics in Eppendorf, Harvestehude and Rotherbaum see clients from the neighbourhood, from the Elbe suburbs and from the surrounding countryside. Someone who plans an hour’s drive wants to rely on the appointment. Zenno sends confirmations and reminders by SMS and email, and the client portal lets people reschedule without your front desk having to call back.',
            'Many questions arrive in writing and at leisure, in the evening by email or WhatsApp. The AI receptionist answers what is in your own information: process, duration, prices and free appointments. Anything to do with health is handed to you. If you want to check every reply at first, it works in draft mode and you approve what goes out. For longer treatments a deposit is due at booking.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Harvestehude',
            body: 'Along the Alster in Harvestehude stand villas and large period apartments, and clients are wealthy, often older, and value discretion. Enquiries come by email, in full sentences with a proper greeting, and expect a reply in the same tone. Draft mode pays off here: the AI receptionist writes the suggestion, you adjust the wording and send it. Longer treatments are booked for the morning. A deposit at booking is accepted here as well, as long as it is explained politely.',
          },
          {
            name: 'Blankenese',
            body: 'Blankenese lies far to the west, on the Elbe slope with its Treppenviertel, and clinics there draw clients from the Elbe suburbs and from Wedel or Pinneberg. Many come by car and combine the appointment with errands in the village. They book weeks ahead, preferably in the morning. With that much lead time, the SMS and email reminder matters more than the confirmation. Anyone who has to reschedule does it in the client portal, and the slot is free to book again instead of sitting empty.',
          },
          {
            name: 'Rotherbaum',
            body: 'Rotherbaum is home to the university and many consulates, with the Grindelviertel and its old buildings in between. Clients are international: lecturers, diplomatic families, guests staying for a semester. Many ask in English and expect different things from the process and the pricing, depending on where they come from. Write up the process and price of each service as concretely as you can, in German and English. The AI receptionist then answers most questions from your information and passes health questions to you marked “Needs you”.',
          },
          {
            name: 'St. Georg',
            body: 'A clinic in St. Georg is a few minutes from the main station, which brings in clients from Lübeck, Lüneburg or Kiel who arrive by train. They plan the appointment around their connection, so state the exact duration of every treatment and nobody misses the train home. Because the journey takes effort, they rarely cancel, but train delays happen. Leave fifteen minutes between two appointments. For treatments of an hour or more, take a deposit at booking.',
          },
        ],
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
            a: 'Yes. In draft mode it writes suggested replies and you decide what is sent. Health questions and complaints are handed to you.',
          },
          {
            q: 'Many clients travel in from outside the city. How do I avoid forgotten appointments?',
            a: 'Confirmations and reminders go out automatically by SMS and email. Anyone who can’t make it reschedules in the client portal. And anyone who misses the appointment without cancelling pays the no-show fee you set, charged to the card on file.',
          },
          {
            q: 'My clients in Blankenese would rather email than use WhatsApp. Can I offer both?',
            a: 'Yes. The AI receptionist answers on WhatsApp under your own number, by email and in your website chat. The client picks the channel. On all three, the answers come from the same information about your services, prices and free times.',
          },
        ],
      },
    },
  },
}
