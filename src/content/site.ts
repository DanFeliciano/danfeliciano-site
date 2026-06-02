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

export const services = [
  {
    slug: "aesop-strategy-governance",
    title: "AESOP Strategy & Governance",
    href: "/services/aesop-strategy-governance",
    summary:
      "Translate strategy into operating cadence, KPIs, governance, decision rights, and measurable execution.",
    description:
      "A practical strategy-to-execution system for leaders who need alignment, accountability, and measurable progress.",
    metadata: {
      title: "AESOP Strategy & Governance | Dan Feliciano",
      description:
        "Turn strategy into operating cadence, governance, KPIs, accountability, and measurable execution with Dan Feliciano's AESOP framework.",
    },
    steps: [
      {
        title: "Assess",
        description:
          "Understand the current operating reality, constraints, risks, data, and performance gaps.",
      },
      {
        title: "Establish",
        description:
          "Define priorities, decision rights, success measures, governance forums, and execution principles.",
      },
      {
        title: "Synchronize",
        description:
          "Align leaders, teams, projects, data, and operating cadences around shared priorities.",
      },
      {
        title: "Operationalize",
        description:
          "Convert strategy into workflows, KPIs, dashboards, routines, charters, and accountable plans.",
      },
      {
        title: "Persist",
        description:
          "Build review cycles, learning loops, sustainment mechanisms, and corrective-action discipline.",
      },
    ],
    useCases: [
      "Strategic planning",
      "Executive operating cadence",
      "Transformation governance",
      "KPI architecture",
      "Portfolio prioritization",
      "Decision-rights clarification",
      "Cross-functional alignment",
      "AI governance and adoption governance",
    ],
    deliverables: [
      "Strategy-to-execution map",
      "Governance model",
      "KPI architecture",
      "Operating cadence",
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
      title:
        "Phoenix Protocol | 30/60/90-Day Operational Recovery | Dan Feliciano",
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
] as const satisfies readonly Offer[];

export const products = [
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
] as const satisfies readonly Offer[];

export const courses = [
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
  "Public-sector Lean Six Sigma deployment",
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
