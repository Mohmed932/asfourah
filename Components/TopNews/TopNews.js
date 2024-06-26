"use server"
import React from "react";
import MainTopNews from "./MainTopNews";
import SingleTopNews from "./SingleTopNews";

const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";

const TopNews = async () => {
  const req = await fetch(`${base_url}/topnews`, {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-2/3 flex items-center justify-between max-xl:w-11/12 max-lg:w-full max-lg:mx-2 max-md:flex-col">
        <div className="w-3/5 max-md:w-full">
          <SingleTopNews news={res.topNews}/>
        </div>
        <div className="w-2/5 max-md:my-5 max-md:w-11/12 max-sm:w-full">
          <MainTopNews news={res.topNews}/>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
