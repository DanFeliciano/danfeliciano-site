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
  title: "Services | Dan Feliciano",
  description:
    "Explore Dan Feliciano's advisory services in strategy, governance, operational turnaround, AI automation, analytics, service redesign, and Lean Six Sigma execution.",
  path: "/services",
});

const bringDanIn = [
  "Strategy is clear at the top, but execution is inconsistent across teams.",
  "Backlog, cycle time, rework, or service misses are becoming executive risks.",
  "Dashboards exist, but leaders still do not have decision-ready operating rhythm.",
  "AI and automation are on the agenda, but the workflow is not ready to scale.",
  "Transformation work needs governance, accountability, and practical momentum.",
];

const additionalServices: OfferCardData[] = [
  {
    title: "Service Reimagined",
    summary:
      "Redesign intake, handoffs, service standards, and customer-facing operations around flow, visibility, and measurable performance.",
    href: "/services",
    cta: "Discuss service redesign",
    meta: "Best for teams rebuilding service delivery around real operating constraints.",
  },
  {
    title: "Speaking & Workshops",
    summary:
      "Direct executive sessions on strategy, AI, operational excellence, service recovery, and practical transformation.",
    href: "/speaking",
    cta: "Plan a session",
    meta: "Best for offsites, leadership meetings, and transformation events.",
  },
  {
    title: "Executive Advisory",
    summary:
      "Focused counsel for leaders who need a trusted operator to pressure-test decisions, cadence, metrics, and recovery plans.",
    href: "/services",
    cta: "Start the conversation",
    meta: "Best for executive teams navigating complex operating change.",
  },
];

const engagementSteps = [
  {
    title: "Diagnose the operating reality",
    description:
      "Clarify the work, data, constraints, stakeholders, risks, and decisions that need better control.",
  },
  {
    title: "Design the operating system",
    description:
      "Build the cadence, governance, KPIs, ownership model, and improvement roadmap needed to move.",
  },
  {
    title: "Execute in the work",
    description:
      "Turn recommendations into routines, dashboards, meetings, decisions, and measurable recovery actions.",
  },
  {
    title: "Transfer capability",
    description:
      "Leave leaders and teams with the methods, templates, and discipline to keep improving after the engagement.",
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
        subhead="Advisory systems for leaders who need strategy, operations, AI, analytics, and execution discipline in the same conversation."
        title="Services for strategy, operations, AI, and execution"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" href="/contact">
            Book a Strategy Diagnostic
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
              Operating clarity for complex work
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dan helps executives, public-sector leaders, and operators
              stabilize broken workflows, redesign service delivery, deploy
              practical AI, and build operating systems that survive contact
              with reality.
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
            Start with the constraint that matters most. Each service is built
            to connect executive decisions with the work, data, and cadence
            needed for measurable execution.
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
            The work moves from diagnosis to operating rhythm quickly, with
            executive visibility and practical transfer built into the cadence.
          </p>
        </div>
        <div className="mt-8">
          <FrameworkSteps steps={engagementSteps} variant="dark" />
        </div>
      </Section>

      <FinalCTA
        body="Bring the operating problem, the data, and the decision cadence into one focused conversation."
        cta="Book a Strategy Diagnostic"
        href="/contact"
        title="Need a clearer operating path?"
      />
    </main>
  );
}
