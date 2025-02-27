import React, { useState } from "react";
import img from "../assets/me6.jpg";
import { Link } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";

const About = () => {
   const [dark, setDark] = useState(false)
  const darkModeHandler=()=>{
    setDark(!dark)
    document.body.classList.toggle('dark')
  }
   
  return (
    <div className="min-h-[90vh] bg-[#FBFBFB] flex justify-center items-center lg:p-40 sm:p-28 p-5  dark:bg-[#030712]">
       <button onClick={darkModeHandler} className="  absolute top-10 right-10  sm:right-40 sm:top-10 text-2xl "> {dark?<IoSunny/>:<IoMoon/>}</button>
      <div className="flex flex-col justify-center items-center gap-y-4 ">
        <img
          src={img}
          alt=""
          className="h-56  w-56  object-cover rounded-full  border-4 border-gray-600 dark:border-white"
        />
        <p className="text-2xl  text-center  font-Raleway p-3 leading-8   sm:tracking-wider">
          {" "}

          <span className="font-semibold">Hi there👋</span> <br />
          I'm <span className=" font-semibold">Saurab Prasai</span> and an undergraduate student of CS who loves
          javaScript, mongodb, node.js, cat and that one girl from
          another faculty.
        </p>
        <div className="flex flex-row gap-x-5">
        <Link
            to={"/"}
            className=" border border-black py-1 px-3  rounded-3xl text-xl dark:border-white "
          >
            Home
          </Link>
          <Link
            to={"/skills"}
            className=" border border-black py-1 px-3  rounded-3xl text-xl  dark:border-white"
          >
            Skills
          </Link>
          <Link
            to={"/projects"}
            className=" border border-black py-1 px-3  rounded-3xl text-xl  dark:border-white"
          >
            Project
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default About;
