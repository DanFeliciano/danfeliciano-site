import { render, screen, within } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";
import { capabilityPillars, homepage } from "@/content/site";

describe("homepage content", () => {
  it("uses the approved Operational Visibility positioning", () => {
    expect(homepage.title).toBe("Fix what is slowing your business down.");
    expect(homepage.subhead).toBe(
      "Most leaders can see the symptoms—backlogs, delays, rework, weak follow-up, confusing numbers and cash pressure—but not the system producing them.",
    );
    expect(homepage.body).toContain("how work actually gets done");
    expect(homepage.body).toContain("decisions and information break down");
    expect(homepage.body).toContain("risk and cash are accumulating");
    expect(homepage.body).toContain("what to automate");
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
      name: "Start an Operational Visibility Diagnostic",
    });
    const secondaryCta = heroScope.getByRole("link", {
      name: "Explore What I Fix",
    });

    expect(
      new URL(primaryCta.getAttribute("href") ?? "", "https://danfeliciano.com")
        .pathname,
    ).toBe("/operational-visibility-diagnostic");
    expect(
      new URL(
        secondaryCta.getAttribute("href") ?? "",
        "https://danfeliciano.com",
      ).pathname,
    ).toBe("/what-i-fix");

    expect(
      heroScope.getByText("Operational Visibility for owners and operators"),
    ).toBeInTheDocument();
    expect(
      heroScope.queryByText("Operational Visibility in practice"),
    ).not.toBeInTheDocument();
    const practiceSection = screen
      .getByRole("heading", {
        level: 2,
        name: "Operational Visibility in practice",
      })
      .closest("section");
    for (const operatingLens of [
      "Make the decision",
      "Understand the numbers",
      "Fix the work",
      "See the signals",
      "Automate the right work",
    ]) {
      expect(
        within(practiceSection as HTMLElement).getByText(operatingLens),
      ).toBeInTheDocument();
    }
    expect(screen.queryByText("Bottleneck snapshot")).not.toBeInTheDocument();
    expect(screen.queryByText("Owner bottleneck")).not.toBeInTheDocument();
    expect(screen.queryByText("Backlog pressure")).not.toBeInTheDocument();
  });

  it("defines the category and links the published Point of View", () => {
    render(createElement(HomePage));

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Make the business visible before trying to fix it.",
    });
    const categorySection = heading.closest("section");

    expect(categorySection).toBeInTheDocument();
    expect(
      within(categorySection as HTMLElement).getByText(
        "See the system behind the symptoms",
      ),
    ).toBeInTheDocument();
    expect(categorySection).toHaveTextContent(
      "fix the system and automate intelligently",
    );

    for (const element of [
      "Work",
      "Decisions",
      "Information",
      "Constraints",
      "Risk",
      "Cash",
    ]) {
      expect(
        within(categorySection as HTMLElement).getByText(element),
      ).toBeInTheDocument();
    }

    expect(
      screen.getByRole("link", {
        name: "Read the Point of View: Your AI Isn’t Broken. Your Business Is Invisible.",
      }),
    ).toHaveAttribute(
      "href",
      "/insights/your-ai-isnt-broken-your-business-is-invisible",
    );
    expect(screen.getByText("Operational Visibility")).toBeInTheDocument();
    expect(
      screen.getByText(
        "AI did not create the problem. It exposed how much of the organization still depends on tribal knowledge, workarounds, and systems no one can clearly explain.",
      ),
    ).toBeInTheDocument();
  });

  it("puts buyer recognition before category and capability explanations", () => {
    render(createElement(HomePage));

    const sectionHeadings = [
      "Choose the problem you want to solve first.",
      "Operational Visibility in practice",
      "Make the business visible before trying to fix it.",
      "Five ways to make the business easier to run.",
      "Start with the problem, not a long engagement.",
      "Practical experience. Measurable work.",
    ].map((name) => screen.getByRole("heading", { level: 2, name }));

    for (let index = 0; index < sectionHeadings.length - 1; index += 1) {
      expect(
        sectionHeadings[index].compareDocumentPosition(
          sectionHeadings[index + 1],
        ) & Node.DOCUMENT_POSITION_FOLLOWING,
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
