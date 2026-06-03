import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";

type RelatedLink = { label: string; href: SiteRoute };

export const metadata = createMetadata({
  title: "Terms | Dan Feliciano",
  description:
    "Plain-language terms for Dan Feliciano's website, informational content, advisory and training agreements, outcomes, intellectual property, and contact details.",
  path: "/terms",
});

const termsItems = [
  {
    title: "Informational content",
    body:
      "Website content is provided for general informational purposes. It is not legal, financial, technical, or operational advice for any specific organization unless a separate agreement says so.",
  },
  {
    title: "No guaranteed outcomes",
    body:
      "Operational results depend on context, data quality, leadership decisions, implementation discipline, and many conditions outside the website's control. No specific outcome is guaranteed by reading or using this site.",
  },
  {
    title: "Advisory and training agreements",
    body:
      "Consulting, advisory, training, speaking, productized diagnostics, and related work are subject to separate written agreement, scope, pricing, and terms.",
  },
  {
    title: "Intellectual property",
    body:
      "Website content, frameworks, templates, training materials, and related materials remain the intellectual property of their respective owners unless a separate agreement states otherwise.",
  },
  {
    title: "Contact",
    body:
      "Questions about these terms can be sent by email using the contact information on this site.",
  },
];

const relatedLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly RelatedLink[];

export default function TermsPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Plain-language terms for website content, advisory and training work, outcomes, intellectual property, and contact questions."
        title="Terms"
      >
        <CtaButton href="/contact" variant="secondary">
          Contact with questions
        </CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-4">
          {termsItems.map((item) => (
            <section
              className="rounded-lg border border-slate-200 bg-white p-5"
              key={item.title}
            >
              <h2 className="text-xl font-black">{item.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {item.body}
              </p>
            </section>
          ))}
          <p className="rounded-lg border border-slate-200 bg-white p-5 text-base leading-7 text-slate-600">
            Email:{" "}
            <a
              className="font-bold text-ink underline decoration-signal decoration-2 underline-offset-4"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <Container className="px-0">
          <div className="rounded-lg border border-slate-200 bg-paper p-6">
            <h2 className="text-2xl font-black">Related pages</h2>
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
        body="For scope, terms, and fit for advisory, training, speaking, or productized work, start with a focused inquiry."
        cta="Start a Conversation"
        href="/contact"
        title="Need terms for a specific engagement?"
      />
    </main>
  );
}
