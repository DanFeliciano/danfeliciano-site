import { describe, expect, it } from "vitest";
import { homepage } from "@/content/site";

describe("homepage content", () => {
  it("uses the approved headline and CTAs", () => {
    expect(homepage.title).toBe(
      "Operational Strategy, AI Automation, and Lean Six Sigma Execution",
    );
    expect(homepage.subhead).toContain("reduce backlog");
    expect(homepage.proof).toHaveLength(4);
  });
});
