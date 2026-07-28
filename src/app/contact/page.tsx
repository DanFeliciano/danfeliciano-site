import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/ui/page-header";
import { pageHeroes } from "@/content/page-heroes";
import { contactEmail } from "@/lib/contact";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Dan Feliciano | Operational Visibility",
  description:
    "Tell Dan Feliciano what is stuck, delayed, confusing, costly, or too dependent on one person. Find the right diagnostic or practical intervention.",
  path: "/contact",
});

const goodReasons = [
  "Work is piling up and no one is sure why",
  "Follow-up is inconsistent",
  "Customers or internal teams are waiting too long",
  "Too much depends on the owner",
  "Reporting or admin work takes too much time",
  "You want to use AI, but need to know where it actually helps",
  "Your team needs practical problem-solving capability",
] as const;

const nextSteps = [
  {
    title: "Share what is stuck",
    body:
      "Tell Dan where work, follow-up, decisions, customers, or tasks are slowing down.",
  },
  {
    title: "Clarify the real cause",
    body:
      "Dan looks for the pattern underneath the symptoms: handoffs, ownership, rework, missing rules, manual effort, unclear priorities, or bad fit for tools.",
  },
  {
    title: "Decide the right next step",
    body:
      "The next step may be an Operational Visibility Diagnostic, Backlog Kill Kit, AI Time Saver Sprint, Operations Reset, Owner Operating System, training, or a different practical recommendation.",
  },
] as const;

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHeader {...pageHeroes["/contact"]} />

      <Section
        className="scroll-mt-24 bg-paper text-charcoal"
        id="describe-the-problem"
        tabIndex={-1}
      >
        <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Start with the problem you can see.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              You do not need to know whether the answer is strategy, AI,
              automation, Lean Six Sigma, training, or process redesign. Start
              with the problem you can see.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Use this form to share where work is slowing down, where
              customers or tasks are slipping through the cracks, and what you
              want to make easier to run.
            </p>
            <p className="mt-4 rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold leading-6 text-charcoal shadow-command">
              This form prepares an email draft. Your message is not sent until
              you send it from your email app.
            </p>
            <p className="mt-4 rounded-lg border border-signal/40 bg-white p-4 text-sm leading-6 text-charcoal shadow-command">
              Looking for the paid diagnostic?{" "}
              <Link
                className="font-black underline decoration-signal decoration-2 underline-offset-4"
                href="/operational-visibility-diagnostic"
              >
                Review the scope, timing, deliverables, boundaries, and booking
                step
              </Link>
              .
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Prefer to email directly? Send a message to{" "}
              <a
                className="font-black text-ink underline decoration-signal decoration-2 underline-offset-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-signal"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Section className="bg-white text-charcoal">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Good reasons to reach out
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {goodReasons.map((reason) => (
              <li
                className="rounded-lg border border-slate-200 bg-paper p-4 text-sm font-bold leading-6 text-charcoal shadow-command"
                key={reason}
              >
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            What happens next
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {nextSteps.map((step) => (
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
      </Section>

      <Section className="bg-paper text-charcoal">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            That is normal. Most business owners do not start with the name of
            a service. They start with a problem that keeps coming back. Use the
            form to describe the friction in plain English.
          </p>
        </div>
      </Section>
    </main>
  );
}
