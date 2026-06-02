import { spawnSync } from "node:child_process";
import { describe, expect, it } from "vitest";

type SearchResult = {
  status: number | null;
  signal: NodeJS.Signals | null;
  error?: Error;
  stdout: string;
  stderr: string;
};

function forbiddenLegacyBrand() {
  return ["Op", "Ex", "90"].join("");
}

function scanDeployedSource(): SearchResult {
  const result = spawnSync(
    "rg",
    [
      "-n",
      "--glob",
      "src/**",
      "--glob",
      "package.json",
      "--glob",
      "next.config.ts",
      "--glob",
      "tailwind.config.ts",
      "--glob",
      "!src/test/legacy-brand.test.ts",
      forbiddenLegacyBrand(),
    ],
    { encoding: "utf8" },
  );

  return {
    status: result.status,
    signal: result.signal,
    error: result.error,
    stdout: result.stdout,
    stderr: result.stderr,
  };
}

function assertNoLegacyBrandMatches(result: SearchResult) {
  if (result.error) {
    throw result.error;
  }

  if (result.signal) {
    throw new Error(`rg terminated by signal ${result.signal}`);
  }

  if (result.status === 1) {
    expect(result.stdout.trim()).toBe("");
    return;
  }

  if (result.status === 0) {
    throw new Error(
      `Found forbidden legacy brand matches:\n${result.stdout.trim()}`,
    );
  }

  throw new Error(
    [
      `rg failed with exit code ${result.status ?? "unknown"}`,
      result.stdout.trim() ? `stdout:\n${result.stdout.trim()}` : "",
      result.stderr.trim() ? `stderr:\n${result.stderr.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  );
}

function searchResult(overrides: Partial<SearchResult>): SearchResult {
  return {
    status: 1,
    signal: null,
    stdout: "",
    stderr: "",
    ...overrides,
  };
}

describe("legacy brand cleanup", () => {
  it("does not include the forbidden legacy string in deployed source", () => {
    assertNoLegacyBrandMatches(scanDeployedSource());
  });

  it("accepts rg exit code 1 as no matches", () => {
    expect(() =>
      assertNoLegacyBrandMatches(searchResult({ status: 1 })),
    ).not.toThrow();
  });

  it("fails with matching output when rg finds the legacy brand", () => {
    const matchingOutput = [
      "src/app/page.tsx:1:",
      forbiddenLegacyBrand(),
    ].join("");

    expect(() =>
      assertNoLegacyBrandMatches(
        searchResult({ status: 0, stdout: matchingOutput }),
      ),
    ).toThrow(matchingOutput);
  });

  it("fails when rg exits with an execution error", () => {
    expect(() =>
      assertNoLegacyBrandMatches(
        searchResult({ status: 2, stderr: "unrecognized flag" }),
      ),
    ).toThrow(/rg failed with exit code 2/);
  });

  it("fails when rg is interrupted", () => {
    expect(() =>
      assertNoLegacyBrandMatches(
        searchResult({ status: null, signal: "SIGTERM" }),
      ),
    ).toThrow(/SIGTERM/);
  });

  it("fails when rg cannot be started", () => {
    expect(() =>
      assertNoLegacyBrandMatches(
        searchResult({ status: null, error: new Error("spawn rg ENOENT") }),
      ),
    ).toThrow(/spawn rg ENOENT/);
  });
});
