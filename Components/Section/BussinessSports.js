import Link from "next/link";
import LineTitle from "./LineTitle";
import { convertToArabicDate } from "@/utility/ConvertToArabicDate";

const BussinessSports = ({ title, news }) => {
  return (
    <div className="flex items-center justify-center my-5">
      <div className="w-2/3 bg-neutral-900 p-10 max-xl:w-11/12 max-lg:w-full max-lg:mx-2 max-md:p-3">
        <div className="w-full">
          <LineTitle title={title} />
          <div className="mt-6  flex items-center justify-center flex-wrap">
            {news.map(({ title, category, createdAt, img, _id }, idx) => (
              <Link
                href={`/news/${_id}`}
                key={idx}
                className="flex items-center justify-between  my-2 w-2/6 min-h-28 overflow-hidden max-2xl:w-2/4 max-md:w-full max-sm:flex-col"
              >
                {img ? (
                  <img
                    src={img}
                    alt={title}
                    className="w-28 object-contain h-28 max-sm:w-full max-sm:h-full"
                  />
                ) : (
                  ""
                )}
                <div className="p-2 max-sm:p-0 max-sm:my-2">
                  <h4>{title}</h4>
                  <div className="text-neutral-400 text-xs my-2">
                    <span className="">
                      {category} {} | {}
                    </span>
                    <span>{convertToArabicDate(createdAt)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessSports;
