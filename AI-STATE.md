# AI-STATE.md — VPP Website
# Dynamic execution state for the VPP website repo.
# Records what agents have done and the current state of the repo.
# Does NOT direct strategy or prioritize next work — that happens outside this file.
# Exact HEAD comes from git. AI-STATE.md records execution state as of its last update.
# This file wins over stale chat memory for project status.
# Last meaningful update: 2026-05-26

---

## SNAPSHOT

- State last updated from branch: claude/facebook-link-preview-hAnND
- State last updated after commit: this commit
- Working tree at last update: committed two changes on this branch — first
  commit b4541b1 hardened Open Graph / Twitter card metadata across
  layout.tsx, cabinet-refinishing/page.tsx, blog/page.tsx, and
  blog/[slug]/page.tsx; this commit switches src/app/page.tsx from
  redirect() to permanentRedirect() so the root URL returns a 308 instead
  of a 307 (Facebook's scraper choked on the 307 with "Could Not Follow
  Redirect" and kept serving its cached pre-cabinet-only preview, which is
  the visible bug that triggered this work). Extra Ricardo-created gallery
  images open-concept-kitchen.png and saltillo-floor-cabinets.png remain
  untracked, and extra Ricardo-created logo assets remain untracked under
  public/logos/pngs and public/logos/svgs
- Local matched origin at last update: feature branch pushed to origin
- Production URL: https://www.valleypaintingpros.com
- Deploy target: Vercel (auto-deploys on push to main)

---

## LAST SESSION

Date: 2026-05-26
Agent: Claude
Branch worked: claude/facebook-link-preview-hAnND
Files touched: src/app/layout.tsx, src/app/cabinet-refinishing/page.tsx,
  src/app/blog/page.tsx, src/app/blog/[slug]/page.tsx, src/app/page.tsx,
  AI-STATE.md
Committed: b4541b1 (prior commit on this branch) and this commit. b4541b1
  hardened Open Graph / Twitter card metadata so
  Facebook, iMessage, Slack, LinkedIn, and X reliably render the new
  VPP_og-image.png preview. Moved the root og:image from a raw <head>
  meta tag into Next's metadata.openGraph.images so metadataBase resolves
  it to an absolute URL and Next emits og:image:width (1200), og:image:height
  (630), og:image:type (image/png), og:image:alt; added og:site_name and
  root-level og:url; added a matching twitter card (summary_large_image)
  on layout. Repeated images + siteName on cabinet-refinishing/page.tsx
  and blog/page.tsx because route-level openGraph blocks replace (not
  merge with) the layout's openGraph in Next App Router. Added siteName
  to blog/[slug]/page.tsx for consistency; that route already supplied
  per-article images via frontmatter.featuredImage and a twitter card.
  Removed the now-redundant raw og:image meta tag from layout.tsx <head>.
  This second commit switches src/app/page.tsx from next/navigation's
  redirect() (307 temporary) to permanentRedirect() (308 permanent) so
  the root URL is no longer a Facebook-scraper trap. Real-world reproduction:
  pasting https://www.valleypaintingpros.com/ into Facebook's Sharing
  Debugger returns "Could Not Follow Redirect — URL requested a HTTP
  redirect, but it could not be followed" with response code 307, and the
  link preview falls back to FB's cached pre-cabinet-only scrape. Switching
  to 308 is also better SEO (Google honors permanent redirects more
  favorably) and was already on the open checklist.
Edited but not committed: extra Ricardo-created gallery images and logo assets
  remain unstaged/uncommitted.
Blockers encountered: none; npm run lint and npm run build both pass with only
  pre-existing img/Image warnings. Verified the prerendered HTML for /,
  /cabinet-refinishing, /blog, and a blog article all emit the full OG +
  Twitter tag set with absolute URLs.
Post-deploy step Ricardo must do: paste the production URLs into the
  Facebook Sharing Debugger (https://developers.facebook.com/tools/debug/)
  and click "Scrape Again" to bust Facebook's cached stale preview that
  prompted this work. Repeat for /cabinet-refinishing and /blog. The
  /cabinet-refinishing URL was confirmed in this session to have never
  been scraped by Facebook before (FB reported "this URL has never been
  shared"), so a single Scrape pass will populate it cleanly. The root
  URL specifically needed the 308 fix above to be deployed first — until
  then FB will keep failing to follow the redirect.

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
- 2026-05-26: Open Graph / Twitter card hardening. Triggered by a Facebook
  comment preview that showed the old multi-service title "Valley Painting
  Pros | Cabinet, Interior & Exterior Painters in Gilbert, AZ" plus a stale
  pre-VPP_og-image.png screenshot — Facebook's scraper cache had not been
  refreshed since the cabinet-only rewrite. Site metadata itself was already
  cabinet-only and pointed at /VPP_og-image.png, but the og:image was being
  injected as a raw <meta> tag in layout.tsx <head> with a relative path,
  and no og:image dimensions, og:site_name, root og:url, or twitter:image
  were emitted. Moved og:image into Next's metadata.openGraph.images so
  metadataBase resolves it to an absolute URL with explicit 1200x630
  dimensions, image/png type, and alt text; added og:site_name + root og:url
  + a summary_large_image twitter card on the root layout. Repeated images
  and siteName on cabinet-refinishing/page.tsx and blog/page.tsx because
  Next App Router replaces (does not deep-merge) route-level openGraph
  blocks. blog/[slug]/page.tsx already had per-article featuredImage and a
  twitter card; only siteName was added there for consistency. The fix only
  affects future scrapes — Ricardo must hit the Facebook Sharing Debugger
  post-deploy to bust the existing stale cache.
- 2026-05-26: Promoted src/app/page.tsx root redirect from redirect() to
  permanentRedirect() (307 -> 308) on the same branch after Ricardo
  reproduced the bug in Facebook's Sharing Debugger. The debugger reported
  "Could Not Follow Redirect — URL requested a HTTP redirect, but it could
  not be followed" with response code 307 on the root URL, which is why
  the Open Graph hardening work alone wasn't going to fix the visible
  preview on /. FB's scraper specifically fails to follow Next's default
  307 from redirect() and falls back to its cached pre-cabinet-only scrape;
  308 from permanentRedirect() is followed correctly and lets FB read the
  /cabinet-refinishing page's full OG metadata. This was already on the
  open SEO checklist independent of the FB issue.

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
