# AI-STATE.md — VPP Website
# Dynamic execution state for the VPP website repo.
# Records what agents have done and the current state of the repo.
# Does NOT direct strategy or prioritize next work — that happens outside this file.
# Exact HEAD comes from git. AI-STATE.md records execution state as of its last update.
# This file wins over stale chat memory for project status.
# Last meaningful update: 2026-05-24

---

## SNAPSHOT

- State last updated from branch: codex/blog-congruence-audit
- State last updated after commit: 1432a11a0e0ccaeaf75cd722298c66d3698afe14
  fix(logos): swap header/footer monograms to SVG (#25)
- Working tree at last update: uncommitted blog/header congruence plus focused
  SEO/hierarchy/mobile-audit changes pending Ricardo review; pre-existing
  untracked Ricardo-created extra logo assets remain under public/logos/pngs
  and public/logos/svgs
- Local matched origin at last update: no (feature branch not pushed)
- Production URL: https://www.valleypaintingpros.com
- Deploy target: Vercel (auto-deploys on push to main)

---

## LAST SESSION

Date: 2026-05-24
Agent: Codex
Branch worked: codex/blog-congruence-audit
Files touched: src/components/SiteHeader.tsx,
  src/components/TrustSignalCards.tsx,
  src/app/cabinet-refinishing/CabinetPage.tsx,
  src/app/cabinet-refinishing/page.tsx, src/app/blog/page.tsx,
  src/app/blog/[slug]/page.tsx, src/components/Footer.tsx,
  src/components/StickyMobileCTA.tsx,
  src/components/blog/BlogInlineCTA.tsx,
  src/components/blog/BlogEstimateForm.tsx,
  src/components/blog/BlogTrustSignals.tsx, AI-STATE.md
Committed: none; work is pending Level 2 review before staging.
Edited but not committed: shared SiteHeader extraction, blog index/article
  header replacement, shared TrustSignalCards proof block, visible CR-34
  license wording cleanup, palette cleanup, mobile header/text wrapping fixes,
  cabinet/blog canonical and og:url metadata, landing/blog H1 keyword-hierarchy
  adjustments, 375px hero overflow fixes, and a footer Explore navigation link
  to /blog from the landing page. The landing hero also now restores "Same
  Cabinets. Completely Different ..." with a reduced-motion-aware typewriter
  rotating Kitchen, Bathroom Vanity, Laundry Room, Built-Ins, and Wet Bar.
  Extra Ricardo-created logo assets remain untracked under public/logos/pngs
  and public/logos/svgs.
Blockers encountered: src/app/layout.tsx still contains global metadata using
  "AZ ROC #363664" without CR-34; left untouched because layout.tsx is a
  Level 1 gate file requiring explicit patch approval before writes.

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
