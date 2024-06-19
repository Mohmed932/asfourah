import { convertToArabicDate } from "@/utility/ConvertToArabicDate";
import Link from "next/link";
import React from "react";

const LeftRight = ({ news }) => {
  return (
    <div className="border-2 p-2 border-neutral-900 mt-5  max-lg:font-medium">
      {news.map(({ title, category, createdAt, _id }, idx) => (
        <div className="border-b-2 border-neutral-800">
          <Link
            href={`/news/${_id}`}
            className="my-2 p-3 max-lg:py-1"
            key={idx}
          >
            <h3 className="mb-1 max-lg:w-full text-sm">{title}</h3>
            <div className="text-neutral-500 text-xs">
              <span className="uppercase">
                {category} {} | {}
              </span>
              <span>{convertToArabicDate(createdAt)}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeftRight;
