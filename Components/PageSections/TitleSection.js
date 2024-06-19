import { Suspense } from "react";

const TitleSection = ({ title }) => {
  return (
    <Suspense>
      <div className="border-l-4 border-red-700">
        <h1 className="p-3 text-2xl">{title}</h1>
      </div>
    </Suspense>
  );
};

export default TitleSection;
