import { IProduct } from "@/type/productType";
import React from "react";

const TopProductCard = ({product} : {product: IProduct}) => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="bg-white rounded-2xl border p-5 flex items-center justify-between shadow-sm">
        {/* Left */}
        <div className="flex gap-4 items-center">
          <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-3xl">
            {product.image}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {product.nameBn}
            </h2>

            <p className="text-gray-500 text-sm">প্রতি {product.unit} এর দাম</p>

            <p className="text-gray-600 mt-1">গতকালের তুলনায় আজকের দাম</p>
          </div>
        </div>

        {/* Right */}
        <div className="bg-gray-50 rounded-xl px-5 py-4 text-center min-w-28">
          <p className="text-xs text-gray-500 mb-1">আজকের দাম</p>

          <h1 className="text-3xl font-bold">৳{product.today}</h1>

          <p className="text-xs text-gray-500">টাকা / {product.unit}</p>

          <p
            className={`mt-2 text-sm font-semibold ${
              product.change.dir === "up" ? "text-red-500" : "text-green-600"
            }`}
          >
            {product.change.dir === "up" ? "▲" : "▼"} {product.change.pct}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
