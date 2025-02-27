import React from "react";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Footer from "../components/Footer";


const RootLayout = () => {
  
  return (
    <div className="font-Raleway dark:bg-[#030712] dark:text-white ">
     
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default RootLayout;
