import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import useAuth from "../Hooks/useAuth";
import { FaRegMoon } from "react-icons/fa";
import useSingleUser from "../Hooks/useSingleUser";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    false
    // localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      //   localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      //   localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  console.log(darkMode);
  const {userData}=useSingleUser()
  console.log(userData)
  return (
    <div className="navbar  w-11/12 md:w-10/12 mx-auto">
      <div className="flex-1">
        <div className="w-10 h-10">
          <img
            className="w-full h-full object-cover rounded-full"
            src={logo}
            alt=""
          />
        </div>
        <div className="hidden md:block">
          <Link to={"/"}>
            <p className="btn btn-ghost text-xl text-light-text dark:text-dark-text">
              TaskFlow
            </p>
          </Link>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-light-primary dark:bg-dark-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="rounded-md   text-light-text ">
              <button className="text-lg md:text-xl">Log Out</button>
            </li>
          </ul>
        </div>
        {/* <div className="ml-3">
          {" "}
          <button className="rounded-md px-4 py-2 bg-light-primary text-light-text dark:bg-dark-primary hover:bg-opacity-80 dark:hover:bg-opacity-80">
            Log Out
          </button>
        </div> */}
        <div className="ml-3">
          <label className="flex cursor-pointer gap-2">
            <div className="dark:text-dark-text">
              {" "}
              <IoSunnyOutline size={25} />
            </div>

            <input
              type="checkbox"
              checked={darkMode}
              value="synthwave"
              className="toggle theme-controller border-light-primary dark:border-dark-primary"
              onChange={() => setDarkMode(!darkMode)}
              
            />
            <div className="dark:text-dark-text"> 
              {" "}
              <IoMoonOutline size={24} />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
