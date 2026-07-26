import { Section } from "@/components/layout/section";
import { CtaButton } from "@/components/ui/cta-button";
import { FinalCTA } from "@/components/ui/final-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import type { OwnerOffer, OfferSection } from "@/content/owner-offers";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

function OfferSectionBlock({ section }: { section: OfferSection }) {
  return (
    <Section className="bg-paper text-charcoal">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          {section.eyebrow ? (
            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              {section.eyebrow}
            </p>
          ) : null}
          <h2
            className={`text-balance text-3xl font-black tracking-normal sm:text-4xl ${
              section.eyebrow ? "mt-3" : ""
            }`}
          >
            {section.title}
          </h2>
          {section.body ? (
            <p className="mt-4 text-base leading-7 text-slate-600">
              {section.body}
            </p>
          ) : null}
        </div>
        {section.items ? (
          <ul className="grid gap-3 sm:grid-cols-2">
            {section.items.map((item) => (
              <li
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold leading-6 text-charcoal shadow-command"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        {section.cards ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {section.cards.map((card) => (
              <article
                className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-command"
                key={card.title}
              >
                <h3 className="text-lg font-black leading-6 text-charcoal">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {card.body}
                </p>
                {card.href && card.cta ? (
                  <div className="mt-auto pt-5">
                    <CtaButton className="w-full" href={card.href}>
                      {card.cta}
                    </CtaButton>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
}

export function OwnerOfferPage({ offer }: { offer: OwnerOffer }) {
  return (
    <main id="main-content">
      <PageHeader subhead={offer.subhead} title={offer.title}>
        <CtaButton href="/contact">{offer.primaryCta}</CtaButton>
      </PageHeader>

      <Section className="bg-white text-charcoal">
        <div className="max-w-3xl">
          {offer.intro.map((paragraph) => (
            <p
              className="mt-4 first:mt-0 text-base leading-7 text-slate-600"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {offer.sections.map((section) => (
        <OfferSectionBlock key={section.title} section={section} />
      ))}

      {offer.method ? (
        <Section className="bg-graphite text-white">
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-black tracking-normal sm:text-4xl">
              {offer.method.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              {offer.method.body}
            </p>
          </div>
        </Section>
      ) : null}

      <FinalCTA
        body={
          offer.finalCta.body ??
          "Start with a practical conversation about where the work is stuck and what to fix first."
        }
        cta={offer.finalCta.cta}
        href={offer.finalCta.href}
        title={offer.finalCta.title}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: offer.title,
          description: offer.metadata.description,
          provider: {
            "@type": "Person",
            name: site.name,
            url: site.url,
          },
          url: absoluteUrl(offer.href),
        }}
      />
    </main>
  );
}
