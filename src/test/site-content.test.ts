import { describe, expect, it } from "vitest";
import {
  caseStudies,
  courses,
  insightCards,
  navItems,
  products,
  services,
  site,
} from "@/content/site";
import { requiredRoutes } from "@/lib/routes";

describe("site content", () => {
  it("uses Dan Feliciano as the master brand", () => {
    expect(site.name).toBe("Dan Feliciano");
    expect(site.url).toBe("https://danfeliciano.com");
  });

  it("defines all required top-level content groups", () => {
    expect(navItems).toHaveLength(7);
    expect(services.length).toBeGreaterThanOrEqual(3);
    expect(products.length).toBeGreaterThanOrEqual(3);
    expect(courses).toHaveLength(3);
    expect(caseStudies.length).toBeGreaterThanOrEqual(6);
    expect(insightCards.length).toBeGreaterThanOrEqual(5);
  });

  it("includes every required route", () => {
    expect(requiredRoutes).toEqual([
      "/",
      "/services",
      "/services/aesop-strategy-governance",
      "/services/phoenix-protocol",
      "/services/ai-automation-analytics",
      "/products",
      "/products/backlog-kill-kit",
      "/products/policy-forensics",
      "/academy",
      "/academy/lean-six-sigma-ai-yellow-belt",
      "/academy/lean-six-sigma-ai-green-belt",
      "/academy/lean-six-sigma-ai-black-belt",
      "/speaking",
      "/case-studies",
      "/insights",
      "/contact",
      "/privacy",
      "/terms",
    ]);
  });
});
