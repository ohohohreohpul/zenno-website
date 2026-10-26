import type { CityContentSet } from './types'

/** Berlin: international, English-speaking clientele, late bookers, many small owner-run studios. */
export const BERLIN: CityContentSet = {
  de: {
    clientele:
      'In Berlin bucht ein großer Teil der Kundschaft auf Englisch, oft spontan und oft spät am Abend. Viele Studios sind klein und inhabergeführt, das Telefon klingelt während der Behandlung, und wer nicht sofort antwortet, verliert die Anfrage an das nächste Studio zwei Straßen weiter.',
    industries: {
      'salons-spas': {
        districts: ['Prenzlauer Berg', 'Kreuzberg', 'Neukölln', 'Friedrichshain', 'Charlottenburg', 'Mitte'],
        hero: {
          title: ['Salons in Berlin,', 'gebucht auch um Mitternacht.'],
          lead: 'Von Neukölln bis Charlottenburg: Ihre Kundschaft bucht Schnitt, Farbe oder Massage direkt auf Ihrer Seite, auf Deutsch oder Englisch, und auch über KI-Assistenten. Anzahlungen sichern lange Termine ab.',
        },
        local: {
          title: ['Berlin bucht spontan.', 'Ihr Kalender sollte mithalten.'],
          paragraphs: [
            'Zwischen Kreuzberg und Prenzlauer Berg liegen auf wenigen Straßen Dutzende Friseure, Kosmetik- und Nagelstudios. Wer abends um elf eine freie Zeit für Samstag sucht, bucht dort, wo es sofort geht. Mit Zenno sieht die Kundschaft Ihre echten freien Zeiten, Preise und Ihr Team und bucht ohne Anruf.',
            'Für Balayage, Extensions oder lange Spa-Behandlungen verlangen Sie bei der Buchung eine Anzahlung oder den vollen Preis. So bleibt ein geplatzter Termin am Samstagvormittag kein Verlust. Die Buchungsseite und die KI-Rezeption antworten auf Deutsch und Englisch, ohne dass Sie zwischen zwei Kundinnen ans Telefon müssen.',
          ],
        },
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
            a: 'Ja. Die Buchungsseite gibt es auf Deutsch und Englisch, und die KI-Rezeption antwortet auf WhatsApp, per E-Mail und im Website-Chat in der Sprache, in der geschrieben wird: Deutsch, Englisch oder Thai.',
          },
          {
            q: 'Ich arbeite allein im Salon. Wer nimmt Anfragen an, während ich schneide?',
            a: 'Die Buchungsseite nimmt Termine rund um die Uhr an, und die KI-Rezeption beantwortet Nachrichten zu Preisen und freien Zeiten. Alles landet in Ihrem Kalender; Beschwerden und Sonderfälle übergibt sie an Sie.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Prenzlauer Berg', 'Kreuzberg', 'Friedrichshain', 'Mitte', 'Neukölln', 'Schöneberg'],
        hero: {
          title: ['Yogastudios in Berlin,', 'gebucht statt gesucht.'],
          lead: 'Probestunde, Einzelstunde oder Personal Training: In Berlin suchen viele auf Englisch und auf dem Handy. Mit Zenno buchen sie direkt bei Ihnen, auch über KI-Assistenten, und No-Shows kosten nicht mehr Sie.',
        },
        local: {
          title: ['Viele Studios, kurze Wege.', 'Wer zuerst antwortet, bekommt die Probestunde.'],
          paragraphs: [
            'In Prenzlauer Berg, Kreuzberg und Friedrichshain liegen Yoga-, Pilates- und Fitnessstudios oft nur ein paar Häuser auseinander. Neue Kundschaft vergleicht abends auf dem Handy und bucht die erste Probestunde, die sich ohne Umweg buchen lässt. Ihre Zenno-Seite zeigt Angebote, Preise und freie Zeiten so, dass Menschen und KI-Assistenten direkt bei Ihnen buchen.',
            'Wer zur Probestunde nicht erscheint, hinterlässt eine leere Matte. Mit Vorkasse oder hinterlegter Karte berechnen Sie bei No-Show oder zu später Absage eine Gebühr. Bestätigungen und Erinnerungen gehen automatisch raus, auf Deutsch oder Englisch.',
          ],
        },
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
        ],
      },
      clinics: {
        districts: ['Charlottenburg', 'Mitte', 'Prenzlauer Berg', 'Schöneberg', 'Zehlendorf', 'Friedrichshain'],
        hero: {
          title: ['Praxen in Berlin,', 'ruhig gebucht.'],
          lead: 'Beratung, Behandlung, Nachkontrolle: Ihre Patientinnen und Kundinnen buchen online, auf Deutsch oder Englisch. Lange Behandlungen sichern Sie mit Anzahlung ab, und Ihre Rezeption muss nicht jedes Gespräch am Telefon führen.',
        },
        local: {
          title: ['Von Charlottenburg bis Mitte:', 'die Rezeption ist der Engpass.'],
          paragraphs: [
            'Ästhetik- und Wellnesspraxen in Berlin haben oft Kundschaft aus der ganzen Stadt und aus dem Ausland. Viele Anfragen kommen nach Feierabend, per WhatsApp oder E-Mail, und häufig auf Englisch. Mit Zenno bucht Ihre Kundschaft Beratungstermine und Behandlungen direkt auf Ihrer Seite, mit Ihren Preisen und echten freien Zeiten.',
            'Für lange oder teure Behandlungen verlangen Sie eine Anzahlung bei der Buchung. Die KI-Rezeption beantwortet Fragen zu Ablauf, Preisen und Terminen und übergibt alles Medizinische an Sie. Im Entwurfsmodus geben Sie jede Antwort selbst frei.',
          ],
        },
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
        ],
      },
    },
  },
  en: {
    clientele:
      'In Berlin a large share of clients book in English, often on short notice and often late in the evening. Many studios are small and owner-run, the phone rings mid-treatment, and a message left unanswered goes to the next studio two streets away.',
    industries: {
      'salons-spas': {
        districts: ['Prenzlauer Berg', 'Kreuzberg', 'Neukölln', 'Friedrichshain', 'Charlottenburg', 'Mitte'],
        hero: {
          title: ['Salons in Berlin,', 'booked even at midnight.'],
          lead: 'From Neukölln to Charlottenburg: clients book a cut, colour or massage straight on your page, in German or English, and through AI assistants too. Deposits protect your long appointments.',
        },
        local: {
          title: ['Berlin books on impulse.', 'Your calendar should keep up.'],
          paragraphs: [
            'Between Kreuzberg and Prenzlauer Berg, a few streets hold dozens of hair, beauty and nail studios. Someone looking for a Saturday slot at 11 pm books wherever it works right away. With Zenno, clients see your real free times, prices and team, and book without a phone call.',
            'For balayage, extensions or long spa treatments you ask for a deposit or the full price at booking, so a missed Saturday-morning appointment is no longer a loss. The booking page and the AI receptionist answer in German and English, so you don’t have to leave a client to pick up the phone.',
          ],
        },
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
            a: 'Yes. The booking page is available in German and English, and the AI receptionist answers on WhatsApp, by email and in your website chat in the language the client writes in: German, English or Thai.',
          },
          {
            q: 'I work alone. Who handles requests while I’m cutting?',
            a: 'The booking page takes appointments around the clock, and the AI receptionist answers messages about prices and free times. Everything lands in your calendar; complaints and special cases are handed to you.',
          },
        ],
      },
      'yoga-studios': {
        districts: ['Prenzlauer Berg', 'Kreuzberg', 'Friedrichshain', 'Mitte', 'Neukölln', 'Schöneberg'],
        hero: {
          title: ['Yoga studios in Berlin,', 'booked, not just browsed.'],
          lead: 'Trial session, private or personal training: in Berlin many people search in English and on their phone. With Zenno they book you directly, through AI assistants too, and no-shows stop costing you.',
        },
        local: {
          title: ['Many studios, short distances.', 'Whoever answers first gets the trial.'],
          paragraphs: [
            'In Prenzlauer Berg, Kreuzberg and Friedrichshain, yoga, Pilates and fitness studios are often a few doors apart. New clients compare on their phone in the evening and book the first trial session they can book without a detour. Your Zenno page shows offers, prices and free times so people and AI assistants can book you directly.',
            'A no-show at a trial session leaves an empty mat. With prepayment or a card on file you charge a fee for a no-show or late cancellation. Confirmations and reminders go out on their own, in German or English.',
          ],
        },
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
        ],
      },
      clinics: {
        districts: ['Charlottenburg', 'Mitte', 'Prenzlauer Berg', 'Schöneberg', 'Zehlendorf', 'Friedrichshain'],
        hero: {
          title: ['Clinics in Berlin,', 'booked calmly.'],
          lead: 'Consultation, treatment, follow-up: your clients book online, in German or English. You secure long treatments with a deposit, and your front desk no longer has to take every conversation by phone.',
        },
        local: {
          title: ['From Charlottenburg to Mitte,', 'the front desk is the bottleneck.'],
          paragraphs: [
            'Aesthetic and wellness clinics in Berlin see clients from across the city and from abroad. Many requests arrive after hours, on WhatsApp or by email, and often in English. With Zenno, clients book consultations and treatments directly on your page, with your prices and real free times.',
            'For long or expensive treatments you ask for a deposit at booking. The AI receptionist answers questions about the process, prices and appointments, and hands anything medical to you. In draft mode you approve every reply yourself.',
          ],
        },
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
        ],
      },
    },
  },
}
