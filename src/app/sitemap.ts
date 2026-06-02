import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { requiredRoutes } from "@/lib/routes";

const lastModified = new Date("2026-06-02");

export default function sitemap(): MetadataRoute.Sitemap {
  return requiredRoutes.map((route) => ({
    url: route === "/" ? site.url : `${site.url}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
