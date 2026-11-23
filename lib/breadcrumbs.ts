import { NavLinks } from "@/const/navlinks";
import type { BreadcrumbItem } from "@/components/breadcrumb";

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

type ProductWithCategory = {
  name?: string;
  slug?: string;
  productCategories?: {
    nodes?: Array<{ name?: string; slug?: string }>;
  };
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
  const rootCrumb: BreadcrumbItem[] = includeProducts ? [productsCrumb] : [];

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

/** Builds the trail for product detail pages using their first category. */
export function getProductBreadcrumbs(
  product: ProductWithCategory
): BreadcrumbItem[] {
  const category = product?.productCategories?.nodes?.[0];
  const parentCrumbs: BreadcrumbItem[] = category?.slug
    ? getCategoryBreadcrumbs(category.slug, category.name)
    : [productsCrumb];

  return [
    ...parentCrumbs,
    { label: product?.name || "Product", href: `/${product?.slug || ""}` },
  ];
}
