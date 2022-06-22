import React from "react";
import { Link } from "react-scroll";
import IndexNavbar from "components/IndexNavbar.js";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import Footer from "components/Footer.js";
import About from "components/About.js";
import Rarity from "components/Rarity.js";
import Vision from "components/Vision.js";
import Team from "components/Team.js";
import Questions from "components/Questions.js";
import { useRouter } from "next/router";

export default function Sidebar({ handleNavbar, navOpen, close }) {
  const { pathname } = useRouter();

  console.log(pathname);
  console.log(`Is nav opened? ${navOpen}`);
  console.log(close);

  console.log("..............................");

  return (
    <div>
      {(navOpen && !close) && (
        <aside className={`fixed top-0 left-0 `} aria-label="Sidebar">
          <div
            className="cursor-pointer bg-white dark:bg-gray-800 dark:text-white text-black text-right pr-5 pt-3  w-full text-2xl font-medium font-hand"
            onClick={handleNavbar}
          >
            X
          </div>
          <div className="overflow-y-auto w-72  py-4 h-screen px-3 text-black dark:text-white rounded text-center font-hand bg-white dark:bg-gray-800">
            {/* {children} */}

            {pathname === "/" && (
              <ul className="space-y-2 text-2xl">
                <li className="">
                  <Link
                    activeClass="active"
                    href="about"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <span
                      className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
                      onClick={() => handleNavbar()}
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li className="mt-5">
                  <Link
                    activeClass="active"
                    href="rarity"
                    to="rarity"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <span
                      className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
                      onClick={() => handleNavbar()}
                    >
                      Rarity
                    </span>
                  </Link>
                </li>
                <li className="mt-5">
                  <Link
                    activeClass="active"
                    href="vision"
                    to="vision"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <span
                      className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
                      onClick={() => handleNavbar()}
                    >
                      Our Vision
                    </span>
                  </Link>
                </li>
                <li className="mt-5">
                  <Link
                    activeClass="active"
                    href="team"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <span
                      className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
                      onClick={() => handleNavbar()}
                    >
                      Our Team
                    </span>
                  </Link>
                </li>
                <li className="mt-5">
                  <Link
                    activeClass="active"
                    href="faq"
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <span
                      className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
                      onClick={() => handleNavbar()}
                    >
                      FAQ
                    </span>
                  </Link>
                </li>
              </ul>
            )}

            {pathname == "/mint" && (
              <ul className="space-y-2 text-2xl">
                <li className="mt-5">
                  <Link
                    activeClass="active"
                    href="vision"
                    to="vision"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <span
                      className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
                      onClick={() => handleNavbar()}
                    >
                      Our Vision
                    </span>
                  </Link>
                </li>
                <li className="mt-5">
                  <Link
                    activeClass="active"
                    href="team"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <span
                      className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
                      onClick={() => handleNavbar()}
                    >
                      Our Team
                    </span>
                  </Link>
                </li>
                <li className="mt-5">
                  <Link
                    activeClass="active"
                    href="faq"
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <span
                      className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
                      onClick={() => handleNavbar()}
                    >
                      FAQ
                    </span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </aside>
      )}
    </div>

    // <div className="fixed top-0 left-0">
    //   {navOpen && !close && (
    //     <aside className={`fixed top-0 left-0 `} aria-label="Sidebar">
    //       <div
    //         className="cursor-pointer bg-white dark:bg-gray-800 dark:text-white text-black text-right pr-5 pt-3  w-full text-2xl font-medium font-hand"
    //         onClick={handleNavbar}
    //       >
    //         X
    //       </div>
    //       <div className="overflow-y-auto w-72  py-4 h-screen px-3 text-black dark:text-white rounded text-center font-hand bg-white dark:bg-gray-800">
    //         {/* {children} */}

    //         {pathname === "/" && (
    //           <ul className="space-y-2 text-2xl">
    //             <li className="">
    //               <Link
    //                 activeClass="active"
    //                 href="about"
    //                 to="about"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-100}
    //                 duration={500}
    //               >
    //                 <span
    //                   className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
    //                   onClick={() => handleNavbar()}
    //                 >
    //                   About
    //                 </span>
    //               </Link>
    //             </li>
    //             <li className="mt-5">
    //               <Link
    //                 activeClass="active"
    //                 href="rarity"
    //                 to="rarity"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-100}
    //                 duration={500}
    //               >
    //                 <span
    //                   className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
    //                   onClick={() => handleNavbar()}
    //                 >
    //                   Rarity
    //                 </span>
    //               </Link>
    //             </li>
    //             <li className="mt-5">
    //               <Link
    //                 activeClass="active"
    //                 href="vision"
    //                 to="vision"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-100}
    //                 duration={500}
    //               >
    //                 <span
    //                   className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
    //                   onClick={() => handleNavbar()}
    //                 >
    //                   Our Vision
    //                 </span>
    //               </Link>
    //             </li>
    //             <li className="mt-5">
    //               <Link
    //                 activeClass="active"
    //                 href="team"
    //                 to="team"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-100}
    //                 duration={500}
    //               >
    //                 <span
    //                   className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
    //                   onClick={() => handleNavbar()}
    //                 >
    //                   Our Team
    //                 </span>
    //               </Link>
    //             </li>
    //             <li className="mt-5">
    //               <Link
    //                 activeClass="active"
    //                 href="faq"
    //                 to="faq"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-100}
    //                 duration={500}
    //               >
    //                 <span
    //                   className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
    //                   onClick={() => handleNavbar()}
    //                 >
    //                   FAQ
    //                 </span>
    //               </Link>
    //             </li>
    //           </ul>
    //         )}

    //         {pathname == "/mint" && (
    //           <ul className="space-y-2 text-2xl">
    //             <li className="mt-5">
    //               <Link
    //                 activeClass="active"
    //                 href="vision"
    //                 to="vision"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-100}
    //                 duration={500}
    //               >
    //                 <span
    //                   className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
    //                   onClick={() => handleNavbar()}
    //                 >
    //                   Our Vision
    //                 </span>
    //               </Link>
    //             </li>
    //             <li className="mt-5">
    //               <Link
    //                 activeClass="active"
    //                 href="team"
    //                 to="team"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-100}
    //                 duration={500}
    //               >
    //                 <span
    //                   className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
    //                   onClick={() => handleNavbar()}
    //                 >
    //                   Our Team
    //                 </span>
    //               </Link>
    //             </li>
    //             <li className="mt-5">
    //               <Link
    //                 activeClass="active"
    //                 href="faq"
    //                 to="faq"
    //                 spy={true}
    //                 smooth={true}
    //                 offset={-100}
    //                 duration={500}
    //               >
    //                 <span
    //                   className="dark:text-white hover:text-gray-400 dark:hover:text-gray-700"
    //                   onClick={() => handleNavbar()}
    //                 >
    //                   FAQ
    //                 </span>
    //               </Link>
    //             </li>
    //           </ul>
    //         )}
    //       </div>
    //     </aside>
    //   )}
    // </div>
  );
}
