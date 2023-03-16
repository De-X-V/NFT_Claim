import { styled } from "@mui/material";
import React from "react";
import Logo from "../../public/logo.jpg";

function Footer() {
  return (
    <Wrap>
      <StyledLogo src={Logo} alt="logo" />
    </Wrap>
  );
}

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  width: "2000px",
  justifyContent: "center",
  alignItems: "center",

  height: "300px",
  background: "black",
  color: "white",
}));

const StyledLogo = styled("img")(({ theme }) => ({
  width: "200px",
  height: "200px",
}));

export default Footer;
