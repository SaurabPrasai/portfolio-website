import React, { useState } from "react";
import img from "../assets/me3.jpg";
import { Link } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";

const About = () => {
  const [dark, setDark] = useState(false);
  
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };
  
  return (
    <div className="min-h-[90vh] bg-[#FBFBFB] dark:bg-[#030712] flex justify-center items-center px-5 py-16   transition-colors duration-300">
      {/* Dark mode toggle button */}
      <button 
        onClick={darkModeHandler} 
        className="fixed top-6 right-6 sm:top-10 sm:right-10 text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 z-10"
        aria-label="Toggle dark mode"
      >
        {dark ? <IoSunny className="text-yellow-400" /> : <IoMoon className="text-gray-600 dark:text-gray-300" />}
      </button>

      {/* Main content */}
      <div className="flex flex-col justify-center items-center gap-y-8 max-w-2xl">
        {/* Profile image */}
        <div className="relative">
          <img
            src={img}
            alt="Saurab Prasai"
            className="h-64 w-64 object-cover rounded-full border-4 border-gray-600 dark:border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-gray-500/20 dark:to-gray-300/20 pointer-events-none"></div>
        </div>

        {/* Description */}
        <p className="text-xl sm:text-2xl text-center font-Raleway p-4 leading-8 sm:leading-9 tracking-wide text-gray-800 dark:text-gray-200">
          <span className="font-semibold text-2xl sm:text-3xl">Hi there👋</span> <br />
          I'm <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Saurab Prasai</span>, 
          an undergraduate CS student who loves JavaScript, MongoDB, Node.js, cats, and that one girl from another faculty.
        </p>

        {/* Navigation buttons */}
        <div className="flex flex-row gap-x-4 sm:gap-x-6 mt-4">
          <Link
            to={"/"}
            className="border border-gray-600 dark:border-white py-2 px-4 sm:px-6 rounded-full text-lg sm:text-xl font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to={"/skills"}
            className="border border-gray-600 dark:border-white py-2 px-4 sm:px-6 rounded-full text-lg sm:text-xl font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-200"
          >
            Skills
          </Link>
          <Link
            to={"/projects"}
            className="border border-gray-600 dark:border-white py-2 px-4 sm:px-6 rounded-full text-lg sm:text-xl font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-200"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;