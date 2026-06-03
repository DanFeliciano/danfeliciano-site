import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { FrameworkSteps } from "@/components/ui/framework-steps";
import { PageHeader } from "@/components/ui/page-header";
import { speakingTopics } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";

type RelatedLink = { label: string; href: SiteRoute };

export const metadata = createMetadata({
  title: "Strategic Forensics Briefings | Dan Feliciano",
  description:
    "Book Dan Feliciano for Strategic Forensics briefings that turn complex issues into plain-English consequences, risks, and next actions.",
  path: "/speaking",
});

const formats = [
  {
    title: "Strategic briefings",
    description:
      "Focused 60-90 minute sessions that expose hidden risk, financial consequences, and practical next actions.",
  },
  {
    title: "Executive workshops",
    description:
      "Working sessions that pressure-test decisions, assumptions, data, policy impact, and execution risk.",
  },
  {
    title: "Board and public-decision sessions",
    description:
      "Plain-English analysis for rooms that need consequences, not talking points.",
  },
];

const relatedLinks = [
  { label: "Strategic Forensics", href: "/strategic-forensics" },
  { label: "AI + Operations", href: "/ai-process-redesign" },
  { label: "Policy Impact", href: "/policy-impact-analysis" },
] as const satisfies readonly RelatedLink[];

export default function SpeakingPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Focused briefings, workshops, and executive sessions for leaders who need to understand what a complex issue actually means."
        title="Strategic Forensics Briefings"
      >
        <CtaButton href="/contact">Book a briefing</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Topics
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Sessions are built for executives, public-sector leaders,
            candidates, associations, boards, and organizations facing AI,
            policy, budget, backlog, data, or operational risk.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {speakingTopics.map((topic) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-command"
              key={topic.title}
            >
              <h3 className="text-lg font-black leading-6">{topic.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Formats
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Bring Dan in for the level of depth the room needs, from a sharp
            briefing to a working session with practical decision outputs.
          </p>
        </div>
        <div className="mt-8">
          <FrameworkSteps steps={formats} variant="dark" />
        </div>
      </Section>

      <Section className="bg-paper text-charcoal">
        <Container className="px-0">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black">Related paths</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link className="rounded-md border border-slate-200 px-4 py-3 text-sm font-bold text-charcoal transition hover:border-signal hover:text-ink" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        body="Bring a complex issue into a focused briefing and leave with consequences, risks, and next actions."
        cta="Book a Strategic Forensics Briefing"
        href="/contact"
        title="Need the room clear on what the decision really means?"
      />
    </main>
  );
}
