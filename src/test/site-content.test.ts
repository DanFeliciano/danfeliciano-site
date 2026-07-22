import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
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
  socialLinks,
} from "@/content/site";
import {
  createMetadata,
  personJsonLd,
  professionalServiceJsonLd,
  socialImage,
  websiteJsonLd,
} from "@/lib/seo";
import { allSiteRoutes, legacyRedirects, requiredRoutes } from "@/lib/routes";

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
    expect(site.email).toBe("dan@danfeliciano.com");
  });

  it("centralizes official social profile URLs", () => {
    expect(socialLinks).toEqual([
      { label: "LinkedIn", href: "https://www.linkedin.com/in/danfeliciano/" },
      { label: "X", href: "https://x.com/DanFeliciano" },
      { label: "Facebook", href: "https://www.facebook.com/DanFelicianoLLC" },
      {
        label: "Bluesky",
        href: "https://bsky.app/profile/danfeliciano.bsky.social",
      },
    ]);
    expect(site.socialLinks).toBe(socialLinks);
    expect(site.linkedIn).toBe("https://www.linkedin.com/in/danfeliciano/");
  });

  it("defines all required top-level content groups", () => {
    expect(navItems).toHaveLength(6);
    expect(services.length).toBeGreaterThanOrEqual(3);
    expect(products.length).toBeGreaterThanOrEqual(3);
    expect(courses).toHaveLength(3);
    expect(caseStudies.length).toBeGreaterThanOrEqual(6);
    expect(insightCards.length).toBeGreaterThanOrEqual(5);
  });

  it("includes every required route", () => {
    expect(requiredRoutes).toEqual([
      "/",
      "/what-i-fix",
      "/services",
      "/backlog-kill-kit",
      "/ai-time-saver-sprint",
      "/operations-reset",
      "/owner-operating-system",
      "/policy-forensics",
      "/academy",
      "/academy/lean-six-sigma-ai-yellow-belt",
      "/academy/lean-six-sigma-ai-green-belt",
      "/academy/lean-six-sigma-ai-black-belt",
      "/results",
      "/speaking",
      "/insights",
      "/contact",
      "/privacy",
      "/terms",
    ]);
  });

  it("keeps content hrefs within required routes", () => {
    const routeSet = new Set<string>(allSiteRoutes);
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
      expect(allSiteRoutes).toContain(service.href);
    }

    for (const product of products) {
      expect(allSiteRoutes).toContain(product.href);
    }
  });

  it("creates route-safe metadata for what I fix", () => {
    const metadata = createMetadata({
      title: "What I Fix | Dan Feliciano",
      description: "What I Fix metadata test",
      path: "/what-i-fix",
    });

    expect(metadata.alternates?.canonical).toBe(
      "https://danfeliciano.com/what-i-fix",
    );
    expect(metadata.openGraph).toMatchObject({
      images: [socialImage],
      title: "What I Fix | Dan Feliciano",
      url: "https://danfeliciano.com/what-i-fix",
      siteName: "Dan Feliciano",
      type: "website",
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: [socialImage.url],
    });
  });

  it("uses owner-facing positioning as the primary positioning", () => {
    expect(site.description).toContain("owners and operators");
    expect(site.description).toContain("make better decisions");
    expect(site.description).toContain("understand financial exposure");
    expect(site.description).toContain("automate the right work");
    expect(homepage.title).toBe(
      "Fix what is slowing your business down.",
    );
    expect(navItems.map((item) => item.label)).toEqual([
      "What I Fix",
      "Services",
      "Results",
      "About",
      "Insights",
      "Contact",
    ]);
    expect(
      navItems.find((item) => item.label === "What I Fix")?.href,
    ).toBe("/what-i-fix");
    expect(navItems.find((item) => item.label === "Services")?.href).toBe(
      "/services",
    );
    expect(navItems.find((item) => item.label === "Results")?.href).toBe(
      "/results",
    );
    expect(navItems.find((item) => item.label === "About")?.href).toBe(
      "/about",
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
      sameAs: socialLinks.map((link) => link.href),
    });

    expect(professionalServiceJsonLd()).toMatchObject({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Dan Feliciano",
      founder: { "@type": "Person", name: "Dan Feliciano" },
    });

    expect(websiteJsonLd()).toMatchObject({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Dan Feliciano",
      url: "https://danfeliciano.com",
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

  it("does not include placeholder filler text in deployed source", () => {
    const fillerText = ["lorem", "ipsum"].join(" ");
    const output = rgNoMatches(`(?i)${fillerText}`, [
      "src/app",
      "src/components",
      "src/content",
    ]);

    expect(output.trim()).toBe("");
  });

  it("does not require a contact API or email provider for launch", () => {
    const contactApiRoute = ["src/app/api", "contact/route.ts"].join("/");
    const providerName = ["re", "send"].join("");
    const removedEnvVars = [
      [["RE", "SEND"].join(""), "API", "KEY"].join("_"),
      ["CONTACT", "TO", "EMAIL"].join("_"),
      ["CONTACT", "FROM", "EMAIL"].join("_"),
    ].join("|");

    expect(existsSync(contactApiRoute)).toBe(false);
    expect(existsSync(".env.example")).toBe(false);

    const output = rgNoMatches(
      `${providerName}|${removedEnvVars}|${["/api", "contact"].join("/")}`,
      ["src/app", "src/components", "src/lib", "src/content", "package.json"],
    );

    expect(output.trim()).toBe("");
  });

  it("keeps generic consultant language out of deployed source", () => {
    const forbidden =
      "(?i)unlock potential|empower transformation|innovative solutions|trusted partner|cutting-edge|comprehensive solutions|tailored solutions|helping organizations thrive|drive success|transform your business|synergy|next-level|contact us|learn more|discover solutions";
    const output = rgNoMatches(forbidden, [
      "src/app",
      "src/components",
      "src/content",
    ]);

    expect(output.trim()).toBe("");
  });
});
