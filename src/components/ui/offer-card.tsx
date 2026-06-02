import { ArrowRight } from "lucide-react";
import type { SiteRoute } from "@/lib/routes";
import { CtaButton } from "./cta-button";

export type OfferCardData = {
  eyebrow?: string;
  title: string;
  summary: string;
  href: SiteRoute;
  cta: string;
  meta?: string;
};

type OfferCardProps = {
  offer: OfferCardData;
  variant?: "light" | "dark";
};

const variantClasses = {
  light:
    "border-slate-200 bg-white text-charcoal hover:border-signal hover:shadow-command",
  dark:
    "border-white/10 bg-white/[0.04] text-white hover:border-signal/70 hover:bg-white/[0.07]",
};

export function OfferCard({ offer, variant = "light" }: OfferCardProps) {
  const isDark = variant === "dark";

  return (
    <article
      className={`flex h-full min-h-52 flex-col rounded-lg border p-5 transition ${variantClasses[variant]}`}
    >
      {offer.eyebrow ? (
        <div
          className={`text-xs font-black uppercase tracking-[0.12em] ${
            isDark ? "text-signal" : "text-slate-500"
          }`}
        >
          {offer.eyebrow}
        </div>
      ) : null}

      <div className="mt-3 flex items-start justify-between gap-4">
        <h3 className="text-balance text-lg font-black leading-6">
          {offer.title}
        </h3>
        <ArrowRight
          aria-hidden="true"
          className={`mt-1 size-5 shrink-0 ${
            isDark ? "text-signal" : "text-charcoal"
          }`}
        />
      </div>

      <p
        className={`mt-4 text-sm leading-6 ${
          isDark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {offer.summary}
      </p>

      {offer.meta ? (
        <p
          className={`mt-4 text-xs font-semibold leading-5 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {offer.meta}
        </p>
      ) : null}

      <div className="mt-auto pt-5">
        <CtaButton
          className="w-full"
          href={offer.href}
          variant={isDark ? "secondary" : "primary"}
        >
          {offer.cta}
        </CtaButton>
      </div>
    </article>
  );
}
