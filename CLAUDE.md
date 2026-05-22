# CLAUDE.md — VPP Website

**Last updated:** April 10, 2026

---

## WHAT THIS IS

This is the website for **Valley Painting Pros (VPP)** — a cabinet refinishing business in the East Valley / Phoenix, Arizona area. Cabinet refinishing is the **only** service. No interior painting, no exterior painting.

**Stack:** Next.js · Vercel · GitHub (`tonymolinaaaa-wq/vpp-website`, main branch)
**Live URL:** `vpp-website.vercel.app`
**Production domain:** `www.valleypaintingpros.com` (not yet connected)

---

## SOURCE OF TRUTH — AUDIT AGAINST THESE

Reference files are in `/docs` (or provided as context). When the website contradicts these files, the files win.

| File | Governs |
|---|---|
| `VPP_Irresistible_Offer.md` | All pricing, inclusions, value stack, competitive positioning, offer mechanics |
| `VPP_Cabinet_Refinishing_Master_Process.md` | Service descriptions, process details, differentiators |
| `VPP_BrandIdentity_v4_0.html` | Colors, typography, voice, dark mode, digital specs |
| `VPP_LogoSystem_v4_0.html` | Logo usage, clearspace, file formats |

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

## BRAND IDENTITY v4.0

### Light Mode Colors
| Name | Hex | Role |
|---|---|---|
| Deep Ink | #1E1C1A | Headlines, logo wordmark on light surfaces |
| Brown | #4A3728 | Body copy |
| Mid | #7A6558 | Labels, meta text, secondary info |
| Terracotta | #C4613A | Primary accent — CTAs, rule lines, "Pros" italic |
| Sage | #6B8C6E | Cabinet accent — secondary badges, cabinet-specific elements |
| Sand | #E8DDD4 | Card surfaces, section backgrounds |
| Sand Light | #F2EDE8 | Subtle backgrounds, hover states |
| Cream | #FAF7F4 | Page background |
| White | #FFFFFF | Cards on sand, input fields |

### Dark Mode Colors
| Name | Hex | Replaces |
|---|---|---|
| Charcoal | #1A1816 | Cream (page background) |
| Dark Sand | #2A2622 | Sand (card surfaces) |
| Sand Light | #F2EDE8 | Deep Ink (headlines, primary text) |
| Terracotta | #C4613A | Unchanged |
| Sage | #6B8C6E | Unchanged |

**Dark mode implementation:** CSS-only via `@media (prefers-color-scheme: dark)`. Swap surface and type tokens. Accent colors (Terracotta, Sage) do not change. Logo uses Sand Light wordmark on dark surfaces.

### Typography
| Use | Font | Weight |
|---|---|---|
| Headlines (H1–H3) | DM Serif Display | 400 (Regular) |
| Body, UI, buttons | Outfit | 300–600 |

**"Pros" treatment:** The word "Pros" in the logo and headlines is set in DM Serif Display italic with Terracotta color.

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
5. **Typography** — DM Serif Display for headlines, Outfit for body
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
