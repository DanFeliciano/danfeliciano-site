import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { FrameworkSteps } from "@/components/ui/framework-steps";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { products, site } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";
import { absoluteUrl, breadcrumbListJsonLd, createMetadata } from "@/lib/seo";

type BacklogKillKit = Extract<
  (typeof products)[number],
  { slug: "backlog-kill-kit" }
>;

type BreadcrumbLink = { label: string; href: SiteRoute };

const product = products.find(
  (item): item is BacklogKillKit => item.slug === "backlog-kill-kit",
)!;

export const metadata = createMetadata({
  ...product.metadata,
  path: product.href,
});

const breadcrumbs = [
  { label: "Products", href: "/products" },
  { label: product.title, href: product.href },
] as const satisfies readonly BreadcrumbLink[];

const diagnosticSteps = [
  {
    title: "Segment the queue",
    description:
      "Separate work by age, type, owner, demand source, service commitment, and escalation risk.",
  },
  {
    title: "Find the constraints",
    description:
      "Identify cycle-time drag, rework, capacity mismatch, handoff friction, policy friction, and reporting gaps.",
  },
  {
    title: "Prioritize recovery",
    description:
      "Turn findings into quick wins, recovery actions, leadership decisions, and a practical roadmap.",
  },
];

export default function BacklogKillKitPage() {
  return (
    <main id="main-content">
      <Breadcrumbs
        items={breadcrumbs}
      />
      <PageHeader subhead={product.summary} title={product.title}>
        <CtaButton href="/contact">{product.cta}</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Backlog is a risk signal
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Aging work usually points to a deeper operating mismatch:
              unclear demand, constrained capacity, weak ownership, rework,
              policy friction, or decisions that arrive too late. Backlog Kill
              exposes the drivers before leaders spend against the wrong
              problem.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <h2 className="text-xl font-black">Best-fit audience</h2>
            <ul className="mt-4 grid gap-3">
              {product.useCases?.map((useCase) => (
                <li className="border-l-2 border-signal pl-4 text-sm leading-6 text-slate-700" key={useCase}>
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-paper p-6 shadow-command">
            <h2 className="text-2xl font-black">Why usual fixes fail</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Overtime, new software, and blanket staffing requests do not fix
              a backlog when the real issue is intake, triage, rework, aging,
              ownership, or policy friction.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-paper p-6 shadow-command">
            <h2 className="text-2xl font-black">What Dan does</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dan turns the queue into evidence: what work exists, how old it
              is, where it stalls, who owns it, what risk is growing, and which
              recovery actions belong first.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            What the briefing includes
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            A compact review of the queue, flow, ownership model, recovery
            options, and executive decisions required to restore control.
          </p>
        </div>
        <div className="mt-8">
          <FrameworkSteps steps={diagnosticSteps} variant="dark" />
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Deliverables
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The output is direct: a diagnostic view of the backlog, the risk
              behind it, and a recovery roadmap leaders can act on immediately.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {product.deliverables?.map((deliverable) => (
              <div className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-semibold leading-6 text-charcoal" key={deliverable}>
                {deliverable}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FinalCTA
        body="Get a focused diagnostic of backlog drivers, aging risk, staffing pressure, ownership gaps, and recovery actions."
        cta={product.cta}
        href="/contact"
        title="Ready to understand what the backlog is hiding?"
      />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            description: product.metadata.description,
            brand: { "@type": "Person", name: site.name, url: site.url },
            category: "Backlog diagnostic service",
            url: absoluteUrl(product.href),
          },
          breadcrumbListJsonLd(breadcrumbs),
        ]}
      />
    </main>
  );
}
