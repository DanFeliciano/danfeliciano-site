"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/content/site";
import { CtaButton } from "@/components/ui/cta-button";

const mobileNavigationPanelId = "mobile-navigation-panel";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function closeNavigation() {
    setIsOpen(false);
  }

  return (
    <div className="relative lg:hidden">
      <button
        aria-controls={mobileNavigationPanelId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="inline-flex size-11 items-center justify-center rounded-md border border-white/20 text-white transition hover:border-signal hover:text-signal"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <X aria-hidden="true" size={22} />
        ) : (
          <Menu aria-hidden="true" size={22} />
        )}
      </button>

      {isOpen ? (
        <div
          className="absolute right-0 top-14 z-50 w-[min(18rem,calc(100vw-2.5rem))] rounded-lg border border-white/15 bg-ink p-3 shadow-command"
          id={mobileNavigationPanelId}
        >
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navItems.map((item) => (
              <Link
                className="rounded-md px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-signal"
                href={item.href}
                key={item.href}
                onClick={closeNavigation}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <CtaButton
            className="mt-3 w-full"
            href="/contact"
            onClick={closeNavigation}
          >
            Book Diagnostic
          </CtaButton>
        </div>
      ) : null}
    </div>
  );
}
