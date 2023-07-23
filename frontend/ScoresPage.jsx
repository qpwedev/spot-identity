const sender = Ethers.send("eth_requestAccounts", [])[0];

State.init({
  wallet: {
    nfts: -1,
    tokens: -1,
    walletAge: -1,
    guilds: -1,
    transactions: -1,
    domains: -1,
    poaps: -1,
  },
  scores: {
    gitcoin: -1,
    nomisPolygon: -1,
    nomisEth: -1,
    degenScore: -1,
    credScore: -1,
  },
});

const data = fetch(`https://tonft.app/get-scores?recipient=${sender}`);

const dataParsed = JSON.parse(data.body);

console.log(dataParsed);

const Wrapper = styled.div`
  
     .Logo {
      width: 100%;
     }
  
    .btn {
      border-radius: none!important;
      background-color: #2C2C2C;
      border: none;
      color: #BDFF00;
      border-radius: 10px;
      border: 3px solid white;
      margin: 0 auto!important;
      padding: 13px 37px;
      font-weight: 900;
      font-size: 20px;
    }
  
    .btn:hover {
      background-color: #2C2C2C;
      border: 3px solid white;
    }
  
    h1 {
      color: white;
      text-align: center;
      font-size: 36px;
      width: 100%;
    }
  
    p {
      color: white;
      text-align: center;
      width: 100%;
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

const ScoreInfo = styled.div`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 60%;
      min-width: 400px;
      
      background-color: #2C2C2C;
      border: 3px white solid;
      border-radius: 20px;
  
      hr {
        width: 100%;
        border: 2px solid white;
        background-color: white;
        color: white;
      }
  
      .scoreContainer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
  
      .spScores span {
        color: #BDFF00;
      }
  
      .spScores {
        color: white;
      }
  
  
      .scoreContainer div {
          width: 25%;
          // padding: 0 2.5%;
          color: white;
      }

      
  `;

const Scores = styled.div`
      display: flex;
      // justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      
      .box .scoreContainer div span {
          color: #BDFF00;
      }
  
      .title {
          color: white;
          width: 50px;
      }
  `;

const ScoresContainer = styled.div`
      display: flex;
      align-items: center;
      width: 100%;
  
      button {
        background-color: #BDFF00!important;
        color: black!important;
      }
  `;

if (sender && dataParsed.scores) {
  return (
    <Wrapper>
      <div className="Logo">
        <img src="https://ipfs.near.social/ipfs/bafkreidydvsw5i7fy4emzbtmmaw3zuyjktu7nnuyimftju7tlmt6hcj6um" />
      </div>
      <h1>Scores Passport: your web2 and web3 activity</h1>
      <Scores>
        <ScoresContainer>
          <div className="title">scores</div>
          <ScoreInfo className="box">
            <h2 className="spScores">
              SP Scores{" "}
              <span>{dataParsed.scores.spot_score.toFixed(2)} / 1000 </span>
            </h2>
            <hr />
            <div className="scoreContainer">
              <div>
                Gitcoin{" "}
                <span>{dataParsed.scores.gitcoin_score.toFixed(2)}</span>
              </div>
              <div>
                Degen <span>{dataParsed.scores.degen_score.toFixed(2)}</span>
              </div>
              <div>
                Social Score{" "}
                <span>{dataParsed.scores.social_score.toFixed(2)}</span>
              </div>
              <div>
                Nomis Ethereum{" "}
                <span>{dataParsed.scores.nomis_score_eth.toFixed(2)}</span>
              </div>
            </div>
          </ScoreInfo>
          <button>Mint Score</button>
        </ScoresContainer>
        <ScoresContainer>
          <div className="title">wallets</div>
          <ScoreInfo className="box">
            <div className="scoreContainer">
              <div>
                POAPs{" "}
                <span>{dataParsed.data.profile_data.Wallet.poaps.length}</span>
              </div>
            </div>
          </ScoreInfo>
        </ScoresContainer>
        <ScoresContainer>
          <div className="title">socials</div>
          <ScoreInfo className="box">
            <div className="imageContainer">
              <div className="socialLogo">
                <img src="https://ipfs.near.social/ipfs/bafkreihhumscbreynqex4hhmeu6rmwb3dsgs64erwpomsotrmepk5hgvw4" />
              </div>
              <div className="scoreContainer">
                <div>
                  Followers <span>1</span>
                </div>
                <div>
                  Following <span>1</span>
                </div>
                <div>
                  Comments <span>1</span>
                </div>
                <div>
                  Posts <span>1</span>
                </div>
              </div>
              <hr />
              <div className="socialLogo">
                <img src="https://ipfs.near.social/ipfs/bafkreifplxkftq5lq7mljdj6rrolqiffpqg7cxdggjocmwpvz3gm5jq22y" />
              </div>
              <div className="scoreContainer">
                <div>
                  Followers{" "}
                  <span>{dataParsed.data.lens_data.totalFollowers}</span>
                </div>
                <div>
                  Following{" "}
                  <span>{dataParsed.data.lens_data.totalFollowing}</span>
                </div>
                <div>
                  Comments{" "}
                  <span>{dataParsed.data.lens_data.totalComments}</span>
                </div>
                <div>
                  Posts <span>{dataParsed.data.lens_data.totalPosts}</span>
                </div>
              </div>
            </div>
          </ScoreInfo>
        </ScoresContainer>
      </Scores>
    </Wrapper>
  );
}



