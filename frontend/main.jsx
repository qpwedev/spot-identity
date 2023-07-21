const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900');

  .btn {
    border-radius: none!important;
    background-color: #2C2C2C;
    border: none;
    color: #BDFF00;
    border-radius: 0;
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

  background-color: #878787;
  align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  * {
    font-family: 'Londrina Solid', cursive;
  }

`;

return (
  <Wrapper>
    <h1>My Scores Passport</h1>
    <p>
      Your scores do not have the use case. Until they are integrated within
      your existing Polygon Identity that is used by numerous projects already.
    </p>
    <div>
      <Web3Connect label="connect wallet" connectLabel="connect wallet" />
    </div>
  </Wrapper>
);
