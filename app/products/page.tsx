import CategoriesProducts from '@/components/category/Category-Products';
import { getProductsData } from '@/lib/data/getProductsData';
import { buildSeo } from '@/lib/seo/generateSeo';
import React from 'react'

export async function generateMetadata() {
  return buildSeo(null, "products");
}

const Products = async () => {

     const products = await getProductsData();
  return (
    <div>

    <CategoriesProducts productsRes={products} />
      
    </div>
  )
}

export default Products
