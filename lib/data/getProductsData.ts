import client from "@/lib/apollo-client";
import {
  GET_CATEGORIES,
  GET_CATEGORY_BY_SLUG,
  GET_PRODUCT_BY_SLUG,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SEARCH_PRODUCTS,
} from "../queries/getProducts";

export async function getProductBySlug(slug: string) {
  const { data } = await client.query<any>({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug },
    fetchPolicy: "cache-first",
  });

  return data?.product || null;
}

export async function getProductsData() {
  const { data } = await client.query<any>({ query: GET_PRODUCTS, fetchPolicy: "cache-first" });
  return data?.products?.nodes || [];
}

export async function getSearchProductsData(searchTerm?: string) {
  try {
    const { data } = await client.query<any>({
      query: GET_SEARCH_PRODUCTS,
      variables: searchTerm ? { search: searchTerm } : {},
      fetchPolicy: "cache-first",
    });
    return data?.products?.nodes || [];
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}

export async function getProductsByCategory(category: string) {
  const { data } = await client.query<any>({
    query: GET_PRODUCTS_BY_CATEGORY,
    variables: { category },
    fetchPolicy: "cache-first",
  });
  return data?.products?.nodes || [];
}

export async function getCategoriesData() {
  const { data } = await client.query<any>({ query: GET_CATEGORIES, fetchPolicy: "cache-first" });
  return data?.productCategories?.nodes || [];
}
export async function getCategoryBySlug(slug: string) {
  try {
    const { data } = await client.query<any>({
      query: GET_CATEGORY_BY_SLUG,
      variables: { slug },
      fetchPolicy: "cache-first",
    });
    return data?.productCategory || null;
  } catch (error) {
    return null;
  }
}
