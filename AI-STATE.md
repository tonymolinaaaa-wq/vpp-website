# AI-STATE.md — VPP Website
# Dynamic execution state for the VPP website repo.
# Records what agents have done and the current state of the repo.
# Does NOT direct strategy or prioritize next work — that happens outside this file.
# Exact HEAD comes from git. AI-STATE.md records execution state as of its last update.
# This file wins over stale chat memory for project status.
# Last meaningful update: 2026-05-24

---

## SNAPSHOT

- State last updated from branch: codex/logo-png-optimization-section-6
- State last updated after commit: this commit
- Working tree at last update: clean after this commit
- Local matched origin at last update: no (feature branch not pushed yet)
- Production URL: https://www.valleypaintingpros.com
- Deploy target: Vercel (auto-deploys on push to main)

---

## LAST SESSION

Date: 2026-05-24
Agent: Codex
Branch worked: codex/logo-png-optimization-section-6
Files touched: public/logos/*.png (12 optimized), AI-STATE.md (modified)
Committed: this commit losslessly recompresses all tracked VPP logo PNGs
  while preserving filenames, dimensions, and exact rendered pixels.
Edited but not committed: none
Blockers encountered: none

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
- 2026-05-24: Optimized all 12 tracked public/logos PNG variants in place
  with lossless Pillow recompression. Each file preserved filename,
  dimensions, and pixel data with diff 0. The source rasters contain thousands
  of near-neighbor colors, so the sub-100 KB target was not achievable without
  lossy quantization; fidelity was prioritized for brand assets.

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
