import { OwnerOfferPage } from "@/components/ui/owner-offer-page";
import { getOwnerOffer } from "@/content/owner-offers";
import { createMetadata } from "@/lib/seo";

const offer = getOwnerOffer("what-i-fix");

export const metadata = createMetadata({
  ...offer.metadata,
  path: offer.href,
});

export default function WhatIFixPage() {
  return <OwnerOfferPage offer={offer} />;
}
