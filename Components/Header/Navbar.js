import SearchIcon from "@mui/icons-material/Search";
// import ContrastIcon from "@mui/icons-material/Contrast";
import MenuIcon from "@mui/icons-material/Menu";
import { Suspense } from "react";
import Link from "next/link";

const Navbar = ({ setShow }) => {
  return (
    <Suspense>
      <div className="w-full h-15 flex items-center justify-center">
        <div className="w-2/3 h-full py-5 flex items-center justify-between border-b-2 border-neutral-800 max-xl:w-11/12">
          <img src="icon.png" alt="asfourah" className="w-10" />
          <div>
            <Link
              href="/search"
              rel="noreferrer"
              aria-label="search on asfourah"
            >
              <SearchIcon className="mx-3 cursor-pointer hover:text-red-700" />
            </Link>
            <MenuIcon
              className=" hidden mx-3 cursor-pointer hover:text-red-700 max-lg:inline-block"
              onClick={() => setShow(true)}
              rel="noreferrer"
              aria-label="MenuIcon on asfourah"
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Navbar;
