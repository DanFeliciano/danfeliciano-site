import type { SiteRoute } from "@/lib/routes";

export type LinkItem = {
  label: string;
  href: SiteRoute;
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
  useCases?: readonly string[];
  deliverables?: readonly string[];
  steps?: readonly { title: string; description: string }[];
  cta: string;
};

export type Course = {
  title: string;
  href: SiteRoute;
  duration: string;
  durationIso: string;
  summary: string;
  metadata: {
    title: string;
    description: string;
  };
  objectives: readonly string[];
  audience: readonly string[];
  cta: string;
};

export const site = {
  name: "Dan Feliciano",
  url: "https://danfeliciano.com",
  description:
    "Strategic Forensics for leaders facing AI disruption, policy complexity, operational failure, weak data, budgets, backlogs, and financial risk.",
  email: "hello@danfeliciano.com",
  linkedIn: "https://www.linkedin.com/in/danfeliciano/",
};

export const navItems: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Strategic Forensics", href: "/strategic-forensics" },
  { label: "AI + Operations", href: "/ai-process-redesign" },
  { label: "Policy Impact", href: "/policy-impact-analysis" },
  { label: "Backlog Kill", href: "/backlog-kill" },
  { label: "Briefings", href: "/speaking" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const homepage = {
  title: "Find the hidden risk. Clarify the decision. Fix the system.",
  subhead:
    "Strategic Forensics for leaders facing AI disruption, policy complexity, operational failure, weak data, backlogs, and financial risk.",
  body:
    "Dan Feliciano helps business owners, public-sector leaders, candidates, associations, and organizations understand what complex decisions actually mean: financially, operationally, and strategically.",
  proof: [
    "Strategic, financial, operational, and policy analysis in one view",
    "Plain-English briefings for leaders who need consequences, not noise",
    "AI-aware, data-literate, and grounded in how work actually moves",
    "Built for decisions involving budgets, backlogs, service risk, and public impact",
  ],
};

export const services = [
  {
    slug: "aesop-strategy-governance",
    title: "Strategic Forensics",
    href: "/services/aesop-strategy-governance",
    summary:
      "Decision-grade analysis for leaders who need to understand hidden risks, tradeoffs, and consequences inside complex choices.",
    description:
      "A focused forensic read of the assumptions, data, money, operations, and execution risk sitting underneath a decision.",
    metadata: {
      title: "Strategic Forensics | Dan Feliciano",
      description:
        "Strategic Forensics helps leaders find hidden assumptions, weak data, fiscal risk, operational failure points, and execution problems before decisions get expensive.",
    },
    steps: [
      {
        title: "Surface",
        description:
          "Find the hidden assumptions, weak data, incentives, constraints, and risk that are shaping the decision.",
      },
      {
        title: "Scrutinize",
        description:
          "Pressure-test the financial, operational, policy, AI, and stakeholder consequences in plain English.",
      },
      {
        title: "Brief",
        description:
          "Turn the complexity into decision-grade options, tradeoffs, risks, and next actions.",
      },
      {
        title: "Fix",
        description:
          "Identify the system changes needed to reduce risk, improve flow, and make the decision executable.",
      },
      {
        title: "Govern",
        description:
          "Define ownership, cadence, controls, and measures so risk does not drift back underground.",
      },
    ],
    useCases: [
      "Budget and financial risk",
      "AI disruption and tool decisions",
      "Policy and regulatory consequences",
      "Operational failure and service breakdown",
      "Weak data and misleading dashboards",
      "Board, campaign, or public decision briefings",
      "Backlogs, compliance burden, and execution risk",
      "Stakeholder, customer, and taxpayer impact",
    ],
    deliverables: [
      "Strategic Forensics briefing",
      "Hidden-risk map",
      "Financial and operational consequence scan",
      "Assumption and data-quality review",
      "Decision memo",
      "Risk and tradeoff matrix",
      "Next-action plan",
      "Executive talking points",
    ],
    cta: "Book a Strategic Forensics Briefing",
  },
  {
    slug: "phoenix-protocol",
    title: "Service Reimagined / Backlog Kill",
    href: "/services/phoenix-protocol",
    summary:
      "Diagnose backlogs, bottlenecks, staffing pressure, service delays, and broken workflows before throwing more money at the wrong problem.",
    description:
      "A forensic look at service failure, flow, prioritization, accountability, staffing pressure, and the decisions needed to restore control.",
    metadata: {
      title:
        "Service Reimagined and Backlog Kill | Dan Feliciano",
      description:
        "Diagnose backlogs, bottlenecks, service delays, staffing pressure, and broken workflows before adding money or headcount to the wrong problem.",
    },
    useCases: [
      "Aging backlog is increasing",
      "Service delays are becoming financial or public risk",
      "Staffing pressure is hiding process failure",
      "Work ownership and priorities are unclear",
      "Reporting exists, but leaders still cannot act",
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
    cta: "Diagnose the backlog",
  },
  {
    slug: "ai-automation-analytics",
    title: "AI Process Redesign",
    href: "/services/ai-automation-analytics",
    summary:
      "AI is not the strategy. Redesign the work, data, risk, and automation path before buying tools or launching pilots.",
    description:
      "A practical AI and operations review that maps workflows, data quality, failure points, risk, and automation opportunities before the tool decision.",
    metadata: {
      title: "AI Process Redesign | Dan Feliciano",
      description:
        "Map workflows, data, risks, and automation opportunities before buying AI tools, launching pilots, or speeding up broken work.",
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
    cta: "Map AI and operations risk",
  },
] as const satisfies readonly Offer[];

export const products = [
  {
    slug: "backlog-kill-kit",
    title: "Backlog Kill Diagnostic",
    href: "/products/backlog-kill-kit",
    summary:
      "A fixed-scope diagnostic for backlog drivers, bottlenecks, staffing pressure, service delays, and recovery decisions.",
    metadata: {
      title: "Backlog Kill Diagnostic | Dan Feliciano",
      description:
        "Diagnose backlog drivers, bottlenecks, staffing pressure, service delays, ownership gaps, and recovery decisions with Dan Feliciano.",
    },
    useCases: [
      "Service operations",
      "Government agencies",
      "Healthcare administration",
      "Finance operations",
      "Customer support",
      "Case management",
    ],
    deliverables: [
      "Backlog segmentation",
      "Aging profile",
      "Demand and capacity review",
      "Root-cause themes",
      "Quick-win recommendations",
      "Recovery roadmap",
    ],
    cta: "Request a Backlog Kill briefing",
  },
  {
    slug: "policy-forensics",
    title: "Policy Impact Analysis",
    href: "/products/policy-forensics",
    summary:
      "Translate bills, budgets, and regulations into operational, financial, compliance, and taxpayer consequences.",
    metadata: {
      title: "Policy Impact Analysis | Dan Feliciano",
      description:
        "Policy Impact Analysis helps leaders understand proposed laws, budgets, regulations, and policy shifts before they create operational, financial, compliance, or taxpayer surprises.",
    },
    useCases: [
      "Proposed legislation",
      "Regulatory change",
      "Budget policy",
      "Workforce policy",
      "Healthcare policy",
      "Education policy",
      "Institutional risk scanning",
    ],
    deliverables: [
      "Policy brief",
      "Risk map",
      "Stakeholder map",
      "Operational impact analysis",
      "Decision memo",
      "Executive briefing deck",
    ],
    cta: "Request a policy impact brief",
  },
  {
    slug: "academy",
    title: "Dan Feliciano Academy",
    href: "/academy",
    summary:
      "Training in process improvement, AI-aware operations, and decision discipline for teams that need practical capability.",
    metadata: {
      title: "Dan Feliciano Academy | Process Improvement and AI Operations Training",
      description:
        "Training in process improvement, AI-aware operations, and decision discipline through Dan Feliciano Academy.",
    },
    cta: "Explore Academy",
  },
] as const satisfies readonly Offer[];

export const courses = [
  {
    title: "Lean Six Sigma + AI Yellow Belt",
    href: "/academy/lean-six-sigma-ai-yellow-belt",
    duration: "8 hours",
    durationIso: "PT8H",
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
    audience: [
      "Team members",
      "New managers",
      "Analysts",
      "Public-sector professionals",
      "Healthcare and service operators",
      "Anyone new to Lean Six Sigma",
    ],
    cta: "Ask about Yellow Belt training",
  },
  {
    title: "Lean Six Sigma + AI Green Belt",
    href: "/academy/lean-six-sigma-ai-green-belt",
    duration: "40 hours",
    durationIso: "PT40H",
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
    audience: [
      "Managers",
      "Analysts",
      "Project leaders",
      "Operations professionals",
      "Healthcare administrators",
      "Government process-improvement teams",
      "Service and support leaders",
    ],
    cta: "Ask about Green Belt training",
  },
  {
    title: "Lean Six Sigma + AI Black Belt",
    href: "/academy/lean-six-sigma-ai-black-belt",
    duration: "80 hours",
    durationIso: "PT80H",
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
    audience: [
      "Operational excellence leaders",
      "Transformation leaders",
      "Senior project managers",
      "Quality leaders",
      "Black Belt candidates",
      "Internal consultants",
      "Continuous improvement teams",
    ],
    cta: "Ask about Black Belt training",
  },
] as const satisfies readonly Course[];

export const caseStudies = [
  "Healthcare billing transformation",
  "Public-sector process recovery",
  "Software rollout simplification",
  "Manufacturing throughput and cost recovery",
  "Supply-chain and logistics redesign",
  "Executive reporting system",
].map((title) => ({
  title,
  challenge:
    "Complex operating work needed clearer flow, ownership, visibility, and performance discipline.",
  intervention:
    "Mapped the work, identified constraints, redesigned routines, and strengthened performance management.",
  outcomes:
    "Improved visibility, execution discipline, and decision support using anonymized proof language.",
}));

export const speakingTopics = [
  "Find the Hidden Risk",
  "AI Is Not the Strategy",
  "Policy Impact Before the Vote",
  "Backlogs Are Financial Risk",
  "Plain-English Briefings for Complex Decisions",
].map((title) => ({
  title,
  description:
    "A blunt, practical session on hidden assumptions, weak data, financial exposure, operational failure, AI risk, and what leaders should do next.",
}));

export const insightCards = [
  {
    title: "AI Is Not the Strategy",
    excerpt:
      "Buying tools before redesigning the work usually makes the risk faster, louder, and harder to govern.",
    status: "AI + Operations",
  },
  {
    title: "Why Backlogs Are Financial Risk",
    excerpt:
      "Backlogs are often blamed on staffing when the real issue is visibility, flow, prioritization, and accountability.",
    status: "Backlog Kill",
  },
  {
    title: "Budget Gimmicks Hide Operational Consequences",
    excerpt:
      "A balanced-looking budget can still move liabilities, compliance burden, and service failure offstage.",
    status: "Financial Risk",
  },
  {
    title: "Policy Impact Before the Headline",
    excerpt:
      "Bills and regulations need a plain-English read on costs, compliance, operational impact, and who carries the burden.",
    status: "Policy Impact",
  },
  {
    title: "Dashboards Are Not Decisions",
    excerpt:
      "Weak or misleading data can make leaders feel informed while the real decision risk stays hidden.",
    status: "Weak Data",
  },
] as const;
