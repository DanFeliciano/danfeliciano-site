import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/contact/contact-form";

describe("ContactForm", () => {
  it("shows required validation errors on empty submission", async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.click(
      screen.getByRole("button", { name: "Start a Conversation" }),
    );

    expect(screen.getByText("Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Email is required.")).toBeInTheDocument();
    expect(
      screen.getByText("Please describe the problem you are trying to solve."),
    ).toBeInTheDocument();
  });

  it("renders the approved Strategic Forensics contact fields", () => {
    render(<ContactForm />);

    for (const label of [
      "Name",
      "Email",
      "Organization",
      "Role",
      "What are you trying to solve?",
      "Area of interest:",
    ]) {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    }

    for (const option of [
      "Strategic Forensics Briefing",
      "AI Process Redesign",
      "Policy Impact Analysis",
      "Backlog Kill / Service Reimagined",
      "Speaking / Media",
      "Other",
    ]) {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    }

    expect(screen.queryByLabelText("Desired timeline")).not.toBeInTheDocument();
  });

  it("shows a success state after valid submission", async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.type(screen.getByLabelText("Name"), "Dana Operator");
    await user.type(screen.getByLabelText("Email"), "dana@example.com");
    await user.type(screen.getByLabelText("Organization"), "Example Agency");
    await user.type(screen.getByLabelText("Role"), "Operations Director");
    await user.selectOptions(
      screen.getByLabelText("Area of interest:"),
      "Backlog Kill / Service Reimagined",
    );
    await user.type(
      screen.getByLabelText("What are you trying to solve?"),
      "We need to reduce backlog and improve decision visibility.",
    );

    await user.click(
      screen.getByRole("button", { name: "Start a Conversation" }),
    );

    expect(
      screen.getByText("Thanks. Your request has been received."),
    ).toBeInTheDocument();
  });
});
