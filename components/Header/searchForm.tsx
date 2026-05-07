import { getSearchProductsData } from "@/lib/data/getProductsData";
import SearchFormClient from "./SearchFormClient";

export interface Product {
  id: string;
  name: string;
  slug: string;
}

export default async function SearchForm() {
  // Fetch initial products on the server
  const initialProducts: Product[] = await getSearchProductsData();
  
  return <SearchFormClient initialProducts={initialProducts} />;
}