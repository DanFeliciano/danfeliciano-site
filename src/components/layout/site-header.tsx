import Link from "next/link";
import { navItems, site } from "@/content/site";
import { CtaButton } from "@/components/ui/cta-button";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink text-white shadow-command">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link
            className="group inline-flex items-center gap-3 font-bold"
            href="/"
            aria-label={`${site.name} home`}
          >
            <span className="flex size-10 items-center justify-center rounded-md border border-signal/50 bg-signal text-sm font-black text-ink">
              DF
            </span>
            <span className="text-base tracking-normal text-white transition group-hover:text-signal">
              {site.name}
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-3 xl:flex">
            {navItems.map((item) => (
              <Link
                className="text-xs font-semibold text-white/80 transition hover:text-signal"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:block">
            <CtaButton href="/contact">Book a Briefing</CtaButton>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
