import { gql } from "@apollo/client";

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: ID!) {
  page(id: $slug, idType: URI) {
    id
    title
    content
    slug
    featuredImage {
      node {
        mediaItemUrl
      }
    }
      allPages {
      category {
         nodes {
          databaseId
          name
          ... on ProductCategory {
            products {
              nodes {
                databaseId
                ... on SimpleProduct {
                  name
                  slug
                  featuredImage {
                    node {
                      mediaItemUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    seo {
      title
      description
      canonicalUrl
      focusKeywords
      openGraph {
        image {
          secureUrl
        }
      }
    }
  }
}
`;
