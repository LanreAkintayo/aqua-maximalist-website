import ModalLayout from "./ModalLayout";
import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { formatEther, formatUnits } from "@ethersproject/units";
import { abi } from "public/contracts_info/AquaCollection.json";
import { LoadingSpinerComponent } from "./LoadingSpinnerComponent";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import MintSuccessModal from "./MintSuccessModal";

export default function MintModal({
  handleModal,
  mintNow,
  price,
  maxPerWallet,
  maxSupply,
  totalMinted,
  success,
  account,
  mintReceipt,
}) {
  const formattedPrice = price ? formatEther(price.toString()) : "0";
  const [counter, setCounter] = useState(1);
  const [totalPrice, setTotalPrice] = useState(formattedPrice);

  const { promiseInProgress } = usePromiseTracker();

  const getTotalPrice = (number) => {
    return Number(formatEther(price?.toString())) * number;
  };

  const todp = (number, dp) => {
    return Number(number).toFixed(dp);
  };

  const increment = () => {
    console.log("Incrementing.....");
    setCounter((prevCounter) => {
      if (prevCounter >= maxPerWallet) {
        setTotalPrice(getTotalPrice(maxPerWallet));
        return maxPerWallet;
      } else {
        prevCounter++;
        setTotalPrice(getTotalPrice(prevCounter));
      }

      return prevCounter;
    });
  };

  const decrement = () => {
    console.log("Decrementing.....");
    setCounter((prevCounter) => {
      if (prevCounter <= 1) {
        return 1;
      } else {
        prevCounter--;
        setTotalPrice(getTotalPrice(prevCounter));
        return prevCounter;
      }
    });
  };

  const handleMax = () => {
    setCounter(Number(maxPerWallet?.toString()));
    setTotalPrice(getTotalPrice(maxPerWallet));
  };

  return (
    <ModalLayout>
      {success ? (
        <MintSuccessModal
          handleModal={handleModal}
          account={account}
          mintReceipt={mintReceipt}
        />
      ) : (
        <div className="p-5 font-hand text-xl dark:bg-black bg-white">
          <div className="flex justify-between items-center rounded-t">
            <button
              onClick={handleModal}
              type="button"
              className="text-gray-400 bg-transparent dark:hover:bg-gray-600 dark:hover:text-white hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="small-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="sm:text-5xl text-3xl text-center">Mint your Clan</div>
          <div className="my-5 w-full flex flex-col items-center ">
            <img
              alt="..."
              src="/img/question_mark_5.jpg"
              className="object-cover rounded-md sm:w-48 sm:h-48 w-40 h-40 "
            />
          </div>
          <div className="flex py-2 border-x-0 border-t-0 border-b items-center justify-between">
            <p>Remaining:</p>
            <p>
              {totalMinted} / {maxSupply}
            </p>
          </div>
          <div className="flex py-2 border-x-0 border-t-0 border-b  items-center justify-between">
            <p>Price:</p>
            <p>{formatEther(price?.toString())} ETH</p>
          </div>
          <div className="flex border-x-0 border-t-0 border-b items-center justify-between">
            <p>Quantity</p>
            <div className="flex text-2xl">
              <button onClick={decrement}>-</button>
              <p className="border-y-0 border-x py-2 text-2xl px-3 mx-3">
                {counter}
              </p>
              <button onClick={increment}>+</button>
            </div>
            <div className="flex flex-col items-start">
              <p>{todp(totalPrice.toString(), 5)} ETH</p>
              <button
                onClick={handleMax}
                className="px-2 mb-2 mt-1 dark:bg-white bg-black dark:text-black text-white rounded-md"
              >
                Max
              </button>
            </div>
          </div>
          <div className="my-5 w-full flex flex-col items-center ">
            <button
              disabled={promiseInProgress}
              onClick={() => mintNow(counter)}
              className={`p-2 w-full dark:bg-white bg-black text-center dark:text-black text-white rounded-md font-medium text-2xl disabled:cursor-not-allowed disabled:opacity-50`}
            >
              <LoadingSpinerComponent
                buttonText="Mint Now"
                loadingMessage="Minting"
              />
            </button>
          </div>
        </div>
      )}
    </ModalLayout>
  );
}
