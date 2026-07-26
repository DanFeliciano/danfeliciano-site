import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PageHeader } from "@/components/ui/page-header";

describe("PageHeader", () => {
  it("renders a compact buyer-recognition hierarchy with distinct actions and cues", () => {
    const { container } = render(
      <PageHeader
        cues={["Stuck work", "Cash pressure", "Failed automation"]}
        eyebrow="Operational Visibility"
        primaryAction={{
          href: "#problem-selection",
          label: "Choose the Problem",
        }}
        secondaryAction={{
          href: "/contact",
          label: "Start an Operational Visibility Diagnostic",
        }}
        subhead={[
          "The visible problem is only the symptom.",
          "Make the operating system visible before choosing the fix.",
        ]}
        title="See what is producing the result."
      />,
    );

    expect(screen.getByText("Operational Visibility")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "See what is producing the result.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("The visible problem is only the symptom."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Make the operating system visible before choosing the fix.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Choose the Problem" }),
    ).toHaveAttribute("href", "#problem-selection");
    expect(
      screen.getByRole("link", {
        name: "Start an Operational Visibility Diagnostic",
      }),
    ).toHaveAttribute("href", "/contact");
    expect(container.querySelectorAll("[data-hero-cue]")).toHaveLength(3);
    expect(container.querySelector("a a")).toBeNull();
  });
});
