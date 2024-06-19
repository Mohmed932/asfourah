import Link from "next/link";
import React from "react";

const Footerlinks = () => {
  const items = [
    { name: "الصفحه الرئيسه", path: "/" },
    { name: "عالم", path: "World" },
    { name: "سياسه", path: "Politics" },
    { name: "اقتصاد", path: "Business" },
    { name: "رياضه", path: "Sports" },
    { name: "تكنولوجيا", path: "Technology" },
    { name: "الشرق الاوسط", path: "Arab" },
    { name: "صحه", path: "Health" },
    { name: "فلسطين", path: "Palestine" },
    { name: "ثقافه وفن", path: "Culture" },
  ];
  return (
    <div className="w-2/6  flex items-start justify-between mx-5 max-md:w-full max-md:m-0 border-b-neutral-600 max-md:border-b-2 max-md:border-neutral-800 max-md:mb-5">
      <div className="w-2/4  flex items-start justify-center flex-wrap">
        {items.slice(0,6).map((i, idx) => (
          <Link href={`/${i.path}`} key={idx} className="w-full m-2 hover:text-red-700 duration-500">
            {i.name}
          </Link>
        ))}
      </div>
      <div className="w-2/4  flex items-start justify-end flex-wrap">
        {items.slice(6, 12).map((i, idx) => (
          <Link href={`/${i.path}`} className="w-full m-2 hover:text-red-700 duration-500" key={idx}>
          {i.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footerlinks;
