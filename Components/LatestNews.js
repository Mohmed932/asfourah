import React, { Suspense } from "react";
import LineTitle from "./Section/LineTitle";
import Link from "next/link";
import { convertToArabicDate } from "@/utility/ConvertToArabicDate";

const LatestNews = async() => {
  const title = "اخر الاخبار";
  const req = await fetch("http://localhost:5000/section/latest", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Suspense>
      <div className="flex items-center justify-center my-5">
        <div className="w-2/3 max-xl:w-11/12 max-lg:w-full max-lg:mx-2">
          <LineTitle title={title} />
          <div className="w-full mt-8 flex items-center justify-center flex-wrap">
            {res.map(({ title, img, category, desc, createdAt,_id }, idx) => (
              <Link href={`/news/${_id}`}
                className="w-2/6 my-3 px-3 max-md:w-2/4 max-sm:w-full"
                key={idx}
              >
                <img src={img} alt={title} />
                <h1 className="text-xl my-2 line-clamp-2">{title}</h1>
                <div className="text-neutral-800 text-xs my-2">
                  <span className="text-neutral-600 uppercase">
                  {category} {} | {}
                  </span>
                  <span className="text-neutral-400">{convertToArabicDate(createdAt)}</span>
                </div>
                <p className="text-neutral-500  line-clamp-2">{desc[0]}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default LatestNews;
