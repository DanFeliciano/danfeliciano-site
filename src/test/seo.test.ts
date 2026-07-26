import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";
import { metadata as homepageMetadata } from "@/app/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { site } from "@/content/site";
import { legacyRedirects, requiredRoutes } from "@/lib/routes";
import { absoluteUrl, createMetadata, socialImage } from "@/lib/seo";

const homepageSocialDescription =
  "See how work, decisions, information, constraints, risk and cash move through your business—then fix the system and automate the right work.";

describe("seo helpers", () => {
  it("creates canonical absolute URLs", () => {
    expect(absoluteUrl("/what-i-fix")).toBe(
      "https://danfeliciano.com/what-i-fix",
    );
  });

  it("creates metadata with canonical and open graph URL", () => {
    const metadata = createMetadata({
      title: "What I Fix | Dan Feliciano",
      description: "Practical help for business owners and operators.",
      path: "/what-i-fix",
    });

    expect(metadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/what-i-fix",
    });
    expect(metadata.openGraph).toMatchObject({
      images: [socialImage],
      url: "https://danfeliciano.com/what-i-fix",
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      creator: "@DanFeliciano",
      title: "What I Fix | Dan Feliciano",
      description: "Practical help for business owners and operators.",
      images: [socialImage.url],
      site: "@DanFeliciano",
    });
    expect(metadata.robots).toEqual({
      index: true,
      follow: true,
    });
  });

  it("has at least all required sitemap routes", () => {
    expect(requiredRoutes).toHaveLength(19);
    expect(requiredRoutes).toContain(
      "/insights/your-ai-isnt-broken-your-business-is-invisible",
    );
  });

  it("exports full homepage metadata", () => {
    expect(homepageMetadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/",
    });
    expect(homepageMetadata.openGraph).toMatchObject({
      description: homepageSocialDescription,
      images: [socialImage],
      title: "Dan Feliciano | Operational Visibility for Owners and Operators",
      url: "https://danfeliciano.com/",
      type: "website",
    });
    expect(homepageMetadata.twitter).toMatchObject({
      card: "summary_large_image",
      creator: "@DanFeliciano",
      description: homepageSocialDescription,
      images: [socialImage.url],
      site: "@DanFeliciano",
      title: "Dan Feliciano | Operational Visibility for Owners and Operators",
    });
    expect(homepageMetadata.robots).toEqual({
      index: true,
      follow: true,
    });
  });
});

describe("seo routes", () => {
  it("allows crawlers and points to the site sitemap", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${site.url}/sitemap.xml`,
    });
  });

  it("creates sitemap entries for every required route", () => {
    expect(sitemap()).toContainEqual(
      expect.objectContaining({
        url: `${site.url}/insights/your-ai-isnt-broken-your-business-is-invisible`,
        lastModified: new Date("2026-07-26"),
        changeFrequency: "monthly",
        priority: 0.8,
      }),
    );
    expect(sitemap()).toHaveLength(requiredRoutes.length);
  });
});

describe("legacy redirects", () => {
  it("keeps configured legacy redirects permanent", async () => {
    await expect(nextConfig.redirects?.()).resolves.toEqual(
      legacyRedirects.map((redirect) => ({
        ...redirect,
        permanent: true,
      })),
    );
  });
});
