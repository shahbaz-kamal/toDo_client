import React, { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const {name}=useAuth()
  console.log(name)
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
        <div>
          <Link to={"/"}>
            <p className="btn btn-ghost text-xl text-light-text dark:text-dark-text">TaskFlow</p>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           
           
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div className="ml-3">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              checked={darkMode}
              value="synthwave"
              className="toggle theme-controller"
              onChange={() => setDarkMode(!darkMode)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
