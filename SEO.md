# SEO Guide — 20 Objections That Cost You Sales

Technical SEO implementation reference for this site. Nothing here claims
rankings or indexing — those only happen after Search Console verification.

## 1. Environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://your-verified-domain.com   # required in production
NEXT_PUBLIC_WHATSAPP_NUMBER=255746274010                # has a safe fallback
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX              # optional, enables GA4
```

`NEXT_PUBLIC_SITE_URL` must be the real production domain (https, no trailing
slash). It drives `metadataBase`, canonical URLs, sitemap, robots and JSON-LD.
If unset it falls back to `http://localhost:3000` — fine for dev, wrong for prod.

## 2. Keyword map

| Keyword | Target page / section |
| --- | --- |
| 20 Objections That Cost You Sales | `/` (title, book section, Book schema) |
| How to handle customer objections | `/blog/how-to-handle-customer-objections` |
| Sales objection handling | `/` + `#benefits`, blog posts |
| How to close more sales | `/blog/how-to-close-more-sales` |
| Sales training in Tanzania | `/blog/sales-training-in-tanzania` |
| Sales techniques | `/blog/sales-techniques-for-business-owners` |
| Customer objections and responses | `/` objections section + blog |
| Jinsi ya kushughulikia pingamizi za wateja | `/` hero + objections section |
| Mbinu za kuongeza mauzo | `/blog/sales-techniques-for-business-owners` |
| Namna ya kufunga mauzo | `/blog/how-to-close-more-sales` |
| Mafunzo ya mauzo Tanzania | `/blog/sales-training-in-tanzania` |
| Jinsi ya kujibu wateja wanaosema bei ni kubwa | `/blog/how-to-respond-when-a-customer-says-your-price-is-too-high` |
| Vitabu vya biashara na mauzo | `/` book section |
| Mbinu za kushawishi wateja kununua | `/blog/how-to-close-more-sales` |
| How to respond when a customer says your price is too high | `/blog/how-to-respond-when-a-customer-says-your-price-is-too-high` |
| How to handle customers who say they will think about it | `/blog/how-to-handle-customers-who-say-i-will-think-about-it` |
| How to handle competitor objections | `/blog/how-to-handle-competitor-objections` |
| How to close a sale when a customer hesitates | `/blog/how-to-close-more-sales` |
| Best book for learning sales techniques | `/` book section + blog CTAs |

## 3. What was implemented

- **Metadata** (`app/layout.tsx`): `metadataBase`, title + template, Swahili
  description, canonical, Open Graph (`sw_TZ`), Twitter card, robots, icons,
  theme color, PWA manifest + Apple web-app tags.
- **`app/sitemap.ts`**: homepage, `/blog`, all 7 article URLs.
- **`app/robots.ts`**: allows public crawling; disallows `/api/`, `/admin/`,
  `/dashboard/`, `/private/`; advertises the sitemap.
- **JSON-LD** (`components/json-ld.tsx` on `/`, per-article on blog posts):
  `WebSite`, `Organization` (High Return Consulting), `Person` (Kenedy Njume),
  `Book` + `Offer` (TSh 30,000, TZS), `FAQPage` (built from the real FAQ data),
  `Article` + `BreadcrumbList` per post. Only facts visible on the site — no
  invented ISBN, publisher, ratings, addresses, or reviews.
- **Headings**: exactly one H1 (hero). Sections use prescribed H2 copy;
  author section fixed from `<h1>` to `<h2>`.
- **Blog** (`app/blog`, `lib/blog-posts.ts`): index + 7 original Swahili
  articles, each with unique metadata, canonical, Article schema, author box,
  related links and a WhatsApp book CTA.
- **Analytics** (`components/analytics.tsx`, `lib/analytics.ts`): GA4 only
  loads when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set. Events: `page_view`
  (automatic), `whatsapp_click`, `purchase_intent`, `install_app_click`,
  `install_app_success` with `book_title`, `price`, `currency`,
  `button_location`, `page_location` params. WhatsApp clicks are tracked as
  purchase **intent**, never as sales.

## 4. Google Search Console setup

1. Go to https://search.google.com/search-console → **Add property**.
   Prefer a *Domain* property (covers all subdomains/protocols).
2. Verify ownership: copy the TXT record GSC gives you and add it to your
   domain's DNS at the registrar/host. Verification can take a few minutes
   after DNS propagates. (Alternative: URL-prefix property + HTML file in
   `public/` if you can't edit DNS.)
3. After deploying with `NEXT_PUBLIC_SITE_URL` set, submit the sitemap:
   **Sitemaps → Add a new sitemap → `sitemap.xml` → Submit**.
4. Use **URL Inspection** on `/`, `/blog` and each article →
   **Request indexing** for the important ones.
5. Over time monitor **Performance** (queries/impressions), **Page indexing**
   (what's indexed vs excluded and why) and **Core Web Vitals**.

Do not state the site is "indexed" until Page indexing actually shows the URLs.

## 5. Canonical / duplicate-URL strategy

- Every page sets `alternates.canonical` — canonical is derived from
  `NEXT_PUBLIC_SITE_URL`, so http/https and www/non-www resolve consistently
  to whatever you configure at the host.
- Set permanent redirects at the hosting layer (Vercel/Netlify/NGINX) to the
  chosen variant: `http → https` and `www → apex` (or the reverse — pick one).
  Next 16 `redirects()` in `next.config` also works if you control the apex.
- Don't publish tracking params (`?utm_…`) as canonical links; canonical tags
  ignore them, so sharing tagged links is fine.

## 6. Multilingual (future) plan

Keep `/` as the Swahili homepage. When a real English translation exists:

- Route groups or middleware for `/sw/` and `/en/` (or keep `/` = sw and add `/en/`).
- Per-locale `alternates.languages` metadata: `{ "sw-TZ": "/sw", "en": "/en", "x-default": "/" }`.
- Full translated content + metadata per locale — no machine-duplicated pages.
- Don't ship incomplete `/en/` routes.

## 7. Honesty constraints (don't regress these)

- Testimonial globe quotes are **sample placeholders**, not real customer
  reviews — they are intentionally excluded from `Review`/aggregateRating
  schema. Replace copy with real testimonials before claiming anything.
- No ISBN, publisher, publication date, business address or awards are
  asserted anywhere because none are verified. Add them to `json-ld.tsx` only
  when confirmed.
- WhatsApp clicks ≠ sales. Report them as leads/purchase intent only.

## 8. Verification run

Run before/after deploy:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Then on the deployed site:

- `curl https://domain.com/sitemap.xml` — all public URLs, correct domain.
- `curl https://domain.com/robots.txt` — expected disallow rules + sitemap URL.
- View-source `/` — one canonical link, OG tags, JSON-LD blocks.
- Google Rich Results Test on `/` and one blog URL — Book/FAQ/Article should
  parse without errors (warnings for missing optional fields are fine).
- PageSpeed Insights on `/` mobile — track LCP/INP/CLS.

## 9. Known limitations

- Lighthouse/Rich Results tests can't run locally here — verify post-deploy.
- GA4 events only fire when a measurement ID is configured; nothing is sent
  otherwise (no dead script tags either).
- `NEXT_PUBLIC_SITE_URL` absent in production → canonical/sitemap point at
  localhost. Set it before launch.
