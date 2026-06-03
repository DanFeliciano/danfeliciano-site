export const requiredRoutes = [
  "/",
  "/strategic-forensics",
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
  { source: "/phoenix", destination: "/services/phoenix-protocol" },
  { source: "/ai", destination: "/services/ai-automation-analytics" },
  { source: "/policy", destination: "/products/policy-forensics" },
] as const satisfies readonly LegacyRedirect[];
