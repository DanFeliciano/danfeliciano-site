import { OperatingCommandVisual } from "@/components/visuals/operating-command-visual";
import { Container } from "@/components/layout/container";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { OfferCard, type OfferCardData } from "@/components/ui/offer-card";
import { ProofStrip } from "@/components/ui/proof-strip";
import { homepage, insightCards } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Dan Feliciano | Strategic Forensics",
  description:
    "Find the hidden risk. Clarify the decision. Fix the system. Strategic Forensics for leaders facing AI disruption, policy complexity, operational failure, weak data, backlogs, and financial risk.",
  path: "/",
});

const forensicSignals = [
  "Hidden assumptions",
  "Weak or misleading data",
  "Budget gimmicks",
  "Operational bottlenecks",
  "AI misuse",
  "Backlogs and service failure",
  "Compliance burden",
  "Execution risk",
  "Taxpayer, customer, and stakeholder impact",
] as const;

const coreServices: OfferCardData[] = [
  {
    eyebrow: "Decision risk",
    title: "Strategic Forensics",
    summary:
      "Decision-grade analysis for leaders who need to understand the hidden risks, tradeoffs, and consequences inside complex choices.",
    href: "/strategic-forensics",
    cta: "Explore Strategic Forensics",
    meta: "Best for expensive decisions with unclear assumptions, weak data, or public consequences.",
  },
  {
    eyebrow: "AI + operations",
    title: "AI Process Redesign",
    summary:
      "AI is not the strategy. Redesign the work first: workflows, data, risks, and automation opportunities before tools or pilots.",
    href: "/ai-process-redesign",
    cta: "Assess Your AI Readiness",
    meta: "Best before buying tools, launching pilots, or automating broken work.",
  },
  {
    eyebrow: "Policy impact",
    title: "Policy Impact Analysis",
    summary:
      "Translate bills, budgets, and regulations into operational, financial, compliance, and taxpayer consequences.",
    href: "/policy-impact-analysis",
    cta: "Request a Policy Impact Briefing",
    meta: "Best for public decisions, associations, candidates, and institutions.",
  },
  {
    eyebrow: "Service failure",
    title: "Service Reimagined / Backlog Kill",
    summary:
      "Diagnose backlogs, bottlenecks, staffing pressure, service delays, and broken workflows before throwing more money at the wrong problem.",
    href: "/backlog-kill",
    cta: "Diagnose the Backlog",
    meta: "Best when service risk is rising and the cause is still unclear.",
  },
  {
    eyebrow: "Focused session",
    title: "Briefings",
    summary:
      "A focused 60-90 minute session that turns a complex issue into plain-English consequences, risks, and next actions.",
    href: "/briefings",
    cta: "Book a Strategic Forensics Briefing",
    meta: "Best for boards, executives, campaigns, associations, and public leaders.",
  },
];

const audiences = [
  "Business owners and executives",
  "Associations and chambers",
  "Municipal and public-sector leaders",
  "Candidates and policymakers",
  "Advocacy groups and lobbyists",
  "Boards and nonprofit leaders",
  "Media platforms needing serious analysis",
] as const;

const briefingPoints = [
  "Define the decision and the stakes.",
  "Expose the hidden assumptions, fiscal risk, weak data, and operating consequences.",
  "Leave with plain-English next actions leaders can actually use.",
] as const;

export default function HomePage() {
  const featuredInsights = insightCards.slice(0, 3);

  return (
    <main id="main-content">
      <section className="bg-ink text-white">
        <Container>
          <div className="grid min-w-0 gap-5 py-6 sm:gap-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-12">
            <div className="min-w-0">
              <h1 className="max-w-4xl text-balance text-[1.95rem] font-black leading-[2.3rem] tracking-normal sm:text-5xl sm:leading-tight">
                {homepage.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-200 sm:mt-5 sm:text-lg sm:leading-8">
                {homepage.subhead}
              </p>
              <p className="mt-4 hidden max-w-2xl text-base leading-7 text-slate-300 sm:block">
                {homepage.body}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <CtaButton className="w-full sm:w-auto" href="/contact">
                  Book a Strategic Forensics Briefing
                </CtaButton>
                <CtaButton
                  className="w-full sm:w-auto"
                  href="/strategic-forensics"
                  variant="secondary"
                >
                  Explore Strategic Forensics
                </CtaButton>
              </div>
            </div>

            <OperatingCommandVisual />
          </div>
        </Container>
      </section>

      <ProofStrip items={homepage.proof} />

      <section className="bg-paper py-16 text-charcoal sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Complex decisions hide expensive risks.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Budgets can look balanced while liabilities move offstage. AI
              projects can look modern while workflows remain broken. Bills can
              sound simple while creating new costs, compliance burdens, and
              operational failure points.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Backlogs can be blamed on staffing when the real problem is
              visibility, flow, prioritization, and accountability. Strategic
              Forensics looks underneath the surface before the decision becomes
              expensive.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                Strategic Forensics is the discipline of finding what others miss.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                It combines strategic analysis, financial scrutiny, operational
                reality, AI fluency, and plain-English communication to expose
                hidden assumptions, weak data, process failure, fiscal risk, and
                execution problems.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {forensicSignals.map((signal) => (
                <div
                  className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-bold leading-6 text-charcoal"
                  key={signal}
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-graphite py-16 text-white sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Core services
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Start with the decision, risk, or operating failure that needs a
              clearer read. Each service turns complexity into consequences,
              tradeoffs, and next actions.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {coreServices.map((offer) => (
              <OfferCard key={offer.title} offer={offer} variant="dark" />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                Strategic Forensics Briefings
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A focused 60-90 minute session turns a complex issue into
                plain-English consequences, risks, and next actions.
              </p>
              <CtaButton className="mt-6" href="/contact">
                Book a Strategic Forensics Briefing
              </CtaButton>
            </div>
            <div className="grid gap-3">
              {briefingPoints.map((point) => (
                <div
                  className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold leading-6 text-charcoal shadow-command"
                  key={point}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-charcoal sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Who this is for
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              For leaders who need a serious read before the decision gets
              expensive, public, or operationally hard to reverse.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <div
                className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-bold leading-6 text-charcoal"
                key={audience}
              >
                {audience}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                Insights
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Short analysis for leaders sorting through AI, policy,
                backlogs, budgets, data, and operational risk.
              </p>
              <CtaButton className="mt-6" href="/insights">
                Read insights
              </CtaButton>
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

      <section className="bg-white py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-lg border border-slate-200 bg-ink p-6 text-white shadow-command lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                About Dan Feliciano
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                Dan brings a financially literate, operationally grounded, and
                AI-aware lens to decisions that cross strategy, policy, process,
                data, and execution. The work is blunt, practical, and built for
                leaders who need to know what is hiding inside the decision.
              </p>
            </div>
            <CtaButton className="w-full lg:w-auto" href="/about">
              Learn about Dan
            </CtaButton>
          </div>
        </Container>
      </section>

      <FinalCTA
        body="Before you make the expensive decision, understand what is hiding inside it."
        cta="Start a Conversation"
        href="/contact"
        title="Before you make the expensive decision, understand what is hiding inside it."
      />
    </main>
  );
}
