import React from "react";
import { SiChessdotcom, SiFacebook, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <div className="min-h-[50vh] bg-[#FBFBFB] dark:bg-[#030712] px-5 py-16 lg:px-40 sm:px-28 flex flex-col md:flex-row items-center gap-y-12 md:gap-x-16 transition-colors duration-300">
      {/* Text Section */}
      <div className="flex-1 flex flex-col gap-6 max-w-lg">
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 dark:text-gray-100 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hey👋
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 tracking-wide leading-relaxed">
          I specialize in building robust, high-performance, and scalable
          backend systems and APIs using ASP.NET. If you have an exciting
          project in mind, need assistance with backend development, or just
          want to connect, feel free to reach out to me via email at {" "}
          <a
            href="mailto:saurab.prasai2@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-200"
          >
            saurab.prasai2@gmail.com
          </a>
          .
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex-1 flex justify-center items-center gap-x-6 sm:gap-x-8">
        {[
          {
            href: "https://github.com/SaurabPrasai",
            icon: <SiGithub className="text-gray-800 dark:text-gray-200" />,
            label: "GitHub",
          },
          {
            href: "https://www.facebook.com/prasai.saurav",
            icon: <SiFacebook className="text-blue-600" />,
            label: "Facebook",
          },
          {
            href: "https://www.chess.com/member/saurab2002",
            icon: (
              <SiChessdotcom className="text-gray-800 dark:text-gray-200" />
            ),
            label: "Chess.com",
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-gray-200 dark:bg-gray-800 rounded-full text-3xl sm:text-4xl hover:bg-gray-300 dark:hover:bg-gray-700 transform hover:scale-110 transition-all duration-300"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
