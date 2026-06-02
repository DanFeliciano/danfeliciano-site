import { describe, expect, it } from "vitest";
import { products, services } from "@/content/site";

describe("offer routes", () => {
  it("defines required service routes", () => {
    expect(services.map((service) => service.href)).toEqual([
      "/services/aesop-strategy-governance",
      "/services/phoenix-protocol",
      "/services/ai-automation-analytics",
    ]);
  });

  it("defines required product routes", () => {
    expect(products.map((product) => product.href)).toEqual([
      "/products/backlog-kill-kit",
      "/products/policy-forensics",
      "/academy",
    ]);
  });

  it("has metadata for every offer", () => {
    for (const offer of [...services, ...products]) {
      expect(offer.metadata.title.length).toBeGreaterThan(12);
      expect(offer.metadata.description.length).toBeGreaterThan(40);
    }
  });
});
