import Link from "next/link";
import { Suspense } from "react";

const Menubar = ({ active, handleActive, items }) => {
  return (
    <Suspense>
      <div className="w-full h-15 flex items-center justify-center">
        <div className="w-2/3 h-full py-5 flex items-center justify-between border-b-2 border-neutral-800 max-xl:w-11/12 max-lg:hidden">
          {items.map((item, idx) => (
            <div key={idx}>
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
      </div>
    </Suspense>
  );
};

export default Menubar;
