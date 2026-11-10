import { COMPANY, PRIVACY_UPDATED } from './company'
import { companyBlock, companyName, formatDate, type LegalDoc } from './types'

export function privacyDe(): LegalDoc {
  const name = companyName('de')
  return {
    meta: {
      title: 'Datenschutzerklärung | Zenno',
      description: 'Wie Zenno personenbezogene Daten auf zennohq.com, in unserer Werbung und bei Ihrer Kontaktaufnahme verarbeitet, nach DSGVO und thailändischem PDPA.',
    },
    label: 'Datenschutz',
    title: 'Datenschutzerklärung',
    updated: `Stand: ${formatDate(PRIVACY_UPDATED, 'de')}`,
    intro:
      'Diese Erklärung beschreibt, welche personenbezogenen Daten wir verarbeiten, wenn Sie zennohq.com besuchen, unsere Anzeigen sehen oder anklicken oder uns kontaktieren, und welche Rechte Sie haben. Sie folgt der Datenschutz-Grundverordnung (DSGVO) für alle Personen in der EU und dem thailändischen Personal Data Protection Act B.E. 2562 (PDPA).',
    sections: [
      {
        h: '1. Verantwortlicher',
        blocks: [
          { p: `Zenno wird betrieben von ${name}, einem in Thailand eingetragenen Unternehmen. Es ist Verantwortlicher für die hier beschriebene Verarbeitung.` },
          companyBlock('de', { email: 'E-Mail', phone: 'Telefon' }),
          ...(COMPANY.euRepresentative?.length
            ? [{ p: 'Unser Vertreter in der EU nach Art. 27 DSGVO:' }, { lines: COMPANY.euRepresentative }]
            : []),
        ],
      },
      {
        h: '2. Besuch dieser Website',
        blocks: [
          { p: 'Die Website wird von Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet und aus deren Rechenzentrum in Frankfurt ausgeliefert. Beim Aufruf einer Seite speichert der Server automatisch:' },
          { list: ['Ihre IP-Adresse', 'Datum und Uhrzeit des Abrufs', 'die aufgerufene und die zuvor besuchte Seite', 'Browser und Betriebssystem'] },
          { p: 'Das ist nötig, um die Website auszuliefern und sicher zu betreiben (Art. 6 Abs. 1 lit. f DSGVO, unser berechtigtes Interesse an einer funktionierenden, sicheren Website). Vercel speichert diese Protokolle nur kurz. Vercel ist nach dem EU-U.S. Data Privacy Framework zertifiziert.' },
          { p: 'Schriften und Bilder liefern wir von unserer eigenen Domain aus. Die Website lädt keine Google Fonts oder andere Inhalte Dritter und setzt keine Cookies, solange Sie nicht zustimmen (Abschnitt 3).' },
        ],
      },
      {
        h: '3. Cookies und Meta-Pixel (nur mit Ihrer Einwilligung)',
        blocks: [
          { p: 'Wenn Sie im Cookie-Hinweis auf „Akzeptieren“ klicken, laden wir das Meta-Pixel der Meta Platforms Ireland Ltd., Merrion Road, Dublin 4, Irland. Es erfasst, welche unserer Seiten Sie aufrufen und wann Sie auf „Kostenlos starten“ klicken, zusammen mit Ihrer IP-Adresse, Angaben zu Browser und Gerät und einer Meta-Cookie-Kennung.' },
          { p: 'Wir nutzen das, um unsere Anzeigen auf Facebook und Instagram zu messen und Besucherinnen und Besuchern unserer Website unsere Anzeigen zu zeigen. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Für die Erhebung und Übermittlung dieser Daten sind wir und Meta gemeinsam verantwortlich (Art. 26 DSGVO) nach Metas Controller Addendum (facebook.com/legal/controller_addendum); für die weitere Verarbeitung ist allein Meta verantwortlich, siehe facebook.com/privacy/policy. Meta kann Daten in den USA verarbeiten, auf Grundlage des EU-U.S. Data Privacy Framework.' },
          { p: 'Klicken Sie auf „Ablehnen“, wird das Pixel nicht geladen. Ihre Wahl wird in Ihrem Browser gespeichert (Local Storage), damit wir sie beachten können. Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen“ unten auf jeder Seite ändern oder widerrufen.' },
        ],
      },
      {
        h: '4. Unsere Anzeigen auf Facebook und Instagram',
        blocks: [
          { p: 'Links in unseren Anzeigen enthalten Kampagnen-Kennzeichen (z. B. utm_campaign), damit wir sehen, welche Anzeige zu einem Besuch geführt hat. Diese enthalten keine personenbezogenen Daten. Meta zeigt uns nur zusammengefasste Ergebnisse wie Reichweite und Klicks.' },
          { p: 'Wenn Sie eines unserer Meta-Lead-Formulare ausfüllen, übermittelt Meta uns Ihre Angaben (Name, E-Mail, Telefon, Name und Art Ihres Betriebs), damit wir Sie wie gewünscht kontaktieren können (Art. 6 Abs. 1 lit. b DSGVO). Werden Sie keine Kundin bzw. kein Kunde, löschen wir die Angaben nach 12 Monaten.' },
        ],
      },
      {
        h: '5. Kontakt',
        blocks: [
          { p: `Wenn Sie uns per E-Mail (${COMPANY.email}) oder WhatsApp schreiben, nutzen wir Ihre Nachricht und Kontaktdaten, um Ihnen zu antworten (Art. 6 Abs. 1 lit. b oder f DSGVO). WhatsApp wird von der WhatsApp Ireland Ltd., einem Unternehmen von Meta, bereitgestellt. Wir bewahren Unterhaltungen so lange auf, wie es für Ihr Anliegen nötig ist, und löschen sie spätestens nach drei Jahren, sofern das Gesetz keine längere Aufbewahrung verlangt.` },
        ],
      },
      {
        h: '6. Registrierung in der Zenno-App',
        blocks: [
          { p: 'Die Schaltflächen „Kostenlos starten“ führen zur Zenno-App unter book.zennohq.com. Was Sie dort für Ihr Konto eingeben, verarbeiten wir, um den gebuchten Dienst zu erbringen (Art. 6 Abs. 1 lit. b DSGVO). Die eigenen Nutzungsbedingungen und Datenschutzhinweise der App beschreiben diese Verarbeitung.' },
        ],
      },
      {
        h: '7. Daten außerhalb der EU',
        blocks: [
          { p: 'Wir haben unseren Sitz in Thailand, daher werden Daten, die wir erhalten, dort verarbeitet. Unsere Dienstleister Vercel und Meta können Daten in den USA verarbeiten, auf Grundlage des EU-U.S. Data Privacy Framework oder der EU-Standardvertragsklauseln.' },
        ],
      },
      {
        h: '8. Ihre Rechte',
        blocks: [
          { p: 'Nach DSGVO und PDPA haben Sie das Recht auf:' },
          {
            list: [
              'Auskunft über die gespeicherten Daten (Art. 15 DSGVO)',
              'Berichtigung (Art. 16) oder Löschung (Art. 17)',
              'Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20)',
              'Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen und jederzeit gegen Direktwerbung (Art. 21)',
              'jederzeitigen Widerruf einer Einwilligung, ohne dass die bisherige Verarbeitung unrechtmäßig wird (Art. 7 Abs. 3)',
              'Beschwerde bei einer Datenschutzaufsichtsbehörde, in der EU z. B. in Ihrem Wohnsitzland, oder in Thailand beim Office of the Personal Data Protection Committee (PDPC)',
            ],
          },
          { p: `Schreiben Sie dafür an ${COMPANY.email}.` },
        ],
      },
      {
        h: '9. Sonstiges',
        blocks: [
          { p: 'Sie sind nicht verpflichtet, uns personenbezogene Daten zu geben; ohne sie können wir jedoch keine Anfrage beantworten oder kein Konto einrichten. Eine automatisierte Entscheidungsfindung nach Art. 22 DSGVO findet nicht statt.' },
          { p: 'Wir passen diese Erklärung an, wenn sich unsere Website oder Leistungen ändern. Es gilt die oben angegebene Fassung.' },
        ],
      },
    ],
  }
}
