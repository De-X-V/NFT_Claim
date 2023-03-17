import { Box, styled } from "@mui/material";
import React from "react";

function Faq() {
  return (
    <Wrap>
      FAQ page
      <StyledTitle>Q. What is NFT?</StyledTitle>
      <StyledAnswer>sdfasfadsfasfsd</StyledAnswer>
      <StyledTitle>Q. What is NFT?</StyledTitle>
      <StyledAnswer>sdfasfadsfasfsd</StyledAnswer>
      <StyledTitle>Q. What is NFT?</StyledTitle>
      <StyledAnswer>sdfasfadsfasfsd</StyledAnswer>
      <StyledTitle>Q. What is NFT?</StyledTitle>
      <StyledAnswer>sdfasfadsfasfsd</StyledAnswer>
      <StyledTitle>Q. What is NFT?</StyledTitle>
      <StyledAnswer>sdfasfadsfasfsd</StyledAnswer>
      <StyledTitle>Q. What is NFT?</StyledTitle>
      <StyledAnswer>sdfasfadsfasfsd</StyledAnswer>
      <StyledTitle>Q. What is NFT?</StyledTitle>
      <StyledAnswer>sdfasfadsfasfsd</StyledAnswer>
    </Wrap>
  );
}

const Wrap = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px",
  margin: "20px",
  width: "100%",
  height: "100%",
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
}));

const StyledTitle = styled("div")(({ theme }) => ({
  fontSize: "30px",
  margin: "20px",
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
}));

const StyledAnswer = styled("div")(({ theme }) => ({
  fontSize: "20px",
  margin: "20px",
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
}));

export default Faq;
