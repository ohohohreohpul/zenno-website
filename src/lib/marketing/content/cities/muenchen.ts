import type { CityContentSet } from './types'

/** München: demanding, well-organised clientele, many international residents, and the Wiesn rush every September. */
export const MUENCHEN: CityContentSet = {
  de: {
    clientele:
      'In München ist die Kundschaft anspruchsvoll und gut organisiert. Viele planen Termine Wochen im Voraus, erwarten Pünktlichkeit und zahlen gern für Qualität. Dazu kommt eine große internationale Gemeinde, von Fachkräften in Technik und Industrie bis zu Familien, die auf Englisch anfragen. Einmal im Jahr verschiebt die Wiesn alles: Ab Mitte September sind Haar- und Stylingtermine so gefragt wie sonst nie.',
    industries: {
      'salons-spas': {
        districts: ['Schwabing', 'Glockenbachviertel', 'Haidhausen', 'Maxvorstadt', 'Bogenhausen', 'Neuhausen'],
        hero: {
          title: ['Salons in München,', 'zur Wiesn voll, aber bezahlt.'],
          lead: 'Ob Flechtfrisur um halb acht oder Farbe vor dem Urlaub: Ihre Kundschaft bucht direkt auf Ihrer Seite, auf Deutsch oder Englisch, und auch KI-Assistenten können bei Ihnen buchen. Mit Vorkasse ist jeder Wiesn-Termin bezahlt, bevor er beginnt.',
        },
        local: {
          title: ['Zwei Wochen Wiesn,', 'das ganze Jahr Stammkundschaft.'],
          paragraphs: [
            'Wenn im September die Wiesn beginnt, wollen in Schwabing, Haidhausen und im Glockenbachviertel plötzlich alle gleichzeitig eine Flechtfrisur, am liebsten früh am Morgen, bevor die Zelte öffnen. Mit Zenno legen Sie diese zusätzlichen Zeiten als freie Termine an, Ihre Kundschaft bucht sie online, und für Wiesn-Termine verlangen Sie den vollen Preis bei der Buchung. Wer dann nicht erscheint, hat trotzdem bezahlt.',
            'Den Rest des Jahres zählt Verlässlichkeit. Ihre Kundschaft in Bogenhausen oder der Maxvorstadt plant Schnitt und Farbe oft Wochen voraus und erwartet eine Erinnerung, bevor der Termin ansteht. Die kommt automatisch per SMS und E-Mail. Stammkundinnen sammeln Treuepunkte, und für internationale Kundschaft antwortet die KI-Rezeption auf Englisch, auf WhatsApp genauso wie im Website-Chat.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Glockenbachviertel',
            body: 'Rund um den Gärtnerplatz und die Müllerstraße ist die Kundschaft jung, kreativ und gut vernetzt, und die queere Szene des Viertels gehört seit Jahrzehnten dazu. Gefragt sind Trendschnitte, Farbe und Herrenstyling. Gebucht wird am Donnerstag- und Freitagabend, bevor es ausgeht, oft auf Englisch und oft erst am Vortag. Halten Sie freitags bis 20 Uhr offen und machen Sie diese Zeiten online sichtbar. Für Farbtermine über zwei Stunden schützt eine hinterlegte Karte mit No-Show-Gebühr den Abend, an dem Sie am meisten verdienen.',
          },
          {
            name: 'Bogenhausen',
            body: 'In Bogenhausen stehen Villen und Konsulate, und die Kundschaft ist wohlhabend und oft international: Familien von Diplomaten, Führungskräfte, die ein paar Jahre in München bleiben. Neben Schnitt und Farbe werden längere Beauty- und Spa-Behandlungen gebucht, gern am Vormittag. Viele schreiben auf Englisch und erwarten eine schnelle, höfliche Antwort. Die KI-Rezeption antwortet auf WhatsApp und per E-Mail, auch am Abend. Gutscheine verkaufen sich hier gut, online wie am Tresen. Für Behandlungen ab 120 € lohnt eine Anzahlung bei der Buchung.',
          },
          {
            name: 'Neuhausen',
            body: 'Neuhausen rund um den Rotkreuzplatz ist ein Wohnviertel mit vielen Familien und Stammkundinnen, die seit Jahren zum selben Salon gehen. Zur Wiesn ändert sich das: Die Theresienwiese ist nicht weit, und ab sieben Uhr morgens wollen Gäste geflochten werden, bevor sie zum Festgelände aufbrechen. Legen Sie die Wiesn-Flechtfrisur als eigene Leistung mit eigenem Preis an und verlangen Sie den vollen Preis bei der Buchung. Nach den zwei Wochen gehört der Kalender wieder den Stammkundinnen, und die Wiesn-Zeiten verschwinden.',
          },
          {
            name: 'Haidhausen',
            body: 'Im Franzosenviertel und rund um den Wiener Platz wohnen viele Berufstätige in Altbauwohnungen, und nicht weit davon arbeiten viele im Werksviertel am Ostbahnhof. Das bringt Termine in der Mittagspause: Maniküre, Augenbrauen, ein schneller Pony-Schnitt. Nach Feierabend kommt Föhnen vor dem Abendessen dazu. Legen Sie diese kurzen Leistungen mit genauer Dauer an, 20 oder 30 Minuten, damit sie zwischen längeren Terminen Platz finden. Bestätigung und Erinnerung per SMS sorgen dafür, dass niemand die Mittagspause verplant.',
          },
        ],
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
          {
            q: 'Zur Wiesn arbeite ich mit zwei Aushilfen. Bekommen die eigene Spalten im Kalender?',
            a: 'Ja. Der Kalender zeigt jede Person aus Ihrem Team in einer eigenen Spalte. Sie legen fest, wer welche Leistung anbietet, und die Kundschaft sieht bei der Buchung, bei wem sie sitzt. Nach der Wiesn nehmen Sie die Aushilfen einfach wieder aus dem Plan.',
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
            'München bewegt sich gern draußen, an der Isar und am Wochenende in den Bergen. Ins Studio kommt man unter der Woche, morgens vor der Arbeit oder abends in Schwabing und Haidhausen. Wer dann eine passende Zeit sucht, bucht dort, wo sie sofort sichtbar ist. Auf Ihrer Zenno-Seite finden Menschen und KI-Assistenten Ihre Angebote mit Preis und freien Zeiten und buchen direkt.',
            'In der Maxvorstadt kommen Studierende und internationale Fachkräfte dazu, und viele davon fragen auf Englisch. Die KI-Rezeption beantwortet Fragen zu Ablauf und Preisen auf WhatsApp, per E-Mail und im Website-Chat in der Sprache, in der geschrieben wird. Für Einzelstunden verlangen Sie Vorkasse oder eine hinterlegte Karte, damit eine kurzfristige Absage vor einem Brückentag nicht zu Ihrem Verlust wird.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Schwabing',
            body: 'In Schwabing wohnen neben jungen Berufstätigen viele, die schon lange hier leben und tagsüber Zeit haben, manche im Ruhestand. Diese Kundschaft bucht Einzelstunden am Vormittag um zehn oder elf, wenn die Studios sonst leer sind, und bleibt oft jahrelang. Gefragt sind ruhige Stunden mit Fokus auf Beweglichkeit. Viele schreiben lieber eine Nachricht, als ein Online-Formular auszufüllen; die KI-Rezeption nimmt die Anfrage auf WhatsApp an und bucht einen echten freien Termin. Treuepunkte passen zu dieser treuen Kundschaft.',
          },
          {
            name: 'Maxvorstadt',
            body: 'Zwischen den Universitäten und den Pinakotheken ist die Maxvorstadt ein Viertel der Studierenden und Lehrenden, viele davon aus dem Ausland. Sie entscheiden spontan, oft am selben Abend, und vergleichen Preise. Der Einstieg ist fast immer eine Probestunde. Geben Sie ihr einen eigenen, günstigen Preis, zum Beispiel 15 €, und zeigen Sie ihn auf der englischen Buchungsseite genauso klar wie auf der deutschen. Gerade bei günstigen Probestunden hilft die hinterlegte Karte, damit eine Buchung nicht nur eine Option bleibt.',
          },
          {
            name: 'Sendling',
            body: 'Sendling ist ein ruhiges Wohnviertel am Westpark, mit kurzen Wegen zur Isar und vielen Menschen, die zumindest teilweise von zu Hause arbeiten. Das öffnet ein Zeitfenster, das in der Innenstadt kaum existiert: die Mittagsstunde zwischen 12 und 14 Uhr, direkt um die Ecke. Bieten Sie Einzelstunden von 45 Minuten zur Mittagszeit an, mit festem Preis. Diese Kundschaft bucht oft für mehrere Wochen im Voraus, weil der Homeoffice-Tag feststeht. Erinnerungen per SMS helfen, dass der Termin nicht im nächsten Videocall untergeht.',
          },
          {
            name: 'Neuhausen',
            body: 'Zwischen Rotkreuzplatz und Nymphenburger Park wechseln sich viele Eltern am Wochenende ab: Einer geht mit den Kindern in den Park, der andere nimmt sich eine Stunde für sich. Samstag- und Sonntagvormittag sind deshalb gefragt, und zwar früh, ab acht Uhr. Öffnen Sie diese Zeiten online, damit beide Elternteile ohne Absprache mit Ihnen buchen können. Zum Geburtstag oder zum Muttertag schenkt die Familie gern eine Einzelstunde als Gutschein, den Sie online verkaufen.',
          },
        ],
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
          {
            q: 'Im Sommer gebe ich Personal Training im Englischen Garten. Geht das über Zenno?',
            a: 'Ja. Sie legen es als eigene Leistung an, etwa „Personal Training im Englischen Garten, 60 Min.“, mit eigenem Preis. Gebucht und bezahlt wird wie bei jeder anderen Stunde, und Erinnerungen gehen per SMS und E-Mail raus.',
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
            'Fällt eine zweistündige Behandlung kurzfristig aus, fehlt Ihnen der Umsatz eines halben Vormittags. Deshalb kann bei der Buchung eine Anzahlung oder der volle Preis fällig werden, bezahlt über Stripe. Die KI-Rezeption beantwortet Fragen zu Dauer, Ablauf und Preisen aus Ihren Angaben, auf Deutsch oder Englisch. Medizinische Fragen beantwortet sie nicht: Sie markiert den Chat und übergibt ihn an Sie.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Bogenhausen',
            body: 'In Bogenhausen leben viele internationale Familien, oft für einige Jahre wegen des Jobs in München. Sie kennen ästhetische Behandlungen aus anderen Ländern und fragen genau nach, auf Englisch und schriftlich: Wie läuft die Beratung ab, was kostet die Behandlung, wie viele Termine braucht es? Beschreiben Sie jede Leistung auf Deutsch und Englisch mit Ablauf, Dauer und Preis. Die KI-Rezeption beantwortet diese Fragen daraus. Ob eine Behandlung für jemanden geeignet ist, klärt sie nicht; das landet mit „Braucht Sie“ bei Ihnen.',
          },
          {
            name: 'Lehel',
            body: 'Das Lehel liegt zwischen Altstadt und Isar, mit alten Bürgerhäusern und vielen Büros von Kanzleien, Versicherungen und Beratungen in der Nähe. Die Kundschaft arbeitet lange und kommt am liebsten direkt nach Feierabend, zwischen 18 und 20 Uhr. Wer an zwei Abenden pro Woche länger öffnet, füllt diese Zeiten schnell. Gebucht wird spät am Abend, oft vom Büro aus. Für Behandlungen ab einer Stunde lohnt eine Anzahlung, denn ein verschobenes Meeting ist hier der häufigste Grund für eine kurzfristige Absage.',
          },
          {
            name: 'Nymphenburg',
            body: 'Rund um Schloss und Park Nymphenburg ist es ruhig, die Straßen sind grün, und viele Familien wohnen seit Generationen hier. Behandlungen werden um den Schulalltag geplant: vormittags, wenn die Kinder in der Schule sind. In den bayerischen Schulferien verreisen viele, und der Kalender wird lückenhaft. Erinnern Sie per SMS und E-Mail rechtzeitig vor dem Termin, denn gebucht wird hier oft sechs bis acht Wochen im Voraus. Wer die Reise doch anders plant, verschiebt im Kundenportal, und Sie sehen die Lücke sofort.',
          },
          {
            name: 'Schwabing',
            body: 'An der Leopoldstraße und in den Seitenstraßen wohnen viele Berufstätige um die dreißig. Sie kommen oft für Behandlungen, die in Serien laufen, etwa Laser-Haarentfernung alle paar Wochen. Der Termin muss in den Arbeitsalltag passen, am besten am frühen Abend. Bieten Sie an, den nächsten Termin direkt nach der Sitzung zu buchen, oder verweisen Sie auf die Buchungsseite. Über das Kundenportal verschiebt die Kundschaft selbst, wenn eine Dienstreise dazwischenkommt, und die Erinnerung per SMS kommt vor jedem Termin.',
          },
        ],
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
          {
            q: 'Meine Kundschaft arbeitet bei internationalen Firmen und meldet sich erst abends. Muss dann jemand an der Rezeption sein?',
            a: 'Nein. Die Buchungsseite nimmt Termine rund um die Uhr an, und die KI-Rezeption beantwortet abends Fragen zu Ablauf, Preisen und freien Zeiten, auf Deutsch oder Englisch. Gesundheitsfragen markiert sie mit „Braucht Sie“, und Sie beantworten sie am nächsten Morgen selbst.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'Munich clients are demanding and well organised. Many plan appointments weeks ahead, expect punctuality and are happy to pay for quality. There is also a large international community, from engineers and tech professionals to families, who ask in English. Once a year the Wiesn turns everything upside down: from mid-September, hair and styling appointments are in higher demand than at any other time.',
    industries: {
      'salons-spas': {
        districts: ['Schwabing', 'Glockenbachviertel', 'Haidhausen', 'Maxvorstadt', 'Bogenhausen', 'Neuhausen'],
        hero: {
          title: ['Salons in Munich,', 'fully booked for the Wiesn, and paid.'],
          lead: 'Braids at 7:30 or colour before a holiday: clients book straight on your page, in German or English, and your page is ready for AI assistants to book you too. With prepayment, every Wiesn slot is paid before it starts.',
        },
        local: {
          title: ['Two weeks of Wiesn,', 'a whole year of regulars.'],
          paragraphs: [
            'When the Wiesn starts in September, everyone in Schwabing, Haidhausen and the Glockenbachviertel suddenly wants braided hair at the same time, ideally early in the morning before the tents open. With Zenno you add these extra hours as free appointments, clients book them online, and for Wiesn slots you charge the full price at booking. Anyone who doesn’t turn up has still paid.',
            'For the rest of the year, reliability is what matters. Your clients in Bogenhausen or the Maxvorstadt plan cuts and colour weeks ahead and expect a reminder before the day, which goes out automatically by SMS and email. Regulars collect loyalty points, and for international clients the AI receptionist answers in English, on WhatsApp as well as in your website chat.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Glockenbachviertel',
            body: 'Around Gärtnerplatz and Müllerstraße, clients are young, creative and well connected, and the neighbourhood’s queer scene has been part of it for decades. Trend cuts, colour and men’s styling are in demand. Bookings come in for Thursday and Friday evening before people go out, often in English and often only the day before. Stay open until 8 pm on Fridays and make those hours visible online. For colour appointments over two hours, a card on file with a no-show fee protects the evening when you earn the most.',
          },
          {
            name: 'Bogenhausen',
            body: 'Bogenhausen is an area of villas and consulates, and clients are wealthy and often international: diplomatic families, executives posted to Munich for a few years. Besides cuts and colour they book longer beauty and spa treatments, usually in the morning. Many write in English and expect a quick, polite reply. The AI receptionist answers on WhatsApp and by email, in the evening as well. Vouchers sell well here, online and at the counter. For treatments from €120 upwards, a deposit at booking makes sense.',
          },
          {
            name: 'Neuhausen',
            body: 'Neuhausen around Rotkreuzplatz is a residential area with many families and regulars who have gone to the same salon for years. The Wiesn changes that: the Theresienwiese isn’t far, and from seven in the morning guests want braids before they head to the grounds. Set up Wiesn braids as a separate service with its own price and charge the full amount at booking. After the two weeks, the calendar belongs to the regulars again and the Wiesn slots disappear.',
          },
          {
            name: 'Haidhausen',
            body: 'In the Franzosenviertel and around Wiener Platz, many professionals live in period apartments, and plenty of people work nearby in the Werksviertel by the Ostbahnhof. That brings lunchtime bookings: a manicure, eyebrows, a quick fringe trim. After work, a blow-dry before dinner joins the list. Set these short services up with an exact duration, 20 or 30 minutes, so they fit between longer appointments. The SMS confirmation and reminder make sure nobody double-books their lunch break.',
          },
        ],
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
          {
            q: 'During the Wiesn I work with two extra stylists. Do they get their own calendar columns?',
            a: 'Yes. The calendar shows each team member in a column of their own. You decide who offers which service, and clients see at booking whose chair they will be in. After the Wiesn you take the extra stylists off the schedule again.',
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
            'Munich likes to move outdoors, along the Isar and in the mountains at the weekend. The studio is for weekdays, before work or in the evening in Schwabing and Haidhausen. Whoever is looking for a slot then books where it is visible right away. On your Zenno page, people and AI assistants find your offers with prices and free times and book directly.',
            'In the Maxvorstadt, students and international professionals join the mix, and many of them ask in English. The AI receptionist answers questions about the session and prices on WhatsApp, by email and in your website chat, in the language the client writes in. For private sessions you ask for prepayment or a card on file, so a last-minute cancellation before a long weekend doesn’t become your loss.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Schwabing',
            body: 'Alongside young professionals, Schwabing is home to many long-time residents with free time during the day, some of them retired. They book private sessions at ten or eleven in the morning, when studios are otherwise empty, and often stay for years. Calm sessions focused on mobility are what they ask for. Many would rather send a message than fill in an online form; the AI receptionist takes the request on WhatsApp and books a real free slot. Loyalty points suit such a loyal clientele.',
          },
          {
            name: 'Maxvorstadt',
            body: 'Between the universities and the Pinakotheken, the Maxvorstadt belongs to students and lecturers, many of them from abroad. They decide on the spur of the moment, often the same evening, and compare prices. Almost everyone starts with a trial session. Give it its own low price, for example €15, and show it as clearly on the English booking page as on the German one. With cheap trial sessions in particular, a card on file keeps a booking from being just a maybe.',
          },
          {
            name: 'Sendling',
            body: 'Sendling is a quiet residential area by the Westpark, close to the Isar, where many people work from home at least part of the week. That opens a window that barely exists in the city centre: the lunch hour between 12 and 2, right around the corner. Offer 45-minute private sessions at lunchtime at a fixed price. These clients often book several weeks ahead because their home-office day is fixed. SMS reminders keep the session from getting lost behind the next video call.',
          },
          {
            name: 'Neuhausen',
            body: 'Between Rotkreuzplatz and the Nymphenburg park, many parents take turns at the weekend: one goes to the park with the children while the other takes an hour for themselves. Saturday and Sunday mornings are therefore in demand, and early, from eight o’clock. Open those slots online so both parents can book without arranging it with you. For birthdays or Mother’s Day, families like to give a private session as a voucher, which you sell online.',
          },
        ],
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
          {
            q: 'In summer I give personal training in the Englischer Garten. Can I run that through Zenno?',
            a: 'Yes. You set it up as its own service, for example “Personal training in the Englischer Garten, 60 min”, with its own price. Booking and payment work as for any other session, and reminders go out by SMS and email.',
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
            'When a two-hour treatment falls through at short notice, you lose half a morning’s takings. That is why a deposit or the full price can be due at booking, paid through Stripe. The AI receptionist answers questions about duration, process and prices from your own information, in German or English. It does not answer medical questions: it flags the chat and hands it to you.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Bogenhausen',
            body: 'Many international families live in Bogenhausen, often for a few years because of a job in Munich. They know aesthetic treatments from other countries and ask precise questions, in English and in writing: how does the consultation work, what does the treatment cost, how many sessions does it take? Describe every service in German and English with its process, duration and price. The AI receptionist answers from that. Whether a treatment suits someone is not something it decides; that question reaches you marked “Needs you”.',
          },
          {
            name: 'Lehel',
            body: 'The Lehel lies between the old town and the Isar, with old townhouses and plenty of law firms, insurers and consultancies nearby. Clients work long hours and prefer to come straight after work, between 6 and 8 pm. If you stay open late two evenings a week, those slots fill quickly. People book late at night, often from the office. For treatments of an hour or more a deposit makes sense, because a moved meeting is the most common reason for a short-notice cancellation here.',
          },
          {
            name: 'Nymphenburg',
            body: 'Around the palace and park of Nymphenburg it is quiet and green, and many families have lived here for generations. Treatments are planned around the school day: in the morning, while the children are at school. During the Bavarian school holidays many go away, and the calendar fills with gaps. Bookings here are often made six to eight weeks ahead, so the SMS and email reminder before the appointment matters. If travel plans change, the client moves the appointment in the client portal and you see the gap straight away.',
          },
          {
            name: 'Schwabing',
            body: 'Along Leopoldstraße and its side streets live many professionals around thirty. They often come for treatments that run as a series, such as laser hair removal every few weeks. Each appointment has to fit the working week, ideally in the early evening. Offer to book the next session right after the current one, or point clients to the booking page. When a business trip gets in the way, clients reschedule themselves in the client portal, and an SMS reminder goes out before every appointment.',
          },
        ],
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
          {
            q: 'My clients work for international companies and only get in touch in the evening. Does someone need to staff the front desk then?',
            a: 'No. The booking page takes appointments around the clock, and in the evening the AI receptionist answers questions about the process, prices and free times in German or English. Health questions are marked “Needs you”, and you answer them yourself the next morning.',
          },
        ],
      },
    },
  },
}
