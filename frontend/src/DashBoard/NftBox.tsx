import { styled } from "@mui/material";
import React from "react";

function NftBox({
  img,
  title,
  content,
}: {
  img: any;
  title: string;
  content: string;
}) {
  return (
    <Wrap>
      <StyledImg src={img} alt="nft" />
      <StyledBox>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>{content}</StyledContent>
      </StyledBox>
    </Wrap>
  );
}

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  fontSize: "30px",
  margin: "20px",
  width: "800px",
  height: "400px",
  background: theme.palette.secondary.main,
  color: theme.palette.text.primary,
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "400px",
  height: "400px",
  background: theme.palette.primary.main,
}));

const StyledBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  fontSize: "30px",

  margin: "20px",
  background: theme.palette.secondary.main,
  color: theme.palette.text.primary,
}));

const StyledTitle = styled("div")(({ theme }) => ({
  fontSize: "30px",

  background: theme.palette.secondary.main,
}));

const StyledContent = styled("div")(({ theme }) => ({
  fontSize: "15px",

  background: theme.palette.secondary.main,
}));

export default NftBox;
