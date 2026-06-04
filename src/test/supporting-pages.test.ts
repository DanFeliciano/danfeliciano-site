import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import AcademyPage from "@/app/academy/page";
import BlackBeltCoursePage from "@/app/academy/lean-six-sigma-ai-black-belt/page";
import GreenBeltCoursePage from "@/app/academy/lean-six-sigma-ai-green-belt/page";
import YellowBeltCoursePage from "@/app/academy/lean-six-sigma-ai-yellow-belt/page";
import ResultsPage from "@/app/results/page";
import SpeakingPage from "@/app/speaking/page";
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

  it("uses non-placeholder insight card labels", () => {
    expect(
      insightCards.every((card) => !/coming soon|placeholder|todo/i.test(card.status)),
    ).toBe(true);
  });

  it("defines speaking topics", () => {
    expect(speakingTopics.length).toBeGreaterThanOrEqual(5);
  });

  it("renders supporting page H1s", () => {
    const pages = [
      { component: AcademyPage, h1: "Train your team to fix work." },
      { component: ResultsPage, h1: "Results" },
      { component: SpeakingPage, h1: "Speaking & Workshops" },
    ] as const;

    for (const page of pages) {
      const { unmount } = render(createElement(page.component));

      expect(
        screen.getByRole("heading", { level: 1, name: page.h1 }),
      ).toBeInTheDocument();
      unmount();
    }
  });

  it("renders course page H1s", () => {
    const pages = [
      { component: YellowBeltCoursePage, h1: "Lean Six Sigma + AI Yellow Belt" },
      { component: GreenBeltCoursePage, h1: "Lean Six Sigma + AI Green Belt" },
      { component: BlackBeltCoursePage, h1: "Lean Six Sigma + AI Black Belt" },
    ] as const;

    for (const page of pages) {
      const { unmount } = render(createElement(page.component));

      expect(
        screen.getByRole("heading", { level: 1, name: page.h1 }),
      ).toBeInTheDocument();
      unmount();
    }
  });

  it("uses owner-facing course CTAs", () => {
    expect(courses.map((course) => course.cta)).toEqual([
      "Ask About Yellow Belt Training",
      "Ask About Green Belt Training",
      "Ask About Black Belt Training",
    ]);
  });
});
