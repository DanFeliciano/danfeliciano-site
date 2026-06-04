import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { courses } from "@/content/site";
import { academyCourseItemListJsonLd, createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Train Your Team to Fix Work | Dan Feliciano Academy",
  description:
    "Lean Six Sigma + AI training for teams that need to solve problems, reduce waste, improve service, and use modern tools responsibly.",
  path: "/academy",
});

const learningCards = [
  {
    title: "See the work clearly",
    body:
      "Understand how work flows, where it slows down, and where waste or rework shows up.",
  },
  {
    title: "Solve the right problems",
    body:
      "Use practical Lean Six Sigma methods to move beyond symptoms and find root causes.",
  },
  {
    title: "Use data without getting lost in it",
    body:
      "Learn how to use measures, variation, trends, and simple analysis to make better decisions.",
  },
  {
    title: "Improve follow-through",
    body:
      "Build better habits around ownership, action plans, control plans, and sustainment.",
  },
  {
    title: "Use AI responsibly",
    body:
      "Learn where AI can help with documentation, analysis, brainstorming, communication, and workflow support, and where it should not replace judgment.",
  },
] as const;

const trainingBullets = [
  "Team cohorts",
  "Live workshops",
  "Project coaching",
  "Leadership alignment",
  "Practical templates",
  "Real-work examples",
  "Lean Six Sigma + AI integration",
] as const;

export default function AcademyPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Lean Six Sigma + AI training for teams that need to solve problems, reduce waste, improve service, and use modern tools responsibly."
        title="Train your team to fix work."
      >
        <CtaButton href="/contact">Ask About Team Training</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="max-w-3xl">
          <p className="text-base leading-7 text-slate-600">
            Teams do not just need more tools. They need better ways to see
            problems, understand work, use data, reduce waste, improve
            follow-through, and know when AI can help.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Dan Feliciano Academy teaches practical improvement skills for
            people who need to make work better, not just talk about
            improvement.
          </p>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            What your team learns
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {learningCards.map((card) => (
            <article
              className="rounded-lg border border-slate-200 bg-paper p-5 shadow-command"
              key={card.title}
            >
              <h3 className="text-lg font-black leading-6 text-charcoal">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-paper text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Courses
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Choose the belt level that matches the role, project
            responsibility, and problem-solving capability your team needs.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {courses.map((course) => (
            <article
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-command"
              key={course.href}
            >
              <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                {course.duration}
              </p>
              <h3 className="mt-3 text-lg font-black leading-6 text-charcoal">
                {course.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {course.summary}
              </p>
              <div className="mt-auto pt-5">
                <CtaButton className="w-full" href={course.href}>
                  {course.cta}
                </CtaButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Training built around your actual work
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              For organizations, Dan can tailor examples, exercises, project
              coaching, and leadership alignment around the work your team
              actually does. The goal is not just certification. The goal is
              better problem-solving, better follow-through, and measurable
              improvement.
            </p>
            <CtaButton className="mt-6" href="/contact">
              Ask About Team Training
            </CtaButton>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {trainingBullets.map((item) => (
              <li
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm font-bold leading-6 text-slate-100"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCTA
        body="Start with the skills your team needs to see stuck work, solve the right problems, and improve follow-through."
        cta="Ask About Team Training"
        href="/contact"
        title="Ready to train your team to fix work?"
      />
      <JsonLd data={academyCourseItemListJsonLd(courses)} />
    </main>
  );
}
