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

type PolicyForensics = Extract<
  (typeof products)[number],
  { slug: "policy-forensics" }
>;

type BreadcrumbLink = { label: string; href: SiteRoute };

const product = products.find(
  (item): item is PolicyForensics => item.slug === "policy-forensics",
)!;

export const metadata = createMetadata({
  ...product.metadata,
  path: product.href,
});

const breadcrumbs = [
  { label: "Products", href: "/products" },
  { label: product.title, href: product.href },
] as const satisfies readonly BreadcrumbLink[];

const analysisSteps = [
  {
    title: "Decode the policy",
    description:
      "Translate legislative, regulatory, budget, or institutional language into practical operating implications.",
  },
  {
    title: "Map the risk",
    description:
      "Identify affected stakeholders, decisions, timelines, operational pressure points, and reputational exposure.",
  },
  {
    title: "Brief the decision",
    description:
      "Deliver a nonpartisan executive view of what changes, what matters, and what leaders should do next.",
  },
];

export default function PolicyForensicsPage() {
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
              Policy becomes operational quickly
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Proposed laws, regulations, budget decisions, and institutional
              policy shifts can become operational, financial, and reputational
              surprises. Policy Forensics gives leaders a nonpartisan read on
              what is changing and what it means for execution.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <h2 className="text-xl font-black">Best-fit use cases</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {product.useCases?.map((useCase) => (
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
            What the brief includes
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The work turns dense policy movement into a clear executive view of
            exposure, operational impact, stakeholders, and decisions.
          </p>
        </div>
        <div className="mt-8">
          <FrameworkSteps steps={analysisSteps} variant="dark" />
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Deliverables
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The output is built for leaders who need to understand impact,
              brief stakeholders, and choose the next institutional response.
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
        body="Translate policy movement into institutional risk, operational impact, and executive-ready next steps."
        cta={product.cta}
        href="/contact"
        title="Need a nonpartisan policy brief?"
      />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            description: product.metadata.description,
            brand: { "@type": "Person", name: site.name, url: site.url },
            category: "Policy intelligence service",
            url: absoluteUrl(product.href),
          },
          breadcrumbListJsonLd(breadcrumbs),
        ]}
      />
    </main>
  );
}
