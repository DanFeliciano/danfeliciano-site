import { createHash } from "node:crypto";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import InsightsPage from "@/app/insights/page";
import { insightCards } from "@/content/site";

const articleSourceModules = import.meta.glob(
  "../content/insights/articles/*.md",
  {
    eager: true,
    import: "default",
    query: "?raw",
  },
);

const insightContentModules = import.meta.glob("../content/insights.ts", {
  eager: true,
});

const articlePageModules = import.meta.glob("../app/insights/**/page.tsx", {
  eager: true,
});

const articlePath = "/insights/your-ai-isnt-broken-your-business-is-invisible";
const articleTitle = "Your AI Isn’t Broken. Your Business Is Invisible.";

describe("Point of View publishing", () => {
  it("publishes the canonical Markdown without changing a byte", () => {
    const source =
      articleSourceModules[
        "../content/insights/articles/your-ai-isnt-broken-your-business-is-invisible.md"
      ];

    expect(source).toBeTypeOf("string");
    expect(
      createHash("sha256")
        .update(source as string)
        .digest("hex"),
    ).toBe("db6769127c1dbd44577249f7e4cc6a3e40190a95a77fd1e2d727e23f0d2778d3");
  });

  it("exposes a reusable typed article record", () => {
    const contentModule = insightContentModules["../content/insights.ts"] as
      | {
          publishedInsights?: readonly {
            slug: string;
            title: string;
            subtitle: string;
            contentType: string;
            seriesNumber: number;
            category: string;
            author: string;
            publishedAt: string;
            readTime: string;
            excerpt: string;
            seoTitle: string;
            seoDescription: string;
            href: string;
          }[];
        }
      | undefined;

    expect(contentModule).toBeDefined();
    expect(contentModule?.publishedInsights).toHaveLength(1);
    expect(contentModule?.publishedInsights?.[0]).toMatchObject({
      slug: "your-ai-isnt-broken-your-business-is-invisible",
      title: articleTitle,
      subtitle: "The Visibility Thesis",
      contentType: "Point of View",
      seriesNumber: 1,
      category: "Operational Visibility",
      author: "Dan Feliciano",
      publishedAt: "2026-07-26",
      readTime: "6-minute read",
      href: articlePath,
    });
  });

  it("features the published article before the unlinked field notes", () => {
    render(<InsightsPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "The visible problem is rarely the whole problem.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: "Read the Featured Point of View",
      }),
    ).toHaveAttribute("href", articlePath);
    expect(
      screen.getByRole("link", { name: "Explore All Insights" }),
    ).toHaveAttribute("href", "#insights-index");

    const featuredLink = screen.getByRole("link", {
      name: `Read the Point of View: ${articleTitle}`,
    });
    expect(featuredLink).toHaveAttribute("href", articlePath);
    expect(featuredLink).toHaveTextContent("POINT OF VIEW #1");
    expect(featuredLink).toHaveTextContent("OPERATIONAL VISIBILITY");
    expect(featuredLink).toHaveTextContent(articleTitle);
    expect(featuredLink).toHaveTextContent("July 26, 2026");
    expect(featuredLink).toHaveTextContent("Dan Feliciano");
    expect(featuredLink).toHaveTextContent("6-minute read");
    expect(featuredLink).toHaveTextContent("Read the Point of View");

    const fieldNotesHeading = screen.getByRole("heading", {
      level: 2,
      name: "Field notes on stuck work",
    });
    expect(fieldNotesHeading.closest("section")).toHaveAttribute(
      "id",
      "insights-index",
    );
    expect(
      featuredLink.compareDocumentPosition(fieldNotesHeading) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    for (const card of insightCards) {
      const heading = screen.getByRole("heading", {
        level: 3,
        name: card.title,
      });
      expect(heading.closest("a")).toBeNull();
    }
  });

  it("publishes the reusable article page with accessible structure and links", async () => {
    const pageModule = articlePageModules["../app/insights/[slug]/page.tsx"] as
      | {
          default?: (props: {
            params: Promise<{ slug: string }>;
          }) => Promise<React.ReactElement>;
          generateMetadata?: (props: {
            params: Promise<{ slug: string }>;
          }) => Promise<{
            title?: string;
            description?: string;
            alternates?: { canonical?: string };
            openGraph?: {
              type?: string;
              url?: string;
              publishedTime?: string;
              authors?: string[];
              section?: string;
            };
          }>;
          generateStaticParams?: () => { slug: string }[];
        }
      | undefined;

    expect(pageModule).toBeDefined();
    expect(pageModule?.default).toBeTypeOf("function");
    expect(pageModule?.generateMetadata).toBeTypeOf("function");
    expect(pageModule?.generateStaticParams?.()).toEqual([
      { slug: "your-ai-isnt-broken-your-business-is-invisible" },
    ]);

    const params = Promise.resolve({
      slug: "your-ai-isnt-broken-your-business-is-invisible",
    });
    const metadata = await pageModule!.generateMetadata!({ params });
    expect(metadata).toMatchObject({
      title: articleTitle,
      description:
        "AI often fails before implementation because organizations cannot clearly see how work, decisions, information, constraints, risk, and cash actually move.",
      alternates: {
        canonical: `https://danfeliciano.com${articlePath}`,
      },
      openGraph: {
        type: "article",
        url: `https://danfeliciano.com${articlePath}`,
        publishedTime: "2026-07-26",
        authors: ["Dan Feliciano"],
        section: "Operational Visibility",
      },
    });

    const page = await pageModule!.default!({ params });
    const { container } = render(page);

    expect(
      screen.getAllByRole("heading", { level: 1, name: articleTitle }),
    ).toHaveLength(1);
    expect(screen.getByText("The Visibility Thesis")).toBeInTheDocument();
    expect(screen.getByText("POINT OF VIEW #1")).toBeInTheDocument();
    expect(container.querySelector("article")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Read the Point of View" }),
    ).toHaveAttribute("href", "#article-body");
    expect(
      screen.getByRole("link", { name: "Explore All Insights" }),
    ).toHaveAttribute("href", "/insights");
    expect(container.querySelector("#article-body")).toBeInTheDocument();

    const breadcrumb = screen.getByRole("navigation", {
      name: "Breadcrumb",
    });
    expect(
      within(breadcrumb).getByRole("link", { name: "Insights" }),
    ).toHaveAttribute("href", "/insights");
    expect(
      within(breadcrumb).getByText("Operational Visibility"),
    ).toHaveAttribute("aria-current", "page");

    expect(
      screen.getByRole("link", {
        name: "Start an Operational Visibility Diagnostic",
      }),
    ).toHaveAttribute("href", "/contact");
    expect(
      screen.getByRole("link", { name: "Back to Insights" }),
    ).toHaveAttribute("href", "/insights");

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "One question",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Can you clearly see the system producing your results?",
      }),
    ).toBeInTheDocument();

    const jsonLd = Array.from(
      container.querySelectorAll('script[type="application/ld+json"]'),
    ).flatMap((script) => {
      const parsed = JSON.parse(script.textContent ?? "{}");

      return Array.isArray(parsed) ? parsed : [parsed];
    });
    expect(jsonLd).toContainEqual(
      expect.objectContaining({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: articleTitle,
        datePublished: "2026-07-26",
        articleSection: "Operational Visibility",
        mainEntityOfPage: `https://danfeliciano.com${articlePath}`,
        author: expect.objectContaining({
          "@type": "Person",
          name: "Dan Feliciano",
        }),
      }),
    );
    expect(jsonLd).toContainEqual(
      expect.objectContaining({
        "@type": "BreadcrumbList",
        itemListElement: [
          expect.objectContaining({
            position: 1,
            name: "Insights",
            item: "https://danfeliciano.com/insights",
          }),
          expect.objectContaining({
            position: 2,
            name: "Operational Visibility",
            item: `https://danfeliciano.com${articlePath}`,
          }),
        ],
      }),
    );
  });
});
