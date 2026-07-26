import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProductsPage from "@/app/products/page";
import PrivacyPage from "@/app/privacy/page";
import TermsPage from "@/app/terms/page";

describe("additional public page heroes", () => {
  it.each([
    {
      component: ProductsPage,
      title: "Get a clear read before the expensive move.",
      primary: "Choose a Focused Diagnostic",
      href: "#focused-diagnostics",
    },
    {
      component: PrivacyPage,
      title: "Your inquiry information stays tied to your inquiry.",
      primary: "Read the Privacy Policy",
      href: "#privacy-details",
    },
    {
      component: TermsPage,
      title: "Clear terms for using this site and working with Dan.",
      primary: "Read the Terms",
      href: "#terms-details",
    },
  ])("renders the $title hero and working hash action", ({
    component: Page,
    title,
    primary,
    href,
  }) => {
    render(<Page />);

    expect(
      screen.getByRole("heading", { level: 1, name: title }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: primary })).toHaveAttribute(
      "href",
      href,
    );
  });
});
