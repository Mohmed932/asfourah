import React from "react";
import FooterSubscribe from "./FooterSubscribe";
import Footerlinks from "./Footerlinks";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <div className="flex items-center justify-center my-5 flex-col">
      <div className="w-2/3 flex items-start justify-between  p-3 max-xl:w-11/12 max-lg:w-full max-lg:mx-2 max-md:flex-col">
        <FooterSubscribe />
        <Footerlinks />
        <FooterSocial />
      </div>
      <span className="mt-3 text-center text-neutral-700">Create by <a href="https://mohmed.vercel.app/" target="_blank" className="text-red-700">Mohmed Mahmoud Fouad</a></span>
    </div>
  );
};

export default Footer;
