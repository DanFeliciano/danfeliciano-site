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
  title: "Insights | Dan Feliciano",
  description:
    "Read practical notes from Dan Feliciano on bottlenecks, backlogs, AI, automation, policy risk, and fixing work that slows businesses down.",
  path: "/insights",
});

const relatedLinks = [
  { label: "What I Fix", href: "/what-i-fix" },
  { label: "AI Time Saver Sprint", href: "/ai-time-saver-sprint" },
  { label: "Policy Forensics", href: "/policy-forensics" },
  { label: "Backlog Kill Kit", href: "/backlog-kill-kit" },
  { label: "Find My Bottleneck", href: "/contact" },
] as const satisfies readonly RelatedLink[];

export default function InsightsPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Practical writing on bottlenecks, backlogs, AI, automation, policy risk, and the work that slows businesses down."
        title="Insights for owners and operators"
      >
        <CtaButton href="/contact">Find My Bottleneck</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Field notes on stuck work
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Short reads for people who need to see where time, money, customers,
            or control are leaking before a problem gets expensive.
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
        body="Bring the work, follow-up, backlog, AI, policy, or owner-bottleneck problem that keeps coming back."
        cta="Find My Bottleneck"
        href="/contact"
        title="Need a practical answer before the next fix?"
      />
    </main>
  );
}
