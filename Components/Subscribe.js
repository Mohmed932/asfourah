"use client";
import { subscribeEmail } from "@/redux/subscribeSlice";
import { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
  const henadelSubscribe = (email) => {
    if (email !== ""&&isValidEmail(email)) {
      dispatch(subscribeEmail(email));
    }
  };
  const { subscribed, loading } = useSelector((state) => state.subscribeSlice);
  return (
    <Suspense>
      <div className="flex items-center justify-center my-10">
        <div className="w-2/3 p-5 border-4 bg-neutral-900 border-red-700 flex items-center justify-center flex-col max-xl:w-11/12 max-lg:w-full max-lg:mx-2">
          <h1 className="text-2xl">ابقوا متابعين</h1>
          <span className="w-2/5 text-center my-5 text-neutral-500 max-lg:w-11/12">
            اشترك في أحدث النشرة الإخبارية لدينا ولا تفوت آخر الأخبار! يتم إرسال
            النشرة الإخبارية لدينا مرة واحدة في اليوم
          </span>
          <div className="w-2/4 bg-red-700 flex items-center justify-between mb-5 max-lg:w-3/4 max-md:w-11/12">
            <input
              className="bg-neutral-950 w-11/12 p-3"
              placeholder="قم بادخال بريدك الألكتروني"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="mx-2 outline-none border-none w-fit"
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
      </div>
    </Suspense>
  );
};

export default Subscribe;
