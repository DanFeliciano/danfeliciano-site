import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan Feliciano",
  description: "Operational strategy, AI automation, analytics, training, and execution.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
