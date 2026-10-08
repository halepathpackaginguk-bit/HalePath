import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
  query GetServices {
    services {
      nodes {
        id
        slug
        title
        excerpt
        content
        featuredImage {
        node {
          sourceUrl
          altText
        }
      }
        serviceInfo {
        logo {
          node {
            mediaItemUrl
          }
        }
      }
      }
    }
  }
`;

export const GET_SERVICE_BY_SLUG = gql`
  query GetServiceBySlug($slug: ID!) {
    service(id: $slug, idType: SLUG) {
      id
    title
    content
    date
    excerpt
    featuredImage {
      node {
        altText
        mediaItemUrl
      }
    }
    serviceInfo {
      logo {
        node {
          mediaItemUrl
        }
      }
      serviceAbout {
        serviceDetail
      }
    }
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts($first: Int = 10) {
    posts(first: $first) {
      nodes {
        id
        slug
        title
        excerpt
        date
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
      }
    }
  }
`;

export const GET_FAQS = gql`
  query GetFaqs {
      faqs {
        nodes {
          title
          content
        }
      
    }
  }
`;

export const GET_FAQ_BY_CAT = gql`
  query GET_FAQ_BY_CAT($id: ID!) {
    faqType(id: $id, idType: SLUG) {
      faqs {
        nodes {
          title
          content
          date
        }
      }
    }
  }
`;

export const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      nodes {
        title
        content
        reviewInfo {
        rating
      }
      }
    }
  }
`;


export const Query_Post_Categories = gql`
  query PostCategories {
    categories {
      nodes {
        slug
        name
      }
    }
  }
`;


export const GET_TESTIMONAILS = gql`
 query GetTestimonials {
  testimonials {
    nodes {
      title
       featuredImage {
      node {
        sourceUrl
        altText
      }
    }
      content
       testimonialsInfo {
        address
        rating
        incentivized
        customerType
        
      }
    }
  }
}
`;

