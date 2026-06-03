import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { FrameworkSteps } from "@/components/ui/framework-steps";
import { OfferCard, type OfferCardData } from "@/components/ui/offer-card";
import { PageHeader } from "@/components/ui/page-header";
import { services } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Strategic Forensics Services | Dan Feliciano",
  description:
    "Explore Strategic Forensics, AI Process Redesign, Policy Impact Analysis, Backlog Kill, and briefings for complex decisions with hidden risk.",
  path: "/services",
});

const bringDanIn = [
  "A decision looks simple, but the cost, compliance, and operating consequences are unclear.",
  "AI is on the table, but the workflow, data, and risk have not been mapped.",
  "Backlog, staffing pressure, or service delay is becoming financial or public risk.",
  "Dashboards exist, but the numbers do not explain what leaders should do next.",
  "A bill, budget, regulation, or policy shift needs plain-English impact analysis.",
];

const additionalServices: OfferCardData[] = [
  {
    title: "Briefings",
    summary:
      "A focused 60-90 minute session that turns a complex issue into plain-English consequences, risks, and next actions.",
    href: "/speaking",
    cta: "Plan a briefing",
    meta: "Best for boards, executives, associations, campaigns, and public leaders.",
  },
  {
    title: "Policy Impact Analysis",
    summary:
      "Translate bills, budgets, regulations, and policy changes into operational, financial, compliance, and taxpayer consequences.",
    href: "/policy-impact-analysis",
    cta: "Request policy analysis",
    meta: "Best for public decisions, associations, candidates, and institutional leaders.",
  },
  {
    title: "Decision Risk Counsel",
    summary:
      "Blunt counsel for leaders who need to pressure-test assumptions, money, data, operations, and execution before moving.",
    href: "/services",
    cta: "Start the conversation",
    meta: "Best when the stakes are high and the decision is still murky.",
  },
];

const engagementSteps = [
  {
    title: "Find the hidden risk",
    description:
      "Clarify the decision, assumptions, data, money, stakeholders, constraints, and consequences.",
  },
  {
    title: "Translate consequences",
    description:
      "Turn policy, budget, AI, backlog, and operating complexity into plain-English tradeoffs.",
  },
  {
    title: "Fix the system",
    description:
      "Identify the workflow, governance, ownership, data, and recovery actions needed to reduce risk.",
  },
  {
    title: "Brief the decision",
    description:
      "Leave leaders with consequences, options, next actions, and a clearer path forward.",
  },
];

export default function ServicesPage() {
  const serviceCards: OfferCardData[] = [
    ...services.map((service) => ({
      title: service.title,
      summary: service.summary,
      href: service.href,
      cta: service.cta,
      meta: service.deliverables?.slice(0, 3).join(" / "),
    })),
    ...additionalServices,
  ];

  return (
    <main id="main-content">
      <PageHeader
        subhead="Strategic Forensics for leaders facing AI disruption, policy complexity, operational failure, weak data, backlogs, budgets, and financial risk."
        title="Strategic Forensics services"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" href="/contact">
            Book a Strategic Forensics Briefing
          </CtaButton>
          <CtaButton className="w-full sm:w-auto" href="/products" variant="secondary">
            View Productized Offers
          </CtaButton>
        </div>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Find what the decision is hiding
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dan helps leaders understand what complex decisions actually
              mean financially, operationally, strategically, and publicly
              before hidden risk becomes an expensive failure.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <h2 className="text-xl font-black text-charcoal">
              When to bring Dan in
            </h2>
            <ul className="mt-4 grid gap-3">
              {bringDanIn.map((item) => (
                <li className="border-l-2 border-signal pl-4 text-sm leading-6 text-slate-700" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Advisory offers
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Start with the decision, risk, or operating failure that needs a
            clearer read. Each service turns complexity into consequences,
            tradeoffs, and next actions.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            How engagements work
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The work moves from hidden risk to clear decision quickly, with
            plain-English consequences and practical fixes built into the
            briefing.
          </p>
        </div>
        <div className="mt-8">
          <FrameworkSteps steps={engagementSteps} variant="dark" />
        </div>
      </Section>

      <FinalCTA
        body="Bring the decision, the data, the money, and the operating reality into one focused Strategic Forensics conversation."
        cta="Book a Strategic Forensics Briefing"
        href="/contact"
        title="Need to know what the decision is hiding?"
      />
    </main>
  );
}
