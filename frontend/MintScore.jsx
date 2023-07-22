const priceFeedAddress = "0xf25521b0B380eDE1b35A6A6DBBECf07602FeE901";

const priceFeedABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint160",
            name: "GitcoinScore",
            type: "uint160",
          },
          {
            internalType: "uint160",
            name: "WalletData",
            type: "uint160",
          },
          {
            internalType: "uint160",
            name: "SpotScore",
            type: "uint160",
          },
          {
            internalType: "uint160",
            name: "SocialScore",
            type: "uint160",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct Lock.ScoreParametrs",
        name: "score",
        type: "tuple",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const Wrapper = styled.div`
  
     .Logo {
      width: 100%;
     }

    h1 {
      color: #BDFF00;
    }

    button {
      color: black;
      background-color: #BDFF00;
      border: 3px white solid;
      padding: 10px 20px;
    }

    button:hover {
      color: white;
      background-color: black;
      border: 3px white solid;
    }
    
    background-color: black;
    align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  
    * {
      margin: 20px;
    }
  `;

const CardInfo = styled.div`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      
      background-color: #2C2C2C;
      border: 3px white solid;
      border-radius: 20px;

      .finalScore {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .finalScore span {
        color: white;
        font-size: 25px;
        width: 100%;
        display: flex;
      }

      .finalScore .green {
        color: #BDFF00;
        font-size: 40px;
      }

      .scoresPassport {
        width: 100%;
        color: white;
        font-size: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center
      }

      .scoresPassport div {
        width: 40%;
      }

      .scoresPassport span {
        color: #BDFF00;
      }
      
  `;

if (Ethers.provider()) {
  const priceFeedContract = new ethers.Contract(
    priceFeedAddress,
    priceFeedABI,
    Ethers.provider().getSigner()
  );

  console.log(priceFeedContract, "contract");
  // console.log(priceFeedContract.tokenURI(0), "contract");
}

return (
  <Wrapper>
    <div className="Logo">
      <img src="https://ipfs.near.social/ipfs/bafkreidydvsw5i7fy4emzbtmmaw3zuyjktu7nnuyimftju7tlmt6hcj6um" />
    </div>
    <h1>Scores Passport</h1>
    <CardInfo>
      <div>
        <img src="https://ipfs.near.social/ipfs/bafkreibr4vg3ovoq6cya47mfzpcm76kx4w3gcyr326aruicn6jdm75rmxy" />
      </div>
      <div className="scoresPassport">
        <div>
          Wallet data <span>10 / 50</span>
        </div>
        <div>
          Social score <span>10 / 50</span>
        </div>
        <div>
          SPOT score <span>10 / 50</span>
        </div>
        <div>
          Gitcoin score <span>10 / 50</span>
        </div>
      </div>
      <div className="finalScore">
        <img src="https://ipfs.near.social/ipfs/bafkreigbqojrrt6s3izi45xes3gopt2ko7gjyiaynt4re2nvo5aa35uhi4" />
        <div>
          <span>score</span>
          <span className="green">10 / 25</span>
        </div>
      </div>
    </CardInfo>
    <button
      onClick={() => {
        const contract = new ethers.Contract(
          priceFeedAddress,
          priceFeedABI,
          Ethers.provider().getSigner()
        );

        console.log(contract.tokenURI(0));

        contract.mint("0xDD6BFbe9EC414FFABBcc80BB88378c0684e2Ad9c", {
          GitcoinScore: 10,
          WalletData: 10,
          SpotScore: 10,
          SocialScore: 10,
          owner: "0xDD6BFbe9EC414FFABBcc80BB88378c0684e2Ad9c",
        });
      }}
    >
      Mint Score
    </button>
  </Wrapper>
);
