# Valley Painting Pros — Brand Guidelines

**Version 1.0 · May 2026 · Locked by Creative Production Advisor**

---

## 1. Brand Idea

Valley Painting Pros is the **Trustworthy Desert Craftsman**: a local, family-run, Arizona-licensed cabinet refinishing specialist for East Valley homeowners who want clean prep, durable finishes, and a contractor they can verify. Cabinet refinishing is the only current service. Do not advertise interior painting, exterior painting, or broad painting-company services.

**The brand must read as:** local, craft-forward, substantial, warm, no-nonsense.
**The brand must never read as:** corporate, luxury, tech-adjacent, discount, scrappy.

---

## 2. Logo

| Variant | When to use |
|---------|------------|
| **Stacked, full-color** (on cream) | Primary mark — website hero, business cards, letterhead, social profile when ratio allows |
| **Stacked, full-color reversed** (on charcoal) | Dark backgrounds — truck door, embroidered polo, dark hero sections |
| **Stacked, one-color dark** | Single-color print (yard signs in one ink), embossing |
| **Stacked, one-color reversed** | Single-color on dark (embroidery on charcoal apparel) |
| **Compact horizontal** | Website headers, email signatures, narrow horizontal applications |
| **Monogram only (VP)** | Favicon (16–32px), social avatar (1:1), tight spaces, vehicle badge |

### Logo usage rules

| Rule | Standard |
|------|----------|
| Clear space | Minimum = height of the "V" on all sides |
| Minimum print size | Stacked: 1.25 in wide. Compact horizontal: 1.5 in. Monogram: 0.5 in |
| Minimum digital size | Stacked: 140px. Compact horizontal: 200px. Monogram: 32px |
| Approved backgrounds | Cream `#F2EAD7`, white (only if cream unavailable), charcoal `#1F1A14`, photography with ≥3:1 contrast against logo elements |
| Prohibited | Stretching/distorting, drop shadows, rotation, recoloring outside palette, placing color version on busy photo without solid plate |
| File format by use | Web: SVG primary, PNG@2x fallback. Print: EPS/PDF (vector). Email signature: PNG@2x at 600px max. Social: PNG@2x |
| Embroidery / single-color | One-color variants only. Never attempt the two-color version. |

---

## 3. Color System

### Primary palette

| Token | HEX | Role |
|-------|-----|------|
| **Charcoal** | `#1F1A14` | Wordmark, body text on light, dark backgrounds |
| **Terracotta** | `#C24A22` | The "P" of the monogram, all primary CTAs, accent highlights |
| **Cream** | `#F2EAD7` | Primary light background — replaces pure white throughout the system |
| **Sage** | `#7A9577` | Tertiary accent only (e.g., the green divider tip), "success/complete" semantic states |

### Extended neutrals

| Token | HEX | Role |
|-------|-----|------|
| Cream-50 | `#FAF6EC` | Lightest surface — card backgrounds elevated off the page |
| Cream-200 | `#E8DDC5` | Subtle warmth for elevated panels |
| Warm-gray-400 | `#A39B8C` | Borders, dividers, secondary UI |
| Warm-gray-700 | `#5C544A` | Secondary text, captions |

### Semantic tokens

| Token | Maps to | Role |
|-------|---------|------|
| `color-action` | Terracotta `#C24A22` | All CTA buttons |
| `color-action-hover` | `#A83E1C` (8% darker) | Button hover state |
| `color-success` | Sage `#7A9577` | Estimate accepted, job complete |
| `color-warning` | `#D97706` (warm amber) | Quote expiring |
| `color-error` | `#B91C1C` (warm red) | Form errors |
| `text-primary` | Charcoal `#1F1A14` | Body text on cream |
| `text-inverse` | Cream-50 `#FAF6EC` | Body text on charcoal |
| `bg-base` | Cream `#F2EAD7` | Page background |
| `bg-dark` | Charcoal `#1F1A14` | Dark-mode page background |

### Pairing rules (WCAG AA mandatory)

| Pairing | Use |
|---------|-----|
| Charcoal on cream | All body text, default ✓ |
| Cream on charcoal | All body text on dark, default ✓ |
| Terracotta on cream | CTAs, links, large text ✓ (validate at WebAIM) |
| **Terracotta on charcoal** | **DO NOT USE for text** — insufficient contrast; use as graphic element only |
| Sage on cream | Large text or graphic element only — not body |
| Charcoal on terracotta | CTA button text ✓ |

**Validate every new color pairing at [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/) before deployment.**

### Color don'ts

- No cool blues anywhere in the system
- No pure white (`#FFFFFF`) backgrounds — always cream
- No teal, navy, or cool gray
- No bright cartoon-style primaries
- No gradient backgrounds without explicit brand approval

---

## 4. Typography

| Role | Typeface | Source | Weight |
|------|----------|--------|--------|
| **Display headings** (H1, H2, hero) | Alfa Slab One | Google Fonts (free, OFL) | Regular (only weight available) |
| **Sub-headings** (H3, H4) | Inter | Google Fonts (free, OFL) | 700 (Bold) |
| **Body text** | Inter | Google Fonts (free, OFL) | 400 (Regular) |
| **Labels, buttons** | Inter | Google Fonts (free, OFL) | 500 (Medium) |
| **Captions, legal** | Inter | Google Fonts (free, OFL) | 400 (Regular) |

### Type scale

| Level | Font | Size (desktop) | Size (mobile) |
|-------|------|---------------|---------------|
| Display | Alfa Slab One | 64px / 4rem | 40px / 2.5rem |
| H1 | Alfa Slab One | 48px / 3rem | 32px / 2rem |
| H2 | Alfa Slab One | 32px / 2rem | 26px / 1.625rem |
| H3 | Inter 700 | 24px / 1.5rem | 20px / 1.25rem |
| Body Large | Inter 400 | 18px / 1.125rem | 18px |
| Body | Inter 400 | 16px / 1rem | 16px |
| Body Small | Inter 400 | 14px / 0.875rem | 14px |
| Caption | Inter 400 | 12px / 0.75rem | 12px |

**Fluid CSS pattern:** `font-size: clamp(2.5rem, 5vw, 4rem);`

### Typography don'ts

- No script fonts
- No additional display faces beyond Alfa Slab One
- No additional serifs paired with Alfa Slab One
- No condensed faces
- Never use Alfa Slab One below H3 — it becomes unreadable at body sizes
- Never stack Alfa Slab One in three-line headlines — too heavy; cap at two lines

---

## 5. Photography Style

**Aesthetic anchor:** Real Arizona homes. Real working conditions. Natural light. Warm temperature. Authentic — not stock.

### Direction by category

| Category | Lighting | Composition | Treatment |
|----------|---------|-------------|-----------|
| Exterior results | Overcast preferred; magic hour second choice | Wide establishing + detail close-up pair | Natural color, mild +15 clarity |
| Cabinet refinishing | Window light + reflector; never overhead kitchen light | Slightly above counter, reveal angle | Warm preset, bright/airy |
| Interior results | Available window + supplemental LED panel | Room corner shot captures depth | Consistent warm tone |
| Before/after pairs | Tripod-locked identical angle, distance, time of day | Same crop, same framing | Identical edit treatment both frames |
| Team / credibility | Open shade — never noon sun | Candid working posture > posed stare | Authentic, slightly warm |

### Hard rules

- **Before/after photography must be real.** No AI-fabricated transformations presented as VPP's work.
- **GBP (Google Business Profile) photos must be real, not AI-generated.** Google reviews submissions for authenticity.
- AI may enhance real photos (upscale via Topaz, color correct in Lightroom). Never fabricate.
- Cabinet refinishing reveal photos must include one lifestyle element in the "after" (clean towel, small plant) — signals inhabitable result.

---

## 6. Brand Voice

### Voice: Trustworthy Desert Craftsman

Direct. Confident. Local. Warm without being casual. Never corporate. Never salesy. Never hypey. Write as if Ricardo is talking to a neighbor across the fence.

### Credentials reference

Always specific: **"AZ ROC #363664"** or **"Arizona ROC License #363664"**. Do not use generic "Licensed Contractor" or "ROC Licensed" as the main public trust signal. CR-34 may appear only as supporting license-class context when needed, never in place of the ROC number.

### Voice → Microcopy translation

| Context | Generic (avoid) | VPP voice |
|---------|----------------|-----------|
| CTA on hero | "Get Started" | "Get a Free Estimate" |
| CTA on cabinet ad | "Click Here" | "See My Kitchen's New Look" |
| Confirmation message | "Form submitted!" | "Got it — we'll be in touch within the hour." |
| Trust strip | "Licensed & Insured" | "AZ ROC #363664 · Bonded · $1M/$2M Insured" |
| Service area | "Phoenix Metro" | "East Valley: Gilbert, Mesa, Chandler, Tempe, Scottsdale, Queen Creek" |
| About blurb | "Family-owned business" | "Family-run out of [City], serving the East Valley since [Year]" |

### Hard rules

- No fake urgency ("Only 2 spots left this month!")
- No fake scarcity
- No incentivized review language
- No Hormozi-style manipulative discount framing
- No promises of timelines or pricing without caveats
- No claims of certifications, awards, or partnerships VPP does not hold
- No testimonials unless real, real customer, real quote
- Cabinet refinishing copy: lead with the *outcome* (refreshed kitchen) before the *process* (refinishing) — homeowners buy outcomes

---

## 7. Iconography

**System:** Lucide icons. Free, MIT licensed, consistent stroke weight, pairs cleanly with slab serif logos.

- Use Lucide stroke icons at body text size and up
- Stroke weight: 1.5px at 16px display; 2px at 24px; 2.5px at 32px+
- Color: charcoal for primary, terracotta for action-coupled icons (CTAs)
- Never substitute emojis for UI icons

---

## 8. Quick Reference — Do / Don't

| Do | Don't |
|----|-------|
| Use cream as the default light background | Use pure white anywhere in the brand system |
| Pair Alfa Slab One (display) with Inter (everything else) | Mix in additional display fonts |
| Use terracotta for CTAs and the "P" letterform | Use teal, navy, or cool blue anywhere |
| Always include "AZ ROC #363664" when claiming credentials | Write "Licensed Contractor" generically |
| Always position as East Valley specialist | Position as "Phoenix" in marketing copy (SEO context only) |
| Use real photos of completed VPP jobs | Generate AI photos for GBP or before/after pairs |
| Test contrast at WebAIM before deploying any new color pairing | Use sage green or terracotta as body text on dark backgrounds |
| Keep two lines max on Alfa Slab One headlines | Stack three-line slab headlines (visual weight collapses) |

---

## 9. Asset Library Location

**Master files:** Google Drive → "VPP Brand Assets/" (structure in companion document)
**Templates:** Canva Pro → "VPP Master Templates/"
**House Style Prompt Block:** Notion → VPP Brand Hub → "House Style Prompt Block v1.0" (prepend to every AI generation session)

---

## 10. Change Log

| Version | Date | Change |
|---------|------|--------|
| 1.0 | May 2026 | Initial locking. Brand identity derived from approved logos by Creative Production Advisor. |

---

*Brand drift detection: monthly audit per Section 1j of the Creative Production Advisor. Review 20 recent AI-generated outputs; if any category averages below 3.5/5 on palette/photography/setting/tone, update the House Style Prompt Block and regenerate from canonical reference set.*
