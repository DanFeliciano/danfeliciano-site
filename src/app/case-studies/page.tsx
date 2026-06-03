import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { caseStudies } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";

type RelatedLink = { label: string; href: SiteRoute };

export const metadata = createMetadata({
  title: "Results | Strategic Forensics Case Themes | Dan Feliciano",
  description:
    "Review anonymized case study themes from Strategic Forensics, operational recovery, public-sector process work, service redesign, and decision support.",
  path: "/case-studies",
});

const relatedLinks = [
  { label: "Backlog Kill", href: "/products/backlog-kill-kit" },
  { label: "Strategic Forensics", href: "/services" },
  { label: "AI + Operations", href: "/services/ai-automation-analytics" },
] as const satisfies readonly RelatedLink[];

export default function CaseStudiesPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Anonymized examples from complex environments where hidden risk, weak data, broken flow, and unclear ownership had to be made visible."
        title="Results from complex decision and operating work"
      >
        <CtaButton href="/contact">Discuss your operating challenge</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Case study themes
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Client details are intentionally anonymized. The pattern is
            consistent: make the work visible, clarify ownership, create the
            management rhythm, and give leaders decision-ready evidence.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-command"
              key={study.title}
            >
              <h3 className="text-lg font-black leading-6 text-charcoal">
                {study.title}
              </h3>
              <div className="mt-4 grid gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                    Challenge
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                    Intervention
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {study.intervention}
                  </p>
                </div>
                <p className="border-l-2 border-signal pl-4 text-sm font-semibold leading-6 text-ink">
                  {study.outcomes}
                </p>
              </div>
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
        body="If the decision is stuck, unclear, risky, aging, or hard to govern, start with what it is hiding."
        cta="Book a Strategic Forensics Briefing"
        href="/contact"
        title="Need a clearer read in your environment?"
      />
    </main>
  );
}
