import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AcademyPage from "@/app/academy/page";
import GreenBeltCoursePage from "@/app/academy/lean-six-sigma-ai-green-belt/page";
import { courses } from "@/content/site";
import { breadcrumbListJsonLd } from "@/lib/seo";

function jsonLdFrom(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll('script[type="application/ld+json"]'),
  ).flatMap((script) => {
    const parsed = JSON.parse(script.textContent ?? "{}");

    return Array.isArray(parsed) ? parsed : [parsed];
  });
}

describe("structured data", () => {
  it("uses ISO 8601 durations for academy courses", () => {
    expect(courses.map((course) => course.durationIso)).toEqual([
      "PT8H",
      "PT40H",
      "PT80H",
    ]);
  });

  it("renders Academy overview ItemList JSON-LD for courses", () => {
    const { container } = render(<AcademyPage />);
    const itemList = jsonLdFrom(container).find(
      (item) => item["@type"] === "ItemList",
    );

    expect(itemList).toMatchObject({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: courses.map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Course",
          name: course.title,
          url: `https://danfeliciano.com${course.href}`,
          description: course.metadata.description,
        },
      })),
    });
  });

  it("renders course JSON-LD with organization provider and ISO duration", () => {
    const { container } = render(<GreenBeltCoursePage />);
    const courseSchema = jsonLdFrom(container).find(
      (item) => item["@type"] === "Course",
    );

    expect(courseSchema).toMatchObject({
      "@type": "Course",
      name: "Lean Six Sigma + AI Green Belt",
      timeRequired: "PT40H",
      provider: {
        "@type": "Organization",
        name: "Dan Feliciano Academy",
        url: "https://danfeliciano.com/academy",
      },
    });

    expect(
      jsonLdFrom(container).find((item) => item["@type"] === "BreadcrumbList"),
    ).toMatchObject({
      itemListElement: [
        {
          position: 1,
          name: "Academy",
          item: "https://danfeliciano.com/academy",
        },
        {
          position: 2,
          name: "Lean Six Sigma + AI Green Belt",
          item: "https://danfeliciano.com/academy/lean-six-sigma-ai-green-belt",
        },
      ],
    });
  });

  it("creates route-safe BreadcrumbList JSON-LD", () => {
    expect(
      breadcrumbListJsonLd([
        { label: "Services", href: "/services" },
        { label: "Phoenix Protocol", href: "/services/phoenix-protocol" },
      ]),
    ).toMatchObject({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Services",
          item: "https://danfeliciano.com/services",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Phoenix Protocol",
          item: "https://danfeliciano.com/services/phoenix-protocol",
        },
      ],
    });
  });
});
