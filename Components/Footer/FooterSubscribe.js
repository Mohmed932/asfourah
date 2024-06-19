"use client"
import { subscribeEmail } from "@/redux/subscribeSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FooterSubscribe = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  const henadelSubscribe = (email) => {
    if (email !== "" && isValidEmail(email)) {
      dispatch(subscribeEmail(email));
    }
  };
  const { subscribed, loading } = useSelector((state) => state.subscribeSlice);
  return (
    <div className="w-2/6 max-md:w-full max-md:border-b-2 max-md:border-neutral-800 max-md:mb-5">
      <img src="icon.png" alt="asfourah" className="w-10 my-3"/>
      <div className="w-full bg-red-700 flex items-center justify-between mb-5">
        <input
          className="bg-neutral-950 w-11/12 p-3"
          placeholder="قم بادخال بريدك الألكتروني"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="mx-2 outline-none border-none"
          onClick={() => henadelSubscribe(email)}
        >
          {loading
            ? "يتم التحقق"
            : subscribed === null
            ? "اشترك"
            : subscribed
            ? "شكرا للاشتراك"
            : "مشترك بلفعل"}
        </button>
      </div>
    </div>
  );
};

export default FooterSubscribe;
