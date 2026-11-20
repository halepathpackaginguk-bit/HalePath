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
  {
    source: "/custom-sports-card-packaging-2",
    destination: "/custom-sports-card-packaging",
  },
  {
    source: "/category/vape-e-cigarette",
    destination: "/category/vape-e-cigarettes",
  },
  {
    source: "/category/specialty-",
    destination: "/category/specialty-corrugated-packaging",
  },
  {
    source: "/filp-top-rigid-boxes",
    destination: "/rigid-flip-top-boxes",
  },
  {
    source: "/custom-storage-box",
    destination: "/custom-storage-boxes",
  },
  {
    source: "/shop",
    destination: "/",
  },
  {
    source: "/personalised-coffee-bags",
    destination: "/personalized-coffee-bags",
  },
  {
    source: "/gift-rigid-box",
    destination: "/gift-rigid-boxes",
  },
  {
    source: "/hemp-products",
    destination: "/category/hemp-products",
  },
  {
    source: "/pouches-spices-packaging",
    destination: "/custom-spice-pouches",
  },
  {
    source: "/holiday-packaging",
    destination: "/category/holiday-packaging",
  },
  {
    source: "/shrink-sleeve-labels",
    destination: "/category/shrink-sleeve-labels",
  },
  {
    source: "/lamination-varnish",
    destination: "/category/lamination-varnish",
  },
  {
    source: "/stand-up-pouch",
    destination: "/category/stand-up-pouch",
  },
  {
    source: "/presentation-boxes-and-display",
    destination: "/category/gift-presentation",
  },
  {
    source: "/custom-business-card-boxes",
    destination: "/business-card-boxes",
  },
  {
    source: "/reverse-tuck-box-2",
    destination: "/reverse-tuck-boxes",
  },
  {
    source: "/custom-shaped-rigid-boxes",
    destination: "/rigid-shaped-boxes",
  },
  {
    source: "/category",
    destination: "/",
  },
  {
    source: "/hair-care",
    destination: "/category/hair-care",
  },
  {
    source: "/spa-wellness",
    destination: "/category/spa-wellness",
  },
  {
    source: "/corrugated-gable-box",
    destination: "/corrugated-gable-boxes",
  },
  {
    source: "/rigid-signs-boards",
    destination: "/category/rigid-signs-boards",
  },
  {
    source: "/custom-presentation-boxes",
    destination: "/category/display-boxes",
  },
  {
    source: "/test",
    destination: "/",
  },
  {
    source: "/spot-uv-box",
    destination: "/category/spot-uv-offset-printing-lithography",
  },
  {
    source: "/category/product-by-industry/cbd-packaging/custom-cigarette-boxes",
    destination: "/category/cigarette-boxes",
  },
  {
    source: "/flap-box",
    destination: "/flap-boxes",
  },
  {
    source: "/category/metalized-boxes/custom-copper-foiling-box",
    destination: "/copper-foil-boxes",
  },
  {
    source: "/custom-bakery-boxes",
    destination: "/category/custom-bakery-boxes",
  },
  {
    source: "/custom-foundtion-box",
    destination: "/foundation-boxes",
  },
  {
    source: "/corrugated-boxes-box-styles",
    destination: "/category/corrugated-boxes-box-styles",
  },
  {
    source: "/lift-of-lid-boxes",
    destination: "/lift-off-lid-boxes",
  },
  {
    source: "/beauty-care",
    destination: "/category/beauty-care",
  },
  {
    source: "/instagram-updates",
    destination: "/",
  },
  {
    source: "/category/product-by-industry/cbd-packaging/custom-cbd-boxes",
    destination: "/custom-cbd-boxes",
  },
  {
    source: "/cbd-cannabis",
    destination: "/category/cbd-cannabis",
  },
  {
    source: "/coffee-packaging",
    destination: "/category/coffee-packaging",
  },
  {
    source: "/category/retail-boxes/custom-white-boxes",
    destination: "/custom-white-boxes",
  },
  {
    source: "/cardboard-boxes",
    destination: "/category/cardboard-boxes",
  },
  {
    source: "/1-2-3-bottom",
    destination: "/category/box-by-style",
  },
  {
    source: "/foot-lock-tray",
    destination: "/category/foot-lock-tray",
  },
  {
    source: "/hello-world",
    destination: "/",
  },
  {
    source: "/household-packaging",
    destination: "/category/household-packaging",
  },
  {
    source: "/snacks-chips",
    destination: "/category/snacks-chips",
  },
  {
    source: "/stand-up-pouches",
    destination: "/category/stand-up-pouches",
  },
  {
    source: "/premium-card",
    destination: "/category/premium-card",
  },
  {
    source: "/cannabis",
    destination: "/category/cannabis",
  },
  {
    source: "/flexible-packaging",
    destination: "/category/flexible-packaging",
  },
  {
    source: "/biodegradable-packaging",
    destination: "/category/biodegradable-packaging",
  },
  {
    source: "/beverages-drinks",
    destination: "/category/beverages-drinks",
  },
  {
    source: "/kraft-paper-pouch",
    destination: "/category/kraft-paper-pouch",
  },
  {
    source: "/non-food-packaging",
    destination: "/category/non-food-packaging",
  },
  {
    source: "/recyclable-pouches",
    destination: "/category/recyclable-pouches",
  },
  {
    source: "/mylar-bags",
    destination: "/category/mylar-bags",
  },
  {
    source: "/biodegradable-pouches",
    destination: "/category/biodegradable-pouches",
  },
  {
    source: "/food-packaging",
    destination: "/category/food-packaging",
  },
  {
    source: "/flexible-packaging-bags",
    destination: "/category/flexible-packaging-bags",
  },
  {
    source: "/dairy-products-food-packaging",
    destination: "/category/dairy-products-food-packaging",
  },
  {
    source: "/magnetic-business-card",
    destination: "/category/magnetic-business-card",
  },
  {
    source: "/loyalty-card",
    destination: "/category/loyalty-card",
  },
  {
    source: "/chocolate-bar-packaging",
    destination: "/category/chocolate-bar-packaging",
  },
  {
    source: "/coffee-tea-packaging",
    destination: "/category/coffee-tea-packaging",
  },
  {
    source: "/cbd-products",
    destination: "/category/cbd-products",
  },
  {
    source: "/shaped-pouch",
    destination: "/category/shaped-pouch",
  },
  {
    source: "/branded-finishes",
    destination: "/category/branded-finishes",
  },
  {
    source: "/candy-sweets",
    destination: "/category/candy-sweets",
  },
  {
    source: "/food-delivery-packaging",
    destination: "/category/food-delivery-packaging",
  },
  {
    source: "/standard-card",
    destination: "/category/standard-card",
  },
  {
    source: "/plastic-free-carriers",
    destination: "/category/plastic-free-carriers",
  },
  {
    source: "/display-boxes",
    destination: "/category/display-boxes",
  },
  {
    source: "/deluxe-card",
    destination: "/category/deluxe-card",
  },
  {
    source: "/spout-pouch",
    destination: "/category/spout-pouch",
  },
  {
    source: "/pet-products-packaging",
    destination: "/category/pet-products-packaging",
  },
  {
    source: "/invitations-cards-gifts",
    destination: "/category/invitations-cards-gifts",
  },
  {
    source: "/display-box",
    destination: "/category/display-boxes",
  },
  {
    source: "/gold-foiling",
    destination: "/custom-gold-foil-boxes",
  },
  {
    source: "/pillow-boxes",
    destination: "/category/pillow-boxes",
  },
  {
    source: "/pillow-boxes-2",
    destination: "/category/pillow-boxes",
  },
  {
    source: "/fluorescent-colors",
    destination: "/category/branded-finishes",
  },
  {
    source: "/custom-christmas-boxes",
    destination: "/christmas-boxes",
  },
  {
    source: "/foil-printing-solutions",
    destination: "/category/foil-printing-solutions",
  },
  {
    source: "/presentation-display-boxes",
    destination: "/presentation-boxes",
  },
  {
    source: "/spot-uv",
    destination: "/category/spot-uv-offset-printing-lithography",
  },
  {
    source: "/holographic-foiling",
    destination: "/custom-holographic-boxes",
  },
  {
    source: "/slipcase-rigid-boxes",
    destination: "/rigid-slipcase-boxes",
  },
  {
    source: "/counter-display-boxes",
    destination: "/countertop-display-boxes",
  },
  {
    source: "/hexagon-box",
    destination: "/rigid-hexagon-boxes",
  },
  {
    source: "/sleeve",
    destination: "/custom-sleeve-boxes",
  },
  {
    source: "/cardboard-mascara-printed-boxes",
    destination: "/custom-mascara-boxes",
  },
  {
    source: "/custom-cigarette-boxes-2",
    destination: "/custom-cigarette-boxes",
  },
  {
    source: "/green-foiling",
    destination: "/category/foil-stamping",
  },
  {
    source: "/custom-eco-friendly-die-cut-boxes",
    destination: "/die-cut-boxes",
  },
  {
    source: "/reverse-tuck-box",
    destination: "/reverse-tuck-boxes",
  },
  {
    source: "/seal-end-box",
    destination: "/seal-end-boxes",
  },
  {
    source: "/custom-eco-friendly-display-boxes",
    destination: "/custom-display-boxes",
  },
  {
    source: "/custom-bandage-box",
    destination: "/custom-bandage-boxes",
  },
  {
    source: "/five-panel-hanger-box",
    destination: "/five-panel-hanger-boxes",
  },
  {
    source: "/lid-off-box-and-tray",
    destination: "/category/lid-off-boxes",
  },
  {
    source: "/custom-gift-box",
    destination: "/custom-gift-boxes",
  },
  {
    source: "/custom-pizza-box",
    destination: "/custom-pizza-boxes",
  },
  {
    source: "/custom-eco-friendly-tuck-boxes",
    destination: "/tuck-boxes",
  },
  {
    source: "/printed-cardboard-jewelry-packaging-boxes",
    destination: "/custom-jewelry-boxes",
  },
  {
    source: "/straight-tuck-box",
    destination: "/custom-straight-tuck-end-boxes",
  },
  {
    source: "/custom-vape-cattrige-boxes",
    destination: "/vape-cartridge-boxes",
  },
  {
    source: "/hexagon-rigid-boxes",
    destination: "/rigid-hexagon-boxes",
  },
  {
    source: "/custom-hair-extension",
    destination: "/custom-hair-extension-boxes",
  },
  {
    source: "/category/retail-boxes/page/2",
    destination: "/category/retail-boxes",
  },
  {
    source: "/custom-window-boxes",
    destination: "/printed-window-boxes",
  },
  {
    source: "/sleeve-box-and-tray",
    destination: "/custom-tray-and-sleeve-boxes",
  },
  {
    source: "/regular-six-corner-box",
    destination: "/six-corner-box",
  },
  {
    source: "/printed-skin-care-oil-packaging-cardboard-boxes",
    destination: "/custom-skincare-boxes",
  },
  {
    source: "/custom-mailer-boxes",
    destination: "/custom-mailer-box",
  },
  {
    source: "/commercial-printing",
    destination: "/category/commercial-printing",
  },
  {
    source: "/corrugated-boxes",
    destination: "/category/corrugated-boxes",
  },
  {
    source: "/product/relationship-cards",
    destination: "/relationship-cards",
  },
  {
    source: "/custom-lip-gloss-boxes-2",
    destination: "/custom-lip-gloss-boxes",
  },
  {
    source: "/custom-holographic-foiling-boxes",
    destination: "/custom-holographic-boxes",
  },
  {
    source: "/privacy-printing",
    destination: "/category/commercial-printing",
  },
  {
    source: "/custom-kraft-handle-boxes",
    destination: "/category/kraft-boxes",
  },
  {
    source: "/innovation",
    destination: "/category/innovation",
  },
  {
    source: "/kraft-boxes",
    destination: "/category/kraft-boxes",
  },
  {
    source: "/die-cut-cardboard-cereal-boxes",
    destination: "/custom-cereal-box",
  },
  {
    source: "/custom-kraft-tuck-top-boxes-2",
    destination: "/kraft-tuck-top-boxes",
  },
  {
    source: "/custom-surgical-gloves-box",
    destination: "/surgical-gloves-box",
  },
  {
    source: "/business-card-box-uk",
    destination: "/business-card-boxes",
  },
  {
    source: "/custom-face-mask-packaging",
    destination: "/custom-face-mask-box",
  },
  {
    source: "/bookend-flap",
    destination: "/flap-boxes",
  },
  {
    source: "/custom-silver-foiling",
    destination: "/silver-foil-boxes",
  },
  {
    source: "/double-wall-tuck-front",
    destination: "/",
  },
  {
    source: "/uv-printing-technology",
    destination: "/category/uv-printing-technology",
  },
  {
    source: "/structural-innovation",
    destination: "/category/innovation",
  },
  {
    source: "/category/custom-printed-boxes/cardboard-boxes",
    destination: "/category/cardboard-boxes",
  },
  {
    source: "/custom-blister-boxes",
    destination: "/blister-box",
  },
  {
    source: "/category/custom-printed-boxes/kraft-boxes",
    destination: "/category/kraft-boxes",
  },
  {
    source: "/custom-eco-friendly-mailer-boxes",
    destination: "/eco-friendly-mailer-boxes",
  },
  {
    source: "/instagram-updates/hale-path",
    destination: "/",
  },
  {
    source: "/custom-copper-foiling-box",
    destination: "/copper-foil-boxes",
  },
  {
    source: "/silver-foiling",
    destination: "/silver-foil-boxes",
  },
];

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.halepathpackaging.com",
        pathname: "/**",
      },
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
