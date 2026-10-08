import Banner from "@/components/Banner";
import { IProduct } from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

export default async function Home() {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );
  const products: IProduct[] = await res.json();
  return (
    <div className="bg-base-300">
      <Banner></Banner>

      <main className="container mx-auto mb-10">
        <section className="mt-16">
          <h1 className="flex items-center text-3xl font-bold mb-7">
            <RxTriangleUp className="text-5xl text-red-600" />
            আজ দাম বেড়েছে
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((product) => product.change.dir === "up")
              .map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))
              .slice(0, 6)}
          </div>
        </section>

        <section className="mt-16">
          <h1 className="flex items-end text-3xl font-bold mb-7">
            <RxTriangleDown className="text-5xl text-green-600" />
            আজ দাম কমেছে
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((product) => product.change.dir === "down")
              .map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))
              .slice(0, 6)}
          </div>
        </section>

        <section className="mt-16">
          <h1 className="text-3xl font-bold mb-3">সব পণ্য</h1>
          <p className="text-[#1D271F70] text-2xl mb-4">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
