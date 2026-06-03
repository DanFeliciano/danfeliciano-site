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

type YellowBeltCourse = Extract<
  (typeof courses)[number],
  { href: "/academy/lean-six-sigma-ai-yellow-belt" }
>;

type RelatedLink = { label: string; href: SiteRoute };

const course = courses.find(
  (item): item is YellowBeltCourse =>
    item.href === "/academy/lean-six-sigma-ai-yellow-belt",
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
  { label: "AI Process Redesign", href: "/ai-process-redesign" },
] as const satisfies readonly RelatedLink[];

export default function YellowBeltCoursePage() {
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
              Operating-risk foundation
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Yellow Belt gives teams a common language for seeing work,
              spotting waste, questioning weak data, and using AI as support
              instead of a shortcut around the real problem.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <h2 className="text-xl font-black">Duration</h2>
            <p className="mt-3 text-4xl font-black text-ink">
              {course.duration}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Built for foundational team capability and Yellow Belt
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
        body="Start with foundational Lean Six Sigma + AI skills your team can apply to weak data, rework, bottlenecks, and operating risk."
        cta={course.cta}
        href="/contact"
        title="Ready to build Yellow Belt diagnostic capability?"
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
