import React from "react";
import Left from "./Left";
import Middel from "./Middel";
import Right from "./Right";

const Continents = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="w-2/3 flex items-start justify-between max-xl:w-11/12 max-lg:w-full max-lg:mx-2 max-md:flex-col max-md:items-center">
        <Left />
        <Middel />
        <Right />
      </div>
    </div>
  );
};

export default Continents;
