import { NextResponse } from "next/server";
import { getSearchProductsData } from "@/lib/data/getProductsData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("q") || undefined;

  try {
    const products = await getSearchProductsData(term);
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json({ products: [] }, { status: 500 });
  }
}
