import Link from "next/link";
import LineTitle from "./LineTitle";
import { convertToArabicDate } from "@/utility/ConvertToArabicDate";
// import Moment from 'react-moment';

const PoliticsCulture = ({ title ,news}) => {
  return (
    <div className="w-2/5 h-full max-lg:w-full max-lg:mx-2">
      <LineTitle title={title} />
      <div className="w-full h-full border-2 border-neutral-900 my-10">
        <div className="p-3">
          {news.map(({ title, createdAt, category, img, desc,_id }, idx) => (
            <Link  href={`/news/${_id}`} key={idx} className="border-b-2 border-neutral-900 p-5">
              <h2 className="text-xl">{title}</h2>
              {img?<img src={img} alt={title} className="my-2"/>:""}
              <div className="text-neutral-500 text-xs my-2">
                <span>
                  {category} {} | {}
                </span>               
                <span>{convertToArabicDate(createdAt)}</span>
              </div>
              <p className="text-neutral-500 line-clamp-2">{desc[0]}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoliticsCulture;
