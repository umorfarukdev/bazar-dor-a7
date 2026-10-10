import { IProduct } from "@/type/productType";
import { toBengaliNumber } from "@/utils/number";

const MarketPriceTable = ({ product }: { product: IProduct }) => {

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold">বাজারভিত্তিক আজকের দাম</h2>
      <div className="border-2 rounded-2xl py-1 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 overflow-hidden">
            <tr className="text-[#1D271F60]">
              <th className="text-left p-4">বাজার</th>
              <th className="text-left p-4">বিভাগ</th>
              <th className="text-center p-4">সর্বনিম্ন</th>
              <th className="text-center p-4">সর্বোচ্চ</th>
              <th className="text-right p-4">গড়</th>
            </tr>
          </thead>

          <tbody>
            {product.markets.map((market, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-4">{market.market}</td>

                <td className="p-4 text-[#1D271F70]">{market.division}</td>

                <td className="text-center">
                  ৳{toBengaliNumber(Number(market.min))}
                </td>

                <td className="text-center">
                  ৳{toBengaliNumber(Number(market.max))}
                </td>

                <td className="text-right pr-4 font-semibold">
                  ৳
                  {toBengaliNumber(
                    Math.round((Number(market.max) + Number(market.min)) / 2),
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketPriceTable;
