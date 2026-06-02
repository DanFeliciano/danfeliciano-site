import { OperatingCommandVisual } from "@/components/visuals/operating-command-visual";
import { Container } from "@/components/layout/container";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { OfferCard, type OfferCardData } from "@/components/ui/offer-card";
import { ProofStrip } from "@/components/ui/proof-strip";
import { caseStudies, homepage, products, services } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Dan Feliciano | Operational Strategy, AI Automation & Lean Six Sigma",
  description:
    "Dan Feliciano helps executives and operators reduce backlog, redesign service delivery, deploy practical AI, and build operating systems that survive contact with reality.",
  path: "/",
});

const pathCards: OfferCardData[] = [
  {
    eyebrow: "Backlog and cycle time",
    title: "Reduce aging work and service drag",
    summary:
      "Use Phoenix Protocol to stabilize the queue, clarify ownership, and restore operating rhythm.",
    href: "/services/phoenix-protocol",
    cta: "Run a Phoenix Diagnostic",
    meta: "Best for service recovery, case work, intake, and demand-capacity breakdowns.",
  },
  {
    eyebrow: "AI automation strategy",
    title: "Automate the right work",
    summary:
      "Find practical AI and analytics opportunities after the workflow is visible, measured, and governed.",
    href: "/services/ai-automation-analytics",
    cta: "Assess AI opportunities",
    meta: "Best for leaders who need automation without amplifying waste.",
  },
  {
    eyebrow: "Strategy execution",
    title: "Turn strategy into operating cadence",
    summary:
      "Build the governance, KPIs, decision rights, and review cycles that keep execution moving.",
    href: "/services/aesop-strategy-governance",
    cta: "Build an execution system",
    meta: "Best for cross-functional transformation and executive alignment.",
  },
  {
    eyebrow: "Team capability",
    title: "Train your team in Lean Six Sigma + AI",
    summary:
      "Give operators, managers, and transformation teams practical improvement skills they can use immediately.",
    href: "/academy",
    cta: "Explore Academy",
    meta: "Best for Yellow Belt, Green Belt, Black Belt, and applied AI training.",
  },
  {
    eyebrow: "Policy and institutional risk",
    title: "Decode policy change before it hits operations",
    summary:
      "Use Policy Forensics to turn legislative, regulatory, or institutional change into executive-ready analysis.",
    href: "/products/policy-forensics",
    cta: "Request a policy brief",
    meta: "Best for nonpartisan risk scanning and decision memos.",
  },
  {
    eyebrow: "Keynote or workshop",
    title: "Bring operational clarity to the room",
    summary:
      "Equip leaders and teams with direct sessions on AI, operating excellence, strategy, and measurable execution.",
    href: "/speaking",
    cta: "Plan a session",
    meta: "Best for executive offsites, leadership meetings, and transformation events.",
  },
];

const productCards: OfferCardData[] = [
  ...products.map((product) => ({
    title: product.title,
    summary: product.summary,
    href: product.href,
    cta: product.cta,
    meta:
      "useCases" in product
        ? product.useCases.slice(0, 3).join(" / ")
        : undefined,
  })),
  {
    title: "Strategy Tools",
    summary:
      "Practical templates and operating assets for diagnostics, governance, scorecards, and execution reviews.",
    href: "/products",
    cta: "View productized tools",
    meta: "Built for teams that need structure before scale.",
  },
];

export default function HomePage() {
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
                  Book a Strategy Diagnostic
                </CtaButton>
                <CtaButton
                  className="w-full sm:w-auto"
                  href="/services"
                  variant="secondary"
                >
                  Explore Services
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
              What do you need to fix first?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Start with the constraint that is slowing decisions, service, or
              execution. Each path leads to a focused advisory offer.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pathCards.map((offer) => (
              <OfferCard key={offer.title} offer={offer} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                Services
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Advisory systems for leaders who need strategy, process, AI,
                analytics, and execution discipline in the same conversation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <OfferCard
                  key={service.slug}
                  offer={{
                    title: service.title,
                    summary: service.summary,
                    href: service.href,
                    cta: service.cta,
                    meta: service.deliverables?.slice(0, 3).join(" / "),
                  }}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-graphite py-16 text-white sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Products
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Fixed-scope diagnostics, training, and strategy tools for leaders
              who need momentum without a sprawling engagement.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {productCards.map((offer) => (
              <OfferCard key={offer.title} offer={offer} variant="dark" />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                Results
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Anonymized examples from complex operating environments where
                clearer work, ownership, and cadence created measurable control.
              </p>
              <CtaButton className="mt-6" href="/case-studies">
                Explore Results
              </CtaButton>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {caseStudies.map((study) => (
                <article
                  className="rounded-lg border border-slate-200 bg-white p-5"
                  key={study.title}
                >
                  <h3 className="text-lg font-black leading-6 text-charcoal">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {study.intervention}
                  </p>
                  <p className="mt-4 border-l-2 border-signal pl-4 text-sm font-semibold leading-6 text-ink">
                    {study.outcomes}
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
                Operations + AI Readiness Diagnostic
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                A focused lead-magnet assessment for leaders who want to see
                where backlog, workflow friction, data gaps, and AI automation
                opportunity intersect.
              </p>
            </div>
            <CtaButton className="w-full lg:w-auto" href="/contact">
              Request the Diagnostic
            </CtaButton>
          </div>
        </Container>
      </section>

      <FinalCTA
        body="Bring the work, the data, and the decision cadence into one operating system built for measurable performance."
        cta="Book a Strategy Diagnostic"
        href="/contact"
        title="Ready to turn operational chaos into measurable performance?"
      />
    </main>
  );
}
