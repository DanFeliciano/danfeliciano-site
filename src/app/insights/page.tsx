import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { insightCards } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";

type RelatedLink = { label: string; href: SiteRoute };

export const metadata = createMetadata({
  title: "Insights | Strategic Forensics, AI, Policy, and Backlog Risk",
  description:
    "Read field notes from Dan Feliciano on Strategic Forensics, AI disruption, policy impact, budgets, backlogs, weak data, and operational risk.",
  path: "/insights",
});

const relatedLinks = [
  { label: "Strategic Forensics", href: "/strategic-forensics" },
  { label: "AI + Operations", href: "/ai-process-redesign" },
  { label: "Briefings", href: "/briefings" },
] as const satisfies readonly RelatedLink[];

export default function InsightsPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Practical writing on Strategic Forensics, AI disruption, policy complexity, weak data, budgets, backlogs, and operational risk."
        title="Insights for leaders facing complex decisions"
      >
        <CtaButton href="/contact">Ask a question</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Field notes on hidden risk
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Short reads for leaders who need to see the operating, financial,
            policy, and AI consequences before a decision hardens.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {insightCards.map((card) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-command"
              key={card.title}
            >
              <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                {card.status}
              </p>
              <h3 className="mt-3 text-lg font-black leading-6 text-charcoal">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {card.excerpt}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <Container className="px-0">
          <div className="rounded-lg border border-slate-200 bg-paper p-6">
            <h2 className="text-2xl font-black">Related paths</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-charcoal transition hover:border-signal hover:text-ink" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        body="Bring a current decision, risk, budget, AI, policy, or backlog question into a focused Strategic Forensics conversation."
        cta="Book a Strategic Forensics Briefing"
        href="/contact"
        title="Need a practical answer before the next decision?"
      />
    </main>
  );
}
