import type { SiteRoute } from "@/lib/routes";

export type LinkItem = {
  label: string;
  href: SiteRoute;
};

export type SocialLink = {
  label: "LinkedIn" | "X" | "Facebook" | "Bluesky";
  href: string;
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/danfeliciano/" },
  { label: "X", href: "https://x.com/DanFeliciano" },
  { label: "Facebook", href: "https://www.facebook.com/DanFelicianoLLC" },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/danfeliciano.bsky.social",
  },
] as const satisfies readonly SocialLink[];

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
    "Dan Feliciano helps business owners and operators find bottlenecks, recover lost time, improve follow-up, reduce chaos, and use AI or automation where it actually makes the business easier to run.",
  email: "dan@danfeliciano.com",
  linkedIn: socialLinks[0].href,
  socialLinks,
};

export const navItems: LinkItem[] = [
  { label: "What I Fix", href: "/what-i-fix" },
  { label: "AI & Automation", href: "/ai-time-saver-sprint" },
  { label: "Training", href: "/academy" },
  { label: "Results", href: "/results" },
  { label: "Speaking", href: "/speaking" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const homepage = {
  title: "Fix what is slowing your business down.",
  subhead:
    "I help business owners and operators find bottlenecks, recover lost time, improve follow-up, and use AI or automation where it actually makes the business easier to run.",
  body:
    "Start with the work that is stuck, slow, manual, missed, or too dependent on you. Then decide what to fix first, what to stop doing, and where AI or automation can actually help.",
  proof: [
    "Find where work gets stuck",
    "Recover lost time",
    "Improve follow-up",
    "Automate the right work",
    "Build a business that runs with less chaos",
  ],
};

export const services = [
  {
    slug: "aesop-strategy-governance",
    title: "Owner Operating System",
    href: "/owner-operating-system",
    summary:
      "Build clearer priorities, better follow-up, simple metrics, decision rules, and a weekly rhythm so the business does not depend on constant owner intervention.",
    description:
      "A practical operating rhythm for owners who are tired of being the bottleneck, reminder system, traffic cop, and final decision point.",
    metadata: {
      title: "Owner Operating System | Dan Feliciano",
      description:
        "Build clearer priorities, better follow-up, simple metrics, decision rules, and a weekly rhythm so the business does not depend on constant owner intervention.",
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
    cta: "Build an Owner Operating System",
  },
  {
    slug: "phoenix-protocol",
    title: "90-Day Operations Reset",
    href: "/operations-reset",
    summary:
      "Stabilize chaotic operations, reduce delays, clarify ownership, improve visibility, and install a rhythm that keeps the business moving.",
    description:
      "A 90-day practical reset for businesses stuck in firefighting mode, service delays, missed follow-up, unclear ownership, or operational chaos.",
    metadata: {
      title: "90-Day Operations Reset | Dan Feliciano",
      description:
        "A practical 90-day engagement for businesses stuck in firefighting mode, service delays, missed follow-up, unclear ownership, or operational chaos.",
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
    cta: "Start an Operations Reset",
  },
  {
    slug: "ai-automation-analytics",
    title: "AI Time Saver Sprint",
    href: "/ai-time-saver-sprint",
    summary:
      "Stop guessing where AI belongs. Find the repetitive work, missed follow-up, manual reporting, and communication gaps where AI or automation can save real time.",
    description:
      "A practical sprint to find where AI or automation can save time, reduce manual work, improve follow-up, or simplify reporting.",
    metadata: {
      title: "AI Time Saver Sprint | Dan Feliciano",
      description:
        "Stop guessing where AI belongs. Find repetitive work, missed follow-up, manual reporting, and communication gaps where AI or automation can save real time.",
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
    cta: "Find Time-Saving Automation",
  },
] as const satisfies readonly Offer[];

export const products = [
  {
    slug: "backlog-kill-kit",
    title: "Backlog Kill Kit",
    href: "/backlog-kill-kit",
    summary:
      "A fixed-scope diagnostic for backlog drivers, bottlenecks, staffing pressure, service delays, and recovery decisions.",
    metadata: {
      title: "Backlog Kill Kit | Dan Feliciano",
      description:
        "A practical diagnostic for teams whose work is piling up, taking too long, aging, or falling through the cracks.",
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
    href: "/policy-forensics",
    summary:
      "Decision intelligence for institutions, associations, and policy-sensitive organizations facing policy, regulatory, legislative, or public-sector change.",
    metadata: {
      title: "Policy Forensics | Dan Feliciano",
      description:
        "Decision intelligence for institutions, associations, and policy-sensitive organizations facing policy, regulatory, legislative, or public-sector change.",
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
    cta: "Request a Policy Forensics Brief",
  },
  {
    slug: "academy",
    title: "Dan Feliciano Academy",
    href: "/academy",
    summary:
      "Lean Six Sigma + AI training for teams that need to solve problems, reduce waste, improve service, and use modern tools responsibly.",
    metadata: {
      title: "Train Your Team to Fix Work | Dan Feliciano Academy",
      description:
        "Lean Six Sigma + AI training for teams that need to solve problems, reduce waste, improve service, and use modern tools responsibly.",
    },
    cta: "Ask About Team Training",
  },
] as const satisfies readonly Offer[];

export const courses = [
  {
    title: "Lean Six Sigma + AI Yellow Belt",
    href: "/academy/lean-six-sigma-ai-yellow-belt",
    duration: "8 hours",
    durationIso: "PT8H",
    summary:
      "Foundations, DMAIC, waste, process thinking, basic problem-solving, and AI-assisted improvement basics.",
    metadata: {
      title: "Lean Six Sigma + AI Yellow Belt | Dan Feliciano Academy",
      description:
        "An 8-hour practical foundation in Lean Six Sigma, DMAIC, waste, process thinking, and AI-assisted improvement basics.",
    },
    objectives: [
      "Understand Lean Six Sigma basics",
      "Learn the DMAIC improvement cycle",
      "Identify waste, delays, and rework",
      "Understand basic process thinking",
      "Support improvement projects",
      "Use AI carefully for brainstorming, documentation, and communication support",
      "Prepare for Yellow Belt certification",
    ],
    audience: [
      "Team members",
      "New managers",
      "Analysts",
      "Service professionals",
      "Healthcare and public-sector staff",
      "Anyone new to Lean Six Sigma",
    ],
    cta: "Ask About Yellow Belt Training",
  },
  {
    title: "Lean Six Sigma + AI Green Belt",
    href: "/academy/lean-six-sigma-ai-green-belt",
    duration: "40 hours",
    durationIso: "PT40H",
    summary:
      "Project leadership, data analysis, root cause, process improvement, stakeholder engagement, control plans, and AI-supported DMAIC execution.",
    metadata: {
      title: "Lean Six Sigma + AI Green Belt | Dan Feliciano Academy",
      description:
        "A 40-hour practical program for leading improvement projects, analyzing data, finding root causes, and using AI to support DMAIC execution.",
    },
    objectives: [
      "Lead Lean Six Sigma improvement projects",
      "Apply DMAIC to real operational problems",
      "Map workflows and identify friction",
      "Use data to understand variation, defects, cycle time, and performance gaps",
      "Identify root causes",
      "Engage stakeholders and cross-functional teams",
      "Build control plans and sustainment routines",
      "Use AI to support project documentation, analysis, brainstorming, and communication",
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
    cta: "Ask About Green Belt Training",
  },
  {
    title: "Lean Six Sigma + AI Black Belt",
    href: "/academy/lean-six-sigma-ai-black-belt",
    duration: "80 hours",
    durationIso: "PT80H",
    summary:
      "Advanced improvement leadership, complex project execution, mentoring, change leadership, statistical thinking, and AI-enabled transformation.",
    metadata: {
      title: "Lean Six Sigma + AI Black Belt | Dan Feliciano Academy",
      description:
        "An 80-hour advanced program for leading complex improvement work, mentoring teams, using advanced problem-solving methods, and connecting Lean Six Sigma with AI.",
    },
    objectives: [
      "Lead complex Lean Six Sigma projects",
      "Apply advanced DMAIC methods",
      "Use statistical thinking and hypothesis testing",
      "Manage cross-functional improvement work",
      "Mentor Green Belts and project teams",
      "Build governance and sustainment systems in plain, practical ways",
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
    cta: "Ask About Black Belt Training",
  },
] as const satisfies readonly Course[];

export const caseStudies = [
  {
    title: "Healthcare billing transformation",
    challenge:
      "Billing workflows were slowed by defects, unclear handoffs, aging work, and limited visibility.",
    intervention:
      "The work was mapped, defect patterns were identified, reporting was simplified, and follow-up rhythms were strengthened.",
    outcomes:
      "Improved cash-flow visibility, reduced rework, and stronger performance management.",
  },
  {
    title: "Public-sector improvement deployment",
    challenge:
      "Leaders needed a practical way to identify, prioritize, execute, and sustain improvement work.",
    intervention:
      "Training, governance, benefit tracking, and leadership alignment were connected to real operational priorities.",
    outcomes:
      "Improved execution discipline, clearer ownership, and stronger benefits realization.",
  },
  {
    title: "Software rollout simplification",
    challenge:
      "Implementation work had too many manual steps, long cycle times, and high effort.",
    intervention:
      "Workflows were redesigned, non-value-added steps were removed, tasks were standardized, and visibility improved.",
    outcomes:
      "Reduced implementation burden, increased delivery capacity, and improved adoption support.",
  },
  {
    title: "Manufacturing throughput and cost recovery",
    challenge:
      "Operations needed better throughput, less cost leakage, and stronger use of capacity.",
    intervention:
      "Lean Six Sigma, constraint analysis, process redesign, and performance management were applied to the work.",
    outcomes:
      "Improved capacity, reduced waste, and stronger operating discipline.",
  },
  {
    title: "Supply-chain and logistics redesign",
    challenge:
      "Distribution and logistics complexity created avoidable cost, inventory pressure, and freight burden.",
    intervention:
      "Network structure, inventory, freight, and operating tradeoffs were analyzed and simplified.",
    outcomes:
      "Improved footprint decisions, reduced cost pressure, and stronger working-capital visibility.",
  },
  {
    title: "Executive reporting system",
    challenge:
      "Leaders were spending too much time preparing updates and not enough time making decisions.",
    intervention:
      "KPI reporting, dashboards, and executive review routines were simplified and standardized.",
    outcomes:
      "Reduced reporting friction and improved decision support.",
  },
] as const;

export const speakingTopics = [
  {
    title: "Stop Automating Chaos",
    description:
      "Why AI fails when workflows are broken, and how leaders can find the work AI should actually improve.",
    takeaways: [
      "How to spot bad AI use cases",
      "Where automation can save time",
      "Why workflow clarity comes before tools",
      "How to avoid making broken processes faster",
    ],
  },
  {
    title: "Operational Excellence in the AI Era",
    description:
      "How Lean Six Sigma, analytics, and AI can work together to improve service, reduce waste, and help teams make better decisions.",
    takeaways: [
      "Why operational excellence still matters",
      "How AI can support improvement work",
      "What leaders should measure",
      "How to keep people in the loop",
    ],
  },
  {
    title: "The 90-Day Operations Reset",
    description:
      "A practical approach to stabilizing backlog, service delays, missed follow-up, and operational firefighting.",
    takeaways: [
      "How to find stuck work",
      "How to stabilize the first 30 days",
      "How to improve handoffs and ownership",
      "How to sustain the gains",
    ],
  },
  {
    title: "Strategy That Survives Contact With Reality",
    description:
      "Strategy is not a slide deck. It is knowing what to say yes and no to, then building the rhythm to follow through.",
    takeaways: [
      "How to translate strategy into choices",
      "How to stop treating every problem as equally urgent",
      "How to connect priorities to weekly execution",
      "How to make strategy practical for teams",
    ],
  },
  {
    title: "AI, Analytics, and the Future of Work",
    description:
      "A plain-English executive session on AI use cases, risks, practical adoption, and how work changes when teams use better tools.",
    takeaways: [
      "What AI is good at",
      "What AI should not do",
      "How to think about risk and trust",
      "How to start with useful, practical use cases",
    ],
  },
] as const;

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
