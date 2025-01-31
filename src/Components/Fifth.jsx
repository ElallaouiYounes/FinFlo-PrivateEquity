import React from "react";
import { TbNorthStar } from "react-icons/tb";

const Fifth = () => {
  return (
    <div className="px-14 py-16 w-full h-[500px] bg-creamy flex flex-row">
      <div className="w-[10%] h-full flex justify-center">
        <TbNorthStar size={130} className="text-orangy/90 -rotate-12" />
      </div>

      <div className="w-[44%] py-12 h-full">
        <p className="text-5xl font-anton text-black/85 font-extrabold">Streamlining</p>
        <p className="text-5xl font-anton text-black/85 font-extrabold">Investments with</p>
        <p className="text-5xl font-anton text-black/85 font-extrabold">Cutting-Edge Technology</p>
        <p className="text-sm mt-10 font-medium">
          In the evolving world of private equity, technology is key to speeding
          up and simplifying investment processes. Through Al and advanced data
          analytics, we quickly identify the best opportunities with unmatched
          precision. Blockchain and smart contracts enhance security and
          transparency, reducing costs and eliminating barriers. Our focus is on
          creating significant value for investors by leveraging cutting-edge
          technology.
        </p>
      </div>

      <div className="w-[46%] h-full pl-28">

        <div className="w-full h-[60%] flex items-center justify-center">
            <img src="../../public/blockchain.png" alt="" className="scale-75" />
        </div>

        <div className="w-full h-[40%] flex flex-row flex-wrap gap-4">

            <div className="text-9xl font-anton relative top-[38%]">516</div>

            <div className="text-5xl font-anton relative top-[56%]">K</div>

            <div className="leading-none font-medium relative top-[64%]">
                <p>Data</p>
                <p>Delivered</p>
            </div>

            <div className="w-full bg-creamy h-12 relative top-[-10%]"></div>

        </div>

      </div>
    </div>
  );
};

export default Fifth;
