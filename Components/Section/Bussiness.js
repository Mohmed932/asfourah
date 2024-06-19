import React from "react";
import BussinessSports from "./BussinessSports";

const Bussiness = async () => {
  const title = "اقتصاد";
  const req = await fetch("http://localhost:5000/section/Business", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <div>
      <BussinessSports title={title} news={res}/>
    </div>
  );
};

export default Bussiness;
