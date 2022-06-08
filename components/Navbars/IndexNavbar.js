import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar({handleNavbar}) {
 

  console.log("abcd")
  return (
    <>
      <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <Link href="/">
            <a
              className="text-white text-xl font-bold font-sans subpixel-antialiased leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#pablo"
            >
              Aqua Club
            </a>
          </Link>

          <div className="flex">
            <button
              className="p-2 rounded-full text-sm sm:text-xl font-medium bg-white sm:px-3 font-hand"
            >
              Mint Some Clans
            </button>
            {/* <button className="p-2 rounded-full text-xl font-medium bg-white px-3 font-hand">
           <i className="text-white fas fa-bars"></i>
              </button> */}

            <button
              className="text-xl  pl-3 py-1 border border-solid border-transparent rounded lg:hidden bg-transparent block"
              onClick={ handleNavbar }
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
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                    target="_blank"
                  >
                    <i className="text-white fab fa-facebook text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Share</span>
                  </a>
                </li>

                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                    target="_blank"
                  >
                    <i className="text-white fab fa-twitter text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Tweet</span>
                  </a>
                </li>

                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar"
                    target="_blank"
                  >
                    <i className="text-white fab fa-github text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Star</span>
                  </a>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
      </nav>
    </>
  );
}
