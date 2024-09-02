// src/components/Sidebar.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="fixed left-0 top-0 h-full z-10 w-16 bg-[#1A1A1A] px-10 text-white flex flex-col justify-between items-center py-4">
      {/* Sidebar Content */}
      <div className="flex flex-col items-center">
        {/* Menu Button */}
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

        {/* Add more items here if needed */}
      </div>

      {/* Rotated Text at Bottom */}
      <div className="relative mt-auto mb-4">
        <div className="text-4xl font-bold transform mb-4 -rotate-90 tracking-wider headings">
          RE<span className="text-primary font-extrabold ml-1 mr-1">D</span>
          EFINE <span className="">GROUP</span>
        </div>
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
                <div className="text-5xl flex flex-col text-center  font-extrabold mb-4 headings">
                  <p>REDEFINE</p>
                  <p className="text-md ">GROUP</p>
                </div>
                <ul className="space-y-4 text-center mt-10 md:text-2xl text-md">
                  <Link to={'/'}>
                  <li className="hover:bg-primary p-2 group-hover:text-gray-800 group  cursor-pointer">
                    Home
                  </li>
                  </Link>

                  <Link to={'/aboutus'}>
                  <li className="hover:bg-primary p-2 group-hover:text-gray-800 group mt-4 cursor-pointer">
                    About Us
                  </li>
                  </Link>
                  <li className="hover:bg-primary p-2  cursor-pointer">
                    Achievements
                  </li>
                  <li className="hover:bg-primary p-2 cursor-pointer">
                    Contact
                  </li>
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

                <div className="relative mt-auto mb-10">
                  <div className="text-4xl font-bold transform mb-4 -rotate-90 headings tracking-wider">
                    RE
                    <span className="text-primary font-extrabold ml-1 mr-1">
                      D
                    </span>
                    EFINE <span className="">GROUP</span>
                  </div>
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
