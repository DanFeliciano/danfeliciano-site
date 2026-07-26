import type { SiteRoute } from "@/lib/routes";

export type OfferSection = {
  id?: string;
  eyebrow?: string;
  title: string;
  body?: string;
  items?: readonly string[];
  cards?: readonly {
    title: string;
    body: string;
    href?: SiteRoute;
    cta?: string;
  }[];
};

export type OwnerOffer = {
  slug: string;
  title: string;
  href: SiteRoute;
  metadata: {
    title: string;
    description: string;
  };
  subhead: string;
  intro: readonly string[];
  primaryCta: string;
  sections: readonly OfferSection[];
  method?: {
    title: string;
    body: string;
  };
  finalCta: {
    title: string;
    body?: string;
    cta: string;
    href: SiteRoute;
  };
};

export const ownerOffers = [
  {
    slug: "what-i-fix",
    title: "What I Fix",
    href: "/what-i-fix",
    metadata: {
      title: "What I Fix | Dan Feliciano",
      description:
        "See the system behind stuck work, missed follow-up, overloaded employees, confusing numbers, cash pressure, and owner dependency—then decide what to fix first.",
    },
    subhead:
      "Start with the problem you can see. Then expose the system producing it.",
    intro: [
      "Most business problems do not first appear as strategy problems. They appear as stuck work, missed follow-up, overloaded employees, unclear priorities, customer delays, confusing numbers, cash pressure and too many decisions running through the owner.",
      "These are visible symptoms. Operational Visibility reveals the system underneath them—how the work moves, where decisions and information break down, what is limiting performance, where risk is accumulating and what should be fixed first.",
      "Dan then applies process redesign, financial analysis, AI, automation, analytics, Lean Six Sigma, training or strategy only where the evidence shows they will create practical value.",
    ],
    primaryCta: "Start an Operational Visibility Diagnostic",
    sections: [
      {
        id: "common-problems",
        title: "Which of these sounds familiar?",
        body: "Start with the symptom you can see. Dan will trace it to the work, decision, information, constraint, ownership gap or financial consequence underneath it.",
        cards: [
          {
            title: "Work is piling up",
            body: "Backlogs, aging tasks, missed handoffs and work that keeps getting stuck.",
            href: "/backlog-kill-kit",
            cta: "Diagnose the Backlog",
          },
          {
            title: "Follow-up is inconsistent",
            body: "Leads, customers, internal requests and unresolved issues are slipping through the cracks.",
            href: "/contact",
            cta: "Fix Follow-Up",
          },
          {
            title: "Everything depends on the owner",
            body: "Too many approvals, reminders, decisions and escalations depend on one person.",
            href: "/owner-operating-system",
            cta: "Build an Owner Operating System",
          },
          {
            title: "The team is overloaded",
            body: "People are busy, but too much capacity disappears into rework, manual steps, status chasing and changing priorities.",
            href: "/operations-reset",
            cta: "Start an Operations Reset",
          },
          {
            title: "Reporting takes too much time",
            body: "Leaders spend more time preparing updates than understanding what the numbers require them to do.",
            href: "/ai-time-saver-sprint",
            cta: "Find Time-Saving Automation",
          },
          {
            title: "AI sounds useful, but the right use case is unclear",
            body: "You know AI could help, but not where it will save meaningful time or improve the work.",
            href: "/ai-time-saver-sprint",
            cta: "Find the Right AI Use Case",
          },
        ],
      },
      {
        eyebrow: "The problem is visible. The system usually isn’t.",
        title: "See why the same problem keeps coming back.",
        body: "Hiring another person, adding another meeting, installing another tool or asking everyone to work harder may relieve the pressure without changing the system producing it. Operational Visibility connects the symptoms across work, decisions, information, constraints, risk and cash so leadership can act on the cause rather than repeatedly treating the consequence.",
      },
      {
        title: "How Dan helps",
        cards: [
          {
            title: "Make the work visible",
            body: "Reconstruct how work actually moves, including the delays, handoffs, exceptions and workarounds that do not appear in the official process.",
          },
          {
            title: "Expose the cause",
            body: "Connect decisions, information, ownership, constraints, risk and financial consequences to the visible problem.",
          },
          {
            title: "Fix the system",
            body: "Remove unnecessary work, clarify ownership, improve flow and strengthen the decisions and controls that keep the problem from returning.",
          },
          {
            title: "Automate the right work",
            body: "Apply AI, automation, analytics, Lean Six Sigma, training or strategy only after the underlying work is understood.",
          },
          {
            title: "Build the operating rhythm",
            body: "Install the measures, ownership, escalation and follow-up routines required to sustain the result.",
          },
        ],
      },
      {
        title: "Main offers",
        cards: [
          {
            title: "Operational Visibility Diagnostic",
            body: "See how critical work actually moves, where decisions and information break down, what is constraining performance, where risk or cash is accumulating, and what leadership should fix first.",
            href: "/contact",
            cta: "Make the System Visible",
          },
          {
            title: "Backlog Kill Kit",
            body: "Find why work is piling up and what recovery path makes sense.",
            href: "/backlog-kill-kit",
            cta: "Kill the Backlog",
          },
          {
            title: "AI Time Saver Sprint",
            body: "Find repetitive work where AI or automation can save real time.",
            href: "/ai-time-saver-sprint",
            cta: "Find Time-Saving Automation",
          },
          {
            title: "90-Day Operations Reset",
            body: "Stabilize chaotic operations and create a better work rhythm.",
            href: "/operations-reset",
            cta: "Start an Operations Reset",
          },
          {
            title: "Owner Operating System",
            body: "Reduce owner dependency with clearer priorities and follow-up.",
            href: "/owner-operating-system",
            cta: "Build an Owner Operating System",
          },
          {
            title: "Dan Feliciano Academy",
            body: "Train your team to solve problems and improve work.",
            href: "/academy",
            cta: "Train the Team",
          },
        ],
      },
    ],
    finalCta: {
      title: "Ready to see what is really slowing the business down?",
      body: "Start with the problem you can feel. The Operational Visibility Diagnostic traces it to the work, decisions, information, constraints, risk and financial consequences underneath it—and shows what deserves action first.",
      cta: "Start an Operational Visibility Diagnostic",
      href: "/contact",
    },
  },
  {
    slug: "backlog-kill-kit",
    title: "Backlog Kill Kit",
    href: "/backlog-kill-kit",
    metadata: {
      title: "Backlog Kill Kit | Dan Feliciano",
      description:
        "A practical diagnostic for teams whose work is piling up, taking too long, aging, or falling through the cracks.",
    },
    subhead:
      "For teams whose work is piling up, taking too long, or falling through the cracks.",
    intro: [
      "Backlog is rarely just a staffing problem. It is usually a system problem: unclear intake, bad prioritization, rework, handoff delays, missing decision rules, poor visibility, and unmanaged variation.",
      "The Backlog Kill Kit helps you understand why work is stuck, what is aging, where handoffs are failing, and what recovery path makes sense.",
    ],
    primaryCta: "Request a Backlog Kill Kit",
    sections: [
      {
        title: "Signs you may need it",
        items: [
          "Aging work is growing",
          "Customers are waiting too long",
          "Staff are overwhelmed",
          "Leaders cannot see where work is stuck",
          "Escalations are normal",
          "Everything feels urgent",
          "People are working hard but the backlog is not shrinking",
        ],
      },
      {
        title: "What Dan reviews",
        items: [
          "Intake flow",
          "Demand and capacity",
          "Backlog aging",
          "Process handoffs",
          "Ownership gaps",
          "Decision rules",
          "Rework loops",
          "Reporting visibility",
          "Escalation patterns",
        ],
      },
      {
        title: "What you get",
        items: [
          "Backlog segmentation",
          "Aging profile",
          "Process and handoff scan",
          "Root-cause themes",
          "Ownership review",
          "Quick-win recommendations",
          "Recovery roadmap",
          "Practical next-step plan",
        ],
      },
      {
        title: "Best fit",
        body: "Best for service operations, healthcare administration, customer support, case management, claims, billing, intake, review, approval, fulfillment, and other teams where work can pile up out of sight.",
      },
    ],
    finalCta: {
      title: "Need to know why work is piling up?",
      cta: "Request a Backlog Kill Kit",
      href: "/contact",
    },
  },
  {
    slug: "ai-time-saver-sprint",
    title: "AI Time Saver Sprint",
    href: "/ai-time-saver-sprint",
    metadata: {
      title: "AI Time Saver Sprint | Dan Feliciano",
      description:
        "Stop guessing where AI belongs. Find the repetitive work, missed follow-up, manual reporting, and communication gaps where AI or automation can save real time.",
    },
    subhead:
      "Stop guessing where AI belongs. Find the work it can actually improve.",
    intro: [
      "AI is most useful when it saves time, reduces manual work, improves follow-up, simplifies reporting, or helps people make better decisions. This sprint finds the workflows where AI or automation can create practical value.",
      "The goal is not to add another shiny tool. The goal is to find where the business is losing time and decide whether AI, automation, analytics, process redesign, training, or simple management discipline is the right fix.",
    ],
    primaryCta: "Find Time-Saving Automation",
    sections: [
      {
        title: "Good AI candidates",
        items: [
          "Repetitive follow-up",
          "Intake sorting",
          "Drafting and summarizing",
          "Reporting prep",
          "Customer communication",
          "Document review",
          "Status updates",
          "Knowledge retrieval",
          "Simple decision support",
          "Repetitive internal questions",
        ],
      },
      {
        title: "Bad AI candidates",
        items: [
          "Broken workflows no one understands",
          "Tasks with unclear ownership",
          "Processes with bad data",
          "Work that should be stopped, not automated",
          "Customer experiences where trust would be damaged",
          "Decisions that require human judgment but lack clear rules",
        ],
      },
      {
        title: "What Dan reviews",
        items: [
          "Repetitive work",
          "Manual handoffs",
          "Follow-up gaps",
          "Reporting workload",
          "Customer communication patterns",
          "Data readiness",
          "Process stability",
          "Risk and trust concerns",
          "Team adoption concerns",
        ],
      },
      {
        title: "What you get",
        items: [
          "AI opportunity map",
          "Automation candidate list",
          "Time-saving estimate categories",
          "Workflow recommendations",
          "Risk and guardrail notes",
          "Practical implementation priorities",
          "Next-step plan",
        ],
      },
    ],
    method: {
      title: "Powered by 3AX",
      body: "Dan's 3AX method connects AI, automation, and analytics to real operational problems. The point is not to use AI everywhere. The point is to use it where it helps work move faster, better, or with less manual effort.",
    },
    finalCta: {
      title: "Want to know where AI can actually save time?",
      cta: "Find Time-Saving Automation",
      href: "/contact",
    },
  },
  {
    slug: "operations-reset",
    title: "90-Day Operations Reset",
    href: "/operations-reset",
    metadata: {
      title: "90-Day Operations Reset | Dan Feliciano",
      description:
        "A practical 90-day engagement for businesses stuck in firefighting mode, service delays, missed follow-up, unclear ownership, or operational chaos.",
    },
    subhead:
      "For businesses stuck in firefighting mode, service delays, missed follow-up, unclear ownership, or operational chaos.",
    intro: [
      "When operations are stuck, more meetings and more dashboards are not enough. The 90-Day Operations Reset creates a practical path from chaos to control.",
      "The work focuses on stabilizing the workflow, reducing delays, clarifying ownership, improving visibility, and installing a rhythm that keeps the business moving.",
    ],
    primaryCta: "Start an Operations Reset",
    sections: [
      {
        title: "Signs you may need it",
        items: [
          "The same fires keep coming back",
          "Work is delayed and no one is sure why",
          "Customers or internal teams are waiting too long",
          "Escalations have become normal",
          "Reporting exists but decisions are still slow",
          "The owner or leader is constantly chasing follow-up",
          "Teams are busy but not consistently moving the right work",
        ],
      },
      {
        title: "First 30 days: Stabilize",
        items: [
          "Map the current work",
          "Identify where work is stuck",
          "Segment urgent issues",
          "Clarify ownership",
          "Establish short-term control rhythm",
          "Create immediate triage logic",
        ],
      },
      {
        title: "Days 31-60: Improve",
        items: [
          "Remove waste",
          "Redesign handoffs",
          "Reduce rework",
          "Improve visibility",
          "Standardize decision rules",
          "Identify automation candidates",
        ],
      },
      {
        title: "Days 61-90: Sustain",
        items: [
          "Lock in the operating rhythm",
          "Transfer ownership to leaders and teams",
          "Build simple scorecards",
          "Document standard work",
          "Create sustainment routines",
          "Prepare the next improvement roadmap",
        ],
      },
      {
        title: "What you get",
        items: [
          "Current-state review",
          "Bottleneck analysis",
          "Recovery roadmap",
          "Operating rhythm",
          "Ownership map",
          "Scorecard or dashboard recommendations",
          "Sustainment plan",
          "Practical next-step plan",
        ],
      },
    ],
    method: {
      title: "Powered by the Phoenix Protocol",
      body: "The Phoenix Protocol is Dan's method for stabilizing, improving, and sustaining operations that are stuck in firefighting mode. The name is the method; the outcome is a business that runs with less chaos.",
    },
    finalCta: {
      title: "Ready to move from firefighting to control?",
      cta: "Start an Operations Reset",
      href: "/contact",
    },
  },
  {
    slug: "owner-operating-system",
    title: "Owner Operating System",
    href: "/owner-operating-system",
    metadata: {
      title: "Owner Operating System | Dan Feliciano",
      description:
        "Build clearer priorities, better follow-up, simple metrics, decision rules, and a weekly rhythm so the business does not depend on constant owner intervention.",
    },
    subhead:
      "For owners who are tired of being the operating system, reminder system, traffic cop, and final decision point for everything.",
    intro: [
      "A business gets easier to run when people know what matters, what to measure, who owns what, when decisions get made, and how follow-up happens.",
      "The Owner Operating System creates a simple rhythm for priorities, metrics, meetings, decisions, and accountability so the business does not depend on constant chasing.",
    ],
    primaryCta: "Build an Owner Operating System",
    sections: [
      {
        title: "Signs you may need it",
        items: [
          "Everything runs through the owner",
          "Priorities keep changing",
          "Meetings do not lead to follow-through",
          "People are busy but ownership is unclear",
          "Decisions get delayed",
          "The business has goals but no weekly rhythm",
          "Problems repeat because no one owns the fix",
          "The owner is the reminder system",
        ],
      },
      {
        title: "What gets built",
        items: [
          "Clear priorities",
          "Simple scorecard",
          "Weekly operating rhythm",
          "Decision rules",
          "Follow-up system",
          "Ownership map",
          "Meeting structure",
          "Improvement backlog",
          "Owner dashboard",
        ],
      },
      {
        title: "What changes",
        items: [
          "Fewer dropped balls",
          "Clearer ownership",
          "Better follow-up",
          "Faster decisions",
          "Less owner dependency",
          "More visible work",
          "More consistent execution",
        ],
      },
    ],
    method: {
      title: "Powered by AESOP",
      body: "Dan's AESOP method helps turn choices into execution: Assess, Establish, Synchronize, Operationalize, and Persist. In plain English, that means deciding what matters, building the rhythm to manage it, and making sure follow-through actually happens.",
    },
    finalCta: {
      title: "Want the business to run with less chasing?",
      cta: "Build an Owner Operating System",
      href: "/contact",
    },
  },
  {
    slug: "policy-forensics",
    title: "Policy Forensics",
    href: "/policy-forensics",
    metadata: {
      title: "Policy Forensics | Dan Feliciano",
      description:
        "Decision intelligence for institutions, associations, and policy-sensitive organizations facing policy, regulatory, legislative, or public-sector change.",
    },
    subhead:
      "Decision intelligence for institutions, associations, and policy-sensitive organizations.",
    intro: [
      "Policy Forensics helps leaders understand policy, regulatory, legislative, or public-sector change before it becomes operational risk.",
      "This offer is for organizations that need plainspoken, nonpartisan analysis of what a policy change could mean for operations, cost, stakeholders, implementation, reputation, and strategic decisions.",
    ],
    primaryCta: "Request a Policy Forensics Brief",
    sections: [
      {
        title: "Who it helps",
        items: [
          "Associations",
          "Public-sector leaders",
          "Healthcare organizations",
          "Universities",
          "Regulated businesses",
          "Civic institutions",
          "Boards and leadership teams",
          "Policy-sensitive organizations",
        ],
      },
      {
        title: "What it analyzes",
        items: [
          "Proposed legislation",
          "Regulatory change",
          "Budget policy",
          "Workforce policy",
          "Healthcare policy",
          "Education policy",
          "Public-sector transformation",
          "Institutional risk",
        ],
      },
      {
        title: "What you get",
        items: [
          "Policy brief",
          "Risk map",
          "Stakeholder map",
          "Operational impact analysis",
          "Fiscal and administrative implications",
          "Implementation scenarios",
          "Decision memo",
          "Executive briefing deck",
        ],
      },
      {
        title: "Use cases",
        items: [
          "Understand a proposed law before it affects operations",
          "Prepare leadership for regulatory change",
          "Assess operational implications of public-sector decisions",
          "Translate policy complexity into decision-ready options",
          "Identify risks before they become urgent",
        ],
      },
    ],
    finalCta: {
      title:
        "Need to understand what policy change could mean for your organization?",
      cta: "Request a Policy Forensics Brief",
      href: "/contact",
    },
  },
] as const satisfies readonly OwnerOffer[];

export type OwnerOfferSlug = (typeof ownerOffers)[number]["slug"];

export function getOwnerOffer(slug: OwnerOfferSlug) {
  return ownerOffers.find((offer) => offer.slug === slug)!;
}
