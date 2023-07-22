const sender = Ethers.send("eth_requestAccounts", [])[0];

State.init({
  page: "default",
});

if (!sender) State.update({ page: "default" });
if (sender && state.page === "default") State.update({ page: "score" });

if (state.page === "default") {
  return (
    <div>
      {state.page}
      <Widget src="9f8d4bf85f6c2169fccce1deb44c95a010f6b9e682f9887d8b56546c0d5312fe/widget/MainSPPage" />
    </div>
  );
}

if (state.page === "score") {
  return { sender };
}

return state.page;
