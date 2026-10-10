import { IProduct } from "@/type/productType";
import { toBengaliNumber } from "@/utils/number";

const ProductSummuryCard = ({ product }: { product: IProduct }) => {

  return (
    <div className="">
      <div className="p-5">
        <h2 className="font-bold text-lg mb-4">দামের সারসংক্ষেপ</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>

            <h2 className="text-2xl font-bold text-green-600">
              ৳{toBengaliNumber(Math.min(...product.markets.map((m) => Number(m.min))))}
            </h2>

            <p className="text-xs text-gray-500">সবচেয়ে কম দামের বাজার
</p>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">সর্বাধিক দাম</p>

            <h2 className="text-2xl font-bold text-green-600">
              ৳{toBengaliNumber(Math.max(...product.markets.map((m) => Number(m.max))))}
            </h2>

            <p className="text-xs text-gray-500">
              সবচেয়ে বেশি দামের বাজার
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <p className="text-sm text-gray-500">গড় দাম</p>

            <h2 className="text-2xl font-bold text-red-500">
              ৳{toBengaliNumber(product.today)}
            </h2>

            <p className="text-xs text-gray-500">প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummuryCard;
