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
import WalletModal from "@components/WalletModal";
import AmountMinted from "@components/AmountMinted";
import NftInfo from "@components/NftInfo";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Contract } from "@ethersproject/contracts";
import { abi } from "public/contracts_info/AquaCollection.json";
import { formatEther, formatUnits, parseUnits } from "@ethersproject/units";
import useSWR from "swr";
import { equivalentMintPrice, todp } from "@utils/helper";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import MintSuccessModal from "@components/MintSuccessModal";
import FetchModal from "@components/FetchModal";

const OWNER = "0xDD4c43c13e6F1b2374Ed9AAabBA7D56Bb4a68A03";

const connectorsByName = {
  Injected: injected,
  WalletConnect: walletconnect,
};

const fetchTotalMinted =
  (library, abi) =>
  async (...args) => {
    console.log("Fetching total number of nfts minted");
    if (!library) return;

    const [contractAddress, method, account] = args;

    const contract = new Contract(contractAddress, abi, library);

    library.getCode(contractAddress).then((result) => {
      //check whether it is a contract
      if (result === "0x") return;
    });

    const totalMinted = await contract.totalSupply();

    return totalMinted.toString();
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

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [fetchModalOpen, setFetchModalOpen] = useState(false);
  const [currentWallet, setCurrentWallet] = useState("");
  const [price, setPrice] = useState("");
  const [maxPerWallet, setMaxPerWallet] = useState("");
  const [contract, setContract] = useState(null);
  const [remainingToMint, setRemainingToMint] = useState();
  const [maxSupply, setMaxSupply] = useState();
  const [totalMinted, setTotalMinted] = useState();
  const contractAddress = "0xD2911624e6Cfca77ef61cc3dDdaa44723c344812";
  const [success, setSuccess] = useState(null);
  const [mintReceipt, setMintReceipt] = useState(null);
  const [mintError, setMintError] = useState(null);
  const [hidden, setHidden] = useState(true);

  const { data, mutate } = useSWR(
    [contractAddress, "totalSupply", account],
    fetchTotalMinted(library, abi)
  );

  useEffect(() => {
    if (!(active && account && library)) return;

    const contract = new Contract(contractAddress, abi, library);
    if (contract) {
      setContract(contract);
    }

    library.getCode(contractAddress).then((result) => {
      //check whether it is a contract
      if (result === "0x") return;

      contract
        .maxPerWallet()
        .then((result) => {
          // debugger
          // console.log("Max per wallet: ", result.toString());
          setMaxPerWallet(result);
        })
        .catch("error", console.error);

      contract
        .cost()
        .then((result) => {
          // debugger
          // console.log("Price per NFT: ", formatEther(result.toString()));
          setPrice(result);
        })
        .catch("error", console.error);

      contract
        .maxSupply()
        .then((result) => {
          // debugger
          // console.log("Max Supply: ", result.toString());
          setMaxSupply(result);
        })
        .catch("error", console.error);
    });

    //called only when changed to active
  }, [active]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already

  const connectWallet = (_connector) => {
    console.log(_connector);

    setActivatingConnector(connectorsByName[_connector]);
    activate(connectorsByName[_connector]);
    setCurrentWallet(_connector);
  };
  const disconnectWallet = (_connector) => {
    setActivatingConnector(connectorsByName[_connector]);
    deactivate(connectorsByName[_connector]);
    setCurrentWallet("");
  };
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const [mintModalOpen, setMintModalOpen] = useState(false);

  const handleModal = () => {
    setMintModalOpen(false);
    setSuccess(null);
    setMintReceipt(null);
    setMintError(null);
    setFetchModalOpen(false);
  };

  const handleWalletModal = () => {
    setWalletModalOpen((prev) => !prev);
  };

  const handleMint = () => {
    if (!active || !price || !data ) {
      setFetchModalOpen(true);
    } else {
      setMintModalOpen(true);
    }
  };

  const mintNow = async (amountToMint) => {
    console.log("I am here");
    if (!(active && account && library)) return;
    const contract = new Contract(contractAddress, abi, library);

    const signer = contract.provider.getSigner(account);
    const signerAddress = signer._address;

    console.log(signerAddress);

    library.getCode(contractAddress).then((result) => {
      //check whether it is a contract
      if (result === "0x") return;
      //  mint(address _to, uint256 _mintAmount) public payable
    });

    const value =
      signerAddress == OWNER ? 0 : equivalentMintPrice(amountToMint, price);
    const valueInWei = parseUnits(value.toString(), "ether").toString();

    try {
      const mintTx = await trackPromise(
        contract
          .connect(signer)
          .mint(account, amountToMint, { value: valueInWei })
      );

      const mintReceipt = await trackPromise(mintTx.wait(1));

      setMintReceipt(mintReceipt);

      if (mintReceipt?.transactionHash) {
        setSuccess(true);
      }
    } catch (error) {
      setMintError(error);
      setSuccess(false);
    }
  };

  useEffect(() => {
    if(price && data && maxSupply){
      setFetchModalOpen(false)
      setMintModalOpen(true)
    }
  }, [price, data, maxSupply])

  // console.log("Mint: Price", price);
  // console.log("Mint: Max per wallet", maxPerWallet);
  // console.log("The total minted is: ", data)

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

                <AmountMinted contractAddress="0xD2911624e6Cfca77ef61cc3dDdaa44723c344812" />

                <button
                  onClick={handleMint}
                  className="p-2 px-3 mt-5 text-2xl dark:text-black text-white font-medium rounded-sm dark:bg-white bg-black"
                >
                  Mint Now
                </button>
                <NftInfo contractAddress="0xD2911624e6Cfca77ef61cc3dDdaa44723c344812" />
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
      handleWalletModal={handleWalletModal}
    >
      <div></div>

      <div className="lg:hidden flex my-5 flex-col items-center">
        <div className="flex flex-col items-start justify-center h-full">
          <img
            alt="..."
            src="/img/question_mark_5.jpg"
            className="object-cover w-96 h-96  rounded-md"
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

      <div className="flex justify-center text-center sm:block sm:p-0 mt-2">
        {!!mintModalOpen && price && data && maxSupply && (
          <MintModal
            mintModalOpen={mintModalOpen}
            handleModal={handleModal}
            mintNow={mintNow}
            price={price}
            maxPerWallet={Number(maxPerWallet?.toString())}
            maxSupply={maxSupply.toString()}
            totalMinted={data}
            success={success}
            account={account}
            mintReceipt={mintReceipt}
            mintError={mintError}
          />
        )}

        {walletModalOpen && (
          <WalletModal
            handleWalletModal={handleWalletModal}
            connectWallet={connectWallet}
            disconnectWallet={disconnectWallet}
            active={active}
            currentWallet={currentWallet}
          />
        )}

        {fetchModalOpen && (
          <FetchModal
            handleModal={handleModal}
            active={active}
          />
        )}
      </div>
    </Layout>
  );
}
