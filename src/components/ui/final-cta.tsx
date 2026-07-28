import type { ActionHref } from "@/lib/routes";
import { CtaButton } from "./cta-button";

type FinalCTAProps = {
  title: string;
  body: string;
  cta: string;
  href: ActionHref;
};

export function FinalCTA({ title, body, cta, href }: FinalCTAProps) {
  return (
    <section className="bg-ink px-5 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-site gap-6 rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-command md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            {body}
          </p>
        </div>
        <CtaButton className="w-full md:w-auto" href={href}>
          {cta}
        </CtaButton>
      </div>
    </section>
  );
}
