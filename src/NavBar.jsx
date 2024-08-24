import React from "react";
import { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TabContext } from "./TabContext.jsx";
import "./App.css";

const Navbar = (props) => {
  const { tab, setTab } = useContext(TabContext);
  return (
    <nav className="bg-white fixed text-white w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <a
              href="#home"
              className={
                tab == 0
                  ? "px-3 py-2 rounded-md text-sm font-bold"
                  : "px-3 py-2 rounded-md text-sm font-medium"
              }
              onClick={() => setTab(0)}
            >
              Home
            </a>
            <a
              href="#about"
              className={
                tab == 1
                  ? "px-3 py-2 rounded-md text-sm font-bold"
                  : "px-3 py-2 rounded-md text-sm font-medium"
              }
              onClick={() => setTab(1)}
            >
              Projects
            </a>
            <a
              href="https://github.com/4RohanSinha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-s-ba6a31255"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="text-black font-semibold ml-auto text-xl">
            Rohan Sinha
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
