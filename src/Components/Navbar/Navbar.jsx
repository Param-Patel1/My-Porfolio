import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeContext } from '../../App';

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    console.log("clicked")
  };
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{duration: .5}}
    >

    {/* <div className="flex items-center place-content-around">
      <Link to="/">
        <h2 className="text-3xl font-bold">imparam()</h2>
      </Link>
      <ul className="flex items-center p-4">
        <Link to="/">
          <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out hover:bg-navBlue">
            Home
          </li>
        </Link>

        <Link to="/education">
          <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navYellow hover:shadow-glow">
            Education
          </li>
        </Link>
        <Link to="/experience">
          <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navPurple hover:shadow-glow">
            Experience
          </li>
        </Link>
        <Link to="/projects">
          <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navGreen hover:shadow-glow">
            Projects
          </li>
        </Link>
        <Link to="/contact">
          <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navOrange hover:shadow-glow">
            Contact Me
          </li>
        </Link>
        <button className="moon m-2 p-3 ml-2 cursor-none rounded-3xl bg-black text-white hover:bg-gray-200 hover:transition duration-300 
        ease-in-out hover:text-white hover:shadow-glow"
        onClick={toggleTheme}
        >
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </li>
        </button>
      </ul>
    </div> */}

    <div className="hidden md:flex items-center place-content-around">
        {/* Logo */}
        <Link to="/">
          <h2 className="text-3xl font-bold">imparam()</h2>
        </Link>

        {/* Menu Items */}
          <ul className="flex items-center p-4">
        <Link to="/">
          <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out hover:bg-navBlue">
            Home
          </li>
        </Link>

        <Link to="/education">
          <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navYellow hover:shadow-glow">
            Education
          </li>
        </Link>
        <Link to="/experience">
          <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navPurple hover:shadow-glow">
            Experience
          </li>
        </Link>
        <Link to="/projects">
          <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navGreen hover:shadow-glow">
            Projects
          </li>
        </Link>
        <Link to="/contact">
          <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navOrange hover:shadow-glow">
            Contact Me
          </li>
        </Link>
        <button className="moon m-2 p-3 ml-2 cursor-none rounded-3xl bg-black text-white hover:bg-gray-200 hover:transition duration-300 
        ease-in-out hover:text-white hover:shadow-glow"
        onClick={toggleTheme}
        >
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </li>
        </button>
      </ul>          
      
    </div>
    <div className="md:hidden flex items-center place-content-around">

    <Link to="/">
          <h2 className="text-3xl font-bold">imparam()</h2>
        </Link>


  <button
    className="m-5 px-4 py-2 rounded-md bg-navBlue text-white hover:bg-navPurple"
    onClick={toggleDropdown}
  >
    ☰
  </button>
</div>

{/* Dropdown Content - Visible for md and smaller screens */}
{isDropdownVisible && (
  <div className="md:absolute text-center justify-center top-full right-0 shadow-md p-2">
    <ul>
      <Link to="/">
        <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out hover:bg-navBlue">
          Home
        </li>
      </Link>

      <Link to="/education">
        <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navYellow hover:shadow-glow">
          Education
        </li>
      </Link>
      <Link to="/experience">
        <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navPurple hover:shadow-glow">
          Experience
        </li>
      </Link>
      <Link to="/projects">
        <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navGreen hover:shadow-glow">
          Projects
        </li>
      </Link>
      <Link to="/contact">
        <li className="m-2 px-7 py-2 rounded-md hover:shadow-xl hover:transition duration-300 ease-in-out transform hover:bg-navOrange hover:shadow-glow">
          Contact Me
        </li>
      </Link>
    </ul>
    <button
      className="moon m-2 p-3 ml-2 cursor-none rounded-3xl bg-black text-white hover:bg-gray-200 hover:transition duration-300 ease-in-out hover:text-white hover:shadow-glow"
      onClick={toggleTheme}
    >
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </li>
    </button>
  </div>
)}
    </motion.div>
  );
};

export default Navbar;