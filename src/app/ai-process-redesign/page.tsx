import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "AI Process Redesign Diagnostic | Dan Feliciano",
  description:
    "A practical diagnostic for organizations that need to map workflows, data, risks, automation opportunities, and AI readiness.",
  path: "/ai-process-redesign",
});

const relatedLinks = [
  { label: "Strategic Forensics", href: "/strategic-forensics" },
  { label: "Briefings", href: "/briefings" },
  { label: "Start a Conversation", href: "/contact" },
] as const;

const diagnosticAreas = [
  "Core workflows",
  "Repetitive work",
  "Decision points",
  "Data quality",
  "Bottlenecks",
  "Handoffs",
  "Rework",
  "Risk and governance",
  "Automation opportunities",
  "AI use already happening inside the organization",
  "Productivity opportunities",
  "Customer, citizen, or employee experience impact",
] as const;

const deliverables = [
  "Workflow inventory",
  "AI opportunity map",
  "Data readiness assessment",
  "Risk and governance map",
  "Automation candidate list",
  "Productivity opportunity assessment",
  "30/60/90-day action plan",
  "Executive briefing",
] as const;

const buyers = [
  "Business owners",
  "Executives",
  "Chambers",
  "Associations",
  "Municipal leaders",
  "Nonprofits",
  "Professional service firms",
  "Public-facing organizations",
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

export default function AiProcessRedesignPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="AI is not the strategy. Redesigning the work is."
        title="AI Process Redesign Diagnostic"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" href="/contact">
            Assess Your AI Readiness
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
              Start with the work, not the tool.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Employees are already experimenting with AI. Leaders know it
              matters. But most organizations are still treating AI as a
              tool-selection problem instead of a work-redesign problem.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The real value comes from identifying where AI can improve
              decisions, remove waste, reduce rework, accelerate service,
              improve quality, and strengthen accountability.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">
              Core premise
            </p>
            <p className="mt-4 text-xl font-black leading-8 text-charcoal">
              Most organizations are not ready for AI because they have not
              mapped the work, the data, the risks, the decision points, or the
              bottlenecks.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            The common mistake
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Many organizations start with tools, pilots, or training. That
            usually misses the deeper issue: the work itself has not been
            mapped, measured, redesigned, or governed.
          </p>
        </div>
      </Section>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-command">
            <h2 className="text-2xl font-black">Why usual approaches fail</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Tool demos, prompt training, and isolated pilots can make AI look
              active while the workflow remains broken. If the data is weak,
              handoffs are unclear, or decision rights are unmanaged, AI
              usually speeds up the confusion.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-command">
            <h2 className="text-2xl font-black">What Dan does</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dan maps the work, decision points, data quality, risk controls,
              automation candidates, and AI already happening inside the
              organization so leaders can see what is ready, risky, or
              misdiagnosed.
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
              The diagnostic finds where work actually moves, where risk hides,
              and where AI or automation can help without making weak systems
              faster.
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
              The output gives leaders a practical readiness view, not a
              vendor shortlist.
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
              For organizations that need AI to improve real work, decisions,
              service, quality, and accountability.
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
        body="Map the work, the data, the risks, and the bottlenecks before AI decisions become expensive theater."
        cta="Assess Your AI Readiness"
        href="/contact"
        title="Ready to see where AI can actually improve the work?"
      />
    </main>
  );
}
