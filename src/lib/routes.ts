export const requiredRoutes = [
  "/",
  "/what-i-fix",
  "/services",
  "/backlog-kill-kit",
  "/ai-time-saver-sprint",
  "/operations-reset",
  "/owner-operating-system",
  "/policy-forensics",
  "/academy",
  "/academy/lean-six-sigma-ai-yellow-belt",
  "/academy/lean-six-sigma-ai-green-belt",
  "/academy/lean-six-sigma-ai-black-belt",
  "/results",
  "/speaking",
  "/insights",
  "/insights/your-ai-isnt-broken-your-business-is-invisible",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export const compatibilityRoutes = [
  "/strategic-forensics",
  "/policy-impact-analysis",
  "/backlog-kill",
  "/products",
  "/briefings",
  "/about",
  "/services/aesop-strategy-governance",
  "/services/phoenix-protocol",
  "/services/ai-automation-analytics",
  "/products/backlog-kill-kit",
  "/products/policy-forensics",
  "/ai-process-redesign",
  "/case-studies",
] as const;

export const allSiteRoutes = [
  ...requiredRoutes,
  ...compatibilityRoutes,
] as const;

export type SiteRoute = (typeof allSiteRoutes)[number];
export type SiteHref = SiteRoute | `#${string}`;

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
  { source: "/consulting", destination: "/what-i-fix" },
  { source: "/training", destination: "/academy" },
  { source: "/phoenix", destination: "/operations-reset" },
  { source: "/backlog", destination: "/backlog-kill-kit" },
  { source: "/ai", destination: "/ai-time-saver-sprint" },
  { source: "/policy", destination: "/policy-forensics" },
  { source: "/products/backlog-kill-kit", destination: "/backlog-kill-kit" },
  { source: "/ai-process-redesign", destination: "/ai-time-saver-sprint" },
  { source: "/products/policy-forensics", destination: "/policy-forensics" },
  { source: "/services/phoenix-protocol", destination: "/operations-reset" },
  {
    source: "/services/aesop-strategy-governance",
    destination: "/owner-operating-system",
  },
  {
    source: "/services/ai-automation-analytics",
    destination: "/ai-time-saver-sprint",
  },
  { source: "/case-studies", destination: "/results" },
] as const satisfies readonly LegacyRedirect[];
