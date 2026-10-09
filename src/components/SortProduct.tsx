// "use client";

// import { useState } from "react";

// const SortProduct = ({ onSort }) => {
//   const [value, setValue] = useState("");

//   const handleSort = (e: React.ReactHTMLElement<HTMLFormElement>) => {
//     const sortValue = e.target.value;
//     setValue(sortValue);
//     onSort(sortValue);
//   };

//   return (
//     <div className="flex justify-end mb-5">
//       <div className="flex items-center gap-3">
//         <label className="font-semibold text-gray-700">সাজান:</label>

//         <select
//           value={value}
//           onChange={handleSort}
//           className="
//             select 
//             select-bordered 
//             bg-white 
//             rounded-xl
//             w-48
//             focus:outline-none
//           "
//         >
//           <option value="">নির্বাচন করুন</option>

//           <option value="low">দাম কম থেকে বেশি</option>

//           <option value="high">দাম বেশি থেকে কম</option>

//           <option value="name">নাম অনুযায়ী</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SortProduct;
