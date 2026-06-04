import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import {
  personJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://danfeliciano.com"),
  title: {
    default: "Dan Feliciano | Fix What Is Slowing Your Business Down",
    template: "%s",
  },
  description:
    "Dan Feliciano helps business owners and operators find bottlenecks, recover lost time, improve follow-up, reduce chaos, and use AI or automation where it actually makes the business easier to run.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
          href="#main-content"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <JsonLd
          data={[personJsonLd(), professionalServiceJsonLd(), websiteJsonLd()]}
        />
      </body>
    </html>
  );
}
