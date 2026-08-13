import type { NextConfig } from "next";

const redirectsList = [
  {
    source: "/custom-cbd-display-boxes",
    destination: "/category/cbd-products",
  },
  {
    source: "/custom-vape-packaging",
    destination: "/category/vape-e-cigarettes",
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
    source: "/1-2-3-bottom-tray",
    destination: "/1-2-3-bottom-tray",
  },
  {
    source: "/gift-box-with-separate-lid",
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
    destination: "https://halepathpackaging.co.uk/corrugated-boxes/",
  },
  {
    source: "/custom-eco-friendly-separate-lid-boxes",
    destination: "/eco-friendly-mailer-boxes",
  },
  {
    source: "/gable-bag-1-2-3-bottom",
    destination: "/gable-bag-auto-bottom",
  },
  {
    source: "/sheet-mask-packaging",
    destination: "/sheet-mask-pouches",
  },
   {
    source: "/nail-remover-boxes",
    destination: "/nail-polish-remover-boxes",
  },
  {
    source: "/flat-bottom-pouch-with-zipper-2",
    destination: "/flat-bottom-pouch-with-zipper",
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
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 640, 768, 1024, 1280, 1536],
  },
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  },
  experimental: {
    optimisticClientCache: true,
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
