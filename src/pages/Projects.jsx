import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Project = () => {
  const projectRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") {
      projectRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const projects = [

    {
      title:"SnapStore",
      liveLink:"https://snapstore32.netlify.app/",
      description:"Capture and preserve your precious memories in one place created using React and Firebase.",
      codeLink:"https://github.com/SaurabPrasai/Snapstore"
    },
    {
      title: "SaurHub",
      liveLink: "https://ecommerce-node-kk5p.onrender.com",
      codeLink: "https://github.com/SaurabPrasai/ECOMMERCE_NODE",
      description: "An Ecommerce app created using Node.js, MongoDB, and EJS.",
    },
    {
      title: "Room Finder",
      liveLink: "https://room-finder-i8g9.onrender.com",
      codeLink: "https://github.com/SaurabPrasai/room-finder/",
      description: "A room locator app created using React and Firebase.",
    },
    {
      title: "Finance Tracker",
      codeLink: "https://github.com/SaurabPrasai/Finance-Tracker",
      description: "An expense monitor app created using MERN Stack.",
    },
    {
      title: "Update Damak",
      liveLink: "https://update-damak.vercel.app",
      description: "A news portal created using HTML, CSS, and JavaScript.",
    },
    {
      title: "AutoNews",
      codeLink: "https://github.com/SaurabPrasai/automate-news-",
      description: "A news-scraping app that sends automated updates using Node.js and cron jobs.",
    },
  
  ];

  return (
    <div 
      ref={projectRef}
      className="min-h-[90vh] bg-[#FBFBFB] dark:bg-[#030712] px-5 py-16  sm:px-28 lg:px-40 transition-colors duration-300"
    >
      <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 dark:text-gray-100 mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h1>

      <div className="space-y-12 max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-x-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h2>
              </div>
              <div className="flex gap-x-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 dark:border-gray-300 py-2 px-4 rounded-full text-lg font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-200"
                  >
                    Live
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 dark:border-gray-300 py-2 px-4 rounded-full text-lg font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-200"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 pl-2">
              - {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;