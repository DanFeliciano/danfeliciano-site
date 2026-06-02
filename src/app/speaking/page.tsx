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
  title: "Speaking | Operational Excellence, AI, and Strategy | Dan Feliciano",
  description:
    "Book Dan Feliciano for keynotes, executive sessions, workshops, and leadership offsites on operational excellence, AI, strategy, service recovery, and measurable execution.",
  path: "/speaking",
});

const formats = [
  {
    title: "Keynotes",
    description:
      "Direct, practical talks for leaders and teams facing operational change, AI adoption, and execution pressure.",
  },
  {
    title: "Executive workshops",
    description:
      "Working sessions that help leadership teams translate ideas into operating cadence, decisions, and next actions.",
  },
  {
    title: "Leadership offsites",
    description:
      "Focused facilitation around strategy, transformation, backlog recovery, analytics, and governance.",
  },
];

const relatedLinks = [
  { label: "Services", href: "/services" },
  { label: "Academy", href: "/academy" },
  { label: "AI, Automation & Analytics", href: "/services/ai-automation-analytics" },
] as const satisfies readonly RelatedLink[];

export default function SpeakingPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Keynotes, workshops, and executive sessions for leaders who need a practical operating view of strategy, AI, analytics, service recovery, and measurable execution."
        title="Speaking for leaders who need operational clarity"
      >
        <CtaButton href="/contact">Plan a session</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Topics
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Sessions are built for executive teams, transformation groups,
            public-sector leaders, operators, and organizations trying to make
            AI, strategy, and improvement work in the real operating system.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {speakingTopics.map((topic) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-command"
              key={topic.title}
            >
              <h2 className="text-lg font-black leading-6">{topic.title}</h2>
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
            keynote to a working session with immediate operating outputs.
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
        body="Bring a practical operating lens to your next leadership meeting, conference, workshop, or transformation event."
        cta="Plan a speaking session"
        href="/contact"
        title="Need the room aligned around execution?"
      />
    </main>
  );
}
