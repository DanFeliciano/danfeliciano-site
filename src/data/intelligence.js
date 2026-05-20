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
