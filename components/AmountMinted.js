import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { formatEther, formatUnits } from "@ethersproject/units";
import useSWR from "swr";
import { abi } from "public/contracts_info/AquaCollection.json";

const fetcher =
  (library, abi) =>
  (...args) => {
    console.log("Inside fetcher")
    if (!library) return;

    const [contractAddress, method, account] = args;

    const contract = new Contract(contractAddress, abi, library);



  console.log("Check point 1")



    library.getCode(contractAddress).then((result) => {
      //check whether it is a contract
      if (result === "0x") return;
    });

   
   
    console.log("Check point 2")

    return contract[method](account);

    // contract
    //   .balanceOf(account)
    //   .then((balance) => {

    //    console.log(`This is the balance ${balance}`)

    //   })
    //   .catch("error", console.error);
  };

export default function AmountMinted({ contractAddress }) {
  const [totalSupply, setTotalSupply] = useState("12");



  const { account, active, library } = useWeb3React();

  

  console.log("Check point 3")


  const { data, mutate } = useSWR(
    [contractAddress, "balanceOf", account],
    fetcher(library, abi)
  );

  // console.log("This is the data: ", data);]]
  console.log("Check point 4")

  return (
    <>
      {data ? (
        <p className="mt-5 font-hand lg:text-3xl text-2xl ">
          {data.toString()} out of {totalSupply} minted
        </p>
      ) : (
        <div className="mt-5 font-hand animate-pulse w-32 h-8 lg:text-3xl rounded-md"></div>
      )}
    </>
  );
}
