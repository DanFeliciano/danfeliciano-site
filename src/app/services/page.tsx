import Link from "next/link";
import { Section } from "@/components/layout/section";
import { CommonMisdiagnoses } from "@/components/services/common-misdiagnoses";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import {
  allServiceMisdiagnoses,
  serviceMisdiagnoses,
} from "@/content/service-misdiagnoses";
import { pageHeroes } from "@/content/page-heroes";
import { capabilityPillars } from "@/content/site";
import { createMetadata, faqPageJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services | Dan Feliciano",
  description:
    "Five practical ways Dan Feliciano helps owners and operators expose risk, understand the numbers, fix operations, improve decisions, and automate the right work.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHeader {...pageHeroes["/services"]} />

      <Section className="bg-paper py-10 text-charcoal sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              The rule
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
              Start with the problem, not the service label.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [
                "1",
                "Recognize the pain",
                "Name what is stuck, slow, missed, costly, or unclear.",
              ],
              [
                "2",
                "Expose the cause",
                "Connect the work, numbers, decisions, and hidden dependencies.",
              ],
              [
                "3",
                "Choose the fix",
                "Leave with a bounded action, owner, output, and next decision.",
              ],
            ].map(([number, title, body]) => (
              <div
                className="rounded-lg border border-slate-200 bg-white p-5"
                key={number}
              >
                <p className="text-sm font-black text-signal">{number}</p>
                <h3 className="mt-3 text-base font-black text-charcoal">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="scroll-mt-24 bg-white text-charcoal"
        id="service-capabilities"
        tabIndex={-1}
      >
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
            Service capabilities
          </p>
          <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
            What Dan examines—and what you leave with.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Each capability begins with a real business trigger, examines the
            evidence behind it, and ends with a decision or operating action.
          </p>
        </div>

        <div className="mt-10 grid gap-12">
          {capabilityPillars.map((pillar, index) => (
            <article
              className="scroll-mt-28 border-t border-slate-200 pt-8"
              id={pillar.id}
              key={pillar.id}
            >
              <div className="max-w-4xl">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                  Service {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-balance text-3xl font-black tracking-normal">
                  {pillar.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  {pillar.promise}
                </p>
              </div>

              <div className="mt-7 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.08em] text-charcoal">
                    Bring Dan in when
                  </h3>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600">
                    {pillar.buyerTriggers.map((trigger) => (
                      <li
                        className="border-l-2 border-signal pl-3"
                        key={trigger}
                      >
                        {trigger}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.08em] text-charcoal">
                    What Dan examines
                  </h3>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600">
                    {pillar.examines.map((item) => (
                      <li
                        className="border-l-2 border-slate-300 pl-3"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <CommonMisdiagnoses
                items={serviceMisdiagnoses[pillar.id]}
                serviceId={pillar.id}
              />

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.08em] text-charcoal">
                    You leave with
                  </h3>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600">
                    {pillar.deliverables.map((item) => (
                      <li
                        className="border-l-2 border-slate-300 pl-3"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <aside className="rounded-lg border border-slate-200 bg-paper p-6 shadow-command">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                    Practical way to start
                  </p>
                  <h3 className="mt-3 text-xl font-black text-charcoal">
                    {pillar.startingPoint.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {pillar.startingPoint.summary}
                  </p>
                  <CtaButton
                    className="mt-5 w-full"
                    href={pillar.startingPoint.href}
                  >
                    {pillar.startingPoint.cta}
                  </CtaButton>
                  {pillar.related?.length ? (
                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <p className="text-xs font-black uppercase tracking-[0.1em] text-slate-500">
                        Related paths
                      </p>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                        {pillar.related.map((item) => (
                          <Link
                            className="text-sm font-bold text-charcoal underline decoration-signal decoration-2 underline-offset-4 hover:text-slate-600"
                            href={item.href}
                            key={item.href}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </aside>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-graphite text-white">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-signal">
              The honest starting point
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-normal sm:text-4xl">
              You may not know which service you need.
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-slate-300">
              That is normal. Bring the stuck work, the confusing number, or the
              decision keeping you up at night. The first conversation is used
              to identify the actual constraint and the smallest useful way to
              begin—not to force your problem into the wrong offer.
            </p>
            <CtaButton
              className="mt-6"
              href="/operational-visibility-diagnostic"
            >
              Make the System Visible
            </CtaButton>
          </div>
        </div>
      </Section>

      <FinalCTA
        body="Start with the problem you can feel. Dan will help expose the cause, choose the right fix, and define the next action."
        cta="Start an Operational Visibility Diagnostic"
        href="/operational-visibility-diagnostic"
        title="Ready to stop guessing what to fix first?"
      />

      <JsonLd data={faqPageJsonLd(allServiceMisdiagnoses)} />
    </main>
  );
}
