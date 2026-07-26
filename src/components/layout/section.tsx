import type { ComponentPropsWithoutRef } from "react";
import { Container } from "./container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  containerClassName?: string;
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  ...props
}: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
