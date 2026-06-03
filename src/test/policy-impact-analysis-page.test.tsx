import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PolicyImpactAnalysisPage, {
  metadata,
} from "@/app/policy-impact-analysis/page";

describe("Policy Impact Analysis page", () => {
  it("frames policy impact as operational and financial analysis", () => {
    render(<PolicyImpactAnalysisPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Policy Impact Analysis",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A bill is not just a bill. It is a cost structure, workflow, compliance burden, and accountability system.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Most policy debate stays political/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Legislation is often discussed in slogans/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Policy Impact Analysis translates complexity into plain-English consequences.",
      ),
    ).toBeInTheDocument();
  });

  it("includes the requested analysis, deliverable, and buyer sections", () => {
    render(<PolicyImpactAnalysisPage />);

    for (const heading of [
      "What the analysis examines",
      "Deliverables",
      "Who this is for",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading }),
      ).toBeInTheDocument();
    }

    for (const item of [
      "Who pays",
      "Who administers it",
      "What compliance burden is added",
      "What costs are hidden",
      "What taxpayers, businesses, or citizens should understand",
      "Bill impact brief",
      "Taxpayer impact summary",
      "Association/member education brief",
      "Public messaging support",
      "Advocacy groups",
      "Public officials who need plain-English issue clarity",
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument();
    }
  });

  it("uses the requested CTAs and route-safe metadata", () => {
    render(<PolicyImpactAnalysisPage />);

    expect(
      screen
        .getAllByRole("link", { name: "Request a Policy Impact Briefing" })
        .map((link) => link.getAttribute("href")),
    ).toEqual(["/contact", "/contact"]);
    expect(
      screen.getByRole("link", {
        name: "Book a Strategic Forensics Briefing",
      }),
    ).toHaveAttribute("href", "/contact");
    expect(metadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/policy-impact-analysis",
    });
    expect(metadata.openGraph).toMatchObject({
      title: "Policy Impact Analysis | Dan Feliciano",
      url: "https://danfeliciano.com/policy-impact-analysis",
    });
  });
});
