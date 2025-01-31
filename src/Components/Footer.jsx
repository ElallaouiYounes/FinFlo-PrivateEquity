import React from "react";
import { TbNorthStar } from "react-icons/tb";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-gray-950 px-14 py-16 flex flex-row">
      <div className="w-[80%] flex flex-col gap-6">
        <div>
          <p className="text-creamy text-9xl font-oswald font-extrabold">
            THE TIME IS NOW
          </p>
          <p className="text-creamy text-[95px] leading-none font-oswald font-extrabold">
            THE PATH IS FORWARD
          </p>
        </div>
        <div className="flex flex-row justify-between">
            <div className="text-creamy text-sm ml-2 flex flex-col gap-2">
                <div className="flex gap-2">
                    <Link to=""> <FaLinkedinIn size={20} /> </Link>
                    <Link to=""> <FaFacebookF size={20} /> </Link>
                    <Link to=""> <FaXTwitter size={20} /> </Link>
                    <Link to=""> <FaInstagram size={20} /> </Link>
                </div>
                <p className="text-[#f6ecd0]">Copyright ©2025 FinFlo by Younes. All Rights Reserved</p>
            </div>

            <div className="flex flex-row gap-12 text-creamy mr-16">
                <div>
                    <p className="text-creamy">Latitude</p>
                    <p className="text-orangy text-3xl font-oswald font-extrabold">377.749</p>
                </div>

                <div>
                    <p className="text-creamy">Longitude</p>
                    <p className="text-orangy text-3xl font-oswald font-extrabold">-1.224.194</p>
                </div> 
            </div>
        </div>
      </div>


      <div className="flex justify-start w-[20%] flex-col items-end gap-6">
        <TbNorthStar size={130} className="text-orangy/80 rotate-6" />
        <div className="flex items-end flex-col gap-3 text-creamy">
          <Link to="/not-found" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/not-found" className="hover:underline">
            Teams of Service
          </Link>
          <Link to="/not-found" className="hover:underline">
            Cookie Policy
          </Link>
          <Link to="/not-found" className="hover:underline">
            Disclaimer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
