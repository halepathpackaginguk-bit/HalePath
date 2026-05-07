import { gql } from "@apollo/client";

export const GET_HOME = gql`
  query GetFrontPage {
    page(id: "home", idType: URI) {
      title
      homeInfo {
        aboutSection {
          aboutlink
          content
        }
        bannerSlider {
          btnlink
          desc
          title
        }
        corrugatedSection {
          content
          title
        }
        homeServices {
          title
          subtitle
          service {
            content
            title
            image {
              node {
                mediaItemUrl
                
              }
            }
          }
        }
        workWeDo {
          title
          subtitle
          service {
            content
            title
            servicelink
            image {
              node {
                mediaItemUrl
              }
            }
          }
        }

        faqsSections {
          title
          description
        }
      }
      homePage {
        latestCategories {
          nodes {
            name
            databaseId
            slug
            databaseId
            ... on ProductCategory {
              id
              name
              image {
                mediaItemUrl
                  
              }
            }
          }
        }
        printAdvertising {
          ...AcfContentNodeConnectionFragment
        }
        corrugatedPackaging {
          ...AcfContentNodeConnectionFragment
        }
        flexiblePackaging {
          ...AcfContentNodeConnectionFragment
        }
        offsetPrintingProducts {
          ...AcfContentNodeConnectionFragment
        }
      }
    }
  }
  fragment AcfContentNodeConnectionFragment on AcfContentNodeConnection {
    nodes {
      databaseId
      ... on SimpleProduct {
        id
        name
      }
    }
  }
`;
