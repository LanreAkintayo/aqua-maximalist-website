const { ethers } = require("hardhat");

const PRICE = ethers.utils.parseEther("0.00025");

function valueFor(value) {
  return PRICE.mul(value);
}

async function mintNft() {
  const [account1, account2] = await ethers.getSigners();
  const aquaCollection = await ethers.getContractAt("AquaCollection", "0xD2911624e6Cfca77ef61cc3dDdaa44723c344812");

  console.log("Minting NFT...");
  const mintTx = await aquaCollection
    .connect(account2)
  .mint(account2.address, 2, { value: valueFor(2) });
  
 await mintTx.wait(1);

 const tokenIds = await aquaCollection.walletOfOwner(account2.address);
 tokenIds
  console.log(
    "You have successfully minted some tokens and your tokens Ids are below: "
  );
  console.log(tokenIds);
  
}

mintNft()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
