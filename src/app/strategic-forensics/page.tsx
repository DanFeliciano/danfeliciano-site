import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Strategic Forensics | Dan Feliciano",
  description:
    "Find hidden assumptions, weak data, operational risks, and financial consequences before complex decisions become expensive failures.",
  path: "/strategic-forensics",
});

const relatedLinks = [
  { label: "Briefings", href: "/briefings" },
  { label: "AI Process Redesign", href: "/ai-process-redesign" },
  { label: "Policy Impact Analysis", href: "/policy-impact-analysis" },
  { label: "Backlog Kill", href: "/backlog-kill" },
] as const;

const forensicTargets = [
  "Hidden assumptions",
  "Weak or misleading data",
  "Budget gimmicks",
  "Operational bottlenecks",
  "Process failure",
  "Incentive problems",
  "AI misuse",
  "Compliance burden",
  "Staffing myths",
  "Execution risk",
  "Taxpayer, customer, or stakeholder impact",
] as const;

const useCases = [
  "Before a major decision",
  "Before launching an AI initiative",
  "When a bill, policy, or regulation is unclear",
  "When service backlogs are growing",
  "When costs are rising but root causes are vague",
  "When leaders suspect the official story is incomplete",
  "When data is being used to justify a decision but may not be reliable",
  "When operational consequences are being ignored",
] as const;

const deliverables = [
  "Plain-English issue framing",
  "Hidden-risk assessment",
  "Operational and financial implications",
  "Decision options",
  "Tradeoff analysis",
  "Questions leaders should be asking",
  "Recommended next actions",
] as const;

function BulletGrid({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold leading-6 text-charcoal shadow-command"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function StrategicForensicsPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Find what others miss before it becomes expensive."
        title="Strategic Forensics"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" href="/contact">
            Book a Strategic Forensics Briefing
          </CtaButton>
          <CtaButton className="w-full sm:w-auto" href="/contact" variant="secondary">
            Start a Conversation
          </CtaButton>
        </div>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Not generic consulting. A forensic read on the decision.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Strategic Forensics is Dan Feliciano&apos;s method for examining
              complex decisions, systems, policies, workflows, budgets, AI
              adoption, and organizational claims to uncover hidden risks, weak
              assumptions, operational consequences, and financial exposure.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">
              Core message
            </p>
            <p className="mt-4 text-xl font-black leading-8 text-charcoal">
              When the official story is incomplete, the data is weak, the
              decision is expensive, or the system is failing, Strategic
              Forensics looks underneath the surface.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              What Strategic Forensics looks for
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The work pressure-tests the story, the numbers, the workflow, and
              the incentives before they turn into expensive consequences.
            </p>
          </div>
          <BulletGrid items={forensicTargets} />
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              When to use Strategic Forensics
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Use it before leaders commit money, reputation, time, or public
              trust to a decision that has not been properly examined.
            </p>
          </div>
          <ul className="grid gap-3">
            {useCases.map((item) => (
              <li
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm font-bold leading-6 text-slate-100 shadow-command"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              What you get
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The output is not a thick binder. It is a clear read on the
              issue, the risk, the tradeoffs, and what leaders should do next.
            </p>
          </div>
          <BulletGrid items={deliverables} />
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <Container className="px-0">
          <div className="rounded-lg border border-slate-200 bg-paper p-6">
            <h2 className="text-2xl font-black">Related paths</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-charcoal transition hover:border-signal hover:text-ink"
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
        body="Bring the official story, the data, the budget, the workflow, and the decision into one focused Strategic Forensics conversation."
        cta="Book a Strategic Forensics Briefing"
        href="/contact"
        title="Need to know what is hiding underneath the surface?"
      />
    </main>
  );
}
