import Link from "next/link";

export interface ICategory{
    id: string
    icon: string
    nameBn: string
    slug: string
}

const NavLinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const categories: ICategory[] = await res.json();
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 max-w-6xl mx-auto gap-4">
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.id} className="flex gap-1 items-center">
          <h1>{category.icon}</h1> 
          <h1 className="font-semibold">{category.nameBn}</h1>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
