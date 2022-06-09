import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar({ handleNavbar, handleOn, on, renderThemeChanger }) {
  console.log("abcd");
  return (
    <>
      <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3">
        <div className="w-full px-4  flex flex-wrap items-center justify-between">
          <Link href="/">
            <a
              className="text-white text-xl font-bold font-sans subpixel-antialiased leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#pablo"
            >
              Aqua Club
            </a>
          </Link>

          <div className="flex">
            {renderThemeChanger()}

            <button className="p-2 rounded-full text-sm sm:text-xl font-medium bg-white dark:text-black mx-3 sm:mx-4 font-hand">
              Mint Some Clans
            </button>
            <button
              className="text-xl  pl-3 py-1 border border-solid border-transparent rounded lg:hidden bg-transparent block"
              onClick={handleNavbar}
            >
              <i className="text-white fas fa-bars"></i>
            </button>

            <div
              className={
                "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden"
              }
              id="example-navbar-warning"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href=""
                    target="_blank"
                  >
                    <i className="text-white fab fa-facebook text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Share</span>
                  </a>
                </li>

                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href=""
                    target="_blank"
                  >
                    <i className="text-white fab fa-twitter text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Tweet</span>
                  </a>
                </li>

                {/* <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href=""
                    target="_blank"
                  >
                    <i className="text-white fab fa-github text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Star</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
