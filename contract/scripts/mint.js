// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

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


  const Contract = await ethers.getContractFactory("Lock");
  const contract = await Contract.attach('0xa2b57461b7A95131484379c83B29Df8b60300e05');

//   console.log('address', contract)

//  console.log( await contract.mint("0xBB60ADaFB45ebbf4CE60799950a39f3dfb3AD2DC", testScore));
console.log(await contract.tokenURI(0))

  //.mint("0xBB60ADaFB45ebbf4CE60799950a39f3dfb3AD2DCC", testScore)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
