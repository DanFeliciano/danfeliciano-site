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
import { absoluteUrl, createMetadata } from "@/lib/seo";

type AesopService = Extract<
  (typeof services)[number],
  { slug: "aesop-strategy-governance" }
>;

const service = services.find(
  (item): item is AesopService => item.slug === "aesop-strategy-governance",
)!;

export const metadata = createMetadata({
  ...service.metadata,
  path: service.href,
});

const relatedLinks = [
  { label: "Phoenix Protocol", href: "/services/phoenix-protocol" },
  { label: "AI, Automation & Analytics", href: "/services/ai-automation-analytics" },
  { label: "Products", href: "/products" },
] as const;

export default function AesopStrategyGovernancePage() {
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
              Strategy needs an operating system
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Many organizations do not fail because the strategy is
              unintelligent. They fail because priorities, decision rights,
              metrics, routines, and escalation paths never become a durable
              management system.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <h2 className="text-xl font-black">Best-fit use cases</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
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
            The AESOP framework
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            AESOP turns strategy into a practical cadence of assessment,
            governance, synchronization, operating routines, and persistence.
          </p>
        </div>
        <div className="mt-8">
          <FrameworkSteps steps={service.steps ?? []} variant="dark" />
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Deliverables
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The engagement produces executive-ready artifacts leaders can use
              to govern priorities, decisions, performance, and accountability.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
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
        body="Build the governance, KPIs, cadence, and decision rights that make strategy executable."
        cta={service.cta}
        href="/contact"
        title="Ready to operationalize the strategy?"
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
