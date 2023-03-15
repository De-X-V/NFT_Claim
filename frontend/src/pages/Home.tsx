import { styled } from "@mui/material";
import React from "react";

function Home() {
  return (
    <Wrap>
      <StyledClaimList>NFT Claim Lists</StyledClaimList>
      <StyledClaimRequest>NFT Claim Request</StyledClaimRequest>
    </Wrap>
  );
}

const Wrap = styled("div")(({ theme }) => ({
  fontSize: "60px",
  width: "100%",
  height: "100%",
  background: "black",
  color: "white",
}));
const StyledClaimList = styled("div")(({ theme }) => ({
  fontSize: "60px",
  width: "100%",
  height: "100%",
  background: "black",
}));
const StyledClaimRequest = styled("div")(({ theme }) => ({
  fontSize: "60px",
  width: "100%",
  height: "100%",
  background: "black",
}));

export default Home;
