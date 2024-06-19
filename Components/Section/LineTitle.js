import { Suspense } from "react";

const LineTitle = ({ title }) => {
  return (
    <Suspense>
      <div className="w-full h-1 bg-red-800 flex items-center justify-center">
        <h1 className="bg-black rounded-md p-2 uppercase">{title}</h1>
      </div>
    </Suspense>
  );
};

export default LineTitle;
