import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";
import {
  caseStudies,
  courses,
  homepage,
  insightCards,
  navItems,
  products,
  services,
  site,
} from "@/content/site";
import {
  createMetadata,
  personJsonLd,
  professionalServiceJsonLd,
} from "@/lib/seo";
import { legacyRedirects, requiredRoutes } from "@/lib/routes";

function rgNoMatches(pattern: string, paths: string[]) {
  try {
    return execFileSync("rg", ["-n", pattern, ...paths], {
      encoding: "utf8",
    });
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      error.status === 1
    ) {
      return "";
    }

    throw error;
  }
}

describe("site content", () => {
  it("uses Dan Feliciano as the master brand", () => {
    expect(site.name).toBe("Dan Feliciano");
    expect(site.url).toBe("https://danfeliciano.com");
  });

  it("defines all required top-level content groups", () => {
    expect(navItems).toHaveLength(9);
    expect(services.length).toBeGreaterThanOrEqual(3);
    expect(products.length).toBeGreaterThanOrEqual(3);
    expect(courses).toHaveLength(3);
    expect(caseStudies.length).toBeGreaterThanOrEqual(6);
    expect(insightCards.length).toBeGreaterThanOrEqual(5);
  });

  it("includes every required route", () => {
    expect(requiredRoutes).toEqual([
      "/",
      "/strategic-forensics",
      "/ai-process-redesign",
      "/policy-impact-analysis",
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
      "/about",
      "/contact",
      "/privacy",
      "/terms",
    ]);
  });

  it("keeps content hrefs within required routes", () => {
    const routeSet = new Set<string>(requiredRoutes);
    const contentHrefs = [
      ...navItems.map((item) => item.href),
      ...services.map((service) => service.href),
      ...products.map((product) => product.href),
      ...courses.map((course) => course.href),
    ];

    expect(contentHrefs).toHaveLength(
      navItems.length + services.length + products.length + courses.length,
    );

    for (const href of contentHrefs) {
      expect(routeSet.has(href)).toBe(true);
    }
  });

  it("keeps offer slugs consistent with their route paths", () => {
    for (const service of services) {
      expect(service.href).toBe(`/services/${service.slug}`);
    }

    for (const product of products) {
      if (product.href.startsWith("/products/")) {
        expect(product.href).toBe(`/products/${product.slug}`);
      }
    }
  });

  it("creates route-safe metadata for services", () => {
    const metadata = createMetadata({
      title: "Services | Dan Feliciano",
      description: "Services metadata test",
      path: "/services",
    });

    expect(metadata.alternates?.canonical).toBe(
      "https://danfeliciano.com/services",
    );
    expect(metadata.openGraph).toMatchObject({
      title: "Services | Dan Feliciano",
      url: "https://danfeliciano.com/services",
      siteName: "Dan Feliciano",
      type: "website",
    });
  });

  it("uses Strategic Forensics as the primary positioning", () => {
    expect(site.description).toContain("Strategic Forensics");
    expect(homepage.title).toBe(
      "Find the hidden risk. Clarify the decision. Fix the system.",
    );
    expect(navItems.map((item) => item.label)).toContain("Strategic Forensics");
    expect(navItems.map((item) => item.label)).toContain("Policy Impact");
    expect(
      navItems.find((item) => item.label === "Strategic Forensics")?.href,
    ).toBe("/strategic-forensics");
    expect(navItems.find((item) => item.label === "AI + Operations")?.href).toBe(
      "/ai-process-redesign",
    );
    expect(navItems.find((item) => item.label === "Policy Impact")?.href).toBe(
      "/policy-impact-analysis",
    );
  });

  it("rejects external canonical URL inputs", () => {
    expect(() =>
      createMetadata({
        title: "Bad canonical",
        description: "External URL should be rejected",
        path: "https://example.com" as never,
      }),
    ).toThrow(/internal site route/i);

    expect(() =>
      createMetadata({
        title: "Bad canonical",
        description: "Protocol-relative URL should be rejected",
        path: "//example.com" as never,
      }),
    ).toThrow(/internal site route/i);
  });

  it("creates expected JSON-LD schema objects", () => {
    expect(personJsonLd()).toMatchObject({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dan Feliciano",
      url: "https://danfeliciano.com",
    });

    expect(professionalServiceJsonLd()).toMatchObject({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Dan Feliciano",
      founder: { "@type": "Person", name: "Dan Feliciano" },
    });
  });

  it("keeps legacy redirect destinations within required routes", () => {
    const routeSet = new Set<string>(requiredRoutes);

    for (const redirect of legacyRedirects) {
      expect(routeSet.has(redirect.destination)).toBe(true);
    }
  });

  it("does not include the forbidden legacy brand in deployed source", () => {
    const forbidden = ["Op", "Ex", "90"].join("");
    const output = rgNoMatches(forbidden, [
      "src/app",
      "src/content",
      "src/lib",
      "package.json",
      "next.config.ts",
    ]);

    expect(output.trim()).toBe("");
  });
});
