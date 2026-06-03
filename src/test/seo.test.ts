import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";
import { metadata as homepageMetadata } from "@/app/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { site } from "@/content/site";
import { legacyRedirects, requiredRoutes } from "@/lib/routes";
import { absoluteUrl, createMetadata, socialImage } from "@/lib/seo";

const homepageSocialDescription =
  "Find the hidden risk. Clarify the decision. Fix the system. Strategic Forensics for leaders facing AI disruption, policy complexity, operational failure, weak data, backlogs, and financial risk.";

describe("seo helpers", () => {
  it("creates canonical absolute URLs", () => {
    expect(absoluteUrl("/services")).toBe("https://danfeliciano.com/services");
  });

  it("creates metadata with canonical and open graph URL", () => {
    const metadata = createMetadata({
      title: "Services | Dan Feliciano",
      description: "Explore Strategic Forensics services.",
      path: "/services",
    });

    expect(metadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/services",
    });
    expect(metadata.openGraph).toMatchObject({
      images: [socialImage],
      url: "https://danfeliciano.com/services",
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      creator: "@DanFeliciano",
      title: "Services | Dan Feliciano",
      description: "Explore Strategic Forensics services.",
      images: [socialImage.url],
      site: "@DanFeliciano",
    });
    expect(metadata.robots).toEqual({
      index: true,
      follow: true,
    });
  });

  it("has at least all required sitemap routes", () => {
    expect(requiredRoutes.length).toBe(24);
  });

  it("exports full homepage metadata", () => {
    expect(homepageMetadata.alternates).toEqual({
      canonical: "https://danfeliciano.com/",
    });
    expect(homepageMetadata.openGraph).toMatchObject({
      description: homepageSocialDescription,
      images: [socialImage],
      title: "Dan Feliciano | Strategic Forensics",
      url: "https://danfeliciano.com/",
      type: "website",
    });
    expect(homepageMetadata.twitter).toMatchObject({
      card: "summary_large_image",
      creator: "@DanFeliciano",
      description: homepageSocialDescription,
      images: [socialImage.url],
      site: "@DanFeliciano",
      title: "Dan Feliciano | Strategic Forensics",
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
