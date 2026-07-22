import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import ServicesPage from "@/app/services/page";
import { capabilityPillars } from "@/content/site";

describe("services page", () => {
  it("presents the five approved service pillars in owner-facing language", () => {
    render(createElement(ServicesPage));

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Five ways to fix what is slowing the business down.",
      }),
    ).toBeInTheDocument();

    expect(capabilityPillars).toHaveLength(5);

    for (const pillar of capabilityPillars) {
      expect(
        screen.getByRole("heading", { level: 2, name: pillar.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(pillar.startingPoint.title)).toBeInTheDocument();
    }
  });

  it("defines a bounded starting point for financial analysis and decision analytics", () => {
    expect(
      capabilityPillars.find((pillar) => pillar.id === "forensic-financial")
        ?.startingPoint.title,
    ).toBe("Financial Exposure Review");
    expect(
      capabilityPillars.find((pillar) => pillar.id === "decision-analytics")
        ?.startingPoint.title,
    ).toBe("Decision Signal Review");
  });
});
