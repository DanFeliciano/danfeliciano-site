import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { requiredRoutes } from "@/lib/routes";

const lastModified = new Date("2026-06-02");
const articleRoute = "/insights/your-ai-isnt-broken-your-business-is-invisible";

export default function sitemap(): MetadataRoute.Sitemap {
  return requiredRoutes.map((route) => ({
    url: route === "/" ? site.url : `${site.url}${route}`,
    lastModified:
      route === articleRoute ? new Date("2026-07-26") : lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === articleRoute ? 0.8 : 0.7,
  }));
}
