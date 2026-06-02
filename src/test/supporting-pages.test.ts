import { describe, expect, it } from "vitest";
import { courses, insightCards, speakingTopics } from "@/content/site";

describe("supporting page content", () => {
  it("defines the three academy courses with approved durations", () => {
    expect(courses.map((course) => course.duration)).toEqual([
      "8 hours",
      "40 hours",
      "80 hours",
    ]);
  });

  it("defines ISO 8601 durations for Course structured data", () => {
    expect(courses.map((course) => course.durationIso)).toEqual([
      "PT8H",
      "PT40H",
      "PT80H",
    ]);
  });

  it("marks insight cards as coming soon when article pages are not built", () => {
    expect(insightCards.every((card) => card.status === "Coming soon")).toBe(
      true,
    );
  });

  it("defines speaking topics", () => {
    expect(speakingTopics.length).toBeGreaterThanOrEqual(5);
  });
});
