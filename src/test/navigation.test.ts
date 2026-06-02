import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/layout/site-header";
import { navItems } from "@/content/site";

describe("navigation", () => {
  it("uses the approved navigation labels", () => {
    expect(navItems.map((item) => item.label)).toEqual([
      "Services",
      "Products",
      "Academy",
      "Results",
      "Speaking",
      "Insights",
      "Contact",
    ]);
  });

  it("routes the primary nav CTA to contact", () => {
    render(createElement(SiteHeader));

    const diagnosticLinks = screen.getAllByRole("link", {
      name: "Book Diagnostic",
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
});
