require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "goerli",
  // allowUnlimitedContractSize: true,
  settings: {
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
        details: { yul: false }
      },
    },
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/4UmtUzP8lxDs0py28-rdGB7LvyVk9lV7`,
      accounts: ['9ebaa6e5aeae97378022dea3c75212a85cc5f98d7e031396165ef79f543b2bff'],
      // gasMultiplier: 1,
      // gas: 50000000,
      // gasPrice: 250000000000,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/9KJSOnqmLZ11g9l-O0BxrfYEALnGZ0bG`,
      accounts: ['9ebaa6e5aeae97378022dea3c75212a85cc5f98d7e031396165ef79f543b2bff'],
      gas: 50000000,
      gasPrice: 250000000000,
    },
    polygon: {
      url: "https://polygon-rpc.com",
      // chainId: 137,
      gas: 50000000,
      gasPrice: 250000000000,
      accounts: ['9ebaa6e5aeae97378022dea3c75212a85cc5f98d7e031396165ef79f543b2bff'],
    },
    hardhat: {
      blockGasLimit: 100000000
    }
  }
};
