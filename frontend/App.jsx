const sender = Ethers.send("eth_requestAccounts", [])[0];

State.init({
  page: "default",
});

const props = {
  updatePage: () => {
    State.update({
      page: "mint",
    });
  },
};

if (!sender) State.update({ page: "default" });
if (sender && state.page === "default") State.update({ page: "score" });

if (state.page === "default") {
  return (
    <div>
      <Widget src="9f8d4bf85f6c2169fccce1deb44c95a010f6b9e682f9887d8b56546c0d5312fe/widget/MainSPPage" />
    </div>
  );
}

if (state.page === "score") {
  return (
    <div
      onClick={() => {
        State.update({
          page: "mint",
        });
      }}
    >
      <Widget src="9f8d4bf85f6c2169fccce1deb44c95a010f6b9e682f9887d8b56546c0d5312fe/widget/ScorerPage" />
    </div>
  );
}

if (state.page === "mint") {
  return (
    <Widget src="9f8d4bf85f6c2169fccce1deb44c95a010f6b9e682f9887d8b56546c0d5312fe/widget/MintScore" />
  );
}

return state.page;
