import { Section } from "@/components/layout/section";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { pageHeroes } from "@/content/page-heroes";
import { speakingTopics } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Speaking & Workshops | Dan Feliciano",
  description:
    "Book Dan Feliciano for practical keynotes and workshops on stuck work, AI without the hype, operational excellence, strategy, Lean Six Sigma, and execution.",
  path: "/speaking",
});

const formats = [
  "Keynotes",
  "Executive briefings",
  "Half-day workshops",
  "Full-day workshops",
  "Leadership offsites",
  "Team training",
  "Virtual sessions",
] as const;

export default function SpeakingPage() {
  return (
    <main id="main-content">
      <PageHeader {...pageHeroes["/speaking"]} />

      <Section className="bg-paper text-charcoal">
        <div className="max-w-3xl">
          <p className="text-base leading-7 text-slate-600">
            Dan helps audiences make sense of complex change without burying
            them in buzzwords. His sessions translate strategy, AI, Lean Six
            Sigma, analytics, and operational excellence into practical
            decisions leaders and teams can use.
          </p>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Topics
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {speakingTopics.map((topic) => (
            <article
              className="rounded-lg border border-slate-200 bg-paper p-5 shadow-command"
              key={topic.title}
            >
              <h3 className="text-lg font-black leading-6 text-charcoal">
                {topic.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {topic.description}
              </p>
              <div className="mt-5">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                  Audience takeaways
                </p>
                <ul className="mt-3 grid gap-2">
                  {topic.takeaways.map((takeaway) => (
                    <li
                      className="border-l-2 border-signal pl-3 text-sm leading-6 text-slate-700"
                      key={takeaway}
                    >
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Available formats
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {formats.map((format) => (
              <li
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm font-bold leading-6 text-slate-100"
                key={format}
              >
                {format}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCTA
        body="Bring Dan in for a keynote, workshop, executive briefing, or team session that makes strategy, AI, and operational excellence useful."
        cta="Invite Dan to Speak"
        href="/contact"
        title="Need a practical session for your audience?"
      />
    </main>
  );
}
