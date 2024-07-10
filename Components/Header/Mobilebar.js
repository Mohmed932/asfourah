import WestIcon from "@mui/icons-material/West";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "next/link";
import { Suspense } from "react";

const Mobilebar = ({ active, handleActive, setShow, show, items }) => {
  return (
    <Suspense>
      <div
        className={`${
          show ? "right-0" : "-right-full"
        } w-3/6 h-full z-10 fixed top-0 duration-700  backdrop-blur-xl border-l-2 border-neutral-900 max-lg:block max-md:w-full`}
      >
        <div className="w-full h-2 bg-red-900 " />
        <div className="border-b-2 border-neutral-900 p-4 flex items-center justify-between">
          <img src="/icon.png" alt="asfourah" className="w-10" />
          <CloseIcon
            className="cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
        <div className="border-b-2 border-neutral-900 overflow-y-auto h-4/5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="my-5 flex items-center justify-between px-5 py-2"
            >
              <WestIcon
                className={`${
                  active === idx ? "text-red-800" : "text-white"
                } hover:text-red-800 duration-500 cursor-pointer`}
              />
              <Link
                href={item === "Home" ? "/" : `/${item.path}`}
                className={`${
                  active === idx ? "text-red-800" : "text-white"
                } hover:text-red-800 duration-500`}
                onClick={() => handleActive(idx)}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="border-b-2 border-neutral-900 p-4 flex items-center justify-center max-md:border-none">
          <FacebookIcon className="mx-5 cursor-pointer hover:text-red-800 duration-500" />
          <XIcon className="mx-5 cursor-pointer hover:text-red-800 duration-500" />
          <InstagramIcon className="mx-5 cursor-pointer hover:text-red-800 duration-500" />
          <ArticleIcon className="mx-5 cursor-pointer hover:text-red-800 duration-500" />
        </div>
      </div>
    </Suspense>
  );
};

export default Mobilebar;
