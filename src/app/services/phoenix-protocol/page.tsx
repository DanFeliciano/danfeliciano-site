import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { FrameworkSteps } from "@/components/ui/framework-steps";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { services, site } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";
import { absoluteUrl, breadcrumbListJsonLd, createMetadata } from "@/lib/seo";

type PhoenixService = Extract<
  (typeof services)[number],
  { slug: "phoenix-protocol" }
>;

type RelatedLink = { label: string; href: SiteRoute };

const service = services.find(
  (item): item is PhoenixService => item.slug === "phoenix-protocol",
)!;

export const metadata = createMetadata({
  ...service.metadata,
  path: service.href,
});

const breadcrumbs = [
  { label: "Services", href: "/services" },
  { label: service.title, href: service.href },
] as const satisfies readonly RelatedLink[];

const recoverySteps = [
  {
    title: "Expose",
    description:
      "Segment the backlog, expose aging risk, clarify ownership, and identify the real constraint.",
  },
  {
    title: "Prioritize",
    description:
      "Separate staffing pressure from flow failure, policy friction, rework, weak data, and late decisions.",
  },
  {
    title: "Fix",
    description:
      "Turn findings into recovery actions, decision cadence, ownership, and controls that prevent relapse.",
  },
];

const relatedLinks = [
  { label: "Backlog Kill", href: "/backlog-kill" },
  { label: "Strategic Forensics", href: "/strategic-forensics" },
  { label: "AI + Operations", href: "/ai-process-redesign" },
  { label: "Briefings", href: "/briefings" },
  { label: "Start a Conversation", href: "/contact" },
] as const satisfies readonly RelatedLink[];

export default function PhoenixProtocolPage() {
  return (
    <main id="main-content">
      <Breadcrumbs
        items={breadcrumbs}
      />
      <PageHeader subhead={service.description ?? service.summary} title={service.title}>
        <CtaButton href="/contact">{service.cta}</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Backlog kill starts with visibility
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Backlogs become dangerous when leaders cannot see aging risk,
              ownership, demand-capacity mismatch, failure demand, or the
              decisions required to restore flow. Backlog Kill starts by
              finding what is actually driving the delay.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <h2 className="text-xl font-black">Use when</h2>
            <ul className="mt-4 grid gap-3">
              {service.useCases?.map((useCase) => (
                <li className="border-l-2 border-signal pl-4 text-sm leading-6 text-slate-700" key={useCase}>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Backlog Kill framework
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The work moves from visibility to prioritization to a recovery
            model leaders can manage without heroic escalation or blind
            spending.
          </p>
        </div>
        <div className="mt-8">
          <FrameworkSteps steps={recoverySteps} variant="dark" />
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Deliverables
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Leaders leave with a practical recovery plan and the evidence
              needed to make staffing, process, policy, and customer-impact
              decisions.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {service.deliverables?.map((deliverable) => (
              <div className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-semibold leading-6 text-charcoal" key={deliverable}>
                {deliverable}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-paper text-charcoal">
        <Container className="px-0">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black">Related paths</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link className="rounded-md border border-slate-200 px-4 py-3 text-sm font-bold text-charcoal transition hover:border-signal hover:text-ink" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        body="Expose backlog drivers, service risk, staffing pressure, and the operating decisions needed to restore control."
        cta={service.cta}
        href="/contact"
        title="Need to know what is really causing the backlog?"
      />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metadata.description,
            provider: { "@type": "Person", name: site.name, url: site.url },
            url: absoluteUrl(service.href),
          },
          breadcrumbListJsonLd(breadcrumbs),
        ]}
      />
    </main>
  );
}
