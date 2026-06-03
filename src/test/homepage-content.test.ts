import { render, screen, within } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";
import { homepage } from "@/content/site";

describe("homepage content", () => {
  it("uses the Strategic Forensics headline and CTAs", () => {
    expect(homepage.title).toBe(
      "Find the hidden risk. Clarify the decision. Fix the system.",
    );
    expect(homepage.subhead).toContain("Strategic Forensics");
    expect(homepage.body).toContain("business owners");
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
      name: "Book a Strategic Forensics Briefing",
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
    expect(screen.getByText("Strategic forensics map")).toBeInTheDocument();
    expect(
      new URL(
        screen.getByRole("link", { name: "Map AI risk" }).getAttribute("href") ??
          "",
        "https://danfeliciano.com",
      ).pathname,
    ).toBe("/ai-process-redesign");
    expect(
      new URL(
        screen
          .getByRole("link", { name: "Request policy analysis" })
          .getAttribute("href") ?? "",
        "https://danfeliciano.com",
      ).pathname,
    ).toBe("/policy-impact-analysis");

    for (const heading of [
      "Complex decisions hide expensive risks.",
      "Strategic Forensics is the discipline of finding what others miss.",
      "Core services",
      "Strategic Forensics Briefings",
      "Who this is for",
      "About Dan Feliciano",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }
  });
});
