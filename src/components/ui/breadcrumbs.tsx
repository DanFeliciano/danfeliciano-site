import Link from "next/link";
import type { SiteRoute } from "@/lib/routes";

type BreadcrumbItem = {
  label: string;
  href: SiteRoute;
};

type BreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-graphite text-white">
      <div className="mx-auto w-full max-w-site px-5 py-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li className="flex items-center gap-3" key={item.href}>
                {index > 0 ? (
                  <span aria-hidden="true" className="text-slate-500">
                    /
                  </span>
                ) : null}
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-signal">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    className="font-semibold text-slate-300 transition hover:text-signal"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
