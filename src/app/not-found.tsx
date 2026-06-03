import type { Metadata } from "next";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Page Not Found | Dan Feliciano",
  description:
    "The requested page could not be found. Return home or contact Dan Feliciano for Strategic Forensics, AI process redesign, policy impact, or backlog support.",
};

export default function NotFound() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="The page you requested is not available. Use the main paths below to get back to Strategic Forensics, AI, policy, backlog, and briefing work."
        title="Page not found"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CtaButton className="w-full sm:w-auto" href="/">
            Return home
          </CtaButton>
          <CtaButton className="w-full sm:w-auto" href="/contact" variant="secondary">
            Contact Dan
          </CtaButton>
        </div>
      </PageHeader>

      <FinalCTA
        body="If you were looking for Strategic Forensics, AI process redesign, policy impact, backlog diagnostics, or briefings, the contact page is the fastest route."
        cta="Book a Strategic Forensics Briefing"
        href="/contact"
        title="Need help finding the right path?"
      />
    </main>
  );
}
