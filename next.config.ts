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
  {
    source: "/custom-two-piece-boxes",
    destination: "/two-piece-rigid-box",
  },
  {
    source: "/custom-hexagon-boxes",
    destination: "/rigid-hexagon-boxes",
  },
  {
    source: "/custom-business-cards-boxes",
    destination: "/business-card-boxes",
  },
  {
    source: "/1-2-3-bottom",
    destination: "/1-2-3-bottom-tray",
  },
  {
    source: "/custom-seprate-lid-gift-box",
    destination: "/gift-box-with-separate-lid",
  },
  {
    source: "/kraft-food-pouches-2",
    destination: "/kraft-food-pouches",
  },
  {
    source: "/category/product-by-industry/cbd-packaging",
    destination: "/category/industries",
  },
  {
    source: "/printed-cardboard-wrist-watch-packaging-boxes",
    destination: "/custom-watch-box",
  },
  {
    source: "/category/retail-boxes/custom-corrugated-boxes",
    destination: "/corrugated-boxes/",
  },
  {
    source: "/custom-eco-friendly-separate-lid-boxes",
    destination: "/eco-friendly-mailer-boxes",
  },
  {
    source: "/gable-bag-1-2-3-bottom",
    destination: "/gable-bag-auto-bottom",
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
