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
  });
  
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
  
  const WalletInfo = styled.div`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 70%;
      
      background-color: #2C2C2C;
      border: 3px white solid;
      border-radius: 20px;
  
  
      div {
          width: 25%;
          // padding: 0 2.5%;
          color: white;
      }
  `;
  
  const Scores = styled.div`
      display: flex;
      justify-content: center;
      width: 100%;
  
      
      .box div span {
          color: #BDFF00;
      }
  
      .title {
          color: white;
          width: 20%
      }
  `;
  
  const ScoresContainer = styled.div`
      display: flex;
      align-items: center;
  `;
  
  return (
    <Wrapper>
      <div className="Logo">
        <img src="https://ipfs.near.social/ipfs/bafkreidydvsw5i7fy4emzbtmmaw3zuyjktu7nnuyimftju7tlmt6hcj6um" />
      </div>
      <h1>Scores Passport: your web2 and web3 activity</h1>
      <Scores>
        <ScoresContainer>
          <div className="title">wallets</div>
          <WalletInfo className="box">
            <div>
              NFTs <span>{state.wallet.nfts}</span>
            </div>
            <div>
              Tokens <span>{state.wallet.tokens}</span>
            </div>
            <div>
              Wallet age <span>{state.wallet.walletAge}</span>
            </div>
            <div>
              Guilds <span>{state.wallet.guilds}</span>
            </div>
            <div>
              Transactions <span>{state.wallet.transactions}</span>
            </div>
            <div>
              POAPs <span>{state.wallet.poaps}</span>
            </div>
            <div>
              Domains <span>{state.wallet.domains}</span>
            </div>
          </WalletInfo>
        </ScoresContainer>
      </Scores>
    </Wrapper>
  );
  