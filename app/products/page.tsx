import PageBanner from '@/components/page-banner'
import CategoriesProducts from '@/components/category/Category-Products';
import { getProductsData } from '@/lib/data/getProductsData';
import { buildSeo } from '@/lib/seo/generateSeo';

export async function generateMetadata() {
  return buildSeo({
    seo: {
      title: "Our Products | Hale Path Packaging",
      description: "Explore our full range of custom packaging solutions — corrugated boxes, flexible packaging, offset printing, and more."
    }
  }, "products");
}

const Products = async () => {

     const products = await getProductsData();
  return (
    <div>
      <PageBanner
        title="Our Products"
        description="Explore our full range of custom packaging solutions — from corrugated boxes to retail-ready displays, designed to fit your brand."
      />
      <CategoriesProducts productsRes={products} />
    </div>
  )
}

export default Products
