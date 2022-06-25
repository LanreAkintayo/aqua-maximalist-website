const hre = require("hardhat");
const { BASE_URL } = require("../config");

async function main() {
  const signers = await ethers.getSigners();

  console.log(signers[0].address);
  console.log(signers[1].address);
  const AquaCollection = await hre.ethers.getContractFactory("AquaCollection");
  const aquaCollection = await AquaCollection.deploy(
    "Aqua Clan Collection",
    "AQUA CLAN",
   BASE_URL,
    {gasLimit: 10000000}
  );

  const deployedCollection = await aquaCollection.deployed();

  console.log("Aqua Collection deployed to:", aquaCollection.address);

  // await deployedCollection.mint(signers[0].address, 12, { value: (0.003 * 10 ** 18).toString(), gasLimit:"1000000" });

  console.log(
    `Deploy contract at npx hardhat verify --network testnet "Aqua Clan Collection" "AQUA CLAN" ${BASE_URL}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// "npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1""
// "npx hardhat verify --network testnet --constructor-args scripts/args.js 0x3786e694D4c6550b4cb389eA3Abf46e2859152c7"
// npx hardhat run --network testnet scripts/deploy_collection.js
// npx hardhat run --network rinkeby scripts/deploy_collection.js
/*

{
 "name": "Aqua Clan #1",
 "description": "Aqua Clan 1",
 "image": "ipfs://QmYLKHp7Tfft1RvGvT58ZqDzUsvCPZdeAGp9y3brhriKyS/aqua1.jpg",
 "attributes": []
}

*/