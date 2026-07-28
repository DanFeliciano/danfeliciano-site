import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import type { ActionHref } from "@/lib/routes";

type CtaButtonProps = {
  children: ReactNode;
  href: ActionHref;
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
  const classes = `inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-bold transition focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-signal ${variantClasses[variant]} ${className}`;

  if (href.startsWith("https://")) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={classes}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
