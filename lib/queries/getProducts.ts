import { gql } from "@apollo/client";

/* ---------------------------
   PRODUCT BY SLUG
---------------------------- */
export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      name
      slug
      shortDescription
      featuredImage {
        node {
          mediaItemUrl
        }
      }

      related(first: 4) {
        nodes {
          name
          slug
          ... on SimpleProduct {
            id
            name
            featuredImage {
              node {
                mediaItemUrl
                sourceUrl
              }
            }
          }
        }
      }
      galleryImages {
        nodes {
          mediaItemUrl
        }
      }
      ... on SimpleProduct {
        price
        faqs {
          faqsSections {
            title
            description
          }
        }
        productSpecifications {
          productGallery {
            nodes {
              mediaItemUrl
              altText
            }
          }

          productExtraInfo {
            infoBox {
              description
              title
              image {
                node {
                  mediaItemUrl
                }
              }
            }
            infoBox2 {
              description
              title
              image {
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
`;

/* ---------------------------
   ALL PRODUCTS
---------------------------- */
export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 100) {
      nodes {
        name
        slug
        description

        ... on SimpleProduct {
          id
          name
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          galleryImages {
            nodes {
              ...MediaItemFragment
            }
          }
          productCategories {
            ...ProductToProductCategoryConnectionFragment
          }
        }
      }
    }
  }
  fragment MediaItemFragment on MediaItem {
    mediaItemUrl
  }

  fragment ProductToProductCategoryConnectionFragment on ProductToProductCategoryConnection {
    nodes {
      uri
      slug
      name
    }
  }
`;

/* ---------------------------
   ALL PRODUCTS
---------------------------- */
export const GET_SEARCH_PRODUCTS = gql`
query GetSearchProducts($search: String = "Test") {
  products(first: 10, where: {search: $search}) {
    nodes {
      name
      slug
      ... on SimpleProduct {
        id
        name
      }
    }
  }
}
`;

/* ---------------------------
   PRODUCTS BY CATEGORY
---------------------------- */
export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($category: String = "branded-finishes") {
    products(first: 100, where: { category: $category }) {
      nodes {
        id
        name
        slug
        ... on SimpleProduct {
          price
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

/* ---------------------------
   ALL CATEGORIES
---------------------------- */
export const GET_CATEGORIES = gql`
  query GetCategories {
    productCategories(first: 20) {
      nodes {
        id
        name
        slug
        image {
          sourceUrl
          mediaItemUrl
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
  }
`;

/* ---------------------------
   ⭐ SINGLE CATEGORY BY SLUG (FIXED)
---------------------------- */
export const GET_CATEGORY_BY_SLUG = gql`
  query GetCategoryBySlug($slug: ID = "branded-finishes") {
    productCategory(idType: SLUG, id: $slug) {
      id
      name
      slug
      image {
        sourceUrl
        mediaItemUrl
      }

      faqs {
        faqsSections {
          title
          description
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
