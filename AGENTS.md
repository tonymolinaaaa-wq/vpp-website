# AGENTS.md — VPP Website
# Single source of truth for all AI agents working on this codebase.
# Claude Code reads this via @AGENTS.md import in CLAUDE.md.
# Codex reads this directly.
# Last meaningful update: 2026-05-23

---

## AGENT SESSION RULE — READ FIRST

Before your final response after editing files:

1. Run git status.
2. If this session changed non-allowlisted repo files, update AI-STATE.md.
3. Stage AI-STATE.md with the same commit unless Ricardo explicitly approves an override.

---

## PROJECT

Valley Painting Pros (VPP) — cabinet refinishing contractor, East Valley Arizona.

Website scope: cabinet refinishing only. Do not surface non-cabinet services
anywhere in customer-facing website content. This rule is absolute regardless
of what the business does operationally outside the website.

Stack: Next.js · TypeScript · Tailwind CSS · Vercel
Repo: github.com/tonymolinaaaa-wq/vpp-website
Production: https://www.valleypaintingpros.com (live on Vercel)
Commands:
  Dev:    npm run dev
  Build:  npm run build
  Lint:   npm run lint

---

## SESSION STARTUP CHECKLIST

At the start of every session, before any file edits:

1. Run: git status --short --branch
2. Read: AI-STATE.md (full file, every section)
3. Confirm the active branch matches what AI-STATE.md describes
4. If uncommitted changes exist that you did not make, do not overwrite them
   without surfacing them to Ricardo first
5. Note any "In progress" or "Blocked" threads in AI-STATE.md and check
   whether your planned work conflicts with them

---

## SESSION END PROTOCOL

Before ending any session where you edited files, update AI-STATE.md with:

- Current branch
- Working tree status (clean / uncommitted changes present)
- State last updated after commit
- What was committed this session (1-line summary)
- What was edited but not committed (if anything)
- Any blockers encountered
- Any decisions made (append to Decisions log; do not delete prior decisions)
- Update the "Last meaningful update" line at the top of AI-STATE.md with today's date

Commit-time state rules:
- If AI-STATE.md is committed in the same commit as the work, write
  "this commit" for the SHA/commit field. Do not write "pending commit on this
  branch" into a commit that is meant to be merged.
- If the exact prior commit matters before making a new commit, use
  git log -1 --format=%H plus subject.
- Do not make an extra AI-STATE-only commit solely to replace "this commit"
  with the final SHA after the commit is created. The SHA is inferable from git.
- After push, PR creation, checks, or merge, report the exact branch, PR URL,
  check status, merge SHA, and deploy/preview URL in chat/final response.
  Do not create bot-driven follow-up commits just to record those transport
  events unless Ricardo explicitly asks.

AI-STATE.md wins over stale chat memory for project status, unless the current
user request says otherwise or the repo proves it stale.

---

## AI-STATE.md ENFORCEMENT

Local commits and GitHub pull requests enforce AI-STATE.md updates for
meaningful repo changes.

Allowlisted paths that do not require AI-STATE.md by themselves:
- README.md
- docs/**
- AGENTS.md
- CLAUDE.md
- AI-STATE.md
- .github/**

All other paths require AI-STATE.md to be changed in the same commit or pull
request. The local pre-commit hook and the GitHub Action use the same checker:
scripts/check-ai-state-required.mjs.

If the hook blocks a legitimately trivial change, stop and ask Ricardo before
using git commit --no-verify. Overrides are for Ricardo-approved exceptions only.

---

## POST-MERGE STATE POLICY

Do not create bot-driven post-merge commits solely to chase the latest HEAD SHA,
PR status, deployment status, or merge status. AI-STATE.md may be one commit
behind on exact SHA immediately after a merge. The next meaningful repo-change
session must update AI-STATE.md with the current state before ending.

---

## AGENT ROUTING (PREFERENCES, NOT HARD RULES)

These are preferences Ricardo uses when deciding which agent to assign a task.
They are not commands to the agents themselves — neither agent can hand work
to the other.

Prefer Claude Code for:
- Multi-file refactors and broad repo understanding
- Documentation updates (CLAUDE.md, AGENTS.md, AI-STATE.md)
- Git operations, commit sequencing, working-tree cleanup
- Surgical partial-file edits where scope isolation matters
- QC and audit passes against the codebase

Prefer Codex for:
- Fast implementation passes with well-defined scope
- Directory-scoped work where nested AGENTS.md overrides help
- Building new features from structured briefs
- Component and page generation

Either agent updates AI-STATE.md after any session where they edited files.

---

## BRANCH POLICY

- main is the production branch. Vercel auto-deploys every push to main.
- Single-file fixes that are clearly low-risk may go directly on main with
  Ricardo's explicit approval per commit.
- Anything multi-file, anything touching layout.tsx, anything touching pricing
  or warranty copy, anything touching public/logos/ or public/images/, and
  anything that creates new routes must go on a feature branch first:
    Naming: codex/<scope> or claude/<scope>
    Example: claude/og-image, codex/city-pages
- Open a pull request from the feature branch to main for review.
- Ricardo merges to main. Do not auto-merge.

---

## APPROVAL GATES

Three distinct gates. Confirm which is in effect before proceeding:

Level 1 — WRITE gate: Do not write any file. Propose changes as a unified diff
in chat and wait for explicit "go ahead and write."
  Applies to: layout.tsx (any change), next.config.js, anything in public/logos/
  or public/images/, any pricing or warranty copy.

Level 2 — STAGE gate: Write the file. Run git diff. Show the diff to Ricardo.
Wait for explicit "stage it" before git add.
  Applies to: multi-file changes, new routes, schema changes, package.json
  dependency additions.

Level 3 — COMMIT gate: Write and stage. Show git diff --cached. Wait for
explicit "commit it" before git commit.
  Applies to: everything else that ships to main.

Never push without Ricardo's explicit "push it" instruction.

---

## VERIFICATION RULES BY CHANGE TYPE

After making changes, before requesting approval:

Content-only changes (copy, markdown, MDX):
- Run grep for stale terms: $125, "per door", "3-year warranty"
- Run grep for new term consistency across the codebase

TypeScript / Next.js changes:
- Run: npm run lint
- Run: npm run build
- Report any errors or warnings

Visual / frontend changes:
- Run local browser verification when available; otherwise recommend Ricardo run
  npm run dev and browser-check the changed page before approval at 375px
  viewport width
- For changes affecting LCP or layout shift, recommend PageSpeed Insights
  re-test after deploy

Schema or metadata changes:
- Recommend validating at https://validator.schema.org/ or
  https://search.google.com/test/rich-results after deploy

---

## COMMIT CONVENTIONS

Format: type(scope): description
Types: feat · fix · docs · style · refactor · perf · chore
Scope: optional, lowercase, matches directory or feature name

Examples:
  feat(blog): add MDX blog foundation with sitemap
  fix(favicon): repair broken asset references after brand overhaul
  docs: update AGENTS.md with coordination protocol

Rules:
- One logical change per commit
- Message must describe WHY, not just what
- Never batch unrelated changes
- Never push without explicit human approval

---

## SOURCE OF TRUTH — AUDIT AGAINST THESE

Use repo-relative paths. When the website contradicts these files, the files win.

| File | Governs |
|---|---|
| docs/VPP_Irresistible_Offer.md | Pricing, inclusions, value stack, positioning |
| docs/VPP_Cabinet_Refinishing_Master_Process.md | Service descriptions, process |
| brand/guidelines/vpp-brand-guidelines-v1.0.md | Brand guidelines, voice, logo |
| brand/color/vpp-brand-tokens.json | Color, type, spacing, surface, semantic tokens |
| brand/type/vpp-typography-spec.md | Typography system |
| brand/prompt-block/vpp-house-style-prompt-block-v1.0.md | AI production prompt block |

STALE — do not use for audits or implementation:
- docs/VPP_BrandIdentity_v4_0.html
- docs/VPP_LogoSystem_v4_0.html

---

## CRITICAL CONTENT RULES

### Pricing
- $150 per opening. Doors and drawers priced identically.
- Unit is "per opening" — NEVER "per door," "per door and drawer," or "per unit."
- All-inclusive: prep, prime, topcoat, hardware audit, soft-close hinge upgrade,
  felt pads, deep clean. No add-ons, no separate line items, no tiered pricing.
- 5-year warranty in writing.

### Pricing Math
| Size | Doors | Drawers | Openings | Price |
|---|---|---|---|---|
| Small | 14 | 8 | 22 | $3,300 |
| Medium | 20 | 12 | 32 | $4,800 |
| Large | 28 | 16 | 44 | $6,600 |

Anchor against cabinet replacement ($8,000–$25,000+), never against competitors.
Key line: "A $15,000 kitchen remodel result for $4,800."

### Turnaround
- 3–5 days for most East Valley kitchens
- Kitchen out of commission 2–3 days while doors are off

### What's Included (value stack — all 8 must be represented accurately)
1. Professional cabinet refinishing — 76-step process, 14 phases, vertical spray
2. Soft-close hinge upgrade — sourced, installed, adjusted (cost absorbed)
3. Hardware audit — old holes patched, redrilled straight
4. Felt pads on all doors
5. Cabinet label preservation — original labels reprinted and reapplied
6. Full deep clean including cabinet tops
7. 5-year warranty in writing
8. Fixed price in writing before work begins

### Product Language
- "Professional-grade waterborne urethane finish"
- "Dedicated cabinet coatings — not regular wall paint repurposed for your kitchen"
- "Commercial-grade durability for daily kitchen use"
- Do NOT name specific paint products (Sherwin-Williams, Dunn-Edwards, etc.)

### ROC License
- AZ ROC #363664 — display in every page footer and anywhere credibility
  is referenced. Use this shorter public-facing format across website copy and
  canonical metadata.
- CR-34 is the license classification and may appear only as supporting internal
  or explanatory context when needed, never in the main public trust signal.

---

## BRAND IDENTITY

### Colors — Light Mode
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

### Colors — Dark Mode
Swap surface and type tokens. Accent colors (Terracotta, Sage) do not change.
Implementation: CSS-only via @media (prefers-color-scheme: dark).
Logo: use Sand Light wordmark on dark surfaces.

### Typography
| Use | Font | Weight |
|---|---|---|
| Display, H1, H2, hero | Alfa Slab One | 400 |
| H3, body, UI, buttons | Inter | 400, 500, 700 |

Two-typeface system only. Do not add other fonts.

### Voice
- Confident peer, not salesy contractor
- Short sentences. No filler words.
- "We" not "our team of experts"
- Trade-specific language where it earns trust; plain language everywhere else
- Never use: "full-service," "one-stop-shop," "we do it all," "painting company"
- Never claim "in-house crew" or "no subcontractors" — refer to "our crew" or
  "our team." Trust comes from licensing, warranty, fixed price, oversight.

---

## STALE CONTENT — FLAG ON SIGHT, FIX ONLY IF IN SCOPE

If you see any of these while working on something else, flag it to Ricardo.
Do not edit unrelated files just to fix these. They become in-scope only when
explicitly assigned.

- Any price showing $125 (old price)
- Any reference to "per door" instead of "per opening"
- Any reference to 3-year warranty
- Any reference to separate drawer pricing
- Any mention of interior or exterior painting as services
- Any reference to "full-service painting" or "painting company"
- Any v2.1 brand references or retired color values
- Any colors not in the v4.0 palette above
- Any specific paint brand names in customer-facing copy

---

## PAGES

### Live
- / — 307 redirect to /cabinet-refinishing (should be 308, on checklist)
- /cabinet-refinishing — main service page
- /blog — blog index
- /blog/[slug] — article template (3 posts live)
- /sitemap.xml — auto-generated

### Planned
- /trade-partners — B2B landing
- /gilbert, /chandler, /mesa, /tempe, /scottsdale, /queen-creek — city pages
- /privacy — Privacy Policy
- /terms — Terms of Service

---

## AUDIT CHECKLIST

When auditing the site, check every page for:

1. Pricing accuracy — $150/opening, not per door, not $125
2. Warranty — 5-year, not 3-year
3. Service scope — cabinet refinishing only
4. Color values — match v4.0 palette exactly
5. Typography — Alfa Slab One display, Inter body/UI
6. Voice — confident peer tone, no salesy language
7. ROC license — AZ ROC #363664 in footer
8. Value stack — all 8 inclusions accurate
9. Price anchoring — against replacement, not competitors
10. No stale content
11. Dark mode — CSS-only, correct token swaps
12. Responsive — mobile-first, all breakpoints

---

## DO NOT

- Do not add non-cabinet services to the website
- Do not name specific paint products in customer-facing copy
- Do not use colors outside the v4.0 palette
- Do not use "per door" — always "per opening"
- Do not invent testimonials or fake reviews
- Do not add pricing tiers or upsell language
- Do not reference v2.1 brand assets, sub-brands, or retired logos
- Do not claim "in-house crew" or "no subcontractors"
- Do not push to main without explicit human approval
- Do not batch unrelated changes into one commit
- Do not modify Level 1 gate files without proposing a patch first (see Approval Gates)
