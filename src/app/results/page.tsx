import { Section } from "@/components/layout/section";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { pageHeroes } from "@/content/page-heroes";
import { caseStudies } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Results | Dan Feliciano",
  description:
    "Examples of improving flow, reducing waste, simplifying reporting, increasing capacity, strengthening decisions, and helping teams fix stuck work.",
  path: "/results",
});

const outcomeProof = [
  "Work moves faster",
  "Fewer tasks fall through the cracks",
  "Follow-up gets clearer",
  "Teams spend less time chasing status",
  "Leaders see what needs attention",
  "Owners get out of the middle of everything",
  "AI and automation are applied where they actually help",
  "Improvement becomes easier to sustain",
] as const;

export default function ResultsPage() {
  return (
    <main id="main-content">
      <PageHeader {...pageHeroes["/results"]} />

      <Section
        className="scroll-mt-24 bg-graphite py-10 text-white sm:py-12"
        id="results-evidence"
        tabIndex={-1}
      >
        <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-signal">
              Evidence of change
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
              The work shows up in practical ways.
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {outcomeProof.map((item) => (
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

      <Section className="bg-paper text-charcoal">
        <div className="max-w-3xl">
          <p className="text-base leading-7 text-slate-600">
            Good results usually start with a simple question: where is the work
            getting stuck?
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Dan&apos;s work focuses on practical outcomes: fewer delays, clearer
            ownership, better follow-up, simpler reporting, stronger decisions,
            improved service flow, and teams that know how to solve problems.
          </p>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="mt-0 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              className="rounded-lg border border-slate-200 bg-paper p-5 shadow-command"
              key={study.title}
            >
              <h2 className="text-xl font-black leading-7 text-charcoal">
                {study.title}
              </h2>
              <div className="mt-5 grid gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                    Challenge
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                    What changed
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {study.intervention}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                    Outcome
                  </p>
                  <p className="mt-2 border-l-2 border-signal pl-4 text-sm font-semibold leading-6 text-ink">
                    {study.outcomes}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <FinalCTA
        body="Start with a practical conversation about where work is stuck, what is costing time, and what to fix first."
        cta="Start an Operational Visibility Diagnostic"
        href="/operational-visibility-diagnostic"
        title="Want to know what could improve first in your business?"
      />
    </main>
  );
}
