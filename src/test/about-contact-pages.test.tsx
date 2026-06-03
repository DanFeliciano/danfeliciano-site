import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage, { metadata as aboutMetadata } from "@/app/about/page";
import ContactPage, { metadata as contactMetadata } from "@/app/contact/page";

describe("About page", () => {
  it("leads with Strategic Forensics instead of legacy identity", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "About Dan Feliciano" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Dan Feliciano helps leaders find what others miss inside complex decisions.",
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
      screen.getAllByRole("link", { name: "Start a Conversation" })[0],
    ).toHaveAttribute("href", "/contact");
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
  it("frames contact around Strategic Forensics entry points", () => {
    render(<ContactPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Start with the decision, system, policy, backlog, or AI challenge you need to understand.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/request a Strategic Forensics Briefing/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/discuss an AI Process Redesign Diagnostic/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/request Policy Impact Analysis/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/diagnose a backlog/),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Start a Conversation" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Review Strategic Forensics" }),
    ).toHaveAttribute("href", "/strategic-forensics");
  });

  it("exports route-safe metadata", () => {
    expect(contactMetadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/contact",
    });
    expect(contactMetadata.openGraph).toMatchObject({
      description:
        "Find the hidden risk. Clarify the decision. Fix the system. Request a Strategic Forensics Briefing, AI diagnostic, Policy Impact Analysis, or Backlog Kill review.",
      title: "Contact | Start a Conversation | Dan Feliciano",
      url: "https://danfeliciano.com/contact",
    });
  });
});
