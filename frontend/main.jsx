const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900');

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
  }

  h1 {
    color: white;
    text-align: center;
    font-size: 36px;
  }

  p {
    color: white;
    text-align: center;
  }

  background-color: black;
  align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  * {
    font-family: 'Londrina Solid', cursive;
  }

`;

const Images = styled.div`
    img {
        height: 25px;
        width: 25px;
    }
`;

return (
  <Wrapper>
    <div className="Logo">
      <img src="https://ipfs.near.social/ipfs/bafkreidydvsw5i7fy4emzbtmmaw3zuyjktu7nnuyimftju7tlmt6hcj6um" />
    </div>
    <h1>My Scores Passport</h1>
    <p>
      Your scores do not have the use case. Until they are integrated within
      your existing Polygon Identity that is used by numerous projects already.
    </p>
    <div>
      <Web3Connect label="connect wallet" connectLabel="connect wallet" />
    </div>
    <Widget
      src={`9f8d4bf85f6c2169fccce1deb44c95a010f6b9e682f9887d8b56546c0d5312fe/widget/PartnerLogos`}
    />
  </Wrapper>
);
