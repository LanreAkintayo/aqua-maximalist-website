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
import Sidebar from "components/Sidebar.js";
import { useRouter } from "next/router";

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

const config = {
  animate: true,
  arrowIcon: "+",
  // tabFocus: true
};

export default function Layout({ children, pageContent }) {
  const [navOpen, setNavOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [faqStyle, setFaqStyle] = useState({});
  const { pathname } = useRouter();

  const handleNavbar = () => {
    setNavOpen((prev) => {
      setNavOpen(!prev);
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        console.log("Running");
        setClose(true);
      } else {
        setClose(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

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
          className="w-10 h-10 dark:text-gray-500 text-black "
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
        <div className="relative w-full h-screen">
          <div
            className={`absolute w-full h-full bg-gradient-to-r ${
              navOpen
                ? "bg-gradient-to-r dark:from-gray-300 dark:to-gray-400 from-gray-600 to-gray-700 "
                : " dark:from-black from-gray-300 to-gray-400 dark:to-gray-700"
            } `}
          >
            
            <div className="absolute top-0 left-0 w-full h-screen">
              <img
                alt="..."
                src="/img/background2.jpg"
                className="object-cover w-full h-full opacity-1 mix-blend-overlay"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen">
            <IndexNavbar
              handleNavbar={handleNavbar}
              renderThemeChanger={renderThemeChanger}
            />
            </div>
          </div>

          {pageContent}

          {/* <div className="sm:px-3  absolute w-full inset-y-32 lg:inset-y-48 dark:text-white text-black  ">
            <div className="flex flex-col items-center">
              <div className="font-serif text-base text-center sm:text-2xl font-medium px-2">
                A collection of 10,000 unique clans living on the Ethereum
                blockchain.
              </div>
              <h1 className="sm:text-7xl text-5xl mt-20 font-bold font-heading">
                AQUA CLUB
              </h1>
              <p className="text-base sm:text-xl text-center font-sans font-medium mt-2 px-2 ">
                Are you a whale, a shark, a dolphin, a crab or a shrimp?
              </p>
              <button className="p-2 px-3 font-hand text-xl sm:text-3xl dark:text-black text-white bg-black dark:bg-white mt-3 sm:mt-6 font-medium rounded-full">
                View on Opensea
              </button>
            </div>
          </div> */}

          <Sidebar
            handleNavbar={handleNavbar}
            navOpen={navOpen}
            close={close}
          />
        </div>
      </section>

      {children}

      {pathname == "/" && (
        <Questions data={data} styles={faqStyle} config={config} />
      )}

      <Footer />
    </div>
  );
}
