import type { CapabilityPillar } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";

export type ServiceMisdiagnosis = {
  question: string;
  commonAnswer: string;
  correction: string;
  inspectInstead: string;
  nextStep: {
    prefix?: string;
    linkLabel: string;
    href: SiteRoute;
    suffix: string;
  };
};

export const serviceMisdiagnoses = {
  "strategic-exposure": [
    {
      question: "Why does everything in my business still depend on me?",
      commonAnswer:
        "You need to delegate more or hire a stronger management team.",
      correction:
        "Delegation fails when priorities, decision rules, ownership, and escalation conditions are still unclear. Employees bring everything back to the owner because the business has never made explicit what they may decide, what evidence they should use, and when a problem truly requires escalation.",
      inspectInstead:
        "Review which decisions repeatedly return to the owner, what information is missing, where authority becomes ambiguous, and which follow-up depends on personal memory.",
      nextStep: {
        prefix: "The ",
        linkLabel: "Owner Operating System",
        href: "/owner-operating-system",
        suffix:
          " creates clearer priorities, decision rights, measures, follow-up, and a weekly operating rhythm that reduces owner dependency.",
      },
    },
    {
      question: "How do I know which business problem to fix first?",
      commonAnswer:
        "Rank your projects by urgency, financial impact, or executive preference.",
      correction:
        "The most visible problem is not always the problem controlling the result. Fixing an easy or politically popular issue can consume time and money while the real constraint continues limiting cash, capacity, service, or growth.",
      inspectInstead:
        "Trace each problem to its operational and financial consequences, identify shared dependencies, test which issue constrains the larger system, and determine what happens if no action is taken.",
      nextStep: {
        linkLabel: "Strategic Exposure & Decision Planning",
        href: "/contact",
        suffix:
          " separates urgent noise from material exposure and shows what to fix, what to stop, and what can wait.",
      },
    },
    {
      question: "Why does every issue in my company become urgent?",
      commonAnswer:
        "Your team needs better time management and stronger accountability.",
      correction:
        "Everything becomes urgent when the organization lacks explicit priorities, decision thresholds, early-warning signals, and a reliable way to distinguish a routine exception from a material threat. People escalate everything because the system gives them no safe basis for choosing otherwise.",
      inspectInstead:
        "Examine how priorities are set, who can change them, what triggers escalation, which measures provide advance warning, and how often last-minute urgency is created by an earlier unresolved decision.",
      nextStep: {
        linkLabel: "Strategic Exposure & Decision Planning",
        href: "/contact",
        suffix:
          " makes the tradeoffs, ownership, thresholds, and consequences visible before every problem becomes a fire.",
      },
    },
  ],
  "forensic-financial": [
    {
      question: "Why is my profitable business always short on cash?",
      commonAnswer:
        "You need tighter collections, a larger credit line, or better cash-flow forecasting.",
      correction:
        "Cash shortages are frequently created upstream—by slow delivery, excess work in process, delayed customer acceptance, unbilled completed work, disputes, rework, inventory, poor contract terms, or growth that consumes cash faster than it produces it. Collections may be the final delay, not the original cause.",
      inspectInstead:
        "Follow cash from commitment through delivery, billing, collection, inventory, supplier terms, and exceptions. Identify where work and money stop moving together.",
      nextStep: {
        prefix: "A ",
        linkLabel: "Financial Exposure Review",
        href: "/contact",
        suffix:
          " connects cash pressure to the operating behaviors and timing choices creating it.",
      },
    },
    {
      question: "Why did revenue grow while profit and cash got worse?",
      commonAnswer:
        "Costs rose too quickly, pricing is too low, or the company needs more sales volume.",
      correction:
        "Growth can magnify an unhealthy operating system. New revenue may bring unfavorable terms, customization, overtime, rework, implementation delays, inventory needs, service complexity, or customers who consume more cash and capacity than their reported revenue suggests.",
      inspectInstead:
        "Separate revenue quantity from revenue quality. Examine contribution margin, customer and product complexity, cost-to-serve, working-capital requirements, backlog aging, discounts, exceptions, and capacity consumption.",
      nextStep: {
        linkLabel: "Forensic Financial Analysis",
        href: "/contact",
        suffix:
          " determines whether growth is creating enterprise value or merely making the underlying exposure larger.",
      },
    },
    {
      question: "Can I trust the numbers in my financial reports?",
      commonAnswer:
        "If the statements reconcile and follow accounting rules, the numbers are reliable.",
      correction:
        "Financial reports can be technically correct and still create a misleading operating picture. Timing shifts, one-time revenue, deferred maintenance, capitalized costs, interfund transfers, backlog, unrecorded service obligations, optimistic assumptions, and classification choices can make current performance look stronger than the underlying system.",
      inspectInstead:
        "Reconcile reported results with cash movement, workload, service levels, liabilities, capacity, customer behavior, recurring adjustments, and the assumptions behind management estimates.",
      nextStep: {
        prefix: "A ",
        linkLabel: "Financial Exposure Review",
        href: "/contact",
        suffix:
          " separates sustainable performance from timing, accounting presentation, and operational consequences hidden behind the totals.",
      },
    },
  ],
  "operational-recovery": [
    {
      question: "Do I need to hire more people to clear our backlog?",
      commonAnswer:
        "Yes. A growing backlog usually means demand exceeds staffing capacity.",
      correction:
        "Adding people can increase cost and congestion without increasing throughput. The true constraint may be an approval, a missing decision, poor prioritization, rework, incomplete information, batching, owner dependency, or a downstream function that cannot absorb additional work.",
      inspectInstead:
        "Measure demand, completions, queue age, cycle time, rework, handoffs, decision delays, and where work actually accumulates. Determine whether labor is the constraint before adding labor.",
      nextStep: {
        prefix: "The ",
        linkLabel: "Backlog Kill Kit",
        href: "/backlog-kill-kit",
        suffix:
          " identifies why work is accumulating and what will reduce it without automatically defaulting to headcount.",
      },
    },
    {
      question: "Why is everyone busy but the work is still late?",
      commonAnswer:
        "Employees need to work more efficiently, manage time better, or be held more accountable.",
      correction:
        "Busyness is not flow. People may be starting too much work, chasing missing information, correcting defects, attending status meetings, switching priorities, waiting for approvals, or performing work that does not move the customer outcome forward.",
      inspectInstead:
        "Compare activity with completed work. Examine queue age, work in process, interruptions, handoffs, rework, priority changes, decision delays, and the percentage of effort spent moving versus managing work.",
      nextStep: {
        linkLabel: "Operational Excellence & Recovery",
        href: "/operations-reset",
        suffix:
          " exposes where capacity is being consumed and restores a practical flow of completed work.",
      },
    },
    {
      question: "Why do the same operational problems keep coming back?",
      commonAnswer:
        "The team failed to follow the new process or sustain the improvement.",
      correction:
        "Many fixes remove the visible symptom without changing the system that regenerates it. A backlog can be reduced through overtime, a customer issue can be escalated, and a report can be manually corrected—while the original decision rule, information failure, workload imbalance, or ownership gap remains untouched.",
      inspectInstead:
        "Determine what conditions recreate the problem, what changed temporarily, which controls are absent, how exceptions are handled, and whether the constraint actually moved.",
      nextStep: {
        prefix: "The ",
        linkLabel: "90-Day Operations Reset",
        href: "/operations-reset",
        suffix:
          " stabilizes the current operation and installs the ownership, measures, routines, and controls needed to keep the problem from returning.",
      },
    },
  ],
  "decision-analytics": [
    {
      question: "Why do we have dashboards but still cannot make decisions?",
      commonAnswer:
        "The dashboard needs better visualization, more real-time data, or more sophisticated analytics.",
      correction:
        "The dashboard may be answering questions nobody clearly asked. More data does not improve a decision when leaders have not defined the choice, evidence standard, action threshold, owner, or consequence of waiting.",
      inspectInstead:
        "Start with the decision. Identify who must act, what they need to know, when they need to know it, which uncertainty matters, and what value or threshold should trigger action.",
      nextStep: {
        prefix: "A ",
        linkLabel: "Decision Signal Review",
        href: "/contact",
        suffix:
          " defines the decision first and then identifies the smallest useful set of measures needed to support it.",
      },
    },
    {
      question: "Which KPIs should my business track?",
      commonAnswer:
        "Track revenue, margin, cash, customer satisfaction, employee productivity, and other industry-standard measures.",
      correction:
        "A KPI is useful only when someone owns it, understands what causes it, and knows what action to take when it changes. Generic scorecards often describe yesterday while failing to reveal the constraint, risk, or decision that matters today.",
      inspectInstead:
        "Identify the decisions leadership repeatedly makes, the outcomes those decisions influence, the leading signals that provide time to act, and the measures people can actually control.",
      nextStep: {
        linkLabel: "Decision Analytics",
        href: "/contact",
        suffix:
          " creates a minimum useful measure set tied directly to ownership, thresholds, and management action.",
      },
    },
    {
      question: "Why are our forecasts always wrong?",
      commonAnswer:
        "You need more historical data, a better forecasting model, or more advanced software.",
      correction:
        "Forecast errors often come from unstable definitions, hidden assumptions, changing operating constraints, biased inputs, stale pipelines, exception-heavy work, or people adjusting estimates to produce an acceptable answer. A more sophisticated model can make weak assumptions look more precise.",
      inspectInstead:
        "Review forecast purpose, input quality, assumption ownership, historical bias, operating capacity, scenario ranges, update frequency, and what decisions actually change when the forecast moves.",
      nextStep: {
        linkLabel: "Decision Analytics",
        href: "/contact",
        suffix:
          " builds forecasts and scenarios around the decision—not around the illusion that uncertainty can be modeled away.",
      },
    },
  ],
  "ai-process-redesign": [
    {
      question: "Why are my AI agents failing?",
      commonAnswer:
        "The model is not capable enough, the prompt needs improvement, or the agent needs more tools and data.",
      correction:
        "Many agents fail because the business cannot consistently explain the work. The process contains conflicting rules, missing information, undocumented judgment, unstable handoffs, uncontrolled exceptions, and no clear definition of success. The agent is not creating the confusion. It is encountering the confusion people previously worked around.",
      inspectInstead:
        "Map the real workflow, decisions, information sources, exceptions, ownership, controls, and escalation conditions before changing the model.",
      nextStep: {
        linkLabel: "AI Process Redesign & Automation",
        href: "/ai-time-saver-sprint",
        suffix:
          " makes the underlying work visible and determines what must be simplified, governed, or redesigned before the agent is rebuilt.",
      },
    },
    {
      question: "Which business process should I automate first with AI?",
      commonAnswer:
        "Start with the highest-volume, most repetitive, or most expensive process.",
      correction:
        "Volume alone does not make a process a good automation candidate. A frequent task with unstable inputs, unclear rules, high exception rates, weak ownership, or serious downside risk can produce more cost and rework when automated.",
      inspectInstead:
        "Evaluate time consumed, process stability, information quality, judgment required, exception frequency, risk, adoption, measurable value, and the effect on the entire workflow—not merely one task.",
      nextStep: {
        prefix: "The ",
        linkLabel: "AI Time Saver Sprint",
        href: "/ai-time-saver-sprint",
        suffix:
          " ranks automation opportunities by practical value, readiness, risk, and time actually recoverable.",
      },
    },
    {
      question: "Why is my team not using the AI tools we bought?",
      commonAnswer:
        "Employees are resistant to change and need more training, incentives, or executive pressure.",
      correction:
        "People often reject AI because it adds steps, produces work they must verify, does not fit the workflow, lacks trusted information, threatens unclear roles, or solves a problem they did not consider important. Low adoption can be a rational response to poor work design.",
      inspectInstead:
        "Observe where the tool enters the work, what it replaces, what new effort it creates, who owns its output, how exceptions are handled, and whether users experience measurable value.",
      nextStep: {
        linkLabel: "AI Process Redesign & Automation",
        href: "/ai-time-saver-sprint",
        suffix:
          " redesigns the workflow and human-tool boundaries so adoption follows usefulness rather than mandate.",
      },
    },
  ],
} as const satisfies Record<
  CapabilityPillar["id"],
  readonly ServiceMisdiagnosis[]
>;

export const allServiceMisdiagnoses = Object.values(
  serviceMisdiagnoses,
).flat() as readonly ServiceMisdiagnosis[];

export function serviceMisdiagnosisAnswerText(item: ServiceMisdiagnosis) {
  return [
    `The common answer: ${item.commonAnswer}`,
    `What is more often true: ${item.correction}`,
    `What to inspect instead: ${item.inspectInstead}`,
    `Next step: ${item.nextStep.prefix ?? ""}${item.nextStep.linkLabel}${item.nextStep.suffix}`,
  ].join(" ");
}
