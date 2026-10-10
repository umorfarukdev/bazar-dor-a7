"use client";

import { IProduct } from "@/type/productType";
import { useState } from "react";
import SortProduct from "./SortProduct";
import CategoryProductsCard from "./CategoryProductsCard";
import { bengaliToEnglishNumber } from "@/utils/number";

type SortType = "default" | "low" | "high";

interface ProductListProps {
  categoryProducts: IProduct[];
}

const ProductList = ({ categoryProducts }: ProductListProps) => {
  const [sortedProducts, setSortedProducts] =
    useState<IProduct[]>(categoryProducts);

  const handleSort = (type: SortType) => {
    let data: IProduct[] = [...categoryProducts];

    if (type === "low") {
      data.sort(
        (a, b) =>
          bengaliToEnglishNumber(a.today) - bengaliToEnglishNumber(b.today),
      );
    }

    if (type === "high") {
      data.sort(
        (a, b) =>
          bengaliToEnglishNumber(b.today) - bengaliToEnglishNumber(a.today),
      );
    }

    if (type === "default") {
      data = [...categoryProducts];
    }

    setSortedProducts(data);
  };

  return (
    <div>
      <SortProduct onSort={handleSort} />

      <div className="grid md:grid-cols-3 gap-5">
        {sortedProducts.map((product) => (
          <CategoryProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
