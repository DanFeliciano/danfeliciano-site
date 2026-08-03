import { Section } from "@/components/layout/section";
import { FinalCTA } from "@/components/ui/final-cta";
import { OfferCard } from "@/components/ui/offer-card";
import { PageHeader } from "@/components/ui/page-header";
import { pageHeroes } from "@/content/page-heroes";
import { products } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Briefings and Diagnostics | Dan Feliciano",
  description:
    "Focused Strategic Forensics briefings, Policy Impact Analysis, Backlog Kill diagnostics, and operational-risk training for leaders who need clarity before expensive decisions.",
  path: "/products",
});

const productPrinciples = [
  "Fixed-scope entry points for leaders who need the hidden risk before the larger move.",
  "Executive-ready outputs built around consequences, tradeoffs, and next actions.",
  "Practical diagnostics that expose assumptions, weak data, costs, constraints, and execution risk.",
];

export default function ProductsPage() {
  return (
    <main id="main-content">
      <PageHeader {...pageHeroes["/products"]} />

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Focused offers, decision-grade outputs
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              These offers are built for leaders who need to understand cost,
              risk, compliance, workflow, and stakeholder consequences before
              committing money, time, or public credibility.
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

      <Section
        className="scroll-mt-24 bg-white text-charcoal"
        id="focused-diagnostics"
        tabIndex={-1}
      >
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Fixed-scope ways to find the risk
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Start with the decision you need to understand: backlog, policy
            impact, AI process risk, or team capability. Each path shows what
            is hiding, who is affected, and what should happen next.
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
        body="Choose a focused diagnostic or brief when the next decision needs hidden risk, consequences, tradeoffs, and a clear path forward."
        cta="Start a Conversation"
        href="/contact"
        title="Need clarity before the expensive move?"
      />
    </main>
  );
}
