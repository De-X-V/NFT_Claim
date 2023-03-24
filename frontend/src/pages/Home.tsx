import { Button, styled } from "@mui/material";
import React from "react";
import trade from "../../public/trade.png";
import nftimg from "../../public/trading-card.png";
import theme from "../theme/Theme";
import { BsDiscord } from "react-icons/bs";

function Home() {
  function handleRequestClick() {
    alert("해당 서비스는 준비중입니다.");
  }
  return (
    <Wrap>
      <StyledTitle>NFT Claim List</StyledTitle>
      <StyledClaimList>
        <StyledImg src={trade} />

        <StyledDescript>
          <StyledDescriptTitle>
            The benefits of NFTs at a glance
          </StyledDescriptTitle>
          <StyledDescriptContent>
            Our service is designed to give you a quick, at-a-glance view of
            monthly benefits and event information, along with various
            information about NFTs. This increases the value of NFTs and makes
            them easier for more users.
          </StyledDescriptContent>
        </StyledDescript>
      </StyledClaimList>

      <StyledTitle>NFT Claim Request</StyledTitle>

      <StyledClaimRequest>
        <StyledImg src={nftimg} />

        <StyledDescript>
          <StyledDescriptTitle>
            Request to add new NFT information
          </StyledDescriptTitle>
          <StyledDescriptContent>
            When a new NFT is released, users can request that information,
            which can add new NFT information to the service. The NFT
            information provided by the users is reviewed by the operator and
            reflected on the service page, allowing all users who provide the
            NFT information to contribute to the development of the service and
            provide more accurate information.
          </StyledDescriptContent>
          <StyledRequestButton onClick={() => handleRequestClick()}>
            <StyledRequestButtonText>Claim Request </StyledRequestButtonText>
            <BsDiscord size="30px" color={theme.palette.text.primary} />
          </StyledRequestButton>
        </StyledDescript>
      </StyledClaimRequest>
    </Wrap>
  );
}

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",

  padding: "75px",
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
}));
const StyledTitle = styled("div")(({ theme }) => ({
  fontSize: "60px",
  width: "100%",
  height: "100%",
  background: theme.palette.primary.main,
}));

const StyledClaimList = styled("div")(({ theme }) => ({
  fontSize: "60px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "20px",
  background: theme.palette.secondary.main,
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
}));
const StyledDescript = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  padding: "20px",
  //background: theme.palette.primary.main,
}));
const StyledDescriptTitle = styled("div")(({ theme }) => ({
  fontSize: "40px",
  width: "100%",
  height: "100%",
  marginBottom: "20px",
  //background: theme.palette.primary.main,
}));
const StyledDescriptContent = styled("div")(({ theme }) => ({
  fontSize: "20px",
  width: "100%",
  height: "100%",
  padding: "20px",
  background: theme.palette.primary.main,
}));

const StyledClaimRequest = styled("div")(({ theme }) => ({
  fontSize: "60px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "20px",
  background: theme.palette.secondary.main,
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
}));

const StyledRequestButton = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  height: "100px",
  margin: "20px",

  borderRadius: "20px",
  border: `1px solid ${theme.palette.text.primary}}`,
  background: theme.palette.secondary.main,
}));
const StyledRequestButtonText = styled("div")(({ theme }) => ({
  fontSize: "15px",
  padding: "5px",
  color: theme.palette.text.primary,
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "300px",
  height: "300px",

  objectFit: "cover",
}));

export default Home;
