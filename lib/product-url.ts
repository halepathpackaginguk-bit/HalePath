export function getProductPath(slug?: string | null): string {
  const cleanSlug = (slug || "").trim().replace(/^\/+|\/+$/g, "");

  return cleanSlug ? `/${cleanSlug}` : "/products";
}
