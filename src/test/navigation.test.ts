import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { navItems, socialLinks } from "@/content/site";

describe("navigation", () => {
  it("uses the approved navigation labels", () => {
    expect(navItems).toEqual([
      { label: "What I Fix", href: "/what-i-fix" },
      { label: "Services", href: "/services" },
      { label: "Results", href: "/results" },
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ]);
  });

  it("routes the primary nav CTA to the diagnostic offer page", () => {
    render(createElement(SiteHeader));

    const diagnosticLinks = screen.getAllByRole("link", {
      name: "Make the System Visible",
    });

    expect(diagnosticLinks.length).toBeGreaterThan(0);
    expect(
      diagnosticLinks.map(
        (link) =>
          new URL(
            link.getAttribute("href") ?? "",
            "https://danfeliciano.com",
          ).pathname,
      ),
    ).toEqual(
      diagnosticLinks.map(() => "/operational-visibility-diagnostic"),
    );
  });

  it("opens and closes the mobile navigation disclosure", async () => {
    const user = userEvent.setup();

    render(createElement(MobileNav));

    const openButton = screen.getByRole("button", {
      name: "Open navigation",
    });

    expect(openButton).toHaveAttribute("aria-expanded", "false");
    expect(openButton).toHaveAttribute("aria-controls", "mobile-navigation-panel");

    await user.click(openButton);

    const closeButton = screen.getByRole("button", {
      name: "Close navigation",
    });

    expect(closeButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByRole("link", { name: "What I Fix" })).toHaveFocus(),
    );

    for (const item of navItems) {
      expect(screen.getByRole("link", { name: item.label })).toBeInTheDocument();
    }

    const diagnosticLink = screen.getByRole("link", {
      name: "Make the System Visible",
    });

    expect(
      new URL(
        diagnosticLink.getAttribute("href") ?? "",
        "https://danfeliciano.com",
      ).pathname,
    ).toBe("/operational-visibility-diagnostic");

    diagnosticLink.addEventListener("click", (event) => event.preventDefault());
    await user.click(diagnosticLink);

    expect(
      screen.getByRole("button", { name: "Open navigation" }),
    ).toHaveAttribute("aria-expanded", "false");
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Open navigation" })).toHaveFocus(),
    );
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open navigation" }));
    await user.keyboard("{Escape}");

    expect(
      screen.getByRole("button", { name: "Open navigation" }),
    ).toHaveAttribute("aria-expanded", "false");
    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Open navigation" })).toHaveFocus(),
    );
  });

  it("renders official social links with external-link hygiene", () => {
    render(createElement(SiteFooter));

    for (const social of socialLinks) {
      const link = screen.getByRole("link", { name: social.label });

      expect(link).toHaveAttribute("href", social.href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("renders owner-facing footer links", () => {
    render(createElement(SiteFooter));

    for (const [label, href] of [
      ["What I Fix", "/what-i-fix"],
      ["AI & Automation", "/ai-time-saver-sprint"],
      ["Backlog Kill Kit", "/backlog-kill-kit"],
      ["90-Day Operations Reset", "/operations-reset"],
      ["Owner Operating System", "/owner-operating-system"],
      [
        "Operational Visibility Diagnostic",
        "/operational-visibility-diagnostic",
      ],
      ["Policy Forensics", "/policy-forensics"],
      ["Results", "/results"],
    ] as const) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href,
      );
    }
  });
});
