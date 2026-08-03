import { OwnerOfferPage } from "@/components/ui/owner-offer-page";
import { getOwnerOffer } from "@/content/owner-offers";
import { createMetadata } from "@/lib/seo";

const offer = getOwnerOffer("operations-reset");

export const metadata = createMetadata({
  ...offer.metadata,
  path: offer.href,
});

export default function OperationsResetPage() {
  return <OwnerOfferPage offer={offer} />;
}
