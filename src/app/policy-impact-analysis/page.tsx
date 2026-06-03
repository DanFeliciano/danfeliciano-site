import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Policy Impact Analysis | Dan Feliciano",
  description:
    "Policy Impact Analysis translates bills, budgets, regulations, and public decisions into plain-English operational, financial, compliance, taxpayer, and accountability consequences.",
  path: "/policy-impact-analysis",
});

const analysisAreas = [
  "Who pays",
  "Who benefits",
  "Who administers it",
  "What new work is created",
  "What compliance burden is added",
  "What data is required",
  "What incentives change",
  "What costs are visible",
  "What costs are hidden",
  "What assumptions are weak",
  "What risks are being ignored",
  "What taxpayers, businesses, or citizens should understand",
] as const;

const deliverables = [
  "Bill impact brief",
  "Fiscal and operational risk analysis",
  "Taxpayer impact summary",
  "Candidate briefing memo",
  "Association/member education brief",
  "Testimony preparation support",
  "Public messaging support",
] as const;

const buyers = [
  "Associations",
  "Candidates",
  "Advocacy groups",
  "Business groups",
  "Lobbyists",
  "Donors",
  "Media platforms",
  "Civic organizations",
  "Public officials who need plain-English issue clarity",
] as const;

function ScanList({
  items,
  variant = "light",
}: {
  items: readonly string[];
  variant?: "light" | "dark";
}) {
  const itemClass =
    variant === "dark"
      ? "rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm font-bold leading-6 text-slate-100 shadow-command"
      : "rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold leading-6 text-charcoal shadow-command";

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li className={itemClass} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PolicyImpactAnalysisPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="A bill is not just a bill. It is a cost structure, workflow, compliance burden, and accountability system."
        title="Policy Impact Analysis"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" href="/contact">
            Request a Policy Impact Briefing
          </CtaButton>
          <CtaButton className="w-full sm:w-auto" href="/contact" variant="secondary">
            Book a Strategic Forensics Briefing
          </CtaButton>
        </div>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Translate the debate into consequences.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Legislation is often discussed in slogans, talking points, and
              fiscal notes. But every bill creates a chain of operational
              consequences: new responsibilities, reporting requirements,
              compliance burdens, incentives, costs, risks, and accountability
              gaps.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Policy Impact Analysis translates complexity into plain-English
              consequences.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">
              Core premise
            </p>
            <p className="mt-4 text-xl font-black leading-8 text-charcoal">
              Most policy debate stays political. Strategic Forensics examines
              what a bill, budget, regulation, or public decision actually does
              operationally, financially, and strategically.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              What the analysis examines
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The work follows the money, the administration, the compliance
              burden, and the accountability structure without turning the page
              into a partisan argument.
            </p>
          </div>
          <ScanList items={analysisAreas} variant="dark" />
        </div>
      </Section>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Deliverables
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Outputs are built for leaders who need credible issue clarity,
              taxpayer-conscious analysis, and practical briefing material.
            </p>
          </div>
          <ScanList items={deliverables} />
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Who this is for
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              For policy-aware leaders and organizations that need analysis
              serious enough to withstand questions from members, voters,
              taxpayers, reporters, boards, or public officials.
            </p>
          </div>
          <ScanList items={buyers} />
        </div>
      </Section>

      <FinalCTA
        body="Bring the bill, budget, regulation, fiscal note, or public decision into a serious Strategic Forensics review."
        cta="Request a Policy Impact Briefing"
        href="/contact"
        title="Need plain-English clarity before the policy decision hardens?"
      />
    </main>
  );
}
