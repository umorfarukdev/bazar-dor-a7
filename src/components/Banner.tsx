import React from "react";
import Hero from "./../../public/bazar-hero.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-bd", {
    dateStyle: "full",
  });
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="">
        <div className="hero-content  flex-col lg:flex-row-reverse bg-white p-7 border-3 border-gray-200 rounded-2xl">
          <Image alt="Tailwind CSS hero component" src={Hero} />
          <div>
            <span className="badge p-5 mb-2 bg-[#05893E10] text-[#05893E] rounded-full">{date}</span>
            <h1 className="text-5xl font-bold">আজকের বাজারের দাম এক নজরে</h1>
            <p className="py-6">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>
            <Link href="#all-products" className="btn bg-[#34A853] text-white font-semibold">
              সব পণ্য দেখুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
