import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { courses } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";
import {
  academyProviderJsonLd,
  absoluteUrl,
  breadcrumbListJsonLd,
  createMetadata,
} from "@/lib/seo";

type BlackBeltCourse = Extract<
  (typeof courses)[number],
  { href: "/academy/lean-six-sigma-ai-black-belt" }
>;

type RelatedLink = { label: string; href: SiteRoute };

const course = courses.find(
  (item): item is BlackBeltCourse =>
    item.href === "/academy/lean-six-sigma-ai-black-belt",
)!;

export const metadata = createMetadata({
  ...course.metadata,
  path: course.href,
});

const breadcrumbs = [
  { label: "Academy", href: "/academy" },
  { label: course.title, href: course.href },
] as const satisfies readonly RelatedLink[];

const relatedLinks = [
  { label: "Academy overview", href: "/academy" },
  { label: "Green Belt", href: "/academy/lean-six-sigma-ai-green-belt" },
  { label: "AESOP Strategy & Governance", href: "/services/aesop-strategy-governance" },
  { label: "AI, Automation & Analytics", href: "/services/ai-automation-analytics" },
] as const satisfies readonly RelatedLink[];

export default function BlackBeltCoursePage() {
  return (
    <main id="main-content">
      <Breadcrumbs
        items={breadcrumbs}
      />
      <PageHeader subhead={course.summary} title={course.title}>
        <CtaButton href="/contact">{course.cta}</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Course snapshot
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Black Belt develops advanced improvement leaders who can manage
              complex projects, mentor teams, connect Lean Six Sigma to AI and
              analytics, and build transformation governance.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <h2 className="text-xl font-black">Duration</h2>
            <p className="mt-3 text-4xl font-black text-ink">
              {course.duration}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Built for advanced project leadership, mentoring, and Black Belt
              certification preparation.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Objectives
            </h2>
            <ul className="mt-6 grid gap-3">
              {course.objectives.map((objective) => (
                <li className="border-l-2 border-signal pl-4 text-sm leading-6 text-slate-700" key={objective}>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Who it is for
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {course.audience.map((item) => (
                <div className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-semibold leading-6" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
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
        body="Prepare advanced improvement leaders to guide complex transformation with Lean Six Sigma + AI."
        cta={course.cta}
        href="/contact"
        title="Ready to build Black Belt capability?"
      />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.title,
            description: course.metadata.description,
            provider: academyProviderJsonLd(),
            timeRequired: course.durationIso,
            url: absoluteUrl(course.href),
          },
          breadcrumbListJsonLd(breadcrumbs),
        ]}
      />
    </main>
  );
}
