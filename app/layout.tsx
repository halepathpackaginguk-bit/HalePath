import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import DynamicFloatingWhatsApp from "@/components/DynamicFloatingWhatsApp";

const Footer = dynamic(() => import("@/components/footer"), { ssr: true });
const Instagram = dynamic(() => import("@/components/instagram/instagram"), { ssr: true });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <meta
        name="google-site-verification"
        content="Zo5mNjrNMt6RbXa48ANu8c0muhtjEVe36VCZUq1jg2E"
      />
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Script
          id="tawkto-script"
          strategy="afterInteractive"
          src="https://embed.tawk.to/6a4f9e3c8926201d475f4a7c/1jt3g47c7"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VKK5QYCM9X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VKK5QYCM9X');`}
        </Script>
        <Suspense fallback={null}>
          <Instagram />
        </Suspense>
        <DynamicFloatingWhatsApp />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.halepathpackaging.com/#organization",
              "name": "Hale Path Packaging",
              "url": "https://www.halepathpackaging.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.halepathpackaging.com/images/logo.png"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61586916928562",
                "https://www.instagram.com/halepathpackaging.uk",
                "https://www.tiktok.com/@halepathpackaging"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5955 Alpha Rd Suite 102, Unit 5092",
                "addressLocality": "Dallas",
                "addressRegion": "TX",
                "postalCode": "75240",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-888-432-8748",
                "contactType": "customer service",
                "email": "sales@halepathpackaging.com",
                "areaServed": ["US", "GB", "CA", "AU"],
                "availableLanguage": ["English"]
              }
            })
          }}
        />
      </body>
    </html>
  );
}



