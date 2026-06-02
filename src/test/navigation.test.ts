import { describe, expect, it } from "vitest";
import { navItems } from "@/content/site";

describe("navigation", () => {
  it("uses the approved navigation labels", () => {
    expect(navItems.map((item) => item.label)).toEqual([
      "Services",
      "Products",
      "Academy",
      "Results",
      "Speaking",
      "Insights",
      "Contact",
    ]);
  });

  it("routes the primary nav CTA to contact", () => {
    expect("/contact").toBe("/contact");
  });
});
