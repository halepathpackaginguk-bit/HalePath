import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Script from "next/script";

import DynamicFloatingWhatsApp from "@/components/DynamicFloatingWhatsApp";
import Footer from "@/components/footer";
import Instagram from "@/components/instagram/instagram";

const poppinsBold = Poppins({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins-bold",
});

const poppinsMedium = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins-medium",
});

const poppinsRegular = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins-regular",
});

export const metadata: Metadata = {
  title: "Hale Path Packaging - Custom Boxes and Packaging Solutions",
  description:
    "Custom Boxes - Design Custom Printed Boxes with wholesale prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppinsBold.variable} ${poppinsMedium.variable} ${poppinsRegular.variable} h-full antialiased`}
    >
      <meta
        name="google-site-verification"
        content="Zo5mNjrNMt6RbXa48ANu8c0muhtjEVe36VCZUq1jg2E"
      />
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJ65R553"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        {children}
        <Script
          id="tawkto-script"
          strategy="lazyOnload"
          src="https://embed.tawk.to/6a4f9e3c8926201d475f4a7c/1jt3g47c7"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VKK5QYCM9X"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VKK5QYCM9X');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11223196191"
          strategy="lazyOnload"
        />
        <Script id="google-ads" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11223196191');`}
        </Script>

        <Script id="google-tag-manager" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NJ65R553');`}
        </Script>
        <Instagram />
        <DynamicFloatingWhatsApp />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.halepathpackaging.com/#organization",
              name: "Hale Path Packaging",
              url: "https://www.halepathpackaging.com/",
              logo: {
                "@type": "ImageObject",
                url: "https://www.halepathpackaging.com/images/logo.png",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61586916928562",
                "https://www.instagram.com/halepathpackaging.uk",
                "https://www.tiktok.com/@halepathpackaging",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "5955 Alpha Rd Suite 102, Unit 5092",
                addressLocality: "Dallas",
                addressRegion: "TX",
                postalCode: "75240",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-888-432-8748",
                contactType: "customer service",
                email: "sales@halepathpackaging.com",
                areaServed: ["US", "GB", "CA", "AU"],
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
