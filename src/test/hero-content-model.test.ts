import { describe, expect, it } from "vitest";
import { pageHeroes } from "@/content/page-heroes";
import { indexableRoutes } from "@/lib/routes";

describe("sitewide hero content model", () => {
  it("covers every indexable public route exactly once", () => {
    expect(Object.keys(pageHeroes).sort()).toEqual(
      [...indexableRoutes].sort(),
    );
  });

  it("uses problem or outcome H1s and actionable primary CTAs", () => {
    for (const hero of Object.values(pageHeroes)) {
      expect(hero.title).not.toBe(hero.eyebrow);
      expect(hero.subhead.length).toBeGreaterThan(0);
      expect(hero.primaryAction.label).not.toMatch(
        /learn more|get started|discover|submit|explore solutions/i,
      );
      expect(hero.primaryAction.label).not.toMatch(
        /find my bottleneck|bottleneck diagnostic/i,
      );
    }
  });
});
