# 03-color/ — Brand Color Files

**Version 1.0 · May 2026 · Locked by Creative Production Advisor**

This folder holds the locked Valley Painting Pros brand color palette in every format you'll need across your stack.

---

## What's in here

| File | Format | When you use it |
|------|--------|-----------------|
| `vpp-brand-tokens.json` | JSON design tokens | Website builds (Next.js, React, Vue), Style Dictionary, Tokens Studio in Figma, anywhere you want machine-readable brand values. Import once → reference anywhere. |
| `vpp-color-palette.css` | CSS custom properties + starter utility classes | Drop directly into a website stylesheet. Adds all VPP colors as CSS variables, plus pre-built `.vpp-btn-primary`, `.vpp-btn-secondary`, `.vpp-trust-strip` classes. Reference any color as `var(--vpp-charcoal-900)` etc. |
| `vpp-color-swatch-card.svg` | Vector reference card | Open in any browser to see all colors with HEX, RGB, role, and contrast pairings. Prints clean. Share with vendors (print shops, sign makers, embroiderers, web designers) when they need brand color specs without reading the full guidelines doc. |
| `README.md` | This file | Explains the folder. |

---

## The locked palette (quick reference)

| Role | Name | HEX | RGB |
|------|------|-----|-----|
| Primary dark | **Charcoal** | `#1F1A14` | 31 · 26 · 20 |
| Primary brand | **Terracotta** | `#C24A22` | 194 · 74 · 34 |
| Primary background | **Cream** | `#F2EAD7` | 242 · 234 · 215 |
| Tertiary accent | **Sage** | `#7A9577` | 122 · 149 · 119 |

---

## Hand-off cheat sheet (by recipient)

| Recipient | Hand them | Why |
|-----------|-----------|-----|
| **Web developer / AI dev tool (Claude Code, v0, Cursor)** | `vpp-color-palette.css` + `vpp-brand-tokens.json` | They drop straight in. Zero translation. |
| **Designer (Figma, Affinity, Photoshop)** | Open `vpp-color-swatch-card.svg` and copy HEX values, OR open `vpp-brand-tokens.json` and import as design tokens via Tokens Studio plugin | Visual designers want the visual reference; serious tooling wants JSON. |
| **Print vendor (yard signs, business cards, vehicle decals)** | `vpp-color-swatch-card.svg` printed on paper + the HEX values converted to CMYK by the vendor's pre-press team | Print needs CMYK. HEX → CMYK conversion is the vendor's job; you provide the source of truth. |
| **Sign maker / embroiderer (single-color contexts)** | Tell them: Charcoal `#1F1A14` for dark-ink applications, Cream `#F2EAD7` for reversed-ink applications. For Pantone-matching: Pantone 7505 C (terracotta nearest match — VERIFY against actual logo before locking print orders), Pantone Black 6 C (charcoal nearest match). | One-color print needs a specific ink, not a four-color process. |
| **Future contractor / employee** | Send the entire `02-favicon`, `03-color`, `04-type`, `07-guidelines` folders as a brand kit | They have everything to produce on-brand work. |

---

## Important context

### These HEX values were extracted visually from your approved logo files
For pixel-critical work (a printed mural, a Pantone-matched yard sign run of 500 units), open the original color logo file in Adobe Photoshop or Affinity Photo, use the color picker on the exact letterforms, and verify each HEX matches what's documented here. The values should be within 1–2 units on each RGB channel of the visual extraction — but lock them precisely from the source file before any large print run.

### CMYK and Pantone values are NOT pre-computed
HEX (digital RGB) doesn't translate 1:1 to CMYK (print) or Pantone (spot color ink). Each print vendor will run their own conversion using their proofing system. Always request a printed proof before approving large runs.

### Color appearance varies by display and material
- **Screens** display differently based on calibration — your laptop, your phone, and your customer's phone will show terracotta slightly differently. The HEX is the source of truth; visual perception varies.
- **Paint** appearance differs from screen — if VPP ever paints a wall, sign, or surface in brand colors, the paint manufacturer's color match will *not* be identical to the screen HEX. Always request a paint sample swatch before committing to a large surface.
- **Embroidery thread** uses thread color codes (Madeira, Isacord, etc.) — provide the HEX and let the embroiderer match to their nearest thread stock.

---

## Change log

| Version | Date | Change |
|---------|------|--------|
| 1.0 | May 2026 | Initial locking from approved VPP logo files |

Future updates to the palette must be coordinated through the Creative Production Advisor → propagated to Growth & Brand Strategist Section 10.3 → version-bumped here.
