const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lock", function () {

  let lock, Lock, owner, otherAccount

  const testScore = {
    DegenScore: 0,
    CredScore: 0,
    NomisPolygonScore: 0,
    NomisEthereumScore: 0,
    GitcoinScore: 0,

    owner: "0xDD6BFbe9EC414FFABBcc80BB88378c0684e2Ad9c",
  }


  beforeEach(async () => {

    // Contracts are deployed using the first signer/account by default
    [owner, otherAccount] = await ethers.getSigners();

    Lock = await ethers.getContractFactory("Lock");
    lock = await Lock.deploy();

  })

  describe("Deployment", function () {


    it("Check Empty Maps", async function () {
      

      console.log(await lock.tokenIdToAddress, 'testAddress')
      console.log(await lock.mint(owner, testScore), 'testScore')
      console.log(await lock.tokenURI(0), 'tokenURI')

    });

    // it("Should set the right owner", async function () {
    //   const { lock, owner } = await loadFixture(deployOneYearLockFixture);

    //   expect(await lock.owner()).to.equal(owner.address);
    // });

    // it("Should receive and store the funds to lock", async function () {
    //   const { lock, lockedAmount } = await loadFixture(
    //     deployOneYearLockFixture
    //   );

    //   expect(await ethers.provider.getBalance(lock.target)).to.equal(
    //     lockedAmount
    //   );
    // });

    // it("Should fail if the unlockTime is not in the future", async function () {
    //   // We don't use the fixture here because we want a different deployment
    //   const latestTime = await time.latest();
    //   const Lock = await ethers.getContractFactory("Lock");
    //   await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
    //     "Unlock time should be in the future"
    //   );
    // });
  });

 
});
