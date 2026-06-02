import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { FrameworkSteps } from "@/components/ui/framework-steps";
import { OfferCard } from "@/components/ui/offer-card";
import { PageHeader } from "@/components/ui/page-header";
import { courses } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Academy | Lean Six Sigma + AI Training | Dan Feliciano",
  description:
    "Explore Dan Feliciano Academy courses in Lean Six Sigma + AI Yellow Belt, Green Belt, and Black Belt training for professionals and organizations.",
  path: "/academy",
});

const corporateTrainingSteps = [
  {
    title: "Align training to the work",
    description:
      "Focus examples, exercises, and projects on the operating problems your teams need to solve.",
  },
  {
    title: "Build practical capability",
    description:
      "Teach Lean Six Sigma, DMAIC, analytics, and AI assistance through usable templates and real scenarios.",
  },
  {
    title: "Connect learning to execution",
    description:
      "Tie training to projects, governance, coaching, and measurable improvement after the classroom.",
  },
];

export default function AcademyPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Lean Six Sigma + AI training for professionals, managers, analysts, and organizations that need improvement capability grounded in modern operating reality."
        title="Dan Feliciano Academy"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" href="/contact">
            Ask about corporate training
          </CtaButton>
          <CtaButton className="w-full sm:w-auto" href="/services" variant="secondary">
            Explore Advisory Services
          </CtaButton>
        </div>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Improvement training for AI-era operations
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The Academy connects Lean Six Sigma discipline with practical AI
              support, helping teams see work clearly, improve flow, analyze
              problems, document decisions, and lead projects with confidence.
            </p>
          </div>
          <div className="grid gap-3">
            {courses.map((course) => (
              <div
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-charcoal"
                key={course.href}
              >
                {course.title}: {course.duration}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Courses
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Choose a belt level based on role, project responsibility, and the
            improvement capability your team needs to build.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {courses.map((course) => (
            <OfferCard
              key={course.href}
              offer={{
                title: course.title,
                summary: course.summary,
                href: course.href,
                cta: course.cta,
                meta: course.duration,
              }}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Corporate training
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Training can be delivered for intact teams, leadership cohorts, or
            transformation groups that need a shared language for improvement,
            analytics, AI assistance, and measurable execution.
          </p>
        </div>
        <div className="mt-8">
          <FrameworkSteps steps={corporateTrainingSteps} variant="dark" />
        </div>
      </Section>

      <FinalCTA
        body="Build a training path that gives your people the methods, templates, and operating confidence to improve real work."
        cta="Ask about Academy training"
        href="/contact"
        title="Ready to build improvement capability?"
      />
    </main>
  );
}
