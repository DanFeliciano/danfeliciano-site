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

type AiAutomationService = Extract<
  (typeof services)[number],
  { slug: "ai-automation-analytics" }
>;

type RelatedLink = { label: string; href: SiteRoute };

const service = services.find(
  (item): item is AiAutomationService =>
    item.slug === "ai-automation-analytics",
)!;

export const metadata = createMetadata({
  ...service.metadata,
  path: service.href,
});

const breadcrumbs = [
  { label: "Services", href: "/services" },
  { label: service.title, href: service.href },
] as const satisfies readonly RelatedLink[];

const automationSteps = [
  {
    title: "Map the work",
    description:
      "Identify decisions, handoffs, queues, data gaps, failure demand, and risk before selecting tools.",
  },
  {
    title: "Prioritize opportunities",
    description:
      "Separate high-value automation candidates from broken work that should be redesigned first.",
  },
  {
    title: "Prototype with governance",
    description:
      "Define controls, measurement, adoption routines, and responsible AI guardrails before scaling.",
  },
  {
    title: "Measure operating impact",
    description:
      "Track cycle time, quality, effort, risk reduction, and decision speed against the operating goal.",
  },
];

const relatedLinks = [
  { label: "Policy Impact", href: "/policy-impact-analysis" },
  { label: "Strategic Forensics", href: "/strategic-forensics" },
  { label: "Briefings", href: "/briefings" },
  { label: "Start a Conversation", href: "/contact" },
  { label: "Academy", href: "/academy" },
] as const satisfies readonly RelatedLink[];

export default function AiAutomationAnalyticsPage() {
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
              Redesign the work before scaling AI
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              AI can accelerate work, but it can also amplify unclear rules,
              poor handoffs, weak data, and unmanaged risk. AI Process Redesign
              starts with the workflow, data, consequences, and controls before
              the tool decision.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <h2 className="text-xl font-black">Use cases</h2>
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
            AI Process Redesign path
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The work links automation ideas to the operating model, risk
            controls, adoption path, and performance measures that make them
            worth doing.
          </p>
        </div>
        <div className="mt-8">
          <FrameworkSteps steps={automationSteps} variant="dark" />
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Deliverables
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The output is an executive-ready path for AI and automation that
              respects workflow readiness, governance, adoption, and measurable
              operating outcomes.
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
        body="Find the AI and automation opportunities that improve work instead of speeding up waste."
        cta={service.cta}
        href="/contact"
        title="Ready to redesign the work before buying the tool?"
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
