# Quiz funnel for Zenno: research and design

**Goal:** cold Meta traffic → a 60-second quiz → a personal "what Zenno is worth to your studio" estimate → sign-up (and, where it pays off, the paid plan) on the spot.

**Recommendation in one line:** an 8-question quiz on zennohq.com that ends in a monthly euro estimate with the maths shown, then sends people straight into sign-up with their answers carried over. No email wall: the sign-up *is* the gate. Run ads to it optimising on "quiz completed" first (more signal for a small budget), then switch to sign-ups.

---

## 1. What the research says

| Finding | Evidence | Confidence |
|---|---|---|
| Quiz landing pages convert better than static pages | ConvertFlow, 1,063 quiz campaigns: 10.45 % mean conversion for quiz landing pages ([ConvertFlow, Sept 2026](https://www.convertflow.com/benchmark-reports/lead-generation-quiz-funnel-benchmark-september-2026)), against a 6.6 % median across 41k landing pages (Unbounce, via [leadgen-economy](https://www.leadgen-economy.com/blog/lead-generation-landing-page-funnels-guide/)) | Medium: vendor data, different denominators |
| Multi-step beats one long form when there are several questions | Formstack: 13.9 % multi-page vs 4.5 % single-page ([Zuko](https://zuko.io/blog/single-page-or-multi-step-form), [bird.marketing](https://bird.marketing/blog/digital-marketing/guide/conversion-rate-optimization/multi-step-vs-single-step-forms-conversions/)). Works through the "endowed progress" effect: a progress bar makes people finish | Medium: vendor figures, consistent direction |
| Each extra step loses people | Often cited 15–30 % drop-off per page ([GrowthSuite](https://www.growthsuite.net/questions/does-a-one-page-quiz-convert-better-than-multi-step-for-my-audience)) | Low: no data behind it. Keep it short: 6–9 taps |
| Ask for contact after the last question, before the result | People who answered 8 questions want their number ([involve.me ROI template](https://www.involve.me/templates/roi-calculator-for-software)) | Medium: common practice |
| Let people enter their own numbers; show the working | Flattering defaults kill trust; traceable sums convince ([involve.me](https://www.involve.me/templates/roi-calculator-for-software)) | High: also a legal must in Germany (UWG §5, no misleading claims) |
| Industry already uses calculators | Zenoti runs a no-show revenue calculator: business type + volume + average ticket → yearly loss ([Zenoti](https://www.zenoti.com/thecheckin/no-show-revenue-calculator)) | Fact |

### Numbers we can use inside the estimate (with sources, conservative)

- **Bookings made while the studio is closed:** 46 % of appointments across 5,000+ salons (Phorest, 2019) ([Professional Beauty](https://professionalbeauty.co.uk/site/newsdetails/40percentage-of-online-bookings-made-while-salons-are-shut), [HJI](https://hji.co.uk/nearly-half-of-salon-appointments-booked-outside-of-salon-hours)); 53 % in Booksalon's data ([HJI](https://hji.co.uk/data-shows-majority-of-british-salon-appointments-are-booked-outside-opening-hours)).
- **No-shows:** widely quoted "up to 30 %" is a high-end vendor figure; realistic estimates run 8–15 % ([SimplyBook](https://simplybook.me/en/blog/cost-of-no-shows), [Fresha survey](https://www.fresha.com/blog/cancellations-cost-study): 56 % of businesses lose under 5 % of revenue). → **Ask the owner** instead of assuming.
- **Gift cards:** 6 in 10 recipients spend more than the card's value (Blackhawk via [Zenoti](https://zenoti.com/thecheckin/how-gift-cards-can-fuel-post-holiday-growth-for-salons-spas-medspas-barbershops-and-fitness-studios)); about 31 % visit a business for the first time because of a gift card ([SchedulingKit](https://schedulingkit.com/statistics/gift-card-industry-statistics)).

All of these are vendor-reported. Inside the quiz we only use them as **labelled assumptions** ("industry studies: about 46 % …"), never as promises.

---

## 2. Why this fixes our problem

Today: ad → sign-up page. 40 link clicks → 3 sign-ups in 3 days. At €30/day Meta gets about one conversion a day, too little to learn from.

With the quiz:
1. **More signal for Meta.** "Quiz completed" happens maybe 5–10× more often than a sign-up, so the campaign can learn on that event, then move to sign-ups once there are ~50 a week.
2. **Higher intent at sign-up.** Someone who just saw "≈ €640/month for your studio" signs up for a reason, and lands on the plan that fits.
3. **Qualification for free.** We learn studio type, size and pain before the first call. Hot answers (big team, high commission, many no-shows) can get a personal WhatsApp follow-up.

---

## 3. The quiz (DE / EN / TH, one question per screen, progress bar)

Header: **„Was bringt Zenno Ihrem Studio? In 60 Sekunden ausrechnen."**

| # | Question | Answers (tap) | Used for |
|---|---|---|---|
| 1 | Was für ein Studio haben Sie? | Massage/Spa · Kosmetik · Nägel · Friseur · Anderes | Copy + segment |
| 2 | Wie viele Personen behandeln bei Ihnen? | Nur ich · 2–3 · 4–9 · 10+ | Plan recommendation |
| 3 | Termine pro Woche (ungefähr)? | <20 · 20–50 · 50–100 · 100+ | All sums |
| 4 | Was zahlt Kundschaft im Schnitt pro Termin? | €40 · €60 · €80 · €120+ | All sums |
| 5 | Wie buchen Ihre Kunden heute? (multi) | Telefon/WhatsApp · Marktplatz/App · eigenes Buchungstool · Instagram-DM | After-hours + commission |
| 6 | *(only if Marktplatz)* Wie viele Buchungen kommen dort im Monat neu rein, und welche Provision zahlen Sie? | slider 0–60 · 15 % / 25 % / 35 % / weiß nicht | Commission sum (their own numbers, we never state a competitor's rate) |
| 7 | Wie viele Termine platzen pro Woche ohne Absage? | 0 · 1–2 · 3–5 · mehr | No-show sum |
| 8 | Verkaufen Sie Gutscheine? | Nein · Ja, auf Papier · Ja, online | Gift-card sum |
| 9 | Wie viele Stunden pro Woche gehen für Nachrichten und Telefon drauf? | <2 · 2–5 · 5–10 · 10+ | Time saved |

Then: **result screen** (no email wall).

---

## 4. The estimate (shown with the working, as a range)

Let `B` = bookings/week, `T` = average ticket, months = ×4.3.

| Line | Formula (monthly) | Assumption we print |
|---|---|---|
| **Provision gespart** | marketplace bookings/month × T × their commission % | Their own answers. Only if they use a marketplace. |
| **Buchungen außerhalb der Öffnungszeiten** | B × 4.3 × 46 % × 5–10 % × T | "Studien: ~46 % der Buchungen passieren, wenn das Studio zu hat. Wir rechnen damit, dass Sie davon nur 5–10 % heute verlieren." Only if they book by phone/DM only. |
| **Weniger No-Shows** | no-shows/week × 4.3 × T × 25–40 % | "Automatische Erinnerungen verhindern einen Teil der Ausfälle; wir rechnen vorsichtig mit 25–40 %." |
| **Gutscheine online** | B × 4.3 × 3–5 % × €50 | "Wenn 3–5 % Ihrer Kundschaft im Monat einen Gutschein à €50 kauft." Doubled in Nov/Dec. Only if not already online. |
| **Zeit gespart** | hours/week × 4.3 × 40–60 % | Shown in hours, not euros. |

**Result screen:**
```
Ihr Studio: ca. €410–690 mehr im Monat
und 9–13 Stunden weniger am Handy.

  Provision gespart ............ €260
  Buchungen nachts ............. €60–120
  Weniger No-Shows ............. €50–80
  Gutscheine online ............ €40–230   (Nov/Dec ×2)
  ─────────────────────────────────────
  Zenno kostet: €0 (Free) oder €49 (Pro)

  [ Jetzt kostenlos starten → ]     ← answers carried into sign-up
  So rechnen wir ▾                  ← every assumption, with sources
  Schätzung, keine Garantie. Ihre Zahlen können abweichen.
```

Rules for the result:
- **Always a range**, always "ca.", always the "So rechnen wir" drawer with sources. That keeps it legal (UWG) and believable.
- **Cap the total** (e.g. never over 40 % of their monthly revenue B × 4.3 × T) so a mis-tap doesn't produce a silly number.
- **Plan recommendation:** solo and under €200 estimate → Free plan. 2+ people or over €200 → "Pro für €49 zahlt sich ca. 8× aus" + start trial.
- **Christmas switch (Nov–Dec):** gift-card line on top, CTA "Gutschein-Shop vor Weihnachten startklar machen".

---

## 5. Hand-off to sign-up ("convert right away")

- The CTA goes to `book.zennohq.com/signup?plan=pro&type=massage_spa&team=2-3&src=quiz` (answers only, never personal data in the URL).
- The app pre-selects the plan and studio type, so the owner only adds email and password.
- Optional second CTA for big studios (4+ people or estimate over €1,000): **"Lieber kurz sprechen? WhatsApp"**, which goes to you with the answers prefilled.
- Thank-you screen in the app: "Your gift-card shop is ready to set up" (Nov/Dec) to get them to value fast.

---

## 6. Tracking and ads

| Step | Pixel event | Notes |
|---|---|---|
| Quiz opened | `ViewContent` (content_name: quiz) | |
| Question 3 answered | custom `QuizEngaged` | Drop-off check |
| Result shown | `Lead` with `value` = estimate midpoint | **Optimisation event, phase 1** |
| CTA clicked | custom `QuizToSignup` | |
| Account created (app) | `CompleteRegistration` | **Optimisation event, phase 2** (from ~50/week) |
| Paid | `Purchase` | Already tracked in the app |

Plus Open Analytics on every step for the funnel view (already on the site, no cookies).

**Campaign:** new Sales campaign "Zenno – Quiz – Dec26", conversion location website, optimise on `Lead` (quiz completed), same 3 ad sets (Thai first, it's the cheapest). Creatives: the low-effort statics with a quiz hook: "Wie viel Provision zahlen Sie wirklich? 60-Sekunden-Rechner" / "คำนวณดูไหม ร้านคุณเสียค่าคอมไปเท่าไหร่ต่อเดือน".

**Success check after 7 days:** cost per quiz completion under €3, quiz → sign-up at least 15 %, which works out at roughly ≤ €20 per sign-up (today ≈ €28).

---

## 7. Build plan

1. Quiz page in this repo: `/rechner` (DE), `/en/calculator`, `/th/calculator`, client-side React, no backend. Copy and formulas in one content file per locale (like the legal pages).
2. Pixel events behind the existing cookie consent, plus Open Analytics events.
3. App: read `plan`, `type`, `team` query params on `/signup` (small change in onbuuk2025).
4. Ads: new campaign built paused, ~6 quiz-hook statics, then your go.

Effort: about one day for 1–2, half a day for 3–4.
