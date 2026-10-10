"use client";

import { IProduct } from "@/type/productType";
import { useState } from "react";
import SortProduct from "./SortProduct";


type SortType = "default" | "low" | "high";


interface ProductListProps {
  products: IProduct[];
}


const ProductList = ({ products }: ProductListProps) => {


  const [sortedProducts, setSortedProducts] =
    useState<IProduct[]>(products);



  const bengaliToEnglishNumber = (value: string | number) => {

    const bengaliDigits = "০১২৩৪৫৬৭৮৯";

    return Number(
      value
        .toString()
        .split("")
        .map((char) => {

          const index = bengaliDigits.indexOf(char);

          return index !== -1 ? index : char;

        })
        .join("")
    );

  };



  const handleSort = (type: SortType) => {


    let data: IProduct[] = [...products];



    if (type === "low") {

      data.sort(
        (a, b) =>
          bengaliToEnglishNumber(a.today) -
          bengaliToEnglishNumber(b.today)
      );

    }



    if (type === "high") {

      data.sort(
        (a, b) =>
          bengaliToEnglishNumber(b.today) -
          bengaliToEnglishNumber(a.today)
      );

    }



    if (type === "default") {

      data = [...products];

    }



    setSortedProducts(data);

  };



  return (

    <div>


      <SortProduct 
        onSort={handleSort}
      />



      <div className="grid md:grid-cols-3 gap-5">

        {
          sortedProducts.map((product) => (

            <div key={product.id}>
              {product.nameBn}
            </div>

          ))
        }

      </div>


    </div>

  );

};


export default ProductList;