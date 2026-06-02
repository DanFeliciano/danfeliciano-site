import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { OfferCard } from "@/components/ui/offer-card";
import { PageHeader } from "@/components/ui/page-header";
import { products } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Products | Dan Feliciano",
  description:
    "Explore Dan Feliciano's productized diagnostics, policy intelligence, Lean Six Sigma and AI training, and practical operating tools for leaders who need momentum fast.",
  path: "/products",
});

const productPrinciples = [
  "Fixed-scope entry points for leaders who need evidence before a larger engagement.",
  "Executive-ready outputs built around decisions, ownership, and next actions.",
  "Practical diagnostics that expose constraints, risks, and opportunities without months of delay.",
];

export default function ProductsPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Productized diagnostics, intelligence briefs, and training paths for leaders who need focused momentum without a sprawling engagement."
        title="Products for faster operating clarity"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" href="/contact">
            Request a Productized Offer
          </CtaButton>
          <CtaButton className="w-full sm:w-auto" href="/services" variant="secondary">
            Explore Services
          </CtaButton>
        </div>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Focused offers, useful outputs
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              These offers are built for leaders who need a clear diagnostic,
              brief, or training path before committing to a broader
              transformation program.
            </p>
          </div>
          <div className="grid gap-3">
            {productPrinciples.map((principle) => (
              <div
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-charcoal"
                key={principle}
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Productized offers
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Start with the problem you need to understand: backlog, policy
            change, or team capability. Each path creates a concrete next step.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <OfferCard
              key={product.slug}
              offer={{
                title: product.title,
                summary: product.summary,
                href: product.href,
                cta: product.cta,
                meta:
                  "deliverables" in product
                    ? product.deliverables.slice(0, 3).join(" / ")
                    : undefined,
              }}
            />
          ))}
        </div>
      </Section>

      <FinalCTA
        body="Choose a focused diagnostic or brief when the next decision needs evidence, structure, and a clear path forward."
        cta="Request a Productized Offer"
        href="/contact"
        title="Need clarity before a bigger move?"
      />
    </main>
  );
}
