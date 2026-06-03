import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About | Dan Feliciano",
  description:
    "Learn how Dan Feliciano brings Strategic Forensics to complex decisions involving AI disruption, policy impact, operational failure, weak data, backlogs, budgets, and financial risk.",
  path: "/about",
});

const credibilityPoints = [
  "Strategic analysis with financial and operational consequences in view.",
  "Plain-English communication for leaders who need the real tradeoffs.",
  "AI-aware process thinking without tool-first hype.",
  "Experience across public-sector, healthcare, finance, service, manufacturing, logistics, and complex operations.",
] as const;

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Dan Feliciano helps leaders find what others miss inside complex decisions before hidden risk becomes expensive failure."
        title="About Dan Feliciano"
      >
        <CtaButton href="/contact">Book a Strategic Forensics Briefing</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Blunt analysis for decisions with consequences
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Strategic Forensics combines practical strategy, operational
              reality, financial scrutiny, policy awareness, AI fluency, and
              plain-English communication. The point is not to make complexity
              sound impressive. The point is to make the decision clearer.
            </p>
          </div>
          <div className="grid gap-3">
            {credibilityPoints.map((point) => (
              <div
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold leading-6 text-charcoal"
                key={point}
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FinalCTA
        body="Bring the decision, the budget, the policy, the backlog, or the AI question into a focused Strategic Forensics briefing."
        cta="Start a Conversation"
        href="/contact"
        title="Need a clearer read before the decision gets expensive?"
      />
    </main>
  );
}
