import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StrategicForensicsPage, {
  metadata,
} from "@/app/strategic-forensics/page";

describe("Strategic Forensics page", () => {
  it("defines the category and primary CTAs", () => {
    render(<StrategicForensicsPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Strategic Forensics" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Find what others miss before it becomes expensive."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Strategic Forensics is Dan Feliciano's method for examining complex decisions/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /When the official story is incomplete, the data is weak/,
      ),
    ).toBeInTheDocument();
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
    for (const [name, href] of [
      ["Briefings", "/briefings"],
      ["AI Process Redesign", "/ai-process-redesign"],
      ["Policy Impact Analysis", "/policy-impact-analysis"],
      ["Backlog Kill", "/backlog-kill"],
    ]) {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    }
  });

  it("includes the requested scan-friendly sections", () => {
    render(<StrategicForensicsPage />);

    for (const heading of [
      "What Strategic Forensics looks for",
      "When to use Strategic Forensics",
      "What you get",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }

    for (const item of [
      "Hidden assumptions",
      "Weak or misleading data",
      "AI misuse",
      "Staffing myths",
      "Before launching an AI initiative",
      "When leaders suspect the official story is incomplete",
      "Plain-English issue framing",
      "Recommended next actions",
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("exports route-safe metadata", () => {
    expect(metadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/strategic-forensics",
    });
    expect(metadata.openGraph).toMatchObject({
      description:
        "Find hidden assumptions, weak data, operational risks, and financial consequences before complex decisions become expensive failures.",
      title: "Strategic Forensics | Dan Feliciano",
      url: "https://danfeliciano.com/strategic-forensics",
    });
  });
});
