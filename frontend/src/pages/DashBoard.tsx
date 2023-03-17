import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NftBox from "../DashBoard/NftBox";
import dummy1 from "../../public/dummy1.jpeg";
import dummy2 from "../../public/dummy2.jpeg";

const dummy = [
  {
    img: dummy1,
    title: "pepe1",
    content: "우리 서비스에서 볼 수 있는 모든 nft 설명 있는 페이지입니다",
  },
  {
    img: dummy2,
    title: "pepe2",
    content: "0",
  },
];

function DashBoard() {
  return (
    <Wrap>
      {dummy.map((nft, i) => (
        <NftBox key={i} img={nft.img} title={nft.title} content={nft.content} />
      ))}
    </Wrap>
  );
}

const Wrap = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "30px",
  width: "100%",
  height: "100%",
  background: theme.palette.primary.main,
  color: theme.palette.text.primary,
}));

export default DashBoard;
