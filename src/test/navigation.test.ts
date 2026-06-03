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
    expect(navItems.map((item) => item.label)).toEqual([
      "Home",
      "Strategic Forensics",
      "AI + Operations",
      "Policy Impact",
      "Backlog Kill",
      "Briefings",
      "Insights",
      "About",
      "Contact",
    ]);
  });

  it("routes the primary nav CTA to contact", () => {
    render(createElement(SiteHeader));

    const diagnosticLinks = screen.getAllByRole("link", {
      name: "Book a Briefing",
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
    ).toEqual(diagnosticLinks.map(() => "/contact"));
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
      expect(screen.getByRole("link", { name: "Home" })).toHaveFocus(),
    );

    for (const item of navItems) {
      expect(screen.getByRole("link", { name: item.label })).toBeInTheDocument();
    }

    const diagnosticLink = screen.getByRole("link", {
      name: "Book a Briefing",
    });

    expect(
      new URL(
        diagnosticLink.getAttribute("href") ?? "",
        "https://danfeliciano.com",
      ).pathname,
    ).toBe("/contact");

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
});
