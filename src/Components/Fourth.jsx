import React from "react";
import { GiCrossMark } from "react-icons/gi";

const Fourth = () => {
  return (
    <div className="px-14 h-60 bg-creamy">
      <div className="w-full h-[50%] flex">
        <p className="h-full leading-none text-[101px] flex items-center font-anton w-[60%]">
          FUTURE OF PRIVATE
        </p>
        <span className="h-full flex items-center justify-center w-[10%]">
          <GiCrossMark color="black" size={40} />
        </span>
        <p className="h-full w-[30%] text-[16px] font-oswald flex items-center justify-center">
          Private equity is rapidly evolving, and understanding the key figures
          behind this growth is essential for anyone looking to stay ahead in
          the industry.
        </p>
      </div>

      <div className="w-full h-[50%] flex flex-row">
        <div className="h-full leading-none text-[101px] font-anton flex items-center gap-5">
            <span>EQUITY</span>
            <span className="text-orangy">BY THE NUMBERS</span>
            <span className="h-5 w-5 bg-black mt-[61px]"></span>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
