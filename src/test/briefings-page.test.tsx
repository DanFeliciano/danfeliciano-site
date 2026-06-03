import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BriefingsPage, { metadata } from "@/app/briefings/page";

describe("Strategic Forensics Briefings page", () => {
  it("frames briefings as the easiest entry point", () => {
    render(<BriefingsPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Strategic Forensics Briefings",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A focused briefing for leaders who need clarity before making expensive decisions.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Not every organization needs a full diagnostic immediately/),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "The easiest first step into Strategic Forensics.",
      }),
    ).toBeInTheDocument();
  });

  it("includes the requested format, audience, and topic sections", () => {
    render(<BriefingsPage />);

    for (const heading of [
      "Briefing format",
      "Who briefings are for",
      "Example briefing topics",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }

    for (const item of [
      "60-90 minutes",
      "Plain-English issue framing",
      "Questions leaders should be asking",
      "Can be delivered virtually or in person",
      "Business owners",
      "Leadership teams",
      "Municipal leaders",
      "Nonprofit leaders",
      "AI Reality Check for Leaders",
      "What This Bill Actually Means",
      "The Hidden Cost of Backlogs",
      "The Taxpayer Impact Hidden Inside Policy Decisions",
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("uses the requested CTAs and route-safe metadata", () => {
    render(<BriefingsPage />);

    expect(
      screen
        .getAllByRole("link", {
          name: "Book a Strategic Forensics Briefing",
        })
        .map((link) => link.getAttribute("href")),
    ).toEqual(["/contact", "/contact"]);
    expect(
      screen.getByRole("link", { name: "Start a Conversation" }),
    ).toHaveAttribute("href", "/contact");
    expect(metadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/briefings",
    });
    expect(metadata.openGraph).toMatchObject({
      description:
        "Find the hidden risk. Clarify the decision. Fix the system. A focused briefing that turns complex issues into plain-English consequences, risks, tradeoffs, and next actions.",
      title: "Strategic Forensics Briefings | Dan Feliciano",
      url: "https://danfeliciano.com/briefings",
    });
  });
});
