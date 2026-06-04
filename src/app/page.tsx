import { OperatingCommandVisual } from "@/components/visuals/operating-command-visual";
import { Container } from "@/components/layout/container";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { ProofStrip } from "@/components/ui/proof-strip";
import { homepage, insightCards } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Dan Feliciano | Fix What Is Slowing Your Business Down",
  description:
    "Dan Feliciano helps business owners and operators find bottlenecks, recover lost time, improve follow-up, and use AI or automation where it actually makes work easier.",
  path: "/",
});

const painPoints = [
  {
    title: "Work is piling up",
    body: "For backlog, delays, missed handoffs, aging tasks, and work that keeps getting stuck.",
    cta: "Kill the Backlog",
    href: "/backlog-kill-kit",
  },
  {
    title: "We are wasting too much time",
    body: "For repetitive admin, manual reporting, status chasing, duplicate entry, and tasks that should not take this long.",
    cta: "Find Time-Saving Automation",
    href: "/ai-time-saver-sprint",
  },
  {
    title: "Customers are slipping through the cracks",
    body: "For slow follow-up, missed leads, inconsistent communication, weak retention, and unclear ownership.",
    cta: "Fix Follow-Up",
    href: "/what-i-fix",
  },
  {
    title: "Everything depends on me",
    body: "For owners who are tired of being the bottleneck, traffic cop, reminder system, and final decision point for everything.",
    cta: "Build an Owner Operating System",
    href: "/owner-operating-system",
  },
  {
    title: "My team needs better problem-solving skills",
    body: "For teams that need to reduce waste, improve service, solve problems, and use AI responsibly.",
    cta: "Train the Team",
    href: "/academy",
  },
  {
    title: "I need to understand policy or regulatory change",
    body: "For institutions, associations, and policy-sensitive organizations that need decision-ready analysis.",
    cta: "Explore Policy Forensics",
    href: "/policy-forensics",
  },
] as const satisfies readonly {
  title: string;
  body: string;
  cta: string;
  href: SiteRoute;
}[];

const howDanHelps = [
  {
    title: "Find the friction",
    body: "Map where time, money, customers, decisions, or work are getting stuck.",
  },
  {
    title: "Fix the system",
    body: "Redesign the workflow, clarify ownership, remove waste, and create a better operating rhythm.",
  },
  {
    title: "Use the right tools",
    body: "Apply AI, automation, analytics, Lean Six Sigma, training, or strategy where they create measurable value.",
  },
] as const;

const starterOffers = [
  {
    title: "Bottleneck Diagnostic",
    body:
      "A focused review to identify where work is getting stuck, where time is being lost, and what to fix first.",
    href: "/contact",
  },
  {
    title: "Backlog Kill Kit",
    body:
      "Find out why work is piling up, what is aging, where handoffs are failing, and what recovery path makes sense.",
    href: "/backlog-kill-kit",
  },
  {
    title: "AI Time Saver Sprint",
    body:
      "Identify repetitive tasks, manual reporting, missed follow-up, and customer communication gaps where AI or automation can save real time.",
    href: "/ai-time-saver-sprint",
  },
  {
    title: "90-Day Operations Reset",
    body:
      "Stabilize a chaotic operation, reduce delays, clarify ownership, and install a rhythm that keeps the business moving.",
    href: "/operations-reset",
  },
  {
    title: "Owner Operating System",
    body:
      "Build clearer priorities, better follow-up, simple metrics, decision rules, and a weekly rhythm that reduces owner dependency.",
    href: "/owner-operating-system",
  },
  {
    title: "Dan Feliciano Academy",
    body:
      "Train your team to solve problems, improve work, reduce waste, and use AI responsibly.",
    href: "/academy",
  },
] as const satisfies readonly {
  title: string;
  body: string;
  href: SiteRoute;
}[];

const outcomeProof = [
  "Reduced delays",
  "Improved follow-up",
  "Simplified reporting",
  "Increased capacity",
  "Improved service flow",
  "Strengthened decision-making",
  "Built problem-solving capability",
  "Improved operating discipline",
] as const;

const credentials = [
  "25+ years of experience",
  "GE Six Sigma Master Black Belt background",
  "Experience across healthcare, public sector, finance, manufacturing, logistics, and service operations",
  "AI, automation, analytics, Lean Six Sigma, and strategy expertise",
] as const;

export default function HomePage() {
  const featuredInsights = insightCards.slice(0, 3);

  return (
    <main id="main-content">
      <section className="bg-ink text-white">
        <Container>
          <div className="grid min-w-0 gap-5 py-6 sm:gap-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-12">
            <div className="min-w-0">
              <h1 className="max-w-4xl text-balance text-[1.95rem] font-black leading-[2.3rem] tracking-normal sm:text-5xl sm:leading-tight">
                {homepage.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-200 sm:mt-5 sm:text-lg sm:leading-8">
                {homepage.subhead}
              </p>
              <p className="mt-4 hidden max-w-2xl text-base leading-7 text-slate-300 sm:block">
                {homepage.body}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <CtaButton className="w-full sm:w-auto" href="/contact">
                  Find My Bottleneck
                </CtaButton>
                <CtaButton
                  className="w-full sm:w-auto"
                  href="/what-i-fix"
                  variant="secondary"
                >
                  See How Dan Helps
                </CtaButton>
              </div>
            </div>

            <OperatingCommandVisual />
          </div>
        </Container>
      </section>

      <ProofStrip items={homepage.proof} />

      <section className="bg-paper py-16 text-charcoal sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              You do not need more buzzwords. You need the work to flow.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Maybe customers are waiting too long. Maybe your team is buried
              in manual follow-up. Maybe everything still runs through you.
              Maybe you know AI could help, but you are not sure where to
              start.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The first step is not buying software. The first step is finding
              where the business is leaking time, money, attention, and
              opportunity.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-charcoal sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Choose the problem you want to solve first.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Start with the pain you can feel. The method comes after the
              bottleneck is visible.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {painPoints.map((point) => (
              <article
                className="rounded-lg border border-slate-200 bg-paper p-5 shadow-command"
                key={point.title}
              >
                <h3 className="text-lg font-black leading-6 text-charcoal">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {point.body}
                </p>
                <CtaButton className="mt-5 w-full" href={point.href}>
                  {point.cta}
                </CtaButton>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-graphite py-16 text-white sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              First we find the stuck work. Then we fix what matters.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The work starts with what is slow, repeated, missed, or too
              dependent on one person. Then the fix becomes much easier to
              choose.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {howDanHelps.map((step) => (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                key={step.title}
              >
                <h3 className="text-xl font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 text-charcoal sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Practical ways to get started
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Pick the entry point that matches the headache in front of you.
              Each path is built to create clearer work, fewer delays, and a
              more manageable business.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {starterOffers.map((offer) => (
              <article
                className="flex h-full min-h-48 flex-col rounded-lg border border-slate-200 bg-white p-5 text-charcoal shadow-command"
                key={offer.title}
              >
                <h3 className="text-balance text-lg font-black leading-6">
                  {offer.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {offer.body}
                </p>
                <div className="mt-auto pt-5">
                  <CtaButton className="w-full" href={offer.href}>
                    See How Dan Helps
                  </CtaButton>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                Strategy is not a slide deck. It is knowing what to say yes and no to.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Most businesses do not struggle because they lack goals. They
                struggle because everything becomes urgent, every opportunity
                looks equal, and no one is clear about what matters most.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Dan helps turn operational pain into better choices: what to
                fix, what to stop, what to automate, what to measure, and what
                to focus on next.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "What to fix",
                "What to stop",
                "What to automate",
                "What to measure",
                "What to focus on next",
                "What can wait",
              ].map((item) => (
                <div
                  className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-bold leading-6 text-charcoal"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                AI should save time, not create another project.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                AI is useful when it helps real work move faster, better, or
                with less manual effort. Before recommending tools, Dan helps
                identify where the business is losing time and which workflows
                are worth automating.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {featuredInsights.map((card) => (
                <article
                  className="rounded-lg border border-slate-200 bg-white p-5"
                  key={card.title}
                >
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                    {card.status}
                  </p>
                  <h3 className="mt-3 text-lg font-black leading-6 text-charcoal">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {card.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 text-charcoal sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
                Practical experience. Measurable work.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The proof should show up in how the work moves: fewer delays,
                clearer follow-up, simpler reporting, better service, and more
                capacity to solve the right problems.
              </p>
              <CtaButton className="mt-6" href="/results">
                See Results
              </CtaButton>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {outcomeProof.map((item) => (
                  <div
                    className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-bold leading-6 text-charcoal"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {credentials.map((item) => (
                  <div
                    className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold leading-6 text-slate-700"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA
        body="Start with a practical conversation about where work is stuck, what is costing time, and what to fix first."
        cta="Start with a Bottleneck Diagnostic"
        href="/contact"
        title="Ready to find what is slowing your business down?"
      />
    </main>
  );
}
