import { execSync } from "node:child_process";
import { describe, expect, it } from "vitest";

describe("legacy brand cleanup", () => {
  it("does not include the forbidden legacy string in deployed source", () => {
    const forbidden = ["Op", "Ex", "90"].join("");
    const output = execSync(
      `rg -n --glob 'src/**' --glob 'package.json' --glob 'next.config.ts' --glob '!src/test/legacy-brand.test.ts' '${forbidden}' || true`,
      { encoding: "utf8" },
    );

    expect(output.trim()).toBe("");
  });
});
