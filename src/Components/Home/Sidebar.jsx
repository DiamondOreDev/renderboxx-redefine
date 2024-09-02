// src/components/Sidebar.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/redefinelogo.png";

const Sidebar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="fixed left-0 top-0 h-full z-10 w-[80px] bg-[#1A1A1A] px-10 text-white flex flex-col justify-between items-center py-4">
      <div className="flex flex-col items-center">
        <button className=" p-2  mb-4" onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-12 mt-auto ">
        <img
          src={logo}
          alt="logoimage of redefinegroup"
          className="w-full z-60 h-full -rotate-90 "
        />
        {/* <div className="text-3xl font-bold px-2 transform mb-4 -rotate-90 tracking-wider headings">
          <p className="bg-blue-600 px-2">  RE<span className="text-primary font-extrabold ml-1 mr-1">D</span>
          EFINE </p>
        <span className="bg-yellow-400 px-2">GROUP</span>
        </div> */}
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 bg-[#222222] text-white shadow-lg z-50"
          >
            <div className=" flex">
              <div className="flex flex-col  w-full py-10 z-10">
                <img src={logo} alt="" className="px-6" />
                {/* <div className="text-5xl flex flex-col text-center  font-extrabold mb-4 headings">
                  <p>REDEFINE</p>
                  <p className="text-md ">GROUP</p>
                </div> */}
                <ul className="space-y-4 text-center mt-10 md:text-2xl text-md">
                  <Link to={"/"}>
                    <li className="hover:bg-primary p-2 group-hover:text-gray-800 group  cursor-pointer">
                      Home
                    </li>
                  </Link>

                  <Link to={"/aboutus"}>
                    <li className="hover:bg-primary p-2 group-hover:text-gray-800 group mt-4 cursor-pointer">
                      About Us
                    </li>
                  </Link>

                  <a className="" href="#projects">
                    <li className="hover:bg-primary p-2 group-hover:text-gray-800 group mt-4 cursor-pointer">
                      Projects
                    </li>
                  </a>

                  <a href="#achievements">
                    <li className="hover:bg-primary p-2 group-hover:text-gray-800 group mt-4 cursor-pointer">
                      Achievements
                    </li>
                  </a>

                  <Link to={"/contactus"}>
                    <li className="hover:bg-primary p-2 group-hover:text-gray-800 group mt-4 cursor-pointer">
                      Contact Us
                    </li>
                  </Link>
                </ul>
              </div>

              <div className="w-20 h-screen  justify-center items-center bg-[#1A1A1A] flex flex-col">
                <button className=" p-2  mb-4" onClick={toggleDrawer}>
                  {/* Menu Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <div className="relative mt-auto  mb-10">
                  <img
                    src={logo}
                    alt=""
                    className="w-auto h-auto transform -rotate-90"
                  />
                  {/* <div className="text-4xl font-bold transform mb-4 -rotate-90 headings tracking-wider">
                    RE
                    <span className="text-primary font-extrabold ml-1 mr-1">
                      D
                    </span>
                    EFINE <span className="">GROUP</span>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
