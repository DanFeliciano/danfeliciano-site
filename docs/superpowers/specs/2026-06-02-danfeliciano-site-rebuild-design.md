# Dan Feliciano Website Rebuild Design

Date: 2026-06-02

## Goal

Rebuild `https://danfeliciano.com` as the official business website for Dan Feliciano. The site must position Dan as an executive advisory, operational excellence, AI automation, analytics, training, speaking, and productized advisory brand.

The site should function as a buyer journey:

- Homepage routes visitors by problem and offer.
- Services pages describe advisory work.
- Products pages describe fixed-scope offers.
- Academy pages support scalable training revenue.
- Case studies establish proof.
- Insights establish authority.
- Contact converts interest into Strategy Diagnostic requests.

The former dissolved-company brand must not appear anywhere in deployed source, visible copy, metadata, schema, route names, filenames, comments, fixtures, tests, alt text, or generated content. The implementation must include a final repo search that returns zero matches for the forbidden legacy string outside non-deployed prompt artifacts.

## Approved Design Direction

The approved direction is **Operating Command**.

The site should feel like a premium executive operating system, not a resume page or generic consulting template. It should combine direct advisory-firm credibility with command-center visual language: operating signals, constraint maps, KPI strips, recovery timelines, decision panels, and clear routing by business problem.

The homepage first viewport should use the brief's headline:

> Operational Strategy, AI Automation, and Lean Six Sigma Execution

The first screen must clearly explain what Dan does, who the site is for, and what action to take next. The primary CTA is **Book a Strategy Diagnostic**. The secondary CTA is **Explore Services**.

## Visual System

The visual system should be modern, executive, and high contrast:

- Deep navy or graphite first viewport.
- Near-white and white content bands for readability downstream.
- Electric cyan as the primary action and signal accent.
- Amber as a sparing turnaround, warning, or recovery accent.
- Charcoal and slate text on light sections.
- 8px or smaller card radius unless a local component clearly needs otherwise.
- Thin borders, precise spacing, and restrained shadows.
- Strong typography with direct headings and readable body copy.
- No decorative orbs, bokeh, generic blobs, cluttered gradients, or stock-like filler imagery.

Cards and panels should look purposeful and compact. They should frame repeated items, offer summaries, proof blocks, timelines, and forms, but page sections themselves should not become floating cards. Avoid nested cards.

## Technical Direction

Migrate the repository from the current React/Vite prototype into a Next.js App Router site.

Use:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Server components by default.
- Client components only for mobile navigation and contact form interactivity.
- Static content-first architecture.
- Semantic HTML.
- Accessible forms.
- JSON-LD structured data.
- Sitemap and robots support.
- Redirects in Next config for known legacy paths.

Use the Next.js Metadata API for page titles, descriptions, Open Graph, Twitter cards, canonical URLs, and robots metadata.

## Information Architecture

Create these routes:

- `/`
- `/services`
- `/services/aesop-strategy-governance`
- `/services/phoenix-protocol`
- `/services/ai-automation-analytics`
- `/products`
- `/products/backlog-kill-kit`
- `/products/policy-forensics`
- `/academy`
- `/academy/lean-six-sigma-ai-yellow-belt`
- `/academy/lean-six-sigma-ai-green-belt`
- `/academy/lean-six-sigma-ai-black-belt`
- `/speaking`
- `/case-studies`
- `/insights`
- `/contact`
- `/privacy`
- `/terms`

Also include:

- `/robots.txt`
- `/sitemap.xml`
- Custom 404 page.

Suggested redirects:

- `/certifications` to `/academy`
- `/lean-six-sigma-yellow-belt` to `/academy/lean-six-sigma-ai-yellow-belt`
- `/lean-six-sigma-green-belt` to `/academy/lean-six-sigma-ai-green-belt`
- `/lean-six-sigma-black-belt` to `/academy/lean-six-sigma-ai-black-belt`
- `/consulting` to `/services`
- `/training` to `/academy`
- `/phoenix` to `/services/phoenix-protocol`
- `/ai` to `/services/ai-automation-analytics`
- `/policy` to `/products/policy-forensics`

## Global Navigation

Desktop navigation:

- Services
- Products
- Academy
- Results
- Speaking
- Insights
- Contact

Primary navigation button:

- Book Diagnostic

Mobile navigation should use an accessible hamburger menu with keyboard navigation, visible focus states, focus management, and close behavior.

Footer columns:

- Dan Feliciano: Strategy, Operations, AI Automation, Lean Six Sigma, Analytics.
- Services: AESOP Strategy & Governance, Phoenix Protocol, AI, Automation & Analytics, Service Reimagined, Speaking & Workshops.
- Products: Backlog Kill Kit, Policy Forensics, Dan Feliciano Academy, Strategy Tools.
- Connect: Contact, LinkedIn, Email, Privacy, Terms.

Footer note:

- Copyright 2026 Dan Feliciano. All rights reserved.

## Content Model

Create a central content module such as `src/content/site.ts`. It should hold:

- Site constants.
- Navigation items.
- Services.
- Products.
- Courses.
- Case studies.
- Speaking topics.
- Insight cards.
- FAQs.
- CTA copy.
- Social links.
- SEO metadata.

This content module should power reusable page templates and keep copy consistent across pages.

Use placeholder values for unknown email and LinkedIn URLs only in a single content constant, with neutral labels in the UI. Do not scatter placeholder text throughout components.

## Component Model

Build reusable components for:

- `SiteHeader`
- `MobileNav`
- `SiteFooter`
- `Container`
- `Section`
- `Hero`
- `CTAButton`
- `SecondaryButton`
- `ServiceCard`
- `ProductCard`
- `CourseCard`
- `ProofStrip`
- `CaseStudyCard`
- `FrameworkSteps`
- `FAQ`
- `ContactForm`
- `Breadcrumbs`
- `JsonLd`
- `PageHeader`
- `FinalCTA`

Offer, product, and course pages should share templates where practical. The implementation should avoid one-off page markup when content can be expressed through structured data and reusable sections.

## Homepage Structure

The homepage should include:

1. Hero with approved headline, subheadline, body copy, primary CTA, secondary CTA, and proof bullets.
2. "What do you need to fix first?" routing section.
3. Services overview.
4. Productized tools overview.
5. Results and anonymized proof.
6. Operations + AI Readiness Diagnostic lead magnet.
7. Final CTA.

The hero should use the Operating Command visual language: dark first viewport, signal-panel or operating-map visual on the right, clear conversion actions, and proof points visible without overwhelming the opening screen.

## Page Templates

### Services Overview

Show when to bring Dan in, a services grid, how engagements work, and a Strategy Diagnostic CTA.

### Service Detail Pages

Each service page should include:

- Page header.
- Problem or context section.
- Framework or operating model.
- Use cases.
- Deliverables.
- Related links.
- Final CTA.

Service pages should receive `Service` JSON-LD and breadcrumb schema.

### Products Overview

Show productized offers for leaders who need clarity and action quickly.

### Product Detail Pages

Each product page should include:

- Page header.
- Problem context.
- What is included.
- Best-fit audience.
- Deliverable description.
- Final CTA.

Use `Product` or `Service` JSON-LD as appropriate.

### Academy Pages

Academy overview should introduce Dan Feliciano Academy and show Yellow Belt, Green Belt, and Black Belt course cards.

Course pages should include:

- Page header.
- Duration.
- Learning objectives.
- Who it is for.
- CTA.

Course pages should receive `Course` JSON-LD and breadcrumb schema.

### Speaking, Case Studies, Insights, Contact, Legal

Speaking should show topics, formats, and CTA.

Case studies should use anonymized proof language and avoid unsupported quantified claims.

Insights should show initial article cards from the brief. If full article pages are not implemented, cards should visibly indicate "Coming soon" and avoid dead links.

Contact should include an accessible Strategy Diagnostic form with labels, validation, error messages, consent checkbox, and a safe no-backend success state.

Privacy and Terms should use plain language and avoid pretending to be legal counsel.

## SEO And Structured Data

Every page needs:

- Unique title.
- Unique meta description.
- Canonical URL.
- Open Graph title and description.
- Clean route slug.
- One H1.
- Logical H2 and H3 structure.
- Internal links to related offers.
- CTA near top and bottom where appropriate.

Add JSON-LD:

- Sitewide `Person`.
- Sitewide `ProfessionalService` or `Organization`.
- `Service` for service pages.
- `Course` for course pages.
- `Product` or `Service` for productized offers.
- `Article` for insight cards or future article pages where applicable.
- Breadcrumb schema on detail pages.

Do not keyword stuff. Use human-first copy.

## Accessibility

Target WCAG 2.2 AA fundamentals:

- Skip-to-content link.
- Semantic headings in order.
- Descriptive links.
- Button labels that make sense out of context.
- Form labels and accessible validation messages.
- Visible focus states.
- Keyboard-accessible navigation and forms.
- Sufficient contrast.
- Meaningful alt text where images convey content.
- Empty alt text for decorative images.
- No text embedded in images unless repeated in HTML.
- Reduced-motion support.
- No autoplaying media.
- No mobile horizontal overflow.

## Error And Empty States

The contact form should handle:

- Missing required fields.
- Invalid email format.
- Missing consent checkbox.
- Successful local submission state.

Insights should avoid dead internal links by marking future articles as "Coming soon" if article detail routes are not part of the implementation.

Unknown social/contact URLs should degrade gracefully from the central content module.

## Out Of Scope

The first rebuild does not need:

- Backend form submission.
- CMS integration.
- Payment processing.
- Course checkout.
- Authentication.
- Blog article detail pages unless implementation time permits after all required routes are complete.
- Domain-level redirects from external hosting or DNS.
- Live analytics dashboards.

## Verification

Before completion, verify:

- The site builds successfully.
- The app runs locally.
- Desktop and mobile layouts are checked in browser.
- Navigation works on desktop and mobile.
- Contact form validation and success state work.
- Internal links do not route to missing pages.
- Every page has one H1.
- Every page has unique metadata.
- Sitemap and robots are generated.
- JSON-LD renders into pages.
- No lorem ipsum appears.
- No forbidden legacy-brand references appear in deployed source.
- CTAs route to `/contact` or relevant internal pages.
- No visible overlap, clipped text, or horizontal overflow.

Because this is a visual site rebuild, final verification should include screenshots of the rendered implementation and direct comparison against the approved Operating Command design direction.

## Acceptance Criteria

The rebuild is complete when:

- The repository uses Next.js App Router.
- The homepage clearly communicates Dan Feliciano's offer within the first screen.
- The approved Operating Command visual direction is recognizable in the final UI.
- All required routes exist.
- Content is Dan-branded and does not preserve the dissolved-company identity.
- Navigation and CTAs support the buyer journey.
- SEO metadata, canonical URLs, JSON-LD, sitemap, robots, and redirects are implemented.
- Accessibility basics are implemented.
- The contact page provides a usable Strategy Diagnostic request flow.
- The site reads like a revenue system, not a resume page.
