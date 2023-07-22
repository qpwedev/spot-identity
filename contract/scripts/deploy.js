// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Contract = await ethers.getContractFactory("Lock");
  const contract = await Contract.deploy();

  const testScore = {
    DegenScore: 920,
    CredScore: 700,
    NomisPolygonScore: 57,
    NomisEthereumScore: 80,
    GitcoinScore: 35,

    
    WalletNFTs: 31,
    WalletTokens: 10,
    WalletAge: 2,

    owner: "0xBB60ADaFB45ebbf4CE60799950a39f3dfb3AD2DC",
  }

  console.log('address', contract)

  // await contract.mint("0xBB60ADaFB45ebbf4CE60799950a39f3dfb3AD2DCC", testScore)
  // console.log( await contract.mint("0xBB60ADaFB45ebbf4CE60799950a39f3dfb3AD2DC", testScore));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
