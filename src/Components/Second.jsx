import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";

const Second = () => {
  return (
    <div className="h-[740px] px-14 py-16 relative z-10 bg-creamy flex flex-row">
    {/* right side */}
      <div className="w-[40%] h-full pt-16">
        <div className="w-[800px] flex flex-col gap-4">
            <p className="text-8xl font-anton font-extrabold z-10">WHY THE <span className="text-orangy">FUTURE</span></p>
            <p className="text-8xl font-anton font-extrabold z-10">OF PRIVATE EQUITY</p>
            <p className="text-8xl font-anton font-extrabold">MATTERS!</p>
        </div>

        <div className="h-[37%] mt-14 w-[70%]">
            <div className="w-full h-[25%] pl-4 flex items-center gap-2">
                <FaPlus color="#FF671B" />
                <p className="font-anton text-sm">Emerging Markets</p>
            </div>

            <div  className="w-full bg-black/85 rounded-md flex gap-2 py-4 px-4 justify-center">
                <FaMinus color="#fff5cf" className="mt-[2px]" />
                <div>
                    <p className="font-anton text-creamy text-sm">Technological Innovation</p>
                    <p className="text-creamy text-[12px] leading-relaxed">Understand how AI, blockchain, and data analystics are revoulutionizing private equity</p>
                </div>
            </div>

            <div  className="w-full h-[25%] pl-4 flex items-center gap-2">
            <FaPlus color="#FF671B" />
            <p className="font-anton text-sm">Sustainable Investing</p>
            </div>
        </div>
      </div>

    {/* left side */}
      <div className="w-[60%] h-full flex flex-col items-center relative">
        <p className="leading-none text-[300px] font-anton font text-hardCreamy ">
          VALUE
        </p>

        <div className="bg-hardCreamy/75 h-[40%] w-[95%] rounded-lg flex justify-center items-center absolute top-[40%]"></div>

        <div className="bg-orangy h-[40%] w-[95%] rounded-lg flex justify-center items-center absolute top-[40%] rotate-6 z-20">
          <div className="w-[65%] h-full pl-10 pt-10 flex flex-col gap-8">
            <div className="text-creamy font-mogra font-semibold text-3xl">
              <p className="leading-none">STATEMENT OF</p>
              <p className="leading-none">CHANGES IN EQUITY</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-black/50 w-[50%] flex items-center justify-between px-3 py-2 rounded-lg">
                <p className="text-creamy text-sm font-anton">CLAIM WITH US</p>
                <div className="flex items-center bg-yellow-400 rounded-sm text-sm pl-1 font-anton">
                  18% <IoMdArrowDropup />
                </div>
              </div>

              <div className="bg-black/50 w-[55%] flex items-center justify-between px-3 py-2 rounded-lg">
                <p className="text-creamy text-sm font-anton">
                  INDIVIDUAL CLAIM
                </p>
                <div className="flex items-center bg-white rounded-sm text-sm pl-1 font-anton">
                  4% <IoMdArrowDropup />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-[32.8%] flex flex-col gap-28">
            <div className="bg-black/50 h-7 w-7 rounded-full flex justify-center items-center">
              <div className="bg-yellow-400 h-4 w-4 rounded-full"></div>
            </div>
            <div className="bg-black/50 h-7 w-7 rounded-full flex justify-center items-center">
              <div className="bg-yellow-400 h-4 w-4 rounded-full"></div>
            </div>
          </div>

          <div className="w-[35%] h-full border-l-2 border-yellow-400 border-dotted flex justify-center items-center">
            <img src="../../public/youngM.png" alt="" />
          </div>
        </div>

        <div className="text-gray-800 left-1 w-[80%] h-11 absolute bottom-10 font-medium text-sm">
          <p>
            The world of private equity is undergoing significant changes,
            driven by technological advancements, regulatory shifts, and new
            market opportunities. The traditional models are being disrupted,
            and those who adapt will reap the benefits. Explore how these
            changes can impact your investment strategies and what you need to
            know to thrive in this dynamic environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;
