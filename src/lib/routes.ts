export const requiredRoutes = [
  "/",
  "/strategic-forensics",
  "/ai-process-redesign",
  "/policy-impact-analysis",
  "/backlog-kill",
  "/services",
  "/services/aesop-strategy-governance",
  "/services/phoenix-protocol",
  "/services/ai-automation-analytics",
  "/products",
  "/products/backlog-kill-kit",
  "/products/policy-forensics",
  "/academy",
  "/academy/lean-six-sigma-ai-yellow-belt",
  "/academy/lean-six-sigma-ai-green-belt",
  "/academy/lean-six-sigma-ai-black-belt",
  "/speaking",
  "/case-studies",
  "/insights",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export type SiteRoute = (typeof requiredRoutes)[number];

export type LegacyRedirect = {
  source: string;
  destination: SiteRoute;
};

export const legacyRedirects = [
  { source: "/certifications", destination: "/academy" },
  {
    source: "/lean-six-sigma-yellow-belt",
    destination: "/academy/lean-six-sigma-ai-yellow-belt",
  },
  {
    source: "/lean-six-sigma-green-belt",
    destination: "/academy/lean-six-sigma-ai-green-belt",
  },
  {
    source: "/lean-six-sigma-black-belt",
    destination: "/academy/lean-six-sigma-ai-black-belt",
  },
  { source: "/consulting", destination: "/services" },
  { source: "/training", destination: "/academy" },
  { source: "/phoenix", destination: "/backlog-kill" },
  { source: "/backlog", destination: "/backlog-kill" },
  { source: "/ai", destination: "/ai-process-redesign" },
  { source: "/policy", destination: "/policy-impact-analysis" },
] as const satisfies readonly LegacyRedirect[];
