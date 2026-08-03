import Link from "next/link";
import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import { pageHeroes } from "@/content/page-heroes";
import { bookingUrl, site } from "@/content/site";
import { absoluteUrl, createMetadata } from "@/lib/seo";

const path = "/operational-visibility-diagnostic";

export const metadata = createMetadata({
  title: "Operational Visibility Diagnostic | Dan Feliciano",
  description:
    "See how one critical flow really works, where work and decisions break down, what risk or cash is accumulating, and what leadership should fix first.",
  path,
  image: {
    url: "/operational-visibility-diagnostic-og.png",
    width: 1200,
    height: 630,
    alt: "Operational Visibility Diagnostic: see one critical flow and know what to fix first",
  },
});

const bestFitBuyers = [
  "Owner, CEO, COO, CFO, or business-unit leader",
  "Nonprofit executive or public-sector operator",
  "One material flow is creating recurring operational or financial friction",
  "A decision-maker will sponsor the work and attend the readout",
] as const;

const triggerEvents = [
  "A growing backlog or repeated customer escalation",
  "Cash or margin below expectation without a clear operating cause",
  "An owner bottleneck or recurring execution failure",
  "A stalled AI, automation, or software initiative",
  "Quality problems, staffing loss, or lender or board pressure",
] as const;

const process = [
  {
    number: "01",
    title: "Set the boundary",
    body: "Select one material flow and one representative real work item. Confirm the sponsor, participants, evidence, access limits, and decision the Diagnostic must support.",
  },
  {
    number: "02",
    title: "Trace the real work",
    body: "Review existing records and interview leadership and frontline participants to reconstruct intended work and what actually happens—including workarounds, queues, handoffs, exceptions, and rework.",
  },
  {
    number: "03",
    title: "Test the constraint",
    body: "Analyze decisions, information, rules, ownership, measures, risk, billing, and cash. Test the primary constraint and quantify consequences only where the evidence supports it.",
  },
  {
    number: "04",
    title: "Make the decision",
    body: "Deliver the map, findings, priorities, measures, and owned 30/60/90-day plan in an executive readout so leadership can decide what to address first and whether implementation is justified.",
  },
] as const;

const deliverables = [
  "Operational Visibility Map of the selected end-to-end flow",
  "Findings labeled by evidence strength, with gaps and contradictions visible",
  "Tested primary-constraint hypothesis",
  "Operational, financial, customer, capacity, and risk consequences where supportable",
  "Secondary Visibility Score to focus leadership attention",
  "Recommendations to eliminate, simplify, stabilize, measure, or automate",
  "Owned 30/60/90-day action plan",
  "Executive decision readout",
] as const;

const clientReadiness = [
  "Name an executive sponsor",
  "Select one material flow and one real work item",
  "Provide existing records without cleaning or recreating them",
  "Make agreed participants available",
  "Identify confidentiality, data, regulatory, or AI restrictions before evidence is shared",
  "Have decision-makers attend the executive readout",
] as const;

const boundaries = [
  "Implementation, staff augmentation, project management, or broad change management",
  "Automation or software development",
  "An enterprise-wide process inventory or a second flow",
  "Unlimited interviews, workshops, or executive readouts",
  "Substantial data cleaning, reconciliation, or construction of a new measurement system",
  "Legal, accounting, or compliance opinions",
  "Guaranteed savings, cash recovery, backlog reduction, or a predetermined AI answer",
] as const;

export default function OperationalVisibilityDiagnosticPage() {
  return (
    <main id="main-content">
      <PageHeader {...pageHeroes[path]} />

      <Section className="bg-white text-charcoal">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              Who this is for
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
              One consequential flow. One leader who needs a defensible next
              move.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This is for leaders who can name a recurring operating or
              financial problem but cannot yet see the system producing it. It
              is not for abstract interest in AI, process improvement, or a
              free outside opinion.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-paper p-5 shadow-command">
              <h3 className="text-xl font-black text-charcoal">Best-fit buyer</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                {bestFitBuyers.map((buyer) => (
                  <li className="border-l-2 border-signal pl-3" key={buyer}>
                    {buyer}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-paper p-5 shadow-command">
              <h3 className="text-xl font-black text-charcoal">
                Common trigger events
              </h3>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                {triggerEvents.map((trigger) => (
                  <li className="border-l-2 border-signal pl-3" key={trigger}>
                    {trigger}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="scroll-mt-24 bg-paper text-charcoal"
        id="scope"
        tabIndex={-1}
      >
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              The scope
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
              One critical flow from trigger to value.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The Diagnostic follows one end-to-end flow from the event that
              triggers the work through customer, mission, acceptance, billing,
              payment, funding, or another clear form of value realization.
              One representative real work item is the primary trace.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-command">
            <dl className="grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                  Timing
                </dt>
                <dd className="mt-2 text-base font-bold leading-7 text-charcoal">
                  About 10 business days after the start conditions are met.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                  Delivery
                </dt>
                <dd className="mt-2 text-base font-bold leading-7 text-charcoal">
                  Remote for the pilot; on-site work is separately scoped.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                  Pilot fee
                </dt>
                <dd className="mt-2 text-base font-bold leading-7 text-charcoal">
                  $5,000 for the first three signed and paid engagements.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                  Payment
                </dt>
                <dd className="mt-2 text-base font-bold leading-7 text-charcoal">
                  50% at signing; 50% due before the executive readout.
                </dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
              The delivery clock starts only after signature, initial payment,
              sponsor, flow boundary, representative work item, initial
              evidence, participant availability, and data restrictions are
              confirmed. Client-caused delays move the schedule.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-signal">
            How the work happens
          </p>
          <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Diagnosis before prescription.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The work reconstructs reality, tests the constraint, and separates
            what the evidence supports from what is only assumed. AI is not a
            promised answer.
          </p>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {process.map((step) => (
            <li
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              key={step.number}
            >
              <p className="text-sm font-black text-signal">{step.number}</p>
              <h3 className="mt-3 text-xl font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              What leadership receives
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Evidence, priorities, and an owned plan.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Material claims are labeled by evidence strength—verified fact,
              corroborated account, single-source account, hypothesis, unknown,
              or contradiction—so leadership can see what is defensible and
              what still needs proof.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((deliverable) => (
              <li
                className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-bold leading-6 text-charcoal shadow-command"
                key={deliverable}
              >
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-paper text-charcoal">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-command">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              Client readiness
            </p>
            <h2 className="mt-3 text-2xl font-black">
              What you must bring to the work
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              {clientReadiness.map((item) => (
                <li className="border-l-2 border-signal pl-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-command">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              Boundaries
            </p>
            <h2 className="mt-3 text-2xl font-black">
              What the $5,000 pilot does not include
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              {boundaries.map((item) => (
                <li className="border-l-2 border-slate-300 pl-3" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-6 text-slate-600">
          A second flow, additional interviews or readouts, substantial new data
          preparation, travel, implementation, or unrelated analysis requires
          written change control and may change the fee or schedule.
        </p>
      </Section>

      <Section
        className="scroll-mt-24 bg-white text-charcoal"
        id="backlog-application"
        tabIndex={-1}
      >
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-paper p-6 shadow-command md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              One focused application
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Backlog Kill Kit is Operational Visibility applied to aging work.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              When backlog is the visible symptom, the same bounded Diagnostic
              focuses on queues, aging, demand, capacity, handoffs, rework,
              ownership, decisions, and recovery priorities. It is not a
              competing diagnostic identity—and it does not promise backlog
              reduction before the cause is proven.
            </p>
          </div>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 text-sm font-black text-charcoal transition hover:border-signal focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-signal"
            href="/backlog-kill-kit"
          >
            See the backlog application
          </Link>
        </div>
      </Section>

      <section className="bg-ink px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-site gap-6 rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-command md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-signal">
              The next step
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Book a 30-minute fit conversation.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Bring one recent example, the consequence, what has already been
              tried, and why it matters now. The conversation tests fit,
              urgency, sponsor access, flow boundary, and whether the Diagnostic
              would support a real decision. It is not a free diagnosis.
            </p>
          </div>
          <CtaButton className="w-full md:w-auto" href={bookingUrl}>
            Book a Fit Conversation
          </CtaButton>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Operational Visibility Diagnostic",
          description:
            "A bounded ten-business-day diagnostic of one critical end-to-end flow, producing evidence-classified findings and an owned 30/60/90-day action plan.",
          provider: {
            "@type": "Person",
            name: site.name,
            url: site.url,
          },
          serviceType: "Operational diagnostic",
          areaServed: "US",
          offers: {
            "@type": "Offer",
            price: "5000",
            priceCurrency: "USD",
            url: bookingUrl,
            description:
              "Pilot fee for the first three signed and paid engagements.",
          },
          url: absoluteUrl(path),
        }}
      />
    </main>
  );
}
