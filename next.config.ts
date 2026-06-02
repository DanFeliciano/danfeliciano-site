import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/certifications", destination: "/academy", permanent: true },
      {
        source: "/lean-six-sigma-yellow-belt",
        destination: "/academy/lean-six-sigma-ai-yellow-belt",
        permanent: true,
      },
      {
        source: "/lean-six-sigma-green-belt",
        destination: "/academy/lean-six-sigma-ai-green-belt",
        permanent: true,
      },
      {
        source: "/lean-six-sigma-black-belt",
        destination: "/academy/lean-six-sigma-ai-black-belt",
        permanent: true,
      },
      { source: "/consulting", destination: "/services", permanent: true },
      { source: "/training", destination: "/academy", permanent: true },
      {
        source: "/phoenix",
        destination: "/services/phoenix-protocol",
        permanent: true,
      },
      {
        source: "/ai",
        destination: "/services/ai-automation-analytics",
        permanent: true,
      },
      {
        source: "/policy",
        destination: "/products/policy-forensics",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
