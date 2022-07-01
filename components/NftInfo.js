import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
import { formatEther, formatUnits } from "@ethersproject/units";
import { abi } from "public/contracts_info/AquaCollection.json";

export default function NftInfo({ contractAddress }) {
  const [maxPerWallet, setMaxPerWallet] = useState();
  const [price, setPrice] = useState();

  const { account, active, library } = useWeb3React();

  useEffect(() => {
    if (!(active && account && library)) return;

    const contract = new Contract(contractAddress, abi, library);
    library.getCode(contractAddress).then((result) => {
      //check whether it is a contract
      if (result === "0x") return;

     
      contract
        .maxPerWallet()
       .then((result) => {
         // debugger
        //  console.log("Max per wallet: ", result.toString())
          setMaxPerWallet(result);
        })
        .catch("error", console.error);

      contract
        .cost()
        .then((result) => {
         // debugger
        //  console.log("Price per NFT: ", formatEther(result.toString()))
          setPrice(result);
        })
        .catch("error", console.error);
    });
    //called only when changed to active
  }, [active]);

  return (
    <>
      {price && maxPerWallet && (
        <div className="mt-5 font-hand sm:text-2xl text-xl">
      <p>Max per wallet is {maxPerWallet.toString()}</p>
          <p>Price per NFT is {formatEther(price.toString())} ETH</p>
        </div>
      )}
    </>
  );
}
