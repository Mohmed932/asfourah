// import Moment from "react-moment";

import { convertToArabicDate } from "@/utility/ConvertToArabicDate";
import Link from "next/link";

const SingleTopNews = ({ news }) => {
  return (
    <div className="relative p-8 max-lg:p-3 max-sm:p-0">
      <img src={news[0].img} alt={news[0].title} className="w-full" />
      <div className="absolute top-0 left-0 w-2/5 h-full bg-black" />
      <div className="absolute top-0 h-full w-11/12 bg-gradient-to-r p-5 from-[#020202] from-40% flex items-start justify-center flex-col">
        <Link href={`/news/${news[0]._id}`}>
          <h1 className="text-4xl max-lg:text-2xl max-md:text-lg">
            {news[0].title}
          </h1>
        </Link>
        <div className="text-neutral-400 text-xs my-2">
          <span className="border-l-2 border-neutral-800 ml-3 pl-3 uppercase">
            {news[0].category}
          </span>
          <span>{convertToArabicDate(news[0].createdAt)}</span>
        </div>
        <p className="text-ellipsis overflow-hidden max-md:text-sm">
          {news[0].desc[0]}
        </p>
      </div>
    </div>
  );
};

export default SingleTopNews;
