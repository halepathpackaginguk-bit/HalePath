import type { NextConfig } from "next";

const redirectsList = [
  {
    source: "/custom-cbd-display-boxes",
    destination: "/category/custom-cbd-display-boxes",
  },
  {
    source: "/custom-vape-packaging",
    destination: "/category/custom-vape-packaging",
  },
];

const nextConfig: NextConfig = {
  images: {
    domains: ["api.halepathpackaging.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return redirectsList.map((r) => ({
      source: r.source,
      destination: r.destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
