import { render, screen, within } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";
import { homepage } from "@/content/site";

describe("homepage content", () => {
  it("uses the approved headline and CTAs", () => {
    expect(homepage.title).toBe(
      "Operational Strategy, AI Automation, and Lean Six Sigma Execution",
    );
    expect(homepage.subhead).toContain("reduce backlog");
    expect(homepage.proof).toHaveLength(4);
  });

  it("renders the approved homepage composition", () => {
    const { container } = render(createElement(HomePage));
    const hero = container.querySelector("main > section");

    expect(hero).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", {
        level: 1,
        name: homepage.title,
      }),
    ).toHaveLength(1);

    const heroScope = within(hero as HTMLElement);
    const primaryCta = heroScope.getByRole("link", {
      name: "Book a Strategy Diagnostic",
    });
    const secondaryCta = heroScope.getByRole("link", {
      name: "Explore Services",
    });

    expect(
      new URL(primaryCta.getAttribute("href") ?? "", "https://danfeliciano.com")
        .pathname,
    ).toBe("/contact");
    expect(
      new URL(
        secondaryCta.getAttribute("href") ?? "",
        "https://danfeliciano.com",
      ).pathname,
    ).toBe("/services");
    expect(screen.getByText("Operating signal map")).toBeInTheDocument();

    for (const heading of [
      "What do you need to fix first?",
      "Services",
      "Products",
      "Results",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }
  });
});
