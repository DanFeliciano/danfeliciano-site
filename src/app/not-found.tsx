import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { PageHeader } from "@/components/ui/page-header";

export default function NotFound() {
  return (
    <main id="main-content">
      <PageHeader
        subhead="The page you requested is not available. Use the main paths below to get back to the operating work."
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
        body="If you were looking for advisory, training, speaking, or operational diagnostics, the contact page is the fastest route."
        cta="Book a Strategy Diagnostic"
        href="/contact"
        title="Need help finding the right path?"
      />
    </main>
  );
}
