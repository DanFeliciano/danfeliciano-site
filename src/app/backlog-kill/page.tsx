import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Backlog Kill & Service Reimagined | Dan Feliciano",
  description:
    "Find the hidden risk. Clarify the decision. Fix the system. Diagnose backlogs, flow, rework, staffing constraints, process failure, and service-risk consequences.",
  path: "/backlog-kill",
});

const relatedLinks = [
  { label: "Strategic Forensics", href: "/strategic-forensics" },
  { label: "Briefings", href: "/briefings" },
  { label: "Start a Conversation", href: "/contact" },
] as const;

const diagnosticAreas = [
  "Incoming demand",
  "Backlog volume",
  "Backlog aging",
  "Work categories",
  "Triage rules",
  "Handoffs",
  "Bottlenecks",
  "Rework",
  "Defects",
  "Turnaround time",
  "Staffing constraints",
  "Policy constraints",
  "Technology gaps",
  "AI and automation opportunities",
  "Customer or citizen impact",
] as const;

const deliverables = [
  "Service workflow map",
  "Backlog visibility assessment",
  "Bottleneck analysis",
  "Root cause assessment",
  "Workload segmentation",
  "Process redesign recommendations",
  "AI/automation opportunity map",
  "30/60/90-day improvement plan",
] as const;

const buyers = [
  "Municipal governments",
  "State agencies",
  "Nonprofits",
  "Grant administrators",
  "Public-facing departments",
  "Service-heavy organizations",
  "Operations leaders",
] as const;

function ScanList({
  items,
  variant = "light",
}: {
  items: readonly string[];
  variant?: "light" | "dark";
}) {
  const itemClass =
    variant === "dark"
      ? "rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm font-bold leading-6 text-slate-100 shadow-command"
      : "rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold leading-6 text-charcoal shadow-command";

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li className={itemClass} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BacklogKillPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Backlogs are rarely just staffing problems."
        title="Service Reimagined / Backlog Kill"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" href="/contact">
            Diagnose the Backlog
          </CtaButton>
          <CtaButton className="w-full sm:w-auto" href="/contact" variant="secondary">
            Book a Strategic Forensics Briefing
          </CtaButton>
        </div>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Diagnose the backlog before funding the wrong fix.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              When service delays grow, organizations often blame staffing.
              Sometimes staffing is part of the problem. But backlogs usually
              hide deeper issues: unclear intake, poor triage, weak visibility,
              bad handoffs, inconsistent standards, avoidable rework, poor
              data, and limited accountability.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Backlog Kill makes the work visible so leaders can fix the right
              problem.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">
              Core premise
            </p>
            <p className="mt-4 text-xl font-black leading-8 text-charcoal">
              Backlogs grow when organizations cannot see the work, segment
              demand, prioritize correctly, manage flow, measure bottlenecks,
              or separate true capacity issues from broken process design.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-paper p-6 shadow-command">
            <h2 className="text-2xl font-black">Why usual approaches fail</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              More staff, louder escalation, and new software can all miss the
              real constraint. If intake, triage, handoffs, standards, aging,
              and rework are invisible, leaders spend against symptoms.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-paper p-6 shadow-command">
            <h2 className="text-2xl font-black">What Dan does</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dan makes the queue visible, segments the work, separates
              capacity from process failure, exposes bottlenecks, and turns the
              backlog into decisions leaders can actually manage.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              What the diagnostic examines
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The diagnostic separates real capacity limits from process
              failure, demand confusion, avoidable rework, weak triage, and
              missing accountability.
            </p>
          </div>
          <ScanList items={diagnosticAreas} variant="dark" />
        </div>
      </Section>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Deliverables
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Outputs are built to show leaders what is stuck, why it is stuck,
              and what should change first.
            </p>
          </div>
          <ScanList items={deliverables} />
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Who this is for
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              For leaders responsible for public-facing or service-heavy work
              where delays are becoming operational, financial, reputational,
              or citizen-impact risk.
            </p>
          </div>
          <ScanList items={buyers} />
        </div>
      </Section>

      <Section className="bg-paper text-charcoal">
        <Container className="px-0">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black">Related paths</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  className="rounded-md border border-slate-200 px-4 py-3 text-sm font-bold text-charcoal transition hover:border-signal hover:text-ink"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        body="Bring the demand, queue, aging, handoffs, rework, staffing assumptions, and service standards into one focused Backlog Kill review."
        cta="Diagnose the Backlog"
        href="/contact"
        title="Before you add capacity, find out what is actually broken."
      />
    </main>
  );
}
