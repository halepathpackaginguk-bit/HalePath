import SearchFormClient from "@/components/Header/SearchFormClient";
import { getSearchProductsData } from "@/lib/data/getProductsData";
export default async function SearchForm() {
  const products = await getSearchProductsData();  
  return <SearchFormClient initialProducts={products} />;
}