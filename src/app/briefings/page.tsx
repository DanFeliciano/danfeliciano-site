import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Strategic Forensics Briefings | Dan Feliciano",
  description:
    "Focused briefings that turn complex issues into plain-English consequences, risks, and next actions.",
  path: "/briefings",
});

const formatItems = [
  "60-90 minutes",
  "Plain-English issue framing",
  "Risks, consequences, and tradeoffs",
  "Operational and financial implications",
  "Questions leaders should be asking",
  "Recommended next actions",
  "Can be delivered virtually or in person",
] as const;

const audiences = [
  "Business owners",
  "Boards",
  "Leadership teams",
  "Chambers",
  "Associations",
  "Candidates",
  "Civic groups",
  "Municipal leaders",
  "Media platforms",
  "Nonprofit leaders",
] as const;

const topics = [
  "AI Reality Check for Leaders",
  "What This Bill Actually Means",
  "Why Bad Data Creates Bad Government",
  "The Hidden Cost of Backlogs",
  "The Operational Truth Behind Budget Problems",
  "Why AI Is Not a Strategy",
  "How to Find Hidden Waste Before It Becomes a Crisis",
  "What AI Means for Small Business Operations",
  "The Taxpayer Impact Hidden Inside Policy Decisions",
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

export default function BriefingsPage() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="A focused briefing for leaders who need clarity before making expensive decisions."
        title="Strategic Forensics Briefings"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" href="/contact">
            Book a Strategic Forensics Briefing
          </CtaButton>
          <CtaButton className="w-full sm:w-auto" href="/contact" variant="secondary">
            Start a Conversation
          </CtaButton>
        </div>
      </PageHeader>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              The easiest first step into Strategic Forensics.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Not every organization needs a full diagnostic immediately.
              Sometimes leaders first need a sharp, plain-English briefing that
              frames the issue, exposes hidden risks, clarifies consequences,
              and identifies the right next questions.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-command">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">
              Core premise
            </p>
            <p className="mt-4 text-xl font-black leading-8 text-charcoal">
              A briefing gives leaders a fast, serious read before they commit
              to a full diagnostic, public position, budget move, AI initiative,
              policy decision, or service fix.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-paper p-6 shadow-command">
            <h2 className="text-2xl font-black">Why usual briefings fail</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Topic presentations explain the issue. Strategic Forensics
              Briefings pressure-test what the issue means in front of the
              room: weak assumptions, financial exposure, operational
              consequences, policy impact, AI misuse, and the next questions
              leaders should ask.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-paper p-6 shadow-command">
            <h2 className="text-2xl font-black">What Dan does</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Dan turns a complex issue into plain-English consequences,
              tradeoffs, risks, and next actions so the audience leaves with a
              sharper decision frame, not a motivational talk.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Briefing format
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Focused enough to fit a busy leadership calendar, serious enough
              to leave the room with sharper questions and next actions.
            </p>
          </div>
          <ScanList items={formatItems} variant="dark" />
        </div>
      </Section>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Who briefings are for
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              For leaders and public-facing groups that need a clear read
              before deciding whether a deeper diagnostic is the right move.
            </p>
          </div>
          <ScanList items={audiences} />
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Example briefing topics
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Topics are adapted to the decision, audience, sector, and stakes
              in front of the room.
            </p>
          </div>
          <ScanList items={topics} />
        </div>
      </Section>

      <FinalCTA
        body="Start with a focused briefing when the issue is serious, the stakes are real, and the next move is not yet clear."
        cta="Book a Strategic Forensics Briefing"
        href="/contact"
        title="Need clarity before committing to the full diagnostic?"
      />
    </main>
  );
}
