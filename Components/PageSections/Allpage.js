"use client";

import { Suspense } from "react";
import TitleSection from "./TitleSection";
import Link from "next/link";

const Allpage = ({ title, news, handeLoadMore, loading }) => {
  return (
    <Suspense>
      <div className="my-10 flex items-center justify-center">
        <div className="w-2/3 max-xl:w-11/12 max-lg:w-full">
          <TitleSection title={title} />
          <div className="flex items-center flex-col">
            <div className="w-full bg-neutral-900 my-5 flex items-start justify-center flex-wrap">
              {news.map(({ title, desc, img, _id }, idx) => (
                <Link
                  href={`/news/${_id}`}
                  key={idx}
                  className="w-[30%] m-5 max-xl:w-3/12 max-lg:w-2/5 max-md:w-11/12"
                >
                  <img src={img} alt={title} />
                  <div className="border-l-2 border-red-600 px-5">
                    <h3 className="text-xl my-2 line-clamp-2">{title}</h3>
                    <p className="text-neutral-400 line-clamp-2">{desc[0]}</p>
                  </div>
                </Link>
              ))}
            </div>
            <button
              className="my-5 w-fit bg-red-600 p-3"
              onClick={handeLoadMore}
            >
              {loading ? "يتم التحميل" : "تحميل المزيد"}
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Allpage;
