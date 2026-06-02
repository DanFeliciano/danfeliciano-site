import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
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
  title: "Contact | Book a Strategy Diagnostic | Dan Feliciano",
  description:
    "Contact Dan Feliciano to book a Strategy Diagnostic for operational strategy, AI automation, Lean Six Sigma, backlog recovery, training, or speaking.",
  path: "/contact",
});

const relatedLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Academy", href: "/academy" },
  { label: "Speaking", href: "/speaking" },
] as const satisfies readonly RelatedLink[];

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Share the operating challenge, timeline, and kind of support you are considering. The goal is a focused first conversation, not a sprawling intake process."
        title="Book a Strategy Diagnostic"
      >
        <CtaButton href="/services" variant="secondary">
          Review services first
        </CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Start with the problem
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Use the form to describe the work, backlog, strategy, AI,
              analytics, training, or speaking need you want to discuss. Dan
              will use that context to shape a practical next conversation.
            </p>
            <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-black">Contact alternatives</h2>
              <div className="mt-4 grid gap-3 text-sm font-semibold leading-6">
                <a
                  className="text-ink underline decoration-signal decoration-2 underline-offset-4"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
                <a
                  className="text-ink underline decoration-signal decoration-2 underline-offset-4"
                  href={site.linkedIn}
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
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
        body="Not sure which path fits? Review the core advisory offers before sending the inquiry."
        cta="Explore services"
        href="/services"
        title="Want to compare options first?"
      />
    </main>
  );
}
