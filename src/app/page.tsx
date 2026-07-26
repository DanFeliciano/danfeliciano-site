import Link from "next/link";
import { OperatingCommandVisual } from "@/components/visuals/operating-command-visual";
import { Container } from "@/components/layout/container";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { ProofStrip } from "@/components/ui/proof-strip";
import { capabilityPillars, homepage, insightCards } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Dan Feliciano | Operational Visibility for Owners and Operators",
  description:
    "See how work, decisions, information, constraints, risk and cash move through your business—then fix the system and automate the right work.",
  path: "/",
});

const operationalVisibilityElements = [
  "Work",
  "Decisions",
  "Information",
  "Constraints",
  "Risk",
  "Cash",
] as const;

const painPoints = [
  {
    title: "Work is piling up",
    body: "For backlog, delays, missed handoffs, aging tasks, and work that keeps getting stuck.",
    cta: "Kill the Backlog",
    href: "/backlog-kill-kit",
  },
  {
    title: "We are wasting too much time",
    body: "For repetitive admin, manual reporting, status chasing, duplicate entry, and tasks that should not take this long.",
    cta: "Find Time-Saving Automation",
    href: "/ai-time-saver-sprint",
  },
  {
    title: "Customers are slipping through the cracks",
    body: "For slow follow-up, missed leads, inconsistent communication, weak retention, and unclear ownership.",
    cta: "Fix Follow-Up",
    href: "/what-i-fix",
  },
  {
    title: "Everything depends on me",
    body: "For owners who are tired of being the bottleneck, traffic cop, reminder system, and final decision point for everything.",
    cta: "Build an Owner Operating System",
    href: "/owner-operating-system",
  },
  {
    title: "My team needs better problem-solving skills",
    body: "For teams that need to reduce waste, improve service, solve problems, and use AI responsibly.",
    cta: "Train the Team",
    href: "/academy",
  },
  {
    title: "I need to understand policy or regulatory change",
    body: "For institutions, associations, and policy-sensitive organizations that need decision-ready analysis.",
    cta: "Explore Policy Forensics",
    href: "/policy-forensics",
  },
] as const satisfies readonly {
  title: string;
  body: string;
  cta: string;
  href: SiteRoute;
}[];

const outcomeProof = [
  "Reduced delays",
  "Improved follow-up",
  "Simplified reporting",
  "Increased capacity",
  "Improved service flow",
  "Strengthened decision-making",
  "Built problem-solving capability",
  "Improved operating discipline",
] as const;

const credentials = [
  "25+ years of experience",
  "GE Six Sigma Master Black Belt background",
  "Experience across healthcare, public sector, finance, manufacturing, logistics, and service operations",
  "AI, automation, analytics, Lean Six Sigma, and strategy expertise",
] as const;

export default function HomePage() {
  const featuredInsights = insightCards.slice(0, 3);

  return (
    <main id="main-content">
      <section className="bg-ink text-white">
        <Container>
          <div className="grid min-w-0 gap-5 py-6 sm:gap-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-12">
            <div className="min-w-0">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] text-signal">
                Operational Visibility for owners and operators
              </p>
              <h1 className="max-w-4xl text-balance text-[1.95rem] font-black leading-[2.3rem] tracking-normal sm:text-5xl sm:leading-tight">
                {homepage.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-200 sm:mt-5 sm:text-lg sm:leading-8">
                {homepage.subhead}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                {homepage.body}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <CtaButton className="w-full sm:w-auto" href="/contact">
                  Start with an Operational Visibility Diagnostic
                </CtaButton>
                <CtaButton
                  className="w-full sm:w-auto"
                  href="/what-i-fix"
                  variant="secondary"
                >
                  Explore What I Fix
                </CtaButton>
              </div>
            </div>

            <OperatingCommandVisual />
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="operational-visibility-heading"
        className="bg-paper py-12 text-charcoal sm:py-14"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                See the system behind the symptoms
              </p>
              <h2
                className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl"
                id="operational-visibility-heading"
              >
                Make the business visible before trying to fix it.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Operational Visibility shows how work, decisions, information,
                constraints, risk and cash actually move through the business.
                It helps leaders separate visible symptoms from the operating
                system producing them—before adding people, software, automation
                or another improvement initiative—so they can fix the system and
                automate intelligently.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {operationalVisibilityElements.map((element) => (
                <li
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-black text-charcoal"
                  key={element}
                >
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                Capabilities
              </p>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
                Five ways to make the business easier to run.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Start with the decision, financial concern, broken workflow,
                weak signal, or repeated task creating the most risk or drag.
                Then choose the smallest practical intervention that changes the
                result.
              </p>
            </div>
            <CtaButton className="w-full lg:w-auto" href="/services">
              Explore All Services
            </CtaButton>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilityPillars.map((pillar, index) => (
              <article
                className="group flex h-full flex-col rounded-lg border border-slate-200 bg-paper p-5 transition hover:border-signal hover:shadow-command"
                key={pillar.id}
              >
                <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                  Service {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-balance text-xl font-black leading-7 text-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {pillar.homepageSummary}
                </p>
                <Link
                  className="mt-auto inline-flex pt-5 text-sm font-black text-charcoal underline decoration-signal decoration-2 underline-offset-4 group-hover:text-slate-600"
                  href={`/services#${pillar.id}`}
                >
                  Explore {pillar.title}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 text-charcoal sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              What is happening now?
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Choose the problem you want to solve first.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Start with the problem you can see. Operational Visibility traces
              it to the work, decision, information, constraint or financial
              consequence underneath it.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {painPoints.map((point) => (
              <article
                className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-command"
                key={point.title}
              >
                <h3 className="text-lg font-black leading-6 text-charcoal">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {point.body}
                </p>
                <div className="mt-auto pt-5">
                  <CtaButton className="w-full" href={point.href}>
                    {point.cta}
                  </CtaButton>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-graphite py-16 text-white sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-400">
              Focused starting points
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Start with the problem, not a long engagement.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Each capability has a bounded starting point designed to expose
              the facts, clarify the decision, and show what deserves action
              next.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilityPillars.map((pillar) => (
              <article
                className="flex h-full min-h-60 flex-col rounded-lg border border-white/10 bg-white/[0.04] p-5"
                key={pillar.id}
              >
                <p className="text-xs font-black uppercase tracking-[0.12em] text-signal">
                  {pillar.title}
                </p>
                <h3 className="mt-3 text-balance text-xl font-black leading-7 text-white">
                  {pillar.id === "operational-recovery"
                    ? "Backlog Kill Kit / 90-Day Operations Reset"
                    : pillar.startingPoint.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {pillar.id === "operational-recovery"
                    ? "Start with a fixed-scope backlog diagnostic, or stabilize the wider operation when delays, ownership, and firefighting require a 90-day reset."
                    : pillar.startingPoint.summary}
                </p>
                <div className="mt-auto pt-5">
                  <CtaButton
                    className="w-full"
                    href={pillar.startingPoint.href}
                  >
                    {pillar.startingPoint.cta}
                  </CtaButton>
                  {pillar.id === "operational-recovery" ? (
                    <Link
                      className="mt-4 inline-flex text-sm font-black text-white underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
                      href="/operations-reset"
                    >
                      Explore the 90-Day Operations Reset
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                Proof
              </p>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
                Practical experience. Measurable work.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The proof should show up in better decisions and in how the work
                moves: fewer delays, clearer follow-up, simpler reporting,
                better service, and more capacity to solve the right problems.
              </p>
              <CtaButton className="mt-6" href="/results">
                See Results
              </CtaButton>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {outcomeProof.map((item) => (
                  <div
                    className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-bold leading-6 text-charcoal"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {credentials.map((item) => (
                  <div
                    className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProofStrip items={homepage.proof} />

      <section className="bg-white py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                Strategy is not a slide deck. It is knowing what to say yes and
                no to.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Most businesses do not struggle because they lack goals. They
                struggle because everything becomes urgent, every opportunity
                looks equal, and no one is clear about what matters most.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Dan helps turn financial and operational exposure into better
                choices: what to fix, what to stop, what to automate, what to
                measure, and what to focus on next.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "What to fix",
                "What to stop",
                "What to automate",
                "What to measure",
                "What to focus on next",
                "What can wait",
              ].map((item) => (
                <div
                  className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-bold leading-6 text-charcoal"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                AI should save time, not create another project.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                AI is useful when it helps real work move faster, better, or
                with less manual effort. Before recommending tools, Dan helps
                identify where the business is losing time and which workflows
                are worth redesigning or automating.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredInsights.map((card) => (
                <article
                  className="rounded-lg border border-slate-200 bg-white p-5"
                  key={card.title}
                >
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                    {card.status}
                  </p>
                  <h3 className="mt-3 text-lg font-black leading-6 text-charcoal">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {card.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA
        body="Start with the problem you can feel. The Operational Visibility Diagnostic shows what deserves action first."
        cta="Start an Operational Visibility Diagnostic"
        href="/contact"
        title="Ready to make the next problem easier to see and fix?"
      />
    </main>
  );
}
