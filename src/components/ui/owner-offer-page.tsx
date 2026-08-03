import Link from "next/link";
import { Section } from "@/components/layout/section";
import { FinalCTA } from "@/components/ui/final-cta";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHeader } from "@/components/ui/page-header";
import type { OwnerOffer, OfferSection } from "@/content/owner-offers";
import { pageHeroes } from "@/content/page-heroes";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

function OfferSectionBlock({ section }: { section: OfferSection }) {
  return (
    <Section
      className="scroll-mt-24 bg-paper text-charcoal"
      id={section.id}
      tabIndex={section.id ? -1 : undefined}
    >
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
            {section.cards.map((card) =>
              card.href && card.cta ? (
                <Link
                  aria-label={card.cta}
                  className="group flex h-full min-h-44 flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-command transition hover:border-signal hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-signal"
                  href={card.href}
                  key={card.title}
                >
                  <h3 className="text-lg font-black leading-6 text-charcoal">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {card.body}
                  </p>
                  <span className="mt-auto pt-5 text-sm font-black text-charcoal underline decoration-signal decoration-2 underline-offset-4 group-hover:text-slate-600">
                    {card.cta} →
                  </span>
                </Link>
              ) : (
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
                </article>
              ),
            )}
          </div>
        ) : null}
      </div>
    </Section>
  );
}

export function OwnerOfferPage({ offer }: { offer: OwnerOffer }) {
  const hero = pageHeroes[offer.href as keyof typeof pageHeroes];
  const [firstSection, ...remainingSections] = offer.sections;

  return (
    <main id="main-content">
      <PageHeader {...hero} />

      {firstSection ? <OfferSectionBlock section={firstSection} /> : null}

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

      {remainingSections.map((section) => (
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
