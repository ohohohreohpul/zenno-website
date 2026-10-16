# Zenno Website

The public marketing site — homepage (English + German), the three vertical
landing pages, and the pricing/comparison deep-dives. Fully static: every
route is prerendered at build time, so it can be hosted anywhere that serves
static files.

This is a separate project from `../app` (the product dashboard). It has no
server code, no database, no auth — just static HTML/CSS/JS plus a handful of
build-time-only route handlers (`sitemap.xml`, `robots.txt`, OG images).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

The site does not link into the app: there is no sign-in or sign-up button
for book.zennohq.com. Every "Start free" button goes to one place, set at
build time:

```bash
NEXT_PUBLIC_START_URL=https://your-signup-form-or-calendar
```

Unset, it opens an email to support@zennohq.com. The canonical domain is
`SITE_URL` in `src/lib/marketing/config.ts` (zennohq.com); zennohq.studio is
retired and should redirect there at the DNS/host level.

## Deploying to Vercel

1. Push this `website/` folder to its own Git repo (or import the monorepo
   and set the project's **Root Directory** to `website/` in Vercel's
   project settings).
2. Import the repo in Vercel — framework preset "Next.js" is auto-detected.
3. Optionally add `NEXT_PUBLIC_START_URL` in Project Settings →
   Environment Variables.
4. Deploy. Vercel runs `next build` and serves the static export directly —
   no server function cost since every route is static.

## Deploying to Hostinger (or any static host)

1. Build (optionally with `NEXT_PUBLIC_START_URL` set):
   ```bash
   npm run build
   ```
2. This produces a static site in `out/` — plain HTML, CSS, JS, and images,
   no Node.js server required.
3. Upload the **contents** of `out/` (not the folder itself) to your
   Hostinger `public_html/` directory via the File Manager or FTP/SFTP.
4. Point your domain at that directory. No build step runs on Hostinger —
   you're uploading the already-built static files.

If Hostinger's plan includes Node.js hosting (VPS/Cloud), you can
alternatively remove `output: "export"` from `next.config.ts` and run
`npm run build && npm run start` instead — not necessary for this site,
since nothing here needs a server at request time.

## Structure

```
src/
├── app/                    routes (page.tsx per URL, sitemap.ts, robots.ts, opengraph-image.tsx)
│   ├── de/                 German homepage
│   ├── yoga-studios/       vertical landing pages
│   ├── salons-spas/
│   ├── clinics/
│   ├── pricing/            pricing deep-dive
│   └── comparison/         comparison deep-dive
├── components/marketing/   all UI components (sections, widgets, primitives)
├── lib/marketing/          lang types, GSAP setup, JSON-LD builders, shared content (pricing/comparison/FAQ data)
└── styles/marketing.css    the `.zx`-scoped design system — self-contained, no Tailwind
```

Adding a new language: give each section component a `de`-style entry in its
`STRINGS`/content object, then add a new `app/<locale>/page.tsx` rendering
`<HomePage lang="<locale>" />`.

## Locales, URLs & SEO

German is the primary market and lives at the root; English and Thai are prefixed:

| Locale | Home | Booking | Root layout |
|---|---|---|---|
| Deutsch | `/` | `/booking/` | `src/app/(de)/layout.tsx` |
| English | `/en/` | `/en/booking/` | `src/app/en/layout.tsx` |
| ไทย | `/th/` | `/th/booking/` | `src/app/th/layout.tsx` |

- Each locale has its own root layout so the static HTML ships the right `<html lang>`. Build every
  locale URL with `localePath()` / `homePath()` from `src/lib/marketing/lang.ts` and page metadata
  with `pageMetadata()` from `src/lib/marketing/seo.ts` (canonical + hreflang + Open Graph).
- Content pages (pricing, industries, no-shows, tax-datev, commission-free) are listed in
  `src/lib/marketing/pages.ts`, rendered by `components/marketing/landing/`, with copy per locale in
  `src/lib/marketing/content/landing/`. Every page exists in all three locales at the same slug.
- Old URLs (`/de/`, `/de/booking/`, `/comparison/`, `/en/comparison/`) 301-redirect via
  `public/.htaccess` (Hostinger/Apache) and `vercel.json` (Vercel).
- `public/llms.txt` summarises the product for AI assistants — keep it in sync with real features.
- Canonical domain: `https://zennohq.com` (`SITE_URL` in `src/lib/marketing/config.ts`, overridable
  with `NEXT_PUBLIC_SITE_URL`).
