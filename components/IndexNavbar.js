import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ handleNavbar, renderThemeChanger }) {
  const router = useRouter();

  return (
    <>
      <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3">
        <div className="w-full px-4  flex flex-wrap items-center justify-between">
          <Link href="/">
            <a
              className="text-black dark:text-white text-xl font-bold font-sans subpixel-antialiased leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#pablo"
            >
              Aqua Club
            </a>
          </Link>

          <div className="flex">
            {renderThemeChanger()}

            {router.pathname != "/mint" && (
              <Link href="/mint">
                <a className="p-2 rounded-full text-sm sm:text-xl font-medium bg-black dark:bg-white text-white dark:text-black mx-3 sm:mx-4 font-hand">
                  Mint Some Clans
                </a>
              </Link>
            )}

            <button
              className="text-xl pl-3 py-1 border border-solid border-transparent rounded lg:hidden bg-transparent block"
              onClick={handleNavbar}
            >
              <i className="dark:text-white text-black fas fa-bars"></i>
            </button>

            <div
              className={
                "lg:flex flex-grow items-center dark:text-white text-black lg:bg-opacity-0 lg:shadow-none hidden"
              }
              id="example-navbar-warning"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href=""
                    target="_blank"
                  >
                    <i className="fab fa-discord text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Share</span>
                  </a>
                </li>

                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href=""
                    target="_blank"
                  >
                    <i className="fab fa-twitter text-lg leading-lg " />
                    <span className="lg:hidden inline-block ml-2">Tweet</span>
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
