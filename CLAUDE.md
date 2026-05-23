# CLAUDE.md — VPP Website

**Last updated:** April 10, 2026

---

## WHAT THIS IS

This is the website for **Valley Painting Pros (VPP)** — a cabinet refinishing business in the East Valley / Phoenix, Arizona area. Cabinet refinishing is the **only** service. No interior painting, no exterior painting.

**Stack:** Next.js · Vercel · GitHub (`tonymolinaaaa-wq/vpp-website`, main branch)
**Live URL:** `vpp-website.vercel.app`
**Production domain:** `www.valleypaintingpros.com` (live on Vercel)

---

## SOURCE OF TRUTH — AUDIT AGAINST THESE

Reference files are in `/docs` (or provided as context). When the website contradicts these files, the files win.

| File | Governs |
|---|---|
| `VPP_Irresistible_Offer.md` | All pricing, inclusions, value stack, competitive positioning, offer mechanics |
| `VPP_Cabinet_Refinishing_Master_Process.md` | Service descriptions, process details, differentiators |
| `brand/guidelines/vpp-brand-guidelines-v1.0.md` | Current brand guidelines, voice, logo routing, production rules |
| `brand/color/vpp-brand-tokens.json` | Current color, type, spacing, surface, and semantic tokens |
| `brand/type/vpp-typography-spec.md` | Current typography system |
| `brand/prompt-block/vpp-house-style-prompt-block-v1.0.md` | Current AI production prompt block |

The old `docs/VPP_BrandIdentity_v4_0.html` and `docs/VPP_LogoSystem_v4_0.html` files are stale and must not govern new audits or implementation.

---

## CRITICAL CONTENT RULES

### Pricing
- **$150 per opening.** Doors and drawers priced identically.
- The unit is **"per opening"** — NEVER "per door," "per door and drawer," or "per unit."
- All-inclusive: prep, prime, topcoat, hardware audit, soft-close hinge upgrade, felt pads, deep clean.
- No add-ons, no separate line items, no tiered pricing.
- **5-year warranty in writing.**

### Pricing Math (typical kitchens)
| Size | Doors | Drawers | Openings | Price |
|---|---|---|---|---|
| Small | 14 | 8 | 22 | $3,300 |
| Medium | 20 | 12 | 32 | $4,800 |
| Large | 28 | 16 | 44 | $6,600 |

### Price Anchoring
Always anchor against cabinet replacement ($8,000–$25,000+), never against competing refinishers.
Key line: "A $15,000 kitchen remodel result for $4,800."

### Turnaround
- 3–5 days for most East Valley kitchens
- Kitchen out of commission 2–3 days while doors are off

### What's Included (value stack)
1. Professional cabinet refinishing — 76-step process, 14 phases, vertical spray system
2. Soft-close hinge upgrade — sourced, installed, adjusted (cost absorbed)
3. Hardware audit — old holes patched, redrilled straight
4. Felt pads on all doors
5. Cabinet label preservation — original labels reprinted and reapplied
6. Full deep clean including cabinet tops
7. 5-year warranty in writing
8. Fixed price in writing before work begins

### Product Language (customer-facing)
- "Professional-grade waterborne urethane finish"
- "Dedicated cabinet coatings — not regular wall paint repurposed for your kitchen"
- "Commercial-grade durability for daily kitchen use"
- Do NOT name specific paint products (Sherwin-Williams, Dunn-Edwards, etc.) on the website.

### ROC License
- AZ ROC #363664 — display on every page footer and anywhere credibility is referenced.

---

## CURRENT BRAND IDENTITY

### Light Mode Colors
| Name | Hex | Role |
|---|---|---|
| Charcoal | #1F1A14 | Wordmark, primary text, dark backgrounds |
| Terracotta | #C24A22 | Primary accent, CTAs, logo accent |
| Cream | #F2EAD7 | Primary light background |
| Cream-50 | #FAF6EC | Elevated card surfaces |
| Cream-200 | #E8DDC5 | Subtle elevated panels |
| Sage | #7A9577 | Tertiary accent and success states |
| Warm Gray 400 | #A39B8C | Borders, dividers, secondary UI |
| Warm Gray 700 | #5C544A | Secondary text, captions |

### Dark Mode Colors
| Name | Hex | Replaces |
|---|---|---|
| Charcoal | #1F1A14 | Dark surface |
| Cream-50 | #FAF6EC | Inverse text |
| Terracotta | #C24A22 | Accent |
| Sage | #7A9577 | Tertiary accent and success states |

**Dark mode implementation:** CSS-only via `@media (prefers-color-scheme: dark)`. Swap surface and type tokens. Accent colors (Terracotta, Sage) do not change. Logo uses Sand Light wordmark on dark surfaces.

### Typography
| Use | Font | Weight |
|---|---|---|
| Display, H1, H2, hero | Alfa Slab One | 400 (Regular) |
| H3, body, UI, buttons | Inter | 400, 500, 700 |

Two-typeface system only. Do not add DM Serif Display, Outfit, Lora, script fonts, condensed faces, or extra display fonts.

### Voice
- Confident peer, not salesy contractor
- Short sentences. No filler words.
- "We" not "our team of experts"
- Trade-specific language where it earns trust, plain language everywhere else
- Never use: "full-service," "one-stop-shop," "we do it all," "painting company"

---

## STALE CONTENT — FLAG AND FIX

Any of the following on the site is **wrong** and must be corrected:

- Any price showing **$125** (old price)
- Any reference to **"per door"** instead of "per opening"
- Any reference to **3-year warranty** (now 5-year)
- Any reference to **separate drawer pricing** (drawers = same $150/opening)
- Any mention of **interior painting** or **exterior painting** as services
- Any reference to **"full-service painting"** or **"painting company"**
- Any **v2.1** brand references, sub-brand language, or retired color values
- Any colors not in the v4.0 palette above
- Any mention of specific paint brand names (Sherwin-Williams, Dunn-Edwards) in customer-facing copy

---

## PAGES

### Current
- `/` — Home / landing
- `/cabinet-refinishing` — Main service page

### Planned (not yet built)
- `/trade-partners` — B2B landing page for GCs, remodelers, real estate agents. No per-unit pricing. Project-based framing. Peer tone.

---

## AUDIT CHECKLIST

When auditing the site, check every page for:

1. **Pricing accuracy** — $150/opening, not per door, not $125
2. **Warranty** — 5-year, not 3-year
3. **Service scope** — cabinet refinishing only, no other services mentioned
4. **Color values** — match v4.0 palette exactly
5. **Typography** — Alfa Slab One for display, Inter for body/UI
6. **Voice** — confident peer tone, no salesy language, no filler
7. **ROC license** — #363664 displayed in footer
8. **Value stack** — all 8 inclusions represented accurately
9. **Price anchoring** — against replacement, not competitors
10. **No stale content** — nothing from the stale list above
11. **Dark mode** — CSS-only implementation using correct token swaps
12. **Responsive** — mobile-first, works on all breakpoints

---

## DO NOT

- Do not add interior or exterior painting services
- Do not name specific paint products in customer-facing copy
- Do not use any colors outside the v4.0 palette
- Do not use "per door" anywhere — always "per opening"
- Do not invent testimonials or fake reviews
- Do not add pricing tiers or upsell language
- Do not reference v2.1 brand assets, sub-brands, or retired logos
- Do not claim "in-house crew," "no subcontractors," "no subs," or any equivalent — VPP delivers work through VPP-managed subcontractor crews. Refer to them as "our crew" or "our team" in customer-facing copy. Trust signals come from licensing, warranty, fixed price, and oversight — not from claims about crew composition.

---

*Website source of truth. All content decisions trace back to the reference files listed above.*
