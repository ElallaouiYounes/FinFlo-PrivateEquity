import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Final = () => {
  return (
    <div className="px-14 pb-16 bg-creamy w-full h-[600px]">
      <hr className="border-black/30 w-full h-[1%]" />

      <div className="w-full h-[30%] flex flex-row justify-between items-center px-10">
        <div className="flex gap-14">
          <div className="text-4xl font-anton">
            <p>NETWORKING</p>
            <p>OPPORTUNITIES</p>
          </div>

          <div className="text-sm font-medium flex flex-col gap-1 justify-center">
            <p>Connect with industry peers and</p>
            <p>experts.</p>
          </div>
        </div>

        <div className="h-10 w-10 cursor-pointer border-black/60 rounded-full border-2 flex items-center justify-center hover:bg-orangy hover:border-none">
          <FaArrowRight size={20} />
        </div>
      </div>

      <div className="w-full h-[38%] bg-black rounded-3xl flex flex-row justify-between items-center px-10">
        <div className="flex gap-14">
          <div className="text-4xl text-creamy font-anton">
            <p>WEBINARS AND</p>
            <p>EVENTS</p>
          </div>

          <div className="text-sm font-medium flex flex-col gap-1 justify-center text-creamy">
            <p>Participate in exclusive events and</p>
            <p>live discussions.</p>
          </div>
        </div>

        <div className="w-80 h-52">
          <div className="w-80 h-72 relative top-[-20%] bg-black/50 rotate-6 rounded-md"></div>
          <div className="w-80 h-80 bg-white -rotate-6 rounded-md relative top-[-160%] px-6">
            <div className="font-anton text-xl w-full h-14 pt-6 flex items-center">
              Participate in our events
            </div>

            <div className="w-full h-[90px] flex border-b border-black/50 flex-row">
              <div className="flex gap-2 w-[70%] items-end ">
                <img
                  className="h-[80%] w-[40%] rounded-sm"
                  src="../../public/person2.png"
                />
                <div className="flex flex-col justify-center h-full pt-6">
                  <p className="font-anton text-[13px]">Emerging Trends In</p>
                  <p className="font-anton text-[13px]">Private Equity</p>
                  <p className="text-[13px]">
                    with <b className="text-orangy">Julia Cooper</b>
                  </p>
                </div>
              </div>

              <div className="w-[20%] flex items-center justify-center flex-col pt-6 leading-none">
                <p>June</p>
                <p className="font-anton text-4xl">24</p>
              </div>
            </div>

            <div className="w-full h-[90px] flex border-b border-black/50 flex-row">
              <div className="flex gap-2 w-[70%] items-end ">
                <img
                  className="h-[80%] w-[40%] rounded-sm"
                  src="../../public/person3.jpg"
                />
                <div className="flex flex-col justify-center h-full pt-6">
                  <p className="font-anton text-[13px]">AI And Private</p>
                  <p className="font-anton text-[13px]">Equity Decisions</p>
                  <p className="text-[13px]">
                    with <b className="text-orangy">Adam Ford</b>
                  </p>
                </div>
              </div>

              <div className="w-[20%] flex items-center justify-center flex-col pt-6 leading-none">
                <p>July</p>
                <p className="font-anton text-4xl">12</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-10 w-10 cursor-pointer rounded-full bg-orangy hover:bg-transparent hover:border-orangy hover:border-2 flex items-center justify-center">
          <MdArrowOutward size={20} color="#fff5cf" />
        </div>
      </div>

      <div className="w-full h-[30%] bg-creamy relative z-10 flex flex-row justify-between items-center px-10">
        <div className="flex gap-14">
          <div className="text-4xl font-anton flex items-center justify-center">
            <p>NEWSLETTER</p>
          </div>

          <div className="text-sm font-medium flex flex-col gap-1 justify-center">
            <p>Subscribe to receive the latest</p>
            <p>insights and updates directly to</p>
            <p>your inbox</p>
          </div>
        </div>

        <div className="h-10 w-10 cursor-pointer border-black/60 rounded-full border-2 flex items-center justify-center hover:bg-orangy hover:border-none">
          <FaArrowRight size={20} />
        </div>
      </div>

      <hr className="border-black/30 w-full h-[1%]" />
    </div>
  );
};

export default Final;
