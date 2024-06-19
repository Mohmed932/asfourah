"use server";
import Link from "next/link";
import { Suspense } from "react";

const Breakingnews = async () => {
  const req = await fetch("http://localhost:5000/breakingnews", {
    next: { revalidate: 60 },
  });
  const res = await req.json();
  return (
    <Suspense>
      {res.BreakingNews ? (
        <div className="flex items-center justify-center my-5">
          <div className="w-2/3 bg-neutral-800  flex items-center max-xl:w-11/12 max-lg:w-full max-lg:mx-2 max-md:flex-col">
            <span className="bg-red-700 h-full flex items-center justify-center p-3 uppercase max-md:w-fit max-md:my-3 max-sm:text-xs">
              اخبار عاجلة
            </span>
            <Link href={`/news/${res.BreakingNews[0]?._id}`} className="mx-5 text-center max-md:mb-3">
              {res.BreakingNews[0]?.title}
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </Suspense>
  );
};

export default Breakingnews;
