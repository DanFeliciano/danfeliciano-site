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
        name: "Bring me the stuck work, confusing number, or decision that cannot wait.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Choose the Problem First" }),
    ).toHaveAttribute("href", "#service-capabilities");
    expect(
      screen.getAllByRole("link", {
        name: "Start an Operational Visibility Diagnostic",
      }),
    ).not.toHaveLength(0);
    expect(screen.queryByText("Find My Bottleneck")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Start with a Bottleneck Diagnostic"),
    ).not.toBeInTheDocument();

    const serviceCapabilities = screen
      .getByRole("heading", {
        level: 2,
        name: "What Dan examines—and what you leave with.",
      })
      .closest("section");
    expect(serviceCapabilities).toHaveAttribute("id", "service-capabilities");

    expect(capabilityPillars).toHaveLength(5);

    for (const pillar of capabilityPillars) {
      expect(
        screen.getByRole("heading", { level: 2, name: pillar.title }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", {
          level: 3,
          name: pillar.startingPoint.title,
        }),
      ).toBeInTheDocument();
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
