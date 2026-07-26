import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { ServiceMisdiagnosis } from "@/content/service-misdiagnoses";

type CommonMisdiagnosesProps = {
  serviceId: string;
  items: readonly ServiceMisdiagnosis[];
};

export function CommonMisdiagnoses({
  serviceId,
  items,
}: CommonMisdiagnosesProps) {
  return (
    <div className="mt-8">
      <h3
        className="text-sm font-black uppercase tracking-[0.08em] text-charcoal"
        id={`${serviceId}-misdiagnoses-heading`}
      >
        Common Misdiagnoses
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        The first answer is often the easiest one. It is not always the right
        one.
      </p>

      <div className="mt-4 border-b border-slate-200">
        {items.map((item, index) => {
          const disclosureId = `${serviceId}-misdiagnosis-${index + 1}`;

          return (
            <details
              className="group border-t border-slate-200"
              id={disclosureId}
              key={item.question}
            >
              <summary
                className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-black leading-6 text-charcoal transition-colors hover:text-slate-600 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-signal [&::-webkit-details-marker]:hidden"
                id={`${disclosureId}-question`}
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-signal transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                  focusable="false"
                  strokeWidth={2.25}
                />
              </summary>

              <div
                aria-labelledby={`${disclosureId}-question`}
                className="grid gap-4 pb-6 pr-0 text-sm leading-7 text-slate-600 sm:pr-10"
                data-misdiagnosis-answer
                id={`${disclosureId}-answer`}
              >
                <p>
                  <strong className="font-black text-charcoal">
                    The common answer:
                  </strong>{" "}
                  {item.commonAnswer}
                </p>
                <p>
                  <strong className="font-black text-charcoal">
                    What is more often true:
                  </strong>{" "}
                  {item.correction}
                </p>
                <p>
                  <strong className="font-black text-charcoal">
                    What to inspect instead:
                  </strong>{" "}
                  {item.inspectInstead}
                </p>
                <p>
                  <strong className="font-black text-charcoal">
                    Next step:
                  </strong>{" "}
                  {item.nextStep.prefix}
                  <Link
                    className="font-bold text-charcoal underline decoration-signal decoration-2 underline-offset-4 hover:text-slate-600 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-signal"
                    href={item.nextStep.href}
                  >
                    {item.nextStep.linkLabel}
                  </Link>
                  {item.nextStep.suffix}
                </p>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
