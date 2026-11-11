import { gql } from "@apollo/client";

// ✅ GraphQL Query
export const GET_DOMICILIARY = gql`
  query GET_domiciliary {
    page(id: "domcare", idType: URI) {
      id
      title
      domiciliaryInfo {
        banner {
          title
          description
          video {
            url
          }
          videoPoster {
            node {
              altText
              mediaItemUrl
            }
          }
        }
        aboutDomcare {
          title
          subTitle
          description
          options {
            title
            description
            icon {
              node {
                mediaItemUrl
                altText
              }
            }
          }
        }
        careFor {
          title
          description
          image {
            node {
              altText
              mediaItemUrl
            }
          }
          options {
            title
            description
          }
        }
        activities {
          options {
            title
            description
            link {
              url
            }
            image {
              node {
                altText
                mediaItemUrl
              }
            }
          }
        }
        cta {
          title
          description
          link {
            url
          }
          image {
            node {
              altText
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

// ✅ Existing Interfaces (unchanged)
export interface MediaNode {
  altText: string;
  mediaItemUrl: string;
}
export interface VideoPoster {
  node: MediaNode;
}

export interface Video {
  url: string;
}

export interface Banner {
  title: string;
  description: string;
  video: Video;
  videoPoster: VideoPoster;
}

export interface AboutOption {
  title: string;
  description: string;
  icon: { node: MediaNode };
}

export interface AboutDomcare {
  title: string;
  subTitle: string;
  description: string;
  options: AboutOption[];
}

// ✅ Existing CareFor Section Interfaces
export interface CareForOption {
  title: string;
  description: string;
}

export interface CareFor {
  title: string;
  description: string;
  image: { node: MediaNode };
  options: CareForOption[];
}

// ✅ NEW: Activities Section
export interface ActivityOption {
  title: string;
  description: string;
  link: {
    url: string;
  };
  image: {
    node: MediaNode;
  };
}

export interface Activities {
  options: ActivityOption[];
}

// ✅ NEW: CTA Section
export interface CTA {
  title: string;
  description: string;
  link: {
    url: string;
  };
  image: {
    node: MediaNode;
  };
}

export interface DomiciliaryInfo {
  banner?: Banner;
  aboutDomcare?: AboutDomcare;
  careFor?: CareFor;
  activities?: Activities;
  cta?: CTA; 
}

export interface DomiciliaryPage {
  id: string;
  title: string;
  domiciliaryInfo: DomiciliaryInfo;
}

export interface GetDomiciliaryQuery {
  page?: DomiciliaryPage;
}
