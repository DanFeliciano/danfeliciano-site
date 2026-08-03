# Executive Intelligence Prototype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-fidelity React/Vite prototype of the Executive Intelligence Command Center defined in `docs/superpowers/specs/2026-05-20-executive-intelligence-prototype-design.md`.

**Architecture:** Use a local-only React app with deterministic curated data, local UI state, and no backend. The app shell owns selected risk, selected audience, briefing refresh state, and escalation state; focused components render command bar, navigation rail, risk cockpit, escalation queue, signal map, and briefing detail panel.

**Tech Stack:** React, Vite, plain CSS, Vitest, Testing Library, lucide-react for UI icons.

---

## File Structure

- Create `package.json`: npm scripts and dependencies.
- Create `index.html`: Vite HTML entry.
- Create `src/main.jsx`: React root mount.
- Create `src/App.jsx`: app composition and local UI state.
- Create `src/App.test.jsx`: interaction tests for selection, audience changes, briefing generation, and escalation state.
- Create `src/data/intelligence.js`: deterministic prototype risks, signal nodes, escalation items, audiences, and helper functions.
- Create `src/components/CommandBar.jsx`: top command bar, audience selector, and generate briefing button.
- Create `src/components/NavRail.jsx`: left navigation rail.
- Create `src/components/RiskCard.jsx`: ranked risk card component.
- Create `src/components/MetricStrip.jsx`: compact operational metric strip.
- Create `src/components/EscalationQueue.jsx`: escalation queue with acknowledge/assign actions.
- Create `src/components/SignalMap.jsx`: compact selected-risk signal map.
- Create `src/components/BriefingPanel.jsx`: selected-risk narrative detail view.
- Create `src/styles.css`: design tokens, layout, responsive behavior, and component styling.

---

### Task 1: Scaffold React/Vite App

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/styles.css`

- [ ] **Step 1: Create package metadata and scripts**

Create `package.json`:

```json
{
  "name": "executive-intelligence-prototype",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "vite build",
    "preview": "vite preview --host 127.0.0.1",
    "test": "vitest --run"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.5",
    "typescript": "^5.7.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.468.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@testing-library/user-event": "^14.5.2",
    "jsdom": "^25.0.1",
    "vitest": "^2.1.8"
  }
}
```

- [ ] **Step 2: Create Vite HTML entry**

Create `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Executive Intelligence Command Center</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Create React mount**

Create `src/main.jsx`:

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

- [ ] **Step 4: Create temporary app shell**

Create `src/App.jsx`:

```jsx
export default function App() {
  return (
    <main className="app">
      <h1>Executive Intelligence Command Center</h1>
      <p>Prototype shell ready.</p>
    </main>
  );
}
```

- [ ] **Step 5: Create base stylesheet**

Create `src/styles.css`:

```css
:root {
  color: #f5f7fb;
  background: #080c14;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: #080c14;
}

button,
select {
  font: inherit;
}

.app {
  min-height: 100vh;
  padding: 32px;
}
```

- [ ] **Step 6: Install dependencies**

Run: `npm install`

Expected: dependencies install and `package-lock.json` is created.

- [ ] **Step 7: Run initial build**

Run: `npm run build`

Expected: Vite builds successfully.

- [ ] **Step 8: Commit scaffold**

```bash
git add package.json package-lock.json index.html src/main.jsx src/App.jsx src/styles.css
git commit -m "feat: scaffold executive intelligence prototype"
```

---

### Task 2: Add Deterministic Intelligence Data

**Files:**
- Create: `src/data/intelligence.js`
- Create: `src/data/intelligence.test.js`

- [ ] **Step 1: Write data tests**

Create `src/data/intelligence.test.js`:

```js
import { describe, expect, it } from 'vitest';
import {
  audiences,
  escalationItems,
  getAudienceBriefing,
  getConnectedSignals,
  riskSignals,
} from './intelligence.js';

describe('intelligence data', () => {
  it('contains exactly three ranked executive risks', () => {
    expect(riskSignals).toHaveLength(3);
    expect(riskSignals.map((risk) => risk.rank)).toEqual([1, 2, 3]);
  });

  it('provides role-specific briefing language for each audience', () => {
    for (const risk of riskSignals) {
      for (const audience of audiences) {
        const briefing = getAudienceBriefing(risk.id, audience.id);
        expect(briefing.bbluf).toContain(audience.shortLabel);
        expect(briefing.decisions.length).toBeGreaterThan(0);
      }
    }
  });

  it('connects every risk to visible signal nodes', () => {
    for (const risk of riskSignals) {
      const nodes = getConnectedSignals(risk.id);
      expect(nodes.length).toBeGreaterThanOrEqual(3);
      expect(nodes.every((node) => node.active)).toBe(true);
    }
  });

  it('contains actionable escalation items', () => {
    expect(escalationItems.length).toBeGreaterThanOrEqual(3);
    expect(escalationItems.every((item) => item.owner && item.nextAction)).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/data/intelligence.test.js`

Expected: FAIL because `src/data/intelligence.js` does not exist.

- [ ] **Step 3: Create curated data module**

Create `src/data/intelligence.js`:

```js
export const audiences = [
  { id: 'ceo', label: 'CEO', shortLabel: 'CEO' },
  { id: 'cfo', label: 'CFO', shortLabel: 'CFO' },
  { id: 'coo', label: 'COO', shortLabel: 'COO' },
  { id: 'board', label: 'Board', shortLabel: 'Board' },
];

export const signalNodes = [
  { id: 'market', label: 'Market', tone: 'amber' },
  { id: 'policy', label: 'Policy', tone: 'red' },
  { id: 'customer', label: 'Customer', tone: 'red' },
  { id: 'competitor', label: 'Competitor', tone: 'cyan' },
  { id: 'financial', label: 'Financial', tone: 'amber' },
  { id: 'execution', label: 'Execution', tone: 'red' },
  { id: 'sentiment', label: 'Stakeholder', tone: 'amber' },
];

export const riskSignals = [
  {
    id: 'affordability-pressure',
    rank: 1,
    title: 'Affordability pressure is turning into renewal risk',
    category: 'Customer + Financial',
    severity: 'Critical',
    importance: 96,
    urgency: 91,
    financialExposure: '$8.4M',
    stakeholderImpact: 'Enterprise accounts and public-sector buyers',
    escalationProbability: 78,
    owner: 'Chief Revenue Officer',
    status: 'Executive intervention required',
    trend: '+18 pts in 7 days',
    recommendedAction:
      'Approve a targeted retention package and require account-level risk review before Friday.',
    signalIds: ['customer', 'financial', 'market', 'sentiment'],
    metrics: [
      { label: 'At-risk ARR', value: '$8.4M', delta: '+$1.9M' },
      { label: 'Escalating accounts', value: '17', delta: '+6' },
      { label: 'Renewal window', value: '45 days', delta: 'closing' },
    ],
    evidence: [
      'Customer support themes show repeated budget-freeze language across strategic accounts.',
      'Procurement signals indicate longer approval cycles and requests for deferrals.',
      'Sentiment in executive requests shifted from feature urgency to affordability pressure.',
    ],
    implications: [
      'Revenue risk may surface before lagging pipeline and churn dashboards move.',
      'Discounting without segmentation could train strategic customers to delay commitments.',
      'Competitors can exploit uncertainty with migration incentives.',
    ],
    underestimated:
      'Leadership may be treating affordability as a commercial issue when it is becoming an operating-risk signal.',
    talkingPoints: [
      'The issue is not only price sensitivity; it is decision paralysis in accounts that normally move quickly.',
      'A controlled intervention now is cheaper than broad concessions after renewal confidence breaks.',
    ],
    briefingByAudience: {
      ceo: {
        bbluf:
          'CEO: Affordability pressure has crossed from customer noise into strategic renewal exposure.',
        decisions: [
          'Authorize executive outreach to top 10 exposed accounts.',
          'Decide whether retention concessions require CEO approval this cycle.',
        ],
      },
      cfo: {
        bbluf:
          'CFO: $8.4M in renewal exposure needs segmented treatment before discounting becomes uncontrolled.',
        decisions: [
          'Set guardrails for retention credits.',
          'Approve a risk-adjusted forecast scenario for the current quarter.',
        ],
      },
      coo: {
        bbluf:
          'COO: Renewal risk is now tied to approval friction, account-response delays, and ownership gaps.',
        decisions: [
          'Assign an operating owner for the 17 escalating accounts.',
          'Compress approval paths for retention offers.',
        ],
      },
      board: {
        bbluf:
          'Board: Customer affordability pressure is an early warning indicator for revenue durability.',
        decisions: [
          'Review management mitigation plan.',
          'Request a renewal-risk update in the next board packet.',
        ],
      },
    },
  },
  {
    id: 'competitor-ai-acceleration',
    rank: 2,
    title: 'Competitor AI adoption is compressing service expectations',
    category: 'Competitor + Market',
    severity: 'High',
    importance: 88,
    urgency: 83,
    financialExposure: '$3.1M',
    stakeholderImpact: 'Strategic buyers comparing automation maturity',
    escalationProbability: 64,
    owner: 'Chief Product Officer',
    status: 'Response strategy pending',
    trend: '+11 pts in 14 days',
    recommendedAction:
      'Publish a 30-day AI service-response plan and arm sales with defensible differentiation.',
    signalIds: ['competitor', 'market', 'customer', 'execution'],
    metrics: [
      { label: 'Competitive mentions', value: '29', delta: '+12' },
      { label: 'Deals affected', value: '8', delta: '+3' },
      { label: 'Response gap', value: '30 days', delta: 'narrowing' },
    ],
    evidence: [
      'Competitors announced AI-assisted implementation and faster support response promises.',
      'Sales notes show repeated buyer questions about automation maturity.',
      'Internal delivery teams have no approved narrative for AI-enabled service quality.',
    ],
    implications: [
      'The competitive threat is shifting from product feature parity to perceived operating speed.',
      'Deals may stall if buyers conclude the organization is slower to adapt.',
      'A weak narrative could make normal implementation friction look like strategic lag.',
    ],
    underestimated:
      'Leadership may be underestimating how quickly competitor messaging can reset customer expectations.',
    talkingPoints: [
      'The market is comparing response systems, not only product functions.',
      'A credible near-term operating narrative can protect deals while roadmap work continues.',
    ],
    briefingByAudience: {
      ceo: {
        bbluf:
          'CEO: Competitor AI messaging is becoming a strategic perception risk in active enterprise conversations.',
        decisions: [
          'Approve a public-facing AI service posture.',
          'Choose the executive owner for competitive response within 48 hours.',
        ],
      },
      cfo: {
        bbluf:
          'CFO: AI-driven competitive pressure is touching $3.1M in active deal exposure.',
        decisions: [
          'Decide whether to fund rapid enablement and customer-facing proof assets.',
          'Adjust forecast confidence for affected opportunities.',
        ],
      },
      coo: {
        bbluf:
          'COO: Service expectations are moving faster than internal operating routines.',
        decisions: [
          'Define the 30-day operating changes that can credibly support the AI narrative.',
          'Assign weekly delivery metrics for executive review.',
        ],
      },
      board: {
        bbluf:
          'Board: Competitor AI adoption is a market-position risk, not only a product-roadmap issue.',
        decisions: [
          'Request management view on AI operating differentiation.',
          'Track competitive displacement risk in the next strategic update.',
        ],
      },
    },
  },
  {
    id: 'approval-bottleneck',
    rank: 3,
    title: 'Approval bottlenecks are delaying risk mitigation',
    category: 'Internal Execution',
    severity: 'Elevated',
    importance: 81,
    urgency: 76,
    financialExposure: '$1.7M',
    stakeholderImpact: 'Cross-functional teams awaiting executive decisions',
    escalationProbability: 59,
    owner: 'Chief Operating Officer',
    status: 'Mitigation stalled',
    trend: '+9 pts in 10 days',
    recommendedAction:
      'Create a temporary executive approval lane for retention, policy, and AI-response workstreams.',
    signalIds: ['execution', 'sentiment', 'policy', 'financial'],
    metrics: [
      { label: 'Blocked decisions', value: '14', delta: '+5' },
      { label: 'Avg delay', value: '9.6 days', delta: '+2.1' },
      { label: 'Owners waiting', value: '6', delta: '+2' },
    ],
    evidence: [
      'Task tracking shows overdue approvals concentrated around revenue-risk mitigation.',
      'Internal sentiment indicates teams are avoiding escalation until decisions are late.',
      'Policy and customer-response workstreams share the same executive approval dependency.',
    ],
    implications: [
      'Organizational drag is compounding across separate workstreams.',
      'Risk mitigation may fail from delayed authorization rather than poor strategy.',
      'Middle-management filtering is hiding urgency until deadlines become recovery problems.',
    ],
    underestimated:
      'Leadership may be underestimating how much strategic risk is now approval-latency risk.',
    talkingPoints: [
      'The bottleneck is not effort; it is decision throughput.',
      'A temporary escalation lane can restore momentum without redesigning governance.',
    ],
    briefingByAudience: {
      ceo: {
        bbluf:
          'CEO: Approval latency is now a strategic risk multiplier across revenue and policy responses.',
        decisions: [
          'Sponsor a 2-week executive approval lane.',
          'Name a single accountable owner for blocked decisions.',
        ],
      },
      cfo: {
        bbluf:
          'CFO: $1.7M in exposed work is delayed by approval bottlenecks rather than budget constraints.',
        decisions: [
          'Authorize pre-approved thresholds for mitigation spend.',
          'Review cost of delay against governance overhead.',
        ],
      },
      coo: {
        bbluf:
          'COO: Execution drag is concentrated in decision rights and escalation timing.',
        decisions: [
          'Move 14 blocked decisions into a daily review lane.',
          'Publish ownership and service-level expectations for approvals.',
        ],
      },
      board: {
        bbluf:
          'Board: Internal decision latency is increasing the probability that manageable risks become material.',
        decisions: [
          'Ask management to report decision-throughput metrics.',
          'Monitor whether governance friction is delaying mitigation.',
        ],
      },
    },
  },
];

export const escalationItems = [
  {
    id: 'renewal-review',
    riskId: 'affordability-pressure',
    trigger: 'Escalation probability exceeded 75%',
    owner: 'CRO',
    status: 'Unacknowledged',
    probability: 78,
    nextAction: 'Start executive outreach list for top 10 accounts.',
  },
  {
    id: 'ai-positioning',
    riskId: 'competitor-ai-acceleration',
    trigger: 'Competitive mentions doubled in active deal notes',
    owner: 'CPO',
    status: 'Assigned',
    probability: 64,
    nextAction: 'Approve 30-day AI service-response narrative.',
  },
  {
    id: 'approval-lane',
    riskId: 'approval-bottleneck',
    trigger: 'Blocked decisions increased for two consecutive cycles',
    owner: 'COO',
    status: 'Unacknowledged',
    probability: 59,
    nextAction: 'Open temporary executive approval lane.',
  },
];

export function getRiskById(riskId) {
  return riskSignals.find((risk) => risk.id === riskId) ?? riskSignals[0];
}

export function getAudienceBriefing(riskId, audienceId) {
  const risk = getRiskById(riskId);
  return risk.briefingByAudience[audienceId] ?? risk.briefingByAudience.ceo;
}

export function getConnectedSignals(riskId) {
  const risk = getRiskById(riskId);
  return signalNodes.map((node) => ({
    ...node,
    active: risk.signalIds.includes(node.id),
  }));
}
```

- [ ] **Step 4: Run data tests**

Run: `npm test -- src/data/intelligence.test.js`

Expected: PASS.

- [ ] **Step 5: Commit data**

```bash
git add src/data/intelligence.js src/data/intelligence.test.js
git commit -m "feat: add executive intelligence sample data"
```

---

### Task 3: Build Component Structure And Interaction Tests

**Files:**
- Create: `src/App.test.jsx`
- Modify: `src/App.jsx`
- Create: `src/components/CommandBar.jsx`
- Create: `src/components/NavRail.jsx`
- Create: `src/components/RiskCard.jsx`
- Create: `src/components/MetricStrip.jsx`
- Create: `src/components/EscalationQueue.jsx`
- Create: `src/components/SignalMap.jsx`
- Create: `src/components/BriefingPanel.jsx`

- [ ] **Step 1: Write app interaction tests**

Create `src/App.test.jsx`:

```jsx
import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('Executive Intelligence Command Center', () => {
  it('opens directly into the command center', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /what matters now/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/renewal risk/i)).toBeInTheDocument();
    expect(screen.queryByText(/prototype shell ready/i)).not.toBeInTheDocument();
  });

  it('updates briefing details when a risk is selected', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getByRole('button', {
        name: /competitor ai adoption is compressing service expectations/i,
      }),
    );

    expect(screen.getByText(/competitor ai messaging/i)).toBeInTheDocument();
    expect(screen.getByText(/response strategy pending/i)).toBeInTheDocument();
  });

  it('changes briefing emphasis by audience', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.selectOptions(screen.getByLabelText(/executive audience/i), 'cfo');

    expect(screen.getByText(/^CFO:/)).toBeInTheDocument();
  });

  it('simulates briefing generation', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /generate briefing/i }));

    expect(screen.getByRole('button', { name: /generating/i })).toBeDisabled();
    await waitFor(() => {
      expect(screen.getByText(/refreshed just now/i)).toBeInTheDocument();
    });
  });

  it('updates escalation local state', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /acknowledge renewal review/i }));

    expect(screen.getByText(/acknowledged by executive office/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- src/App.test.jsx`

Expected: FAIL because the app still renders the temporary shell and components do not exist.

- [ ] **Step 3: Create command bar component**

Create `src/components/CommandBar.jsx`:

```jsx
import { RefreshCw, ShieldAlert } from 'lucide-react';

export function CommandBar({
  audiences,
  selectedAudience,
  onAudienceChange,
  onGenerate,
  isGenerating,
  lastRefreshLabel,
}) {
  return (
    <header className="command-bar">
      <div className="brand-lockup">
        <div className="brand-mark">
          <ShieldAlert size={19} aria-hidden="true" />
        </div>
        <div>
          <p className="label">Executive Intelligence Engine</p>
          <h1>Command Center</h1>
        </div>
      </div>

      <div className="command-actions">
        <div className="refresh-state" aria-live="polite">
          {lastRefreshLabel}
        </div>
        <label className="audience-control">
          <span>Executive audience</span>
          <select
            value={selectedAudience}
            onChange={(event) => onAudienceChange(event.target.value)}
            aria-label="Executive audience"
          >
            {audiences.map((audience) => (
              <option key={audience.id} value={audience.id}>
                {audience.label}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="primary-action"
          onClick={onGenerate}
          disabled={isGenerating}
        >
          <RefreshCw size={16} aria-hidden="true" />
          {isGenerating ? 'Generating...' : 'Generate Briefing'}
        </button>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Create nav rail component**

Create `src/components/NavRail.jsx`:

```jsx
import { Activity, BellDot, FileText, GitBranch, Landmark } from 'lucide-react';

const navItems = [
  { label: 'Command', icon: Activity, active: true },
  { label: 'Briefings', icon: FileText, active: false },
  { label: 'Escalations', icon: BellDot, active: false },
  { label: 'Signals', icon: GitBranch, active: false },
  { label: 'Governance', icon: Landmark, active: false },
];

export function NavRail() {
  return (
    <nav className="nav-rail" aria-label="Primary">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            type="button"
            className={`nav-item ${item.active ? 'is-active' : 'is-muted'}`}
            aria-current={item.active ? 'page' : undefined}
            disabled={!item.active}
            title={item.active ? item.label : `${item.label} unavailable in prototype`}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
```

- [ ] **Step 5: Create risk card component**

Create `src/components/RiskCard.jsx`:

```jsx
import { AlertTriangle, ArrowUpRight } from 'lucide-react';
import { MetricStrip } from './MetricStrip.jsx';

export function RiskCard({ risk, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`risk-card ${isSelected ? 'is-selected' : ''}`}
      onClick={() => onSelect(risk.id)}
      aria-pressed={isSelected}
    >
      <span className="rank">0{risk.rank}</span>
      <div className="risk-card-main">
        <div className="risk-card-header">
          <span className={`severity severity-${risk.severity.toLowerCase()}`}>
            <AlertTriangle size={14} aria-hidden="true" />
            {risk.severity}
          </span>
          <span>{risk.category}</span>
        </div>
        <h3>{risk.title}</h3>
        <p>{risk.recommendedAction}</p>
        <MetricStrip metrics={risk.metrics} />
      </div>
      <div className="risk-card-score">
        <strong>{risk.importance}</strong>
        <span>Strategic importance</span>
        <em>
          {risk.trend}
          <ArrowUpRight size={13} aria-hidden="true" />
        </em>
      </div>
    </button>
  );
}
```

- [ ] **Step 6: Create metric strip component**

Create `src/components/MetricStrip.jsx`:

```jsx
export function MetricStrip({ metrics }) {
  return (
    <dl className="metric-strip">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
          <span>{metric.delta}</span>
        </div>
      ))}
    </dl>
  );
}
```

- [ ] **Step 7: Create escalation queue component**

Create `src/components/EscalationQueue.jsx`:

```jsx
import { CheckCircle2, UserPlus } from 'lucide-react';

export function EscalationQueue({ items, selectedRiskId, onAcknowledge, onAssign }) {
  return (
    <section className="panel escalation-panel" aria-labelledby="escalation-heading">
      <div className="panel-heading">
        <p className="label">Threshold triggers</p>
        <h2 id="escalation-heading">Escalation Queue</h2>
      </div>

      <div className="escalation-list">
        {items.map((item) => (
          <article
            key={item.id}
            className={`escalation-item ${item.riskId === selectedRiskId ? 'is-linked' : ''}`}
          >
            <div>
              <strong>{item.trigger}</strong>
              <p>{item.nextAction}</p>
              <span>{item.status}</span>
            </div>
            <div className="escalation-meta">
              <span>{item.owner}</span>
              <b>{item.probability}%</b>
            </div>
            <div className="escalation-actions">
              <button
                type="button"
                onClick={() => onAcknowledge(item.id)}
                aria-label={`Acknowledge ${item.id.replace('-', ' ')}`}
              >
                <CheckCircle2 size={14} aria-hidden="true" />
                Ack
              </button>
              <button
                type="button"
                onClick={() => onAssign(item.id)}
                aria-label={`Assign ${item.id.replace('-', ' ')}`}
              >
                <UserPlus size={14} aria-hidden="true" />
                Assign
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 8: Create signal map component**

Create `src/components/SignalMap.jsx`:

```jsx
export function SignalMap({ nodes }) {
  return (
    <section className="panel signal-panel" aria-labelledby="signal-heading">
      <div className="panel-heading">
        <p className="label">Evidence network</p>
        <h2 id="signal-heading">Strategic Signal Map</h2>
      </div>
      <div className="signal-map">
        <div className="signal-core">Selected risk</div>
        {nodes.map((node, index) => (
          <div
            key={node.id}
            className={`signal-node node-${index} tone-${node.tone} ${node.active ? 'is-active' : ''}`}
          >
            {node.label}
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 9: Create briefing panel component**

Create `src/components/BriefingPanel.jsx`:

```jsx
import { FileText, ListChecks, MessageSquareText, Radar } from 'lucide-react';

export function BriefingPanel({ risk, briefing, isFresh }) {
  return (
    <aside className={`briefing-panel ${isFresh ? 'is-fresh' : ''}`} aria-label="Briefing detail">
      <div className="panel-heading">
        <p className="label">Intelligence briefing</p>
        <h2>{risk.status}</h2>
      </div>

      <section className="briefing-block bbluf">
        <div className="block-icon">
          <FileText size={16} aria-hidden="true" />
        </div>
        <div>
          <h3>BBLUF</h3>
          <p>{briefing.bbluf}</p>
        </div>
      </section>

      <section className="briefing-block">
        <div className="block-icon">
          <Radar size={16} aria-hidden="true" />
        </div>
        <div>
          <h3>Second-order implications</h3>
          <ul>
            {risk.implications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="briefing-block">
        <div className="block-icon">
          <ListChecks size={16} aria-hidden="true" />
        </div>
        <div>
          <h3>Recommended decisions</h3>
          <ul>
            {briefing.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="briefing-block">
        <div className="block-icon">
          <MessageSquareText size={16} aria-hidden="true" />
        </div>
        <div>
          <h3>Talking points</h3>
          <ul>
            {risk.talkingPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="evidence-trail">
        <h3>Evidence trail</h3>
        {risk.evidence.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>
    </aside>
  );
}
```

- [ ] **Step 10: Replace app shell with composed dashboard**

Modify `src/App.jsx`:

```jsx
import { useMemo, useState } from 'react';
import { BriefingPanel } from './components/BriefingPanel.jsx';
import { CommandBar } from './components/CommandBar.jsx';
import { EscalationQueue } from './components/EscalationQueue.jsx';
import { NavRail } from './components/NavRail.jsx';
import { RiskCard } from './components/RiskCard.jsx';
import { SignalMap } from './components/SignalMap.jsx';
import {
  audiences,
  escalationItems,
  getAudienceBriefing,
  getConnectedSignals,
  getRiskById,
  riskSignals,
} from './data/intelligence.js';

export default function App() {
  const [selectedRiskId, setSelectedRiskId] = useState(riskSignals[0].id);
  const [selectedAudience, setSelectedAudience] = useState('ceo');
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastRefreshLabel, setLastRefreshLabel] = useState('Updated 08:40 ET');
  const [freshBriefing, setFreshBriefing] = useState(false);
  const [queueItems, setQueueItems] = useState(escalationItems);

  const selectedRisk = getRiskById(selectedRiskId);
  const briefing = getAudienceBriefing(selectedRiskId, selectedAudience);
  const signalNodes = getConnectedSignals(selectedRiskId);

  const exposureTotal = useMemo(
    () =>
      riskSignals.reduce(
        (total, risk) => total + Number(risk.financialExposure.replace(/[$M]/g, '')),
        0,
      ),
    [],
  );

  function handleGenerateBriefing() {
    setIsGenerating(true);
    setFreshBriefing(false);
    window.setTimeout(() => {
      setIsGenerating(false);
      setFreshBriefing(true);
      setLastRefreshLabel('Refreshed just now');
    }, 450);
  }

  function updateEscalation(id, status) {
    setQueueItems((items) =>
      items.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  }

  return (
    <div className="app-shell">
      <CommandBar
        audiences={audiences}
        selectedAudience={selectedAudience}
        onAudienceChange={setSelectedAudience}
        onGenerate={handleGenerateBriefing}
        isGenerating={isGenerating}
        lastRefreshLabel={lastRefreshLabel}
      />
      <div className="workspace">
        <NavRail />
        <main className="command-grid">
          <section className="cockpit" aria-labelledby="matters-heading">
            <div className="cockpit-header">
              <div>
                <p className="label">Priority intelligence</p>
                <h2 id="matters-heading">What Matters Now</h2>
              </div>
              <div className="exposure-total">
                <span>Financial exposure</span>
                <strong>${exposureTotal.toFixed(1)}M</strong>
              </div>
            </div>

            <div className="risk-stack">
              {riskSignals.map((risk) => (
                <RiskCard
                  key={risk.id}
                  risk={risk}
                  isSelected={risk.id === selectedRiskId}
                  onSelect={setSelectedRiskId}
                />
              ))}
            </div>

            <div className="lower-grid">
              <EscalationQueue
                items={queueItems}
                selectedRiskId={selectedRiskId}
                onAcknowledge={(id) =>
                  updateEscalation(id, 'Acknowledged by executive office')
                }
                onAssign={(id) => updateEscalation(id, 'Assigned for mitigation')}
              />
              <SignalMap nodes={signalNodes} />
            </div>
          </section>

          <BriefingPanel risk={selectedRisk} briefing={briefing} isFresh={freshBriefing} />
        </main>
      </div>
    </div>
  );
}
```

- [ ] **Step 11: Run interaction tests**

Run: `npm test -- src/App.test.jsx src/data/intelligence.test.js`

Expected: PASS.

- [ ] **Step 12: Commit component structure**

```bash
git add src/App.jsx src/App.test.jsx src/components src/data
git commit -m "feat: build command center interactions"
```

---

### Task 4: Implement Command-Center Visual System

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Replace stylesheet with final visual system**

Modify `src/styles.css`:

```css
:root {
  --bg: #070b12;
  --bg-elevated: #0d1420;
  --panel: #111a28;
  --panel-strong: #162133;
  --panel-hot: #28141a;
  --border: rgba(157, 173, 203, 0.16);
  --border-strong: rgba(168, 193, 232, 0.32);
  --text: #f5f7fb;
  --muted: #8f9bb1;
  --muted-strong: #bdc7d8;
  --red: #ff596d;
  --amber: #f2b84b;
  --cyan: #45d6ff;
  --green: #54d990;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.42);
  color: var(--text);
  background: var(--bg);
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background:
    radial-gradient(circle at 20% 0%, rgba(69, 214, 255, 0.08), transparent 34rem),
    linear-gradient(135deg, #070b12 0%, #09111c 44%, #070b12 100%);
}

button,
select {
  font: inherit;
}

button {
  color: inherit;
}

.app-shell {
  min-height: 100vh;
  padding: 18px;
}

.command-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  min-height: 78px;
  padding: 14px 18px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(13, 20, 32, 0.92);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.brand-lockup,
.command-actions,
.risk-card-header,
.escalation-actions,
.panel-heading,
.block-icon,
.cockpit-header,
.workspace,
.metric-strip,
.escalation-meta {
  display: flex;
  align-items: center;
}

.brand-lockup {
  gap: 13px;
}

.brand-mark,
.block-icon {
  display: grid;
  place-items: center;
  border: 1px solid rgba(69, 214, 255, 0.35);
  background: rgba(69, 214, 255, 0.12);
  color: var(--cyan);
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 8px;
}

.label {
  margin: 0 0 5px;
  color: var(--cyan);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  line-height: 1.05;
}

h2 {
  margin-bottom: 0;
  font-size: 1.02rem;
  line-height: 1.15;
}

h3 {
  font-size: 0.96rem;
  line-height: 1.25;
}

.command-actions {
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 12px;
}

.refresh-state {
  color: var(--muted-strong);
  font-size: 0.82rem;
}

.audience-control {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.78rem;
}

.audience-control select {
  height: 36px;
  border: 1px solid var(--border-strong);
  border-radius: 6px;
  background: #0a111c;
  color: var(--text);
  padding: 0 28px 0 10px;
}

.primary-action,
.escalation-actions button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
}

.primary-action {
  min-height: 38px;
  padding: 0 14px;
  background: var(--red);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 800;
}

.primary-action:disabled {
  cursor: wait;
  opacity: 0.74;
}

.workspace {
  align-items: stretch;
  gap: 16px;
  margin-top: 16px;
}

.nav-rail {
  width: 96px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(13, 20, 32, 0.78);
}

.nav-item {
  min-height: 66px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-size: 0.7rem;
}

.nav-item.is-active {
  border-color: rgba(69, 214, 255, 0.35);
  background: rgba(69, 214, 255, 0.12);
  color: var(--text);
}

.nav-item.is-muted {
  opacity: 0.45;
}

.command-grid {
  flex: 1;
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(360px, 0.72fr);
  gap: 16px;
}

.cockpit,
.briefing-panel,
.panel {
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(13, 20, 32, 0.86);
}

.cockpit,
.briefing-panel {
  padding: 16px;
}

.cockpit-header {
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.exposure-total {
  text-align: right;
}

.exposure-total span,
.metric-strip dt,
.risk-card-score span,
.escalation-item span,
.evidence-trail h3 {
  color: var(--muted);
  font-size: 0.72rem;
}

.exposure-total strong {
  display: block;
  margin-top: 3px;
  color: var(--amber);
  font-size: 1.45rem;
}

.risk-stack {
  display: grid;
  gap: 10px;
}

.risk-card {
  width: 100%;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) minmax(104px, 0.2fr);
  gap: 12px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--panel);
  color: var(--text);
  text-align: left;
  cursor: pointer;
  transition:
    border-color 160ms ease,
    background 160ms ease,
    transform 160ms ease;
}

.risk-card:hover,
.risk-card.is-selected {
  border-color: rgba(255, 89, 109, 0.58);
  background: linear-gradient(135deg, rgba(255, 89, 109, 0.12), rgba(17, 26, 40, 0.98));
}

.risk-card:hover {
  transform: translateY(-1px);
}

.rank {
  color: var(--red);
  font-size: 1.05rem;
  font-weight: 900;
}

.risk-card-main {
  min-width: 0;
}

.risk-card-header {
  gap: 9px;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 0.72rem;
}

.severity {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-weight: 850;
}

.severity-critical {
  color: var(--red);
}

.severity-high,
.severity-elevated {
  color: var(--amber);
}

.risk-card h3 {
  margin-bottom: 6px;
}

.risk-card p {
  margin-bottom: 12px;
  color: var(--muted-strong);
  font-size: 0.82rem;
  line-height: 1.45;
}

.metric-strip {
  gap: 8px;
  flex-wrap: wrap;
}

.metric-strip div {
  min-width: 110px;
  padding: 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: rgba(7, 11, 18, 0.48);
}

.metric-strip dd {
  margin: 2px 0;
  font-weight: 850;
}

.metric-strip span {
  color: var(--amber);
  font-size: 0.72rem;
}

.risk-card-score {
  text-align: right;
}

.risk-card-score strong {
  display: block;
  color: var(--red);
  font-size: 2rem;
  line-height: 0.95;
}

.risk-card-score em {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  margin-top: 14px;
  color: var(--amber);
  font-size: 0.72rem;
  font-style: normal;
}

.lower-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
  gap: 12px;
  margin-top: 12px;
}

.panel {
  padding: 14px;
}

.panel-heading {
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.escalation-list {
  display: grid;
  gap: 9px;
}

.escalation-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 64px;
  gap: 8px 12px;
  padding: 11px;
  border: 1px solid var(--border);
  border-radius: 7px;
  background: rgba(7, 11, 18, 0.45);
}

.escalation-item.is-linked {
  border-color: rgba(242, 184, 75, 0.5);
  background: rgba(242, 184, 75, 0.08);
}

.escalation-item strong {
  display: block;
  margin-bottom: 4px;
  font-size: 0.82rem;
}

.escalation-item p {
  margin-bottom: 6px;
  color: var(--muted-strong);
  font-size: 0.76rem;
  line-height: 1.35;
}

.escalation-meta {
  align-items: flex-end;
  flex-direction: column;
  gap: 4px;
}

.escalation-meta b {
  color: var(--red);
}

.escalation-actions {
  grid-column: 1 / -1;
  gap: 7px;
}

.escalation-actions button {
  min-height: 30px;
  padding: 0 9px;
  background: rgba(157, 173, 203, 0.12);
  border: 1px solid var(--border);
  font-size: 0.72rem;
}

.signal-map {
  position: relative;
  min-height: 274px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background:
    linear-gradient(rgba(157, 173, 203, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(157, 173, 203, 0.05) 1px, transparent 1px),
    rgba(7, 11, 18, 0.52);
  background-size: 28px 28px;
  overflow: hidden;
}

.signal-core,
.signal-node {
  position: absolute;
  display: grid;
  place-items: center;
  border-radius: 999px;
  text-align: center;
}

.signal-core {
  inset: 50% auto auto 50%;
  width: 104px;
  height: 104px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 89, 109, 0.45);
  background: rgba(255, 89, 109, 0.14);
  color: var(--text);
  font-size: 0.78rem;
  font-weight: 850;
}

.signal-node {
  width: 86px;
  height: 34px;
  border: 1px solid var(--border);
  background: rgba(13, 20, 32, 0.96);
  color: var(--muted);
  font-size: 0.72rem;
}

.signal-node.is-active {
  color: var(--text);
  box-shadow: 0 0 28px rgba(69, 214, 255, 0.16);
}

.tone-red.is-active {
  border-color: rgba(255, 89, 109, 0.72);
}

.tone-amber.is-active {
  border-color: rgba(242, 184, 75, 0.72);
}

.tone-cyan.is-active {
  border-color: rgba(69, 214, 255, 0.72);
}

.node-0 {
  top: 22px;
  left: 28px;
}

.node-1 {
  top: 22px;
  right: 26px;
}

.node-2 {
  top: 115px;
  left: 12px;
}

.node-3 {
  top: 116px;
  right: 10px;
}

.node-4 {
  bottom: 22px;
  left: 30px;
}

.node-5 {
  bottom: 22px;
  right: 26px;
}

.node-6 {
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
}

.briefing-panel {
  position: sticky;
  top: 18px;
  align-self: start;
  max-height: calc(100vh - 130px);
  overflow: auto;
}

.briefing-panel.is-fresh {
  border-color: rgba(84, 217, 144, 0.6);
}

.briefing-block {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 10px;
  margin-top: 12px;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(7, 11, 18, 0.38);
}

.briefing-block.bbluf {
  border-color: rgba(255, 89, 109, 0.4);
  background: rgba(255, 89, 109, 0.09);
}

.block-icon {
  width: 34px;
  height: 34px;
  border-radius: 7px;
}

.briefing-block h3,
.evidence-trail h3 {
  margin-bottom: 7px;
}

.briefing-block p,
.briefing-block li,
.evidence-trail p {
  color: var(--muted-strong);
  font-size: 0.8rem;
  line-height: 1.45;
}

.briefing-block ul {
  margin: 0;
  padding-left: 17px;
}

.briefing-block li + li {
  margin-top: 6px;
}

.evidence-trail {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.evidence-trail p {
  margin-bottom: 8px;
}

@media (max-width: 1180px) {
  .command-grid,
  .lower-grid {
    grid-template-columns: 1fr;
  }

  .briefing-panel {
    position: static;
    max-height: none;
  }
}

@media (max-width: 760px) {
  .app-shell {
    padding: 10px;
  }

  .command-bar,
  .workspace,
  .command-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .nav-rail {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
  }

  .nav-item {
    min-width: 82px;
  }

  .risk-card {
    grid-template-columns: 1fr;
  }

  .risk-card-score {
    text-align: left;
  }

  .cockpit-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .exposure-total {
    text-align: left;
  }

  .audience-control {
    align-items: flex-start;
    flex-direction: column;
  }

  .audience-control select,
  .primary-action {
    width: 100%;
  }
}
```

- [ ] **Step 2: Run tests and build**

Run: `npm test && npm run build`

Expected: all tests pass and Vite build succeeds.

- [ ] **Step 3: Commit visual system**

```bash
git add src/styles.css
git commit -m "feat: style executive command center"
```

---

### Task 5: Browser Verification And Polish

**Files:**
- Modify as needed: `src/App.jsx`, `src/components/*.jsx`, `src/styles.css`

- [ ] **Step 1: Start local dev server**

Run: `npm run dev -- --port 5173`

Expected: Vite starts at `http://127.0.0.1:5173/`.

- [ ] **Step 2: Open in in-app browser**

Open `http://127.0.0.1:5173/` in the Browser plugin / in-app browser.

Expected: first screen is the Executive Intelligence Command Center, not a landing page.

- [ ] **Step 3: Verify desktop workflow**

In the browser:

- Select each of the three risks.
- Confirm the briefing detail panel updates.
- Confirm the Strategic Signal Map active nodes change.
- Change audience to CFO, COO, and Board.
- Confirm BBLUF copy changes to the selected audience.
- Click Generate Briefing.
- Confirm button changes to Generating and last refresh changes to Refreshed just now.
- Acknowledge the renewal review escalation.
- Confirm status changes to Acknowledged by executive office.

- [ ] **Step 4: Verify responsive layout**

Use browser viewport checks or Playwright if the in-app browser cannot resize reliably:

- Desktop around `1440x900`.
- Mobile around `390x844`.

Expected:

- No horizontal overflow.
- No clipped button text.
- No unreadable panel text.
- Mobile stacks command sections.
- Navigation rail becomes horizontal on mobile.

- [ ] **Step 5: Run final checks**

Run: `npm test && npm run build`

Expected: all tests pass and Vite build succeeds.

- [ ] **Step 6: Commit verification polish**

If verification required code changes:

```bash
git add src
git commit -m "fix: polish command center verification issues"
```

If no code changes were required, skip this commit.

---

## Self-Review

Spec coverage:

- First screen command center: Task 3 and Task 4.
- Ranked top risks: Task 2 and Task 3.
- Selected-risk briefing detail: Task 3.
- Signal map module: Task 3 and Task 4.
- Audience-specific briefing language: Task 2 and Task 3.
- Generate Briefing simulated update: Task 3.
- Escalation acknowledge/assign state: Task 3.
- Dark command-center visual direction: Task 4.
- Local-only prototype with no external services: Task 1 through Task 3.
- Browser and responsive verification: Task 5.

Placeholder scan: no TBD, TODO, "implement later", or undefined future steps remain.

Type consistency: risk ids, audience ids, component prop names, and helper function names are consistent across data, app composition, and tests.
