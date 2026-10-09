import { IProduct } from "@/type/productType";
import Link from "next/link";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";
import MarqueeText from "react-marquee-text";

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const products: IProduct[] = await res.json();
  return (
    <MarqueeText direction="right" duration={10} pauseOnHover >
      <div className="py-4 border-b-2 border-gray-200">
        <div className="flex gap-16">
        {products.map((product) => (
          <Link
            href={"/#"}
            key={product.id}
            className="flex gap-1 items-center"
          >
            <h1 className="text-2xl">{product.image}</h1>
            <h1 className="">{product.nameBn}</h1>
            <span> টাকা/{product.unit === "kg" ? "কেজি" : "লিটার"}</span>
            <div>
              {product.change.dir === "up" ? (
                <>
                  <div className="flex items-center text-red-600">
                    <span className="text-3xl">
                      <RxTriangleUp />
                    </span>
                    <span>{product.change.pct}%</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center text-green-700">
                    <span className="text-3xl">
                      <RxTriangleDown />
                    </span>
                    <span>{product.change.pct}%</span>
                  </div>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
      </div>
    </MarqueeText>
  );
};

export default Marquee;
