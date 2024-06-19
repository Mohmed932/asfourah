"use client"
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const { loading, result, error } = useSelector(
    (state) => state.searchNewsData
  );
  return (
    <div>
      <h3 className="text-2xl px-3 border-r-4 border-red-700">نتائج البحث</h3>
      <div className="my-10">
        {result.length === 0 ? (
          <div className="h-96 text-3xl flex items-center justify-center">جرب البحث بكلمات اخري</div>
        ) : (
          result?.map(({ _id,title, img, category, desc }, idx) => (
            <Link href={`/news/${_id}`} key={idx} className="flex my-3 max-md:flex-col">
              <img
                src={img}
                alt={title}
                className="w-2/6 object-cover max-md:w-full"
              />
              <div className="p-5 max-md:px-0">
                <h5 className="text-2xl line-clamp-2">{title}</h5>
                <span className="bg-red-700 inline-block mt-3 p-2">{category}</span>
                <p className="text-sm mt-3 text-neutral-500 line-clamp-3">
                  {desc[0]}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResult;
