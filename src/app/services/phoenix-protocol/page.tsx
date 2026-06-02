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
import { absoluteUrl, createMetadata } from "@/lib/seo";

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

const recoverySteps = [
  {
    title: "Stabilize",
    description:
      "Segment the backlog, expose aging risk, clarify ownership, and create immediate management rhythm.",
  },
  {
    title: "Recover",
    description:
      "Attack root causes, remove handoff friction, rebalance capacity, and track daily recovery actions.",
  },
  {
    title: "Sustain",
    description:
      "Install controls, dashboards, escalation paths, and leadership routines that prevent relapse.",
  },
];

const relatedLinks = [
  { label: "Backlog Kill Kit", href: "/products/backlog-kill-kit" },
  { label: "AESOP Strategy & Governance", href: "/services/aesop-strategy-governance" },
  { label: "AI, Automation & Analytics", href: "/services/ai-automation-analytics" },
] as const satisfies readonly RelatedLink[];

export default function PhoenixProtocolPage() {
  return (
    <main id="main-content">
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title, href: service.href },
        ]}
      />
      <PageHeader subhead={service.description ?? service.summary} title={service.title}>
        <CtaButton href="/contact">{service.cta}</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Recovery starts with control
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Backlogs become dangerous when leaders cannot see aging risk,
              ownership, demand-capacity mismatch, failure demand, or the
              decisions required to restore flow. Phoenix Protocol creates the
              control rhythm first, then drives recovery.
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
            30/60/90-day recovery framework
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The protocol moves from stabilization to root-cause recovery to a
            sustainment model leaders can manage without heroic escalation.
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
              Leaders leave with a practical recovery plan, daily management
              system, and the evidence needed to make staffing, process, and
              policy decisions.
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
        body="Expose the backlog drivers, restore operating rhythm, and give leaders a recovery path they can govern."
        cta={service.cta}
        href="/contact"
        title="Need to stabilize service performance?"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.metadata.description,
          provider: { "@type": "Person", name: site.name, url: site.url },
          url: absoluteUrl(service.href),
        }}
      />
    </main>
  );
}
