"use client";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchResult } from "../../redux/Search";

const Searchinput = () => {
  const [Searchvalue, setSearchvalue] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (Searchvalue !== "") {
      dispatch(SearchResult(Searchvalue))
      // Implement your search logic here
    }
  };

  return (
    <div className="my-10 p-5 flex items-center justify-between bg-neutral-900">
      <div className="flex w-full  bg-neutral-950 p-3">
        <CloseIcon
          className="cursor-pointer"
          onClick={() => setSearchvalue("")}
        />
        <input
          type="text"
          className="w-full bg-transparent mr-5 outline-none"
          placeholder="قم بلبحث عن الاخبار العالميه والمحليه الحصريه"
          onChange={(e) => setSearchvalue(e.target.value)}
          value={Searchvalue}
        />
      </div>
      <button className="bg-red-600 p-3" onClick={handleSearch}>
        بحث
      </button>
    </div>
  );
};

export default Searchinput;
