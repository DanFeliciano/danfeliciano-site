# Sitewide Hero and Buyer-Recognition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework every rendered public page so the first viewport communicates the visitor, recognizable problem, outcome, contrarian diagnosis, and next action while preserving the existing brand and content system.

**Architecture:** Use a typed sitewide hero content source and a compact extension of the existing server-rendered `PageHeader`. Preserve custom homepage and article compositions, move recognition content earlier, and keep specialized page bodies, routes, schema, and visual tokens intact.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 6, Tailwind CSS 3, Vinext, Vitest, Testing Library, Sites.

## Global Constraints

- Operational Visibility is the category; the Operational Visibility Diagnostic is the broad entry offer.
- Use exact user-approved copy on the 14 specified priority pages.
- Retire broad “Bottleneck Diagnostic” and “Find My Bottleneck” naming.
- Preserve the Point of View article and Common Misdiagnoses verbatim.
- Preserve existing logo, typography, colors, widths, buttons, cards, routes, breakpoints, schema conventions, and navigation structure.
- Add no gradients, imagery, fonts, icon libraries, CMS, client fetching, or unnecessary JavaScript.
- Write a failing behavior test before each production behavior change.
- Do not merge or deploy until rendered fold review passes.

---

### Task 1: Lock the audit and implementation design

**Files:**
- Create: `docs/hero-audit/sitewide-hero-audit.md`
- Create: `docs/superpowers/specs/2026-07-26-sitewide-hero-and-buyer-recognition-design.md`
- Create: `docs/superpowers/plans/2026-07-26-sitewide-hero-and-buyer-recognition.md`

**Interfaces:**
- Produces: the 25-page rendered route inventory, 7 redirect inventory, final hero copy matrix, architecture, and QA contract used by every later task.

- [ ] Review the live and filesystem route inventories for omissions.
- [ ] Record baseline H1, CTA, and fold failures.
- [ ] Record the final hero copy and CTA for each rendered route.
- [ ] Commit the documentation as `Audit sitewide hero hierarchy`.

### Task 2: Add the shared hero contract

**Files:**
- Create: `src/content/page-heroes.ts`
- Modify: `src/components/ui/page-header.tsx`
- Modify: `src/components/ui/cta-button.tsx`
- Modify: `src/lib/routes.ts`
- Create: `src/test/page-header.test.tsx`

**Interfaces:**
- Produces: `PageHero`, `HeroAction`, `pageHeroes`, and `SiteHref`.
- `PageHeader` consumes one `PageHero` and renders its hierarchy and actions.

- [ ] Write a failing component test for eyebrow, one H1, two support paragraphs, primary and secondary actions, compact cues, and hash destinations.
- [ ] Run `npx vitest --run src/test/page-header.test.tsx` and confirm the missing contract fails.
- [ ] Add `SiteHref = SiteRoute | \`#${string}\`` and update `CtaButton`.
- [ ] Add the typed hero content map for all 25 rendered routes.
- [ ] Implement the compact shared server-rendered `PageHeader`.
- [ ] Rerun the targeted test and confirm it passes.
- [ ] Run TypeScript and existing component tests.
- [ ] Commit as `Add shared buyer-recognition hero`.

### Task 3: Reorder homepage recognition

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/content/site.ts`
- Modify: `src/test/homepage-content.test.ts`

**Interfaces:**
- Consumes: `pageHeroes["/"]`.
- Produces: required homepage section order and two valid hero actions.

- [ ] Write failing tests for exact hero copy, CTA labels, and the required section-heading order.
- [ ] Run the homepage test and confirm the current capability/category order fails.
- [ ] Replace the hero composition while preserving exact approved copy.
- [ ] Move problem selection directly below the hero.
- [ ] Move `OperatingCommandVisual` into an “Operational Visibility in practice” section.
- [ ] Preserve the canonical category explanation, capabilities, starting points, proof, strategy/AI, Insights, and final CTA in the required order.
- [ ] Rerun the homepage tests and confirm they pass.
- [ ] Commit as `Reorder homepage around buyer recognition`.

### Task 4: Rebuild What I Fix around problem selection

**Files:**
- Modify: `src/content/owner-offers.ts`
- Modify: `src/components/ui/owner-offer-page.tsx`
- Modify: `src/app/what-i-fix/page.tsx`
- Create: `src/test/what-i-fix-recognition.test.tsx`

**Interfaces:**
- Consumes: `pageHeroes["/what-i-fix"]`.
- Produces: `#common-problems`, six fully linked problem cards, exact Operational Visibility bridge, five How Dan Helps steps, and the broad diagnostic first.

- [ ] Write failing tests for exact hero copy, hash CTA, six interactive cards, section order, bridge copy, and five help steps.
- [ ] Run the test and confirm the current explanatory-first order fails.
- [ ] Add destinations and descriptive link labels to all six problem cards.
- [ ] Render each linked card as one semantic link with no nested interactive element.
- [ ] Move common problems immediately below the hero and remove the redundant pre-problem introduction.
- [ ] Add the fifth “Build the operating rhythm” step.
- [ ] Rerun the targeted tests and confirm they pass.
- [ ] Commit as `Put problem recognition first on What I Fix`.

### Task 5: Strengthen Services and Insights

**Files:**
- Modify: `src/app/services/page.tsx`
- Modify: `src/app/insights/page.tsx`
- Modify: `src/test/services-page.test.tsx`
- Modify: `src/test/insight-publishing.test.tsx`

**Interfaces:**
- Consumes: service and Insights hero entries.
- Preserves: five capabilities, 15 Common Misdiagnoses, featured article route, field notes, and FAQPage schema.

- [ ] Write failing tests for exact hero copy, CTA destinations, section anchors, featured-card order, and obsolete CTA removal.
- [ ] Run both targeted test files and confirm failures.
- [ ] Replace both heroes and add the service-capability and Insights-index anchors.
- [ ] Keep the three-step rule compact and preserve every service detail.
- [ ] Place the featured Point of View directly below the Insights hero.
- [ ] Rerun both targeted test files and confirm they pass.
- [ ] Commit as `Strengthen services and insights heroes`.

### Task 6: Update the five primary offer heroes

**Files:**
- Modify: `src/content/owner-offers.ts`
- Modify: `src/components/ui/owner-offer-page.tsx`
- Modify: `src/test/owner-offer-pages.test.tsx`

**Interfaces:**
- Consumes: offer hero entries for Backlog Kill Kit, AI Time Saver Sprint, Operations Reset, Owner Operating System, and Policy Forensics.
- Produces: optional trust line and compact signal sequence.

- [ ] Write failing tests for all five exact H1s, primary CTA labels, required trust/cue lines, and preserved first content sections.
- [ ] Run the offer test and confirm product-name H1 failures.
- [ ] Render the approved hero hierarchy for each offer.
- [ ] Move each existing explanatory introduction behind the first recognition section.
- [ ] Preserve Good/Bad AI Candidates, backlog content, Phoenix/AESOP methods, and every specialized offer body.
- [ ] Rerun the offer tests and confirm they pass.
- [ ] Commit as `Update offer page hero hierarchy`.

### Task 7: Align brand, proof, training, speaking, and contact pages

**Files:**
- Modify: `src/app/academy/page.tsx`
- Modify: `src/app/results/page.tsx`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/speaking/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/components/contact/contact-form.tsx`
- Modify: `src/test/about-contact-pages.test.tsx`
- Modify: `src/test/supporting-pages.test.ts`
- Modify: `src/test/contact-form.test.tsx`

**Interfaces:**
- Consumes: hero entries for Academy, Results, About, Speaking, and Contact.
- Produces: proof-first Results order and `#describe-the-problem`.

- [ ] Write failing tests for the five exact heroes, action destinations, proof-first order, and contact problem-context prompt.
- [ ] Run targeted tests and confirm current copy/order failures.
- [ ] Implement the heroes and move the Results proof strip directly below its hero.
- [ ] Add the Contact hash target and exact problem prompt without changing mailto behavior.
- [ ] Rerun targeted tests and confirm they pass.
- [ ] Commit as `Align supporting page heroes and actions`.

### Task 8: Align courses, legal pages, article, and additional authority routes

**Files:**
- Modify: `src/app/academy/lean-six-sigma-ai-yellow-belt/page.tsx`
- Modify: `src/app/academy/lean-six-sigma-ai-green-belt/page.tsx`
- Modify: `src/app/academy/lean-six-sigma-ai-black-belt/page.tsx`
- Modify: `src/app/insights/[slug]/page.tsx`
- Modify: `src/app/strategic-forensics/page.tsx`
- Modify: `src/app/policy-impact-analysis/page.tsx`
- Modify: `src/app/backlog-kill/page.tsx`
- Modify: `src/app/products/page.tsx`
- Modify: `src/app/briefings/page.tsx`
- Modify: `src/app/privacy/page.tsx`
- Modify: `src/app/terms/page.tsx`
- Create: `src/test/additional-page-heroes.test.tsx`

**Interfaces:**
- Consumes: the remaining page hero entries.
- Preserves: article body, course curriculum, legal body, and authority-page content.

- [ ] Write failing rendered-page tests for one H1, exact action labels, unique destinations, and required anchors on all 11 routes.
- [ ] Run the test and confirm current product-name/generic heroes fail.
- [ ] Implement the hero entries without altering canonical article or body content.
- [ ] Add stable IDs to the read, evidence, examination, offers, topics, privacy, and terms targets.
- [ ] Rerun targeted tests and confirm they pass.
- [ ] Commit as `Align course legal and authority heroes`.

### Task 9: Unify navigation, footer, and broad diagnostic naming

**Files:**
- Modify: `src/components/layout/site-header.tsx`
- Modify: `src/components/layout/mobile-nav.tsx`
- Modify: `src/components/layout/site-footer.tsx`
- Modify: `src/app/services/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/insights/page.tsx`
- Modify: `src/test/navigation.test.ts`
- Modify: `src/test/site-content.test.ts`

**Interfaces:**
- Produces: one broad diagnostic label system and preserves backlog-specific bottleneck language.

- [ ] Write failing tests proving no broad “Find My Bottleneck” or “Bottleneck Diagnostic” labels remain and header/mobile/footer use the approved names.
- [ ] Run the tests and confirm failures.
- [ ] Update shared navigation, footer, final CTAs, and contact language.
- [ ] Confirm backlog- and constraint-specific bottleneck references remain intentional.
- [ ] Rerun targeted tests and confirm they pass.
- [ ] Commit as `Unify Operational Visibility Diagnostic naming`.

### Task 10: Update metadata and add sitewide structural coverage

**Files:**
- Modify: `src/content/site.ts`
- Modify: `src/content/owner-offers.ts`
- Modify: every materially changed route metadata declaration
- Modify: `src/test/seo.test.ts`
- Create: `src/test/sitewide-public-pages.test.tsx`

**Interfaces:**
- Produces: unique promise-led titles/descriptions and a 25-page structural contract.

- [ ] Write failing tests for unique metadata, canonical paths, one H1, no duplicate IDs, a primary action, and no obsolete naming across rendered routes.
- [ ] Run the tests and confirm current metadata/action failures.
- [ ] Update metadata while preserving canonical paths, structured data, sitemap routes, and redirects.
- [ ] Rerun SEO and public-page tests and confirm they pass.
- [ ] Commit as `Update hero metadata and structural coverage`.

### Task 11: Validate and review the rendered site

**Files:**
- Create outside repository: `outputs/sitewide-hero-audit/screenshots/after/**`
- Create outside repository: `outputs/sitewide-hero-audit/hero-audit-final.md`

**Interfaces:**
- Produces: 100 after screenshots, fold metrics, link results, accessibility results, and the final fidelity ledger.

- [ ] Run focused Prettier, Oxlint, TypeScript, all tests, and the production build.
- [ ] Start the local site and inspect all 25 routes in the Browser.
- [ ] Capture every route at 1440 × 900, 1280 × 800, 768 × 1024, and 390 × 844.
- [ ] Verify H1, CTA, next-section visibility, no overflow, no duplicate IDs, no console errors, and working anchors.
- [ ] Run an accessibility scan on every rendered route.
- [ ] Compare representative before/after screenshots with `view_image` and write the five-point fidelity ledger.
- [ ] Fix any page that fails the five-second test and rerun its checks.

### Task 12: Finish, review, publish, and verify

**Files:**
- No additional production files unless verification exposes a tested defect.

**Interfaces:**
- Produces: focused commits, ready PR, merged production branch, Sites version, and live-route verification.

- [ ] Run the full formatter, linter, type checker, tests, accessibility checks, and production build on the final branch.
- [ ] Push `feature/sitewide-hero-and-buyer-recognition`.
- [ ] Open the ready PR `Strengthen sitewide heroes and buyer recognition` with routes, copy, screenshots, ordering, metadata, accessibility, tests, build, and limitations.
- [ ] Review the rendered PR source against the fold and brand criteria.
- [ ] Merge into `strategy-forensics-website-update` only after review passes.
- [ ] Rebuild the exact merge commit.
- [ ] Publish one new version through the existing Sites workflow.
- [ ] Verify all 25 rendered routes and 7 redirects on `danfeliciano.com`.
- [ ] Leave the deployed Sites URL open and remove temporary QA files.
