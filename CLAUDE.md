# CLAUDE.md — Valley Painting Pros Website

## WHAT THIS PROJECT IS
Marketing website for Valley Painting Pros, a residential/commercial painting company in the East Valley (Chandler, Gilbert, Mesa, Tempe), Arizona. The website's single purpose: convert visitors into quote requests or phone calls. Every design decision serves that conversion goal.

## TECH STACK
- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Hosting:** Vercel (free tier, auto-deploys from GitHub)
- **Fonts:** Google Fonts — DM Serif Display, Outfit, Lora
- **Forms:** Resend or Formspree for email delivery to valleypaintingprosllc@gmail.com
- **No database needed for Phase 1.** Static marketing site with a contact form.

## BRAND SYSTEM — v3.0

### Tailwind Color Config
```js
// tailwind.config.js — extend colors
colors: {
  ink: '#1E1C1A',        // headlines, primary text
  brown: '#4A3728',      // body copy, warm text
  mid: '#7A6558',        // labels, metadata, supporting text
  rule: '#C4B9AF',       // dividers, borders
  terra: '#C4613A',      // primary accent — CTAs, highlights, "Pros" italic
  'terra-light': '#D4825E', // hover states
  'terra-dark': '#9E4A2A',  // pressed states
  sage: '#6B8C6E',       // cabinet sub-brand ONLY — never on main brand pages
  'sage-light': '#8FAF92',
  sand: '#E8DDD4',       // card backgrounds, section fills
  'sand-light': '#F2EDE8',  // subtle surface variation
  cream: '#FAF7F4',      // page background — NEVER use pure white
  white: '#FFFFFF',      // use sparingly — cards on sand backgrounds only
}
```

### Font Config
```js
// Import in layout.tsx
import { DM_Serif_Display, Outfit, Lora } from 'next/font/google'

const dmSerif = DM_Serif_Display({ weight: ['400'], subsets: ['latin'], variable: '--font-display' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-body' })
const lora = Lora({ subsets: ['latin'], style: ['italic'], variable: '--font-accent' })
```

### Typography Rules
- **DM Serif Display** — page titles, section headings, brand name only. Never for body copy or functional text.
- **Outfit** — all body copy, labels, navigation, CTAs, metadata. Weights 300/400/500/600.
- **Lora italic** — pull quotes, testimonial text. Sparingly.
- **"Pros" is ALWAYS italic DM Serif Display in terra (#C4613A)** wherever the brand name appears.
- DM Serif Display and Outfit never appear on the same line.
- Minimum 16px body text. Minimum 44×44px tap targets.

### Color Rules
- Page background is always cream (#FAF7F4). Never pure white (#FFFFFF) as a page background.
- Terracotta (#C4613A) is accent only — CTAs, rule lines, price callouts, hover states. Never as a large background fill.
- Sage (#6B8C6E) appears ONLY on the /cabinet-care page. Never on homepage, services pages, or any page representing VPP as a full-service company.
- All interactive elements (buttons, links, form focus states) use terra, not Tailwind default blue.

### Permanently Retired — Never Use
- Copper #B87333
- Any black darker than ink #1E1C1A
- Pure white #FFFFFF as page background
- Navy, royal blue, purple, red, or any color outside the palette above

## COMPANY DETAILS — USE EXACTLY

- **Company name:** Valley Painting Pros (legal: Valley Painting Pros, LLC)
- **Phone:** (480) 433-2680 — this exact number on every page, always as tap-to-call: `<a href="tel:+14804332680">(480) 433-2680</a>`
- **License:** AZ ROC #363664 — on every page (footer minimum, credential sections where relevant)
- **Email:** valleypaintingprosllc@gmail.com
- **Service area:** Chandler, Gilbert, Mesa, Tempe (East Valley, Arizona)
- **Google reviews:** All 5-star, 7+ reviews
- **Tagline lockup:** "Licensed · East Valley · AZ ROC #363664"

## PAGE STRUCTURE — BUILD ORDER

Build in this sequence. Each page is committed and working before the next starts.

### 1. /cabinet-repainting (BUILD FIRST — this is the QR destination)
Single-purpose conversion landing page for cabinet refinishing leads.
- Hero: headline + subheadline + CTA button + phone number (all above fold on 375px)
- Social proof bar: "5-Star Rated · ROC Licensed · East Valley's Cabinet Specialists"
- Before/After: image placeholder section with terra borders (real photos dropped in later)
- How It Works: 3 steps — Free Quote → Schedule → Transform
- Why VPP: proof points (5-star rated, ROC #363664, perfectionists, on-time)
- Pricing anchor: "$125 per door · 3–5 days · 5-year warranty"
- Quote request form: name, phone, how did you hear about us (3 fields max)
- Footer: company name, ROC#, service area, phone, copyright

**SEO:** Title "Cabinet Refinishing Chandler AZ | Valley Painting Pros" — meta description includes price anchor and timeline.

### 2. / (Homepage)
Overview of all services. Hero with primary CTA. Service cards linking to individual pages. Testimonials. Footer with full credentials.

### 3. /interior-painting
Service page. Scope, process, what's included/not included, CTA.

### 4. /exterior-painting
Service page. Same structure as interior.

### 5. /about
Ricardo's story. VPP's mission. Credentials. Team. Why VPP exists.

### Future (not Phase 1):
/cabinet-care (sage sub-brand page), /gallery, /blog

## COMPONENT PATTERNS

### Layout
- Mobile-first: design at 375px, then scale up.
- Max content width: 1200px centered.
- Generous spacing — prefer more padding over less.
- Border radius: rounded-xl or rounded-2xl for cards. Never sharp corners.
- Shadows: soft, warm (shadow-sm or shadow-md). No harsh drop shadows.

### Navigation
- Sticky header: logo (Asset 03 Compact Horizontal) + nav links + phone number (tap-to-call) + CTA button
- Mobile: hamburger menu with full-screen overlay
- Phone number visible in header at all screen sizes

### CTA Buttons
- Primary: bg-terra text-white, hover bg-terra-light, rounded-xl, px-6 py-3, Outfit 600 uppercase tracked
- Secondary: border-terra text-terra, hover bg-terra hover text-white
- Every page has one primary CTA above the fold

### Forms
- 3 fields maximum for quote requests (name, phone, how did you hear about us)
- Service type auto-filled based on which page the form is on
- Submit button is primary CTA style
- Success state: clear confirmation message, no redirect
- Phone field: tel input type for mobile keyboard

### Footer
- Every page: Valley Painting Pros, LLC | AZ ROC #363664 | (480) 433-2680
- Service area: Chandler · Gilbert · Mesa · Tempe
- ROC complaint notice not required on website per H.B. 2545, but ROC# on homepage is required per ROC Policy 2021.02

## SEO REQUIREMENTS

### Every Page
- Unique title tag: [Primary Keyword] [City] AZ | Valley Painting Pros
- Meta description: specific, includes a number (price or timeline), under 160 chars
- H1: one per page, includes primary keyword
- Image alt text: descriptive, location-specific (never empty, never "image")
- Internal links between service pages

### LocalBusiness Schema (add to layout)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Valley Painting Pros",
  "telephone": "+14804332680",
  "email": "valleypaintingprosllc@gmail.com",
  "url": "https://valleypaintingpros.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chandler",
    "addressRegion": "AZ"
  },
  "areaServed": ["Chandler", "Gilbert", "Mesa", "Tempe"],
  "priceRange": "$$"
}
```

### Performance Targets
- LCP under 2.5 seconds (hero content loads fast — critical for QR code scans on spotty cell)
- CLS: zero layout shift (no elements jumping on load)
- Images: WebP format, lazy load below the fold, explicit width/height to prevent CLS
- Fonts: next/font for zero-FOUT loading

## WORKFLOW RULES

### Context Management
- Use `/compact` before 50% context usage
- Use `/clear` between unrelated tasks
- Start a fresh session after completing each page
- After two failed corrections on the same issue: `/clear` and write a better prompt

### Build Process
- Use Plan Mode (Shift+Tab twice) before building anything new
- Build one component at a time — never "build me a whole page"
- Commit after every working feature: `git add . && git commit -m "[description]"`
- Test at 375px width after every change
- Check that phone number is tap-to-call after every page build
- Check that ROC #363664 appears on every page after every build

### Deployment
- `vercel --prod` for production deploys
- Verify live site after every deploy
- Domain: valleypaintingpros.com (configure in Vercel dashboard)

## NEVER DO
- Use placeholder text (lorem ipsum) — use real VPP copy or leave a clear TODO comment
- Use Tailwind default blue for any interactive element — always terra
- Use stock contractor photography — leave image placeholders for real photos
- Add chatbots, popups, or cookie banners unless explicitly requested
- Use colors outside the v3.0 palette defined above
- Build without committing — uncommitted work is lost work
- Use generic contractor language ("we're the best!", "quality you can trust", "free estimate")
- Use "we" in client-facing copy — Ricardo is the face, use "I" for personal voice

## REFERENCE FILES
These files contain the full brand and strategic context. They are NOT in this repo — they live in the Cowork working directory and Google Drive. Reference them for detailed guidance:
- **Brand Identity v3.0** — full color specs, typography rules, logo system, voice principles
- **Logo System v3.0** — 8 SVG variants, clearspace rules, usage restrictions
- **VPP-STRATEGY.md** — business strategy, client profiles, marketing approach, pricing
- **Copy & Marketing Frameworks v2.0** — headline structures, awareness stages, offer construction

Logo SVGs are in Google Drive: VPP — Brand Assets / 01 — Confirmed Assets / Logos/

---

*CLAUDE.md for VPP website repo — v1.0 — March 2026*
*This file governs all Claude Code behavior in this repository.*
*Update when brand system changes, pages are added, or tech stack evolves.*
