import Link from "next/link";
import type { InsightArticle } from "@/content/insights";

type InsightArticleCardProps = {
  article: InsightArticle;
  className?: string;
  headingLevel: 2 | 3;
  variant: "featured" | "homepage";
};

export function InsightArticleCard({
  article,
  className = "",
  headingLevel,
  variant,
}: InsightArticleCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const isFeatured = variant === "featured";

  return (
    <Link
      aria-label={`Read the Point of View: ${article.title}`}
      className={`group block min-h-44 rounded-lg border p-5 transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-signal ${
        isFeatured
          ? "border-white/10 bg-graphite text-white shadow-command hover:border-signal"
          : "border-slate-200 bg-white text-charcoal hover:border-signal hover:shadow-command"
      } ${className}`}
      href={article.href}
    >
      <article>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-black uppercase tracking-[0.12em]">
          <span className={isFeatured ? "text-signal" : "text-slate-500"}>
            {isFeatured
              ? article.contentType.toUpperCase()
              : article.contentType}{" "}
            #{article.seriesNumber}
          </span>
          <span className={isFeatured ? "text-slate-300" : "text-slate-500"}>
            {isFeatured ? article.category.toUpperCase() : article.category}
          </span>
        </div>
        <Heading
          className={`mt-4 text-balance font-black ${
            isFeatured
              ? "text-2xl leading-8 text-white sm:text-3xl sm:leading-9"
              : "text-lg leading-6 text-charcoal"
          }`}
        >
          {article.title}
        </Heading>
        <p
          className={`mt-4 ${
            isFeatured
              ? "max-w-3xl text-base leading-7 text-slate-300"
              : "text-sm leading-6 text-slate-600"
          }`}
        >
          {isFeatured ? article.excerpt : article.homepageSummary}
        </p>
        {isFeatured ? (
          <p className="mt-5 text-sm font-semibold text-slate-300">
            {article.publishedLabel}
            <span aria-hidden="true"> · </span>
            {article.readTime}
          </p>
        ) : null}
        <span
          className={`mt-5 inline-flex text-sm font-black underline decoration-signal decoration-2 underline-offset-4 ${
            isFeatured ? "text-white group-hover:text-signal" : "text-charcoal"
          }`}
        >
          Read the Point of View <span aria-hidden="true">→</span>
        </span>
      </article>
    </Link>
  );
}
