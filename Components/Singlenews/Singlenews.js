import { Fragment, Suspense } from "react";
import SocialMedia from "./SocialMedia";
// import Image from "next/image";
import { convertToArabicDate } from "@/utility/ConvertToArabicDate";
import { calculateReadingTime } from "@/utility/ReadingTime";

const Singlenews = ({ news ,id}) => {
  return (
    <Suspense>
      <div className="flex items-center justify-center my-10">
        <div className="w-2/3 max-xl:w-11/12">
          <div className="">
            <div className="border-r-4 border-red-700 flex items-center justify-between max-2xl:flex-col max-md:border-t-4 max-md:border-r-0">
              <div className="p-5 flex flex-col items-start justify-center max-md:px-0">
                <h1 className="text-3xl text-start">{news.title}</h1>
                <div className="text-neutral-400 text-xs my-4">
                  <span className="">
                    {news.category} {} | {}
                  </span>
                  <span className="">
                    {convertToArabicDate(news.createdAt)}
                  </span>
                  <span className="">
                  {} | {}  {calculateReadingTime(news.desc)} دقائق للقراءه 
                  </span>
                </div>
                <SocialMedia id={id} news={news}/>
                <p className="my-3 text-neutral-400 text-start">{news.desc[0]}</p>
              </div>
              <img
                src={news.img}
                alt={news.title}
                layout="responsive"
                className="h-96 object-cover"
                // width={800}
                // height={800}
                // priority
              />
            </div>
            <div className="border-l-4 border-red-700 my-10 pl-5">
              {news.desc.map((i, idx) => (
                <Fragment key={idx}>
                  <p className="my-3 text-neutral-400">{i}</p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Singlenews;
