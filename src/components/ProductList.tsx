// import { IProduct } from "@/type/productType";
// import { useState } from "react";
// import SortProduct from "./SortProduct";

// type SortType = "low" | "high" | "name" | "";

// const ProductList = ({ products }: { products: IProduct[] }) => {

//   const [sortedProducts, setSortedProducts] = useState<IProduct[]>(products);


//   const handleSort = (type: SortType) => {

//     let data:  = [...products];


//     if (type === "low") {
//       data.sort((a, b) => a.today - b.today);
//     }


//     if (type === "high") {
//       data.sort((a, b) => b.today - a.today);
//     }


//     if (type === "name") {
//       data.sort((a, b) =>
//         a.nameBn.localeCompare(b.nameBn, "bn")
//       );
//     }


//     setSortedProducts(data);
//   };


//   return (
//     <div>

//       <SortProduct onSort={handleSort} />


//       <div className="grid md:grid-cols-3 gap-5">

//         {sortedProducts.map((product) => (

//           <div key={product.id}>
//             {product.nameBn}
//           </div>

//         ))}

//       </div>

//     </div>
//   );
// };

// export default ProductList;