import pointOfViewOneSource from "./insights/articles/your-ai-isnt-broken-your-business-is-invisible.md?raw";
import type { SiteRoute } from "@/lib/routes";

type FrontmatterValue = string | number;

export type InsightArticle = {
  slug: string;
  href: SiteRoute;
  title: string;
  subtitle: string;
  excerpt: string;
  homepageSummary: string;
  contentType: string;
  seriesNumber: number;
  category: string;
  author: string;
  publishedAt: string;
  publishedLabel: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  socialImage: string;
  source: string;
  body: string;
};

function parseFrontmatter(source: string) {
  const openingMarker = "---\n";
  const closingMarker = "\n---\n";

  if (!source.startsWith(openingMarker)) {
    throw new Error("Insight article is missing frontmatter.");
  }

  const closingIndex = source.indexOf(closingMarker, openingMarker.length);
  if (closingIndex === -1) {
    throw new Error("Insight article frontmatter is not closed.");
  }

  const fields = Object.fromEntries(
    source
      .slice(openingMarker.length, closingIndex)
      .split("\n")
      .map((line) => {
        const match = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.+)$/);
        if (!match) {
          throw new Error(`Invalid insight frontmatter line: ${line}`);
        }

        const [, key, rawValue] = match;
        const quotedValue = rawValue.match(/^"(.*)"$/);
        const value: FrontmatterValue = quotedValue
          ? quotedValue[1]
          : /^\d+$/.test(rawValue)
            ? Number(rawValue)
            : rawValue;

        return [key, value];
      }),
  ) as Record<string, FrontmatterValue>;

  return {
    fields,
    body: source.slice(closingIndex + closingMarker.length),
  };
}

function stringField(fields: Record<string, FrontmatterValue>, key: string) {
  const value = fields[key];

  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Insight article requires a string ${key}.`);
  }

  return value;
}

function numberField(fields: Record<string, FrontmatterValue>, key: string) {
  const value = fields[key];

  if (typeof value !== "number") {
    throw new Error(`Insight article requires a numeric ${key}.`);
  }

  return value;
}

function formatPublicationDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function createInsightArticle(
  source: string,
  homepageSummary: string,
): InsightArticle {
  const { fields, body } = parseFrontmatter(source);
  const slug = stringField(fields, "slug");
  const publishedAt = stringField(fields, "publishedAt");

  return {
    slug,
    href: `/insights/${slug}` as SiteRoute,
    title: stringField(fields, "title"),
    subtitle: stringField(fields, "subtitle"),
    excerpt: stringField(fields, "excerpt"),
    homepageSummary,
    contentType: stringField(fields, "contentType"),
    seriesNumber: numberField(fields, "seriesNumber"),
    category: stringField(fields, "category"),
    author: stringField(fields, "author"),
    publishedAt,
    publishedLabel: formatPublicationDate(publishedAt),
    readTime: stringField(fields, "readTime"),
    seoTitle: stringField(fields, "seoTitle"),
    seoDescription: stringField(fields, "seoDescription"),
    socialImage:
      "/insights/your-ai-isnt-broken-your-business-is-invisible-og.png",
    source,
    body,
  };
}

export const publishedInsights = [
  createInsightArticle(
    pointOfViewOneSource,
    "AI did not create the problem. It exposed how much of the organization still depends on tribal knowledge, workarounds, and systems no one can clearly explain.",
  ),
] as const satisfies readonly InsightArticle[];

export function getPublishedInsight(slug: string) {
  return publishedInsights.find((article) => article.slug === slug);
}
