import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";
import { metadata as homepageMetadata } from "@/app/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { site } from "@/content/site";
import { legacyRedirects, requiredRoutes } from "@/lib/routes";
import { absoluteUrl, createMetadata, socialImage } from "@/lib/seo";

const homepageSocialDescription =
  "Dan Feliciano helps business owners and operators find bottlenecks, recover lost time, improve follow-up, and use AI or automation where it actually makes work easier.";

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
    expect(requiredRoutes.length).toBe(17);
  });

  it("exports full homepage metadata", () => {
    expect(homepageMetadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/",
    });
    expect(homepageMetadata.openGraph).toMatchObject({
      description: homepageSocialDescription,
      images: [socialImage],
      title: "Dan Feliciano | Fix What Is Slowing Your Business Down",
      url: "https://danfeliciano.com/",
      type: "website",
    });
    expect(homepageMetadata.twitter).toMatchObject({
      card: "summary_large_image",
      creator: "@DanFeliciano",
      description: homepageSocialDescription,
      images: [socialImage.url],
      site: "@DanFeliciano",
      title: "Dan Feliciano | Fix What Is Slowing Your Business Down",
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
    expect(sitemap()).toEqual(
      requiredRoutes.map((route) => ({
        url: route === "/" ? site.url : `${site.url}${route}`,
        lastModified: new Date("2026-06-02"),
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : 0.7,
      })),
    );
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
