import type { Metadata } from "next";
import type { Course } from "@/content/site";
import { site } from "@/content/site";
import { requiredRoutes, type SiteRoute } from "@/lib/routes";

type SeoInput = {
  title: string;
  description: string;
  path: SiteRoute;
};

export type BreadcrumbJsonLdItem = {
  label: string;
  href: SiteRoute;
};

function assertSiteRoute(path: SiteRoute) {
  if (!(requiredRoutes as readonly string[]).includes(path)) {
    throw new Error("Canonical URL path must be an internal site route.");
  }
}

export function absoluteUrl(path: SiteRoute) {
  assertSiteRoute(path);

  return new URL(path, site.url).toString();
}

export function createMetadata({
  title,
  description,
  path,
}: SeoInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email,
    sameAs: [site.linkedIn],
    knowsAbout: [
      "Operational strategy",
      "Lean Six Sigma",
      "AI automation",
      "Analytics",
      "Strategy execution",
    ],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description: site.description,
    founder: { "@type": "Person", name: site.name },
  };
}

export function academyProviderJsonLd() {
  return {
    "@type": "Organization",
    name: "Dan Feliciano Academy",
    url: absoluteUrl("/academy"),
    founder: { "@type": "Person", name: site.name, url: site.url },
  };
}

export function academyCourseItemListJsonLd(
  courseItems: readonly Pick<Course, "title" | "href" | "metadata">[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courseItems.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        url: absoluteUrl(course.href),
        description: course.metadata.description,
      },
    })),
  };
}

export function breadcrumbListJsonLd(
  items: readonly BreadcrumbJsonLdItem[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}
