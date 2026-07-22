import type { Metadata } from "next";
import { headers } from "next/headers";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/ui/json-ld";
import {
  personJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { site } from "@/content/site";
import "./globals.css";

const defaultTitle = "Dan Feliciano | Fix What Is Slowing Your Business Down";
const defaultDescription = site.description;

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "danfeliciano.com";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase);

  return {
    metadataBase,
    title: {
      default: defaultTitle,
      template: "%s",
    },
    description: defaultDescription,
    openGraph: {
      type: "website",
      title: defaultTitle,
      description: defaultDescription,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Dan Feliciano Fix What Is Slowing Your Business Down social preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [socialImage],
    },
  };
}

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
