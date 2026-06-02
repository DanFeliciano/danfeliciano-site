import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import type { SiteRoute } from "@/lib/routes";

type CtaButtonProps = {
  children: ReactNode;
  href: SiteRoute;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantClasses = {
  primary: "bg-signal text-ink hover:bg-white",
  secondary: "border border-white/30 text-white hover:border-signal hover:text-signal",
};

export function CtaButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: CtaButtonProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-bold transition ${variantClasses[variant]} ${className}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
