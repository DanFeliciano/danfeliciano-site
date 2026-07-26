import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ServicesPage from "@/app/services/page";

const expectedQuestions = [
  "Why does everything in my business still depend on me?",
  "How do I know which business problem to fix first?",
  "Why does every issue in my company become urgent?",
  "Why is my profitable business always short on cash?",
  "Why did revenue grow while profit and cash got worse?",
  "Can I trust the numbers in my financial reports?",
  "Do I need to hire more people to clear our backlog?",
  "Why is everyone busy but the work is still late?",
  "Why do the same operational problems keep coming back?",
  "Why do we have dashboards but still cannot make decisions?",
  "Which KPIs should my business track?",
  "Why are our forecasts always wrong?",
  "Why are my AI agents failing?",
  "Which business process should I automate first with AI?",
  "Why is my team not using the AI tools we bought?",
] as const;

const serviceIds = [
  "strategic-exposure",
  "forensic-financial",
  "operational-recovery",
  "decision-analytics",
  "ai-process-redesign",
] as const;

function normalizedText(value: string | null | undefined) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function jsonLdFrom(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll('script[type="application/ld+json"]'),
  ).flatMap((script) => {
    const parsed = JSON.parse(script.textContent ?? "{}");

    return Array.isArray(parsed) ? parsed : [parsed];
  });
}

describe("services Common Misdiagnoses", () => {
  it("renders all 15 approved questions exactly once in collapsed native disclosures", () => {
    const { container } = render(<ServicesPage />);
    const disclosures = Array.from(container.querySelectorAll("details"));
    const summaries = disclosures.map((details) =>
      normalizedText(details.querySelector("summary")?.textContent),
    );

    expect(disclosures).toHaveLength(15);
    expect(summaries).toEqual(expectedQuestions);

    for (const question of expectedQuestions) {
      expect(summaries.filter((summary) => summary === question)).toHaveLength(
        1,
      );
    }

    for (const disclosure of disclosures) {
      expect(disclosure).not.toHaveAttribute("open");
      expect(disclosure.querySelector("summary button")).toBeNull();
    }
  });

  it("keeps three misdiagnoses inside each service in the approved section order", () => {
    const { container } = render(<ServicesPage />);

    for (const serviceId of serviceIds) {
      const service = container.querySelector<HTMLElement>(`#${serviceId}`);
      expect(service).not.toBeNull();
      expect(service?.querySelectorAll("details")).toHaveLength(3);

      const text = normalizedText(service?.textContent);
      const orderedLabels = [
        "Bring Dan in when",
        "What Dan examines",
        "Common Misdiagnoses",
        "You leave with",
        "Practical way to start",
      ];
      const positions = orderedLabels.map((label) => text.indexOf(label));

      expect(positions.every((position) => position >= 0)).toBe(true);
      expect(positions).toEqual([...positions].sort((a, b) => a - b));
      expect(
        within(service as HTMLElement).getByText(
          "The first answer is often the easiest one. It is not always the right one.",
        ),
      ).toBeInTheDocument();
    }
  });

  it("renders every approved answer in the initial HTML with the four required labels", () => {
    const { container } = render(<ServicesPage />);
    const disclosures = Array.from(container.querySelectorAll("details"));

    expect(screen.getAllByText("The common answer:")).toHaveLength(15);
    expect(screen.getAllByText("What is more often true:")).toHaveLength(15);
    expect(screen.getAllByText("What to inspect instead:")).toHaveLength(15);
    expect(screen.getAllByText("Next step:")).toHaveLength(15);

    expect(normalizedText(disclosures[0]?.textContent)).toContain(
      "Delegation fails when priorities, decision rules, ownership, and escalation conditions are still unclear.",
    );
    expect(normalizedText(disclosures[14]?.textContent)).toContain(
      "Low adoption can be a rational response to poor work design.",
    );
  });

  it("uses the approved existing destinations for every next-step link", () => {
    render(<ServicesPage />);

    const expectedLinks = [
      ["Owner Operating System", "/owner-operating-system"],
      ["Strategic Exposure & Decision Planning", "/contact"],
      ["Strategic Exposure & Decision Planning", "/contact"],
      ["Financial Exposure Review", "/contact"],
      ["Forensic Financial Analysis", "/contact"],
      ["Financial Exposure Review", "/contact"],
      ["Backlog Kill Kit", "/backlog-kill-kit"],
      ["Operational Excellence & Recovery", "/operations-reset"],
      ["90-Day Operations Reset", "/operations-reset"],
      ["Decision Signal Review", "/contact"],
      ["Decision Analytics", "/contact"],
      ["Decision Analytics", "/contact"],
      ["AI Process Redesign & Automation", "/ai-time-saver-sprint"],
      ["AI Time Saver Sprint", "/ai-time-saver-sprint"],
      ["AI Process Redesign & Automation", "/ai-time-saver-sprint"],
    ] as const;

    for (const [label, href] of expectedLinks) {
      const candidates = screen.getAllByRole("link", { name: label });
      expect(
        candidates.some((link) => link.getAttribute("href") === href),
      ).toBe(true);
    }
  });

  it("preserves native disclosure behavior without client-side state", () => {
    const { container } = render(<ServicesPage />);
    const firstDisclosure = container.querySelector("details");
    const firstSummary = firstDisclosure?.querySelector("summary");

    expect(firstDisclosure).not.toHaveAttribute("open");
    fireEvent.click(firstSummary as HTMLElement);
    expect(firstDisclosure).toHaveAttribute("open");
    fireEvent.click(firstSummary as HTMLElement);
    expect(firstDisclosure).not.toHaveAttribute("open");
  });

  it("emits one FAQPage block whose questions and answers match the visible disclosures", () => {
    const { container } = render(<ServicesPage />);
    const faqBlocks = jsonLdFrom(container).filter(
      (item) => item["@type"] === "FAQPage",
    );
    const disclosures = Array.from(container.querySelectorAll("details"));

    expect(faqBlocks).toHaveLength(1);
    expect(faqBlocks[0].mainEntity).toHaveLength(15);

    for (const [index, entity] of faqBlocks[0].mainEntity.entries()) {
      const disclosure = disclosures[index];
      const visibleQuestion = normalizedText(
        disclosure.querySelector("summary")?.textContent,
      );
      const visibleAnswer = Array.from(
        disclosure.querySelectorAll("[data-misdiagnosis-answer] > p"),
      )
        .map((paragraph) => normalizedText(paragraph.textContent))
        .join(" ");

      expect(entity).toMatchObject({
        "@type": "Question",
        name: visibleQuestion,
        acceptedAnswer: {
          "@type": "Answer",
          text: visibleAnswer,
        },
      });
    }
  });
});
