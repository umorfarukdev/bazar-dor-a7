import { IProduct } from "@/type/productType";
import { toBengaliNumber } from "@/utils/number";
import Link from "next/link";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import { unitLabels } from "./CategoryProductsCard";

const ProductCard = ({ product }: { product: IProduct }) => {

  return (
    <Link href={`/product/${product.id}`} className="bg-white p-5 rounded-xl">
      <div className="flex gap-2 items-center mb-4">
        <h1 className="text-3xl bg-gray-200 p-3 rounded-2xl">
          {product.image}
        </h1>
        <div>
          <h1 className="font-bold">{product.nameBn}</h1>
          <p className="text-[#1D271F70]">{unitLabels[product.unit]}</p>
        </div>
      </div>
      <div>
        <span className="text-[#1D271F70]">আজকের দাম</span>
        <div className="flex items-center gap-30 justify-between">
          
          <div className="flex items-end gap-1.5">
            <h1 className="font-semibold text-xl">
              {toBengaliNumber(product.today)}
            </h1>
            <p>টাকা</p>
          </div>
          <div className="">
            {product.change.dir === "up" ? (
              <>
                <div className="flex items-center text-red-600">
                  <span className="text-3xl">
                    <RxTriangleUp />
                  </span>
                  <span>{toBengaliNumber(product.change.pct)}%</span>
                </div>
              </>
            ) : product.change.dir === "down" ? (
              <>
                <div className="flex items-end text-green-700">
                  <span className="text-3xl">
                    <RxTriangleDown />
                  </span>
                  <span>{toBengaliNumber(product.change.pct)}%</span>
                </div>
              </>
            ) : (
              <div className="flex items-center text-gray-500">
                <span className="text-3xl">--</span>
                <span>{toBengaliNumber(product.change.pct)}%</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
