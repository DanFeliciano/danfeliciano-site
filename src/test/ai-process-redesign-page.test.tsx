import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AiProcessRedesignPage, {
  metadata,
} from "@/app/ai-process-redesign/page";

describe("AI Process Redesign Diagnostic page", () => {
  it("frames AI as work redesign instead of tool selection", () => {
    render(<AiProcessRedesignPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "AI Process Redesign Diagnostic",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("AI is not the strategy. Redesigning the work is."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Most organizations are not ready for AI because/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/tool-selection problem instead of a work-redesign problem/),
    ).toBeInTheDocument();
    expect(screen.getByText(/not a vendor shortlist/)).toBeInTheDocument();
  });

  it("includes the requested diagnostic sections and scan lists", () => {
    render(<AiProcessRedesignPage />);

    for (const heading of [
      "The common mistake",
      "What the diagnostic examines",
      "Deliverables",
      "Who this is for",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }

    for (const item of [
      "Core workflows",
      "Decision points",
      "AI use already happening inside the organization",
      "Customer, citizen, or employee experience impact",
      "Workflow inventory",
      "30/60/90-day action plan",
      "Executive briefing",
      "Municipal leaders",
      "Professional service firms",
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("uses the requested CTAs and route-safe metadata", () => {
    render(<AiProcessRedesignPage />);

    expect(
      screen
        .getAllByRole("link", { name: "Assess Your AI Readiness" })
        .map((link) => link.getAttribute("href")),
    ).toEqual(["/contact", "/contact"]);
    expect(
      screen.getByRole("link", {
        name: "Book a Strategic Forensics Briefing",
      }),
    ).toHaveAttribute("href", "/contact");
    expect(metadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/ai-process-redesign",
    });
    expect(metadata.openGraph).toMatchObject({
      description:
        "Find the hidden risk. Clarify the decision. Fix the system. Map workflows, data, risks, decision points, bottlenecks, and AI readiness before buying tools.",
      title: "AI Process Redesign Diagnostic | Dan Feliciano",
      url: "https://danfeliciano.com/ai-process-redesign",
    });
  });
});
