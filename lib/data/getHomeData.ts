import client from "@/lib/apollo-client";
import { GET_HOME } from "../queries/GetFrontPage";
import { GET_POSTS, GET_TESTIMONAILS } from "../queries/gql-query";
import { GET_PAGE_BY_SLUG } from "../queries/getPageBySlug";
import { GET_POST_BY_SLUG } from "../queries/getPostBySlug";

export async function getHomeData() {
  const { data } = await client.query<any>({ query: GET_HOME, fetchPolicy: "cache-first" });
  return data.page || {};
}

export async function getTestimonails(): Promise<any[]> {
  try {
    const { data } = await client.query<any>({
      query: GET_TESTIMONAILS,
      variables: { first: 10 },
      fetchPolicy: "cache-first",
    });

    return (data?.testimonials?.nodes ?? []).filter((t:any): t is any => !!t);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogData(): Promise<any[]> {
  try {
    const { data } = await client.query<any>({
      query: GET_POSTS,
      variables: { first: 30 },
      fetchPolicy: "cache-first",
    });

    return (data?.posts?.nodes ?? []).filter((p:any): p is any => !!p);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<any | null> {
  try {
    const { data } = await client.query<{ post: any }>({
      query: GET_POST_BY_SLUG,
      variables: { slug },
      fetchPolicy: "cache-first",
    });

    return data?.post ?? null;
  } catch (error) {
    console.error(`Error fetching blog post for slug "${slug}":`, error);
    return null;
  }
}


export async function getPageBySlug(slug: string) {
  try {
    const { data } = await client.query<any>({
      query: GET_PAGE_BY_SLUG,
      variables: {
        slug: `/${slug}/`,
      },
      fetchPolicy: "cache-first",
    });

    return data?.page || null;
  } catch (error) {
    return null;
  }
}





