import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BacklogKillPage, { metadata } from "@/app/backlog-kill/page";

describe("Service Reimagined / Backlog Kill page", () => {
  it("frames backlogs as often misdiagnosed service systems", () => {
    render(<BacklogKillPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Service Reimagined / Backlog Kill",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Backlogs are rarely just staffing problems."),
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
    ).toEqual(["/contact", "/contact"]);
    expect(
      screen.getByRole("link", {
        name: "Book a Strategic Forensics Briefing",
      }),
    ).toHaveAttribute("href", "/contact");
    expect(metadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/backlog-kill",
    });
    expect(metadata.openGraph).toMatchObject({
      description:
        "Diagnose service backlogs, workflow bottlenecks, staffing constraints, process failure, and AI/automation opportunities.",
      title: "Backlog Kill & Service Reimagined | Dan Feliciano",
      url: "https://danfeliciano.com/backlog-kill",
    });
  });
});
