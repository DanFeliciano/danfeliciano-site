import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import AiTimeSaverSprintPage from "@/app/ai-time-saver-sprint/page";
import BacklogKillKitPage from "@/app/backlog-kill-kit/page";
import OperationsResetPage from "@/app/operations-reset/page";
import OwnerOperatingSystemPage from "@/app/owner-operating-system/page";
import PolicyForensicsPage from "@/app/policy-forensics/page";
import WhatIFixPage from "@/app/what-i-fix/page";

const pages = [
  { component: WhatIFixPage, h1: "What I Fix" },
  { component: BacklogKillKitPage, h1: "Backlog Kill Kit" },
  { component: AiTimeSaverSprintPage, h1: "AI Time Saver Sprint" },
  { component: OperationsResetPage, h1: "90-Day Operations Reset" },
  { component: OwnerOperatingSystemPage, h1: "Owner Operating System" },
  { component: PolicyForensicsPage, h1: "Policy Forensics" },
] as const;

describe("owner-facing offer pages", () => {
  it.each(pages)("renders the $h1 route H1", ({ component, h1 }) => {
    render(createElement(component));

    expect(
      screen.getByRole("heading", { level: 1, name: h1 }),
    ).toBeInTheDocument();
  });

  it("makes Operational Visibility the broad entry point on What I Fix", () => {
    render(createElement(WhatIFixPage));

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "See why the same problems keep coming back.",
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
  });
});
