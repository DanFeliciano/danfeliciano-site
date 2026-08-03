import { bookingUrl } from "@/content/site";
import type { ActionHref } from "@/lib/routes";

export type HeroAction = {
  label: string;
  href: ActionHref;
};

export type PageHero = {
  eyebrow: string;
  title: string;
  subhead: readonly string[];
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  trustLine?: string;
  cues?: readonly string[];
};

export const pageHeroes = {
  "/": {
    eyebrow: "Operational Visibility for owners and operators",
    title: "Fix what is slowing your business down.",
    subhead: [
      "Most leaders can see the symptoms—backlogs, delays, rework, weak follow-up, confusing numbers and cash pressure—but not the system producing them.",
      "I make visible how work actually gets done, where decisions and information break down, what is constraining performance, and where risk and cash are accumulating. Then I help determine what to fix, what to stop, what to measure and what to automate.",
    ],
    primaryAction: {
      label: "Start an Operational Visibility Diagnostic",
      href: "/operational-visibility-diagnostic",
    },
    secondaryAction: {
      label: "Explore What I Fix",
      href: "/what-i-fix",
    },
  },
  "/what-i-fix": {
    eyebrow: "What I Fix",
    title: "Which problem keeps coming back?",
    subhead: [
      "Work is piling up. Follow-up is inconsistent. Employees are overloaded. Reporting takes too long. Every important decision comes back to the owner.",
      "These are visible symptoms of a system leadership cannot yet clearly see.",
    ],
    primaryAction: {
      label: "Choose Your Problem",
      href: "#common-problems",
    },
    secondaryAction: {
      label: "Start an Operational Visibility Diagnostic",
      href: "/operational-visibility-diagnostic",
    },
  },
  "/services": {
    eyebrow: "Services",
    title:
      "Bring me the stuck work, confusing number, or decision that cannot wait.",
    subhead: [
      "I expose what is producing the problem, connect it to the operating and financial consequences, and define the smallest practical intervention that changes the result.",
    ],
    primaryAction: {
      label: "Choose the Problem First",
      href: "#service-capabilities",
    },
    secondaryAction: {
      label: "Start an Operational Visibility Diagnostic",
      href: "/operational-visibility-diagnostic",
    },
  },
  "/operational-visibility-diagnostic": {
    eyebrow: "Operational Visibility Diagnostic",
    title: "See how one critical flow actually works—and what to fix first.",
    subhead: [
      "When backlogs, delays, rework, owner dependence, weak follow-up, confusing numbers, or cash pressure keep returning, the visible symptom is rarely the whole problem.",
      "In about ten business days, the Diagnostic reconstructs one material flow from trigger to value, shows where work and decisions break down, and gives leadership an evidence-backed 30/60/90-day action plan.",
    ],
    primaryAction: {
      label: "Book a Fit Conversation",
      href: bookingUrl,
    },
    secondaryAction: {
      label: "Review the Scope",
      href: "#scope",
    },
    trustLine:
      "$5,000 first-three-pilot fee · One critical flow · Remote delivery",
    cues: [
      "Owners and operators",
      "Evidence before automation",
      "Diagnosis before implementation",
    ],
  },
  "/insights": {
    eyebrow: "Insights and Points of View",
    title: "The visible problem is rarely the whole problem.",
    subhead: [
      "Contrarian, practical writing on the systems behind backlogs, cash pressure, weak decisions, failed automation, operating risk and work that refuses to move.",
    ],
    primaryAction: {
      label: "Read the Featured Point of View",
      href: "/insights/your-ai-isnt-broken-your-business-is-invisible",
    },
    secondaryAction: {
      label: "Explore All Insights",
      href: "#insights-index",
    },
  },
  "/ai-time-saver-sprint": {
    eyebrow: "AI Time Saver Sprint",
    title: "Find where AI can save time—before you automate the wrong work.",
    subhead: [
      "Identify repetitive work, reporting, follow-up, handoffs and communication gaps where AI or automation can create measurable value without scaling a broken process.",
    ],
    primaryAction: {
      label: "Find Time-Saving Automation",
      href: "/contact",
    },
    trustLine: "Redesign first. Automate second.",
  },
  "/backlog-kill-kit": {
    eyebrow: "Backlog Kill Kit",
    title: "Find why work is aging—and what will move it.",
    subhead: [
      "Backlog is rarely just a staffing problem. Expose the queues, decision delays, ownership gaps, broken handoffs and rework keeping the pile from shrinking.",
      "The Backlog Kill Kit is Operational Visibility applied to backlog and aging-work symptoms—not a competing diagnostic or a promise of remediation before the cause is known.",
    ],
    primaryAction: {
      label: "See the Diagnostic",
      href: "/operational-visibility-diagnostic",
    },
    cues: ["Aging work", "Broken handoffs", "Hidden constraints"],
  },
  "/operations-reset": {
    eyebrow: "90-Day Operations Reset",
    title: "Move from firefighting to control in 90 days.",
    subhead: [
      "Stabilize the work, clarify ownership, reduce recurring delays, expose the real constraint and install a management rhythm that keeps the operation moving.",
    ],
    primaryAction: {
      label: "Start an Operations Reset",
      href: "/contact",
    },
    cues: ["Stabilize", "Improve", "Sustain"],
  },
  "/owner-operating-system": {
    eyebrow: "Owner Operating System",
    title: "Stop being the operating system.",
    subhead: [
      "Clarify priorities, decision rights, follow-up, measures and escalation so the business can move without routing every issue through the owner.",
    ],
    primaryAction: {
      label: "Build an Owner Operating System",
      href: "/contact",
    },
  },
  "/policy-forensics": {
    eyebrow: "Policy Forensics",
    title: "What will this policy actually do to costs, operations and risk?",
    subhead: [
      "Move beyond headlines and stated intent. Trace who pays, who must comply, what behavior changes, where operating burden moves and which consequences remain hidden.",
    ],
    primaryAction: {
      label: "Examine the Policy Impact",
      href: "/contact",
    },
  },
  "/academy": {
    eyebrow: "Dan Feliciano Academy",
    title: "Teach your team to see and fix the system.",
    subhead: [
      "Build practical problem-solving, process, analytical and AI capability around the real work—not belts, jargon or an idealized improvement culture.",
    ],
    primaryAction: {
      label: "Train the Team",
      href: "/contact",
    },
  },
  "/results": {
    eyebrow: "Results",
    title: "Results that show up in cash, capacity, speed and control.",
    subhead: [
      "The work should change what leadership can see and what the operation can produce: shorter delays, stronger cash flow, clearer decisions, less rework, more capacity and better operating discipline.",
    ],
    primaryAction: {
      label: "See the Evidence",
      href: "#results-evidence",
    },
  },
  "/about": {
    eyebrow: "About Dan Feliciano",
    title: "I find the hidden cause behind visible business problems.",
    subhead: [
      "For more than 25 years, I have worked across operations, finance, technology, healthcare, manufacturing and government to expose what is really producing the result—and determine what should change.",
    ],
    primaryAction: {
      label: "See What I Fix",
      href: "/what-i-fix",
    },
    secondaryAction: {
      label: "See Results",
      href: "/results",
    },
  },
  "/speaking": {
    eyebrow: "Speaking",
    title: "Give leaders a different way to see—and solve—the problem.",
    subhead: [
      "Practical, contrarian talks on Operational Visibility, AI and work design, backlogs, financial exposure, decision quality and why organizations keep treating symptoms instead of systems.",
    ],
    primaryAction: {
      label: "Invite Dan to Speak",
      href: "/contact",
    },
  },
  "/contact": {
    eyebrow: "Contact",
    title: "Bring me the problem that keeps coming back.",
    subhead: [
      "Tell me what is stuck, delayed, confusing, costly or too dependent on one person. We will determine whether the first step is an Operational Visibility Diagnostic or a more specific intervention.",
    ],
    primaryAction: {
      label: "Describe the Problem",
      href: "#describe-the-problem",
    },
  },
  "/academy/lean-six-sigma-ai-yellow-belt": {
    eyebrow: "Yellow Belt Training",
    title: "Give the team a practical way to see and improve work.",
    subhead: [
      "Build a shared foundation for spotting waste, understanding flow, using data and supporting improvement without burying employees in jargon.",
    ],
    primaryAction: {
      label: "Ask About Yellow Belt Training",
      href: "/contact",
    },
    secondaryAction: {
      label: "Academy Overview",
      href: "/academy",
    },
  },
  "/academy/lean-six-sigma-ai-green-belt": {
    eyebrow: "Green Belt Training",
    title: "Lead improvement projects that change the work.",
    subhead: [
      "Learn to define the problem, analyze causes, redesign workflows and deliver measurable results using Lean Six Sigma, data and practical AI support.",
    ],
    primaryAction: {
      label: "Ask About Green Belt Training",
      href: "/contact",
    },
    secondaryAction: {
      label: "Academy Overview",
      href: "/academy",
    },
  },
  "/academy/lean-six-sigma-ai-black-belt": {
    eyebrow: "Black Belt Training",
    title: "Lead complex improvement without losing the operation.",
    subhead: [
      "Build the analytical, project-leadership and coaching capability to solve cross-functional problems, mentor teams and sustain results where operational and financial consequences are real.",
    ],
    primaryAction: {
      label: "Ask About Black Belt Training",
      href: "/contact",
    },
    secondaryAction: {
      label: "Academy Overview",
      href: "/academy",
    },
  },
  "/insights/your-ai-isnt-broken-your-business-is-invisible": {
    eyebrow: "Point of View #1",
    title: "Your AI Isn’t Broken. Your Business Is Invisible.",
    subhead: [
      "AI did not create the confusion inside most organizations. It exposed how much of the business still depends on tribal knowledge, workarounds and systems no one can clearly describe.",
    ],
    primaryAction: {
      label: "Read the Point of View",
      href: "#article-body",
    },
    secondaryAction: {
      label: "Explore All Insights",
      href: "/insights",
    },
  },
  "/strategic-forensics": {
    eyebrow: "Strategic Forensics",
    title: "Find the hidden risk before the decision gets expensive.",
    subhead: [
      "Pressure-test the claim, the data, the money, the workflow and the incentives before weak assumptions harden into financial or operational consequences.",
    ],
    primaryAction: {
      label: "Request a Strategic Forensics Briefing",
      href: "/contact",
    },
    secondaryAction: {
      label: "See What Dan Examines",
      href: "#forensic-targets",
    },
  },
  "/policy-impact-analysis": {
    eyebrow: "Policy Impact Analysis",
    title: "See what the policy changes in the real operation.",
    subhead: [
      "Translate the bill, rule or proposal into costs, workflows, compliance burden, accountability, behavior changes and consequences leaders can act on.",
    ],
    primaryAction: {
      label: "Request a Policy Impact Briefing",
      href: "/contact",
    },
    secondaryAction: {
      label: "Explore Policy Forensics",
      href: "/policy-forensics",
    },
  },
  "/backlog-kill": {
    eyebrow: "Backlog and Service Recovery",
    title: "Diagnose why the backlog keeps growing before adding people.",
    subhead: [
      "Expose aging work, demand and capacity, broken handoffs, decision delays, ownership gaps and rework before funding the wrong fix.",
    ],
    primaryAction: {
      label: "Diagnose the Backlog",
      href: "/backlog-kill-kit",
    },
    secondaryAction: {
      label: "Start an Operations Reset",
      href: "/operations-reset",
    },
  },
  "/products": {
    eyebrow: "Focused Diagnostics",
    title: "Get a clear read before the expensive move.",
    subhead: [
      "Choose a bounded diagnostic or briefing that exposes assumptions, operating and financial consequences, tradeoffs and what deserves action next.",
    ],
    primaryAction: {
      label: "Choose a Focused Diagnostic",
      href: "#focused-diagnostics",
    },
    secondaryAction: {
      label: "Start an Operational Visibility Diagnostic",
      href: "/operational-visibility-diagnostic",
    },
  },
  "/briefings": {
    eyebrow: "Strategic Forensics Briefings",
    title: "Give leaders a clear read before they commit.",
    subhead: [
      "Turn a complex issue into plain-English consequences, risks, tradeoffs and next actions before money, reputation or public trust is on the line.",
    ],
    primaryAction: {
      label: "Request a Strategic Forensics Briefing",
      href: "/contact",
    },
    secondaryAction: {
      label: "See Briefing Topics",
      href: "#briefing-topics",
    },
  },
  "/privacy": {
    eyebrow: "Privacy",
    title: "Your inquiry information stays tied to your inquiry.",
    subhead: [
      "A plain-language summary of what this site collects, why it is used and how to ask about information you submitted.",
    ],
    primaryAction: {
      label: "Read the Privacy Policy",
      href: "#privacy-details",
    },
    secondaryAction: {
      label: "Ask a Privacy Question",
      href: "/contact",
    },
  },
  "/terms": {
    eyebrow: "Terms",
    title: "Clear terms for using this site and working with Dan.",
    subhead: [
      "Understand the boundaries for website content, diagnostics, training, briefings, outcomes, intellectual property and engagement-specific agreements.",
    ],
    primaryAction: {
      label: "Read the Terms",
      href: "#terms-details",
    },
    secondaryAction: {
      label: "Ask a Terms Question",
      href: "/contact",
    },
  },
} as const satisfies Record<string, PageHero>;
