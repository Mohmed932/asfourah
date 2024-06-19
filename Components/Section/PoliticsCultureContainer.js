import Culture from "./Culture";
import Politics from "./Politics";

const PoliticsCultureContainer = () => {
  return (
    <div className="flex items-start justify-center my-20">
      <div className="w-2/3 flex items-start justify-between max-xl:w-11/12 max-lg:w-full max-lg:mx-2 max-md:flex-col">
        <Culture />
        <Politics />
      </div>
    </div>
  );
};

export default PoliticsCultureContainer;
