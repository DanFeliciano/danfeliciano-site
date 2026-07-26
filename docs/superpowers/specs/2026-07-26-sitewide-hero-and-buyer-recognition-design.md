# Sitewide Hero and Buyer-Recognition Design

## Goal

Make every rendered public page identify its visitor, recognizable problem, desired outcome, Dan's contrarian diagnosis, and next action in the first viewport without turning the site into a new visual brand.

## Approved source

The user-provided “Sitewide Hero, Above-the-Fold and Buyer-Recognition Redesign” specification is the controlling copy and hierarchy source. Exact hero copy in that specification is preserved. The production site at commit `5dca7d4` is the accepted visual reference.

## Architecture

### Hero family

- Extend the existing `PageHeader` into a compact shared commercial hero.
- Add explicit eyebrow, one- or two-paragraph support copy, primary action, optional secondary action, and optional compact cues.
- Keep the homepage custom because its exact two-paragraph message and reordered Operational Visibility visual need a distinct composition.
- Keep the Point of View article header editorial because author, date, read time, subtitle, and canonical body are content-specific.

### Content ownership

- Add a typed `page-heroes.ts` source for final hero copy and actions.
- Extend `owner-offers.ts` only for offer-specific hero cues and section ordering.
- Preserve the service capability and Common Misdiagnoses content models.
- Keep all hero content server-rendered.

### Page order

- Homepage: hero, problem selection, Operational Visibility in practice, canonical category explanation, capabilities, focused starting points, proof, strategy/AI explanation, Insights, final CTA.
- What I Fix: hero, interactive common problems, Operational Visibility bridge, How Dan Helps, broad diagnostic plus specialized offers, final CTA.
- Offer pages: hero, first recognition section, supporting explanation, remaining content, method, final CTA.
- Results: hero, immediate proof strip, cases.
- Insights: hero, featured Point of View, field notes, related paths.

### Interaction

- Add typed support for same-page hash actions.
- Make each What I Fix problem card a single descriptive link with no nested controls.
- Give hash targets stable unique IDs and focusable section containers.
- Preserve mobile navigation behavior and visible focus states.

### Search and metadata

- Update title, description, Open Graph title, and Open Graph description through the existing metadata helper.
- Keep canonical routes, sitemap membership, structured data, article content, and redirect destinations unchanged.
- Remove broad “Bottleneck Diagnostic” and “Find My Bottleneck” naming while retaining bottleneck language in backlog and constraint contexts.

## Visual rules

- Preserve the logo, existing typefaces, colors, widths, buttons, card geometry, breakpoints, and restrained shadows.
- Reduce commercial hero vertical padding so the next meaningful section begins near the fold.
- Do not add imagery, gradients, decorative shapes, stock photography, dashboards, diagrams, animation, or new icons.
- Use no client-side JavaScript for hero layout or anchor navigation.

## Verification

- Test-first coverage for shared hero semantics, exact priority-page copy, CTA destinations, homepage and What I Fix order, obsolete naming, metadata uniqueness, and all rendered public pages.
- Browser screenshots at 1440 × 900, 1280 × 800, 768 × 1024, and 390 × 844.
- Verify one H1, unique IDs, no overflow, visible CTA, next-section transition, anchor behavior, mobile navigation, console health, and all internal links.
- Run Prettier, Oxlint, TypeScript, Vitest, accessibility scanning, and the production build before PR review.

## Intentional constraint

No Image Gen concept is used. The task explicitly prohibits a visual rebrand and new decorative systems; the existing production site is the visual reference, and the supplied specification is the approved content/hierarchy design.
