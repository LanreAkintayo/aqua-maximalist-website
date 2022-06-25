require("@nomiclabs/hardhat-waffle");

const {alchemyApiKey, etherscanApiKey, mnemonic} = require("./secrets.json")


module.exports = {
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: {mnemonic: mnemonic}
    }
  },
  solidity: "0.8.4",
  etherscan: {
    // npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
        rinkeby: etherscanApiKey,
        kovan: etherscanApiKey,
    },
},
};
