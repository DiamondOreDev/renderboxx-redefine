import React, { useState, useEffect, useRef } from 'react';
import haridwarlogo from '../../assets/haridwarlogo.png';
import logo from "../../assets/redefinelogo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [submenuTimer, setSubmenuTimer] = useState(null);

  const menuRef = useRef(null); // Ref to track clicks outside the menu

  // Function to change navbar color on scroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  // Close the menu if clicked outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  // Hover functions to delay submenu disappearance
  const handleMouseEnter = () => {
    if (submenuTimer) clearTimeout(submenuTimer);
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowSubmenu(false);
    }, 300); // Submenu will stay for half a second after hover out
    setSubmenuTimer(timer);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        navbar ? 'bg-gray-900 shadow-md opacity-75' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-14 w-auto"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to={'/'} className="text-gray-100 hover:text-gray-300 transition-colors">Home</Link>
          <Link to={'/aboutus'} className="text-gray-100 hover:text-gray-300 transition-colors">About Us</Link>

          {/* Projects Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#projects" className="text-gray-100 hover:text-gray-300 transition-colors">
              Projects
            </a>
            {showSubmenu && (
              <div
                className="absolute top-full mt-2 w-48 bg-gray-800 rounded-md shadow-lg transition-opacity duration-300 ease-in-out opacity-100"
              >
                <Link to={'/haridwarparadise'}  target="_blank" className="block px-4 py-2 text-gray-100 hover:bg-gray-700 transition-all duration-200">Haridwar Paradise</Link>
                <Link to={'/devprayagparadise'} target='_blank' className="block px-4 py-2 text-gray-100 hover:bg-gray-700 transition-all duration-200">Devprayag Paradise</Link>
              </div>
            )}
          </div>

          <a href="#achievements" className="text-gray-100 hover:text-gray-300 transition-colors">Achievements</a>
          <Link to={'/contactus'} className="text-gray-100 hover:text-gray-300 transition-colors">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setShowMenu(!showMenu)} className="text-gray-100 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Drawer-like) */}
      <div
        ref={menuRef} // Ref to detect outside clicks
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <Link to={'/'} className="block px-4 py-2 text-gray-100 hover:bg-gray-700" onClick={() => setShowMenu(false)}>Home</Link>
          <Link to={'/aboutus'} className="block px-4 py-2 text-gray-100 hover:bg-gray-700" onClick={() => setShowMenu(false)}>About Us</Link>
          <a href="#projects" className="block px-4 py-2 text-gray-100 hover:bg-gray-700" onClick={() => setShowMenu(false)}>Projects</a>
          <a href="#achievements" className="block px-4 py-2 text-gray-100 hover:bg-gray-700" onClick={() => setShowMenu(false)}>Achievements</a>
          <Link to={'/contactus'} className="block px-4 py-2 text-gray-100 hover:bg-gray-700" onClick={() => setShowMenu(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
