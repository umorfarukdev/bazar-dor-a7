"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type SortType = "default" | "low" | "high";

interface SortProductProps {
  onSort: (type: SortType) => void;
}

const SortProduct = ({ onSort }: SortProductProps) => {
  const [value, setValue] = useState<SortType>("default");

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value as SortType;

    setValue(sortValue);
    onSort(sortValue);
  };

  return (
    <div className="flex justify-end mb-5">
      <div className="relative">
        <select
          value={value}
          onChange={handleSort}
          className="appearance-none border rounded-lg bg-white px-4 py-2 pr-10 cursor-pointer"
        >
          <option value="default">ডিফল্ট</option>

          <option value="low">দাম: কম থেকে বেশি</option>

          <option value="high">দাম: বেশি থেকে কম</option>
        </select>

        <ChevronDown
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default SortProduct;
