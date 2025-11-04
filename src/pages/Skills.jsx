import React, { useEffect, useRef } from "react";
import {
  SiCss3,
  SiDotnet,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiGitlab,
  SiMysql,
  SiReact,
  SiPostman,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { useLocation } from "react-router-dom";

const Skills = () => {
  const skillsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/skills") {
      skillsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Javascript", "React"],
    },
    {
      title: "Backend",
      skills: ["C#", "MySQL", ".NET", "Clean Code", "REST API"],
    },
    {
      title: "Others",
      skills: ["GIT", "GitLab", "Postman", "Visual Studio Code"],
    },
  ];

  const techIcons = [
    <SiHtml5 className="text-orange-600" />,
    <SiCss3 className="text-blue-600" />,
    <SiReact className="text-cyan-400" />,
    <SiJavascript className="text-yellow-400" />,
    <TbBrandCSharp className="text-purple-600" />,
    <SiMysql className="text-[#00758F]" />,
    <SiDotnet className="text-purple-600" />,
    <DiVisualstudio className="text-[#463668] text-5xl" />,
    <SiGit className="text-orange-700" />,
    <SiPostman className="text-[#FF6C37]" />,
    <SiGitlab className="text-orange-700" />,
  ];

  return (
    <div className="min-h-[90vh] bg-[#FBFBFB] dark:bg-[#030712] px-5 py-16  sm:px-28 lg:px-40 transition-colors duration-300">
      <h1
        ref={skillsRef}
        className="text-4xl sm:text-5xl font-semibold text-gray-800 dark:text-gray-100 mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Skills
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Skills List */}
        <div className="space-y-12 lg:pr-12 lg:border-r-2 border-gray-200 dark:border-gray-700">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 gap-3 text-lg">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-gray-700 dark:text-gray-300 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icons */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:pl-12 gap-8 items-center justify-items-center">
          {techIcons.map((icon, index) => (
            <div
              key={index}
              className="text-5xl transform hover:scale-110 transition-transform duration-300 p-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
