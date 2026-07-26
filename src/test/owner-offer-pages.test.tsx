import { render, screen, within } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import AiTimeSaverSprintPage from "@/app/ai-time-saver-sprint/page";
import BacklogKillKitPage from "@/app/backlog-kill-kit/page";
import OperationsResetPage from "@/app/operations-reset/page";
import OwnerOperatingSystemPage from "@/app/owner-operating-system/page";
import PolicyForensicsPage from "@/app/policy-forensics/page";
import WhatIFixPage from "@/app/what-i-fix/page";

const pages = [
  { component: WhatIFixPage, h1: "Which problem keeps coming back?" },
  {
    component: BacklogKillKitPage,
    h1: "Find why work is aging—and what will move it.",
  },
  {
    component: AiTimeSaverSprintPage,
    h1: "Find where AI can save time—before you automate the wrong work.",
  },
  {
    component: OperationsResetPage,
    h1: "Move from firefighting to control in 90 days.",
  },
  {
    component: OwnerOperatingSystemPage,
    h1: "Stop being the operating system.",
  },
  {
    component: PolicyForensicsPage,
    h1: "What will this policy actually do to costs, operations and risk?",
  },
] as const;

describe("owner-facing offer pages", () => {
  it.each(pages)("renders the $h1 route H1", ({ component, h1 }) => {
    render(createElement(component));

    expect(
      screen.getByRole("heading", { level: 1, name: h1 }),
    ).toBeInTheDocument();
  });

  it("makes Operational Visibility the broad entry point on What I Fix", () => {
    const { container } = render(createElement(WhatIFixPage));

    const hero = container.querySelector("main > section");
    const firstContentSection = hero?.nextElementSibling;

    expect(hero).toHaveTextContent("What I Fix");
    expect(hero).toHaveTextContent(
      "Work is piling up. Follow-up is inconsistent. Employees are overloaded.",
    );
    expect(firstContentSection).toHaveAttribute("id", "common-problems");
    expect(firstContentSection).toHaveTextContent(
      "Which of these sounds familiar?",
    );
    expect(
      screen.getByRole("link", { name: "Choose Your Problem" }),
    ).toHaveAttribute("href", "#common-problems");

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "See why the same problem keeps coming back.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("The problem is visible. The system usually isn’t."),
    ).toBeInTheDocument();

    for (const step of [
      "Make the work visible",
      "Expose the cause",
      "Fix the system",
      "Automate the right work",
      "Build the operating rhythm",
    ]) {
      expect(
        screen.getByRole("heading", { level: 3, name: step }),
      ).toBeInTheDocument();
    }

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Operational Visibility Diagnostic",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Make the System Visible" }),
    ).toHaveAttribute("href", "/contact");
    expect(
      screen.getAllByRole("link", {
        name: "Start an Operational Visibility Diagnostic",
      }),
    ).toHaveLength(2);

    for (const specializedOffer of [
      "Backlog Kill Kit",
      "AI Time Saver Sprint",
      "90-Day Operations Reset",
      "Owner Operating System",
      "Dan Feliciano Academy",
    ]) {
      expect(
        screen.getByRole("heading", {
          level: 3,
          name: specializedOffer,
        }),
      ).toBeInTheDocument();
    }

    for (const problemLink of [
      "Diagnose the Backlog",
      "Fix Follow-Up",
      "Build an Owner Operating System",
      "Start an Operations Reset",
      "Find Time-Saving Automation",
      "Find the Right AI Use Case",
    ]) {
      expect(
        within(firstContentSection as HTMLElement).getByRole("link", {
          name: problemLink,
        }),
      ).toBeVisible();
    }
  });
});
