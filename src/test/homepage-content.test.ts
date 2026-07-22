import { render, screen, within } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";
import { capabilityPillars, homepage } from "@/content/site";

describe("homepage content", () => {
  it("uses the approved broad homepage positioning", () => {
    expect(homepage.title).toBe("Fix what is slowing your business down.");
    expect(homepage.subhead).toBe(
      "I help owners and operators understand what the numbers are hiding, make better decisions, fix broken work, and use analytics, AI or automation where they create measurable value.",
    );
    expect(homepage.body).toContain("decision, number, workflow, or repeated task");
    expect(homepage.proof).toEqual([
      "Clarify the decision",
      "Expose financial risk",
      "Fix broken work",
      "Turn data into action",
      "Automate the right work",
    ]);
  });

  it("renders the approved hero actions and five-part operating view", () => {
    const { container } = render(createElement(HomePage));
    const hero = container.querySelector("main > section");

    expect(hero).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { level: 1, name: homepage.title }),
    ).toHaveLength(1);

    const heroScope = within(hero as HTMLElement);
    const primaryCta = heroScope.getByRole("link", {
      name: "Explore How I Help",
    });
    const secondaryCta = heroScope.getByRole("link", {
      name: "Start with a Diagnostic",
    });

    expect(
      new URL(primaryCta.getAttribute("href") ?? "", "https://danfeliciano.com")
        .pathname,
    ).toBe("/services");
    expect(
      new URL(
        secondaryCta.getAttribute("href") ?? "",
        "https://danfeliciano.com",
      ).pathname,
    ).toBe("/contact");

    expect(heroScope.getByText("Business operating view")).toBeInTheDocument();
    for (const operatingLens of [
      "Make the decision",
      "Understand the numbers",
      "Fix the work",
      "See the signals",
      "Automate the right work",
    ]) {
      expect(heroScope.getByText(operatingLens)).toBeInTheDocument();
    }
    expect(screen.queryByText("Bottleneck snapshot")).not.toBeInTheDocument();
    expect(screen.queryByText("Owner bottleneck")).not.toBeInTheDocument();
    expect(screen.queryByText("Backlog pressure")).not.toBeInTheDocument();
  });

  it("puts capabilities before buyer problems and starting offers", () => {
    render(createElement(HomePage));

    const sectionHeadings = [
      "Five ways to make the business easier to run.",
      "Choose the problem you want to solve first.",
      "Start with the problem, not a long engagement.",
      "Practical experience. Measurable work.",
    ].map((name) => screen.getByRole("heading", { level: 2, name }));

    for (let index = 0; index < sectionHeadings.length - 1; index += 1) {
      expect(
        sectionHeadings[index].compareDocumentPosition(sectionHeadings[index + 1]) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    }
  });

  it("makes every capability and starting offer explicit", () => {
    render(createElement(HomePage));

    for (const capability of capabilityPillars) {
      expect(
        screen.getByRole("heading", { level: 3, name: capability.title }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: `Explore ${capability.title}` }),
      ).toHaveAttribute("href", `/services#${capability.id}`);
    }

    for (const offer of [
      "Owner Operating System",
      "Financial Exposure Review",
      "Backlog Kill Kit / 90-Day Operations Reset",
      "Decision Signal Review",
      "AI Time Saver Sprint",
    ]) {
      expect(
        screen.getByRole("heading", { level: 3, name: offer }),
      ).toBeInTheDocument();
    }

    expect(
      screen.getByRole("link", { name: "Explore the 90-Day Operations Reset" }),
    ).toHaveAttribute("href", "/operations-reset");
    expect(screen.queryByText("See how this helps")).not.toBeInTheDocument();
    expect(screen.queryByText("Bottleneck Diagnostic")).not.toBeInTheDocument();

    for (const pain of [
      "Work is piling up",
      "We are wasting too much time",
      "Customers are slipping through the cracks",
      "Everything depends on me",
      "My team needs better problem-solving skills",
      "I need to understand policy or regulatory change",
    ]) {
      expect(
        screen.getByRole("heading", { level: 3, name: pain }),
      ).toBeInTheDocument();
    }
  });
});
