import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BacklogKillPage, { metadata } from "@/app/backlog-kill/page";

describe("Service Reimagined / Backlog Kill page", () => {
  it("frames backlogs as often misdiagnosed service systems", () => {
    render(<BacklogKillPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Diagnose why the backlog keeps growing before adding people.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Expose aging work, demand and capacity, broken handoffs/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Backlogs grow when organizations cannot see the work/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/organizations often blame staffing/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Backlog Kill makes the work visible so leaders can fix the right problem.",
      ),
    ).toBeInTheDocument();
  });

  it("includes the requested diagnostic, deliverable, and buyer sections", () => {
    render(<BacklogKillPage />);

    for (const heading of [
      "What the diagnostic examines",
      "Deliverables",
      "Who this is for",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }

    for (const item of [
      "Incoming demand",
      "Backlog aging",
      "Triage rules",
      "Turnaround time",
      "AI and automation opportunities",
      "Customer or citizen impact",
      "Service workflow map",
      "Backlog visibility assessment",
      "Workload segmentation",
      "30/60/90-day improvement plan",
      "Municipal governments",
      "Grant administrators",
      "Public-facing departments",
      "Operations leaders",
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("uses the requested CTAs and route-safe metadata", () => {
    render(<BacklogKillPage />);

    expect(
      screen
        .getAllByRole("link", { name: "Diagnose the Backlog" })
        .map((link) => link.getAttribute("href")),
    ).toEqual(["/backlog-kill-kit", "/contact"]);
    expect(
      screen.getByRole("link", {
        name: "Start an Operations Reset",
      }),
    ).toHaveAttribute("href", "/operations-reset");
    expect(metadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/backlog-kill",
    });
    expect(metadata.openGraph).toMatchObject({
      description:
        "Find the hidden risk. Clarify the decision. Fix the system. Diagnose backlogs, flow, rework, staffing constraints, process failure, and service-risk consequences.",
      title: "Backlog Kill & Service Reimagined | Dan Feliciano",
      url: "https://danfeliciano.com/backlog-kill",
    });
  });
});
