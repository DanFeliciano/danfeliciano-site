import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About | Dan Feliciano",
  description:
    "Learn how Dan Feliciano uses Strategic Forensics to find hidden risk across business, government, operations, AI, finance, policy, and complex decisions.",
  path: "/about",
});

const credibilityPoints = [
  "Strategy and turnaround experience with financial and operational consequences in view.",
  "Operations and process improvement expertise grounded in how work actually moves.",
  "GE-certified Master Black Belt.",
  "Dartmouth Lean Six Sigma instructor background.",
  "AI, automation, analytics, and process redesign experience.",
  "Public and private sector work involving policy, operations, budgets, and execution risk.",
  "Policy and fiscal analysis for decisions with taxpayer, customer, or stakeholder impact.",
  "Media experience used as proof of clear communication for public, executive, and civic audiences.",
] as const;

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="Dan Feliciano helps leaders find what others miss inside complex decisions."
        title="About Dan Feliciano"
      >
        <CtaButton href="/contact">Start a Conversation</CtaButton>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Forensic analysis for decisions with consequences
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dan Feliciano helps leaders find what others miss inside complex
              decisions. His work combines strategy, operations, financial
              scrutiny, AI fluency, public-policy analysis, and plain-English
              communication.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dan&apos;s strength is forensic analysis: exposing hidden
              assumptions, weak data, broken workflows, fiscal risk, and
              execution problems before they become expensive failures.
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
        body="Bring the decision, system, policy, backlog, AI challenge, budget pressure, or operational failure into a focused Strategic Forensics conversation."
        cta="Start a Conversation"
        href="/contact"
        title="Need to understand what is hiding inside the decision?"
      />
    </main>
  );
}
