import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage, { metadata as aboutMetadata } from "@/app/about/page";
import ContactPage, { metadata as contactMetadata } from "@/app/contact/page";

describe("About page", () => {
  it("leads with Strategic Forensics instead of legacy identity", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "I find the hidden cause behind visible business problems.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /For more than 25 years, I have worked across operations/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/strategy, operations, financial scrutiny, AI fluency/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Dan's strength is forensic analysis/),
    ).toBeInTheDocument();
    expect(screen.getByText("GE-certified Master Black Belt.")).toBeInTheDocument();
    expect(
      screen.getByText("Dartmouth Lean Six Sigma instructor background."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Media experience used as proof of clear communication/),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "See What I Fix" }),
    ).toHaveAttribute("href", "/what-i-fix");
    expect(screen.getByRole("link", { name: "See Results" })).toHaveAttribute(
      "href",
      "/results",
    );
  });

  it("exports route-safe metadata", () => {
    expect(aboutMetadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/about",
    });
    expect(aboutMetadata.openGraph).toMatchObject({
      description:
        "Find the hidden risk. Clarify the decision. Fix the system. Dan Feliciano helps leaders examine complex decisions across business, government, AI, finance, operations, and policy.",
      title: "About | Dan Feliciano",
      url: "https://danfeliciano.com/about",
    });
  });
});

describe("Contact page", () => {
  it("frames contact around the recurring problem", () => {
    render(<ContactPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Bring me the problem that keeps coming back.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Tell me what is stuck, delayed, confusing, costly/),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Start with the problem you can see.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Good reasons to reach out",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "What happens next" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Not sure what you need?" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Prepare Email to Dan" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "This form prepares an email draft. Your message is not sent until you send it from your email app.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("dan@danfeliciano.com")).toHaveAttribute(
      "href",
      "mailto:dan@danfeliciano.com",
    );
    expect(screen.getByText("Work is piling up and no one is sure why")).toBeInTheDocument();
    expect(
      screen.getByText(
        "What is happening, what have you already tried, and what consequence is becoming difficult to ignore?",
      ),
    ).toBeInTheDocument();
    expect(screen.queryByText("Find My Bottleneck")).not.toBeInTheDocument();
    expect(screen.queryByText("Bottleneck Diagnostic")).not.toBeInTheDocument();
    expect(
      screen.queryByText(["Book", "a", "Strategy", "Diagnostic"].join(" ")),
    ).not.toBeInTheDocument();
  });

  it("exports route-safe metadata", () => {
    expect(contactMetadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/contact",
    });
    expect(contactMetadata.openGraph).toMatchObject({
      description:
        "Tell Dan Feliciano what is stuck, delayed, confusing, costly, or too dependent on one person. Find the right diagnostic or practical intervention.",
      title: "Contact Dan Feliciano | Operational Visibility",
      url: "https://danfeliciano.com/contact",
    });
  });
});
