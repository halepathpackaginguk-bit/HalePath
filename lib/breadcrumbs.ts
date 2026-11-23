import { NavLinks } from "@/const/navlinks";
import type { BreadcrumbItem } from "@/components/breadcrumb";
import { getProductPath } from "@/lib/product-url";

type MenuItem = {
  name?: string;
  title?: string;
  link?: string;
};

type Submenu = {
  name?: string;
  link?: string;
  items?: MenuItem[];
};

type NavGroup = {
  name: string;
  link?: string;
  submenu?: Submenu[];
};

type ProductForBreadcrumb = {
  name?: string;
  slug?: string;
};

const normalizeLink = (link?: string) => (link || "").replace(/\/+$/, "");

const humanizeSlug = (slug: string) =>
  decodeURIComponent(slug)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const productsCrumb: BreadcrumbItem = { label: "Products", href: "/products" };

/**
 * Builds the trail for /category/[slug] using the menu hierarchy so that
 * category pages show names like: Home > Box Styles > Mailer Boxes.
 */
export function getCategoryBreadcrumbs(
  slug: string,
  fallbackName?: string,
  includeProducts = true
): BreadcrumbItem[] {
  const target = normalizeLink(`/category/${slug}`);

  if (!includeProducts) {
    return [
      { label: "Category", href: "/products" },
      {
        label: fallbackName || humanizeSlug(slug),
        href: `/category/${slug}`,
      },
    ];
  }

  const rootCrumb: BreadcrumbItem[] = [productsCrumb];

  for (const group of NavLinks as NavGroup[]) {
    const groupHref =
      normalizeLink(group.link) === "/category" ? "/products" : group.link;

    if (normalizeLink(group.link) === target) {
      return [
        ...rootCrumb,
        { label: group.name, href: groupHref || "/products" },
      ];
    }

    for (const submenu of group.submenu || []) {
      if (normalizeLink(submenu.link) === target) {
        return [
          ...rootCrumb,
          { label: group.name, href: groupHref || "/products" },
          { label: submenu.name || "Category", href: submenu.link || "/products" },
        ];
      }

      for (const item of submenu.items || []) {
        if (normalizeLink(item.link) === target) {
          return [
            ...rootCrumb,
            { label: group.name, href: groupHref || "/products" },
            {
              label: submenu.name || "Category",
              href: submenu.link || "/products",
            },
            {
              label: item.title || item.name || "Category",
              href: item.link,
            },
          ];
        }
      }
    }
  }

  return [
    ...rootCrumb,
    { label: fallbackName || humanizeSlug(slug), href: `/category/${slug}` },
  ];
}

/** Builds a simple Home > Products > product trail for product detail pages. */
export function getProductBreadcrumbs(
  product: ProductForBreadcrumb
): BreadcrumbItem[] {
  return [
    productsCrumb,
    { label: product?.name || "Product", href: getProductPath(product?.slug) },
  ];
}
