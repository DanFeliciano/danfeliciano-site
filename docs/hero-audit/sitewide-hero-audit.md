# Sitewide Hero and Buyer-Recognition Audit

Date: July 26, 2026

## Production source confirmation

- Repository: `DanFeliciano/danfeliciano-site`
- Production branch: `strategy-forensics-website-update`
- Audited commit: `5dca7d48cc5070a84b8312f4aaf737406397ed34`
- Hosting project: the existing project referenced by `.openai/hosting.json`
- Live domain: `https://danfeliciano.com`
- Confirmation: the live `/services` page contains the Common Misdiagnoses work from the audited commit, and the current Sites deployment serves the same content.

## Architecture

- Framework: Next.js 16 App Router compiled and hosted through Vinext/Sites
- Rendering: server and static rendering, with client code limited to mobile navigation and the contact form
- Styling: Tailwind CSS with existing `ink`, `graphite`, `paper`, `charcoal`, and `signal` tokens
- Shared page UI: `PageHeader`, `Section`, `Container`, `CtaButton`, `FinalCTA`, `ProofStrip`
- Shared shell: `SiteHeader`, `MobileNav`, `SiteFooter`
- Content models: `site.ts`, `owner-offers.ts`, `insights.ts`, `service-misdiagnoses.ts`
- SEO: `createMetadata`, article metadata, JSON-LD helpers, sitemap, robots, permanent redirects
- Tests: Vitest and Testing Library
- Deployment: GitHub production branch plus the existing Sites source/version/deployment workflow

## Public route inventory

The audit found 25 rendered public pages and 7 permanent compatibility redirects.

### Rendered public pages

| Route | Role |
| --- | --- |
| `/` | Primary commercial entry |
| `/what-i-fix` | Buyer self-recognition and problem selection |
| `/services` | Capability and service-detail index |
| `/backlog-kill-kit` | Backlog-specific offer |
| `/ai-time-saver-sprint` | AI and automation offer |
| `/operations-reset` | Operational recovery offer |
| `/owner-operating-system` | Owner-dependency offer |
| `/policy-forensics` | Policy and regulatory offer |
| `/academy` | Training authority and course index |
| `/academy/lean-six-sigma-ai-yellow-belt` | Foundational course |
| `/academy/lean-six-sigma-ai-green-belt` | Project-leadership course |
| `/academy/lean-six-sigma-ai-black-belt` | Advanced improvement-leadership course |
| `/results` | Evidence and outcomes |
| `/speaking` | Speaking and workshop buyer page |
| `/insights` | Authority and publishing index |
| `/insights/your-ai-isnt-broken-your-business-is-invisible` | Published Point of View |
| `/contact` | Diagnostic and inquiry entry |
| `/privacy` | Privacy information |
| `/terms` | Website and engagement terms |
| `/strategic-forensics` | Forensic decision-analysis authority page |
| `/policy-impact-analysis` | Policy-impact analysis page |
| `/backlog-kill` | Backlog and service-recovery authority page |
| `/products` | Focused diagnostics and briefings index |
| `/briefings` | Strategic Forensics briefing page |
| `/about` | Brand and professional authority |

### Permanent compatibility redirects

| Source | Destination |
| --- | --- |
| `/case-studies` | `/results` |
| `/ai-process-redesign` | `/ai-time-saver-sprint` |
| `/products/backlog-kill-kit` | `/backlog-kill-kit` |
| `/products/policy-forensics` | `/policy-forensics` |
| `/services/aesop-strategy-governance` | `/owner-operating-system` |
| `/services/phoenix-protocol` | `/operations-reset` |
| `/services/ai-automation-analytics` | `/ai-time-saver-sprint` |

Additional legacy redirects for old training, consulting, policy, AI, backlog, and Phoenix URLs remain configured and point into the rendered route set.

## Baseline visual evidence

The full baseline contains 75 first-viewport screenshots:

- 25 routes at 1440 × 900
- 25 routes at 1280 × 800
- 25 routes at 390 × 844

Artifact location:

`outputs/sitewide-hero-audit/screenshots/before`

Baseline fold findings:

- 1440 × 900: 23 of 25 pages show the next meaningful heading. What I Fix and the Point of View article do not.
- 1280 × 800: 18 of 25 pages show the next meaningful heading.
- 390 × 844: 18 of 25 pages show the next meaningful heading.
- Speaking, Contact, and the Point of View article have no primary action in the hero.
- No audited route has horizontal overflow in the baseline viewports.

## Final hero audit

| Route | Visitor / recognition problem | Desired outcome | Final H1 | Primary CTA | Secondary CTA | Baseline note |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Owners seeing backlogs, delays, rework, weak follow-up, confusing numbers, or cash pressure | See the operating system and fix the right problem | Fix what is slowing your business down. | Start an Operational Visibility Diagnostic | Explore What I Fix | Correct message; problem selection is too low |
| `/what-i-fix` | Buyers who know the symptom but not the service | Recognize their problem immediately | Which problem keeps coming back? | Choose Your Problem | Start an Operational Visibility Diagnostic | Page-name H1 and three explanatory paragraphs delay the problem cards |
| `/services` | Leaders with stuck work, a confusing number, or an urgent decision | Choose the smallest practical intervention | Bring me the stuck work, confusing number, or decision that cannot wait. | Choose the Problem First | Start an Operational Visibility Diagnostic | Existing H1 describes the service count, not the buyer |
| `/insights` | Owners and operators seeking a different explanation | Read practical, contrarian analysis | The visible problem is rarely the whole problem. | Read the Featured Point of View | Explore All Insights | Generic sales CTA competes with the publishing role |
| `/ai-time-saver-sprint` | Leaders unsure where AI will save real time | Select useful automation without scaling a bad process | Find where AI can save time—before you automate the wrong work. | Find Time-Saving Automation | — | Offer name is the H1; next section is late at smaller viewports |
| `/backlog-kill-kit` | Teams with aging work and weak flow | Diagnose why the backlog is not shrinking | Find why work is aging—and what will move it. | Diagnose the Backlog | — | Offer name is the H1 |
| `/operations-reset` | Leaders trapped in firefighting | Stabilize work and regain control in 90 days | Move from firefighting to control in 90 days. | Start an Operations Reset | — | Offer name is the H1; first useful section is late |
| `/owner-operating-system` | Owners routing every decision through themselves | Make ownership, decisions, escalation, and follow-up explicit | Stop being the operating system. | Build an Owner Operating System | — | Offer name is the H1; page initially frames the problem as owner bottleneck |
| `/policy-forensics` | Policy-sensitive leaders | See operational, financial, compliance, and risk consequences | What will this policy actually do to costs, operations and risk? | Examine the Policy Impact | — | Offer name is the H1 |
| `/academy` | Leaders buying team capability | Teach people to diagnose and improve real work | Teach your team to see and fix the system. | Train the Team | — | Current direction is strong but misses the category distinction |
| `/results` | Buyers looking for evidence | See outcomes in cash, capacity, speed, and control | Results that show up in cash, capacity, speed and control. | See the Evidence | — | Page-name H1 and a generic sales CTA lead |
| `/about` | Buyers assessing Dan's fit and judgment | Understand Dan as operator and forensic diagnostician | I find the hidden cause behind visible business problems. | See What I Fix | See Results | Chronological-brand framing leads instead of buyer relevance |
| `/speaking` | Event organizers and leadership teams | Give an audience a useful diagnostic lens | Give leaders a different way to see—and solve—the problem. | Invite Dan to Speak | — | No hero CTA; biography/method language appears too early |
| `/contact` | A leader with a recurring problem | Describe the problem and choose the right first intervention | Bring me the problem that keeps coming back. | Describe the Problem | — | Obsolete broad Bottleneck Diagnostic language remains |
| `/academy/lean-six-sigma-ai-yellow-belt` | Teams needing shared improvement language | See waste and support better workflows | Give the team a practical way to see and improve work. | Ask About Yellow Belt Training | Academy Overview | Product-name H1 |
| `/academy/lean-six-sigma-ai-green-belt` | Improvement project leaders | Diagnose causes and deliver measurable change | Lead improvement projects that change the work. | Ask About Green Belt Training | Academy Overview | Product-name H1 |
| `/academy/lean-six-sigma-ai-black-belt` | Advanced improvement leaders | Lead complex cross-functional improvement | Lead complex improvement without losing the operation. | Ask About Black Belt Training | Academy Overview | Product-name H1 |
| `/insights/your-ai-isnt-broken-your-business-is-invisible` | Leaders whose AI work is failing | Understand the operating-system problem beneath AI failure | Your AI Isn’t Broken. Your Business Is Invisible. | Read the Point of View | Explore All Insights | Strong H1; no hero action and article body starts below a tall editorial header |
| `/strategic-forensics` | Leaders facing a costly, ambiguous decision | Expose hidden assumptions, financial exposure, and execution risk | Find the hidden risk before the decision gets expensive. | Request a Strategic Forensics Briefing | See What Dan Examines | Product-name H1 and duplicate contact CTAs |
| `/policy-impact-analysis` | Leaders deciding how to respond to a policy change | Translate policy into operating consequences | See what the policy changes in the real operation. | Request a Policy Impact Briefing | Explore Policy Forensics | Product-name H1 and duplicate contact CTAs |
| `/backlog-kill` | Service leaders considering staffing or funding | Diagnose the actual constraint | Diagnose why the backlog keeps growing before adding people. | Diagnose the Backlog | Start an Operations Reset | Legacy service-name H1 and duplicate contact CTAs |
| `/products` | Leaders seeking a bounded diagnostic or briefing | Choose a focused first step before a larger commitment | Get a clear read before the expensive move. | Choose a Focused Diagnostic | Start an Operational Visibility Diagnostic | Generic index H1 and Strategic Forensics dominates the broad front door |
| `/briefings` | Boards and leadership teams needing decision clarity | Get a concise consequence-and-tradeoff briefing | Give leaders a clear read before they commit. | Request a Strategic Forensics Briefing | See Briefing Topics | Product-name H1 and duplicate contact CTAs |
| `/privacy` | People evaluating inquiry-data handling | Understand what is collected and why | Your inquiry information stays tied to your inquiry. | Read the Privacy Policy | Ask a Privacy Question | Legal page-name H1 is acceptable but not recognition-led |
| `/terms` | Site visitors and prospective clients | Understand the boundaries of site content and engagements | Clear terms for using this site and working with Dan. | Read the Terms | Ask a Terms Question | Legal page-name H1 is acceptable but not outcome-led |

## Design decision

Use a small family of hero compositions:

1. A compact shared commercial hero with eyebrow, outcome/problem H1, one or two support paragraphs, primary action, optional secondary action, and optional compact recognition/proof line.
2. A custom homepage hero that preserves the approved copy but moves the Operational Visibility visual below the problem selector.
3. An editorial article header that preserves the canonical article and metadata while adding clear read/index actions.

The existing typography, palette, page widths, buttons, navigation structure, cards, borders, and responsive breakpoints remain the visual source of truth. No new imagery, gradients, fonts, component library, or decorative system is introduced.
