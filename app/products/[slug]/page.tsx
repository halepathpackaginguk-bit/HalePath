import { permanentRedirect } from "next/navigation";
import { getProductPath } from "@/lib/product-url";

type ProductAliasPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductAliasPage({
  params,
}: ProductAliasPageProps) {
  const { slug } = await params;

  permanentRedirect(getProductPath(slug));
}
