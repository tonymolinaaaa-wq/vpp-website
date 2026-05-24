# AI-STATE.md — VPP Website
# Dynamic execution state for the VPP website repo.
# Records what agents have done and the current state of the repo.
# Does NOT direct strategy or prioritize next work — that happens outside this file.
# Exact HEAD comes from git. AI-STATE.md records execution state as of its last update.
# This file wins over stale chat memory for project status.
# Last meaningful update: 2026-05-24

---

## SNAPSHOT

- State last updated from branch: claude/mobile-header-hero-layout-pgjaT
- State last updated after commit: this commit
- Working tree at last update: committed header CTA + mobile hero
  object-position changes; extra Ricardo-created gallery images
  open-concept-kitchen.png and saltillo-floor-cabinets.png remain untracked,
  and extra Ricardo-created logo assets remain untracked under
  public/logos/pngs and public/logos/svgs
- Local matched origin at last update: feature branch pushed to origin
- Production URL: https://www.valleypaintingpros.com
- Deploy target: Vercel (auto-deploys on push to main)

---

## LAST SESSION

Date: 2026-05-24
Agent: Claude
Branch worked: claude/mobile-header-hero-layout-pgjaT
Files touched: src/components/SiteHeader.tsx,
  src/app/cabinet-refinishing/CabinetPage.tsx, AI-STATE.md
Committed: this commit; restored the SiteHeader CTA button on mobile
  (the phone link stays sm:flex-hidden to keep the 375px row clean, only
  the orange Quote / Get a Quote button comes back), and shifted the
  cabinet-refinishing hero image to object-[72%_center] below md so the
  white cabinets on the right side of suburban-gilbert-kitchen.png show
  through the overlay on mobile; desktop still uses object-center.
Edited but not committed: extra Ricardo-created gallery images and logo assets
  remain unstaged/uncommitted.
Blockers encountered: none; npm run lint and npm run build both pass with only
  pre-existing img/Image warnings.

---

## DECISIONS LOG
(Append-only. Agents do not delete prior entries.)

- 2026-05-23: Adopted three-file agent coordination system
  (AGENTS.md / CLAUDE.md / AI-STATE.md) replacing duplicated CLAUDE.md and
  AGENTS.md. Codex reviewed and approved via two-round review. Merged in
  PR #19 as commit 45f3357.
- 2026-05-23: Swapped commit order to C (analytics) before B (blog) during
  three-commit working-tree cleanup because BlogEstimateForm imports from
  analytics.ts. Both intermediate commits typecheck cleanly.
- 2026-05-23: Isolated favicon fix from pre-existing Stream B+C changes
  using file-swap staging technique. One defect per commit discipline.
- 2026-05-23: Created OG social card via HTML template + headless Chrome
  screenshot approach. Source photo: frame_002.jpg from IMG_9262-frames
  (bathroom vanity, real VPP work). Headline positioned room-neutral
  ("Cabinet Refinishing in the East Valley") to accommodate future
  multi-room hero rotation feature. Trust line uses Cream-50 #FAF6EC;
  Terracotta #C24A22 reserved for separator graphic accents per WCAG
  contrast rules in brand guidelines. Added a cropped transparent logo helper
  for the reusable template because the verified source logo PNG is padded and
  opaque.
- 2026-05-23: Clarified AI-STATE.md update protocol so state committed with
  work uses "this commit" instead of "pending commit on this branch." Push,
  PR, checks, merge, and deploy facts should be reported in chat/final response
  rather than forcing bot-only follow-up commits.
- 2026-05-23: Mobile hero swapped from cabinet-hero-poster.jpg (kitchen) to
  cabinet-hero-bathroom.jpg (frame_002 from IMG_9262 — bathroom vanity, real
  VPP work). Video poster attribute also updated to the new image. The
  previous poster was unrelated to the actual desktop video content (the
  video is the same bathroom vanity from IMG_9262.MP4), so the swap corrected
  a pre-existing content mismatch. Desktop video element, src files,
  breakpoint, and motion-safe behavior left unchanged. Kept next/image with
  a 720x1280 JPEG source rather than building a manual srcset — source video
  ceiling is 720x1280 (iPhone portrait HD), so next/image handles WebP and
  responsive variants automatically. Old cabinet-hero-poster.jpg left on disk
  pending production verification.
- 2026-05-23: Added robots.txt via src/app/robots.ts for checklist Section 5,
  allowing all crawlers except /api/ and referencing the existing
  src/app/sitemap.ts output instead of creating a new sitemap.
- 2026-05-24: Swapped the live header/footer monogram logo references to
  Ricardo's manually traced SVGs using the canonical unhyphenated VPP naming
  convention. Raw <img> tags are used intentionally for SVGs; root PNG logo
  files are preserved on main as fallback/historical assets.
- 2026-05-24: Began blog/header congruence pass on
  codex/blog-congruence-audit. Extracted the cabinet landing page header into
  shared SiteHeader and applied it to blog index/article pages. Mobile header
  hides the quote button below the sm breakpoint so 375px layouts stay clean;
  page-level CTAs remain in the hero/body. Visible shared/blog/cabinet trust
  areas now use AZ ROC CR-34 #363664. layout.tsx metadata was deferred because
  it is a Level 1 gate file.
- 2026-05-24: Replaced the blog-only checkmark trust signal cards with a shared
  TrustSignalCards component so the blog and cabinet landing page use the same
  Google rating, AZ ROC badge, BBB seal, and 5-year warranty proof treatment.
- 2026-05-24: Focused SEO/hierarchy audit pass added canonical and Open Graph
  URL metadata to cabinet/blog pages, adjusted landing and blog H1s to carry
  cabinet-refinishing language, removed the unverified 4-6 projects/month hero
  scarcity line from the landing page, and tightened 375px hero wrapping on the
  cabinet page, blog index, and blog article template. Full article rewrites
  and layout.tsx metadata remain gated because they touch pricing/warranty
  copy and a Level 1 file.
- 2026-05-24: Added a footer Explore navigation block with links to Cabinet
  Refinishing and Cabinet Refinishing Blog, plus a footer anchor, so the main
  landing page has a customer-visible and crawler-visible path to /blog without
  distracting from the estimate-focused header.
- 2026-05-24: Restored the landing hero's "Same Cabinets. Completely
  Different ..." line and added a typewriter-style rotating final phrase for
  cabinet-specific spaces: Kitchen, Bathroom Vanity, Laundry Room, Built-Ins,
  and Wet Bar. The hero eyebrow keeps "East Valley Cabinet Refinishing" for
  service clarity, and the animation respects reduced-motion preferences.
- 2026-05-24: Standardized the public-facing ROC trust signal to
  "AZ ROC #363664" for website copy and canonical metadata. CR-34 remains valid
  license-class context, but should be used only internally or as explanatory
  support when needed, not in the primary public trust signal.
- 2026-05-24: Cabinet-refinishing hero now uses the Ricardo-added
  suburban-gilbert-kitchen.png as a full-bleed background image with a dark VPP
  overlay. Hero copy renders visible by default rather than depending on a
  JS-only fade state because verification showed the old opacity gate could
  leave above-the-fold copy hidden in browser checks.
- 2026-05-24: Reversed the 2026-05-24 "hide header CTA below sm" decision.
  The header quote button is now visible at every breakpoint so 375px users
  always have a one-tap path to the form; only the phone number link stays
  sm:flex-hidden to keep the row uncluttered. Button copy already swaps to
  "Quote" under 390px via the existing min-[390px] span pair.
- 2026-05-24: Cabinet hero image now uses object-[72%_center] below the md
  breakpoint and object-center from md up. The shift makes the white cabinets
  on the right side of suburban-gilbert-kitchen.png read through the dark
  overlay at 375px; desktop framing was already correct and is left untouched.

---

## KNOWN HAZARDS

- src/app/layout.tsx is a high-traffic file. Multiple agents have edited it
  recently. Treat as Level 1 gate (propose patch before writing).
- public/cabinet-content/ and public/social-proof/ are gitignored — files
  there will NOT deploy to Vercel. Do not reference these paths in code.
- docs/VPP_BrandIdentity_v4_0.html and docs/VPP_LogoSystem_v4_0.html are
  stale and must not govern audits. Flag if referenced.
- public/favicon.svg is 1.04MB (embedded raster). Works but wasteful.
  Do not remove without Ricardo's approval.
- The 3 blog posts in src/content/blog/ have not been QC'd for pricing
  accuracy or fabrication. Treat as unverified content.
