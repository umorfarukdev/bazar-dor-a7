import MarketPriceTable from "@/components/MarketPriceTable";
import ProductSummuryCard from "@/components/ProductSummuryCard";
import TopProductCard from "@/components/TopProductCard";
import { IProduct } from "@/type/productType";
import React from "react";
interface ProductsProps {
  params: Promise<{
    productId: string;
  }>;
}

const ProductCardDetails = async ({ params }: ProductsProps) => {
  const { productId } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${productId}`,
  );


  const product: IProduct = await res.json();

  return (
    <div className="bg-base-300 min-h-screen">
      <TopProductCard product={product}></TopProductCard>

      <div className="mt-6 bg-white rounded-2xl border overflow-hidden max-w-6xl mx-auto">
        <ProductSummuryCard product={product}></ProductSummuryCard>
        <div className="">
          <MarketPriceTable product={product}></MarketPriceTable>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
