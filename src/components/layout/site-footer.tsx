import Link from "next/link";
import { site } from "@/content/site";
import type { SiteRoute } from "@/lib/routes";
import { Container } from "./container";

type FooterInternalLink = {
  label: string;
  href: SiteRoute;
};

type FooterExternalLink = {
  label: string;
  href: string;
  external: true;
};

type FooterLink = FooterInternalLink | FooterExternalLink;

const expertise = [
  "Make hidden work visible",
  "Recover lost time",
  "Improve follow-up",
  "Automate the right work",
  "Reduce owner dependency",
];

const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "What I Fix", href: "/what-i-fix" },
      { label: "Services", href: "/services" },
      { label: "AI & Automation", href: "/ai-time-saver-sprint" },
      { label: "Training", href: "/academy" },
      { label: "Results", href: "/results" },
      { label: "About", href: "/about" },
      { label: "Speaking", href: "/speaking" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Offers",
    links: [
      { label: "Backlog Kill Kit", href: "/backlog-kill-kit" },
      { label: "90-Day Operations Reset", href: "/operations-reset" },
      { label: "Owner Operating System", href: "/owner-operating-system" },
      { label: "Operational Visibility Diagnostic", href: "/contact" },
      { label: "Policy Forensics", href: "/policy-forensics" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      ...site.socialLinks.map((link) => ({ ...link, external: true as const })),
      { label: "Email", href: `mailto:${site.email}`, external: true },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-graphite py-14 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_repeat(3,1fr)]">
          <div>
            <Link
              className="text-lg font-black text-white hover:text-signal"
              href="/"
            >
              {site.name}
            </Link>
            <p className="mt-3 text-sm font-bold text-signal">
              Operational Visibility for owners and operators
            </p>
            <ul className="mt-5 grid gap-2 text-sm font-semibold text-white/70">
              {expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-black uppercase tracking-[0.14em] text-signal">
                {column.title}
              </h2>
              <ul className="mt-5 grid gap-3 text-sm text-white/70">
                {column.links.map((item) => (
                  <li key={`${column.title}-${item.label}`}>
                    {"external" in item ? (
                      <a
                        className="transition hover:text-signal"
                        href={item.href}
                        rel={
                          item.href.startsWith("mailto:")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        target={
                          item.href.startsWith("mailto:") ? undefined : "_blank"
                        }
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        className="transition hover:text-signal"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          © 2026 Dan Feliciano. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
