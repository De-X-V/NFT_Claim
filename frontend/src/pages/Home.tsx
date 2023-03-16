import { styled } from "@mui/material";
import React from "react";
import trade from "../../public/trade.png";
import nftimg from "../../public/trading-card.png";
import theme from "../theme/Theme";

function Home() {
  return (
    <Wrap>
      <StyledTitle>NFT Claim List</StyledTitle>
      <StyledClaimList>
        <StyledImg src={trade} />

        <StyledDescript>
          <StyledDescriptTitle>어쩌구 저쩌구 서비스 소개</StyledDescriptTitle>
          <StyledDescriptContent>
            어쩌구 저쩌구 서비스 소개 어쩌구 저쩌구 서비스 소개 어쩌구 저쩌구
            서비스 소개 어쩌구 저쩌구 서비스 소개 어쩌구 저쩌구 서비스 소개
            어쩌구 저쩌구 서비스 소개 어쩌구 저쩌구 서비스 소개 어쩌구 저쩌구
            서비스 소개
          </StyledDescriptContent>
        </StyledDescript>
      </StyledClaimList>

      <StyledTitle>NFT Claim Request</StyledTitle>

      <StyledClaimRequest>
        <StyledImg src={nftimg} />

        <StyledDescript>
          <StyledDescriptTitle>어쩌구 저쩌구 서비스 소개</StyledDescriptTitle>
          <StyledDescriptContent>
            어쩌구 저쩌구 서비스 소개 어쩌구 저쩌구 서비스 소개 어쩌구 저쩌구
            서비스 소개 어쩌구 저쩌구 서비스 소개 어쩌구 저쩌구 서비스 소개
            어쩌구 저쩌구 서비스 소개 어쩌구 저쩌구 서비스 소개 어쩌구 저쩌구
            서비스 소개
          </StyledDescriptContent>
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
  margin: "45px",

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
  width: "100%",
  height: "100%",
  padding: "20px",
  background: theme.palette.secondary.main,
}));
const StyledDescript = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  background: theme.palette.primary.main,
}));
const StyledDescriptTitle = styled("div")(({ theme }) => ({
  fontSize: "40px",
  width: "100%",
  height: "100%",
  background: theme.palette.primary.main,
}));
const StyledDescriptContent = styled("div")(({ theme }) => ({
  fontSize: "20px",
  width: "100%",
  height: "100%",
  background: theme.palette.primary.main,
}));

const StyledClaimRequest = styled("div")(({ theme }) => ({
  fontSize: "60px",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  padding: "20px",
  background: theme.palette.secondary.main,
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "300px",
  height: "300px",

  objectFit: "cover",
}));

export default Home;
