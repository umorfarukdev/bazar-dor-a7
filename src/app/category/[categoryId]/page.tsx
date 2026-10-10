import ProductList from "@/components/ProductList";
import { IProduct } from "@/type/productType";

interface CategoryProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryProducts = async ({ params }: CategoryProps) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`,
  );
  const categoryProducts: IProduct[] = await res.json();

  const categoryImage = categoryProducts[0]?.image;
  const categoryName = categoryProducts[0]?.nameBn;
  return (
    <div className="bg-base-300 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 p-4 border-2 border-gray-200 rounded-xl bg-white my-4">
          <h1 className="text-5xl">{categoryImage}</h1>
          <div>
            <h1 className="text-2xl">{categoryName}</h1>
            <h1 className="text-[#1D271F70]">
              {categoryProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </h1>
          </div>
        </div>
        <ProductList categoryProducts={categoryProducts}></ProductList>
      </div>
    </div>
  );
};

export default CategoryProducts;
