import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.halepathpackaging.com";

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const hasHome =
    items[0]?.href === "/" || items[0]?.label.toLowerCase() === "home";

  const crumbs: BreadcrumbItem[] = hasHome
    ? items
    : [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: new URL(item.href, baseUrl).toString() } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`border-b border-black/5 bg-[#f7f7f7] ${className}`.trim()}
      >
        <ol className="hale_container flex flex-wrap items-center py-3 text-xs text-txt_Clr sm:text-[13px]">
          {crumbs.map((item, index) => {
            const isLast = index === crumbs.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center">
                {index > 0 && (
                  <span aria-hidden="true" className="mx-2 text-gray-400">
                    ›
                  </span>
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={isLast ? "font-medium text-title_Clr" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
