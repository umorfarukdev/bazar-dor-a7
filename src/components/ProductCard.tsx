import React from "react";
import { IProduct } from "./Marquee";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

const ProductCard = ({ product }: { product: IProduct }) => {
  const unitLabels = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
  } as const;

  return (
    <div className="bg-white p-5 rounded-xl">
      <div className="flex gap-2 items-center mb-4">
        <h1 className="text-3xl bg-gray-200 p-3 rounded-2xl">
          {product.image}
        </h1>
        <div>
          <h1 className="font-bold">{product.nameBn}</h1>
          <p>{unitLabels[product.unit]}</p>
        </div>
      </div>
      <div>
        <span>আজকের দাম</span>
        <div className="flex items-center gap-30 justify-between">
          <div className="flex items-end gap-1.5">
            <h1 className="font-semibold text-xl">{product.today}</h1>
            <p>টাকা</p>
          </div>
          <div className="">
            {product.change.dir === "up" ? (
              <>
                <div className="flex items-center text-red-600">
                  <span className="text-3xl">
                    <RxTriangleUp />
                  </span>
                  <span>{product.change.pct}%</span>
                </div>
              </>
            ) : product.change.dir === "down" ? (
              <>
                <div className="flex items-end text-green-700">
                  <span className="text-3xl">
                    <RxTriangleDown />
                  </span>
                  <span>{product.change.pct}%</span>
                </div>
              </>
            ) : (
              <div className="flex items-center text-gray-500">
                <span className="text-3xl">--</span>
                <span>{product.change.pct}%</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
