import { render, screen, within } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";
import { homepage } from "@/content/site";

describe("homepage content", () => {
  it("uses the owner-facing homepage headline and CTAs", () => {
    expect(homepage.title).toBe(
      "Fix what is slowing your business down.",
    );
    expect(homepage.subhead).toContain("business owners and operators");
    expect(homepage.subhead).toContain("find bottlenecks");
    expect(homepage.subhead).toContain("recover lost time");
    expect(homepage.subhead).toContain("improve follow-up");
    expect(homepage.body).toContain("AI or automation can actually help");
    expect(homepage.proof).toHaveLength(5);
    expect(homepage.proof).toEqual([
      "Find where work gets stuck",
      "Recover lost time",
      "Improve follow-up",
      "Automate the right work",
      "Build a business that runs with less chaos",
    ]);
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
      name: "Find My Bottleneck",
    });
    const secondaryCta = heroScope.getByRole("link", {
      name: "See How Dan Helps",
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
    ).toBe("/what-i-fix");
    expect(screen.getByText("Bottleneck snapshot")).toBeInTheDocument();
    expect(screen.getByText("Owner/operator view")).toBeInTheDocument();
    expect(
      new URL(
        screen
          .getByRole("link", { name: "Find Time-Saving Automation" })
          .getAttribute("href") ?? "",
        "https://danfeliciano.com",
      ).pathname,
    ).toBe("/ai-time-saver-sprint");
    expect(
      new URL(
        screen.getByRole("link", { name: "Kill the Backlog" }).getAttribute(
          "href",
        ) ?? "",
        "https://danfeliciano.com",
      ).pathname,
    ).toBe("/backlog-kill-kit");
    expect(
      new URL(
        screen
          .getAllByRole("link", {
            name: "Start with a Bottleneck Diagnostic",
          })
          .find((link) => link.getAttribute("href") === "/contact")
          ?.getAttribute("href") ?? "",
        "https://danfeliciano.com",
      ).pathname,
    ).toBe("/contact");

    for (const heading of [
      "You do not need more buzzwords. You need the work to flow.",
      "Choose the problem you want to solve first.",
      "First we find the stuck work. Then we fix what matters.",
      "Practical ways to get started",
      "Strategy is not a slide deck. It is knowing what to say yes and no to.",
      "AI should save time, not create another project.",
      "Practical experience. Measurable work.",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }

    for (const pain of [
      "Work is piling up",
      "We are wasting too much time",
      "Customers are slipping through the cracks",
      "Everything depends on me",
      "My team needs better problem-solving skills",
      "I need to understand policy or regulatory change",
    ]) {
      expect(screen.getByRole("heading", { level: 3, name: pain })).toBeInTheDocument();
    }
  });
});
