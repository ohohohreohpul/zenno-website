import { COMPANY, PRIVACY_UPDATED } from './company'
import { companyBlock, companyName, formatDate, type LegalDoc } from './types'

export function privacyEn(): LegalDoc {
  const name = companyName('en')
  return {
    meta: {
      title: 'Privacy policy | Zenno',
      description: 'How Zenno handles personal data on zennohq.com, in our ads and when you contact us, under the GDPR and the Thai PDPA.',
    },
    label: 'Privacy',
    title: 'Privacy policy',
    updated: `Last updated ${formatDate(PRIVACY_UPDATED, 'en')}`,
    intro:
      'This policy explains what personal data we process when you visit zennohq.com, see or click our ads, or contact us, and what rights you have. It applies the EU General Data Protection Regulation (GDPR) to everyone in the EU and the Thai Personal Data Protection Act B.E. 2562 (PDPA).',
    sections: [
      {
        h: '1. Who is responsible',
        blocks: [
          { p: `Zenno is operated by ${name}, a company registered in Thailand. It is the controller for the processing described here.` },
          companyBlock('en', { email: 'Email', phone: 'Phone' }),
          ...(COMPANY.euRepresentative?.length
            ? [{ p: 'Our representative in the EU under Art. 27 GDPR:' }, { lines: COMPANY.euRepresentative }]
            : []),
        ],
      },
      {
        h: '2. Visiting this website',
        blocks: [
          { p: 'The site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, and served from its data centre in Frankfurt. When you open a page, the server automatically records:' },
          { list: ['your IP address', 'date and time of the request', 'the page requested and the referring page', 'browser and operating system'] },
          { p: 'We need this to deliver the site and keep it secure (Art. 6(1)(f) GDPR, our legitimate interest in a working, safe website). Vercel keeps these logs only for a short period. Vercel is certified under the EU-U.S. Data Privacy Framework.' },
          { p: 'Fonts and images are served from our own domain. The site does not load Google Fonts or advertising content from third parties, and it sets no cookies unless you agree to them (section 3).' },
          { p: 'Visitor statistics: every page loads Open Analytics, an open-source analytics tool, from c.reporting.ohitsoh.com, so we can see which pages are read and how fast the site loads. It records:' },
          { list: ['the page address and title, the referring page and campaign tags in the link', 'device type and screen size', 'time spent on the page', 'clicks on links and buttons, including their label', 'loading speed'] },
          { p: 'Your IP address is transmitted for technical reasons. Open Analytics sets no cookies and does not follow you across other websites. It stores nothing on your device. The legal basis is our legitimate interest in understanding and improving our website (Art. 6(1)(f) GDPR, PDPA section 24(5)); you can object at any time (section 8). The service runs on servers of Railway Corp., USA.' },
        ],
      },
      {
        h: '3. Cookies and the Meta pixel (only with your consent)',
        blocks: [
          { p: 'If you click "Accept" in the cookie banner, we load the Meta pixel of Meta Platforms Ireland Ltd., Merrion Road, Dublin 4, Ireland. It records which of our pages you visit and when you click "Start free", and on the sign-up and dashboard pages of the Zenno app (book.zennohq.com, with its own cookie banner) also when you create an account or buy a plan, together with your IP address, browser and device details and a Meta cookie identifier.' },
          { p: 'We use it to measure our ads on Facebook and Instagram and to show our ads to people who have visited our site. Legal basis: your consent (Art. 6(1)(a) GDPR, § 25(1) German TDDDG). For the collection and transmission of this data we and Meta are joint controllers (Art. 26 GDPR) under Meta\'s Controller Addendum (facebook.com/legal/controller_addendum); Meta alone is responsible for what happens afterwards, described at facebook.com/privacy/policy. Meta may process data in the USA under the EU-U.S. Data Privacy Framework.' },
          { p: 'If you click "Decline", the pixel is not loaded. Your choice is stored in your browser (local storage), which is needed to respect it. You can change or withdraw your consent at any time under "Cookie settings" at the bottom of every page.' },
        ],
      },
      {
        h: '4. Our ads on Facebook and Instagram',
        blocks: [
          { p: 'Links in our ads carry campaign tags (for example utm_campaign) so we can see which ad brought a visit. These tags contain no personal data. Meta shows us only aggregated results such as reach and clicks.' },
          { p: 'If you fill in one of our Meta lead forms, Meta passes us the details you enter (name, email, phone, business name and type) so we can contact you as you asked (Art. 6(1)(b) GDPR). We delete them after 12 months if you do not become a customer.' },
        ],
      },
      {
        h: '5. Contacting us',
        blocks: [
          { p: `If you write to us by email (${COMPANY.email}) or WhatsApp, we use your message and contact details to answer you (Art. 6(1)(b) or (f) GDPR). WhatsApp is provided by WhatsApp Ireland Ltd., part of Meta. We keep conversations as long as needed to deal with your request and delete them after three years at the latest, unless the law requires us to keep them longer.` },
        ],
      },
      {
        h: '6. Signing up for the Zenno app',
        blocks: [
          { p: 'The "Start free" buttons take you to the Zenno app at book.zennohq.com. What you enter there to create an account is processed to provide the service you sign up for (Art. 6(1)(b) GDPR). The app\'s own terms and privacy notice cover that processing.' },
        ],
      },
      {
        h: '7. Data outside the EU',
        blocks: [
          { p: 'We are based in Thailand, so data we receive is processed there. Our service providers Vercel and Meta may process data in the USA, under the EU-U.S. Data Privacy Framework or the EU Standard Contractual Clauses. Railway, which hosts our visitor statistics, processes data in the USA.' },
        ],
      },
      {
        h: '8. Your rights',
        blocks: [
          { p: 'Under the GDPR and the PDPA you have the right to:' },
          {
            list: [
              'access the data we hold about you (Art. 15 GDPR)',
              'have it corrected (Art. 16) or deleted (Art. 17)',
              'restrict its processing (Art. 18) and receive it in a portable format (Art. 20)',
              'object to processing based on our legitimate interests, and always to direct marketing (Art. 21)',
              'withdraw a consent at any time, without affecting what happened before (Art. 7(3))',
              'complain to a data protection authority, in the EU for example in the country where you live, or in Thailand to the Office of the Personal Data Protection Committee (PDPC)',
            ],
          },
          { p: `To use these rights, email ${COMPANY.email}.` },
        ],
      },
      {
        h: '9. Other points',
        blocks: [
          { p: 'You are not obliged to give us personal data, but without it we cannot answer a request or set up an account. We do not make automated decisions about you within the meaning of Art. 22 GDPR.' },
          { p: 'We update this policy when our website or services change. The date at the top shows the current version.' },
        ],
      },
    ],
  }
}
