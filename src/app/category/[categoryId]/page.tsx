import CategoryProductsCard from "@/components/CategoryProductsCard";
import { IProduct } from "@/type/productType";


interface CategoryProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryProducts = async ({ params }: CategoryProps) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
  );

  // console.log(res);
  const categoryProducts: IProduct[] = await res.json();

  const categoryImage = categoryProducts[0]?.image;
  const categoryName = categoryProducts[0]?.nameBn;
  // console.log("Category:", categoryId);
  // console.log(categoryProducts);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <CategoryProductsCard
              key={product.id}
              product={product}
            ></CategoryProductsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
