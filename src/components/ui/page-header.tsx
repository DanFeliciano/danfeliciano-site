import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";

type PageHeaderProps = {
  title: string;
  subhead: string;
  children?: ReactNode;
};

export function PageHeader({ title, subhead, children }: PageHeaderProps) {
  return (
    <section className="bg-ink py-14 text-white sm:py-18 lg:py-20">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-balance text-[2.35rem] font-black leading-[2.65rem] tracking-normal sm:text-5xl sm:leading-tight">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base font-semibold leading-7 text-slate-200 sm:text-lg sm:leading-8">
            {subhead}
          </p>
          {children ? <div className="mt-7">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
