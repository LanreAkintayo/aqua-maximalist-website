/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Faq from "react-faq-component";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const data = {
  title: "",
  rows: [
    {
      title: "How many Aqua Clan is available for purchase?",
      content: `10,000 Aqua Clans will be available`,
    },
    {
      title: "When will the collection drop?",
      content: "Very soon.",
    },
    {
      title: "How much will it cost?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
  ],
};

const styles = {
  bgColor: "black",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
};

const config = {
  animate: true,
  arrowIcon: "+",
  // tabFocus: true
};

export default function Index() {
  const [navOpen, setNavOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [on, setOn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [faqStyle, setFaqStyle] = useState({});

  const handleNavbar = () => {
    setNavOpen((prev) => {
      console.log(prev);
      setNavOpen(!prev);
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setClose(true);
      } else {
        setClose(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOn = () => {
    setOn((prev) => {
      setOn(!prev);
    });
  };

  useEffect(() => {
    if (mounted) {
      const currentTheme = theme === "system" ? systemTheme : theme;

      if (currentTheme === "dark") {
        setFaqStyle({
          bgColor: "black",
          titleTextColor: "",
          rowTitleColor: "white",
          rowContentColor: "white",
          arrowColor: "white",
        });
      } else {
        setFaqStyle({
          bgColor: "white",
          titleTextColor: "",
          rowTitleColor: "black",
          rowContentColor: "black",
          arrowColor: "black",
        });
      }
    }
  }, [mounted]);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => {
            setTheme("light");
            setFaqStyle({
              bgColor: "white",
              titleTextColor: "",
              rowTitleColor: "black",
              rowContentColor: "black",
              arrowColor: "black",
            });
          }}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-gray-500 "
          role="button"
          onClick={() => {
            setTheme("dark");
            setFaqStyle({
              bgColor: "black",
              titleTextColor: "",
              rowTitleColor: "white",
              rowContentColor: "white",
              arrowColor: "white",
            });
          }}
        />
      );
    }
  };

  return (
    <div className={`bg-white dark:bg-black ${navOpen && "fixed"} `}>
      <section className={`w-full h-screen ${navOpen && "overscroll-none"}`}>
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray-700 ">
            <IndexNavbar
              handleNavbar={handleNavbar}
              handleOn={handleOn}
              on={on}
              renderThemeChanger={renderThemeChanger}
            />

            <img
              alt="..."
              src="/img/background2.jpg"
              className="object-cover absolute w-full h-full opacity-1 mix-blend-overlay"
            />
          </div>

          <div className="sm:px-3  absolute w-full inset-y-32 lg:inset-y-48 text-white  ">
            <div className="flex flex-col items-center">
              <div className="font-serif text-base text-center sm:text-2xl font-medium px-2">
                A collection of 3,500 unique clans living on the Ethereum
                blockchain.
              </div>
              <h1 className="sm:text-7xl text-5xl mt-20 font-bold font-heading">
                AQUA CLUB
              </h1>
              <p className="text-base sm:text-xl text-center font-sans font-medium mt-2 px-2 ">
                Are you a whale, a shark, a dolphin, a crab or a shrimp?
              </p>
              <button className="p-2 px-3 font-hand text-xl sm:text-3xl text-black border-2 bg-white mt-3 sm:mt-6 font-medium rounded-full">
                View on Opensea
              </button>
            </div>
          </div>

          <aside
            className={`fixed top-0 left-0 ${
              (!navOpen && "hidden") || (close && "hidden")
            } `}
            aria-label="Sidebar"
          >
            <div className="overflow-y-auto w-72  py-4 h-screen px-3 text-black dark:text-white rounded text-center font-hand bg-white dark:bg-gray-800">
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
            </div>
          </aside>
        </div>
      </section>
      <section
        className=" py-12 border-x-0 border-t-0 border-b border-b-slate-600 mx-4 sm:mx-12 "
        id="about"
      >
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-8/12">
            <h1 className="text-3xl text-black dark:text-white font-medium font-sans">
              WELCOME TO THE THE AQUA CLUB
            </h1>

            <div className="flex">
              <p className="lg:w-8/12 text-black dark:text-white py-2 text-lg font-hand">
                When you buy an AQUA clan, you will never be poor again. He sure
                for me die.
              </p>
            </div>
          </div>
          <div className="lg:w-4/12">
            <div className="grid grid-rows-2 grid-cols-1 gap-2 h-auto">
              <div className="grid grid-rows-1 grid-cols-2 gap-2">
                <div className="bg-red-100 rounded-md">
                  <img
                    alt="..."
                    src="/img/tutle.jpg"
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="bg-red-100 rounded-md">
                  <img
                    alt="..."
                    src="/img/meta.jpg"
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
              <div className="grid grid-rows-1 grid-cols-2 gap-2">
                <div className="bg-red-400 rounded-md">
                  {" "}
                  <img
                    alt="..."
                    src="/img/meta.jpg"
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="bg-red-400 rounded-md">
                  <img
                    alt="..."
                    src="/img/tutle.jpg"
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-x-0 border-t-0 border-b border-b-slate-600 py-12 mx-4 sm:mx-12 text-black dark:text-white  "
        id="rarity"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-3xl py-2 font-medium font-serif">Rarity</h1>
          <p className="font-hand text-xl">
            Each NFT is algorithmically generated by combining 110+ unique
            traits with varying rarity across categories:
          </p>
          <ul className="list-disc flex flex-nowrap mx-2 font-hand">
            <li className="mx-4">Body</li>
            <li className="mx-4">Eyes</li>
            <li className="mx-4">Whiskers</li>
            <li className="mx-4">Ears</li>
          </ul>
          <div className="flex lg:flex-row flex-col justify-around mt-3 font-hand">
            <div className="flex flex-wrap flex-col items-center px-3 mt-6 lg:mt-0">
              <div className="w-64 ">
                <img
                  alt="..."
                  src="/img/fish2.jpg"
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              <p className="text-xl font-medium pt-2"> - Novice Clan -</p>
              <p className="text-gray-500 py-2">Not really common.</p>
              <p className="">Fighting Power - Great</p>
            </div>
            <div className="flex flex-wrap flex-col items-center px-3 mt-6 lg:mt-0">
              <div className="w-64">
                <img
                  alt="..."
                  src="/img/fish3.jpg"
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              <p className="text-xl font-medium pt-2"> * Expert Clan *</p>
              <p className="text-gray-500 py-1">Very Expert.</p>
              <p className="">Fighting Power - Phenomenal</p>
            </div>
            <div className="flex flex-wrap flex-col items-center px-3 mt-6 lg:mt-0">
              <div className="w-64">
                <img
                  alt="..."
                  src="/img/fish4.png"
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              <p className="text-xl font-medium pt-2"> *** Legend Clan ***</p>
              <p className="text-gray-500 py-2">Have this and be unbeatable.</p>
              <p className="">Fighting Power - Genius</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-x-0 border-t-0 border-b border-b-slate-600 py-12 mx-4 sm:mx-12 text-black dark:text-white "
        id="vision"
      >
        <h1 className="text-3xl pb-2 text-center font-medium font-serif">
          AQUA VISION
        </h1>

        <p className="font-hand text-xl sm:text-2xl">
          Look out Look out the siren is blaring <br />
          She drop me down, I can't stop staring!!
          <br /> Oh Oh Oh Oh Oh Oh Oh Oh Oh Oh Oh <br /> I'm burning like a
          fever <br />
          I'm a believver
        </p>
      </section>

      <section
        className="border-x-0 border-t-0 border-b border-b-slate-600 py-12 mx-4 sm:mx-12 text-black dark:text-white "
        id="team"
      >
        <h1 className="text-3xl font-medium pb-2 text-center font-serif">
          MEET THE TEAMS
        </h1>
        <div className="flex lg:flex-row flex-col justify-center mt-3 font-hand">
          <div className="flex flex-wrap flex-col items-center px-3 mt-4 lg:mt-0">
            <div className="w-64">
              <img
                alt="..."
                src="/img/huslte.jpg"
                className="object-cover w-full h-full rounded-md"
              />
            </div>

            <p className="text-2xl font-medium pt-2"> Hustle Danie</p>
            <p className="text-gray-900 dark:text-gray-400 py-1">
              Aqua Clan 001
            </p>
          </div>
          <div className="flex flex-wrap flex-col items-center px-3 mt-4 lg:mt-0">
            <div className="w-64">
              <img
                alt="..."
                src="/img/lanre.jpg"
                className="object-cover w-full h-full rounded-md"
              />
            </div>

            <p className="text-2xl font-medium pt-2"> Code Larry</p>
            <p className="text-gray-900 dark:text-gray-400 py-1">Developer</p>
          </div>
          <div className="flex flex-wrap flex-col items-center px-3 mt-4 lg:mt-0">
            <div className="w-64">
              <img
                alt="..."
                src="/img/artist2.jpg"
                className="object-cover w-full h-full rounded-md"
              />
            </div>

            <p className="text-2xl font-medium pt-2"> XYZ</p>
            <p className="text-gray-900 dark:text-gray-400 py-2">Artist</p>
          </div>
        </div>
      </section>

      <section
        className=" py-12 mx-4 sm:mx-12 text-black dark:text-white font-hand"
        id="faq"
      >
        <h1 className="text-3xl pb-2 font-medium text-center font-serif py-3">
          FAQ
        </h1>

        <Faq data={data} styles={faqStyle} config={config} />
      </section>

      <footer className="relative pt-8 pb-6 text-gray-400">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left"></div>
          {/* <hr className="my-6" /> */}
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="" className=" hover:text-blueGray-800">
                  Aqua Clan
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
