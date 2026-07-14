import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/footer";
import Script from "next/script";
import Instagram from "@/components/instagram/instagram";
import FloatingWhatsAppWidget from "@/components/FloatingWhatsAppWidget";

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
         <Instagram />         
            <FloatingWhatsAppWidget phoneNumber="18884328748" message="Hi, I need support!" />        
        <Footer />
      </body>
    </html>
  );
}



