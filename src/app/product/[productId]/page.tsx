
import MarketPriceTable from '@/components/MarketPriceTable';
import ProductSummuryCard from '@/components/ProductSummuryCard';
import TopProductCard from '@/components/TopProductCard';
import { IProduct } from '@/type/productType';
import React from 'react';
interface ProductsProps {
  params: Promise<{
    productId: string;
  }>;
}

const page = async ({params}: ProductsProps) => {
    const { productId } = await params;
      const res = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products/${productId}`,
      );
    
      // console.log(res);
      const product: IProduct = await res.json();
      console.log(product);
    return (
        <div className='bg-base-300 min-h-screen'>
            <TopProductCard product={product}></TopProductCard>
            <ProductSummuryCard product={product}></ProductSummuryCard>
            <MarketPriceTable product={product}></MarketPriceTable>
        </div>
    );
};

export default page;