import PageTemplate from "@/components/main/PageTemplate";
import ProductTemplate from "@/components/products/ProductTemplate";
import { resolveSlug } from "@/lib/extra";
import { buildSeo } from "@/lib/seo/generateSeo";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await resolveSlug(slug);
  if (!result) return null;
  return buildSeo(result.data, slug);
}

export default async function DynmaicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await resolveSlug(slug);
  if (!result) {
    notFound();
  }
  if (result.type === "page") {
    return <PageTemplate data={result} />;
  }
  if (result.type === "product") {
    return <ProductTemplate data={result} />;
  }
}
