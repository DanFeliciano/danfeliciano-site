import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/contact/contact-form";

describe("ContactForm", () => {
  it("shows required validation errors on empty submission", async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "Send inquiry" }));

    expect(screen.getByText("Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Email is required.")).toBeInTheDocument();
    expect(
      screen.getByText("Please agree to be contacted about your inquiry."),
    ).toBeInTheDocument();
  });

  it("shows a success state after valid submission", async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.type(screen.getByLabelText("Name"), "Dana Operator");
    await user.type(screen.getByLabelText("Email"), "dana@example.com");
    await user.type(screen.getByLabelText("Organization"), "Example Agency");
    await user.selectOptions(
      screen.getByLabelText("What are you interested in?"),
      "Academy / Training",
    );
    await user.type(
      screen.getByLabelText("What problem are you trying to solve?"),
      "We need to reduce backlog and improve decision visibility.",
    );
    await user.selectOptions(
      screen.getByLabelText("Desired timeline"),
      "60-90 days",
    );
    await user.click(
      screen.getByLabelText("I agree to be contacted about my inquiry."),
    );

    await user.click(screen.getByRole("button", { name: "Send inquiry" }));

    expect(
      screen.getByText("Thanks. Your request has been received."),
    ).toBeInTheDocument();
  });
});
