import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  ContactForm,
  desiredTimelineOptions,
  problemTypeOptions,
} from "@/components/contact/contact-form";

describe("ContactForm", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shows required validation errors on empty submission", async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.click(
      screen.getByRole("button", { name: "Prepare Email to Dan" }),
    );

    for (const message of [
      "Name is required.",
      "Email is required.",
      "Organization is required.",
      "Choose the kind of problem you are trying to solve.",
      "Describe what is getting stuck, delayed, missed, or repeated.",
      "Consent is required before sending your inquiry.",
    ]) {
      expect(screen.getByText(message)).toBeInTheDocument();
    }

    expect(screen.getByLabelText("Name")).toHaveAttribute(
      "aria-describedby",
      "name-error",
    );
    expect(
      screen.getByLabelText("What kind of problem are you trying to solve?"),
    ).toHaveAttribute("aria-describedby", "problemType-error");
    expect(
      screen.getByLabelText("I agree to be contacted about my inquiry."),
    ).toHaveAttribute("aria-describedby", "consent-error");
  });

  it("renders the operational visibility diagnostic contact fields", () => {
    render(<ContactForm />);

    for (const label of [
      "Name",
      "Email",
      "Organization",
      "Role",
      "What kind of problem are you trying to solve?",
      "What is getting stuck, delayed, missed, or repeated?",
      "Desired timeline",
      "I agree to be contacted about my inquiry.",
    ]) {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    }

    for (const option of problemTypeOptions) {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    }

    for (const option of desiredTimelineOptions) {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    }

    expect(
      screen.getByRole("button", { name: "Prepare Email to Dan" }),
    ).toBeInTheDocument();
  });

  it("prepares an honest mailto draft after valid submission", async () => {
    const openMock = vi.fn();
    vi.stubGlobal("open", openMock);
    const user = userEvent.setup();

    render(<ContactForm />);

    await completeValidInquiry(user);

    await user.click(
      screen.getByRole("button", { name: "Prepare Email to Dan" }),
    );

    expect(
      await screen.findByText(
        "Your email draft is ready. Please send it from your email app to complete the inquiry.",
      ),
    ).toBeInTheDocument();

    const draftLink = screen.getByRole("link", { name: "Open Email Draft" });
    expect(draftLink).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:dan@danfeliciano.com"),
    );
    expect(draftLink).toHaveAttribute(
      "href",
      expect.stringContaining("Website%20inquiry%3A%20Work%20is%20piling%20up"),
    );
    expect(
      draftLink.getAttribute("href"),
    ).toContain("Source%20page%3A%20%2Fcontact");
    expect(
      draftLink.getAttribute("href"),
    ).toContain("Consent%20confirmation");

    const draftUrl = new URL(
      draftLink.getAttribute("href") ?? "",
      "https://danfeliciano.com",
    );
    const body = draftUrl.searchParams.get("body") ?? "";

    expect(body).toContain("Name: Dana Operator");
    expect(body).toContain("Email: dana@example.com");
    expect(body).toContain("Organization: Example Company");
    expect(body).toContain("Role: Owner");
    expect(body).toContain("Problem type: Work is piling up");
    expect(body).toContain("Problem description:");
    expect(body).toContain(
      "Follow-up is manual and customers are waiting too long.",
    );
    expect(body).toContain("Desired timeline: 30 days");
    expect(body).toContain(
      "Consent confirmation: Visitor agreed to be contacted about this inquiry.",
    );
    expect(body).toContain("Source page: /contact");
    expect(openMock).toHaveBeenCalledWith(
      draftLink.getAttribute("href"),
      "_self",
    );
  });

  it("does not imply automatic delivery", () => {
    render(<ContactForm />);

    expect(
      screen.queryByText(["Thanks.", "Your inquiry has been sent."].join(" ")),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(["Your request", "has been received."].join(" ")),
    ).not.toBeInTheDocument();
  });
});

async function completeValidInquiry(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Name"), "Dana Operator");
  await user.type(screen.getByLabelText("Email"), "dana@example.com");
  await user.type(screen.getByLabelText("Organization"), "Example Company");
  await user.type(screen.getByLabelText("Role"), "Owner");
  await user.selectOptions(
    screen.getByLabelText("What kind of problem are you trying to solve?"),
    "Work is piling up",
  );
  await user.type(
    screen.getByLabelText(
      "What is getting stuck, delayed, missed, or repeated?",
    ),
    "Follow-up is manual and customers are waiting too long.",
  );
  await user.selectOptions(screen.getByLabelText("Desired timeline"), "30 days");
  await user.click(
    screen.getByLabelText("I agree to be contacted about my inquiry."),
  );
}
