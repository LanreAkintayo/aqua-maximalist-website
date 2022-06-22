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
import Layout from "components/Layout.js";

export default function Index() {
  const PageContent = () => {
    return (
      <div className="sm:px-3  absolute w-full inset-y-32 lg:inset-y-48 dark:text-white text-black  ">
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
      </div>
    );
  };
  return (
    <Layout
      pageContent={<PageContent />}
    >
      <About />

      <Rarity />

      <Vision />

      <Team />

      {/* <Questions data={data} styles={faqStyle} config={config} /> */}
    </Layout>
  );
}
