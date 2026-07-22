import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`
 query GetPostBySlug($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
    title
    slug
    excerpt
    content
    date
    modified
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    author {
      node {
        name
      }
    }
    categories(first: 10) {
      edges {
        node {
          name
          slug
        }
      }
    }
    seo {
      title
      description
      canonicalUrl
      openGraph {
        image {
          secureUrl
        }
      }
    }
  }
}
`;

export const GET_POST_BY_CAT = gql`
  query getpostbycat($id: ID!) {
    category(id: $id, idType: SLUG) {
      name
      posts {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              mediaItemUrl
              altText
            }
          }
        }
      }
    }
  }
`;
