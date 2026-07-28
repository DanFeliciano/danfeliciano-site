import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import OperationalVisibilityDiagnosticPage, {
  metadata,
} from "@/app/operational-visibility-diagnostic/page";
import { bookingUrl } from "@/content/site";

describe("Operational Visibility Diagnostic page", () => {
  it("states the buyer, problem, scope, timing, deliverables, and boundaries", () => {
    render(<OperationalVisibilityDiagnosticPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "See how one critical flow actually works—and what to fix first.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "One consequential flow. One leader who needs a defensible next move.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "One critical flow from trigger to value.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("About 10 business days after the start conditions are met.")).toBeInTheDocument();
    expect(
      screen.getByText("$5,000 for the first three signed and paid engagements."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Operational Visibility Map of the selected end-to-end flow"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "What the $5,000 pilot does not include",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Automation or software development"),
    ).toBeInTheDocument();
  });

  it("connects both direct booking actions to the live calendar", () => {
    render(<OperationalVisibilityDiagnosticPage />);

    const bookingLinks = screen.getAllByRole("link", {
      name: "Book a Fit Conversation",
    });

    expect(bookingLinks).toHaveLength(2);
    for (const link of bookingLinks) {
      expect(link).toHaveAttribute("href", bookingUrl);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("positions Backlog Kill Kit as a focused application, not a competing diagnostic", () => {
    render(<OperationalVisibilityDiagnosticPage />);

    const backlogSection = screen
      .getByRole("heading", {
        level: 2,
        name: "Backlog Kill Kit is Operational Visibility applied to aging work.",
      })
      .closest("section");

    expect(backlogSection).toHaveAttribute("id", "backlog-application");
    expect(backlogSection).toHaveTextContent("not a competing diagnostic identity");
    expect(
      within(backlogSection as HTMLElement).getByRole("link", {
        name: "See the backlog application",
      }),
    ).toHaveAttribute("href", "/backlog-kill-kit");
  });

  it("exports canonical metadata for the dedicated route", () => {
    expect(metadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/operational-visibility-diagnostic",
    });
    expect(metadata.openGraph).toMatchObject({
      images: [
        expect.objectContaining({
          url: "/operational-visibility-diagnostic-og.png",
          width: 1200,
          height: 630,
        }),
      ],
    });
  });
});
