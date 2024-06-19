import React from "react";
import LineTitle from "../Section/LineTitle";
import Link from "next/link";
import { convertToArabicDate } from "@/utility/ConvertToArabicDate";

const MainTopNews = ({news}) => {
  const title = "اخبار مهمه";
  return (
    <div>
      <LineTitle title={title} />
      <div className="py-2">
        {news.slice(1).map(({ title, category,desc, createdAt,_id }, idx) => (
          <Link href={`/news/${_id}`} key={idx} className="mb-2 border-b-2 border-neutral-800 py-3">
            <h1 className="text-xl mb-2 max-lg:text-sm max-lg:mb-1">{title}</h1>
            <div className="text-neutral-400 text-xs">
              <span className="border-l-2 border-neutral-800 ml-2 pl-2 uppercase">{category}</span>
              <span >{convertToArabicDate(createdAt)}</span>
            </div>
            <p className="text-neutral-500 line-clamp-2 my-2">{desc[0]}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainTopNews;
