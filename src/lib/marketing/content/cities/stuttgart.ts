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
          lead: 'Ihre Kundschaft kommt vor der Arbeit oder nach Feierabend und bucht diese Zeiten auf Ihrer eigenen Seite, auch über KI-Assistenten. SMS-Erinnerungen und Anzahlungen halten Ihren Kalender verlässlich.',
        },
        local: {
          title: ['Früh rein, spät raus.', 'Ihr Kalender kennt die Randzeiten.'],
          paragraphs: [
            'Im Stuttgarter Westen und in der Innenstadt öffnen viele Salons früh, weil die Kundschaft vor der Arbeit kommt und abends lange im Büro bleibt. Diese Randzeiten sind schnell vergeben, und genau um sie dreht sich der Anruf, den Sie während eines Schnitts nicht annehmen können. Auf Ihrer Zenno-Seite sieht die Kundschaft, ob Dienstag um 7:30 oder Donnerstag um 19:00 noch frei ist, und bucht sofort.',
            'Wer aus Degerloch, Vaihingen oder dem Remstal anreist, rechnet Parkplatzsuche und Steigungen mit ein und möchte nicht umsonst kommen. Bestätigungen und Erinnerungen per SMS und E-Mail geben beiden Seiten Sicherheit, und wer verschieben muss, erledigt das selbst im Kundenportal. Für Strähnen, Farbe oder lange Wellness-Behandlungen verlangen Sie eine Anzahlung über Stripe, damit ein leerer Stuhl nicht allein auf Ihre Kosten geht.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Stuttgart-West',
            body: 'Im Westen stehen die Altbauten dicht, rund um Bismarckplatz und Feuersee, und einen Parkplatz findet hier kaum jemand. Die Kundschaft kommt zu Fuß oder mit der U-Bahn, arbeitet im Büro oder im Homeoffice und bucht abends am Handy. Donnerstag nach 18 Uhr und Samstagvormittag sind schnell voll, besonders für Balayage und moderne Kurzhaarschnitte. Öffnen Sie einen langen Abend pro Woche bis 20 Uhr und machen Sie ihn online buchbar. Wer im Westen wohnt, schaut nach der Arbeit auf das Handy und nimmt, was dann noch frei ist.',
          },
          {
            name: 'Bad Cannstatt',
            body: 'Wenn auf dem Cannstatter Wasen das Volksfest oder das Frühlingsfest läuft, gehen viele in Tracht hin und vorher in den Salon. An diesen Wochenenden sind Flechtfrisuren und geflochtene Kränze gefragt, oft schon morgens um acht. Den Rest des Jahres bucht in der Altstadt eine treue Kundschaft aus dem Viertel. Legen Sie die Wasen-Frisur als eigene kurze Leistung mit festem Preis an, öffnen Sie an diesen Samstagen frühe Zeiten und verlangen Sie eine Anzahlung, damit niemand fünf Termine reserviert und einen nimmt.',
          },
          {
            name: 'Degerloch',
            body: 'Degerloch liegt oben auf den Fildern, erreichbar mit der Zahnradbahn vom Marienplatz, und wer hier wohnt, fährt ungern für einen Friseurtermin in den Kessel hinunter. Die Kundschaft ist eher gesetzt, viele Familien und Paare, die seit Jahren im selben Haus leben und mit dem Auto kommen. Farbe im Sechs-Wochen-Rhythmus und Dauerwellen werden lange im Voraus geplant. Lassen Sie Buchungen acht Wochen im Voraus zu, damit Stammkundinnen den nächsten Farbtermin gleich nach dem letzten festmachen, und schicken Sie die Erinnerung zwei Tage vorher per SMS.',
          },
          {
            name: 'Stuttgart-Ost',
            body: 'In Gablenberg, Ostheim und am Stöckach wohnen viele Familien, oft mit Eltern oder Großeltern, die aus anderen Ländern nach Stuttgart kamen. Salons und Barbershops sind hier Nachbarschaftsläden, und der Preis für einen Herrenschnitt ist bekannt. Viele kommen spontan vorbei, schreiben aber vorher kurz auf WhatsApp, ob gerade frei ist. Lassen Sie die KI-Rezeption diese Nachrichten beantworten und gleich einen Termin vorschlagen, und stellen Sie die Preise offen auf Ihre Seite. Dann muss niemand nachfragen, und wer zufrieden war, bucht beim nächsten Mal gleich online.',
          },
        ],
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
            a: 'Erinnerungen per SMS und E-Mail sind der erste Schritt. Zusätzlich verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis, oder Sie lassen die Karte hinterlegen und berechnen bei No-Show eine Gebühr. Bezahlt wird über Stripe.',
          },
          {
            q: 'Vor dem Cannstatter Wasen wollen alle gleichzeitig eine Flechtfrisur. Wie verteile ich die Termine?',
            a: 'Legen Sie die Flechtfrisur als eigene Leistung mit fester Dauer und festem Preis an, zum Beispiel 40 Minuten für 45 €. Im Kalender hat jede Mitarbeiterin ihre Spalte, und die Buchungsseite zeigt nur Zeiten, die wirklich frei sind. Mit einer Anzahlung bei der Buchung reserviert niemand drei Termine auf Verdacht.',
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
        neighbourhoods: [
          {
            name: 'Stuttgart-Süd',
            body: 'Im Süden, rund um Marienplatz, Heusteigviertel und Lehenviertel, wohnen viele Familien in Altbauten an steilen Straßen, und manches Studio liegt oben an einer Stäffele. Wer zum ersten Mal kommt, steht gern einmal vor der falschen Treppe. Gebucht wird am Sonntagvormittag und an Wochentagen nach 19 Uhr, wenn die Kinder im Bett sind, oft Yin, sanftes Vinyasa oder Rückbildungsyoga als Einzelstunde. Schreiben Sie den Weg in die Beschreibung, mit Haltestelle und welcher Treppe, und schicken Sie die Erinnerung am Vorabend mit Adresse.',
          },
          {
            name: 'Stuttgart-Nord',
            body: 'Am Killesberg liegen Villen in Halbhöhenlage und das neuere Quartier an der Killesberghöhe, dazu der Höhenpark mit seinen Wiesen. Die Kundschaft hier legt Wert auf persönliche Betreuung und bucht Personal Training oder Einzelstunden zu festen Zeiten, oft am frühen Morgen. Im Sommer möchten viele draußen üben. Legen Sie dafür eine eigene Leistung an, etwa eine Einzelstunde im Park von Mai bis September, schreiben Sie den Treffpunkt in die Beschreibung, und klären Sie in den Bedingungen, was bei Regen passiert.',
          },
          {
            name: 'Stuttgart-West',
            body: 'Viele, die in Stuttgart als Ingenieurinnen oder Entwickler arbeiten, wohnen im Westen, und ein Teil von ihnen ist aus dem Ausland hergezogen. Sie schreiben auf Englisch, kennen Yoga aus ihrer Heimat oder von früheren Stationen und suchen eine Lehrerin, die ihre Sprache spricht. Gebucht wird werktags um 19:30 nach der Rückkehr vom Werk oder samstags zur Mittagszeit. Bieten Sie Ihre Buchungsseite auf Englisch an und schreiben Sie in die Beschreibung jeder Einzelstunde, in welcher Sprache Sie unterrichten. So wählt niemand die falsche Stunde.',
          },
          {
            name: 'Stuttgart-Mitte',
            body: 'In der Innenstadt, zwischen Königstraße und Hauptbahnhof, arbeiten viele in Büros, Behörden und Läden, und ein großer Teil fährt abends mit der S-Bahn wieder hinaus. Eine Stunde nach Feierabend muss also so liegen, dass die Bahn danach noch passt: Beginn um 17:15, Ende um 18:15. Mittags sind 45-minütige Einheiten gefragt. Wenn die S-Bahn wieder einmal Verspätung hat, verschiebt die Kundin im Kundenportal, statt nicht zu erscheinen. Machen Sie in der Bestätigung deutlich, bis wann ein Verschieben ohne Gebühr möglich ist.',
          },
        ],
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
          {
            q: 'Viele meiner Kundinnen sind für einen Job in der Industrie nach Stuttgart gezogen und sprechen wenig Deutsch. Können sie trotzdem problemlos buchen?',
            a: 'Ja. Ihre Buchungsseite gibt es auf Deutsch und Englisch, und Bestätigungen und Erinnerungen gehen in der Sprache der Buchung raus. Die KI-Rezeption beantwortet Nachrichten auf WhatsApp, per E-Mail und im Website-Chat auf Deutsch, Englisch oder Thai.',
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
        neighbourhoods: [
          {
            name: 'Stuttgart-Mitte',
            body: 'Für Kundinnen aus Ludwigsburg, Esslingen oder Böblingen ist die Innenstadt der Ort, an dem man am Samstag ohnehin ist, zum Einkaufen auf der Königstraße oder für einen Kaffee am Schlossplatz. Eine Praxis in der Mitte bekommt deshalb viele Buchungen für Samstag, oft zwei Wochen im Voraus und mit der S-Bahn-Verbindung im Hinterkopf. Gefragt sind Erstberatungen und Behandlungen von einer Stunde. Weil Samstage knapp sind, lohnt sich hier eine Anzahlung bei der Buchung. Unter der Woche bleiben die Vormittage frei für Kundschaft aus der Stadt.',
          },
          {
            name: 'Stuttgart-Nord',
            body: 'In den Villen am Killesberg und an der Halbhöhe liegen einige Praxen in umgebauten Wohnhäusern, mit eigenem Eingang und Parkplatz vor der Tür. Die Kundschaft kommt mit dem Auto, oft aus den Höhenlagen ringsum, und möchte vor der ersten Behandlung genau wissen, was sie erwartet. Fragen kommen schriftlich, abends und ausführlich. Die KI-Rezeption beantwortet sie aus Ihren eigenen Angaben, und im Entwurfsmodus lesen Sie jede Antwort, bevor sie rausgeht. Alles, was die Gesundheit betrifft, landet ohnehin bei Ihnen.',
          },
          {
            name: 'Degerloch',
            body: 'Von Degerloch sind es über die B27 nur wenige Minuten bis zum Flughafen, und viele Kundinnen aus Degerloch und den Fildern fliegen beruflich regelmäßig. Ihr Kalender richtet sich nach Reisen, und eine Behandlung wird zwischen zwei Dienstreisen gelegt, gern am Montagmorgen oder am Freitagnachmittag nach der Landung. Gefragt sind Gesichtsbehandlungen, Beratungen und Nachtermine. Schicken Sie Erinnerungen per E-Mail, die auch am Gate gelesen werden, und machen Sie das Verschieben im Kundenportal leicht, denn Flugpläne ändern sich.',
          },
          {
            name: 'Bad Cannstatt',
            body: 'Bad Cannstatt war lange ein Kurort, und die Mineralbäder gibt es bis heute. Wellness hat hier Tradition, und eine Praxis in der Altstadt hat oft Stammkundschaft, die seit Jahren zur Massage oder Gesichtsbehandlung kommt, viele davon im Rentenalter. Diese Kundinnen rufen lieber an, als online zu buchen. Tragen Sie solche Termine selbst in den Kalender ein, dann bekommt die Kundin trotzdem eine Erinnerung per SMS. Wer bar zahlt, landet im Kassenbuch, und für die Stammkundschaft lohnen sich Treuepunkte.',
          },
        ],
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
          {
            q: 'In meiner Praxis in Bad Cannstatt zahlen viele Stammkundinnen bar. Wie halte ich das sauber fest?',
            a: 'Barzahlungen erfassen Sie im Kassenbuch, Kartenzahlungen laufen über Stripe. Die Umsatzsteuer legen Sie pro Leistung fest, und am Monats- oder Quartalsende sehen Sie alles in einer Übersicht und exportieren es im DATEV-Format. Was genau Ihre Steuerberatung braucht, besprechen Sie am besten direkt mit ihr.',
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
          lead: 'Clients come before work or after it, and book those hours on your own page, through AI assistants too. SMS reminders and deposits keep your calendar reliable.',
        },
        local: {
          title: ['In early, out late.', 'Your calendar knows the edge hours.'],
          paragraphs: [
            'In Stuttgart-West and the city centre, many salons open early because clients come before work and stay late at the office. Those early and late slots go fast, and they are exactly what the phone call you can’t take mid-cut is about. On your Zenno page clients see whether Tuesday at 7:30 or Thursday at 19:00 is still free, and book on the spot.',
            'Anyone coming in from Degerloch, Vaihingen or the Rems valley factors in parking and steep streets and doesn’t want a wasted trip. Confirmations and reminders by SMS and email give both sides certainty, and anyone who needs to reschedule does it themselves in the client portal. For highlights, colour or long wellness treatments you ask for a deposit through Stripe, so an empty chair isn’t entirely at your expense.',
          ],
        },
        neighbourhoods: [
          {
            name: 'Stuttgart-West',
            body: 'In Stuttgart-West the old apartment blocks stand close together around Bismarckplatz and Feuersee, and almost nobody finds a parking space. Clients walk or take the U-Bahn, work in an office or from home, and book on their phone in the evening. Thursday after 6 pm and Saturday morning fill up fast, especially for balayage and modern short cuts. Open one long evening a week until 8 pm and make it bookable online. People in the West check their phone after work and take whatever is still free.',
          },
          {
            name: 'Bad Cannstatt',
            body: 'When the Volksfest or the spring festival is on at the Cannstatter Wasen, many people go in traditional dress, and to the salon first. On those weekends braids and plaited crowns are in demand, often from eight in the morning. The rest of the year, loyal clients from the neighbourhood book in the old town. Set up the Wasen hairstyle as its own short service at a fixed price, open early slots on those Saturdays and ask for a deposit, so nobody reserves five appointments and keeps one.',
          },
          {
            name: 'Degerloch',
            body: 'Degerloch sits up on the Filder plateau, reached by the rack railway from Marienplatz, and people who live here don’t like driving down into the basin for a haircut. Clients tend to be settled, families and couples who have lived in the same house for years and come by car. Colour every six weeks and perms are planned well ahead. Allow bookings eight weeks in advance, so regulars fix the next colour appointment right after the last one, and send the SMS reminder two days before.',
          },
          {
            name: 'Stuttgart-Ost',
            body: 'In Gablenberg, Ostheim and around Stöckach live many families, often with parents or grandparents who came to Stuttgart from other countries. Salons and barbershops here are neighbourhood shops, and everyone knows what a men’s cut costs. Many drop by on the spur of the moment, but send a quick WhatsApp first to ask if there is a free chair. Let the AI receptionist answer those messages and suggest a time straight away, and put your prices openly on your page. Then nobody has to ask, and a happy client books online next time.',
          },
        ],
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
            a: 'SMS and email reminders are the first step. On top of that you can ask for a deposit or the full price at booking, or keep the card on file and charge a no-show fee. Payments run through Stripe.',
          },
          {
            q: 'Before the Cannstatter Wasen, everyone wants braids at the same time. How do I spread the appointments?',
            a: 'Set up the braided style as its own service with a fixed duration and price, say 40 minutes for €45. In the calendar each stylist has her own column, and the booking page only shows times that are really free. With a deposit at booking, nobody reserves three slots just in case.',
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
        neighbourhoods: [
          {
            name: 'Stuttgart-Süd',
            body: 'In the south, around Marienplatz, the Heusteigviertel and the Lehenviertel, many families live in old buildings on steep streets, and some studios sit at the top of a Stäffele, one of the city’s public stairways. First-timers sometimes end up at the wrong one. People book for Sunday morning and for weekdays after 7 pm, once the kids are in bed, often Yin, gentle Vinyasa or postnatal yoga as a private session. Put the way there in the description, with the stop and the right stairway, and send the evening reminder with your address.',
          },
          {
            name: 'Stuttgart-Nord',
            body: 'The Killesberg has hillside villas and the newer Killesberghöhe quarter, plus the meadows of the Höhenpark. Clients here value personal attention and book personal training or private sessions at fixed times, often early in the morning. In summer many want to practise outdoors. Set that up as its own service, say a private session in the park from May to September, put the meeting point in the description, and spell out in your terms what happens when it rains.',
          },
          {
            name: 'Stuttgart-West',
            body: 'Many people who work in Stuttgart as engineers or developers live in the West, and some of them moved here from abroad. They write in English, know yoga from home or from earlier jobs, and look for a teacher who speaks their language. They book on weekdays at 19:30, after getting back from the plant, or around midday on Saturday. Offer your booking page in English and say in the description of each private session which language you teach in. That way nobody picks the wrong session.',
          },
          {
            name: 'Stuttgart-Mitte',
            body: 'In the centre, between Königstraße and the main station, many people work in offices, public agencies and shops, and a large share take the S-Bahn back out in the evening. An after-work session has to leave time for the train: start at 17:15, finish at 18:15. At lunch, 45-minute sessions are in demand. When the S-Bahn is late yet again, the client moves the session in the client portal instead of not showing up. Make it clear in the confirmation until when a reschedule is free of charge.',
          },
        ],
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
          {
            q: 'Many of my clients moved to Stuttgart for a job in industry and speak little German. Can they still book easily?',
            a: 'Yes. Your booking page is available in German and English, and confirmations and reminders go out in the language of the booking. The AI receptionist answers messages on WhatsApp, by email and in your website chat in German, English or Thai.',
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
        neighbourhoods: [
          {
            name: 'Stuttgart-Mitte',
            body: 'For clients from Ludwigsburg, Esslingen or Böblingen, the centre is where they are on a Saturday anyway, shopping on Königstraße or having a coffee on Schlossplatz. A clinic in Mitte therefore gets plenty of Saturday bookings, often two weeks ahead and with the S-Bahn connection in mind. First consultations and one-hour treatments are in demand. Because Saturdays are scarce, a deposit at booking makes sense here. During the week, keep the mornings for clients who live in the city.',
          },
          {
            name: 'Stuttgart-Nord',
            body: 'Among the villas on the Killesberg and the hillside, some clinics occupy converted houses, with their own entrance and parking at the door. Clients arrive by car, often from the hillside areas around, and want to know exactly what to expect before their first treatment. Their questions come in writing, in the evening and in detail. The AI receptionist answers them from your own information, and in draft mode you read every reply before it goes out. Anything to do with health comes straight to you anyway.',
          },
          {
            name: 'Degerloch',
            body: 'From Degerloch it is only a few minutes to the airport via the B27, and many clients from Degerloch and the Filder area fly regularly for work. Their calendar follows their travel, so a treatment gets slotted between two business trips, often on Monday morning or Friday afternoon after landing. Facials, consultations and follow-ups are in demand. Send reminders by email, which people read at the gate, and make rescheduling in the client portal easy, because flight plans change.',
          },
          {
            name: 'Bad Cannstatt',
            body: 'Bad Cannstatt was a spa town for a long time, and its mineral baths are still there. Wellness has a tradition here, and a clinic in the old town often has regulars who have come for a massage or a facial for years, many of them retired. These clients would rather call than book online. Enter those appointments in the calendar yourself, and the client still gets an SMS reminder. Cash payments go into the cash book, and loyalty points suit these long-standing regulars.',
          },
        ],
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
          {
            q: 'At my clinic in Bad Cannstatt many regulars pay cash. How do I keep that in order?',
            a: 'You record cash payments in the cash book, and card payments run through Stripe. You set VAT per service, and at the end of the month or quarter you see everything in one overview and export it in DATEV format. What exactly your tax adviser needs is best agreed with them directly.',
          },
        ],
      },
    },
  },
}
