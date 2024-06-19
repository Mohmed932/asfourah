import React from "react";
import LineTitle from "../Section/LineTitle";
import Link from "next/link";
import { convertToArabicDate } from "@/utility/ConvertToArabicDate";

const Middel = async() => {
  const title = "الشرق الأوسط";
  const req = await fetch("http://localhost:5000/section/arab", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <div className="w-2/4 px-10 max-lg:px-5 max-md:w-11/12 max-md:my-5 max-md:p-0 max-sm:w-full">
      <LineTitle title={title} />
      <div className="mt-5">
        {res.slice(0, 2).map(({ title, category, desc, img, createdAt ,_id}, idx) => (
          <Link  href={`/news/${_id}`} key={idx} className="border-b-2 border-neutral-900">
            <h1 className="text-3xl my-3 max-lg:text-lg">{title}</h1>
            <div className="text-neutral-400 my-3">
              <span className="border-l-2 border-neutral-800 ml-2 pl-2 uppercase">
              {category} {} | {}
              </span>
              <span>{convertToArabicDate(createdAt)}</span>
            </div>
              {img ? (
                <div className="">
                <img src={img} alt={title} className="object-cover" />
                </div>
              ) : (
                ""
              )}
            <p className="text-neutral-500 my-3">{desc[0]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Middel;
