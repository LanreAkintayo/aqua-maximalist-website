import { useState, useEffect } from "react";
import MintModal from "@components/MintModal";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";
import { useEagerConnect, useInactiveListener } from "../hooks";
import Layout from "@components/Layout";
import { ethers } from "ethers";
import { injected, walletconnect } from "../connectors";

const connectorsByName = {
  Injected: injected,
  WalletConnect: walletconnect,
};

function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider);
  // library.pollingInterval = 12000
  return library;
}

export default function Mint() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MintClan />
    </Web3ReactProvider>
  );
}

function MintClan() {
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = useWeb3React();

  console.log(`Chain Id: ${chainId}`);
  console.log(`error: ${error}`);
  console.log(library);
  console.log(`Account: ${account}`);
  console.log(connector);

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const [mintModalOpen, setMintModalOpen] = useState(false);

  const handleModal = () => {
    setMintModalOpen(false);
  };

  return (
    <Layout
      pageContent={
        <div className="sm:px-3 px-4  absolute w-full inset-y-32  dark:text-white text-black ">
          <div className="flex lg:flex-row flex-col sm:items-center">
            <div className="lg:w-6/12 w-full h-full flex flex-col items-center justify-center">
              <div className="font-hand">
                <h1 className="sm:text-8xl text-4xl font-bold sm:ml-0">
                  Aqua Clans{" "}
                  <span className="sm:block sm:text-7xl">NFT Collections</span>
                </h1>
                {/* <h1 className="text-7xl  font-bold sm:mt-5 ">NFT Collections</h1> */}

                <p className="mt-5 font-hand lg:text-3xl text-2xl">
                  300 out of 10,000 minted
                </p>
                <button
                  onClick={() => setMintModalOpen(true)}
                  className="p-2 px-3 mt-5 text-2xl text-black font-medium rounded-sm bg-white"
                >
                  Mint Now
                </button>
                <div className="mt-5 font-hand sm:text-2xl text-xl">
                  <p>Max per wallet is 10</p>
                  <p>Price per NFT is 0.5 ETH</p>
                </div>
              </div>
            </div>

            <div className="lg:w-6/12 lg:block hidden">
              <div className="flex flex-col items-start justify-center h-full">
                <img
                  alt="..."
                  src="/img/question_mark_5.jpg"
                  className="object-cover w-96 h-96  rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      }
    >
      <button
        onClick={() => {
          setActivatingConnector("injected");
          activate(connectorsByName["Injected"]);
        }}
        className="p-2 bg-yellow-300 text-white"
      >
        Metamask
      </button>
      <button
        onClick={() => {
          setActivatingConnector("walletconnect");
          activate(connectorsByName["WalletConnect"]);
        }}
        className="ml-4 p-2 bg-green-300 text-white"
      >
        Wallet Connect
      </button>
      <div className="lg:hidden flex flex-col items-center">
        <div className="flex flex-col items-start justify-center h-full">
          <img
            alt="..."
            src="/img/question_mark_5.jpg"
            className="object-cover w-72 h-auto  rounded-md"
          />
        </div>
      </div>
      <section className=" py-5 mx-4 sm:mx-5 ">
        <div className="dark:bg-zinc-900 bg-zinc-400 p-14 rounded-md flex lg:flex-row flex-col justify-around font-hand shadow-lg">
          <div className="flex w-full items-center sm:justify-around justify-between text-center">
            <p className="text-4xl">
              10,000 <br />
              <span className="text-sm sm:text-lg">Total Items</span>
            </p>
            <p className="text-4xl">
              500 <br />
              <span className="text-sm sm:text-lg">Total Owners</span>
            </p>
          </div>

          <div className="flex w-full items-center sm:justify-around justify-between text-center mt-3">
            <p className="text-4xl">
              0.58 <br />
              <span className="text-sm sm:text-lg">Floor price (ETH)</span>
            </p>
            <p className="text-4xl">
              24 <br />
              <span className="text-sm sm:text-lg">Volume traded (ETH)</span>
            </p>
          </div>
        </div>
      </section>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap ">
          <div className="flex">
            <div className="mx-6 w-48 h-auto">
              {" "}
              <img
                alt="..."
                src="/img/aqua6.jpg"
                className="object-cover rounded-md w-full"
              />
            </div>
            <div className="mx-6 text-4xl w-48 h-auto">
              {" "}
              <img
                alt="..."
                src="/img/aqua6.jpg"
                className="object-cover rounded-md w-full "
              />
            </div>
            <div className="mx-6 text-4xl w-48 h-auto">
              {" "}
              <img
                alt="..."
                src="/img/aqua7.jpg"
                className="object-cover rounded-md w-full "
              />
            </div>
            <div className="mx-6 text-4xl w-48 h-auto">
              {" "}
              <img
                alt="..."
                src="/img/aqua1.jpg"
                className="object-cover rounded-md w-full "
              />
            </div>

            <div className="mx-6 text-4xl w-48 h-auto">
              {" "}
              <img
                alt="..."
                src="/img/aqua6.jpg"
                className="object-cover rounded-md w-full "
              />
            </div>
          </div>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          <div className="flex">
            <div className="mx-6 text-4xl w-48 h-auto">
              <img
                alt="..."
                src="/img/aqua11.jpg"
                className="object-cover rounded-md w-full "
              />
            </div>
            <div className="mx-6 text-4xl w-48 h-auto">
              {" "}
              <img
                alt="..."
                src="/img/aqua3.jpg"
                className="object-cover rounded-md w-full "
              />
            </div>

            <div className="mx-6 text-4xl w-48 h-auto">
              {" "}
              <img
                alt="..."
                src="/img/aqua6.jpg"
                className="object-cover rounded-md w-full "
              />
            </div>
            <div className="mx-6 text-4xl w-48 h-auto">
              {" "}
              <img
                alt="..."
                src="/img/aqua9.jpg"
                className="object-cover rounded-md w-full "
              />
            </div>

            <div className="mx-6 text-4xl w-48 h-auto">
              {" "}
              <img
                alt="..."
                src="/img/aqua6.jpg"
                className="object-cover rounded-md w-full "
              />
            </div>
          </div>
        </div>
      </div>

      {mintModalOpen && (
        <div className="flex justify-center text-center sm:block sm:p-0 mt-2">
          <MintModal mintModalOpen={mintModalOpen} handleModal={handleModal} />
        </div>
      )}
    </Layout>
  );
}
