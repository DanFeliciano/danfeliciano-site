import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArticleBody,
  InlineMarkdown,
  splitArticleBody,
} from "@/components/insights/article-body";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaButton } from "@/components/ui/cta-button";
import { JsonLd } from "@/components/ui/json-ld";
import { getPublishedInsight, publishedInsights } from "@/content/insights";
import { pageHeroes } from "@/content/page-heroes";
import {
  articleJsonLd,
  breadcrumbListJsonLd,
  createArticleMetadata,
} from "@/lib/seo";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedInsights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getPublishedInsight(slug);

  if (!article) {
    return {};
  }

  return createArticleMetadata(article);
}

export default async function InsightArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getPublishedInsight(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Insights", href: "/insights" },
    { label: article.category, href: article.href },
  ] as const;
  const { bodyBlocks, ctaHeading, ctaBody, ctaLabel } = splitArticleBody(
    article.body,
    article.title,
    article.subtitle,
  );
  const hero =
    pageHeroes["/insights/your-ai-isnt-broken-your-business-is-invisible"];

  return (
    <main id="main-content">
      <Breadcrumbs items={breadcrumbs} />

      <header className="bg-ink py-10 text-white sm:py-12 lg:py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-signal">
              {article.contentType.toUpperCase()} #{article.seriesNumber}
            </p>
            <h1 className="mt-4 text-balance text-[2.35rem] font-black leading-[2.65rem] tracking-normal sm:text-5xl sm:leading-tight lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-4 text-xl font-black leading-8 text-white sm:text-2xl">
              {article.subtitle}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {article.excerpt}
            </p>
            <p className="mt-6 text-sm font-semibold text-slate-300">
              {article.author}
              <span aria-hidden="true"> · </span>
              <time dateTime={article.publishedAt}>
                {article.publishedLabel}
              </time>
              <span aria-hidden="true"> · </span>
              {article.readTime}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CtaButton
                className="w-full sm:w-auto"
                href={hero.primaryAction.href}
              >
                {hero.primaryAction.label}
              </CtaButton>
              {hero.secondaryAction ? (
                <CtaButton
                  className="w-full sm:w-auto"
                  href={hero.secondaryAction.href}
                  variant="secondary"
                >
                  {hero.secondaryAction.label}
                </CtaButton>
              ) : null}
            </div>
          </div>
        </Container>
      </header>

      <section
        className="scroll-mt-24 bg-paper py-14 text-charcoal sm:py-20"
        id="article-body"
        tabIndex={-1}
      >
        <Container>
          <article className="mx-auto max-w-[46rem]">
            <ArticleBody blocks={bodyBlocks} />
          </article>
        </Container>
      </section>

      <section
        aria-labelledby="article-cta-heading"
        className="bg-graphite px-5 py-16 text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-[46rem] rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-command sm:p-8">
          <h2
            className="text-balance text-3xl font-black tracking-normal sm:text-4xl"
            id="article-cta-heading"
          >
            {ctaHeading}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            <InlineMarkdown text={ctaBody} />
          </p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaButton className="w-full sm:w-auto" href="/contact">
              {ctaLabel}
            </CtaButton>
            <Link
              className="inline-flex min-h-11 items-center justify-center text-sm font-black text-white underline decoration-signal decoration-2 underline-offset-4 hover:text-signal"
              href="/insights"
            >
              Back to Insights
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={[articleJsonLd(article), breadcrumbListJsonLd(breadcrumbs)]}
      />
    </main>
  );
}
