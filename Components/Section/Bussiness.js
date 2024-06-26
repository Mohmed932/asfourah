import React from "react";
import BussinessSports from "./BussinessSports";

const base_url =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://transporter-backend.onrender.com";

const Bussiness = async () => {
  const title = "اقتصاد";
  const req = await fetch(`${base_url}/section/Business`, {
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
