import PageBanner from '@/components/page-banner'
import CategoriesProducts from '@/components/category/Category-Products';
import { getPageBySlug } from '@/lib/data/getHomeData';
import { getProductsData } from '@/lib/data/getProductsData';
import { buildSeo } from '@/lib/seo/generateSeo';

export async function generateMetadata() {
  const page = await getPageBySlug("products");
  return buildSeo(page, "products");
}

const Products = async () => {

     const products = await getProductsData();
     const page = await getPageBySlug("products");
  return (
    <div>
      <PageBanner page_info={page} title="Products" description={page?.seo?.description || "Explore our full range of custom packaging solutions."} />
      <CategoriesProducts productsRes={products} />
    </div>
  )
}

export default Products
