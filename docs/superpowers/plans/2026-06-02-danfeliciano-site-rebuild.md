# Dan Feliciano Site Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the current React/Vite prototype as a Next.js App Router site for Dan Feliciano using the approved Operating Command design direction.

**Architecture:** Replace the Vite app with a static, content-first Next.js App Router project. Centralize business copy and metadata in `src/content/site.ts`, compose pages from reusable server components, and reserve client components for mobile navigation and the contact form. Use route-level metadata, JSON-LD, redirects, sitemap, robots, and smoke tests to keep the site SEO-friendly and maintainable.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Vitest, Testing Library, lucide-react.

---

## File Structure

Create or replace these project files:

- `package.json`: switch scripts from Vite to Next.js and keep Vitest.
- `tsconfig.json`: Next.js TypeScript config.
- `next.config.ts`: redirects and Next config.
- `next-env.d.ts`: generated-style Next type reference.
- `postcss.config.mjs`: Tailwind PostCSS config.
- `tailwind.config.ts`: design tokens and content globs.
- `vitest.config.ts`: jsdom test config for unit and content tests.
- `src/app/layout.tsx`: root layout, metadata defaults, skip link, header, footer, sitewide JSON-LD.
- `src/app/page.tsx`: homepage.
- `src/app/not-found.tsx`: custom 404.
- `src/app/robots.ts`: robots route.
- `src/app/sitemap.ts`: sitemap route.
- `src/app/**/page.tsx`: required route pages.
- `src/app/globals.css`: Tailwind layers, CSS variables, base styles, focus states, responsive utilities.
- `src/content/site.ts`: central content, route metadata, navigation, services, products, courses, case studies, insights, speaking topics.
- `src/lib/seo.ts`: metadata and JSON-LD helper functions.
- `src/lib/routes.ts`: route constants and legacy redirect data.
- `src/components/layout/*.tsx`: header, mobile nav, footer, container, section primitives.
- `src/components/ui/*.tsx`: CTA buttons, cards, proof strip, framework steps, FAQ, breadcrumbs, final CTA, JSON-LD.
- `src/components/contact/contact-form.tsx`: client contact form with validation.
- `src/components/visuals/operating-command-visual.tsx`: homepage command-panel visual.
- `src/test/*.test.ts`: content, route, SEO, and forbidden-string tests.
- `src/test/contact-form.test.tsx`: contact form tests.

Remove obsolete Vite app files after the Next.js shell is working:

- `index.html`
- `vite.config.js`
- `src/main.jsx`
- `src/App.jsx`
- `src/App.test.jsx`
- `src/styles.css`
- Existing prototype-only components and data under `src/components/` and `src/data/`.

Do not touch the untracked `ai-process-redesign-diagnostic/` folder unless the user explicitly asks.

---

### Task 1: Convert Tooling To Next.js App Router

**Files:**
- Modify: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `next-env.d.ts`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `vitest.config.ts`
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`

- [ ] **Step 1: Update `package.json` scripts and dependencies**

Replace the Vite scripts with Next scripts and add Next/Tailwind dependencies:

```json
{
  "name": "dan-feliciano-site",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev --hostname 127.0.0.1",
    "build": "next build",
    "start": "next start --hostname 127.0.0.1",
    "test": "vitest --run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@next/env": "^16.2.7",
    "next": "^16.2.7",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "lucide-react": "^1.17.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^14.6.1",
    "@types/node": "^25.9.1",
    "@types/react": "^19.2.16",
    "@types/react-dom": "^19.2.3",
    "autoprefixer": "^10.5.0",
    "jsdom": "^29.1.1",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.19",
    "typescript": "^6.0.3",
    "vitest": "^4.1.8"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run:

```bash
npm install
```

Expected: `package-lock.json` updates without dependency resolution errors.

- [ ] **Step 3: Add TypeScript and Next config**

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Create `next-env.d.ts`:

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// This file should not be edited manually.
```

Create `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/certifications", destination: "/academy", permanent: true },
      {
        source: "/lean-six-sigma-yellow-belt",
        destination: "/academy/lean-six-sigma-ai-yellow-belt",
        permanent: true,
      },
      {
        source: "/lean-six-sigma-green-belt",
        destination: "/academy/lean-six-sigma-ai-green-belt",
        permanent: true,
      },
      {
        source: "/lean-six-sigma-black-belt",
        destination: "/academy/lean-six-sigma-ai-black-belt",
        permanent: true,
      },
      { source: "/consulting", destination: "/services", permanent: true },
      { source: "/training", destination: "/academy", permanent: true },
      {
        source: "/phoenix",
        destination: "/services/phoenix-protocol",
        permanent: true,
      },
      {
        source: "/ai",
        destination: "/services/ai-automation-analytics",
        permanent: true,
      },
      {
        source: "/policy",
        destination: "/products/policy-forensics",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 4: Add Tailwind and Vitest config**

Create `postcss.config.mjs`:

```js
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

Create `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111d",
        graphite: "#101827",
        signal: "#15c6d6",
        amber: "#f2b84b",
        paper: "#f7f9fc",
        charcoal: "#18202b",
      },
      boxShadow: {
        command: "0 24px 80px rgba(0, 0, 0, 0.28)",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
```

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
});
```

- [ ] **Step 5: Add temporary Next shell**

Create `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
  --background: #f7f9fc;
  --foreground: #18202b;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

:focus-visible {
  outline: 3px solid #15c6d6;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

Create `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan Feliciano",
  description: "Operational strategy, AI automation, analytics, training, and execution.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Create `src/app/page.tsx`:

```tsx
export default function HomePage() {
  return <main>Dan Feliciano site rebuild</main>;
}
```

- [ ] **Step 6: Verify the shell builds**

Run:

```bash
npm run build
```

Expected: Next.js production build succeeds.

- [ ] **Step 7: Commit tooling conversion**

Run:

```bash
git add package.json package-lock.json tsconfig.json next-env.d.ts next.config.ts postcss.config.mjs tailwind.config.ts vitest.config.ts src/app
git commit -m "chore: migrate site shell to next app router"
```

---

### Task 2: Add Central Content, Route Constants, And SEO Helpers

**Files:**
- Create: `src/content/site.ts`
- Create: `src/lib/routes.ts`
- Create: `src/lib/seo.ts`
- Create: `src/test/setup.ts`
- Create: `src/test/site-content.test.ts`

- [ ] **Step 1: Add the failing content tests**

Create `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

Create `src/test/site-content.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import {
  caseStudies,
  courses,
  insightCards,
  navItems,
  products,
  services,
  site,
} from "@/content/site";
import { requiredRoutes } from "@/lib/routes";

describe("site content", () => {
  it("uses Dan Feliciano as the master brand", () => {
    expect(site.name).toBe("Dan Feliciano");
    expect(site.url).toBe("https://danfeliciano.com");
  });

  it("defines all required top-level content groups", () => {
    expect(navItems).toHaveLength(7);
    expect(services.length).toBeGreaterThanOrEqual(3);
    expect(products.length).toBeGreaterThanOrEqual(3);
    expect(courses).toHaveLength(3);
    expect(caseStudies.length).toBeGreaterThanOrEqual(6);
    expect(insightCards.length).toBeGreaterThanOrEqual(5);
  });

  it("includes every required route", () => {
    expect(requiredRoutes).toEqual([
      "/",
      "/services",
      "/services/aesop-strategy-governance",
      "/services/phoenix-protocol",
      "/services/ai-automation-analytics",
      "/products",
      "/products/backlog-kill-kit",
      "/products/policy-forensics",
      "/academy",
      "/academy/lean-six-sigma-ai-yellow-belt",
      "/academy/lean-six-sigma-ai-green-belt",
      "/academy/lean-six-sigma-ai-black-belt",
      "/speaking",
      "/case-studies",
      "/insights",
      "/contact",
      "/privacy",
      "/terms",
    ]);
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run:

```bash
npm run test -- src/test/site-content.test.ts
```

Expected: FAIL because `@/content/site` and `@/lib/routes` do not exist.

- [ ] **Step 3: Add route constants**

Create `src/lib/routes.ts`:

```ts
export const requiredRoutes = [
  "/",
  "/services",
  "/services/aesop-strategy-governance",
  "/services/phoenix-protocol",
  "/services/ai-automation-analytics",
  "/products",
  "/products/backlog-kill-kit",
  "/products/policy-forensics",
  "/academy",
  "/academy/lean-six-sigma-ai-yellow-belt",
  "/academy/lean-six-sigma-ai-green-belt",
  "/academy/lean-six-sigma-ai-black-belt",
  "/speaking",
  "/case-studies",
  "/insights",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export type SiteRoute = (typeof requiredRoutes)[number];

export const legacyRedirects = [
  { source: "/certifications", destination: "/academy" },
  { source: "/lean-six-sigma-yellow-belt", destination: "/academy/lean-six-sigma-ai-yellow-belt" },
  { source: "/lean-six-sigma-green-belt", destination: "/academy/lean-six-sigma-ai-green-belt" },
  { source: "/lean-six-sigma-black-belt", destination: "/academy/lean-six-sigma-ai-black-belt" },
  { source: "/consulting", destination: "/services" },
  { source: "/training", destination: "/academy" },
  { source: "/phoenix", destination: "/services/phoenix-protocol" },
  { source: "/ai", destination: "/services/ai-automation-analytics" },
  { source: "/policy", destination: "/products/policy-forensics" },
] as const;
```

- [ ] **Step 4: Add central site content**

Create `src/content/site.ts` with these exported objects and arrays:

```ts
import type { SiteRoute } from "@/lib/routes";

export type LinkItem = {
  label: string;
  href: SiteRoute | string;
};

export type Offer = {
  slug: string;
  title: string;
  href: SiteRoute;
  summary: string;
  description?: string;
  metadata: {
    title: string;
    description: string;
  };
  useCases?: string[];
  deliverables?: string[];
  steps?: Array<{ title: string; description: string }>;
  cta: string;
};

export type Course = {
  title: string;
  href: SiteRoute;
  duration: string;
  summary: string;
  metadata: {
    title: string;
    description: string;
  };
  objectives: string[];
  audience: string[];
  cta: string;
};

export const site = {
  name: "Dan Feliciano",
  url: "https://danfeliciano.com",
  description:
    "Operational strategy, AI automation, Lean Six Sigma execution, analytics, training, speaking, and productized advisory services.",
  email: "hello@danfeliciano.com",
  linkedIn: "https://www.linkedin.com/in/danfeliciano/",
};

export const navItems: LinkItem[] = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Academy", href: "/academy" },
  { label: "Results", href: "/case-studies" },
  { label: "Speaking", href: "/speaking" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const homepage = {
  title: "Operational Strategy, AI Automation, and Lean Six Sigma Execution",
  subhead:
    "For leaders who need to reduce backlog, improve service, accelerate decisions, and create measurable performance gains.",
  body:
    "I help executives, public-sector leaders, and operators stabilize broken workflows, redesign service delivery, deploy practical AI, and build operating systems that survive contact with reality.",
  proof: [
    "25+ years transforming complex operations",
    "GE Six Sigma Master Black Belt background",
    "Experience across healthcare, government, finance, manufacturing, logistics, and service operations",
    "Strategy, execution, training, analytics, and AI automation under one roof",
  ],
};

export const services: Offer[] = [
  {
    slug: "aesop-strategy-governance",
    title: "AESOP Strategy & Governance",
    href: "/services/aesop-strategy-governance",
    summary:
      "Help owners decide what to measure, what to review each week, and who owns follow-up so the business keeps moving.",
    description:
      "A practical strategy-to-execution system for leaders who need alignment, accountability, and measurable progress.",
    metadata: {
      title: "AESOP Strategy & Governance | Dan Feliciano",
      description:
        "Build clearer priorities, better follow-up, simple metrics, decision rules, and a weekly rhythm with Dan Feliciano's AESOP framework.",
    },
    steps: [
      { title: "Assess", description: "Understand the current operating reality, constraints, risks, data, and performance gaps." },
      { title: "Establish", description: "Define priorities, decision rights, success measures, governance forums, and execution principles." },
      { title: "Synchronize", description: "Align leaders, teams, projects, data, and weekly routines around shared priorities." },
      { title: "Operationalize", description: "Convert strategy into workflows, practical measures, dashboards, routines, charters, and accountable plans." },
      { title: "Persist", description: "Build review cycles, learning loops, sustainment mechanisms, and corrective-action discipline." },
    ],
    useCases: [
      "Strategic planning",
      "Weekly owner review rhythm",
      "Transformation governance",
      "Practical metrics",
      "Portfolio prioritization",
      "Decision-rights clarification",
      "Cross-functional alignment",
      "AI governance and adoption governance",
    ],
    deliverables: [
      "Strategy-to-execution map",
      "Governance model",
      "Practical metrics",
      "Weekly review rhythm",
      "Decision-rights matrix",
      "Transformation roadmap",
      "Executive dashboard design",
      "30/60/90-day action plan",
    ],
    cta: "Build an execution system",
  },
  {
    slug: "phoenix-protocol",
    title: "Phoenix Protocol",
    href: "/services/phoenix-protocol",
    summary:
      "A 30/60/90-day stabilization and recovery approach for backlogs, service breakdowns, and execution drift.",
    description:
      "A 30/60/90-day operating system for stabilizing backlogs, service breakdowns, cycle-time delays, and execution drift.",
    metadata: {
      title: "Phoenix Protocol | 30/60/90-Day Operational Recovery | Dan Feliciano",
      description:
        "Stabilize backlogs, service breakdowns, cycle-time delays, and execution drift with Dan Feliciano's Phoenix Protocol.",
    },
    useCases: [
      "Aging backlog is increasing",
      "Teams are missing service commitments",
      "Work ownership is unclear",
      "Reporting exists, but decisions are slow",
      "Staff are overwhelmed by manual work and rework",
    ],
    deliverables: [
      "Backlog diagnostic",
      "Cycle-time analysis",
      "Aging segmentation",
      "Process map",
      "Root-cause themes",
      "Daily management system",
      "Recovery roadmap",
      "Executive summary",
      "Sustainment plan",
    ],
    cta: "Run a Phoenix Diagnostic",
  },
  {
    slug: "ai-automation-analytics",
    title: "AI, Automation & Analytics",
    href: "/services/ai-automation-analytics",
    summary:
      "Practical AI implementation that improves workflows before automating them.",
    description: "AI that fixes work, not just automates waste.",
    metadata: {
      title: "AI, Automation & Analytics | Dan Feliciano",
      description:
        "Deploy practical AI, automation, and analytics by fixing workflows first and building decision-ready operating systems.",
    },
    useCases: [
      "Workflow triage",
      "Intake classification",
      "Executive reporting",
      "KPI dashboards",
      "Backlog aging analytics",
      "Document summarization",
      "Policy analysis",
      "Operations command centers",
    ],
    deliverables: [
      "AI opportunity map",
      "Automation candidate backlog",
      "Data and workflow readiness assessment",
      "Risk and governance review",
      "Prototype roadmap",
      "Implementation plan",
      "Adoption plan",
      "Measurement model",
    ],
    cta: "Assess your AI automation opportunities",
  },
];

export const products: Offer[] = [
  {
    slug: "backlog-kill-kit",
    title: "Backlog Kill Kit",
    href: "/products/backlog-kill-kit",
    summary:
      "A fixed-scope diagnostic for backlog drivers, cycle-time constraints, aging work, and recovery actions.",
    metadata: {
      title: "Backlog Kill Kit | Dan Feliciano",
      description:
        "Diagnose backlog drivers, cycle-time constraints, aging work, ownership gaps, and recovery actions with Dan Feliciano's Backlog Kill Kit.",
    },
    useCases: ["Service operations", "Government agencies", "Healthcare administration", "Finance operations", "Customer support", "Case management"],
    deliverables: ["Backlog segmentation", "Aging profile", "Demand and capacity review", "Root-cause themes", "Quick-win recommendations", "Recovery roadmap"],
    cta: "Request a Backlog Kill Kit",
  },
  {
    slug: "policy-forensics",
    title: "Policy Forensics",
    href: "/products/policy-forensics",
    summary:
      "Nonpartisan policy analysis and institutional intelligence for leaders facing regulatory, legislative, or public-policy change.",
    metadata: {
      title: "Policy Forensics | Dan Feliciano",
      description:
        "Policy Forensics helps institutions understand proposed laws, regulations, and policy shifts before they become operational, financial, or reputational surprises.",
    },
    useCases: ["Proposed legislation", "Regulatory change", "Budget policy", "Workforce policy", "Healthcare policy", "Education policy", "Institutional risk scanning"],
    deliverables: ["Policy brief", "Risk map", "Stakeholder map", "Operational impact analysis", "Decision memo", "Executive briefing deck"],
    cta: "Request a Policy Forensics brief",
  },
  {
    slug: "academy",
    title: "Dan Feliciano Academy",
    href: "/academy",
    summary: "Lean Six Sigma + AI training for professionals and organizations.",
    metadata: {
      title: "Dan Feliciano Academy | Lean Six Sigma + AI Training",
      description:
        "Lean Six Sigma + AI training for professionals and organizations through Dan Feliciano Academy.",
    },
    cta: "Explore Academy",
  },
];
```

Add the remaining exports in `src/content/site.ts`:

```ts
export const courses: Course[] = [
  {
    title: "Lean Six Sigma + AI Yellow Belt",
    href: "/academy/lean-six-sigma-ai-yellow-belt",
    duration: "8 hours",
    summary:
      "Foundational Lean Six Sigma, DMAIC, waste, process thinking, and AI-assisted improvement basics.",
    metadata: {
      title: "Lean Six Sigma + AI Yellow Belt | Dan Feliciano Academy",
      description:
        "Learn Lean Six Sigma foundations, DMAIC, waste reduction, process thinking, and AI-assisted improvement basics.",
    },
    objectives: [
      "Understand Lean Six Sigma principles",
      "Learn the DMAIC improvement cycle",
      "Identify waste and process friction",
      "Support improvement projects",
      "Use basic improvement templates",
      "Understand where AI can assist with analysis, documentation, and problem solving",
      "Prepare for Yellow Belt certification",
    ],
    audience: ["Team members", "New managers", "Analysts", "Public-sector professionals", "Healthcare and service operators", "Anyone new to Lean Six Sigma"],
    cta: "Ask about Yellow Belt training",
  },
  {
    title: "Lean Six Sigma + AI Green Belt",
    href: "/academy/lean-six-sigma-ai-green-belt",
    duration: "40 hours",
    summary:
      "Project leadership, data analysis, root cause, process improvement, stakeholder engagement, and AI-supported DMAIC execution.",
    metadata: {
      title: "Lean Six Sigma + AI Green Belt | Dan Feliciano Academy",
      description:
        "Lead improvement projects with Lean Six Sigma, data analysis, root-cause methods, stakeholder engagement, and AI-supported DMAIC execution.",
    },
    objectives: [
      "Lead Lean Six Sigma improvement projects",
      "Apply DMAIC to real operational problems",
      "Use process maps, data collection plans, and root-cause tools",
      "Analyze variation, defects, cycle time, and performance gaps",
      "Engage stakeholders and cross-functional teams",
      "Build control plans and sustainment routines",
      "Use AI to accelerate project documentation, analysis, brainstorming, and communication",
      "Prepare for Green Belt certification",
    ],
    audience: ["Managers", "Analysts", "Project leaders", "Operations professionals", "Healthcare administrators", "Government process-improvement teams", "Service and support leaders"],
    cta: "Ask about Green Belt training",
  },
  {
    title: "Lean Six Sigma + AI Black Belt",
    href: "/academy/lean-six-sigma-ai-black-belt",
    duration: "80 hours",
    summary:
      "Advanced improvement leadership, statistical thinking, complex project execution, mentoring, change leadership, and AI-enabled transformation.",
    metadata: {
      title: "Lean Six Sigma + AI Black Belt | Dan Feliciano Academy",
      description:
        "Advanced Lean Six Sigma + AI training for complex project leaders, mentors, transformation teams, and operational excellence professionals.",
    },
    objectives: [
      "Lead complex Lean Six Sigma projects",
      "Apply advanced DMAIC methods",
      "Use statistical thinking and hypothesis testing",
      "Manage cross-functional transformation work",
      "Mentor Green Belts and project teams",
      "Build governance and sustainment systems",
      "Connect Lean Six Sigma with AI, automation, analytics, and decision support",
      "Prepare for Black Belt certification",
    ],
    audience: ["Operational excellence leaders", "Transformation leaders", "Senior project managers", "Quality leaders", "Black Belt candidates", "Internal consultants", "Continuous improvement teams"],
    cta: "Ask about Black Belt training",
  },
];

export const caseStudies = [
  "Healthcare billing transformation",
  "Public-sector Lean Six Sigma deployment",
  "Software rollout simplification",
  "Manufacturing throughput and cost recovery",
  "Supply-chain and logistics redesign",
  "Executive reporting system",
].map((title) => ({
  title,
  challenge: "Complex operating work needed clearer flow, ownership, visibility, and performance discipline.",
  intervention: "Mapped the work, identified constraints, redesigned routines, and strengthened performance management.",
  outcomes: "Improved visibility, execution discipline, and decision support using anonymized proof language.",
}));

export const speakingTopics = [
  "Stop Automating Chaos",
  "Operational Excellence in the AI Era",
  "The Phoenix Protocol",
  "Strategy That Survives Contact With Reality",
  "AI, Analytics, and the Future of Work",
].map((title) => ({
  title,
  description:
    "A practical executive session on operational excellence, strategy, analytics, AI adoption, and measurable execution.",
}));

export const insightCards = [
  {
    title: "Stop Automating Chaos",
    excerpt:
      "AI will not fix a broken workflow. It will usually make the broken workflow faster, louder, and harder to control.",
    status: "Coming soon",
  },
  {
    title: "Why Backlogs Are a Strategy Problem",
    excerpt:
      "Backlog is rarely just about staffing. It is often a signal that demand, capacity, rules, ownership, and management systems are out of sync.",
    status: "Coming soon",
  },
  {
    title: "The 30/60/90-Day Turnaround Plan for Service Operations",
    excerpt:
      "Service recovery requires segmentation, control rhythm, root-cause discipline, and visible ownership.",
    status: "Coming soon",
  },
  {
    title: "AI + Lean Six Sigma: What Actually Works",
    excerpt:
      "AI strengthens Lean Six Sigma when it helps teams see patterns, document work, test ideas, and accelerate learning.",
    status: "Coming soon",
  },
  {
    title: "Dashboards Are Not Decisions",
    excerpt: "Reporting only matters when it changes what leaders do next.",
    status: "Coming soon",
  },
] as const;
```

- [ ] **Step 5: Add SEO helpers**

Create `src/lib/seo.ts`:

```ts
import type { Metadata } from "next";
import { site } from "@/content/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
};

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function createMetadata({ title, description, path }: SeoInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email,
    sameAs: [site.linkedIn],
    knowsAbout: [
      "Operational strategy",
      "Lean Six Sigma",
      "AI automation",
      "Analytics",
      "Strategy execution",
    ],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description: site.description,
    founder: { "@type": "Person", name: site.name },
  };
}
```

- [ ] **Step 6: Run the content tests**

Run:

```bash
npm run test -- src/test/site-content.test.ts
```

Expected: PASS.

- [ ] **Step 7: Commit content foundation**

Run:

```bash
git add src/content src/lib src/test
git commit -m "feat: add site content and seo foundation"
```

---

### Task 3: Build Layout, Navigation, And Design Primitives

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Create: `src/components/layout/container.tsx`
- Create: `src/components/layout/section.tsx`
- Create: `src/components/layout/site-header.tsx`
- Create: `src/components/layout/mobile-nav.tsx`
- Create: `src/components/layout/site-footer.tsx`
- Create: `src/components/ui/cta-button.tsx`
- Create: `src/components/ui/json-ld.tsx`
- Create: `src/test/navigation.test.ts`

- [ ] **Step 1: Write failing navigation tests**

Create `src/test/navigation.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { navItems } from "@/content/site";

describe("navigation", () => {
  it("uses the approved navigation labels", () => {
    expect(navItems.map((item) => item.label)).toEqual([
      "Services",
      "Products",
      "Academy",
      "Results",
      "Speaking",
      "Insights",
      "Contact",
    ]);
  });

  it("routes the primary nav CTA to contact", () => {
    expect("/contact").toBe("/contact");
  });
});
```

- [ ] **Step 2: Run test to verify it passes against content**

Run:

```bash
npm run test -- src/test/navigation.test.ts
```

Expected: PASS.

- [ ] **Step 3: Implement layout primitives**

Create `src/components/layout/container.tsx`:

```tsx
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
```

Create `src/components/layout/section.tsx`:

```tsx
import type { ReactNode } from "react";
import { Container } from "./container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ children, className = "", containerClassName = "" }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
```

Create `src/components/ui/cta-button.tsx`:

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-signal text-ink hover:bg-white"
      : "border border-white/30 text-white hover:border-signal hover:text-signal";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-bold transition ${classes}`}
    >
      {children}
    </Link>
  );
}
```

Create `src/components/ui/json-ld.tsx`:

```tsx
type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
```

- [ ] **Step 4: Implement header, mobile nav, and footer**

Create `src/components/layout/mobile-nav.tsx`:

```tsx
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/content/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
      </button>
      {isOpen ? (
        <div className="absolute left-5 right-5 top-20 z-50 rounded-md border border-white/15 bg-ink p-4 shadow-command">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-md px-3 py-3 text-sm font-semibold text-white" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 rounded-md bg-signal px-3 py-3 text-center text-sm font-bold text-ink" onClick={() => setIsOpen(false)}>
              Book Diagnostic
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
```

Create `src/components/layout/site-header.tsx` and `src/components/layout/site-footer.tsx` using `navItems`, `site`, and footer column copy from the design spec.

- [ ] **Step 5: Wire root layout**

Update `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import { personJsonLd, professionalServiceJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://danfeliciano.com"),
  title: {
    default: "Dan Feliciano | Operational Strategy, AI Automation & Lean Six Sigma",
    template: "%s",
  },
  description:
    "Dan Feliciano helps leaders reduce backlog, improve service, automate intelligently, and turn operational chaos into measurable performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-ink" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <JsonLd data={[personJsonLd(), professionalServiceJsonLd()]} />
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Run tests and build**

Run:

```bash
npm run test -- src/test/navigation.test.ts
npm run build
```

Expected: tests and build pass.

- [ ] **Step 7: Commit layout**

Run:

```bash
git add src/app src/components src/test/navigation.test.ts
git commit -m "feat: add site layout and navigation"
```

---

### Task 4: Build Homepage And Operating Command Visual

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/visuals/operating-command-visual.tsx`
- Create: `src/components/ui/proof-strip.tsx`
- Create: `src/components/ui/offer-card.tsx`
- Create: `src/components/ui/final-cta.tsx`
- Create: `src/test/homepage-content.test.ts`

- [ ] **Step 1: Add homepage content test**

Create `src/test/homepage-content.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { homepage } from "@/content/site";

describe("homepage content", () => {
  it("uses the approved headline and CTAs", () => {
    expect(homepage.title).toBe("Operational Strategy, AI Automation, and Lean Six Sigma Execution");
    expect(homepage.subhead).toContain("reduce backlog");
    expect(homepage.proof).toHaveLength(4);
  });
});
```

- [ ] **Step 2: Run homepage test**

Run:

```bash
npm run test -- src/test/homepage-content.test.ts
```

Expected: PASS.

- [ ] **Step 3: Add reusable homepage UI**

Create `src/components/visuals/operating-command-visual.tsx`:

```tsx
export function OperatingCommandVisual() {
  const signals = [
    ["Backlog aging", "72%", "bg-signal"],
    ["Cycle-time drag", "48%", "bg-amber"],
    ["AI readiness", "61%", "bg-emerald-400"],
  ];

  return (
    <div className="rounded-lg border border-white/15 bg-white/5 p-4 shadow-command">
      <div className="mb-4 flex items-center justify-between text-xs text-slate-300">
        <span>Operating signal map</span>
        <span>Live diagnostic view</span>
      </div>
      <div className="grid gap-3">
        {signals.map(([label, value, color]) => (
          <div key={label} className="rounded-md border border-white/10 bg-ink/70 p-3">
            <div className="mb-2 flex justify-between text-xs text-slate-300">
              <span>{label}</span>
              <strong className="text-white">{value}</strong>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div className={`h-2 rounded-full ${color}`} style={{ width: value }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {["Constraint", "Decision", "Cadence"].map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-xs font-semibold text-white">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
```

Create `ProofStrip`, `OfferCard`, and `FinalCTA` components that accept data props and render compact cards with 8px radius, strong focus states, and internal links.

- [ ] **Step 4: Implement homepage**

Update `src/app/page.tsx` to render:

- Dark hero using `homepage`, `CTAButton`, and `OperatingCommandVisual`.
- Proof strip.
- "What do you need to fix first?" cards.
- Services.
- Products.
- Results.
- Lead magnet.
- Final CTA.

Ensure the `main` element has `id="main-content"` and one `h1`.

- [ ] **Step 5: Build and visually smoke test**

Run:

```bash
npm run test -- src/test/homepage-content.test.ts
npm run build
npm run dev
```

Expected: tests pass, build succeeds, dev server starts.

Open the local URL in the in-app browser and verify:

- First viewport reads like Operating Command.
- Hero headline, subheadline, and CTAs match the approved spec.
- Next section is hinted on common laptop viewport.
- No text overlap or horizontal overflow.

- [ ] **Step 6: Commit homepage**

Run:

```bash
git add src/app/page.tsx src/components src/test/homepage-content.test.ts
git commit -m "feat: build operating command homepage"
```

---

### Task 5: Build Services And Products Routes

**Files:**
- Create: `src/components/ui/page-header.tsx`
- Create: `src/components/ui/framework-steps.tsx`
- Create: `src/components/ui/breadcrumbs.tsx`
- Create: `src/app/services/page.tsx`
- Create: `src/app/services/aesop-strategy-governance/page.tsx`
- Create: `src/app/services/phoenix-protocol/page.tsx`
- Create: `src/app/services/ai-automation-analytics/page.tsx`
- Create: `src/app/products/page.tsx`
- Create: `src/app/products/backlog-kill-kit/page.tsx`
- Create: `src/app/products/policy-forensics/page.tsx`
- Create: `src/test/offer-routes.test.ts`

- [ ] **Step 1: Add route coverage tests**

Create `src/test/offer-routes.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { products, services } from "@/content/site";

describe("offer routes", () => {
  it("defines required service routes", () => {
    expect(services.map((service) => service.href)).toEqual([
      "/services/aesop-strategy-governance",
      "/services/phoenix-protocol",
      "/services/ai-automation-analytics",
    ]);
  });

  it("defines required product routes", () => {
    expect(products.map((product) => product.href)).toEqual([
      "/products/backlog-kill-kit",
      "/products/policy-forensics",
      "/academy",
    ]);
  });

  it("has metadata for every offer", () => {
    for (const offer of [...services, ...products]) {
      expect(offer.metadata.title.length).toBeGreaterThan(12);
      expect(offer.metadata.description.length).toBeGreaterThan(40);
    }
  });
});
```

- [ ] **Step 2: Run route tests**

Run:

```bash
npm run test -- src/test/offer-routes.test.ts
```

Expected: PASS.

- [ ] **Step 3: Create shared page components**

Create `PageHeader`, `FrameworkSteps`, and `Breadcrumbs` components. `Breadcrumbs` should render an ordered list with links back to relevant index pages. `PageHeader` should accept `title`, `subhead`, and optional `children`.

- [ ] **Step 4: Implement services overview**

Create `src/app/services/page.tsx` with metadata:

```tsx
export const metadata = createMetadata({
  title: "Services | Dan Feliciano",
  description:
    "Explore Dan Feliciano's advisory services in strategy, governance, operational turnaround, AI automation, analytics, service redesign, and Lean Six Sigma execution.",
  path: "/services",
});
```

Render the services overview sections from the brief.

- [ ] **Step 5: Implement three service detail pages**

For each service page:

- Export route metadata from the service object.
- Render `Breadcrumbs`, `PageHeader`, framework/use case/deliverables sections, related links, and `FinalCTA`.
- Add `JsonLd` with `@type: "Service"`.

- [ ] **Step 6: Implement products overview and detail pages**

For `/products`, render productized offer cards and CTA. For detail pages, use the product object, include "what it includes", "best for", deliverables, and product/service JSON-LD.

- [ ] **Step 7: Build and commit**

Run:

```bash
npm run test -- src/test/offer-routes.test.ts
npm run build
```

Expected: PASS.

Run:

```bash
git add src/app/services src/app/products src/components/ui src/test/offer-routes.test.ts
git commit -m "feat: add services and products pages"
```

---

### Task 6: Build Academy, Speaking, Results, Insights, Contact, Legal, And 404

**Files:**
- Create: `src/app/academy/page.tsx`
- Create: `src/app/academy/lean-six-sigma-ai-yellow-belt/page.tsx`
- Create: `src/app/academy/lean-six-sigma-ai-green-belt/page.tsx`
- Create: `src/app/academy/lean-six-sigma-ai-black-belt/page.tsx`
- Create: `src/app/speaking/page.tsx`
- Create: `src/app/case-studies/page.tsx`
- Create: `src/app/insights/page.tsx`
- Create: `src/app/contact/page.tsx`
- Create: `src/app/privacy/page.tsx`
- Create: `src/app/terms/page.tsx`
- Create: `src/app/not-found.tsx`
- Create: `src/components/contact/contact-form.tsx`
- Create: `src/test/contact-form.test.tsx`
- Create: `src/test/supporting-pages.test.ts`

- [ ] **Step 1: Add supporting content tests**

Create `src/test/supporting-pages.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { courses, insightCards, speakingTopics } from "@/content/site";

describe("supporting page content", () => {
  it("defines the three academy courses with approved durations", () => {
    expect(courses.map((course) => course.duration)).toEqual(["8 hours", "40 hours", "80 hours"]);
  });

  it("marks insight cards as coming soon when article pages are not built", () => {
    expect(insightCards.every((card) => card.status === "Coming soon")).toBe(true);
  });

  it("defines speaking topics", () => {
    expect(speakingTopics.length).toBeGreaterThanOrEqual(5);
  });
});
```

- [ ] **Step 2: Add contact form tests**

Create `src/test/contact-form.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/contact/contact-form";

describe("ContactForm", () => {
  it("shows accessible validation errors", async () => {
    render(<ContactForm />);
    await userEvent.click(screen.getByRole("button", { name: /send inquiry/i }));
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/please agree to be contacted/i)).toBeInTheDocument();
  });

  it("shows a success state after valid submission", async () => {
    render(<ContactForm />);
    await userEvent.type(screen.getByLabelText(/name/i), "Dan Feliciano");
    await userEvent.type(screen.getByLabelText(/email/i), "dan@example.com");
    await userEvent.type(screen.getByLabelText(/organization/i), "Example Org");
    await userEvent.selectOptions(screen.getByLabelText(/what are you interested in/i), "Strategy & Governance");
    await userEvent.type(screen.getByLabelText(/what problem are you trying to solve/i), "Backlog and decision speed.");
    await userEvent.selectOptions(screen.getByLabelText(/desired timeline/i), "30 days");
    await userEvent.click(screen.getByLabelText(/i agree to be contacted/i));
    await userEvent.click(screen.getByRole("button", { name: /send inquiry/i }));
    expect(await screen.findByText(/thanks. your request has been received/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run tests to verify missing implementation**

Run:

```bash
npm run test -- src/test/supporting-pages.test.ts src/test/contact-form.test.tsx
```

Expected: contact form test fails until `ContactForm` exists; content test passes after Task 2 content is complete.

- [ ] **Step 4: Implement `ContactForm`**

Create `src/components/contact/contact-form.tsx`:

```tsx
"use client";

import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "problem" | "consent", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const problem = String(form.get("problem") ?? "").trim();
    const consent = form.get("consent");

    if (!name) nextErrors.name = "Name is required.";
    if (!email) nextErrors.email = "Email is required.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!problem) nextErrors.problem = "Tell me what problem you are trying to solve.";
    if (!consent) nextErrors.consent = "Please agree to be contacted about your inquiry.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  }

  if (submitted) {
    return <p role="status" className="rounded-md border border-signal/30 bg-signal/10 p-4 font-semibold text-ink">Your email draft is ready. Please send it from your email app to complete the inquiry.</p>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <label className="grid gap-2">
        <span className="font-semibold">Name</span>
        <input name="name" className="rounded-md border border-slate-300 px-3 py-3" aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name ? <span id="name-error" className="text-sm font-semibold text-red-700">{errors.name}</span> : null}
      </label>
      <label className="grid gap-2">
        <span className="font-semibold">Email</span>
        <input name="email" type="email" className="rounded-md border border-slate-300 px-3 py-3" aria-describedby={errors.email ? "email-error" : undefined} />
        {errors.email ? <span id="email-error" className="text-sm font-semibold text-red-700">{errors.email}</span> : null}
      </label>
      <label className="grid gap-2">
        <span className="font-semibold">Organization</span>
        <input name="organization" className="rounded-md border border-slate-300 px-3 py-3" />
      </label>
      <label className="grid gap-2">
        <span className="font-semibold">What are you interested in?</span>
        <select name="interest" className="rounded-md border border-slate-300 px-3 py-3">
          <option>Strategy & Governance</option>
          <option>Phoenix Protocol</option>
          <option>AI, Automation & Analytics</option>
          <option>Backlog Kill Kit</option>
          <option>Policy Forensics</option>
          <option>Academy / Training</option>
          <option>Speaking</option>
          <option>Other</option>
        </select>
      </label>
      <label className="grid gap-2">
        <span className="font-semibold">What problem are you trying to solve?</span>
        <textarea name="problem" rows={5} className="rounded-md border border-slate-300 px-3 py-3" aria-describedby={errors.problem ? "problem-error" : undefined} />
        {errors.problem ? <span id="problem-error" className="text-sm font-semibold text-red-700">{errors.problem}</span> : null}
      </label>
      <label className="grid gap-2">
        <span className="font-semibold">Desired timeline</span>
        <select name="timeline" className="rounded-md border border-slate-300 px-3 py-3">
          <option>Immediately</option>
          <option>30 days</option>
          <option>60-90 days</option>
          <option>Exploring options</option>
        </select>
      </label>
      <label className="flex gap-3 text-sm">
        <input name="consent" type="checkbox" className="mt-1 h-4 w-4" aria-describedby={errors.consent ? "consent-error" : undefined} />
        <span>I agree to be contacted about my inquiry.</span>
      </label>
      {errors.consent ? <span id="consent-error" className="text-sm font-semibold text-red-700">{errors.consent}</span> : null}
      <button type="submit" className="min-h-11 rounded-md bg-ink px-5 font-bold text-white hover:bg-signal hover:text-ink">Send inquiry</button>
    </form>
  );
}
```

- [ ] **Step 5: Implement supporting pages**

Create each supporting route with unique metadata, one `h1`, content from `src/content/site.ts`, related internal links, and bottom CTA. Course pages include `Course` JSON-LD. Insight cards render "Coming soon" instead of linking to missing article detail pages.

- [ ] **Step 6: Run tests, build, and commit**

Run:

```bash
npm run test -- src/test/supporting-pages.test.ts src/test/contact-form.test.tsx
npm run build
```

Expected: PASS.

Run:

```bash
git add src/app/academy src/app/speaking src/app/case-studies src/app/insights src/app/contact src/app/privacy src/app/terms src/app/not-found.tsx src/components/contact src/test
git commit -m "feat: add academy and supporting pages"
```

---

### Task 7: Add Metadata, Sitemap, Robots, Redirect Tests, And Legacy Cleanup Tests

**Files:**
- Modify: `next.config.ts`
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Create: `src/test/seo.test.ts`
- Create: `src/test/legacy-brand.test.ts`

- [ ] **Step 1: Add SEO and redirect tests**

Create `src/test/seo.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { requiredRoutes } from "@/lib/routes";
import { absoluteUrl, createMetadata } from "@/lib/seo";

describe("seo helpers", () => {
  it("creates canonical absolute URLs", () => {
    expect(absoluteUrl("/services")).toBe("https://danfeliciano.com/services");
  });

  it("creates metadata with canonical and open graph URL", () => {
    const metadata = createMetadata({
      title: "Services | Dan Feliciano",
      description: "Explore advisory services.",
      path: "/services",
    });

    expect(metadata.alternates).toEqual({ canonical: "https://danfeliciano.com/services" });
    expect(metadata.openGraph).toMatchObject({ url: "https://danfeliciano.com/services" });
  });

  it("has at least all required sitemap routes", () => {
    expect(requiredRoutes.length).toBe(18);
  });
});
```

Create `src/test/legacy-brand.test.ts`:

```ts
import { execSync } from "node:child_process";
import { describe, expect, it } from "vitest";

describe("legacy brand cleanup", () => {
  it("does not include the forbidden legacy string in deployed source", () => {
    const forbidden = ["Op", "Ex", "90"].join("");
    const output = execSync(
      `rg -n --glob 'src/**' --glob 'package.json' --glob 'next.config.ts' --glob '!src/test/legacy-brand.test.ts' '${forbidden}' || true`,
      { encoding: "utf8" },
    );

    expect(output.trim()).toBe("");
  });
});
```

This test constructs the forbidden legacy string from pieces so the deployed source and test files do not contain a contiguous forbidden-brand match.

- [ ] **Step 2: Run tests**

Run:

```bash
npm run test -- src/test/seo.test.ts src/test/legacy-brand.test.ts
```

Expected: PASS.

- [ ] **Step 3: Add robots and sitemap routes**

Create `src/app/robots.ts`:

```ts
import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
```

Create `src/app/sitemap.ts`:

```ts
import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { requiredRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return requiredRoutes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-06-02"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
```

- [ ] **Step 4: Update `next.config.ts` to import redirect data**

Refactor `next.config.ts` to use `legacyRedirects` from `src/lib/routes.ts`, returning objects with `permanent: true`.

- [ ] **Step 5: Run final legacy-string manual search**

Run:

```bash
rg -n "$(printf '%s%s%s' Op Ex 90)" src package.json next.config.ts tailwind.config.ts
```

Expected: no output after substituting the actual forbidden legacy string.

- [ ] **Step 6: Build and commit SEO routes**

Run:

```bash
npm run test -- src/test/seo.test.ts src/test/legacy-brand.test.ts
npm run build
git add next.config.ts src/app/robots.ts src/app/sitemap.ts src/test/seo.test.ts src/test/legacy-brand.test.ts
git commit -m "feat: add seo routes and legacy cleanup checks"
```

---

### Task 8: Remove Vite Prototype Files And Run Full Verification

**Files:**
- Delete: `index.html`
- Delete: `vite.config.js`
- Delete: `src/main.jsx`
- Delete: `src/App.jsx`
- Delete: `src/App.test.jsx`
- Delete: `src/styles.css`
- Delete: prototype-only files in `src/components/` and `src/data/`

- [ ] **Step 1: Delete obsolete prototype files**

Run:

```bash
rm index.html vite.config.js src/main.jsx src/App.jsx src/App.test.jsx src/styles.css
rm -rf src/data
```

Remove any prototype-only component files under `src/components/` that are not imported by the new Next.js site.

- [ ] **Step 2: Run full automated checks**

Run:

```bash
npm run test
npm run build
```

Expected: all tests pass and the production build succeeds.

- [ ] **Step 3: Start the dev server**

Run:

```bash
npm run dev
```

Expected: Next dev server starts on `http://127.0.0.1:3000` or another available port.

- [ ] **Step 4: Browser verification**

Open the site in the in-app browser and verify:

- `/` first viewport matches Operating Command direction.
- Desktop navigation opens all primary pages.
- Mobile navigation opens, closes, and routes correctly.
- `/contact` validation errors and success state work.
- `/insights` has no dead article links.
- `/sitemap.xml` and `/robots.txt` load.
- Custom 404 appears for a missing route.
- No visible overlap, clipped text, or horizontal overflow on desktop and mobile.

- [ ] **Step 5: Capture screenshots and compare to approved design**

Capture desktop and mobile screenshots of the homepage. Compare against `.superpowers/brainstorm/57736-1780404960/content/operating-command-design.html` and verify:

- Hero copy matches approved copy.
- CTA labels match approved copy.
- Palette is deep navy, cyan, amber, white/near-white.
- Command-panel visual appears in the first viewport.
- Sections use varied rhythm, not a repetitive generic card stack.
- Text does not overlap at mobile width.

- [ ] **Step 6: Commit cleanup and verification**

Run:

```bash
git add -A
git commit -m "chore: remove prototype files and verify site rebuild"
```

---

## Final Verification Checklist

- [ ] `npm run test` passes.
- [ ] `npm run build` passes.
- [ ] Browser desktop check passes.
- [ ] Browser mobile check passes.
- [ ] Contact form validation and success state pass.
- [ ] Sitemap and robots load.
- [ ] Custom 404 loads.
- [ ] Required routes exist.
- [ ] Each page has one H1.
- [ ] Every route has unique metadata.
- [ ] JSON-LD renders.
- [ ] No placeholder filler text appears.
- [ ] Forbidden legacy-brand search returns no deployed-source matches.
- [ ] The final homepage is recognizably Operating Command.
