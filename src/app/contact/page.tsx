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
  title: "Contact | Start a Conversation | Dan Feliciano",
  description:
    "Find the hidden risk. Clarify the decision. Fix the system. Request a Strategic Forensics Briefing, AI diagnostic, Policy Impact Analysis, or Backlog Kill review.",
  path: "/contact",
});

const relatedLinks = [
  { label: "Strategic Forensics", href: "/strategic-forensics" },
  { label: "AI + Operations", href: "/ai-process-redesign" },
  { label: "Policy Impact", href: "/policy-impact-analysis" },
  { label: "Backlog Kill", href: "/backlog-kill" },
  { label: "Briefings", href: "/briefings" },
] as const satisfies readonly RelatedLink[];

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Use this page to request a Strategic Forensics Briefing, discuss an AI Process Redesign Diagnostic, request Policy Impact Analysis, diagnose a backlog, or examine a decision-risk issue."
        title="Start with the decision, system, policy, backlog, or AI challenge you need to understand."
      >
        <CtaButton href="/strategic-forensics" variant="secondary">
          Review Strategic Forensics
        </CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Start with what needs to be understood
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Describe the decision, system, policy, backlog, AI issue, weak
              data, budget pressure, or operating failure you need to examine.
              Dan will use that context to shape a focused first conversation.
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
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {site.socialLinks.map((link) => (
                    <a
                      className="text-ink underline decoration-signal decoration-2 underline-offset-4"
                      href={link.href}
                      key={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
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
        body="Not sure which path fits? Start with the issue you need to understand and the first conversation can sort the right next step."
        cta="Explore Strategic Forensics"
        href="/strategic-forensics"
        title="Need a clearer frame before you send the inquiry?"
      />
    </main>
  );
}
