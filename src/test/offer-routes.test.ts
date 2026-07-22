import { describe, expect, it } from "vitest";
import { ownerOffers } from "@/content/owner-offers";
import { products, services } from "@/content/site";
import { legacyRedirects, requiredRoutes } from "@/lib/routes";

describe("offer routes", () => {
  it("defines required service routes", () => {
    expect(services.map((service) => service.href)).toEqual([
      "/owner-operating-system",
      "/operations-reset",
      "/ai-time-saver-sprint",
    ]);
  });

  it("defines required product routes", () => {
    expect(products.map((product) => product.href)).toEqual([
      "/backlog-kill-kit",
      "/policy-forensics",
      "/academy",
    ]);
  });

  it("defines owner-facing canonical offer routes", () => {
    expect(ownerOffers.map((offer) => offer.href)).toEqual([
      "/what-i-fix",
      "/backlog-kill-kit",
      "/ai-time-saver-sprint",
      "/operations-reset",
      "/owner-operating-system",
      "/policy-forensics",
    ]);
  });

  it("has metadata for every offer", () => {
    for (const offer of [...services, ...products, ...ownerOffers]) {
      expect(offer.metadata.title.length).toBeGreaterThan(12);
      expect(offer.metadata.description.length).toBeGreaterThan(40);
    }
  });

  it("serves the Services page as a canonical route", () => {
    expect(requiredRoutes).toContain("/services");
    expect(legacyRedirects.some((redirect) => redirect.source === "/services"))
      .toBe(false);
  });
});
