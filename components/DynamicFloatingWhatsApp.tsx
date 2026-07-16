"use client";
import dynamic from "next/dynamic";

const FloatingWhatsAppWidget = dynamic(
  () => import("@/components/FloatingWhatsAppWidget"),
  { ssr: false }
);

export default function DynamicFloatingWhatsApp() {
  return <FloatingWhatsAppWidget phoneNumber="18884328748" message="Hi, I need support!" />;
}