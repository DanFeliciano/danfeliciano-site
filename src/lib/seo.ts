import type { Metadata } from "next";
import type { InsightArticle } from "@/content/insights";
import {
  serviceMisdiagnosisAnswerText,
  type ServiceMisdiagnosis,
} from "@/content/service-misdiagnoses";
import type { Course } from "@/content/site";
import { site } from "@/content/site";
import { allSiteRoutes, type SiteRoute } from "@/lib/routes";

type SeoInput = {
  title: string;
  description: string;
  path: SiteRoute;
};

export const socialImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Dan Feliciano Operational Visibility for owners and operators social preview",
};

export type BreadcrumbJsonLdItem = {
  label: string;
  href: SiteRoute;
};

function assertSiteRoute(path: SiteRoute) {
  if (!(allSiteRoutes as readonly string[]).includes(path)) {
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
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
      creator: "@DanFeliciano",
      site: "@DanFeliciano",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createArticleMetadata(article: InsightArticle): Metadata {
  const canonical = absoluteUrl(article.href);
  const image = {
    url: article.socialImage,
    width: 1200,
    height: 630,
    alt: `${article.title} — ${article.subtitle}`,
  };

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: { canonical },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      url: canonical,
      siteName: site.name,
      publishedTime: article.publishedAt,
      authors: [article.author],
      section: article.category,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.socialImage],
      creator: "@DanFeliciano",
      site: "@DanFeliciano",
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
    sameAs: site.socialLinks.map((link) => link.href),
    knowsAbout: [
      "Operational Visibility",
      "Bottleneck diagnosis",
      "Backlog reduction",
      "AI and automation",
      "Lean Six Sigma",
      "Policy Forensics",
      "Operations improvement",
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

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@type": "Person", name: site.name, url: site.url },
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

export function breadcrumbListJsonLd(items: readonly BreadcrumbJsonLdItem[]) {
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

export function articleJsonLd(article: InsightArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    datePublished: article.publishedAt,
    articleSection: article.category,
    mainEntityOfPage: absoluteUrl(article.href),
    image: new URL(article.socialImage, site.url).toString(),
    author: {
      "@type": "Person",
      name: article.author,
      url: site.url,
    },
    publisher: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: article.contentType,
    },
  };
}

export function faqPageJsonLd(
  items: readonly ServiceMisdiagnosis[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: serviceMisdiagnosisAnswerText(item),
      },
    })),
  };
}
