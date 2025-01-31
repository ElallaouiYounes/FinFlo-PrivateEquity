import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import { TiArrowLeftOutline } from "react-icons/ti";

const Third = () => {
  return (
    <div className="bg-creamy px-14 pt-16 flex flex-row flex-wrap justify-between">
      <div className="bg-black/85 w-[83%] h-96 px-10 pt-10 flex flex-row rounded-md">
        <div className="w-[50%] h-full relative">
          <p className="text-creamy text-5xl font-anton font-extrabold">
            INVESTEMENT
          </p>

          <p className="text-creamy text-5xl font-anton font-extrabold">
            RETURNS
          </p>

          <div className="bg-white w-[70%] h-[69.5%] rounded-md absolute -rotate-6 ml-3 top-[34%] z-10 flex flex-col items-center">
            {/* lines */}
            <div class="relative w-64 h-16">
              <div class="absolute inset-0 flex items-center space-x-2">
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>
                <div class="w-1 h-10 rounded-sm bg-gray-300 opacity-50"></div>


                <div class="w-1 h-10 rounded-sm bg-orange-500"></div>
                <div class="w-1 h-10 rounded-sm bg-orange-500"></div>
                <div class="w-1 h-10 rounded-sm bg-orange-500"></div>
                <div class="w-1 h-10 rounded-sm bg-orange-500"></div>
                <div class="w-1 h-10 rounded-sm bg-orange-500"></div>
              </div>
            </div>

            {/* investors percentage */}
            <div className="flex flex-row gap-6 items-end mr-16">
              <div className="flex items-end gap-1">
                <p className="text-7xl font-anton font-extrabold">60</p>
                <span className="text-4xl font-anton font-extrabold">%</span>
              </div>
              <div className="font-anton text-sm">
                <p>of</p>
                <p>Investors</p>
              </div>
            </div>

            {/* investors percentage */}
            <div className="flex flex-row gap-4 mr-5 items-end mt-4 rotate-6">
              <div className="flex items-end gap-1">
                <p className="text-6xl font-anton font-extrabold">15.8</p>
                <span className="text-4xl font-anton font-extrabold">%</span>
              </div>
              <div className="font-anton text-sm">
                <p>Average</p>
                <p>Annual Returns</p>
              </div>
            </div>
          </div>
          <div className="bg-black/50 w-[70%] h-[69.5%] rounded-md absolute ml-3 top-[34%]"></div>
        </div>

        <div className="w-[50%] h-full flex flex-col">
          <div className="w-full h-[60%] text-sm text-creamy px-3 py-8 ">
            <p>
              Despite the challenges of an increasingly complex global economy,
              private equity continues to deliver strong returns.{" "}
              <b className="text-yellow-300/85">
                Over the past five years, the average annual return on private
                equity investments has outperformed traditional asset classes.
              </b>{" "}
              Looking forward, the focus on value creation through operational
              improvements, coupled with strategic exits, is likely to sustain
              attractive returns for investors.
            </p>
          </div>

          <div className="h-[40%] flex flex-row items-center justify-between">
            <div className="w-[60%] h-full relative right-[34%]">
              <div className="w-full h-[120%] bg-black/50 rounded-md"></div>
              <div className="w-full h-[124%] bg-[#fada58] rotate-12 rounded-md absolute top-0 z-20 flex flex-col items-center">
                {/* lines */}
                <div class="relative w-64 h-10">
                  <div class="absolute inset-0 flex items-center space-x-2 p-4">
                    <div class="w-6 h-2 bg-black/10 rounded-full"></div>
                    <div class="w-6 h-2 bg-black/20 rounded-full"></div>
                    <div class="w-6 h-2 bg-black/30 rounded-full"></div>
                    <div class="w-6 h-2 bg-black/40 rounded-full"></div>
                    <div class="w-6 h-2 bg-black/50 rounded-full"></div>
                    <div class="w-6 h-2 bg-black/60 rounded-full"></div>
                    <div class="w-6 h-2 bg-black/70 rounded-full"></div>
                    <div class="w-6 h-2 bg-black/80 rounded-full"></div>
                    <div class="w-6 h-2 bg-black/90 rounded-full"></div>
                  </div>
                </div>

                {/* rest */}
                <div className="flex w-full px-5 gap-4">
                    <div className="text-4xl font-anton">USD</div>
                    <div className="-rotate-12 flex items-end gap-2">
                        <p className="text-8xl font-anton">4</p>
                        <p className="text-4xl font-anton mb-[2px]">b</p>
                        <div className="mb-[4px] ml-2 text-sm font-semibold">
                            <p>Amount</p>
                            <p>Invested</p>
                        </div>
                    </div>
                </div>


              </div>
            </div>

            <div className="flex gap-4 mr-3">
              <div className="w-10 h-10 border-2 border-creamy rounded-full flex items-center justify-center">
                <TiArrowLeftOutline color="#fff5cf" />
              </div>
              <div className="w-10 h-10 bg-orangy rounded-full flex items-center justify-center">
                <TiArrowRightOutline color="#fff5cf" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orangy w-[15%] h-96 rounded-md"></div>

      <div className="h-20 w-[83%] bg-creamy z-30"></div>
    </div>
  );
};

export default Third;
