const hre = require("hardhat");
const { BASE_URL } = require("../config");
const { verify } = require("../utils/verify")

async function main() {
  const arguments = [
    "Aqua Clan Collection",
    "AQUA CLAN",
    "ipfs://QmZtWfmQ3zdPAWZtoSm6NtQta8jGVnUoYbFjbwfhfg3J1E/",
  ];

  const AquaCollection = await hre.ethers.getContractFactory("AquaCollection");
  const aquaCollection = await AquaCollection.deploy(
    "Aqua Clan Collection",
    "AQUA CLAN",
    BASE_URL
  );

 console.log("Aqua Collection deployed to:", aquaCollection.address);
 
 await aquaCollection.deployed()

  console.log("Contract deployed successfully\n");
  await verify(aquaCollection.address, arguments);

  console.log("Contract verification sucessfully");
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
