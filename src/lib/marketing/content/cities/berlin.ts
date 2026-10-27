import type { CityContentSet } from './types'

/** Berlin: international, English-speaking clientele, late bookers, many small owner-run studios. */
export const BERLIN: CityContentSet = {
  de: {
    clientele:
      'In Berlin bucht ein großer Teil der Kundschaft auf Englisch, oft spontan und oft spät am Abend. Viele Studios sind klein und inhabergeführt. Das Telefon klingelt mitten in der Behandlung, und wer nicht sofort antwortet, verliert die Anfrage an das nächste Studio zwei Straßen weiter.',
    industries: {
      'salons-spas': {
        districts: ['Prenzlauer Berg', 'Kreuzberg', 'Neukölln', 'Friedrichshain', 'Charlottenburg', 'Mitte'],
        hero: {
          title: ['Salons in Berlin,', 'gebucht auch um Mitternacht.'],
          lead: 'Von Neukölln bis Charlottenburg bucht Ihre Kundschaft den Schnitt am Samstag oder die Massage nach Feierabend direkt auf Ihrer Seite, auf Deutsch oder Englisch. Auch KI-Assistenten können bei Ihnen buchen, und Anzahlungen sichern lange Termine ab.',
        },
        local: {
          title: ['Berlin bucht spontan.', 'Ihr Kalender sollte mithalten.'],
          paragraphs: [
            'Zwischen Kreuzberg und Prenzlauer Berg liegen auf wenigen Straßen Dutzende Friseure, Kosmetik- und Nagelstudios. Wer abends um elf eine freie Zeit für Samstag sucht, nimmt den Salon, bei dem die Buchung sofort klappt. Mit Zenno sieht die Kundschaft Ihre echten freien Zeiten, Ihre Preise und wer im Team arbeitet, und bucht ohne Anruf.',
            'Für Balayage, Extensions oder lange Spa-Behandlungen verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis. Ein geplatzter Termin am Samstagvormittag kostet Sie dann nichts mehr. Buchungsseite und KI-Rezeption antworten auf Deutsch und Englisch, während Sie bei der Kundin am Stuhl bleiben.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Neukölln',
            body: 'Im Reuterkiez und rund um die Weserstraße wohnen viele, die erst seit ein paar Jahren in Berlin sind. Sie arbeiten freiberuflich oder in Start-ups, sprechen im Alltag Englisch und buchen spät am Abend für den nächsten oder übernächsten Tag. Gefragt sind Farbe, Bleaching und Schnitte abseits vom Standard, und die Preise werden genau verglichen. Pflegen Sie die englische Buchungsseite deshalb so vollständig wie die deutsche, mit Preis und Dauer für jede Farbbehandlung. Wer Sie vier Stunden blockiert, zahlt 40 € Anzahlung.',
          },
          {
            name: 'Prenzlauer Berg',
            body: 'Rund um den Kollwitzplatz und die Kastanienallee leben viele junge Familien, und der Tag richtet sich nach der Kita. Zwischen halb neun und halb drei ist ein Fenster frei, und genau darin wollen Mütter und Väter einen Schnitt oder eine Maniküre unterbringen. Kurz vor der Abholung wird es eng, Pünktlichkeit zählt also auf beiden Seiten. Bieten Sie in diesem Fenster feste Termine von 45 Minuten an. Wird ein Kind krank, verschiebt die Kundin selbst im Kundenportal, und der Platz ist sofort wieder buchbar.',
          },
          {
            name: 'Charlottenburg',
            body: 'Zwischen Savignyplatz und Kurfürstendamm ist die Kundschaft älter und sehr treu. Viele kommen seit Jahren alle fünf oder sechs Wochen zur selben Friseurin, gern am Dienstag- oder Donnerstagvormittag, und sind es gewohnt, anzurufen. Das dürfen sie weiter tun: Sie tragen den Termin in den Kalender ein, und die Erinnerung per SMS geht trotzdem automatisch raus. Manche buchen nach ein paar Monaten von selbst online. Treuepunkte passen gut zu dieser Kundschaft, ebenso Gutscheine, die Enkel zum Geburtstag online kaufen.',
          },
          {
            name: 'Mitte',
            body: 'Rund um den Hackeschen Markt und die Torstraße sind mehr Menschen unterwegs, als dort wohnen: Hotelgäste, Touristinnen, Leute aus den Büros. Sie suchen kurzfristig, oft für denselben Tag, etwa Föhnen vor dem Abendessen oder eine Maniküre vor dem Termin um vier. Viele schreiben auf Englisch und kennen Ihren Salon noch nicht. Legen Sie für diese Kundschaft kurze Leistungen mit festem Preis an, zum Beispiel Föhnen für 35 € in 30 Minuten. Bei Neukundinnen schützt eine hinterlegte Karte mit No-Show-Gebühr Ihre Zeit.',
          },
        ],
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Hast du für Samstag einen Friseur in Neukölln mit freiem Termin für Balayage?' },
            { from: 'bot', text: 'Salon Kiez hat Sa. 10:30 frei, Balayage mit Jule, 2,5 Std., 30 € Anzahlung. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, mach' },
            { from: 'bot', text: 'Gebucht, direkt bei Salon Kiez. Die Bestätigung kommt per E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Salon Kiez · ohne Provision',
        },
        faq: [
          {
            q: 'Viele meiner Kundinnen sprechen kein Deutsch. Geht das?',
            a: 'Ja. Die Buchungsseite gibt es auf Deutsch und Englisch. Die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat in der Sprache, in der geschrieben wird, also auf Deutsch, Englisch oder Thai.',
          },
          {
            q: 'Ich arbeite allein im Salon. Wer nimmt Anfragen an, während ich schneide?',
            a: 'Die Buchungsseite nimmt Termine rund um die Uhr an, und die KI-Rezeption beantwortet Nachrichten zu Preisen und freien Zeiten. Alles landet in Ihrem Kalender; Beschwerden und Sonderfälle übergibt sie an Sie.',
          },
          {
            q: 'Mein Salon in Neukölln ist klein, ich nutze die Kleinunternehmerregelung. Kann ich trotzdem Anzahlungen nehmen?',
            a: 'Ja. Zenno unterstützt die Kleinunternehmerregelung nach § 19 UStG, und Anzahlungen laufen wie bei allen anderen über Stripe. Wie Anzahlungen in Ihrer Buchhaltung zu behandeln sind, klären Sie mit Ihrer Steuerberatung. Die Daten dafür exportieren Sie im DATEV-Format.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Prenzlauer Berg', 'Kreuzberg', 'Friedrichshain', 'Mitte', 'Neukölln', 'Schöneberg'],
        hero: {
          title: ['Yogastudios in Berlin,', 'gebucht vom Handy aus.'],
          lead: 'Probestunde, Einzelstunde oder Personal Training: In Berlin suchen viele auf Englisch und auf dem Handy. Mit Zenno buchen sie direkt bei Ihnen, auch über KI-Assistenten, und für No-Shows zahlt die Kundschaft statt Ihnen.',
        },
        local: {
          title: ['Viele Studios, kurze Wege.', 'Wer zuerst antwortet, bekommt die Probestunde.'],
          paragraphs: [
            'In Prenzlauer Berg, Kreuzberg und Friedrichshain liegen Yoga-, Pilates- und Fitnessstudios oft nur ein paar Häuser auseinander. Neue Kundschaft vergleicht abends auf dem Handy und bucht die erste Probestunde, die sich ohne Umweg buchen lässt. Auf Ihrer Zenno-Seite stehen Angebote, Preise und freie Zeiten, und Menschen wie KI-Assistenten buchen dort direkt bei Ihnen.',
            'Wer zur Probestunde nicht erscheint, hinterlässt eine leere Matte. Mit Vorkasse oder hinterlegter Karte berechnen Sie bei No-Show oder zu später Absage eine Gebühr. Bestätigungen und Erinnerungen gehen automatisch raus, auf Deutsch oder Englisch.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Kreuzberg',
            body: 'In Kreuzberg arbeiten viele selbstständig, in Agenturen, in der Gastronomie oder im Schichtdienst. Feste Bürozeiten haben die wenigsten, deshalb sind Einzelstunden am späten Vormittag und frühen Nachmittag gefragt, also genau die Zeiten, die in anderen Vierteln leer bleiben. Wer abends hinter dem Tresen steht, kommt um elf. Unterrichtet wird oft auf Englisch. Legen Sie für diese Stunden eine eigene Einzelstunde an, gern etwas günstiger als die Abendtermine. Ihre Buchungsseite zeigt sie auf Deutsch und Englisch, und die KI-Rezeption bietet sie an.',
          },
          {
            name: 'Friedrichshain',
            body: 'Rund um den Boxhagener Platz wohnen viele zwischen Mitte zwanzig und Mitte dreißig, oft mit Tech-Jobs entlang der Spree. Sie buchen auf dem Handy, meistens am Sonntagabend für die ganze Woche, und sagen genauso schnell wieder ab, wenn im Job etwas dazwischenkommt. Personal Training und Mobility nach dem Tag am Schreibtisch laufen gut, gern um 19 oder 20 Uhr. Eine hinterlegte Karte mit Gebühr für Absagen unter 24 Stunden schafft hier Ordnung. Wer früher absagt, verschiebt selbst im Kundenportal.',
          },
          {
            name: 'Schöneberg',
            body: 'Im Akazienkiez und rund um den Winterfeldtplatz ist die Kundschaft gemischt: Familien, ältere Paare, die seit Jahrzehnten hier wohnen, und die queere Community rund um den Nollendorfplatz. Gefragt sind ruhige Einzelstunden, Yin oder sanftes Hatha, gern am Samstag nach dem Markt. Ältere Kundinnen schreiben lieber eine WhatsApp, als ein Formular auszufüllen; die KI-Rezeption nennt dort freie Zeiten und trägt den Termin ein. Für Neue lohnt sich eine kurze Kennenlernstunde mit eigenem, niedrigem Preis, etwa 30 Minuten für 25 €.',
          },
          {
            name: 'Mitte',
            body: 'In Mitte sitzen Büros, Ministerien und Botschaften, und wer dort arbeitet, hat zwei Fenster: um sieben, bevor die ersten Meetings beginnen, und mittags für eine Dreiviertelstunde. Gebucht wird am Vorabend oder morgens in der U-Bahn, auf Deutsch oder Englisch, je nachdem, in welchem Team jemand arbeitet. Bieten Sie Einzelstunden um 7:00 und 12:30 an, mit einer Dauer, die in die Mittagspause passt. Bestätigung und Erinnerung kommen per SMS. Und wer einer Kollegin zum Abschied etwas schenken will, kauft den Gutschein online.',
          },
        ],
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Any trial yoga session in Friedrichshain on Wednesday evening?' },
            { from: 'bot', text: 'Studio Spree has a trial session Wed 19:00 with Tom, 60 min, €15. Book it on their page?' },
            { from: 'me', text: 'Yes please' },
            { from: 'bot', text: 'Booked directly with Studio Spree. The confirmation is on its way.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Studio Spree · ohne Provision',
        },
        faq: [
          {
            q: 'Kann ich Probestunden auf Englisch anbieten?',
            a: 'Ja. Ihre Buchungsseite gibt es auf Deutsch und Englisch, Bestätigungen gehen in der Sprache der Buchung raus, und die KI-Rezeption antwortet in der Sprache, in der geschrieben wird.',
          },
          {
            q: 'Wie gehe ich mit No-Shows bei Probestunden um?',
            a: 'Verlangen Sie bei der Buchung Vorkasse oder lassen Sie die Karte hinterlegen und berechnen Sie bei Nichterscheinen oder zu später Absage eine Gebühr. Bezahlt wird über Stripe.',
          },
          {
            q: 'Ich miete in Kreuzberg nur an drei Abenden einen Raum. Kann ich nur diese Zeiten anbieten?',
            a: 'Ja. Buchbar ist nur, was Sie als freie Zeit festlegen. Die Buchungsseite zeigt dann nur diese drei Abende, und auch die KI-Rezeption bietet ausschließlich echte freie Termine an. Kommt ein vierter Abend dazu, geben Sie ihn einfach frei.',
          },
        ],
      },
      clinics: {
        districts: ['Charlottenburg', 'Mitte', 'Prenzlauer Berg', 'Schöneberg', 'Zehlendorf', 'Friedrichshain'],
        hero: {
          title: ['Praxen in Berlin,', 'ruhig gebucht.'],
          lead: 'Ob Erstberatung oder Nachkontrolle: Ihre Patientinnen und Kundinnen buchen online, auf Deutsch oder Englisch. Lange Behandlungen sichern Sie mit einer Anzahlung ab, und Ihre Rezeption muss nicht jedes Gespräch am Telefon führen.',
        },
        local: {
          title: ['Von Charlottenburg bis Mitte:', 'die Rezeption ist der Engpass.'],
          paragraphs: [
            'Ästhetik- und Wellnesspraxen in Berlin haben oft Kundschaft aus der ganzen Stadt und aus dem Ausland. Viele Anfragen kommen nach Feierabend per WhatsApp oder E-Mail, häufig auf Englisch. Mit Zenno bucht Ihre Kundschaft Beratungstermine und Behandlungen direkt auf Ihrer Seite, zu Ihren Preisen und in echten freien Zeiten.',
            'Für lange oder teure Behandlungen verlangen Sie eine Anzahlung bei der Buchung. Die KI-Rezeption beantwortet Fragen zu Ablauf, Preisen und Terminen und übergibt alles Medizinische an Sie. Im Entwurfsmodus geben Sie jede Antwort selbst frei.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Charlottenburg',
            body: 'Am Kurfürstendamm und in seinen Seitenstraßen gibt es viele ästhetische Praxen. Die Kundschaft kommt aus ganz Westberlin und zum Teil aus dem Ausland, dann oft nur für ein paar Tage in der Stadt. Solche Anfragen treffen Wochen vorher per E-Mail ein, auf Englisch und mit vielen Fragen zu Ablauf und Preis. Die KI-Rezeption beantwortet, was in Ihren Angaben steht, und gibt alles Medizinische an Sie weiter. Wer für eine Behandlung extra anreist, zahlt bei Ihnen am besten schon bei der Buchung den vollen Preis.',
          },
          {
            name: 'Zehlendorf',
            body: 'In Zehlendorf wohnt man im Grünen, mit Garten, nah am Schlachtensee und meistens mit Auto. Die Kundschaft plant Behandlungen lange voraus, rund um Schulferien, Reisen und Familienfeste, und viele greifen zuerst zum Telefon. Ein persönliches Vorgespräch ist hier selbstverständlich. Legen Sie die Beratung von 30 Minuten als eigene Leistung an, die man online buchen kann, auch für einen Termin in sechs Wochen. Wer lieber schreibt, bekommt im Entwurfsmodus nur Antworten, die Sie vorher selbst gelesen und freigegeben haben.',
          },
          {
            name: 'Mitte',
            body: 'Wer in Mitte in einer Agentur, einer Kanzlei oder einem Ministerium arbeitet, hat tagsüber wenig Luft. Eine Hautberatung oder eine kurze Behandlung muss zwischen 12 und 14 Uhr passieren und darf kaum länger als 45 Minuten dauern. Gebucht wird am Abend vorher auf dem Handy, oft auf Englisch. Legen Sie Ihre Leistungen mit genauer Dauer an, damit zwischen zwei Mittagsterminen keine halbe Stunde verloren geht. Die Erinnerung per SMS sorgt dafür, dass der Termin nicht zwischen zwei Meetings vergessen wird.',
          },
          {
            name: 'Friedrichshain',
            body: 'In Friedrichshain ist die Kundschaft jung, viele sind Ende zwanzig, und oft ist es die erste ästhetische Behandlung überhaupt. Entsprechend viele Fragen kommen vorab, schriftlich und spät am Abend: Was kostet ein Fruchtsäurepeeling, und wie lange dauert es? Die KI-Rezeption beantwortet Ablauf, Dauer und Preis aus Ihren Angaben. Ob eine Behandlung zur eigenen Haut passt, beantwortet sie nicht; diese Frage landet mit „Braucht Sie“ bei Ihnen. In den ersten Wochen lohnt sich der Entwurfsmodus, bis Sie mit den Antworten vertraut sind.',
          },
        ],
        chat: {
          studio: 'KI-Assistent',
          channel: 'Beispielgespräch',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Ich suche in Charlottenburg einen Termin für eine Hautberatung, gern Dienstagnachmittag.' },
            { from: 'bot', text: 'Praxis Lindenhof hat Di. 15:00 frei, Hautberatung, 30 Min., 45 €. Direkt dort buchen?' },
            { from: 'me', text: 'Ja, gern' },
            { from: 'bot', text: 'Gebucht, direkt bei Praxis Lindenhof. Die Bestätigung kommt per E-Mail.', booked: true },
          ],
          bookedLabel: 'Im Kalender von Praxis Lindenhof · ohne Provision',
        },
        faq: [
          {
            q: 'Beantwortet die KI-Rezeption medizinische Fragen?',
            a: 'Nein. Sie beantwortet Fragen zu Terminen, Preisen und Ablauf aus Ihren eigenen Angaben. Gesundheitsfragen und Beschwerden übergibt sie an Sie und markiert den Chat mit „Braucht Sie“.',
          },
          {
            q: 'Kann ich für Behandlungen eine Anzahlung verlangen?',
            a: 'Ja. Bei der Buchung kann eine Anzahlung oder der volle Preis fällig werden, oder die Karte wird hinterlegt und bei No-Show eine Gebühr berechnet. Bezahlt wird über Stripe.',
          },
          {
            q: 'Viele buchen aus dem Ausland, bevor sie in Berlin sind. Wie sichere ich diese Termine ab?',
            a: 'Verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis, bezahlt per Karte über Stripe. Die Buchungsseite gibt es auf Englisch, Bestätigung und Erinnerung kommen per E-Mail und SMS, und wer die Reise verschiebt, ändert den Termin selbst im Kundenportal.',
          },
        ],
      },
    },
  },
  en: {
    clientele:
      'In Berlin a large share of clients book in English, often on short notice and often late in the evening. Many studios are small and owner-run. The phone rings mid-treatment, and a message left unanswered goes to the next studio two streets away.',
    industries: {
      'salons-spas': {
        districts: ['Prenzlauer Berg', 'Kreuzberg', 'Neukölln', 'Friedrichshain', 'Charlottenburg', 'Mitte'],
        hero: {
          title: ['Salons in Berlin,', 'booked even at midnight.'],
          lead: 'From Neukölln to Charlottenburg, clients book the Saturday cut or the after-work massage straight on your page, in German or English. Your page is ready for AI assistants to book you too, and deposits protect your long appointments.',
        },
        local: {
          title: ['Berlin books on impulse.', 'Your calendar should keep up.'],
          paragraphs: [
            'Between Kreuzberg and Prenzlauer Berg, a few streets hold dozens of hair, beauty and nail studios. Someone looking for a Saturday slot at 11 pm picks the salon where booking works right away. With Zenno, clients see your real free times, your prices and who is on the team, and book without a phone call.',
            'For balayage, extensions or long spa treatments you ask for a deposit or the full price at booking, so a missed Saturday-morning appointment no longer costs you anything. The booking page and the AI receptionist answer in German and English while you stay with the client in your chair.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Neukölln',
            body: 'Around Reuterkiez and Weserstraße, many residents have only been in Berlin for a few years. They freelance or work at start-ups, speak English day to day and book late in the evening for the next day or the one after. Colour, bleaching and cuts that don’t fit the standard menu are in demand, and people compare prices closely. Keep your English booking page as complete as the German one, with a price and duration for every colour service. Anyone who blocks four hours of your day pays a €40 deposit.',
          },
          {
            name: 'Prenzlauer Berg',
            body: 'Around Kollwitzplatz and Kastanienallee live many young families, and the day runs on the Kita schedule. Between half past eight and half past two there is a window, and that is when parents want to fit in a cut or a manicure. Things get tight just before pick-up, so punctuality matters on both sides. Offer fixed 45-minute appointments inside that window. When a child gets sick, the client moves the appointment herself in the client portal and the slot is open to book again straight away.',
          },
          {
            name: 'Charlottenburg',
            body: 'Between Savignyplatz and the Kurfürstendamm, clients are older and very loyal. Many have seen the same hairdresser every five or six weeks for years, often on a Tuesday or Thursday morning, and they are used to phoning. They can keep doing that: you enter the appointment in the calendar and the SMS reminder still goes out automatically. Some start booking online on their own after a few months. Loyalty points suit these regulars well, and so do vouchers that grandchildren buy online for a birthday.',
          },
          {
            name: 'Mitte',
            body: 'Around Hackescher Markt and Torstraße, more people pass through than live there: hotel guests, tourists, people from the offices. They search at short notice, often for the same day, for a blow-dry before dinner or a manicure before a four o’clock meeting. Many write in English and have never heard of your salon. Set up short services with a fixed price for them, for example a 30-minute blow-dry for €35. With new clients you don’t know yet, a card on file with a no-show fee protects your time.',
          },
        ],
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Is there a hairdresser in Neukölln with a free balayage slot on Saturday?' },
            { from: 'bot', text: 'Salon Kiez has Sat 10:30 free, balayage with Jule, 2.5 hours, €30 deposit. Book it on their page?' },
            { from: 'me', text: 'Go ahead' },
            { from: 'bot', text: 'Booked directly with Salon Kiez. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Salon Kiez's calendar · no commission",
        },
        faq: [
          {
            q: 'Many of my clients don’t speak German. Does that work?',
            a: 'Yes. The booking page is available in German and English, and the AI receptionist answers on WhatsApp, by email and in your website chat in the language the client writes in, whether that is German, English or Thai.',
          },
          {
            q: 'I work alone. Who handles requests while I’m cutting?',
            a: 'The booking page takes appointments around the clock, and the AI receptionist answers messages about prices and free times. Everything lands in your calendar; complaints and special cases are handed to you.',
          },
          {
            q: 'My salon in Neukölln is small and I use the Kleinunternehmer rule. Can I still take deposits?',
            a: 'Yes. Zenno supports the Kleinunternehmer rule under §19 UStG, and deposits run through Stripe as they do for everyone else. How deposits are treated in your books is a question for your tax adviser; you export the figures for them in DATEV format.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Prenzlauer Berg', 'Kreuzberg', 'Friedrichshain', 'Mitte', 'Neukölln', 'Schöneberg'],
        hero: {
          title: ['Yoga studios in Berlin,', 'booked from the phone.'],
          lead: 'Trial session, private or personal training: in Berlin many people search in English and on their phone. With Zenno they book you directly, through AI assistants too, and a no-show is paid for by the client instead of by you.',
        },
        local: {
          title: ['Many studios, short distances.', 'Whoever answers first gets the trial.'],
          paragraphs: [
            'In Prenzlauer Berg, Kreuzberg and Friedrichshain, yoga, Pilates and fitness studios are often a few doors apart. New clients compare on their phone in the evening and book the first trial session they can book without a detour. Your Zenno page lists offers, prices and free times, and people and AI assistants book you directly from there.',
            'A no-show at a trial session leaves an empty mat. With prepayment or a card on file you charge a fee for a no-show or late cancellation. Confirmations and reminders go out on their own, in German or English.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Kreuzberg',
            body: 'Many people in Kreuzberg are self-employed or work in agencies, restaurants and bars, or on shifts. Few have office hours, so private sessions in the late morning and early afternoon are in demand, the very hours that sit empty in other districts. Someone who works behind a bar at night comes in at eleven. Teaching often happens in English. Set up a separate private session for these hours, perhaps a little cheaper than your evening slots. Your booking page shows it in German and English, and the AI receptionist offers it too.',
          },
          {
            name: 'Friedrichshain',
            body: 'Around Boxhagener Platz, many residents are between their mid-twenties and mid-thirties, often in tech jobs along the Spree. They book on their phone, usually on Sunday evening for the whole week, and cancel just as fast when something comes up at work. Personal training and mobility sessions after a day at the desk do well, ideally at 7 or 8 pm. A card on file with a fee for cancellations under 24 hours keeps things in order. Anyone who cancels earlier moves the session in the client portal.',
          },
          {
            name: 'Schöneberg',
            body: 'In the Akazienkiez and around Winterfeldtplatz, the clientele is mixed: families, older couples who have lived here for decades, and the queer community around Nollendorfplatz. Calm private sessions are in demand, yin or gentle hatha, often on Saturday after the market. Older clients would rather send a WhatsApp than fill in a form; the AI receptionist suggests free times there and books the slot. For newcomers, a short get-to-know-you session with its own low price works well, say 30 minutes for €25.',
          },
          {
            name: 'Mitte',
            body: 'Mitte is full of offices, ministries and embassies, and the people who work there have two windows: seven in the morning, before the first meetings, and three quarters of an hour at lunch. They book the evening before or on the U-Bahn in the morning, in German or English depending on their team. Offer private sessions at 7:00 and 12:30, with a length that fits a lunch break. Confirmations and reminders arrive by SMS. And when a team wants a leaving present for a colleague, they buy a voucher online.',
          },
        ],
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'Any trial yoga session in Friedrichshain on Wednesday evening?' },
            { from: 'bot', text: 'Studio Spree has a trial session Wed 19:00 with Tom, 60 min, €15. Book it on their page?' },
            { from: 'me', text: 'Yes please' },
            { from: 'bot', text: 'Booked directly with Studio Spree. The confirmation is on its way.', booked: true },
          ],
          bookedLabel: "In Studio Spree's calendar · no commission",
        },
        faq: [
          {
            q: 'Can I offer trial sessions in English?',
            a: 'Yes. Your booking page is available in German and English, confirmations go out in the language of the booking, and the AI receptionist replies in the language the client writes in.',
          },
          {
            q: 'How do I handle no-shows at trial sessions?',
            a: 'Ask for prepayment at booking, or keep the card on file and charge a fee for a no-show or late cancellation. Payments run through Stripe.',
          },
          {
            q: 'I rent a room in Kreuzberg on three evenings a week. Can I offer just those times?',
            a: 'Yes. Clients can only book the times you set as free. The booking page then shows just those three evenings, and the AI receptionist only offers real free slots. If a fourth evening comes along, you open it up.',
          },
        ],
      },
      clinics: {
        districts: ['Charlottenburg', 'Mitte', 'Prenzlauer Berg', 'Schöneberg', 'Zehlendorf', 'Friedrichshain'],
        hero: {
          title: ['Clinics in Berlin,', 'booked calmly.'],
          lead: 'From the first consultation to the follow-up, your clients book online in German or English. You secure long treatments with a deposit, and your front desk no longer has to take every conversation by phone.',
        },
        local: {
          title: ['From Charlottenburg to Mitte,', 'the front desk is the bottleneck.'],
          paragraphs: [
            'Aesthetic and wellness clinics in Berlin see clients from across the city and from abroad. Many requests arrive after hours on WhatsApp or by email, often in English. With Zenno, clients book consultations and treatments directly on your page, at your prices and in real free slots.',
            'For long or expensive treatments you ask for a deposit at booking. The AI receptionist answers questions about the process, prices and appointments, and hands anything medical to you. In draft mode you approve every reply yourself.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Charlottenburg',
            body: 'The Kurfürstendamm and its side streets are home to many aesthetic clinics. Clients come from all over West Berlin and some from abroad, often in town for only a few days. Those enquiries arrive weeks ahead by email, in English, with plenty of questions about the process and the price. The AI receptionist answers what is in your own information and passes anything medical to you. When someone travels in specially for a treatment, the safest arrangement is the full price at booking.',
          },
          {
            name: 'Zehlendorf',
            body: 'Zehlendorf is green and quiet, with gardens, the Schlachtensee nearby and a car in most driveways. Clients plan treatments well ahead, around school holidays, trips and family occasions, and many reach for the phone first. A personal consultation before any treatment is expected here. Set up a 30-minute consultation as its own service that people can book online, even six weeks out. Anyone who prefers to write gets replies in draft mode, so nothing goes out that you haven’t read and approved.',
          },
          {
            name: 'Mitte',
            body: 'Anyone working in an agency, a law firm or a ministry in Mitte has little room in the day. A skin consultation or a short treatment has to happen between 12 and 2 and can barely run longer than 45 minutes. Clients book on their phone the evening before, often in English. Set up your services with their exact duration so you don’t lose half an hour between two lunchtime appointments. The SMS reminder keeps the appointment from slipping between two meetings.',
          },
          {
            name: 'Friedrichshain',
            body: 'Clients in Friedrichshain are young, many in their late twenties, and for a lot of them it is their first aesthetic treatment. That means plenty of questions in advance, in writing and late in the evening: what does a fruit acid peel cost, and how long does it take? The AI receptionist answers the process, duration and price from your own information. Whether a treatment suits someone’s skin is a question it leaves alone; it reaches you marked “Needs you”. Draft mode is worth using for the first few weeks.',
          },
        ],
        chat: {
          studio: 'AI assistant',
          channel: 'Example conversation',
          accent: 'var(--ink)',
          turns: [
            { from: 'me', text: 'I’m looking for a skin consultation in Charlottenburg, ideally Tuesday afternoon.' },
            { from: 'bot', text: 'Praxis Lindenhof has Tue 15:00 free, skin consultation, 30 min, €45. Book it on their page?' },
            { from: 'me', text: 'Yes, please' },
            { from: 'bot', text: 'Booked directly with Praxis Lindenhof. The confirmation is on its way by email.', booked: true },
          ],
          bookedLabel: "In Praxis Lindenhof's calendar · no commission",
        },
        faq: [
          {
            q: 'Does the AI receptionist answer medical questions?',
            a: 'No. It answers questions about appointments, prices and the process from your own information. Health questions and complaints are handed to you and the chat is marked “Needs you”.',
          },
          {
            q: 'Can I ask for a deposit for treatments?',
            a: 'Yes. A deposit or the full price can be due at booking, or the card is kept on file and a no-show fee charged. Payments run through Stripe.',
          },
          {
            q: 'Many clients book from abroad before they arrive in Berlin. How do I secure those appointments?',
            a: 'Ask for a deposit or the full price at booking, paid by card through Stripe. The booking page is available in English, confirmations and reminders arrive by email and SMS, and anyone whose trip changes moves the appointment themselves in the client portal.',
          },
        ],
      },
    },
  },
}
