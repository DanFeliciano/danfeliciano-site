import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { CtaButton } from "@/components/ui/cta-button";
import type { HeroAction } from "@/content/page-heroes";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subhead: string | readonly string[];
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  cues?: readonly string[];
  trustLine?: string;
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  subhead,
  primaryAction,
  secondaryAction,
  cues,
  trustLine,
  children,
}: PageHeaderProps) {
  const paragraphs = typeof subhead === "string" ? [subhead] : subhead;
  const hasActions = primaryAction || secondaryAction;

  return (
    <section className="bg-ink py-10 text-white sm:py-12 lg:py-14">
      <Container>
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="text-xs font-black uppercase tracking-[0.12em] text-signal">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`text-balance text-[2.35rem] font-black leading-[2.65rem] tracking-normal sm:text-5xl sm:leading-tight ${
              eyebrow ? "mt-3" : ""
            }`}
          >
            {title}
          </h1>
          <div className="mt-4 grid max-w-3xl gap-3">
            {paragraphs.map((paragraph, index) => (
              <p
                className={`text-base leading-7 sm:text-lg sm:leading-8 ${
                  index === 0 ? "font-semibold text-slate-200" : "text-slate-300"
                }`}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
          {hasActions ? (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {primaryAction ? (
                <CtaButton
                  className="w-full sm:w-auto"
                  href={primaryAction.href}
                >
                  {primaryAction.label}
                </CtaButton>
              ) : null}
              {secondaryAction ? (
                <CtaButton
                  className="w-full sm:w-auto"
                  href={secondaryAction.href}
                  variant="secondary"
                >
                  {secondaryAction.label}
                </CtaButton>
              ) : null}
            </div>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
          {trustLine ? (
            <p className="mt-5 text-sm font-black text-signal">{trustLine}</p>
          ) : null}
          {cues?.length ? (
            <ul
              aria-label="Recognition points"
              className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slate-300"
            >
              {cues.map((cue) => (
                <li
                  className="border-l-2 border-signal pl-3"
                  data-hero-cue
                  key={cue}
                >
                  {cue}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
