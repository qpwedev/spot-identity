const sender = Ethers.send("eth_requestAccounts", [])[0];

const data = fetch(`https://tonft.app/get-scores?recipient=${sender}`);

const dataParsed = JSON.parse(data.body);

const priceFeedAddress = "0x1413D5F91bdf427d6d793dc4E9a65e59A40531bd";

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
          Wallet data <span>{dataParsed.scores.wallet_data.toFixed(2)}</span>
        </div>
        <div>
          Social score <span>{dataParsed.scores.social_score.toFixed(2)}</span>
        </div>
        <div>
          SPOT score <span>{dataParsed.scores.spot_score.toFixed(2)}</span>
        </div>
        <div>
          Gitcoin score{" "}
          <span>{dataParsed.scores.gitcoin_score.toFixed(2)}</span>
        </div>
      </div>
      <div className="finalScore">
        <img src="https://ipfs.near.social/ipfs/bafkreigbqojrrt6s3izi45xes3gopt2ko7gjyiaynt4re2nvo5aa35uhi4" />
        <div>
          <span>score</span>
          <span className="green">
            {dataParsed.scores.spot_score.toFixed(0)} / 100
          </span>
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

        contract.mint(sender, {
          GitcoinScore: dataParsed.scores.gitcoin_score.toFixed(2) * 100,
          WalletData: dataParsed.scores.wallet_data.toFixed(2) * 100,
          SpotScore: dataParsed.scores.spot_score.toFixed(0),
          SocialScore: dataParsed.scores.gitcoin_score.toFixed(2) * 100,
          owner: sender,
        });
      }}
    >
      Mint Score
    </button>
  </Wrapper>
);
