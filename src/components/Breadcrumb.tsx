import { IProduct } from "@/type/productType";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Breadcrumb = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-5">
        <nav className="flex items-center gap-2 text-lg">
          <Link href="/">হোম</Link>

          <ChevronRight size={18} />

          <Link href={`/category/${product.category}`}>
            {product.categoryNameBn}
          </Link>

          <ChevronRight size={18} />

          <span className="font-semibold">{product.nameBn}</span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
