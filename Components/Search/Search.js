import React from "react";
import Searchinput from "./Searchinput";
import SearchResult from "./SearchResult";

const Search = () => {
  return (
    <div className="my-5 flex items-center justify-center">
      <div className="w-2/3 max-xl:w-11/12">
        <Searchinput />
        <SearchResult />
      </div>
    </div>
  );
};

export default Search;
