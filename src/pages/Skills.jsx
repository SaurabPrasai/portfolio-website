import React, { useEffect, useRef } from "react";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiTypescript,

} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { useLocation } from "react-router-dom";

const Skills = () => {
  const skillsRef=useRef(null)
  const location=useLocation();

  useEffect(()=>{
      if(location.pathname==="/skills"){
        skillsRef.current?.scrollIntoView({behavior:"smooth"})
      }
  },[location])

  return (
    <div className=" min-h-[90vh] lg:p-40 p-10 sm:p-28" >
      <p className=" text-5xl font-semibold" ref={skillsRef} >Skills</p>
      <div className="grid lg:grid-cols-[1fr_1fr]  mt-16">
        <div className="grid grid-rows-3 gap-10 lg:border-r-2 border-gray-300 ">
          <div className="">
            <h1 className="text-2xl  font-semibold">Frontend</h1>
            <div className="grid grid-cols-2 text-xl gap-2 mt-4 ">
             <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
           
              <span>React</span>
              <span>Typescript</span>
            
            </div>
          </div>

          <div>
            <h1 className="text-2xl  font-semibold">Backend</h1>
            <div className="grid grid-cols-2 text-xl gap-2 mt-4">
              <span>Node.js</span>
              <span>PostgeSQL</span>
              <span>Express</span>
              <span>REST API</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div>
            <h1 className="text-2xl  font-semibold">Others</h1>
            <div className="grid grid-cols-2 text-xl gap-2 mt-4 ">
              <span>GIT</span>
              <span>Responsive Design</span>
              <span>VS Code</span>
              <span>Docker</span>
            </div>
          </div>
        </div>

        {/* logo */}

        <div className=" hidden lg:pl-16 lg:grid lg:grid-cols-3 lg:text-5xl lg:items-center ">
          <span>
            <SiHtml5 />
          </span>
          <span>
            <SiCss3 />
          </span>
          <span>
            <SiReact />
          </span>
          <span>
            <SiJavascript />
          </span>
          <span>
            <SiTypescript />
          </span>
          <span className=" text-6xl">
            <DiVisualstudio />
          </span>
          <span>
            <SiMongodb />
          </span>
          <span>
            <SiPostgresql />
          </span>
          <span>
            <SiGit />
          </span>
          <span>
            <SiNodedotjs />
          </span>
          <span>
            <SiTailwindcss />
          </span>
          <span>
            <SiRender />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
