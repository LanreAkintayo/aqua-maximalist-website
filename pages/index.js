/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Faq from "react-faq-component";
import { useState } from "react";

const data = {
  title: "",
  rows: [
    {
      title: "How many Aqua Clan is available for purchase?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "When will the collection drop?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
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

  const handleNavbar = () => {
    setNavOpen((prev) => {
      console.log(prev);
      setNavOpen(!prev);
    });
  };

  return (
    <div className={`bg-black ${navOpen && "fixed"} `}>
      <section className={`w-full h-screen ${navOpen && "overscroll-none"}`}>
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray-700 ">
            <IndexNavbar handleNavbar={handleNavbar} />

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
              <button className="p-2 px-3 font-hand text-3xl text-black border-2 bg-white mt-6 font-medium rounded-full">
                View on Opensea
              </button>
            </div>
          </div>

          <aside
            className={`fixed top-0 left-0 ${!navOpen && "hidden"} bg-black`}
            aria-label="Sidebar"
          >
            <div className="overflow-y-auto w-72  bg-black py-4 h-screen px-3 text-white rounded text-center font-hand  dark:bg-gray-800">
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

          {/* <div className="w-96 h-96 border rounded-lg border-white top-40 left-1/2 absolute text-white bg-gradient-to-tl from-black to-gray-600">
            <img
              alt="..."
              src="/img/meta.jpg"
              className="object-cover rounded-md absolute w-full h-full mix-blend-overlay"
            />
          </div> */}
        </div>
      </section>
      <section
        className=" py-12 border-x-0 border-t-0 border-b border-b-slate-600 mx-4 sm:mx-12 "
        id="about"
      >
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-8/12">
            <h1 className="text-3xl text-white font-medium font-sans">
              WELCOME TO THE THE AQUA CLUB
            </h1>

            <div className="flex">
              <p className="lg:w-8/12 text-gray-200 py-2 text-lg font-hand">
                When you buy an AQUA clan, you will never be poor again and if
                you later turn out poor, he no concern us.
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
        className="border-x-0 border-t-0 border-b border-b-slate-600 py-12 mx-4 sm:mx-12 text-white "
        id="rarity"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-white font-medium font-serif">Rarity</h1>
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
        className="border-x-0 border-t-0 border-b border-b-slate-600 py-12 mx-4 sm:mx-12 text-white"
        id="vision"
      >
        <h1 className="text-3xl text-white font-medium font-serif">
          AQUA VISION
        </h1>

        <p className="font-hand text-xl sm:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
          deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
          velit hic maxime doloremque
        </p>
      </section>

      <section
        className="border-x-0 border-t-0 border-b border-b-slate-600 py-12 mx-4 sm:mx-12 text-white"
        id="team"
      >
        <h1 className="text-3xl text-white font-medium font-serif">
          MEET THE TEAMS
        </h1>
        <div className="flex lg:flex-row flex-col justify-start mt-3 font-hand">
          <div className="flex flex-wrap flex-col items-center px-3 mt-4 lg:mt-0">
            <div className="w-64">
              <img
                alt="..."
                src="/img/huslte.jpg"
                className="object-cover w-full h-full rounded-md"
              />
            </div>

            <p className="text-2xl font-medium pt-2"> Hustle Danie</p>
            <p className="text-gray-500 py-1">Aqua Clan 001</p>
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
            <p className="text-gray-500 py-1">Developer</p>
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
            <p className="text-gray-500 py-2">Artist</p>
          </div>
        </div>
      </section>

      <section className=" py-12 mx-4 sm:mx-12 text-white font-hand" id="faq">
        <h1 className="text-3xl text-white font-medium font-serif py-3">FAQ</h1>

        <Faq data={data} styles={styles} config={config} />
      </section>

      <footer className="relative pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          {/* <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg> */}
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left"></div>
          {/* <hr className="my-6" /> */}
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Aqua Clan
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <Footer /> */}

      {/* <div className="ml-3 absolute top-52 text-white font-bold text-9xl ">
            AQUA CLUB
          </div> */}

      {/* <header
        className="relative bg-fixed bg-center bg-cover bg-no-repeat"
        style={"backgroundImage:linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9)), url(img/fish.jpg)"}
      ></header> */}

      {/* <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        CSS Components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Notus NextJS comes with a huge number of Fully Coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        JavaScript Components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We also feature many dynamic components for React,
                        NextJS, Vue and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                      <p className="mb-4 text-blueGray-500">
                        This extension also comes with 3 sample pages. They are
                        fully coded so you can start working instantly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Documentation
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Notus NextJS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                CSS Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Buttons
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Inputs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Labels
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pagination
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Progressbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Typography
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/component-btn.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/component-profile-card.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/component-info-card.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/component-info-2.png"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/component-menu.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src="/img/component-btn-pink.png"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Svelte
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        ReactJS
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        NextJS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Angular
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Vue.js
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Javascript Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                In order to create a great User Experience some components
                require JavaScript. In this way you can manipulate the elements
                on the page and give more options to your users.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Alerts
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Dropdowns
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Modals
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Popovers
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tabs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tooltips
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View all{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/documentation.png"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Notus NextJS is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p>
          </div>
        </div>
      </section> */}

      {/* <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/profile.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/landing.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since{" "}
                <a
                  href="https://tailwindcss.com/?ref=creative"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you love this Starter Kit?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version for your next project. Build a
                new web app or give an old project a new look!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Help With a Star</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <Footer /> */}
    </div>
  );
}
/*

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Frequently Asked Questions In Tailwindcss and JavaScript</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
      body{
      font-family: 'Lato', sans-serif;
      margin: 0px;
          background: #f2f2f2;
      }
      .active{
      color: #60a3bc;
      }
    </style>
  </head>
  <body>
    <h1 class="md:text-7xl text-2xl py-4 text-center">
      Frequently Asked Questions
    </h1>
    <div class="md:container w-fit md:mx-auto mx-3 ">
      <div class="content dd bg-white" data-no="0">
        <div class="questions  cursor-pointer flex items-center bg-cyan-500 p-3 text-white mb-1 active" data-no="0">
          <div class="heading w-11/12">
            <h4 class="text-2xl">What is HTML</h4>
          </div>
          <div class="icons w-1/12 text-right">
            <i class="fa fa-minus-square text-2xl"></i>
          </div>
        </div>
        <p class="openSlide text-1xl px-3 pb-3" id="openSlide0">The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
      </div>
      <div class="content d bg-white" data-no="1">
        <div class="questions  cursor-pointer flex items-center bg-cyan-500 p-3 text-white mb-1" data-no="1">
          <div class="heading w-11/12">
            <h4 class="text-2xl">What is CSS</h4>
          </div>
          <div class="icons w-1/12 text-right">
            <i class="fa fa-plus-square text-2xl"></i>
          </div>
        </div>
        <p class="openSlide text-1xl px-3 pb-3" id="openSlide1">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
      </div>
      <div class="content bg-white" data-no="2">
        <div class="questions  cursor-pointer flex items-center bg-cyan-500 p-3 text-white mb-1" data-no="2">
          <div class="heading w-11/12">
            <h4 class="text-2xl">What is javascript</h4>
          </div>
          <div class="icons w-1/12 text-right">
            <i class="fa fa-plus-square text-2xl"></i>
          </div>
        </div>
        <p class="openSlide text-1xl px-3 pb-3" id="openSlide2">JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
      </div>
      <div class="content bg-white" data-no="3">
        <div class="questions  cursor-pointer flex items-center bg-cyan-500 p-3 text-white mb-1" data-no="3">
          <div class="heading w-11/12">
            <h4 class="text-2xl">What is jQuery</h4>
          </div>
          <div class="icons w-1/12 text-right">
            <i class="fa fa-plus-square text-2xl"></i>
          </div>
        </div>
        <p class="openSlide text-1xl px-3 pb-3" id="openSlide3">jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites.</p>
      </div>
    </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="text/javascript">
      (function () {
        let sliderOpen = $('.openSlide');
        sliderOpen.hide();
        sliderOpen.eq(0).show();
        $('.questions').on('click', function () {
          let dataNo = $(this).attr('data-no');
          let xy = $(this);
          $('.content').each(function() {
            let eachdatano = $(this).attr('data-no');
            if (dataNo == eachdatano) {
              xy.next().slideToggle();
              xy.addClass('active');
              xy.find('i').toggleClass("fa-plus-square fa-minus-square");
            } else if (dataNo != eachdatano) {
              $(this).find('p#openSlide'+eachdatano).slideUp(); 
              $(this).find('.questions').removeClass("active");; 
              $(this).find('i').removeClass("fa-minus-square");; 
              $(this).find('i').addClass("fa-plus-square");; 
            }
          })
        })
      })();
    </script>
  </body>
</html>

*/
