import React from "react";
import { SiChessdotcom, SiFacebook, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <div className="min-h-[50vh] lg:p-40 sm:28 p-10 flex flex-col items-center md:flex-row  gap-y-6   ">
      <div className="flex-1 flex flex-col gap-3">
        <p className="text-5xl font-semibold">Hey👋</p>
        <p className="text-xl tracking-wider  indent-8 leading-8">
          I specialize in crafting fast, high-quality, and visually stunning
          websites and web applications. If you have an exciting project in
          mind, need assistance, or just want to connect, feel free to reach out
          to me via email{" "}
          <span className=" text-blue-600 hover:underline  hover:cursor-pointer">
            saurab.lovetocode@gmail.com
          </span>
          .
        </p>
      </div>

      <div className="flex-1 flex justify-center gap-x-8 items-center text-4xl text-black  ">
        <a href="https://github.com/SaurabPrasai" target="_blank" className=" p-2 bg-gray-200  rounded-full">
          <SiGithub />
        </a>
        <a href="https://www.facebook.com/prasai.saurav" target="_blank" className=" p-2 bg-gray-200  rounded-full">
          <SiFacebook />
        </a>
        <a href="https://www.chess.com/member/noobsaurab" target="_blank" className=" p-2 bg-gray-200  rounded-full">
          <SiChessdotcom />
        </a>
      </div>
    </div>
  );
};

export default Footer;
