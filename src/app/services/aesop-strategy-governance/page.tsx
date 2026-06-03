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

type AesopService = Extract<
  (typeof services)[number],
  { slug: "aesop-strategy-governance" }
>;

type RelatedLink = { label: string; href: SiteRoute };

const service = services.find(
  (item): item is AesopService => item.slug === "aesop-strategy-governance",
)!;

export const metadata = createMetadata({
  ...service.metadata,
  path: service.href,
});

const breadcrumbs = [
  { label: "Services", href: "/services" },
  { label: service.title, href: service.href },
] as const satisfies readonly RelatedLink[];

const relatedLinks = [
  { label: "AI + Operations", href: "/ai-process-redesign" },
  { label: "Policy Impact", href: "/policy-impact-analysis" },
  { label: "Backlog Kill", href: "/backlog-kill" },
] as const satisfies readonly RelatedLink[];

export default function AesopStrategyGovernancePage() {
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
              Complex decisions need forensic scrutiny
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Hidden assumptions, weak data, budget pressure, policy
              complexity, operational constraints, and AI risk can make a
              decision look cleaner than it is. Strategic Forensics brings
              those consequences into view before leaders commit.
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
            The Strategic Forensics method
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The method moves from hidden risk to decision-grade evidence:
            surface the assumption, scrutinize the consequence, brief the
            tradeoff, fix the system, and govern the risk.
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
              to understand consequences, challenge assumptions, and choose the
              next action.
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
        body="Expose the assumptions, weak data, fiscal risk, operational failure points, and execution problems before the decision gets expensive."
        cta={service.cta}
        href="/contact"
        title="Need to know what the decision is hiding?"
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
