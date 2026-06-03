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
  title: "Privacy Policy | Dan Feliciano",
  description:
    "Plain-language privacy policy for Dan Feliciano's website, inquiry form information, personal information use, and privacy contact details.",
  path: "/privacy",
});

const privacyItems = [
  {
    title: "Information collected",
    body:
      "When you send an inquiry, the site may collect the information you provide, including name, email, organization, area of interest, timeline, and the problem you describe.",
  },
  {
    title: "How inquiry information is used",
    body:
      "Inquiry information is used to understand your request, respond to you, prepare for a conversation, and manage potential Strategic Forensics, diagnostic, training, briefing, or related work.",
  },
  {
    title: "No sale of personal information",
    body:
      "Personal information submitted through the inquiry process is not sold. Information may be handled by ordinary service providers used to operate the website and respond to requests.",
  },
  {
    title: "Privacy questions",
    body:
      "For privacy questions or requests about information you submitted, contact the site directly by email.",
  },
];

const relatedLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly RelatedLink[];

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="A plain-language summary of how inquiry information is collected and used on this website."
        title="Privacy Policy"
      >
        <CtaButton href="/contact" variant="secondary">
          Send a Privacy Question
        </CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-4">
          {privacyItems.map((item) => (
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
        body="Send questions about this policy or previously submitted inquiry information through the contact page."
        cta="Start a Conversation"
        href="/contact"
        title="Have a privacy question?"
      />
    </main>
  );
}
