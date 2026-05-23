# VPP Typography Specification

**Version 1.0 · May 2026 · Locked by Creative Production Advisor**

---

## The Pairing

| Role | Typeface | Source | License | Weights to load |
|------|----------|--------|---------|-----------------|
| **Display** (H1, H2, hero) | Alfa Slab One | [Google Fonts](https://fonts.google.com/specimen/Alfa+Slab+One) | SIL OFL 1.1 | Regular (only weight available) |
| **Body & UI** (H3, body, labels, captions) | Inter | [Google Fonts](https://fonts.google.com/specimen/Inter) | SIL OFL 1.1 | 400, 500, 700 |

Both fonts are free for commercial use. License proof in this folder (`Alfa-Slab-One-OFL.txt` and `Inter-OFL.txt`).

---

## Why this pairing

**Alfa Slab One** matches the slab-serif character of the VPP logo wordmark. The chunky square slabs reinforce the "craft, substance, durability" register. It's the chosen face because the logo IS slab serif — pairing with anything else would create visual conflict.

**Inter** is a humanist sans-serif designed for screen reading at every size. It's the industry standard for UI and body text in modern web design (used by GitHub, Figma, Mozilla, and thousands of production sites). It pairs cleanly with slab serif display because the contrast is intentional — heavy display, neutral body.

**Why not all slab serif?** Heavy slab below H3 size becomes unreadable as body text. The cognitive load of reading paragraphs in Alfa Slab One would exhaust readers. The slab is reserved for headlines, where its weight is an asset.

---

## Type Scale

| Level | Font | Weight | Desktop | Mobile | Use |
|-------|------|--------|---------|--------|-----|
| Display | Alfa Slab One | Regular | 64px / 4rem | 40px / 2.5rem | Hero headlines, home page H1 |
| H1 | Alfa Slab One | Regular | 48px / 3rem | 32px / 2rem | Page titles |
| H2 | Alfa Slab One | Regular | 32px / 2rem | 26px / 1.625rem | Section headers |
| H3 | Inter | 700 Bold | 24px / 1.5rem | 20px / 1.25rem | Sub-section labels — **switch to Inter here** |
| Body Large | Inter | 400 Regular | 18px / 1.125rem | 18px | Lead paragraphs, important body |
| Body | Inter | 400 Regular | 16px / 1rem | 16px | Default body |
| Body Small | Inter | 400 Regular | 14px / 0.875rem | 14px | Captions, metadata |
| Label / Button | Inter | 500 Medium | 14px / 0.875rem | 14px | Buttons, form labels |
| Caption | Inter | 400 Regular | 12px / 0.75rem | 12px | Footer, legal, timestamps |

**Fluid CSS pattern (preferred):** `font-size: clamp(2.5rem, 5vw, 4rem);` — scales smoothly between mobile and desktop without breakpoints.

---

## Line Heights

| Use | Value |
|-----|-------|
| Display / H1 / H2 (slab serif) | 1.1 (tight — slab works best when not airy) |
| H3 / H4 (bold sans) | 1.25 (snug) |
| Body text | 1.5 (default) |
| Long-form reading copy | 1.75 (relaxed) |

---

## Letter Spacing

| Use | Value |
|-----|-------|
| All-caps small labels (e.g., "SECTION HEADER") | +2 to +3 letter-spacing in CSS pixels |
| Display / H1 / H2 | Default (0) or slightly tightened (-0.5px) if the headline feels loose |
| Body | Default (0) — never modify body letter-spacing |

---

## Hard Rules

1. **Never use Alfa Slab One below H3 size.** It becomes unreadable as body type. The 24px H3 is the floor.
2. **Never stack Alfa Slab One in three-line headlines.** Visual weight collapses. Cap at two lines. If a headline needs three lines, shorten it.
3. **Never mix in additional display fonts.** Two-typeface system. No additional serifs paired with Alfa Slab One. No additional sans-serifs paired with Inter.
4. **Never use script fonts.** Anywhere. Period.
5. **Never use condensed faces.** They don't match the weight character of the logo.
6. **Never use Inter at 600 Semi-bold** — load 400, 500, 700 only. Semi-bold reads as a "missing piece" between Medium and Bold visually.
7. **Headlines and CTAs never use the same weight.** Alfa Slab One for headline, Inter 500 for button — natural hierarchy without effort.

---

## Where to install / load

### For website builds (developer or AI dev tool)
Use the Google Fonts CDN — see `font-web-import-snippet.html` in this folder. Three `<link>` tags into the site's `<head>`. No font files to host. Done.

### For Canva work
Both fonts are already in Canva's built-in library. Search "Alfa Slab One" and "Inter" in the Canva text panel. No download needed.

### For local design work (Affinity, Photoshop, Figma desktop, Illustrator)
1. Go to [fonts.google.com/specimen/Alfa+Slab+One](https://fonts.google.com/specimen/Alfa+Slab+One) → click "Get font" → "Download all"
2. Go to [fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter) → click "Get font" → "Download all"
3. Extract both ZIPs
4. Mac: open the `.ttf` files → click "Install Font" in Font Book
5. Windows: right-click the `.ttf` files → "Install for all users"
6. Restart your design app

### For Figma (web)
Click your profile → Settings → Fonts → enable "Use local fonts" if you want your installed system fonts available. Or just type "Alfa Slab One" / "Inter" in the font picker — Figma loads from Google Fonts automatically.

---

## Vendor hand-off

When sending typography spec to a contractor (web designer, sign maker, embroiderer, print vendor):

> "Display font: **Alfa Slab One**, free from Google Fonts under SIL OFL 1.1 (license in `04-type/Alfa-Slab-One-OFL.txt`).
>
> Body font: **Inter**, free from Google Fonts under SIL OFL 1.1 (license in `04-type/Inter-OFL.txt`).
>
> Both are free for commercial use. Both load via Google Fonts CDN — no licensing fees, no font hosting required."

For embroidery or single-color print, the vendor's digitizing software handles the font rendering — provide them the logo (already vector) plus this spec, not the raw font file.

---

## Change Log

| Version | Date | Change |
|---------|------|--------|
| 1.0 | May 2026 | Initial pairing locked: Alfa Slab One (display) + Inter (body/UI) |

Future updates coordinated through Creative Production Advisor → propagated to Growth & Brand Strategist Section 10.3.
